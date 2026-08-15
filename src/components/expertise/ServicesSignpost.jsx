import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Compact "Services in this area" signpost (IA correction). Expertise pages no
// longer carry the full service-card wall — the catalogue lives on the Services
// index. This is a single link into that catalogue, pre-filtered to the area.
export default function ServicesSignpost({ discipline, count, gold = false }) {
  const accentText = gold ? "text-gold" : "text-accent";
  const accentBar = gold ? "bg-gold" : "bg-accent";
  const capabilities = `${count} ${count === 1 ? "capability" : "capabilities"} available`;

  return (
    // id="services" keeps the hero "Explore services" CTA meaningful now that the
    // full service wall (which previously owned this anchor) has been removed.
    <section id="services" className="scroll-mt-20 bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-8 border-t border-ink/15 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${accentText}`}>
              <span aria-hidden="true" className={`h-3 w-[3px] ${accentBar}`} />
              Services in this area
            </p>
            <h2 className="mt-4 font-display text-2xl font-light leading-[1.14] tracking-tight text-ink sm:text-[1.9rem]">
              {discipline.name} services
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-ink-muted">
              {capabilities}
            </p>
          </div>

          {/* Two distinct routes: browse the catalogue, or engage directly. */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8 md:self-auto">
            <Link
              to={`/services?area=${discipline.slug}`}
              className={`group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${accentText}`}
            >
              Explore {discipline.name} services
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
            >
              Speak to an analyst
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
