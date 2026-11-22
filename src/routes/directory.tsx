import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/SiteShell";
import {
  PAGE_SIZE,
  ZIP_REGION_LABEL,
  ZIP_TABLE_COUNT,
  formatBytes,
  formatMiles,
  locationLine,
  rankByZip,
  telHref,
  websiteHref,
  type DirectoryResult,
  type Provider,
} from "@/data/directory";
import { fetchDirectory } from "@/lib/directory.functions";

export const Route = createFileRoute("/directory")({
  loader: () => fetchDirectory({ data: { preview: true, reload: false } }),
  head: () => ({
    meta: [
      { title: "Provider directory (beta) — SoC Working Group" },
      {
        name: "description",
        content:
          "A beta networking and referral list. Not a clinic and not a complete directory.",
      },
    ],
  }),
  component: DirectoryPage,
});

function DirectoryPage() {
  const initial = Route.useLoaderData();
  const [result, setResult] = useState<DirectoryResult>(initial);
  const [full, setFull] = useState<Provider[] | null>(
    initial.ok && !initial.preview ? initial.providers : null,
  );
  const [loadingFull, setLoadingFull] = useState(initial.ok);
  const [fullError, setFullError] = useState<string | null>(null);
  const [reloading, setReloading] = useState(false);
  const [specialty, setSpecialty] = useState("all");
  const [zip, setZip] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    let cancelled = false;
    if (!initial.ok) {
      setLoadingFull(false);
      return;
    }
    fetchDirectory({ data: { preview: false, reload: false } })
      .then((next) => {
        if (cancelled) return;
        setResult(next);
        if (next.ok) {
          setFull(next.providers);
          setFullError(null);
        }
        setLoadingFull(false);
      })
      .catch(() => {
        if (cancelled) return;
        setFullError("The full list did not load. Use Reload to try again.");
        setLoadingFull(false);
      });
    return () => {
      cancelled = true;
    };
  }, [initial.ok]);

  const source = full ?? (result.ok ? result.providers : []);
  const specialties = result.ok ? result.specialties : [];

  const ranked = useMemo(() => {
    const filtered =
      specialty === "all"
        ? source
        : source.filter((provider) =>
            provider.specialties.some((item) => item.toLowerCase() === specialty.toLowerCase()),
          );
    return rankByZip(filtered, zip);
  }, [source, specialty, zip]);

  const shown = ranked.ranked.slice(0, visible);
  const filtersReady = full !== null;

  function onSpecialty(next: string) {
    setSpecialty(next);
    setVisible(PAGE_SIZE);
  }

  function onZip(next: string) {
    setZip(next.replace(/\D/g, "").slice(0, 5));
    setVisible(PAGE_SIZE);
  }

  async function reload() {
    setReloading(true);
    try {
      const next = await fetchDirectory({ data: { preview: false, reload: true } });
      setResult(next);
      if (next.ok) {
        setFull(next.providers);
        setFullError(null);
        setVisible(PAGE_SIZE);
      }
    } catch {
      setResult({
        ok: false,
        error: "The directory could not be reloaded.",
        publishedCount: result.ok ? result.publishedCount : null,
        payloadBytes: result.ok ? result.payloadBytes : null,
      });
    } finally {
      setReloading(false);
    }
  }

  const empty = result.ok && result.total === 0 && !loadingFull;
  const failed = !result.ok;

  return (
    <>
      <PageHeader
        kicker="Beta · networking and referral list"
        title="Provider directory"
        lede="People who asked to be listed, so colleagues can find one another. This is not a clinic. It is not a complete list. A listing is not an endorsement, a certification, or a statement about results."
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        {result.ok && result.ceiling.over ? (
          <div className="mb-6 rounded-md border border-gold/40 bg-warn px-4 py-3 text-sm text-ink" role="status">
            <p className="font-medium text-navy">
              This directory is past the Google Sheet operating limit and needs a database before it grows further.
            </p>
            <ul className="mt-2 list-disc pl-5 text-muted">
              {result.ceiling.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="rounded-lg border border-rule bg-surface p-4 sm:p-5">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,16rem)_minmax(0,12rem)_auto] sm:items-end">
            <label className="block text-sm text-navy">
              Specialty
              <select
                className="mt-1 block h-11 w-full rounded-md border border-rule bg-paper px-3 text-ink"
                value={specialty}
                disabled={!filtersReady}
                onChange={(event) => onSpecialty(event.target.value)}
              >
                <option value="all">All specialties</option>
                {specialties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-navy">
              Sort by ZIP
              <input
                className="mt-1 block h-11 w-full rounded-md border border-rule bg-paper px-3 text-ink"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                placeholder="5-digit ZIP"
                value={zip}
                disabled={!filtersReady}
                onChange={(event) => onZip(event.target.value)}
                aria-describedby="zip-distance-note"
              />
            </label>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md border border-navy px-4 text-sm text-navy hover:bg-paper-2 disabled:opacity-60"
              onClick={reload}
              disabled={reloading}
            >
              {reloading ? "Reloading…" : "Reload"}
            </button>
          </div>
          <p id="zip-distance-note" className="mt-4 text-sm leading-relaxed text-muted">
            Distances are approximate ZIP code centers, not street addresses. The table has{" "}
            {ZIP_TABLE_COUNT.toLocaleString("en-US")} codes for {ZIP_REGION_LABEL}. A ZIP outside that
            table stays in alphabetical order, with no distance.
          </p>
          {ranked.outsideTable ? (
            <p className="mt-2 text-sm text-navy" role="status">
              {zip} is not in the ZIP table. The list stays alphabetical.
            </p>
          ) : null}
          {loadingFull ? (
            <p className="mt-2 text-sm text-muted">Loading the full list. Filters open when it arrives.</p>
          ) : null}
          {fullError ? (
            <p className="mt-2 text-sm text-navy" role="status">
              {fullError}
            </p>
          ) : null}
        </div>

        {failed ? (
          <DirectoryProblem
            title="The directory could not be loaded."
            detail={result.error}
            publishedCount={result.publishedCount}
            payloadBytes={result.payloadBytes}
          />
        ) : null}

        {empty ? (
          <DirectoryProblem
            title="No published listings yet."
            detail="This list is not a complete directory. A completed application with a display name appears here."
            publishedCount={result.publishedCount}
            payloadBytes={result.payloadBytes}
          />
        ) : null}

        {!failed && !empty && !loadingFull && result.ok && result.total > 0 && ranked.ranked.length === 0 ? (
          <p className="mt-6 text-sm text-navy">No listings match that filter.</p>
        ) : null}

        {!failed && !empty && ranked.ranked.length > 0 ? (
          <>
            <p className="mt-6 text-sm text-muted">
              Showing {shown.length} of {ranked.ranked.length} listings. This is not a complete directory.
            </p>
            <ul className="mt-4 grid gap-4">
              {shown.map(({ provider, miles }, index) => (
                <li key={`${provider.id || provider.displayName}-${index}`}>
                  <ProviderCard provider={provider} miles={miles} />
                </li>
              ))}
            </ul>
            {visible < ranked.ranked.length ? (
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-navy px-5 text-sm text-paper hover:bg-navy-deep"
                  onClick={() => setVisible((count) => count + PAGE_SIZE)}
                >
                  Load more
                </button>
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
}

function DirectoryProblem({
  title,
  detail,
  publishedCount,
  payloadBytes,
}: {
  title: string;
  detail: string;
  publishedCount: number | null;
  payloadBytes: number | null;
}) {
  return (
    <div className="mt-6 rounded-lg border border-rule bg-paper-2 px-5 py-6" role="status">
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-muted">{detail}</p>
      <p className="mt-4 text-sm text-navy">
        Published count: {publishedCount == null ? "unavailable" : publishedCount.toLocaleString("en-US")}.
        Approximate sheet size: {payloadBytes == null ? "unavailable" : formatBytes(payloadBytes)}.
      </p>
    </div>
  );
}

function ProviderCard({ provider, miles }: { provider: Provider; miles: number | null }) {
  const place = locationLine(provider);
  const phone = telHref(provider.phone);
  const site = websiteHref(provider.website);
  return (
    <article className="rounded-lg border border-rule bg-surface p-5">
      <h2 className="font-serif text-2xl text-navy leading-tight">{provider.displayName}</h2>
      {provider.credentials ? <p className="mt-1 text-sm text-muted">{provider.credentials}</p> : null}
      {provider.business ? <p className="mt-1 text-sm text-teal">{provider.business}</p> : null}
      {place ? <p className="mt-3 text-sm text-ink">{place}</p> : null}
      {miles != null ? <p className="mt-1 text-sm text-navy">{formatMiles(miles)}</p> : null}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {phone ? (
          <a href={phone} className="text-teal">
            {provider.phone}
          </a>
        ) : null}
        {provider.email ? (
          <a href={`mailto:${provider.email}`} className="text-teal">
            {provider.email}
          </a>
        ) : null}
        {site ? (
          <a href={site} className="text-teal" target="_blank" rel="noreferrer">
            Website
          </a>
        ) : provider.website ? (
          <span className="text-muted">{provider.website}</span>
        ) : null}
      </div>
      {provider.specialties.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {provider.specialties.map((specialty) => (
            <li key={specialty} className="rounded-sm bg-paper-2 px-2 py-0.5 text-xs text-navy">
              {specialty}
            </li>
          ))}
        </ul>
      ) : null}
      {provider.shortBio ? <p className="mt-4 text-sm leading-relaxed text-ink">{provider.shortBio}</p> : null}
    </article>
  );
}
