import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "../components/system/Eyebrow";
import Breadcrumbs from "../components/system/Breadcrumbs";

// 404 Not Found page (Phase 8).
// No automatic redirect: the router lands here for any unmatched path and the
// visitor chooses where to go. Typography and colour come from the approved
// design tokens (font-display, canvas, ink, accent, hairline). Head tags,
// including the noindex robots directive, are handled centrally by <Seo> in
// AppRoutes from the route table's 404 head model.

// The primary onward routes offered from the 404 page.
const LINKS = [
  { label: "Home", to: "/" },
  { label: "Maritime Intelligence", to: "/maritime-intelligence" },
  { label: "Maritime Security", to: "/maritime-security" },
  { label: "Request Support", to: "/request" },
];

export default function NotFound() {
  return (
    <main className="bg-canvas text-ink">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Page not found", path: "/404" },
          ]}
          className="mb-10"
        />

        <Eyebrow className="text-accent">Error 404</Eyebrow>

        <h1 className="mt-5 font-display text-5xl font-light leading-tight tracking-tight text-ink md:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft">
          The page you requested does not exist or may have moved. Use the links
          below to continue to the intelligence, security and advisory sections
          of Trident Risk & Advisory.
        </p>

        <nav aria-label="Suggested pages" className="mt-10">
          <ul className="flex flex-col gap-px overflow-hidden rounded-sm border border-hairline">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group flex items-center justify-between border-b border-hairline bg-canvas-raised px-5 py-4 text-sm font-medium text-ink transition-colors last:border-b-0 hover:bg-white hover:text-accent"
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent"
                    strokeWidth={1.5}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
