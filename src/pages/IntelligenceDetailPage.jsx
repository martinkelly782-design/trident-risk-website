import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { getPublishedIntelligenceBySlug, reportFor } from "../data/intelligence";
import { trackEvent } from "../lib/analytics";
import { disciplinesById } from "../data/disciplines";
import { insightsById } from "../data/insights";
import DownloadReport from "../components/system/DownloadReport";
import NotFound from "./NotFound";

// Public Intelligence DETAIL — a concise operational note (roughly 400–800 words
// where the source supports it). Sits between the feed (headline metadata) and
// the Insight (full analytical argument). Section-driven: each heading renders
// only when the record carries it, so notes never show empty headings. Trident's
// own view is set apart as "TRIDENT ASSESSMENT" (never "AI"/"automated").

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}

function Section({ label, children }) {
  return (
    <section className="border-t border-hairline py-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">{label}</p>
      <p className="mt-4 max-w-2xl text-[16px] leading-8 text-ink-soft">{children}</p>
    </section>
  );
}

export default function IntelligenceDetailPage() {
  const { slug } = useParams();
  const item = getPublishedIntelligenceBySlug(slug);

  useEffect(() => {
    if (item) {
      trackEvent("intelligence_view", {
        content_type: "intelligence",
        content_slug: item.slug,
        content_title: item.headline,
        region: item.region,
        category: item.category,
      });
    }
  }, [item]);

  if (!item) return <NotFound />;

  const displayDate = formatDate(item.eventDate || item.publishedAt);
  const publishedDate = formatDate(item.publishedAt);
  const showPublished = item.eventDate && publishedDate && publishedDate !== displayDate;
  const report = reportFor(item.report);
  const expertiseIds = Array.isArray(item.relatedExpertise)
    ? item.relatedExpertise
    : item.relatedExpertise
    ? [item.relatedExpertise]
    : [];
  const expertiseAreas = expertiseIds.map((id) => disciplinesById[id]).filter(Boolean);
  const insight = item.relatedInsight ? insightsById[item.relatedInsight] : null;
  const meta = [item.category, item.region, item.location].filter(Boolean);

  return (
    <main className="bg-canvas text-ink">
      {/* Dark operational masthead */}
      <section className="bg-image-dark text-white">
        <div className="mx-auto max-w-[1100px] px-5 pb-14 pt-8 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li className="flex items-center gap-x-2">
                <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
                <Link to="/intelligence" className="transition-colors hover:text-white">Intelligence</Link>
              </li>
            </ol>
          </nav>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
            {meta.map((m, i) => (
              <span key={m} className="flex items-center gap-x-4">
                {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-white/20" />}
                <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${i === 0 ? "text-accent" : "text-white/60"}`}>{m}</span>
              </span>
            ))}
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.9rem]">
            {item.headline}
          </h1>

          {displayDate && (
            <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[12px] uppercase tracking-[0.08em] tabular-nums">
              <span className="text-white/70">{displayDate}</span>
              {showPublished && <span className="text-white/40">· Published {publishedDate}</span>}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
        <div className="max-w-3xl pb-4">
          {item.summary && (
            <p className="py-10 font-display text-[1.5rem] font-light leading-[1.45] tracking-tight text-ink sm:text-[1.7rem]">
              {item.summary}
            </p>
          )}

          {item.situation && <Section label="Situation">{item.situation}</Section>}
          {item.whatChanged && <Section label="What has changed">{item.whatChanged}</Section>}
          {item.operationalRelevance && <Section label="Operational relevance">{item.operationalRelevance}</Section>}

          {item.tridentAssessment && (
            <section className="my-8 border-l-2 border-accent bg-canvas-raised p-7 lg:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Trident assessment</p>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-ink">{item.tridentAssessment}</p>
            </section>
          )}

          {item.whatToWatch && <Section label="What to watch">{item.whatToWatch}</Section>}

          {/* Related analysis / report (Insight) — "what it means". */}
          {insight && (
            <section className="border-t border-hairline py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">
                {(insight.category || "").includes("Report") ? "Related report" : "Related analysis"}
              </p>
              <Link to={insight.path} className="group mt-4 block max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{insight.category} · {insight.dateLabel}</p>
                <h2 className="mt-2 font-display text-2xl font-normal leading-snug text-ink group-hover:text-accent">{insight.displayTitle || insight.title}</h2>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {(insight.category || "").includes("Report") ? "Read the report" : "Read the analysis"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                </span>
              </Link>
            </section>
          )}

          {/* Source line + full-report download where a releasable report exists. */}
          <section className="flex flex-col gap-5 border-t border-hairline py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">Source</p>
              <p className="mt-2 text-[14px] leading-6 text-ink-soft">
                {item.sourceType}
                {report && <> · {report.date}</>}
              </p>
            </div>
            {report && <DownloadReport report={report} />}
          </section>

          {/* Subtle links back to the relevant Expertise areas. */}
          {expertiseAreas.length > 0 && (
            <section className="flex flex-wrap gap-x-6 gap-y-3 border-t border-hairline py-6">
              {expertiseAreas.map((area) => (
                <Link key={area.id} to={`/${area.slug}`} className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted hover:text-ink">
                  {area.name} expertise
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </Link>
              ))}
            </section>
          )}
        </div>
      </div>

      {/* Restrained conversion */}
      <section className="border-t border-hairline bg-canvas-raised">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-xl font-display text-xl font-light leading-snug text-ink sm:text-2xl">
            For vessel-specific or operational intelligence, speak to a Trident analyst.
          </p>
          <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Speak to an analyst
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </section>
    </main>
  );
}
