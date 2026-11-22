/**
 * Provider directory data.
 *
 * No lat/lng on a listing. Distance is ZIP to ZIP: look up each ZIP in the
 * Census centroid table and measure between those two centers. If the sheet
 * still has lat or lng columns, ignore them. Do not add them to the schema,
 * the parser, or the sort.
 *
 * Hard stop, all three must stay true or this design is finished:
 *   published rows ≤ 5,000
 *   exported CSV ≤ 5 MB
 *   a cold (cache-miss) fetch usually finishes in under 8 seconds
 * Past that, do not keep stretching Sheets. Say so in the UI. The next system
 * is Postgres, with this sheet as an import source only — not the live read
 * path. Do not implement that database here.
 *
 * Google Form responses are the live read. The export is the Form Responses 2
 * tab (first column Timestamp). A row with a display name is listed. There is
 * no status column. id is the display name plus ZIP, hyphenated. updated is
 * the form timestamp. Timestamp, the Google account email, and the agreement
 * checkbox are not shown. The form does not ask for coordinates.
 */

import { ZIP_CENTROIDS, ZIP_CENTROID_COUNT, ZIP_CENTROID_REGION } from "./zip-centroids.ts";

/** Clearly marked sheet id. Live read is the public CSV export. No Apps Script. */
export const SHEET_ID = "1DgTPmeG8H_9YDfZzKu7FRKxVOf1gS0s5XQjgBKIGCBY";

/** Form Responses 2. First column is Timestamp. Not the original directory tab. */
export const FORM_RESPONSES_GID = "1635951002";

