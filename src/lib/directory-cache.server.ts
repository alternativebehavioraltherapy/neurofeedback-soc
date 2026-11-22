/**
 * Server-only sheet read. The browser never calls Google.
 * A cache hit must not call Google. Failures are not cached.
 * Apps Script is not on this path.
 *
 * Operating ceiling (see src/data/directory.ts): 5,000 published rows, 5 MB,
 * 8 second cold fetch. Past that, the next system is Postgres with the sheet
 * as import-only. This module still returns every row that arrived. It does
 * not truncate.
 */

import {
  CACHE_TTL_MS,
  FETCH_TIMEOUT_MS,
  PAGE_SIZE,
  SHEET_CSV_URL,
  ceilingFor,
  parseProviders,
  specialtyOptions,
  type DirectoryResult,
  type Provider,
} from "@/data/directory";

type MemoryCache = {
  at: number;
  providers: Provider[];
  specialties: string[];
  payloadBytes: number;
  elapsedMs: number;
  ceiling: ReturnType<typeof ceilingFor>;
};

let memory: MemoryCache | null = null;

class SheetReadError extends Error {
  payloadBytes: number | null;
  publishedCount: number | null;

  constructor(message: string, payloadBytes: number | null, publishedCount: number | null = null) {
    super(message);
    this.name = "SheetReadError";
    this.payloadBytes = payloadBytes;
    this.publishedCount = publishedCount;
  }
}

function looksLikeHtml(body: string, contentType: string | null): boolean {
  const type = (contentType ?? "").toLowerCase();
  if (type.includes("text/html") || type.includes("application/xhtml")) return true;
  const head = body.trimStart().slice(0, 80).toLowerCase();
  return head.startsWith("<!doctype") || head.startsWith("<html") || head.startsWith("<head");
}

async function fetchPublished(): Promise<MemoryCache> {
  const started = Date.now();
  const controller = new AbortController();
  // Abort at the 8 second cap. If the body arrives at or over that cap, the
  // ceiling notice is shown and the rows are kept. An abort has no body, so
  // it is an error and is not stored. Do not truncate.
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  let response: Response;
  try {
    response = await fetch(SHEET_CSV_URL, {
      signal: controller.signal,
      headers: { accept: "text/csv,text/plain;q=0.9,*/*;q=0.1" },
      redirect: "follow",
    });
  } catch (error) {
    const elapsed = Date.now() - started;
    if (error instanceof Error && error.name === "AbortError") {
      throw new SheetReadError(
        "The directory sheet did not respond within 8 seconds.",
        null,
      );
    }
    throw new SheetReadError(
      `The directory sheet could not be reached (${elapsed} ms).`,
      null,
    );
  } finally {
    clearTimeout(timer);
  }

  const elapsedMs = Date.now() - started;
  const body = await response.text();
  const payloadBytes = new TextEncoder().encode(body).byteLength;
  if (!response.ok) {
    throw new SheetReadError(
      `The directory sheet returned HTTP ${response.status}. Share it so anyone with the link can view.`,
      payloadBytes,
    );
  }
  if (looksLikeHtml(body, response.headers.get("content-type"))) {
    throw new SheetReadError(
      "The directory sheet returned a web page instead of a CSV. Share it so anyone with the link can view.",
      payloadBytes,
    );
  }

  const providers = parseProviders(body);
  return {
    at: Date.now(),
    providers,
    specialties: specialtyOptions(providers),
    payloadBytes,
    elapsedMs,
    ceiling: ceilingFor({
      publishedCount: providers.length,
      payloadBytes,
      elapsedMs,
    }),
  };
}

function present(cache: MemoryCache, preview: boolean, fromCache: boolean): DirectoryResult {
  return {
    ok: true,
    preview,
    providers: preview ? cache.providers.slice(0, PAGE_SIZE) : cache.providers,
    total: cache.providers.length,
    specialties: cache.specialties,
    ceiling: cache.ceiling,
    publishedCount: cache.providers.length,
    payloadBytes: cache.payloadBytes,
    fromCache,
  };
}

export async function loadDirectory(options: {
  reload: boolean;
  preview: boolean;
}): Promise<DirectoryResult> {
  const now = Date.now();
  if (!options.reload && memory && now - memory.at < CACHE_TTL_MS) {
    return present(memory, options.preview, true);
  }
  try {
    const next = await fetchPublished();
    memory = next;
    return present(memory, options.preview, false);
  } catch (error) {
    if (error instanceof SheetReadError) {
      return {
        ok: false,
        error: error.message,
        publishedCount: error.publishedCount,
        payloadBytes: error.payloadBytes,
      };
    }
    const message = error instanceof Error ? error.message : "The directory sheet could not be read.";
    return { ok: false, error: message, publishedCount: null, payloadBytes: null };
  }
}
