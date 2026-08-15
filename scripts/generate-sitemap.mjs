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

import routes from "../src/routes/routeConfig.js";
import siteConfig from "../src/data/site.js";
import { publishedIntelligence } from "../src/data/intelligence.js";
import insights from "../src/data/insights.js";

const BASE = siteConfig.url.replace(/\/+$/, "");

// Indexable static routes from the route table (drops /request → noindex).
const staticPaths = routes
  .filter((r) => (r.robots || "").includes("index") && !(r.robots || "").includes("noindex"))
  .map((r) => r.path);

// Published intelligence detail pages.
const intelPaths = publishedIntelligence.map((r) => `/intelligence/${r.slug}`);

// Article-bearing insight pages (bespoke Iran page is already a static route).
const insightPaths = insights
  .filter((i) => i.sections)
  .map((i) => i.path || `/insights/${i.slug}`);

// De-duplicated, ordered union.
const seen = new Set();
const paths = [...staticPaths, ...intelPaths, ...insightPaths].filter((p) => {
  if (seen.has(p)) return false;
  seen.add(p);
  return true;
});

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
