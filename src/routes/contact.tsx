import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/SiteShell";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_TEL } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact — SoC Working Group" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Email or call the working group"
        lede="These are the present contacts, via Joshua Moore’s clinic. Additional emails and numbers will be added as people consent."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group rounded-lg border border-rule bg-surface p-6 no-underline hover:border-teal"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-md bg-navy text-paper">
            <Mail className="size-5" />
          </span>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">Email</p>
          <p className="mt-1 font-serif text-lg text-navy">{CONTACT_EMAIL}</p>
          <p className="mt-3 text-sm text-muted">Opens your mail app. Not a request for clinical care.</p>
        </a>
        <a
          href={CONTACT_TEL}
          className="group rounded-lg border border-rule bg-surface p-6 no-underline hover:border-teal"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-md bg-navy text-paper">
            <Phone className="size-5" />
          </span>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">Phone</p>
          <p className="mt-1 font-serif text-xl text-navy">{CONTACT_PHONE}</p>
          <p className="mt-3 text-sm text-muted">Working-group line. Additional numbers later.</p>
        </a>
      </div>
      <p className="mx-auto max-w-3xl px-4 pb-16 text-sm text-muted leading-relaxed">
        This site is the working-group proposal. It is not the clinic website of Alternative Behavioral Therapy.
      </p>
    </>
  );
}
