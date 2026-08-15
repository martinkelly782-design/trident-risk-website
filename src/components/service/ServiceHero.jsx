import { ArrowRight } from "lucide-react";
import Eyebrow from "../system/Eyebrow";

// Service hero (Phase 10).
// Editorial, dense, discipline-anchored. Discipline eyebrow, Newsreader service
// title, concise summary, one primary CTA and a near-square dark image using the
// approved treatment (desaturated, darkened, single flat scrim — no gradient, no
// glass, no dashboard styling). Breadcrumbs sit above the hero in ServicePage.
export default function ServiceHero({ service, discipline, onRequest }) {
  const isLegalEvidence = discipline.id === "legal-evidence";
  const ruleColor = isLegalEvidence ? "bg-gold" : "bg-accent";
  const buttonColor = isLegalEvidence
    ? "bg-gold hover:bg-[#a07a33]"
    : "bg-accent hover:bg-[#a83c25]";

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div className="order-2 max-w-xl lg:order-1">
            <Eyebrow className={isLegalEvidence ? "text-gold" : undefined}>
              {discipline.name}
            </Eyebrow>

            <h1 className="mt-4 font-display text-4xl font-light leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {service.title}
            </h1>

            <div className={`mt-6 h-px w-16 ${ruleColor}`} />

            <p className="mt-6 text-base leading-7 text-ink-soft">
              {service.summary}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onRequest(service.title)}
                className={`inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors ${buttonColor}`}
              >
                {service.ctaLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Image — near-square, dark maritime treatment, flat scrim only */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-image-dark sm:aspect-[5/4] lg:aspect-square">
              <img
                src={service.image}
                alt={service.imageAlt}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ filter: "grayscale(0.55) brightness(0.62) contrast(1.06)" }}
              />
              <div className="absolute inset-0 bg-image-dark/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
