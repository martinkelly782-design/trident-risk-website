// Phase 7 content-model validation runner.
// Usage: node scripts/validate-content.mjs
// Exits non-zero if validation fails.

import { validateContent } from "../src/data/validateContent.js";
import { validateIntelligence } from "../src/data/intelligence.js";

const result = validateContent();
const { summary, errors, warnings } = result;

const intel = validateIntelligence();

const line = (label, value) => console.log(`${label.padEnd(34)} ${value}`);

console.log("\nTrident content model — validation\n" + "=".repeat(44));
line("Disciplines:", summary.disciplineCount);
line("Total services:", summary.totalServices);
console.log("\nServices by discipline:");
for (const [id, count] of Object.entries(summary.countsByDiscipline)) {
  line(`  ${id}:`, count);
}
console.log("\nPublication status:");
for (const status of ["published", "draft", "requires-review"]) {
  line(`  ${status}:`, summary.statusCounts[status] ?? 0);
}
console.log("");
line("Duplicate IDs:", summary.duplicateIds.length ? summary.duplicateIds.join(", ") : "none");
line("Duplicate slugs:", summary.duplicateSlugs.length ? summary.duplicateSlugs.join(", ") : "none");
line(
  "BRO under Maritime Security:",
  summary.bridgeResponseOfficerUnderMaritimeSecurity ? "yes" : "NO"
);

console.log("\nPublic intelligence:");
line("  Total records:", intel.summary.total);
line("  Published:", intel.summary.published);
line("  Draft:", intel.summary.draft);
line("  Archived:", intel.summary.archived);
line("  Published regions:", intel.summary.publishedRegions.length ? intel.summary.publishedRegions.join(", ") : "none");

const allWarnings = [...warnings, ...intel.warnings];
if (allWarnings.length) {
  console.log("\nWarnings:");
  for (const w of allWarnings) console.log(`  - ${w}`);
}

const allErrors = [...errors, ...intel.errors];
if (allErrors.length) {
  console.log(`\nErrors (${allErrors.length}):`);
  for (const e of allErrors) console.log(`  - ${e}`);
  console.log("\nRESULT: FAIL\n");
  process.exit(1);
}

console.log("\nRESULT: PASS\n");
