import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoMark, LogoPlate } from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_TEL, MARK_LEGEND, NAV, SITE_NAME, SITE_SHORT } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <DraftBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function DraftBanner() {
  return (
    <div className="bg-navy text-paper text-center text-xs sm:text-sm tracking-wide px-4 py-2">
      <p>Proposed standards — working draft. Not a society-ratified Standard of Care.</p>
      <p className="mt-1 text-[11px] sm:text-xs leading-snug text-paper/90">
        A proposed professional floor for people who later adopt it. Not the legal standard of care. Not binding on
        non-adopters. Not a condition of licensure, BCIA certification, or IQCB certification.
      </p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
          aria-label={SITE_NAME}
        >
          <LogoMark className="size-11" size={44} />
          <span className="min-w-0">
            <span className="block font-serif text-navy text-lg leading-tight">{SITE_SHORT}</span>
            <span className="block text-[11px] uppercase tracking-[0.14em] text-gold">Working draft</span>
          </span>
        </Link>
        <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-2 py-2 text-[13px] no-underline transition-colors",
                  active ? "bg-navy text-paper" : "text-navy hover:bg-paper-2",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="xl:hidden inline-flex size-11 items-center justify-center rounded-md border border-rule text-navy"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="xl:hidden border-t border-rule bg-paper px-4 py-3 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-3 text-navy no-underline hover:bg-paper-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
      <p className="border-t border-rule bg-paper-2 px-4 py-1.5 text-[11px] leading-snug text-muted">
        <span className="mx-auto block max-w-6xl">{MARK_LEGEND}</span>
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule bg-navy text-paper mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <div className="flex items-start gap-3">
            <LogoPlate markClassName="size-12" />
            <div>
              <p className="font-serif text-xl">{SITE_SHORT}</p>
              <p className="mt-1 text-sm text-paper/80 max-w-md">{SITE_NAME}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-paper/70">
            Proposed standards — working draft. Not a society-ratified Standard of Care.
          </p>
          <p className="mt-2 text-sm text-paper/70">
            This site is the working-group proposal. It is not the clinic website of Alternative Behavioral Therapy.
          </p>
          <p className="mt-2 text-sm text-paper/70">
            The SoC mark on this site is theoretical and is not a certification.
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Contact</p>
          <a className="mt-2 inline-block text-paper underline decoration-paper/40" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a className="mt-1 block text-paper underline decoration-paper/40" href={CONTACT_TEL}>
            {CONTACT_PHONE}
          </a>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm sm:justify-end">
            <Link to="/proposal" className="text-paper/90 no-underline hover:underline">
              Proposal
            </Link>
            <Link to="/standards" className="text-paper/90 no-underline hover:underline">
              Standards
            </Link>
            <Link to="/history" className="text-paper/90 no-underline hover:underline">
              History
            </Link>
            <Link to="/documents" className="text-paper/90 no-underline hover:underline">
              Documents
            </Link>
            <Link to="/structure" className="text-paper/90 no-underline hover:underline">
              Structure
            </Link>
            <Link to="/working-group" className="text-paper/90 no-underline hover:underline">
              Working Group
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-rule bg-paper-2">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.18em] text-gold mb-3">{kicker}</p>
        ) : null}
        <h1 className="text-3xl sm:text-4xl font-serif text-navy leading-tight">{title}</h1>
        {lede ? <p className="mt-4 text-lg text-muted leading-relaxed">{lede}</p> : null}
      </div>
    </header>
  );
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-3xl px-4 py-10 space-y-5 text-[1.05rem] leading-relaxed", className)}>{children}</div>;
}
