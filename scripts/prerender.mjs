// Static prerenderer. After `vite build` (client) and `vite build --ssr` have
// produced dist/index.html and dist-server/entry-server.js, this renders each
// public route to route-specific static HTML in dist/<route>/index.html.
//
// The BODY is server-rendered from the same React app (no browser, no analytics,
// no effects). The HEAD is injected from the same route table (getHead) that
// <Seo> uses at runtime, so the prerendered head exactly matches the client head
// (title, description, canonical, robots, OpenGraph, Twitter, JSON-LD). React
// then hydrates the prerendered markup on the client — same visual result.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { load } from "cheerio";

import { getHead } from "../src/routes/routeConfig.js";
import { formatTitle, SEO_DEFAULTS } from "../src/data/seo.js";
import { prerenderRoutes } from "./public-routes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const template = readFileSync(join(distDir, "index.html"), "utf8");

const { render } = await import(join(root, "dist-server", "entry-server.js"));

function applyHead($, route) {
  const head = getHead(route);
  const title = formatTitle(head.title);

  // <title>
  if ($("title").length) $("title").first().text(title);
  else $("head").append(`<title></title>`).find("title").text(title);

  const upsertMeta = (attr, key, content) => {
    if (content == null || content === "") return;
    const el = $(`meta[${attr}="${key}"]`);
    if (el.length) el.first().attr("content", content);
    else $("head").append(`<meta ${attr}="${key}">`).find(`meta[${attr}="${key}"]`).last().attr("content", content);
  };

  upsertMeta("name", "description", head.description);
  upsertMeta("name", "robots", head.robots);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", head.description);
  upsertMeta("property", "og:type", head.ogType);
  upsertMeta("property", "og:url", head.canonical);
  upsertMeta("property", "og:image", head.image);
  upsertMeta("property", "og:image:secure_url", head.imageSecureUrl);
  upsertMeta("property", "og:image:type", head.imageType);
  upsertMeta("property", "og:image:width", head.imageWidth == null ? null : String(head.imageWidth));
  upsertMeta("property", "og:image:height", head.imageHeight == null ? null : String(head.imageHeight));
  upsertMeta("property", "og:image:alt", head.imageAlt);
  upsertMeta("property", "og:site_name", SEO_DEFAULTS.siteName);
  upsertMeta("property", "og:locale", SEO_DEFAULTS.locale);
  upsertMeta("name", "twitter:card", SEO_DEFAULTS.twitterCard);
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", head.description);
  upsertMeta("name", "twitter:image", head.image);
  upsertMeta("name", "twitter:image:alt", head.imageAlt);

  // canonical
  const canon = $('link[rel="canonical"]');
  if (canon.length) canon.first().attr("href", head.canonical);
  else $("head").append(`<link rel="canonical" href="${head.canonical}">`);

  // JSON-LD (remove any previous, then add this route's)
  $('script[type="application/ld+json"]').remove();
  for (const schema of head.schemas || []) {
    $("head").append(
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    );
  }
  return title;
}

const routes = prerenderRoutes();
let ok = 0;
const failures = [];

for (const route of routes) {
  try {
    const appHtml = render(route);
    const $ = load(template);
    applyHead($, route);
    $("#root").html(appHtml);
    const out = $.html();
    const finalHtml = /^\s*<!doctype/i.test(out) ? out : "<!DOCTYPE html>\n" + out;

    const relDir = route === "/" ? "" : route;
    const outDir = join(distDir, relDir);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), finalHtml, "utf8");
    ok++;
    if (!appHtml || appHtml.length < 200) failures.push(`${route} (thin body: ${appHtml?.length || 0} chars)`);
  } catch (err) {
    failures.push(`${route} — ${err.message}`);
  }
}

console.log(`Prerendered ${ok}/${routes.length} routes to dist/<route>/index.html`);
if (failures.length) {
  console.error("PRERENDER FAILURES:\n  " + failures.join("\n  "));
  process.exit(1);
}
