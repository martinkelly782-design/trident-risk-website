import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { email, emailHref } from "../config/contact";
import { trackEvent } from "../lib/analytics";

// Contact (/contact) — conversion. Deliberately simple: identify the nature of
// the enquiry, then reach Trident directly. No large marketing form. Each
// category opens a direct email with a pre-filled subject; existing contact
// details only.

const CATEGORIES = [
  "Maritime Intelligence",
  "Maritime Security",
  "Maritime Cyber",
  "Geopolitical Analysis",
  "Market Entry",
  "Legal & Evidence",
  "Media",
  "Other",
];

const mailtoFor = (category) => `${emailHref}?subject=${encodeURIComponent(`Enquiry: ${category}`)}`;

export default function ContactPage() {
  return (
    <main className="bg-canvas text-ink">
      <section className="relative overflow-hidden bg-image-dark text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li className="flex items-center gap-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-white" aria-current="page">Contact</span>
              </li>
            </ol>
          </nav>
          <div className="py-14 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Contact</p>
            <h1 className="mt-5 font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Speak to Trident.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/70">
              Tell us the nature of the enquiry. We will route it to the right analyst and respond directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">What is your enquiry about?</p>
          <div className="mt-8 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <a
                key={c}
                href={mailtoFor(c)}
                onClick={() =>
                  trackEvent("contact_click", { cta_name: c, cta_location: "contact_page", content_type: "contact" })
                }
                className="group flex items-center justify-between gap-4 border-b border-r border-ink/15 bg-canvas p-6 transition-colors hover:bg-canvas-raised"
              >
                <span className="font-display text-lg font-normal leading-snug text-ink">{c}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <div className="mt-12 border-t border-ink/15 pt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">Direct</p>
            <a
              href={emailHref}
              onClick={() =>
                trackEvent("contact_click", { cta_name: "Direct email", cta_location: "contact_page", content_type: "contact" })
              }
              className="mt-3 inline-block font-display text-2xl font-light text-ink transition-colors hover:text-accent sm:text-3xl"
            >
              {email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
