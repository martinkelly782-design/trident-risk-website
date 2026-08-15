import Eyebrow from "../system/Eyebrow";

// Discipline hero (Phase 9).
// Editorial, not dashboard: left column carries the eyebrow, the discipline name
// as the primary Newsreader heading, a precise introduction, a thin accent rule
// and concise scope metadata. Right column is a near-square dark image using the
// approved treatment (desaturated, darkened, single flat legibility scrim — no
// gradient, no glass). Mirrors the homepage hero's density and colour system.
export default function DisciplineHero({ discipline, meta = [] }) {
  const isLegalEvidence = discipline.id === "legal-evidence";
  const ruleColor = isLegalEvidence ? "bg-gold" : "bg-accent";

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div className="order-2 max-w-xl lg:order-1">
            <Eyebrow className={isLegalEvidence ? "text-gold" : undefined}>
              Discipline
            </Eyebrow>

            <h1 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {discipline.name}
            </h1>

            <div className={`mt-7 h-px w-16 ${ruleColor}`} />

            <p className="mt-7 text-base leading-7 text-ink-soft">
              {discipline.intro}
            </p>

            {meta.length > 0 && (
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline pt-6">
                {meta.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {/* Image — near-square, dark maritime treatment, flat scrim only */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-image-dark sm:aspect-[5/4] lg:aspect-square">
              <img
                src={discipline.heroImage}
                alt={discipline.heroImageAlt}
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
