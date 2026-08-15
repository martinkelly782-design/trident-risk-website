import SectionHeader from "../system/SectionHeader";

// Scope (Phase 10). Renders the record's `scope[]` as an editorial list with
// accent tick markers. Renders nothing when scope is empty.
export default function ServiceScope({ service }) {
  const scope = Array.isArray(service.scope) ? service.scope : [];
  if (scope.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Scope" />

        <ul className="mt-8 grid grid-cols-1 gap-x-14 gap-y-4 sm:grid-cols-2">
          {scope.map((item) => (
            <li key={item} className="flex gap-3 border-t border-hairline pt-4">
              <span aria-hidden="true" className="mt-2 h-3 w-[3px] shrink-0 bg-accent" />
              <span className="text-sm leading-7 text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
