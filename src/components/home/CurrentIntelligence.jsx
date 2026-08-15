import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { publishedIntelligence, intelligenceDate } from "../../data/intelligence";

// Section 4 — Current Intelligence (homepage preview). Design is frozen; the
// data source is the public intelligence model. It previews the most recently
// PUBLISHED records as a clean, text-led card (imagery is intentionally omitted
// — Intelligence notes are text-led and no generic image is forced). Dates shown
// are the operational development date. When there are no published records an
// honest restrained state is shown instead of stale placeholders.

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}

// Preview the most recently published notes (publication recency), newest first.
const preview = [...publishedIntelligence]
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  .slice(0, 4);

export default function CurrentIntelligence() {
  const hasItems = preview.length > 0;

  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Current intelligence
          </h2>
          <Link to="/intelligence" className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white">
            View all intelligence
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
          </Link>
        </div>

        {hasItems ? (
          <div className="mt-8 grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {preview.map((item) => (
              <Link
                key={item.id}
                to={`/intelligence/${item.slug}`}
                className="group flex min-h-[220px] flex-col border-b border-r border-white/10 bg-white/[0.015] p-6 transition-colors hover:bg-white/[0.04]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{item.category}</span>
                <h3 className="mt-4 font-display text-lg font-normal leading-snug text-white">{item.headline}</h3>
                <div className="mt-auto flex items-center justify-between pt-8">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/45 tabular-nums">
                    {[item.region, formatDate(intelligenceDate(item))].filter(Boolean).join(" · ")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-colors group-hover:text-accent" strokeWidth={1.75} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Honest restrained state — no stale placeholder cards. */
          <div className="mt-8 max-w-2xl">
            <p className="font-display text-[1.4rem] font-light leading-[1.35] tracking-tight text-white sm:text-[1.7rem]">
              Trident publishes selected intelligence and analysis on developments affecting maritime operations.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/60">
              Current operational reporting is distributed directly to the clients we support.
            </p>
            <Link to="/intelligence" className="group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              View intelligence
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
