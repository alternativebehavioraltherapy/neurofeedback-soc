import { createFileRoute } from "@tanstack/react-router";
import { Blocks } from "@/components/Blocks";
import { PageHeader } from "@/components/layout/SiteShell";
import { SECTIONS, PURPOSE, SCOPE, CLOSING } from "@/data/standards";

export const Route = createFileRoute("/standards")({
  head: () => ({
    meta: [{ title: "Essential Practice Standards — working draft" }],
  }),
  component: Standards,
});

function Standards() {
  return (
    <>
      <PageHeader
        kicker="Working draft"
        title="Essential Practice Standards for Neurofeedback"
        lede="Working draft proposed by the Standards of Care for Neurofeedback Working Group. This page is the proposed public text. It is not adopted law or society policy."
      />

      <div className="mx-auto max-w-6xl px-4 py-8 lg:grid lg:grid-cols-[220px_minmax(0,42rem)] lg:gap-10">
        <nav className="mb-8 lg:mb-0 lg:sticky lg:top-24 self-start" aria-label="Domains">
          <p className="text-xs uppercase tracking-[0.16em] text-gold mb-3">Jump to</p>
          <ol className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {SECTIONS.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-navy no-underline hover:bg-paper-2"
                >
                  {s.number}. {s.title}
                </a>
              </li>
            ))}
          </ol>
          <a
            className="mt-4 inline-flex min-h-11 items-center rounded-md bg-navy px-4 py-2 text-sm text-paper no-underline"
            href="/docs/Essential_Practice_Standards_for_Neurofeedback.docx"
            download
          >
            Download the .docx
          </a>
        </nav>

        <article className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">Purpose</h2>
            <Blocks blocks={PURPOSE} />
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">Scope</h2>
            <Blocks blocks={SCOPE} />
          </section>
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="font-serif text-2xl text-navy mb-4">
                {section.number}. {section.title}
              </h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">Duties that run through every standard</h2>
            <Blocks blocks={CLOSING} />
          </section>
        </article>
      </div>
    </>
  );
}
