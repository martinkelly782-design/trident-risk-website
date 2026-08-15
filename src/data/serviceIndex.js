// Aggregated service index (Phase 7).
// Combines the six discipline service files into a single deterministic list
// and exposes lookup maps and counts. This is the canonical entry point for
// service data; later routing/CMS layers consume from here.

import { disciplines } from "./disciplines.js";
import maritimeIntelligenceServices from "./services/maritimeIntelligence.js";
import maritimeSecurityServices from "./services/maritimeSecurity.js";
import maritimeCyberServices from "./services/maritimeCyber.js";
import geopoliticalAnalysisServices from "./services/geopoliticalAnalysis.js";
import marketEntryServices from "./services/marketEntry.js";
import legalEvidenceServices from "./services/legalEvidence.js";

// Deterministic ordering: discipline order, then each file's own order.
const SERVICE_GROUPS = {
  "maritime-intelligence": maritimeIntelligenceServices,
  "maritime-security": maritimeSecurityServices,
  "maritime-cyber": maritimeCyberServices,
  "geopolitical-analysis": geopoliticalAnalysisServices,
  "market-entry": marketEntryServices,
  "legal-evidence": legalEvidenceServices,
};

const DISCIPLINE_ORDER = disciplines.map((d) => d.id);

export const services = DISCIPLINE_ORDER.flatMap(
  (disciplineId) => SERVICE_GROUPS[disciplineId] ?? []
);

export const servicesById = Object.fromEntries(
  services.map((service) => [service.id, service])
);

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
);

export const servicesByDiscipline = DISCIPLINE_ORDER.reduce((acc, disciplineId) => {
  acc[disciplineId] = (SERVICE_GROUPS[disciplineId] ?? []).slice();
  return acc;
}, {});

export const serviceCount = services.length;

export const countsByDiscipline = DISCIPLINE_ORDER.reduce((acc, disciplineId) => {
  acc[disciplineId] = (SERVICE_GROUPS[disciplineId] ?? []).length;
  return acc;
}, {});

export const statusCounts = services.reduce((acc, service) => {
  acc[service.publicationStatus] = (acc[service.publicationStatus] ?? 0) + 1;
  return acc;
}, {});

export function getService(id) {
  return servicesById[id];
}

export default services;
