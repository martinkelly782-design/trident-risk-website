import SectionHeader from "../system/SectionHeader";

// Ideal client types (Phase 10). Renders the record's `idealClientTypes[]` as
// restrained bordered tags. Renders nothing when empty.
export default function IdealClients({ service }) {
  const clients = Array.isArray(service.idealClientTypes)
    ? service.idealClientTypes
    : [];
  if (clients.length === 0) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Who it's for" />

        <ul className="mt-8 flex flex-wrap gap-3">
          {clients.map((client) => (
            <li
              key={client}
              className="border border-hairline px-4 py-2 text-sm leading-6 text-ink"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
