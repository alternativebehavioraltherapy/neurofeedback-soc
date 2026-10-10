import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/SiteShell";
import { LogoMark } from "@/components/Logo";
import { SITE_NAME } from "@/data/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_NAME },
      {
        name: "description",
        content:
          "A proposed Standard of Care for neurofeedback. Working draft from the Standards of Care for Neurofeedback Working Group. Not a society-ratified standard.",
      },
      { name: "theme-color", content: "#1B365D" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon-32.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <LogoMark className="size-16" size={64} />
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">Not found</p>
      <h1 className="mt-3 font-serif text-3xl text-navy">This page is not in the working draft.</h1>
      <p className="mt-4 text-muted">
        Return to the proposal, the draft standards, or the history of practice standards.
      </p>
      <p className="mt-6 flex flex-wrap gap-4">
        <a href="/" className="text-teal">
          Home
        </a>
        <a href="/history" className="text-teal">
          History
        </a>
      </p>
    </div>
  );
}