export const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${FORM_RESPONSES_GID}`;

export const PAGE_SIZE = 40;
export const CACHE_TTL_MS = 10 * 60 * 1000;
export const MAX_PUBLISHED_ROWS = 5_000;
export const MAX_CSV_BYTES = 5 * 1024 * 1024;
export const FETCH_TIMEOUT_MS = 8_000;

export const ZIP_REGION_LABEL = ZIP_CENTROID_REGION;
export const ZIP_TABLE_COUNT = ZIP_CENTROID_COUNT;

/**
 * Controlled specialty list. Any other value found on a published row is
 * appended at runtime. No code change is required for a new sheet value.
 */
export const BASE_SPECIALTIES = [
  "Remote",
  "Infra-Low",
  "Infra-Slow",
  "Multi-Coherence Variability",
  "NeurOptimal",
  "HEG/fNIRs",
  "Synchrony",
  "Alpha-Theta",
  "Amplitude training",
  "LENS",
  "BrainPaint",
] as const;

/** Known typos and spacing variants. Not required for new values to appear. */
const SPECIALTY_ALIASES: Record<string, string> = {
  "infra low": "Infra-Low",
  infralow: "Infra-Low",
  "infra-low": "Infra-Low",
  "infra slow": "Infra-Slow",
  infraslow: "Infra-Slow",
  "infra-slow": "Infra-Slow",
  neuroptimal: "NeurOptimal",
  neurooptimal: "NeurOptimal",
  "neur optimal": "NeurOptimal",
  heg: "HEG/fNIRs",
  fnirs: "HEG/fNIRs",
  fnir: "HEG/fNIRs",
  "heg/fnirs": "HEG/fNIRs",
  "heg/fnir": "HEG/fNIRs",
  "alpha theta": "Alpha-Theta",
  alphatheta: "Alpha-Theta",
  "alpha-theta": "Alpha-Theta",
  amplitude: "Amplitude training",
  "amplitude training": "Amplitude training",
  lens: "LENS",
  brainpaint: "BrainPaint",
  "brain paint": "BrainPaint",
  remote: "Remote",
  synchrony: "Synchrony",
  "multi-coherence variability": "Multi-Coherence Variability",
  "multi coherence variability": "Multi-Coherence Variability",
  "multicoherence variability": "Multi-Coherence Variability",
};

export type Provider = {
  id: string;
  displayName: string;
  credentials: string;
  business: string;
  city: string;
  state: string;
  /** Five-digit ZIP, or empty when the sheet has none. Never a coordinate. */
  zip: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  specialties: string[];
  shortBio: string;
  updated: string;
};

export type Ceiling = {
  over: boolean;
  reasons: string[];
};

export type DirectoryOk = {
  ok: true;
  preview: boolean;
  providers: Provider[];
  total: number;
  specialties: string[];
  ceiling: Ceiling;
  publishedCount: number;
  payloadBytes: number;
  fromCache: boolean;
};

export type DirectoryErr = {
  ok: false;
  error: string;
  publishedCount: number | null;
  payloadBytes: number | null;
};

export type DirectoryResult = DirectoryOk | DirectoryErr;

export type RankedProvider = {
  provider: Provider;
  /** Miles between ZIP centers. Null when either ZIP did not resolve. */
  miles: number | null;
};

const BASE_LOOKUP = new Map(BASE_SPECIALTIES.map((name) => [name.toLowerCase(), name]));

export function canonSpecialty(raw: string): string {
  const trimmed = raw.trim().replace(/\s+/g, " ");
  if (!trimmed) return "";
  const key = trimmed.toLowerCase();
  const alias = SPECIALTY_ALIASES[key];
  if (alias) return alias;
  const known = BASE_LOOKUP.get(key);
  if (known) return known;
  return trimmed;
}

export function specialtyOptions(providers: readonly Provider[]): string[] {
  const extras: string[] = [];
  const seen = new Set<string>(BASE_SPECIALTIES.map((name) => name.toLowerCase()));
  for (const provider of providers) {
    for (const specialty of provider.specialties) {
      const key = specialty.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      extras.push(specialty);
    }
  }
  extras.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
  return [...BASE_SPECIALTIES, ...extras];
}

export function normalizeZip(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 5) return "";
  return digits.slice(0, 5);
}

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((entry) => entry.some((value) => value.trim() !== ""));
}

const HEADER_ALIASES: Record<string, string> = {
  id: "id",
  status: "status",
  display_name: "display_name",
  "display name": "display_name",
  credentials: "credentials",
  business: "business",
  "business name": "business",
  city: "city",
  state: "state",
  zip: "zip",
  address: "address",
  "street address": "address",
  phone: "phone",
  email: "email",
  website: "website",
  specialties: "specialties",
  short_bio: "short_bio",
  "short bio": "short_bio",
  updated: "updated",
  timestamp: "timestamp",
};

function headerIndex(header: string[]): Map<string, number> {
  const map = new Map<string, number>();
  header.forEach((name, index) => {
    const key = name.trim().toLowerCase();
    if (!key || key === "lat" || key === "lng" || key === "latitude" || key === "longitude") return;
    const canonical = HEADER_ALIASES[key];
    if (!canonical || map.has(canonical)) return;
    map.set(canonical, index);
  });
  return map;
}

function field(row: string[], headers: Map<string, number>, name: string): string {
  const index = headers.get(name);
  if (index === undefined) return "";
  return (row[index] ?? "").trim();
}

export function providerId(displayName: string, zip: string, explicit: string): string {
  const given = explicit.trim();
  if (given) return given;
  const slug = `${displayName} ${zip}`
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "provider";
}

export function parseProviders(csv: string): Provider[] {
  const table = parseCsv(csv);
  if (table.length === 0) return [];
  const headers = headerIndex(table[0] ?? []);
  const providers: Provider[] = [];
  for (const row of table.slice(1)) {
    const status = field(row, headers, "status").trim().toLowerCase();
    if (status && status !== "published") continue;
    const displayName = field(row, headers, "display_name");
    if (!displayName) continue;
    const specialties = field(row, headers, "specialties")
      .split(",")
      .map(canonSpecialty)
      .filter(Boolean);
    const unique: string[] = [];
    const seen = new Set<string>();
    for (const specialty of specialties) {
      const key = specialty.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push(specialty);
    }
    const zip = normalizeZip(field(row, headers, "zip"));
    providers.push({
      id: providerId(displayName, zip, field(row, headers, "id")),
      displayName,
      credentials: field(row, headers, "credentials"),
      business: field(row, headers, "business"),
      city: field(row, headers, "city"),
      state: field(row, headers, "state"),
      zip,
      address: field(row, headers, "address"),
      phone: field(row, headers, "phone"),
      email: field(row, headers, "email"),
      website: field(row, headers, "website"),
      specialties: unique,
      shortBio: field(row, headers, "short_bio"),
      updated: field(row, headers, "timestamp") || field(row, headers, "updated"),
    });
  }
  providers.sort((a, b) => a.displayName.localeCompare(b.displayName, "en", { sensitivity: "base" }));
  return providers;
}

export function locationLine(provider: Provider): string {
  const cityLine = [provider.city, [provider.state, provider.zip].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  if (!provider.address) return cityLine;
  if (!cityLine) return provider.address;
  const haystack = provider.address.toLowerCase();
  if (provider.city && haystack.includes(provider.city.toLowerCase())) return provider.address;
  return `${provider.address}, ${cityLine}`;
}

export function websiteHref(website: string): string | null {
  const value = website.trim();
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  if (/^[a-z0-9.-]+\.[a-z]{2,}([/:?#].*)?$/i.test(value)) return `https://${value}`;
  return null;
}

