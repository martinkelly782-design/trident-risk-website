import SectionHeader from "../system/SectionHeader";

// Service summary and client problem (Phase 10).
// Uses the record's `introduction` (a fuller statement than the hero summary)
// and `clientProblem`. Both are required fields, so this section always renders.
export default function ServiceOverview({ service }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Overview" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <p className="font-display text-2xl font-light leading-snug tracking-tight text-ink">
            {service.introduction}
          </p>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              The problem
            </p>
            <p className="text-sm leading-7 text-ink-soft">
              {service.clientProblem}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
