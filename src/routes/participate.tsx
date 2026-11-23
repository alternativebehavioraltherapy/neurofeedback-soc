import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/layout/SiteShell";
import { AGREEMENT_URL, DIRECTORY_FORM_URL, SEAL_DOWNLOAD_NAME, SEAL_SRC } from "@/data/site";

export const Route = createFileRoute("/participate")({
  head: () => ({
    meta: [
      { title: "Agree to the draft standards — SoC Working Group" },
      {
        name: "description",
        content:
          "Sign the agreement, apply to the directory, and download the SoC seal. Use is limited to people who sign, follow the draft, and are listed.",
      },
    ],
  }),
  component: Participate,
});

function Participate() {
  return (
    <>
      <PageHeader
        kicker="Voluntary agreement"
        title="Agree to the draft standards"
        lede="Three steps. Sign the agreement first, then apply to be listed. The seal is for people who have signed, follow the draft, and appear in the directory. It is not a license, not a BCIA or IQCB credential, and not society endorsement."
      />
      <Prose>
        <ol className="space-y-6 list-none p-0">
          <li className="rounded-lg border border-rule bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">Step 1 · required first</p>
            <h2 className="mt-2 font-serif text-2xl text-navy">Sign the agreement</h2>
            <p className="mt-3">
              The agreement is an e-signature. It is a voluntary statement that you will follow the proposed standards.
              It is not membership in a society, and it is not a certification.
            </p>
            <p className="mt-3">
              Sign this before the directory form. The form also links to the same agreement, but the signature comes
              first.
            </p>
            <a
              href={AGREEMENT_URL}
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-2.5 text-paper no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Sign the agreement
            </a>
          </li>
          <li className="rounded-lg border border-rule bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">Step 2 · after you have signed</p>
            <h2 className="mt-2 font-serif text-2xl text-navy">Apply to the directory</h2>
            <p className="mt-3">
              The Google Form asks for the listing the directory shows: name, credentials, practice, location, and
              specialties. A completed application with a display name is added to the beta list.
            </p>
            <p className="mt-3">
              A listing lets colleagues find you. It is not an endorsement, not a statement about results, and not a
              complete directory.
            </p>
            <a
              href={DIRECTORY_FORM_URL}
              className="mt-4 inline-flex min-h-11 items-center rounded-md border border-navy px-5 py-2.5 text-navy no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Open the directory form
            </a>
          </li>
          <li className="rounded-lg border border-rule bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">Step 3 · when you are listed</p>
            <h2 className="mt-2 font-serif text-2xl text-navy">Download the seal</h2>
            <p className="mt-3">
              The seal is copyrighted. You may use this PNG only if all three are true: you signed the agreement, you
              follow the draft standards, and you are listed in the directory.
            </p>
            <div className="mt-5 max-w-xs">
              <img
                src={SEAL_SRC}
                alt="SoC seal: a profile, brain wave, and shield, with the words Standards of Care in Neurofeedback"
                className="mx-auto w-full"
              />
            </div>
            <a
              href={SEAL_SRC}
              download={SEAL_DOWNLOAD_NAME}
              className="mt-4 inline-flex min-h-11 items-center rounded-md bg-navy px-5 py-2.5 text-paper no-underline"
            >
              Download the seal (PNG)
            </a>
            <h3 className="mt-6 font-serif text-xl text-navy">How to use it</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Use it only while you remain listed and you continue to follow the draft.</li>
              <li>If you are removed from the directory, or you stop following the standards, stop using the seal.</li>
              <li>Do not alter the artwork, add “certified,” or pair it with another organization’s logo as if that organization issued it.</li>
              <li>Do not describe it as a license, a BCIA credential, an IQCB credential, or society endorsement.</li>
              <li>The working group may ask anyone to stop using it.</li>
            </ul>
          </li>
        </ol>
        <p>
          Read the text you are agreeing to on the <Link to="/standards">Standards</Link> page. See who is listed on the{" "}
          <Link to="/directory">directory</Link>.
        </p>
      </Prose>
    </>
  );
}
