import { disciplines, disciplinesById } from "../data/disciplines";
import { servicesByDiscipline, servicesById } from "../data/serviceIndex";
import { getRoute, disciplineRoutePath } from "../routes/routeConfig";
import ExpertisePage from "../components/expertise/ExpertisePage";
import { expertiseContent } from "../data/expertiseContent";
import NotFound from "./NotFound";

// Route assembly for a discipline landing page (Phase 9).
// Resolves the discipline record and its data-derived context (services in
// deterministic order, hero metadata, breadcrumbs, adjacent disciplines) from
// the Phase 7 model, then renders the reusable template. Every one of the six
// live routes resolves; the NotFound guard is defensive only.

const DISCIPLINE_ORDER = disciplines.map((d) => d.id);

// Adjacent disciplines derived from the discipline's own services: the distinct
// disciplines referenced by their relatedServiceIds, minus this one. Grounded in
// the data model — nothing is invented — and ordered canonically.
function relatedDisciplinesFor(discipline, services) {
  const seen = new Set();
  const ids = [];

  for (const service of services) {
    for (const relatedId of service.relatedServiceIds || []) {
      const related = servicesById[relatedId];
      if (!related) continue;
      const did = related.disciplineId;
      if (did === discipline.id || seen.has(did)) continue;
      seen.add(did);
      ids.push(did);
    }
  }

  return ids
    .sort((a, b) => DISCIPLINE_ORDER.indexOf(a) - DISCIPLINE_ORDER.indexOf(b))
    .map((id) => {
      const d = disciplinesById[id];
      return {
        id,
        name: d.name,
        homepageSummary: d.homepageSummary,
        path: disciplineRoutePath(id),
      };
    })
    .filter((d) => d.path);
}

// Distinct client types across the discipline's services, in first-seen order.
function clientsFor(services) {
  const seen = new Set();
  const clients = [];
  for (const service of services) {
    for (const client of service.idealClientTypes || []) {
      if (seen.has(client)) continue;
      seen.add(client);
      clients.push(client);
    }
  }
  return clients;
}

export default function DisciplinePageRoute({ disciplineId, onRequest }) {
  const discipline = disciplinesById[disciplineId];
  if (!discipline) return <NotFound />;

  const services = servicesByDiscipline[disciplineId] || [];

  // All six disciplines now render the data-driven EXPERTISE page (IA
  // correction): authority-led, no service-card wall. The full catalogue lives
  // on the Services index; each Expertise page signposts to it.
  if (expertiseContent[disciplineId]) {
    return <ExpertisePage discipline={discipline} services={services} />;
  }
  return <NotFound />;
}
