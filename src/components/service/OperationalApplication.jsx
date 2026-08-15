import SectionHeader from "../system/SectionHeader";

// Operational application (Phase 10). Renders the record's
// `operationalApplication` prose. Renders nothing when absent.
export default function OperationalApplication({ service }) {
  if (!service.operationalApplication) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="When should this service be commissioned?" />

        <p className="mt-8 max-w-3xl text-base leading-8 text-ink-soft">
          {service.operationalApplication}
        </p>
      </div>
    </section>
  );
}
