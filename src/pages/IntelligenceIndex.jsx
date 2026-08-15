import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import {
  publishedIntelligence,
  featuredIntelligence,
  standardIntelligence,
  publishedRegions,
  intelligenceDate,
} from "../data/intelligence";
import { insights } from "../data/insights";

// Intelligence index (/intelligence) — the public operational surface:
// "what is happening". Dark, information-dense, analyst-led. NOT a blog, news
// site, service catalogue, RSS feed or dashboard.
//
// The page ADAPTS to the available published dataset:
//  - With published records: an optional featured item, editorial rows, and
//    region filters (only for regions that actually have content).
//  - With none (the honest current state): a restrained "Selected public
//    intelligence" statement plus genuine related analysis (Insights).
//
// CONTENT INTEGRITY: the former 20 May 2025 records are draft fixtures in the
// model and are excluded here — no stale item is presented as current, and no
// current record is invented. See src/data/intelligence.js.

// Date only — sources give a publication date, not a time, so no clock time is
// displayed (the ISO timestamp exists purely for ordering).
function formatStamp(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}

function IntelRow({ item }) {
  const meta = [item.region, item.location].filter(Boolean).join(" · ");
  return (
    <article className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-white/12 py-7 md:grid-cols-[210px_1fr] md:gap-y-2">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{item.category}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-white/70 tabular-nums">{formatStamp(intelligenceDate(item))}</span>
        {meta && <span className="text-[11px] uppercase tracking-[0.14em] text-white/70">{meta}</span>}
      </div>
      <div className="max-w-3xl">
        <h3 className="font-display text-xl font-normal leading-snug text-white sm:text-[1.4rem]">{item.headline}</h3>
        {item.summary && <p className="mt-3 text-[15px] leading-7 text-white/65">{item.summary}</p>}
        {item.operationalRelevance && (
          <p className="mt-4 border-l border-accent/50 pl-4 text-[14px] leading-6 text-white/55">
            <span className="font-semibold uppercase tracking-[0.14em] text-white/70">Operational relevance</span>{" "}
            — {item.operationalRelevance}
          </p>
        )}
        <Link to={`/intelligence/${item.slug}`} className="group mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          View intelligence
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
        </Link>
      </div>
    </article>
  );
}

function FeaturedItem({ item }) {
  const meta = [item.category, item.region, item.location].filter(Boolean);
  return (
    <article className={`grid grid-cols-1 gap-8 border border-white/12 bg-white/[0.02] p-6 lg:p-9 ${item.image ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {meta.map((m, i) => (
            <span key={m} className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${i === 0 ? "text-accent" : "text-white/50"}`}>
              {i > 0 ? `· ${m}` : m}
            </span>
          ))}
        </div>
        <h2 className="mt-4 max-w-2xl font-display text-2xl font-light leading-[1.14] tracking-tight text-white sm:text-[2rem]">{item.headline}</h2>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-white/45 tabular-nums">{formatStamp(intelligenceDate(item))}</p>
        {item.summary && <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70">{item.summary}</p>}
        {item.operationalRelevance && (
          <p className="mt-5 max-w-2xl border-l border-accent/50 pl-4 text-[14px] leading-6 text-white/60">
            <span className="font-semibold uppercase tracking-[0.14em] text-white/75">Operational relevance</span> — {item.operationalRelevance}
          </p>
        )}
        <Link to={`/intelligence/${item.slug}`} className="group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          View intelligence
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
        </Link>
      </div>
      {item.image && (
        <div className="relative hidden overflow-hidden border border-white/10 lg:block">
          <img src={item.image} alt={item.imageAlt || ""} className="h-full w-full object-cover" style={{ filter: "grayscale(0.3) brightness(0.75) contrast(1.05)" }} />
        </div>
      )}
    </article>
  );
}

export default function IntelligenceIndex() {
  const [region, setRegion] = useState("all");
  const hasPublished = publishedIntelligence.length > 0;
  const showFilters = publishedRegions.length >= 2;

  const rows =
    region === "all"
      ? standardIntelligence
      : publishedIntelligence.filter((r) => r.region === region);
  const showFeatured = region === "all" && featuredIntelligence;

  return (
    <main className="min-h-screen bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-8 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
            <li className="flex items-center gap-x-2">
              <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-white" aria-current="page">Intelligence</span>
            </li>
          </ol>
        </nav>

        <div className="py-12 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Intelligence</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl">
            Operational intelligence.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/65">
            Trident's public view of developments affecting maritime operations. Selected intelligence and analysis — current operational reporting is distributed directly to the clients we support.
          </p>
        </div>

        {hasPublished ? (
          <>
            {/* Region filters — only for regions that actually have content. */}
            {showFilters && (
              <div className="mb-2 flex gap-x-6 overflow-x-auto border-t border-white/12 py-4">
                {["all", ...publishedRegions].map((r) => {
                  const active = region === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRegion(r)}
                      className={`whitespace-nowrap border-b-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                        active ? "border-accent text-white" : "border-transparent text-white/45 hover:text-white"
                      }`}
                    >
                      {r === "all" ? "All" : r}
                    </button>
                  );
                })}
              </div>
            )}

            {showFeatured && (
              <div className="mb-8">
                <FeaturedItem item={featuredIntelligence} />
              </div>
            )}

            <div className="border-t border-white/12">
              {rows.map((item) => (
                <IntelRow key={item.id} item={item} />
              ))}
            </div>
          </>
        ) : (
          /* Honest restrained state — no published situational records exist yet.
             Premium and sparse rather than fabricated activity. */
          <div className="border-t border-white/12 pt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Selected public intelligence</p>
            <p className="mt-5 max-w-2xl font-display text-[1.6rem] font-light leading-[1.35] tracking-tight text-white sm:text-[1.9rem]">
              Trident publishes selected intelligence and analysis on developments affecting maritime operations.
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/60">
              Current operational reporting is distributed directly to the clients we support. Selected analysis is published below.
            </p>
          </div>
        )}

        {/* Related analysis — genuine authored Insights ("what it means"). */}
        {insights.length > 0 && (
          <section className="mt-16 border-t border-white/12 pt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
                Related analysis
              </h2>
              <Link to="/insights" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                All insights
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </Link>
            </div>
            <div className="mt-2">
              {insights.map((it) => (
                <Link key={it.slug} to={it.path} className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-white/12 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:whitespace-nowrap">
                    {it.category} <span className="text-white/40">· {it.dateLabel}</span>
                  </div>
                  <div>
                    <h3 className="max-w-3xl font-display text-xl font-normal leading-snug text-white transition-colors group-hover:text-white/80 sm:text-[1.4rem]">{it.title}</h3>
                    <p className="mt-2 max-w-2xl text-[14px] leading-6 text-white/55">{it.standfirst}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Public vs client — restrained conversion. */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/12 pt-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Current intelligence for clients</p>
            <h2 className="mt-4 font-display text-2xl font-light leading-snug sm:text-[1.9rem]">
              For vessel-specific or operational intelligence, speak to a Trident analyst.
            </h2>
          </div>
          <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Speak to an analyst
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </main>
  );
}
