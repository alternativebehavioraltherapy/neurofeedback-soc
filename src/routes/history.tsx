import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Prose } from "@/components/layout/SiteShell";
import { CHRONOLOGY, HISTORY_ROWS } from "@/data/history";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [{ title: "History of practice standards — SoC Working Group" }],
  }),
  component: History,
});

const FILTERS = ["All", "Position papers", "Ethics & guidelines", "Certification", "Equipment & law", "Research"] as const;

function bucket(type: string): (typeof FILTERS)[number] {
  const t = type.toLowerCase();
  if (t.includes("position") || t.includes("journal") || t.includes("call for")) return "Position papers";
  if (t.includes("ethics") || t.includes("guideline") || t.includes("society page") || t.includes("association"))
    return "Ethics & guidelines";
  if (t.includes("certif") || t.includes("credential")) return "Certification";
  if (t.includes("equipment") || t.includes("device") || t.includes("law") || t.includes("payer")) return "Equipment & law";
  if (t.includes("research") || t.includes("advocacy")) return "Research";
  return "Ethics & guidelines";
}

function History() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const rows = useMemo(
    () => HISTORY_ROWS.filter((r) => filter === "All" || bucket(r.type) === filter),
    [filter],
  );

  return (
    <>
      <PageHeader
        kicker="History"
        title="History of practice standards in neurofeedback"
        lede="Ethics, guidelines, certification, equipment rules, device law, and payer rules are different instruments. None of them is a field-wide Standard of Care."
      />

      <Prose>
        <h2 className="font-serif text-2xl text-navy">How to read this history</h2>
        <p>
          Neurofeedback has ethics codes, practice guidelines, voluntary certification, equipment-documentation rules,
          device classifications, and purchaser credentialing. It does not have a single, field-wide, membership-ratified
          Standards of Care. The table below labels each document so later public copy cannot treat all of them as the
          same instrument.
        </p>
        <p>
          The ISNR Board accepted the 2011 Hammond et al. paper as a position paper. Later society materials emphasize
          ethics principles and Guidelines for Practice rather than a voted Standards of Care. Both facts stand. It is not
          accurate to write that ISNR “rejected” the 2011 paper. That paper was published in 2011, not 2014.
        </p>
      </Prose>

      <section className="mx-auto max-w-3xl px-4 pb-8">
        <h2 className="font-serif text-2xl text-navy mb-4">Chronology</h2>
        <ol className="space-y-5">
          {CHRONOLOGY.map((item) => (
            <li key={item.year} className="grid grid-cols-[5.5rem_1fr] gap-4">
              <span className="text-gold text-sm font-medium pt-0.5">{item.year}</span>
              <p className="text-ink leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="font-serif text-2xl text-navy mb-4">Source table</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                f === filter
                  ? "rounded-full bg-navy text-paper px-3 py-1.5 text-sm"
                  : "rounded-full border border-rule px-3 py-1.5 text-sm text-navy"
              }
            >
              {f}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto border border-rule rounded-lg bg-surface">
          <table className="min-w-[52rem] w-full text-sm">
            <thead className="bg-navy text-paper">
              <tr>
                <th className="text-left font-medium px-3 py-3 w-[22%]">Source</th>
                <th className="text-left font-medium px-3 py-3 w-[14%]">Type</th>
                <th className="text-left font-medium px-3 py-3">What it is</th>
                <th className="text-left font-medium px-3 py-3">What it is not</th>
                <th className="text-left font-medium px-3 py-3 w-[16%]">Link</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.source} className="border-t border-rule align-top">
                  <td className="px-3 py-3">{row.source}</td>
                  <td className="px-3 py-3 text-teal">{row.type}</td>
                  <td className="px-3 py-3">{row.what}</td>
                  <td className="px-3 py-3 text-muted">{row.not}</td>
                  <td className="px-3 py-3">
                    {row.links.length === 0 ? (
                      <span className="text-muted">—</span>
                    ) : (
                      <ul className="space-y-1">
                        {row.links.map((l) => (
                          <li key={l.href}>
                            <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-teal underline">
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="mt-6 rounded-md bg-warn border border-rule px-4 py-3 max-w-3xl">
          <strong className="text-navy">The empty cell remains.</strong> No document above is a single, field-wide,
          membership-ratified Standards of Care. That absence is why this working group exists.
        </aside>
      </section>
    </>
  );
}
