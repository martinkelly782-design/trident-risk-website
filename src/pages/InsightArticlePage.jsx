import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { getArticleInsightBySlug } from "../data/insights";
import { publishedIntelligence, reportFor } from "../data/intelligence";
import { servicesById } from "../data/serviceIndex";
import { servicePath } from "../routes/routeConfig";
import { emailHref } from "../config/contact";
import DownloadReport from "../components/system/DownloadReport";
import { trackEvent } from "../lib/analytics";
import NotFound from "./NotFound";

// Generic Insight article template ("what Trident thinks it means"). Longer,
// authored and thesis-driven — deliberately distinct from an Intelligence item
// (short, factual, timestamped). Uses the approved publication architecture:
// dark publication masthead → Key judgement → article body → Related
// intelligence → Speak to an analyst. Data-driven, so new Insights need no new
// page. The Iran briefing keeps its own bespoke page/URL and is not routed here.

function formatDate(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}

export default function InsightArticlePage() {
  const { slug } = useParams();
  const item = getArticleInsightBySlug(slug);

  useEffect(() => {
    if (item) {
      trackEvent("insight_view", {
        content_type: "insight",
        content_slug: item.slug,
        content_title: item.displayTitle || item.title,
        region: item.region,
      });
    }
  }, [item]);

  if (!item) return <NotFound />;

  const expertise = Array.isArray(item.expertise) ? item.expertise : item.expertise ? [item.expertise] : [];
  const related = publishedIntelligence.filter((r) => r.relatedInsight === item.slug);
  const relatedServices = (item.relatedServiceIds || [])
    .map((id) => servicesById[id])
    .filter(Boolean)
    .map((s) => ({ title: s.title, summary: s.summary, path: servicePath(s) }))
    .filter((s) => s.path);
  const report = reportFor(item.report);
  const downloadLabel = item.report === "red-sea" ? "Download full assessment" : "Download full report";

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
              {item.category} <span className="text-white/40">· {item.dateLabel}</span>
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl">
              {item.title}
            </h1>
            {item.standfirst && <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/72">{item.standfirst}</p>}
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
              <span>{item.author}</span>
              {item.region && <><span aria-hidden="true" className="h-3 w-px bg-white/20" /><span>{item.region}</span></>}
              {expertise.map((e) => (
                <span key={e} className="flex items-center gap-x-4"><span aria-hidden="true" className="h-3 w-px bg-white/20" /><span>{e}</span></span>
              ))}
            </div>
            {report && <DownloadReport report={report} tone="dark" label={downloadLabel} className="mt-9" />}
          </div>
        </div>
      </section>

      {/* Optional genuine related asset */}
      {item.image && (
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-image-dark">
          <img src={item.image} alt={item.imageAlt || ""} loading="lazy" className="h-full w-full object-cover" style={{ filter: "grayscale(0.3) brightness(0.72) contrast(1.05)" }} />
        </div>
      )}

      {/* Key judgement */}
      {item.keyJudgement && (
        <section className="bg-canvas">
          <div className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Key judgement</p>
              <p className="mt-6 font-display text-2xl font-light leading-[1.32] tracking-tight text-ink sm:text-[1.9rem]">
                {item.keyJudgement}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Article body */}
      <section className="border-t border-ink/12 bg-canvas-raised">
        <div className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            {item.sections.map((s, i) => (
              <div key={s.heading} className={i > 0 ? "mt-12" : ""}>
                <h2 className="flex items-baseline gap-4 font-display text-2xl font-normal leading-snug text-ink sm:text-[1.8rem]">
                  <span className="font-display text-sm font-light text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-[16px] leading-8 text-ink-soft">{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {report && (
              <div className="mt-14 border-t border-ink/15 pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-muted">Full report</p>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-ink-soft">
                  The complete assessment, including its detailed findings, is available to download.
                </p>
                <DownloadReport report={report} label={downloadLabel} className="mt-5" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related intelligence — the reverse of the "what happened → what it means" link. */}
      {related.length > 0 && (
        <section className="bg-canvas">
          <div className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8 lg:py-16">
            <div className="flex flex-col gap-2 border-b border-ink/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
                Related intelligence
              </h2>
              <Link to="/intelligence" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Intelligence feed
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </Link>
            </div>
            <div className="mt-2">
              {related.map((r) => (
                <Link key={r.id} to={`/intelligence/${r.slug}`} className="group grid grid-cols-1 gap-x-8 gap-y-1 border-b border-ink/15 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline">
                  <div className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                    {formatDate(r.publishedAt)}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{r.category}</p>
                    <h3 className="mt-1 max-w-2xl font-display text-lg font-normal leading-snug text-ink transition-colors group-hover:text-accent sm:text-xl">{r.headline}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Operational support — the assessment leads into commissionable services.
          Descriptive anchors (service name + one line) rather than "view service". */}
      {relatedServices.length > 0 && (
        <section className="bg-canvas-raised">
          <div className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8 lg:py-16">
            <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
              <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
              How Trident supports vessels on this route
            </h2>
            <div className="mt-6 grid gap-px bg-hairline sm:grid-cols-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="group flex flex-col bg-canvas p-6 transition-colors hover:bg-canvas-raised"
                >
                  <h3 className="font-display text-lg font-normal leading-snug text-ink transition-colors group-hover:text-accent">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-6 text-ink-soft">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    View service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Analyst CTA */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1100px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 border-t border-ink/15 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-light leading-snug text-ink sm:text-[1.9rem]">
                Need advice on this issue?
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-ink-soft">
                Speak to an analyst about how this applies to a specific vessel, voyage, itinerary or dispute.
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
