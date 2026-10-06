import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { LogoLockup } from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_TEL, MARK_LEGEND, PEOPLE } from "@/data/site";
import { DOMAINS } from "@/data/domains";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20 grid gap-8 md:gap-10 md:grid-cols-[minmax(18rem,24rem)_1fr] md:items-center">
          <div className="mx-auto w-full max-w-[20rem] md:max-w-none">
            <div className="rounded-lg bg-paper p-2.5 sm:p-3">
              <LogoLockup />
            </div>
            <p className="mt-3 text-[11px] leading-snug text-paper/70">{MARK_LEGEND}</p>
          </div>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Working Group · Proposed draft</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-paper">
              A proposed Standard of Care for neurofeedback.
            </h1>
            <p className="mt-6 text-lg text-paper/85 leading-relaxed">
              Ethics codes and guidelines already exist. A field-wide Standard of Care does not. This working group is
              publishing a draft so the field can adopt one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/proposal"
                className="inline-flex min-h-11 items-center rounded-md bg-paper px-5 py-2.5 text-navy no-underline font-medium"
              >
                Read the proposal
              </Link>
              <Link
                to="/standards"
                className="inline-flex min-h-11 items-center rounded-md border border-paper/40 px-5 py-2.5 text-paper no-underline"
              >
                Read the draft standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-2">
        <Card
          kicker="The gap"
          title="Ethics are not a Standard of Care"
          body="The field has ethics codes, practice guidelines, voluntary certification, equipment rules, and purchaser credentialing. None of those is a membership-ratified Standard of Care."
        />
        <Card
          kicker="The draft"
          title="Fourteen domains of practice"
          body="The working text covers license and scope, competence, consent, assessment, evidence claims, in-session presence, remote training, equipment, records, advertising, and quantitative EEG."
        />
        <Card
          kicker="The invitation"
          title="Comment on the working draft"
          body={`This is a proposal, not an adopted instrument. Email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}. Additional contacts will be posted as people consent.`}
        />
        <Card
          kicker="The structure"
          title="A voluntary compact, later"
          body="A published floor of practice would live in a nonprofit compact that people opt into. Societies could support a draft without becoming the regulator. The mark on this site is theoretical."
          to="/structure"
          linkLabel="How this would be organized"
        />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-6">
        <PhotoCarousel />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 max-w-3xl">
          <h2 className="font-serif text-2xl text-navy">Fourteen proposed domains</h2>
          <p className="mt-2 text-muted leading-relaxed">
            Each card is a one-line summary. Click a domain for the full proposed standard on the Standards page.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {DOMAINS.map((d) => (
            <Link
              key={d.id}
              to="/standards"
              hash={d.id}
              className="rounded-md border border-rule bg-surface p-4 no-underline hover:border-teal"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-[0.14em] text-gold">Domain {d.number}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-muted">Summary</p>
              </div>
              <p className="mt-1 font-medium text-navy">{d.title}</p>
              <p className="mt-2 text-sm text-muted">{d.summary}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm text-teal">
                Full standard <ArrowRight className="size-3.5" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8">
        <aside className="rounded-lg border border-rule bg-warn p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Proposed Domain 13</p>
          <h2 className="mt-2 font-serif text-2xl text-navy">Raw traces before maps</h2>
          <p className="mt-3 leading-relaxed">
            Quantitative EEG maps, z-scores, and software narratives are derived products. Before they may guide a
            protocol, a qualified reviewer inspects the original raw traces. Uploading a recording to automated
            processing software does not satisfy that review.
          </p>
          <Link to="/proposal" className="mt-4 inline-flex items-center gap-1 text-teal no-underline">
            Why this rule is proposed <ArrowRight className="size-4" />
          </Link>
        </aside>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12 text-center">
        <p className="text-sm text-muted leading-relaxed">
          {PEOPLE.map((p) => `${p.title} ${p.name}`).join(" · ")}
        </p>
        <p className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal">
            {CONTACT_EMAIL}
          </a>
          <a href={CONTACT_TEL} className="text-teal">
            {CONTACT_PHONE}
          </a>
        </p>
      </section>
    </>
  );
}

function Card({
  kicker,
  title,
  body,
  to,
  linkLabel,
}: {
  kicker: string;
  title: string;
  body: string;
  to?: "/structure";
  linkLabel?: string;
}) {
  return (
    <article className="rounded-lg border border-rule bg-surface p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-gold">{kicker}</p>
      <h2 className="mt-2 font-serif text-xl text-navy">{title}</h2>
      <p className="mt-3 text-muted leading-relaxed">{body}</p>
      {to && linkLabel ? (
        <Link to={to} className="mt-4 inline-flex items-center gap-1 text-teal no-underline">
          {linkLabel} <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </article>
  );
}
