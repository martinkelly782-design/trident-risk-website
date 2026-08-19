// Sitemap generator. Derives public/sitemap.xml from the live route table and
// published content so it never drifts from what the site actually exposes.
//
//   node scripts/generate-sitemap.mjs
//
// Included: every indexable static/discipline/service/index route, the Iran
// briefing, all PUBLISHED intelligence detail pages and all article-bearing
// insight pages. Excluded: /request (noindex), /legal (redirect), the 404, and
// any draft/unpublished content (which is not indexable).

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import siteConfig from "../src/data/site.js";
import { indexableRoutes } from "./public-routes.mjs";

const BASE = siteConfig.url.replace(/\/+$/, "");

// Indexable public URLs (shared with the prerenderer — single source of truth).
const paths = indexableRoutes();

const body = paths
  .map((p) => `  <url>\n    <loc>${BASE}${p === "/" ? "/" : p}</loc>\n  </url>`)
  .join("\n\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${body}

</urlset>
`;

const outPath = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${paths.length} URLs to public/sitemap.xml`);
