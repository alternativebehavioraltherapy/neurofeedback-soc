import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/layout/SiteShell";
import { LogoLockup } from "@/components/Logo";
import { MARK_LEGEND } from "@/data/site";

export const Route = createFileRoute("/structure")({
  head: () => ({
    meta: [{ title: "How this draft would be organized — SoC Working Group" }],
  }),
  component: Structure,
});

function Structure() {
  return (
    <>
      <PageHeader
        kicker="Working draft · thought experiment for a future committee"
        title="How this draft would be organized"
        lede="A published Standard of Care needs a home that can hold the text, take comment, and — only if a committee later chooses — license a participant mark. It should not try to regulate clinics that never agreed. Nothing on this page forms an entity."
      />
      <Prose>
        <div className="max-w-[14rem] rounded-lg border border-rule bg-surface p-4">
          <LogoLockup />
        </div>
        <p className="text-sm text-muted leading-snug">{MARK_LEGEND}</p>

        <h2 className="font-serif text-2xl text-navy pt-4">1. What this site is</h2>
        <p>
          A working-group proposal. Not a license. Not BCIA. Not a society. Not an adopted instrument. Not a nonprofit
          already in operation.
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">2. Why structure matters</h2>
        <p>
          Ethics codes bind members. Certification is voluntary. Neither is a field-wide Standard of Care. If these
          Essential Practice Standards are worth keeping, they need an owner that is not also trying to be the
          certification police.
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">3. Recommended stack (for later counsel, not filed)</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Public body: a nonprofit corporation. Either a 501(c)(3) educational standards institute or a 501(c)(6)
            professional compact.
          </li>
          <li>Optional: a nonprofit-owned LLC only to hold the mark.</li>
          <li>
            Not recommended: a clinician-owned LLC that invoices clinics; annual liquidated damages; a small-claims
            collection calendar.
          </li>
        </ul>

        <h2 className="font-serif text-2xl text-navy pt-4">4. Voluntary compact, not field-wide police power</h2>
        <p>
          People and clinics would opt in by agreement. Signatories could display a participant mark only while in good
          standing.
        </p>
        <p>Private remedies would be: written warning; required correction; suspension or withdrawal of a public listing; withdrawal of the mark.</p>
        <p>
          Clinical incompetence, unlicensed practice, and patient harm would still be referred to the state board that
          already has jurisdiction.
        </p>
        <p>
          If a contract is later written, disputes about the agreement and the mark could go to mediation and then
          arbitration. That clause would not waive licensing-board complaints or patient claims.
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">
          5. How societies could hold support without adopting-and-enforcing
        </h2>
        <p>
          AAPB, ISNR, and BCIA are not asked to investigate clinics that decline to sign, and this draft is not a
          condition of their membership or of BCIA certification.
        </p>
        <p>Support, if a later board chooses any of it, could climb this ladder:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Take notice / list the draft as a commentable resource</li>
          <li>Affirmation of value</li>
          <li>Continuing education</li>
          <li>A statement supporting a voluntary floor of practice</li>
          <li>Formal endorsement after an open review</li>
          <li>Dual listing: existing credentials remain distinct from any future participant mark</li>
          <li>Liaison on later revisions</li>
        </ol>
        <aside className="rounded-md bg-warn border border-rule px-4 py-3">
          Do not display ISNR, AAPB, or BCIA logos here as endorsements. They have not adopted this draft.
        </aside>

        <h2 className="font-serif text-2xl text-navy pt-4">6. What the theoretical seal on this site would mean</h2>
        <p>
          The shield / brain / SoC mark is a thought-experiment participant seal. It exists so a committee can see the
          idea.
        </p>
        <p>
          Honest later claim, if a compact is formed: “Participant — has agreed to the Essential Practice Standards
          (working draft).”
        </p>
        <p>
          Not allowed then or now: “Board certified.” “Licensed by this group.” “BCIA equivalent.” “ISNR approved.”
          “Guaranteed clinical outcome.”
        </p>
        <p>
          The mark is not being issued. No clinic should copy it onto marketing as proof of certification.
        </p>

        <h2 className="font-serif text-2xl text-navy pt-4">7. What we are asking a committee</h2>
        <p>
          Comment on the draft standards. Decide later, with counsel, whether a nonprofit compact and a licensed mark are
          worth forming. Do not treat this page as formation papers.
        </p>
        <p>
          <Link to="/proposal">Return to the proposal</Link>
          {" · "}
          <Link to="/standards">Read the draft standards</Link>
        </p>
      </Prose>
    </>
  );
}