export function telHref(phone: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed) return null;
  const digits = trimmed.replace(/[^\d+]/g, "");
  if (digits.replace(/\D/g, "").length < 7) return null;
  return `tel:${digits}`;
}

function haversineMiles(a: readonly [number, number], b: readonly [number, number]): number {
  const earth = 3958.7613;
  const rad = (degrees: number) => (degrees * Math.PI) / 180;
  const dNorth = rad(b[0] - a[0]);
  const dEast = rad(b[1] - a[1]);
  const north1 = rad(a[0]);
  const north2 = rad(b[0]);
  const h =
    Math.sin(dNorth / 2) ** 2 +
    Math.cos(north1) * Math.cos(north2) * Math.sin(dEast / 2) ** 2;
  return 2 * earth * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function lookupZipCenter(zip: string): readonly [number, number] | null {
  const normalized = normalizeZip(zip);
  if (!normalized) return null;
  return ZIP_CENTROIDS[normalized] ?? null;
}

/**
 * Sort by distance between ZIP centers. A provider with no ZIP, or a ZIP that
 * is not in the table, stays in the list at the end with no distance. If the
 * searcher's ZIP is not in the table, keep alphabetical order.
 */
export function rankByZip(providers: readonly Provider[], searchZip: string): {
  ranked: RankedProvider[];
  outsideTable: boolean;
} {
  const alpha = [...providers].sort((a, b) =>
    a.displayName.localeCompare(b.displayName, "en", { sensitivity: "base" }),
  );
  const normalized = normalizeZip(searchZip);
  if (normalized.length !== 5) {
    return { ranked: alpha.map((provider) => ({ provider, miles: null })), outsideTable: false };
  }
  const origin = lookupZipCenter(normalized);
  if (!origin) {
    return { ranked: alpha.map((provider) => ({ provider, miles: null })), outsideTable: true };
  }
  const ranked = alpha.map((provider) => {
    const center = provider.zip ? lookupZipCenter(provider.zip) : null;
    if (!center) return { provider, miles: null as number | null };
    return { provider, miles: haversineMiles(origin, center) };
  });
  ranked.sort((a, b) => {
    if (a.miles == null && b.miles == null) {
      return a.provider.displayName.localeCompare(b.provider.displayName, "en", { sensitivity: "base" });
    }
    if (a.miles == null) return 1;
    if (b.miles == null) return -1;
    if (a.miles !== b.miles) return a.miles - b.miles;
    return a.provider.displayName.localeCompare(b.provider.displayName, "en", { sensitivity: "base" });
  });
  return { ranked, outsideTable: false };
}

export function formatMiles(miles: number): string {
  if (miles < 0.5) return "Under 1 mile";
  if (miles < 10) return `About ${miles.toFixed(1)} miles`;
  return `About ${Math.round(miles)} miles`;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function ceilingFor(input: {
  publishedCount: number;
  payloadBytes: number;
  elapsedMs: number;
}): Ceiling {
  const reasons: string[] = [];
  if (input.publishedCount > MAX_PUBLISHED_ROWS) {
    reasons.push(`${input.publishedCount.toLocaleString("en-US")} published rows, over the ${MAX_PUBLISHED_ROWS.toLocaleString("en-US")} row cap.`);
  }
  if (input.payloadBytes > MAX_CSV_BYTES) {
    reasons.push(`Sheet export is ${formatBytes(input.payloadBytes)}, over the 5 MB cap.`);
  }
  if (input.elapsedMs >= FETCH_TIMEOUT_MS) {
    reasons.push(`Cold fetch took ${(input.elapsedMs / 1000).toFixed(1)} seconds, over the 8 second cap.`);
  }
  return { over: reasons.length > 0, reasons };
}
