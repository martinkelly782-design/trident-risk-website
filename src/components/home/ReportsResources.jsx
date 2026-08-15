import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { reportsResources } from "../../data/homeContent";
import { emailHref } from "../../config/contact";

const { eyebrow, featured, categories } = reportsResources;

// Section 5 — Latest Reports & Resources, light band. A large genuine featured
// report on the left; on the right, three differentiated resource categories
// describing the kinds of intelligence product Trident produces. No fabricated
// report library, covers, dates or counts.
export default function ReportsResources() {
  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-hairline pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            {eyebrow}
          </h2>
          <Link
            to={featured.href}
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-accent"
          >
            View all analysis
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-8 grid gap-px bg-hairline lg:grid-cols-12">
          {/* Featured report — genuine content */}
          <Link
            to={featured.href}
            className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-image-dark p-8 text-white lg:col-span-7"
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ filter: "grayscale(0.4) brightness(0.42) contrast(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-image-dark via-image-dark/70 to-image-dark/20" />
            {/* Gold detailing — permitted for the Legal & Evidence briefing */}
            <div className="relative">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                Featured briefing · {featured.category}
              </span>
              <h3 className="mt-4 max-w-xl font-display text-3xl font-normal leading-tight sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                {featured.description}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors group-hover:text-gold">
                Read briefing
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </span>
            </div>
          </Link>

          {/* Three resource categories — stacked rows */}
          <div className="grid grid-cols-1 gap-px bg-hairline lg:col-span-5">
            {categories.map((category) => (
              <a
                key={category.title}
                href={emailHref}
                aria-label={`${category.title} — ${category.action.toLowerCase()}`}
                className="group flex flex-col justify-center bg-canvas px-7 py-7 transition-colors hover:bg-canvas-raised"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {category.label}
                </span>
                <h4 className="mt-2 font-display text-xl font-normal leading-snug text-ink">
                  {category.title}
                </h4>
                <p className="mt-2 text-[13px] leading-6 text-ink-soft">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {category.action}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
