import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/layout/SiteShell";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_TEL } from "@/data/site";
import { DOMAINS } from "@/data/domains";

export const Route = createFileRoute("/proposal")({
  head: () => ({
    meta: [{ title: "The proposal — SoC Working Group" }],
  }),
  component: Proposal,
});

const CHANGES: { now: string; next: string }[] = [
  {
    now: "Maps from automated qEEG software accepted without raw-trace review",
    next: "Raw traces reviewed before maps may set a protocol",
  },
  {
    now: "Introductory workshop treated as qualification",
    next: "Structured training, mentoring, and supervision before independent practice",
  },
  {
    now: "Certification spoken of as a license",
    next: "Certification described accurately; treatment of diagnosed conditions stays inside a license or documented supervision",
  },
  {
    now: "Experimental protocols advertised as established",
    next: "Condition-by-condition honesty; experimental work labeled and consented",
  },
  {
    now: "Unsupervised multi-station or home programs for diagnosed conditions",
    next: "A responsible practitioner present or accountable; home training is the exception, not the default",
  },
];

function Proposal() {
  return (
    <>
      <PageHeader
        kicker="The proposal"
        title="Publish a commentable Standard of Care"
        lede="A shared floor of competence, safety, and honest representation — not a new license, and not a replacement for existing ethics codes."
      />
      <Prose>
        <h2 className="font-serif text-2xl text-navy">What we are proposing</h2>
        <p>
          We propose that Essential Practice Standards for Neurofeedback be published as a public, commentable Standard
          of Care. The draft describes a proposed floor that adopters would agree to. It is not the legal standard of
          care, and it does not bind people who have not adopted it. It does not create a license. It does
          not replace the ethics code of a provider’s primary profession.
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">Why it is needed</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clients cannot tell a competent service from an automated pipeline or an unlicensed shop.</li>
          <li>Other health professions look for a Standard of Care and find ethics codes and voluntary certification instead.</li>
          <li>
            A 2011 ISNR Board-accepted position paper described practice standards, but the field did not adopt a
            membership-ratified Standard of Care. Later society materials emphasize ethics principles and Guidelines for
            Practice.
          </li>
          <li>Certification is valuable and voluntary. It is not a license and does not bind non-certificants.</li>
        </ul>

        <h2 className="font-serif text-2xl text-navy pt-4">What would change if these standards were adopted</h2>
      </Prose>

      <div className="mx-auto max-w-3xl px-4">
        <div className="overflow-x-auto border border-rule rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-navy text-paper">
              <tr>
                <th className="text-left font-medium px-4 py-3 w-1/2">Now</th>
                <th className="text-left font-medium px-4 py-3 w-1/2">Proposed floor</th>
              </tr>
            </thead>
            <tbody>
              {CHANGES.map((row) => (
                <tr key={row.now} className="border-t border-rule align-top">
                  <td className="px-4 py-3 text-muted">{row.now}</td>
                  <td className="px-4 py-3 text-ink">{row.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Prose>
        <h2 className="font-serif text-2xl text-navy">The 14 proposed domains</h2>
        <ol className="space-y-3">
          {DOMAINS.map((d) => (
            <li key={d.id}>
              <Link to="/standards" hash={d.id} className="font-medium text-navy no-underline hover:underline">
                {d.number}. {d.title}
              </Link>
              <span className="text-muted"> — {d.summary}</span>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl text-navy pt-4">Domain 13 in plain language</h2>
        <p>
          Quantitative EEG maps, z-scores, source images, and software narratives are derived products. They are only as
          valid as the raw recording.
        </p>
        <p>
          Before any quantitative output is accepted for clinical use, a qualified reviewer inspects the original raw
          traces, in more than one montage, and documents artifact, drowsiness, electrode and reference problems, and
          spike-like or paroxysmal events.
        </p>
        <p>
          Uploading a recording to automated processing software or a remote mapping service does not satisfy that review
          unless the original traces are independently inspected and the processed output is checked against those traces.
        </p>
        <p>
          A map hotspot that cannot be seen in the raw tracing is not used as a training target.
        </p>
        <p>
          This proposed rule exists because muscle can appear as excess fast activity, eye movement as frontal slowing,
          drowsiness as a false waking baseline, and automated rejection can strip real events or leave artifact in.
        </p>
        <aside className="rounded-md bg-warn border border-rule px-4 py-3">
          Domain 13 is a proposed requirement of this draft. It is not presented here as an existing society rule.
        </aside>

        <h2 className="font-serif text-2xl text-navy pt-4">What this proposal is not</h2>
        <p>
          Not a license. Not a claim of society adoption. Not a treatment-efficacy argument. Not a clinic advertisement.
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">How this would be organized</h2>
        <p>
          This site is a draft for committee discussion. If the field later wants a home for these standards, the working
          idea is:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            A nonprofit compact (educational 501(c)(3) or professional 501(c)(6) — counsel would choose), not a
            clinician-owned collection company.
          </li>
          <li>Voluntary opt-in. Non-signatories would not be bound.</li>
          <li>
            Private remedies limited to warning, correction, listing, and any future mark — not fines designed to force
            clinics into small claims.
          </li>
          <li>Clinical harm would still go to a state licensing board.</li>
          <li>
            Societies such as AAPB, ISNR, and BCIA would be asked for support and comment, not to police non-signatories.
          </li>
        </ul>
        <p>
          <Link to="/structure">Full note on structure</Link>
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">How to respond</h2>
        <p>
          Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          {" "}or call{" "}
          <a href={CONTACT_TEL}>{CONTACT_PHONE}</a>
          . Additional working-group contacts will be posted as people consent.
          These contacts are for comments on the draft, not requests for clinical care.
        </p>
      </Prose>
    </>
  );
}
