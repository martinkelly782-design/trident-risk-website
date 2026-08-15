import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { insightsById } from "./data/insights";
import { emailHref } from "./config/contact";
import ReportAccessForm from "./components/system/ReportAccessForm";
import { trackEvent } from "./lib/analytics";

// Iran Maritime Legal Risk Briefing — Insight #1 (IA correction).
//
// Re-skinned from the former standalone, off-system page onto the approved
// editorial system: a publication masthead + article body. The full briefing PDF
// is gated behind the shared report-access form (email required, organisation
// optional), consistent with the other four public reports.

const META = insightsById["iran-maritime-legal-risk-briefing"];

// Report descriptor for the gated download (this PDF lives at the site root, not
// under /reports, so it is not in the REPORTS registry).
const IRAN_REPORT = {
  id: "iran-maritime-legal-risk-briefing",
  href: "/Iran-Maritime-Legal-Risk-Briefing-2026.pdf",
  label: "Iran Maritime Legal Risk Briefing 2026",
  region: "Middle East",
};

const COVERS = [
  "Force majeure and frustration risks",
  "Owners' refusal to transit",
  "Unsafe port legal considerations",
  "War risk insurance implications",
  "Sanctions exposure and vessel affiliation",
  "Vessel targeting analysis",
  "Case studies and operational trends",
];

export default function IranLegalBriefingPage() {
  useEffect(() => {
    trackEvent("insight_view", {
      content_type: "insight",
      content_slug: "iran-maritime-legal-risk-briefing",
      content_title: META.title,
      region: "Middle East",
    });
  }, []);

  return (
    <main className="bg-canvas text-ink">
      {/* Publication masthead (dark) */}
      <section className="relative overflow-hidden bg-image-dark text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-5 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li className="flex items-center gap-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
                <Link to="/insights" className="transition-colors hover:text-white">Insights</Link>
              </li>
            </ol>
          </nav>
          <div className="py-14 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {META.category} <span className="text-white/40">· {META.dateLabel}</span>
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl">
              {META.title}
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/72">{META.standfirst}</p>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">{META.author}</p>
          </div>
        </div>
      </section>

      {/* Key judgement */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Key judgement</p>
            <p className="mt-6 font-display text-2xl font-light leading-[1.3] tracking-tight text-ink sm:text-[1.9rem]">
              Iran-related maritime risk cannot be treated as a single issue. Operational threat, charterparty exposure, war-risk insurance and sanctions and affiliation considerations move together — and owners, insurers and counsel need them assessed as one connected picture.
            </p>
          </div>
        </div>
      </section>

      {/* Article body + download gate */}
      <section className="border-t border-ink/12 bg-canvas-raised">
        <div className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="font-display text-2xl font-normal leading-snug text-ink sm:text-3xl">
                What the briefing covers
              </h2>
              <ul className="mt-8 border-t border-ink/15">
                {COVERS.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-ink/15 py-4 text-[15px] leading-7 text-ink-soft">
                    <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download gate — shared report-access form (email required,
                organisation optional), consistent with the other reports. */}
            <div className="border border-hairline bg-canvas p-8">
              <h3 className="font-display text-xl font-normal text-ink">Request the full briefing</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                Enter your email address to access the full report.
              </p>
              <div className="mt-6">
                <ReportAccessForm
                  report={IRAN_REPORT}
                  sourcePage="/iran-maritime-legal-risk-briefing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analyst CTA */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1100px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 border-t border-ink/15 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-light leading-snug text-ink sm:text-[1.9rem]">
                Need advice on this issue?
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-ink-soft">
                Speak to an analyst about how this exposure applies to a specific vessel, voyage or dispute.
              </p>
            </div>
            <a href={emailHref} className="inline-flex shrink-0 items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]">
              Speak to an analyst
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
