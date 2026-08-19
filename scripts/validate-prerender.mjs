// Prerender validator. Fails (exit 1) if any prerendered route's static HTML is
// generic or missing route-specific head/content. Run after `npm run build`.
//
//   node scripts/validate-prerender.mjs
//
// Complements (does not replace) scripts/validate-content.mjs.

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { getHead } from "../src/routes/routeConfig.js";
import { formatTitle } from "../src/data/seo.js";
import { prerenderRoutes } from "./public-routes.mjs";

const distDir = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const routes = prerenderRoutes();

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function attr(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}
// decode the few HTML entities we produce so comparisons are exact
function dec(s) {
  return s == null ? s : s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

const failures = [];
for (const route of routes) {
  const file = join(distDir, route === "/" ? "" : route, "index.html");
  if (!existsSync(file)) { failures.push(`${route}: no prerendered file`); continue; }
  const html = readFileSync(file, "utf8");
  const head = getHead(route);
  const expectedTitle = formatTitle(head.title);

  const title = dec(attr(html, /<title>([^<]*)<\/title>/i));
  if (title !== expectedTitle) failures.push(`${route}: title "${title}" != expected "${expectedTitle}"`);
  if (title === "Trident Risk and Advisory") failures.push(`${route}: generic app-shell title`);

  const desc = dec(attr(html, /<meta name="description" content="([^"]*)"/i));
  if (!desc || desc !== head.description) failures.push(`${route}: meta description missing/mismatch`);

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/i);
  if (canonical !== head.canonical) failures.push(`${route}: canonical "${canonical}" != "${head.canonical}"`);

  const robots = attr(html, /<meta name="robots" content="([^"]*)"/i);
  if (robots !== head.robots) failures.push(`${route}: robots "${robots}" != "${head.robots}"`);

  if (!/<h1[\s>]/i.test(html)) failures.push(`${route}: no <h1> in static HTML`);

  const jsonldCount = (html.match(/application\/ld\+json/g) || []).length;
  if ((head.schemas || []).length > 0 && jsonldCount < (head.schemas.length)) {
    failures.push(`${route}: expected ${head.schemas.length} JSON-LD blocks, found ${jsonldCount}`);
  }

  const internalLinks = (html.match(/<a [^>]*href="\/[^"]*"/g) || []).length;
  if (internalLinks < 3) failures.push(`${route}: too few internal links (${internalLinks})`);

  const textLen = stripTags(html.replace(/<head[\s\S]*?<\/head>/i, "")).length;
  if (textLen < 500) failures.push(`${route}: thin body text (${textLen} chars)`);
}

console.log(`Prerender validator: checked ${routes.length} routes`);
if (failures.length) {
  console.error("FAIL:\n  " + failures.join("\n  "));
  process.exit(1);
}
console.log("RESULT: PASS — every route has route-specific title/description/canonical/robots/H1/JSON-LD/links/content");
