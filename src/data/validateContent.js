// Lightweight content-model validation (Phase 7). No dependencies.
// Returns a structured result; the runner script prints it and sets exit code.

import { disciplines } from "./disciplines.js";
import { services } from "./serviceIndex.js";

const APPROVED_STATUSES = ["published", "draft", "requires-review"];

const REQUIRED_SERVICE_FIELDS = [
  "id",
  "slug",
  "disciplineId",
  "title",
  "summary",
  "introduction",
  "clientProblem",
  "scope",
  "deliverables",
  "operationalApplication",
  "idealClientTypes",
  "relatedServiceIds",
  "relatedAnalysisIds",
  "ctaLabel",
  "seoTitle",
  "seoDescription",
  "image",
  "imageAlt",
  "publicationStatus",
];

const ARRAY_FIELDS = [
  "scope",
  "deliverables",
  "idealClientTypes",
  "relatedServiceIds",
  "relatedAnalysisIds",
];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateContent() {
  const errors = [];
  const warnings = [];

  const disciplineIds = new Set(disciplines.map((d) => d.id));
  const serviceIds = new Set(services.map((s) => s.id));
  const serviceSlugs = services.map((s) => s.slug);

  // --- Discipline count ---
  if (disciplines.length !== 6) {
    errors.push(`Expected exactly 6 disciplines, found ${disciplines.length}.`);
  }

  // --- Duplicate service IDs ---
  const idSeen = new Set();
  const duplicateIds = new Set();
  for (const s of services) {
    if (idSeen.has(s.id)) duplicateIds.add(s.id);
    idSeen.add(s.id);
  }
  for (const id of duplicateIds) errors.push(`Duplicate service id: ${id}`);

  // --- Duplicate service slugs ---
  const slugSeen = new Set();
  const duplicateSlugs = new Set();
  for (const slug of serviceSlugs) {
    if (slugSeen.has(slug)) duplicateSlugs.add(slug);
    slugSeen.add(slug);
  }
  for (const slug of duplicateSlugs)
    errors.push(`Duplicate service slug: ${slug}`);

  // --- Per-service checks ---
  for (const s of services) {
    const label = s.id || s.slug || s.title || "(unknown service)";

    // Required fields present
    for (const field of REQUIRED_SERVICE_FIELDS) {
      const value = s[field];
      const missing = ARRAY_FIELDS.includes(field)
        ? !Array.isArray(value)
        : !isNonEmptyString(value);
      if (missing) errors.push(`Service ${label} missing required field: ${field}`);
    }

    // Valid discipline reference
    if (s.disciplineId && !disciplineIds.has(s.disciplineId)) {
      errors.push(
        `Service ${label} references invalid disciplineId: ${s.disciplineId}`
      );
    }

    // Publication status
    if (!APPROVED_STATUSES.includes(s.publicationStatus)) {
      errors.push(
        `Service ${label} has invalid publicationStatus: ${s.publicationStatus}`
      );
    }

    // requires-review must carry an editorial note
    if (
      s.publicationStatus === "requires-review" &&
      !isNonEmptyString(s.editorialNote)
    ) {
      errors.push(
        `Service ${label} is requires-review but has no editorialNote.`
      );
    }

    // Related service references must resolve
    if (Array.isArray(s.relatedServiceIds)) {
      for (const ref of s.relatedServiceIds) {
        if (!serviceIds.has(ref)) {
          errors.push(
            `Service ${label} references non-existent related service: ${ref}`
          );
        }
        if (ref === s.id) {
          warnings.push(`Service ${label} lists itself as a related service.`);
        }
      }
    }
  }

  // --- Discipline -> service integrity ---
  const referencedByDiscipline = new Set();
  for (const d of disciplines) {
    if (!Array.isArray(d.serviceIds)) {
      errors.push(`Discipline ${d.id} has no serviceIds array.`);
      continue;
    }
    for (const sid of d.serviceIds) {
      referencedByDiscipline.add(sid);
      const svc = services.find((s) => s.id === sid);
      if (!svc) {
        errors.push(`Discipline ${d.id} references non-existent service: ${sid}`);
      } else if (svc.disciplineId !== d.id) {
        errors.push(
          `Service ${sid} is listed under ${d.id} but its disciplineId is ${svc.disciplineId}.`
        );
      }
    }
  }

  // --- Orphaned services (not owned by any discipline) ---
  for (const s of services) {
    if (!referencedByDiscipline.has(s.id)) {
      errors.push(`Orphaned service (not listed under any discipline): ${s.id}`);
    }
  }

  // --- Bridge Response Officer presence under Maritime Security ---
  const bro = services.find((s) => s.id === "ms-bridge-response-officer");
  const broOk = Boolean(bro) && bro.disciplineId === "maritime-security";
  if (!broOk) {
    errors.push(
      "Bridge Response Officer (ms-bridge-response-officer) is missing or not under maritime-security."
    );
  }

  // --- Summary ---
  const countsByDiscipline = Object.fromEntries(
    disciplines.map((d) => [
      d.id,
      services.filter((s) => s.disciplineId === d.id).length,
    ])
  );
  const statusCounts = services.reduce((acc, s) => {
    acc[s.publicationStatus] = (acc[s.publicationStatus] ?? 0) + 1;
    return acc;
  }, {});

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    summary: {
      disciplineCount: disciplines.length,
      totalServices: services.length,
      countsByDiscipline,
      statusCounts,
      duplicateIds: [...duplicateIds],
      duplicateSlugs: [...duplicateSlugs],
      bridgeResponseOfficerUnderMaritimeSecurity: broOk,
    },
  };
}

export default validateContent;
