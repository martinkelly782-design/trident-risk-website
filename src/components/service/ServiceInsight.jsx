// Service insight (editorial phase).
// One memorable operational truth per service — not a slogan, not marketing.
// Presented prominently just below the hero as an editorial thesis: a single
// large Newsreader statement over an accent rule. Renders nothing if absent.
export default function ServiceInsight({ service, discipline }) {
  if (!service.insight) return null;
  const isLegalEvidence = discipline?.id === "legal-evidence";
  const rule = isLegalEvidence ? "bg-gold" : "bg-accent";

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="max-w-4xl">
          <div className={`h-px w-16 ${rule}`} />
          <p className="mt-8 font-display text-2xl font-light leading-[1.25] tracking-tight text-ink sm:text-3xl lg:text-[2.4rem]">
            {service.insight}
          </p>
        </div>
      </div>
    </section>
  );
}
