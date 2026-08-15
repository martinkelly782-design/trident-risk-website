import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { insightsByRecency } from "../data/insights";

// Insights index (/insights) — "what Trident thinks it means". An editorial
// publication surface (analysis / briefings / assessments / commentary),
// visually distinct from the Services catalogue and the Intelligence feed. Only
// genuine, existing publications are listed; none are invented. The Iran
// Maritime Legal Risk Briefing is the first Insight.

export default function InsightsIndex() {
  const [lead, ...rest] = insightsByRecency;

  return (
    <main className="bg-canvas text-ink">
      {/* Light editorial masthead */}
      <section className="border-b border-ink/12 bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link to="/" className="transition-colors hover:text-ink">Home</Link></li>
              <li className="flex items-center gap-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-ink-muted/60" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-ink" aria-current="page">Insights</span>
              </li>
            </ol>
          </nav>
          <div className="py-12 lg:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Insights</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.06] tracking-tight text-ink sm:text-5xl">
              Analysis, briefings and assessments.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
              Trident's authored view of what maritime and geopolitical developments mean for owners, operators, insurers and legal teams.
            </p>
          </div>
        </div>
      </section>

      {/* Lead insight */}
      {lead && (
        <section className="bg-canvas">
          <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8 lg:py-20">
            <Link to={lead.path} className={`group grid gap-10 lg:items-center ${lead.image ? "lg:grid-cols-[1.3fr_1fr]" : ""}`}>
              {lead.image && (
                <div className="relative order-2 aspect-[16/10] overflow-hidden border border-hairline bg-image-dark lg:order-1">
                  <img src={lead.image} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{ filter: "grayscale(0.3) brightness(0.72) contrast(1.05)" }} />
                </div>
              )}
              <div className={lead.image ? "order-1 lg:order-2" : ""}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {lead.category} <span className="text-ink-muted">· {lead.dateLabel}</span>
                </p>
                <h2 className={`mt-4 font-display font-normal leading-[1.1] tracking-tight text-ink ${lead.image ? "text-3xl sm:text-[2.4rem]" : "max-w-3xl text-3xl sm:text-[2.6rem]"}`}>
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-soft">{lead.standfirst}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Read the assessment
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining insights (grid) — only genuine items; grows as more are published. */}
      {rest.length > 0 && (
        <section className="bg-canvas-raised">
          <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-px border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <Link key={item.slug} to={item.path} className="group flex flex-col border-b border-r border-ink/15 bg-canvas p-7 transition-colors hover:bg-canvas-raised">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{item.category} · {item.dateLabel}</p>
                  <h3 className="mt-3 font-display text-xl font-normal leading-snug text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">{item.standfirst}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
