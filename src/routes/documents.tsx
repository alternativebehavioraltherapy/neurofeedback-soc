import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/layout/SiteShell";
import { DOCUMENTS } from "@/data/site";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [{ title: "Documents — SoC Working Group" }],
  }),
  component: Documents,
});

function Documents() {
  return (
    <>
      <PageHeader
        kicker="Library"
        title="Documents"
        lede="Download the proposed standards, the history and source map, and the 2025 IQCB documents stored with this site. The IQCB files are prior instruments. This working group did not write them and does not adopt them."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 grid gap-4">
        {DOCUMENTS.map((doc) => (
          <article key={doc.href} className="rounded-lg border border-rule bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">{doc.label}</p>
            <h2 className="mt-2 font-serif text-xl text-navy">{doc.title}</h2>
            <p className="mt-2 text-muted leading-relaxed">{doc.role}</p>
            <a
              href={doc.href}
              download={doc.filename}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md bg-navy px-4 py-2 text-paper no-underline"
            >
              <Download className="size-4" />
              Download {doc.filename.endsWith(".pdf") ? "PDF" : "Word file"}
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
