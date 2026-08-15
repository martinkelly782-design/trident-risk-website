import Breadcrumbs from "../system/Breadcrumbs";
import ServiceHero from "../service/ServiceHero";
import ServiceInsight from "../service/ServiceInsight";
import ServiceOverview from "../service/ServiceOverview";
import ServiceScope from "../service/ServiceScope";
import ServiceDeliverables from "../service/ServiceDeliverables";
import OperationalApplication from "../service/OperationalApplication";
import ScopeBoundaries from "../service/ScopeBoundaries";
import IdealClients from "../service/IdealClients";
import IntegratedSupport from "../service/IntegratedSupport";
import RelatedAnalysis from "../service/RelatedAnalysis";
import WhatHappensNext from "../service/WhatHappensNext";
import ServiceCta from "../service/ServiceCta";

// Reusable, data-driven service page template (Phase 10).
// Renders only the sections supported by the record: each list/optional section
// returns null when its data is absent, so thin records render honestly short
// without generic padding. publicationStatus and editorialNote are never passed
// to a component and never reach the DOM.
export default function ServicePage({
  service,
  discipline,
  breadcrumbs,
  onRequest,
}) {
  return (
    <main className="bg-canvas text-ink">
      {/* 1. Breadcrumbs */}
      <div className="mx-auto max-w-[1400px] px-5 pt-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* 2. Hero */}
      <ServiceHero service={service} discipline={discipline} onRequest={onRequest} />

      {/* 2a. Operational insight — one memorable truth about the service */}
      <ServiceInsight service={service} discipline={discipline} />

      {/* 3. Summary & client problem */}
      <ServiceOverview service={service} />

      {/* 4. Scope */}
      <ServiceScope service={service} />

      {/* 5. Deliverables */}
      <ServiceDeliverables service={service} />

      {/* 6. Operational application */}
      <OperationalApplication service={service} />

      {/* 7. Scope boundaries (only where limits exist) */}
      <ScopeBoundaries service={service} />

      {/* 8. Ideal client types */}
      <IdealClients service={service} />

      {/* 9. Integrated support — how the service fits Trident's wider capability */}
      <IntegratedSupport service={service} discipline={discipline} />

      {/* 10. Related analysis (only where genuine analysis exists) */}
      <RelatedAnalysis service={service} />

      {/* 11. What happens next — the client journey after an enquiry */}
      <WhatHappensNext />

      {/* 12. Discipline-specific CTA */}
      <ServiceCta service={service} discipline={discipline} onRequest={onRequest} />
    </main>
  );
}
