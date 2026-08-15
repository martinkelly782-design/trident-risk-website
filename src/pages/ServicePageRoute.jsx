import { useEffect } from "react";
import { servicesById } from "../data/serviceIndex";
import { disciplinesById } from "../data/disciplines";
import { getRoute, servicePath, disciplineRoutePath } from "../routes/routeConfig";
import { trackEvent } from "../lib/analytics";
import ServicePage from "../components/templates/ServicePage";
import VesselAffiliationPage from "../components/service/VesselAffiliationPage";
import BridgeResponseOfficerPage from "../components/service/pages/BridgeResponseOfficerPage";
import HighRiskTransitPage from "../components/service/pages/HighRiskTransitPage";
import VoyageVulnerabilityPage from "../components/service/pages/VoyageVulnerabilityPage";
import ExpertWitnessPage from "../components/service/pages/ExpertWitnessPage";
import GnssInterferencePage from "../components/service/pages/GnssInterferencePage";
import RegionalRiskReportsPage from "../components/service/pages/RegionalRiskReportsPage";
import CountryEntryPage from "../components/service/pages/CountryEntryPage";
import NotFound from "./NotFound";

// Services rendered by a dedicated bespoke page rather than the generic
// data-driven template. Vessel Affiliation is the approved benchmark; the eight
// flagship services each have their own bespoke page. Every other service keeps
// the generic template until built.
const DEDICATED_SERVICE_PAGES = {
  "mi-vessel-affiliation-checks": VesselAffiliationPage,
  "ms-bridge-response-officer": BridgeResponseOfficerPage,
  "ms-high-risk-area-transit-planning": HighRiskTransitPage,
  "ms-voyage-vulnerability-assessment": VoyageVulnerabilityPage,
  "le-expert-witness": ExpertWitnessPage,
  "mc-gnss-interference-advisory": GnssInterferencePage,
  "ga-regional-risk-reports": RegionalRiskReportsPage,
  "me-country-entry-risk-assessments": CountryEntryPage,
};

// Route assembly for a service page (Phase 10).
// Resolves the service and its discipline from the Phase 7 model and hands the
// records to the reusable template. The NotFound guards are defensive: routes
// are only generated for implemented services, so an invalid id cannot normally
// reach here.
export default function ServicePageRoute({ serviceId, onRequest }) {
  const service = servicesById[serviceId];
  const discipline = service ? disciplinesById[service.disciplineId] : null;

  useEffect(() => {
    if (service && discipline) {
      trackEvent("service_view", {
        content_type: "service",
        service: service.id,
        content_title: service.title,
        expertise: discipline.id,
      });
    }
  }, [service, discipline]);

  if (!service) return <NotFound />;
  if (!discipline) return <NotFound />;

  const Dedicated = DEDICATED_SERVICE_PAGES[service.id];
  if (Dedicated) {
    return <Dedicated service={service} discipline={discipline} onRequest={onRequest} />;
  }

  const path = servicePath(service);
  const breadcrumbs = getRoute(path)?.breadcrumbs || [
    { name: "Home", path: "/" },
    { name: discipline.name, path: disciplineRoutePath(discipline.id) },
    { name: service.title, path },
  ];

  return (
    <ServicePage
      service={service}
      discipline={discipline}
      breadcrumbs={breadcrumbs}
      onRequest={onRequest}
    />
  );
}
