import SectionHeader from "../system/SectionHeader";

// Deliverables (Phase 10). Renders the record's `deliverables[]` verbatim — no
// invented quantities or guarantees. Renders nothing when empty.
export default function ServiceDeliverables({ service }) {
  const deliverables = Array.isArray(service.deliverables)
    ? service.deliverables
    : [];
  if (deliverables.length === 0) return null;

  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="What will I receive?" />

        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {deliverables.map((item) => (
            <li key={item} className="flex gap-4 py-5">
              <span aria-hidden="true" className="mt-2 h-3 w-[3px] shrink-0 bg-accent" />
              <span className="text-sm leading-7 text-ink">{item}</span>
            </li>
          ))}
        </ul>

        {service.scopeNote && (
          <p className="mt-6 max-w-3xl text-sm leading-7 text-ink-muted">
            {service.scopeNote}
          </p>
        )}
      </div>
    </section>
  );
}
