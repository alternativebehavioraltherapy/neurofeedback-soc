import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/SiteShell";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_TEL, PEOPLE } from "@/data/site";

export const Route = createFileRoute("/working-group")({
  head: () => ({
    meta: [{ title: "Working group — SoC Working Group" }],
  }),
  component: WorkingGroup,
});

function WorkingGroup() {
  return (
    <>
      <PageHeader
        kicker="People"
        title="Working group"
        lede="This project was initially headed by Dr. Gary J. Schummer. It is a working group, not a licensing body. Photographs and longer biographies will be added."
      />
      <p className="mx-auto max-w-5xl px-4 pt-6 text-muted leading-relaxed">
        How a later compact might be organized is sketched on the{" "}
        <Link to="/structure">Structure</Link> page. No entity has been formed.
      </p>
      <div className="mx-auto max-w-5xl px-4 py-10 grid gap-4 md:grid-cols-3">
        {PEOPLE.map((p) => (
          <article key={p.name} className="rounded-lg border border-rule bg-surface p-6">
            <div
              className="size-16 rounded-full bg-navy text-paper font-serif text-xl flex items-center justify-center"
              aria-hidden
            >
              {p.initials}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">{p.title}</p>
            <h2 className="mt-1 font-serif text-xl text-navy">{p.name}</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">{p.line}</p>
          </article>
        ))}
        <article className="rounded-lg border border-dashed border-rule p-6 md:col-span-3">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Additional members</p>
          <p className="mt-2 text-muted">Names, roles, and photographs will be published here later.</p>
        </article>
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-12">
        <aside className="rounded-lg bg-paper-2 border border-rule p-6">
          <h2 className="font-serif text-xl text-navy">Comment on the draft</h2>
          <p className="mt-2 text-muted">
            This working group invites comment on the draft. Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {" "}or call{" "}
            <a href={CONTACT_TEL}>{CONTACT_PHONE}</a>.
          </p>
          <Link to="/contact" className="mt-4 inline-block text-teal">
            Contact page
          </Link>
        </aside>
      </div>
    </>
  );
}
