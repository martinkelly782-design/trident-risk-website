import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { email, emailHref } from "../../config/contact";
import { disciplines } from "../../data/disciplines";
import { disciplineRoutePath } from "../../routes/routeConfig";
import { openCookiePreferences } from "../../lib/consent";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.59 21 10.72 21 13.5V21h-4v-6.65c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V21H9z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Footer sitemap columns, aligned to the corrected IA. Only genuinely live
// destinations are linked. The "Expertise" column lists the six areas (which
// resolve to their Expertise pages); the "Explore" column carries the remaining
// primary-nav indexes.
const EXPERTISE_LINKS = disciplines.map((discipline) => ({
  label: discipline.name,
  to: disciplineRoutePath(discipline.id),
}));

const EXPLORE_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Intelligence", to: "/intelligence" },
  { label: "Insights", to: "/insights" },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Request Support", to: "/request" },
];

// Small uppercase column label.
function ColumnLabel({ children }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
      {children}
    </h3>
  );
}

const linkClass =
  "text-sm leading-6 text-white/65 transition-colors hover:text-white";

// Site-wide footer. Dark treatment, gold wordmark and newsletter preserved; a
// four-column sitemap gives it the structure of a substantial organisation.
export default function Footer() {
  return (
    <footer className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4 lg:pr-8">
            {/* Gold wordmark — the single restrained footer gold accent. */}
            <h2 className="font-display text-xl font-medium tracking-tight text-gold">
              Trident Risk and Advisory
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Intelligence led maritime, geopolitical and legal advisory support
              — from pre-fixture intelligence to expert evidence.
            </p>

            {/* Briefings — a non-submitting editorial contact link (no automated
                newsletter/subscriber list is operated on this website). */}
            <div className="mt-8 max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Receive Trident briefings
              </p>

              <a
                href={`${emailHref}?subject=${encodeURIComponent("Trident briefings")}`}
                className="mt-4 flex items-center justify-between gap-3 border-b border-white/25 pb-2 text-sm text-white/80 transition-colors hover:border-white/60 hover:text-white"
              >
                <span className="break-words">{email}</span>
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              </a>

              <p className="mt-3 text-xs leading-5 text-white/70">
                Occasional operational briefings and analysis. No marketing. Contact us to arrange.
              </p>
            </div>
          </div>

          {/* EXPERTISE */}
          <nav className="lg:col-span-2" aria-label="Expertise">
            <ColumnLabel>Expertise</ColumnLabel>
            <ul className="mt-5 space-y-3">
              {EXPERTISE_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* EXPLORE */}
          <nav className="lg:col-span-2" aria-label="Explore">
            <ColumnLabel>Explore</ColumnLabel>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* COMPANY */}
          <nav className="lg:col-span-2" aria-label="Company">
            <ColumnLabel>Company</ColumnLabel>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <div className="lg:col-span-2">
            <ColumnLabel>Contact</ColumnLabel>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={emailHref} className={`${linkClass} break-words`}>
                  {email}
                </a>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  Enquiry form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© Trident Risk and Advisory. All rights reserved.</span>
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-white">
              Cookies
            </Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="transition-colors hover:text-white"
            >
              Cookie preferences
            </button>
          </div>

          <a
            href="https://www.tridentrisk.org"
            className="transition-colors hover:text-white"
          >
            www.tridentrisk.org
          </a>
        </div>
      </div>
    </footer>
  );
}
