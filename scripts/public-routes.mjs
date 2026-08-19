// Single source of truth for the public route set, derived from the live route
// table + published content. Used by both the sitemap generator and the
// prerenderer so the two never drift.

import routes from "../src/routes/routeConfig.js";
import { publishedIntelligence } from "../src/data/intelligence.js";
import insights from "../src/data/insights.js";

// Every indexable public URL (what the sitemap contains): indexable static /
// discipline / service / index routes + the Iran briefing, all PUBLISHED
// intelligence detail pages and all article-bearing insight pages. Excludes
// /request (noindex), /legal (redirect) and the 404.
export function indexableRoutes() {
  const staticPaths = routes
    .filter((r) => (r.robots || "").includes("index") && !(r.robots || "").includes("noindex"))
    .map((r) => r.path);
  const intelPaths = publishedIntelligence.map((r) => `/intelligence/${r.slug}`);
  const insightPaths = insights.filter((i) => i.sections).map((i) => i.path || `/insights/${i.slug}`);
  const seen = new Set();
  return [...staticPaths, ...intelPaths, ...insightPaths].filter((p) => {
    if (seen.has(p)) return false;
    seen.add(p);
    return true;
  });
}

// Routes to prerender to static HTML: every indexable route plus /request (a
// real page that is intentionally noindex — it still benefits from real HTML,
// and its head keeps robots: noindex, follow).
export function prerenderRoutes() {
  const set = new Set(indexableRoutes());
  set.add("/request");
  return [...set];
}
