import SectionHeader from "../system/SectionHeader";

// Scope boundaries / limitations (Phase 10). Renders the record's `limits[]`,
// which state what a service is not (e.g. the Bridge Response Officer boundaries:
// not armed security, does not assume command, does not transfer duty of care).
// Renders nothing when there are no limits — no empty section, no invented text.
export default function ScopeBoundaries({ service }) {
  const limits = Array.isArray(service.limits) ? service.limits : [];
  if (limits.length === 0) return null;

  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader
          title="Scope & boundaries"
          supporting="What this service does not cover."
        />

        <ul className="mt-8 max-w-3xl space-y-3 border-l-2 border-ink/15 pl-6">
          {limits.map((limit) => (
            <li key={limit} className="text-sm leading-7 text-ink-soft">
              {limit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
