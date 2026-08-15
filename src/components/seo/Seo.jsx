import { useEffect } from "react";
import { getHead } from "../../routes/routeConfig.js";
import {
  SEO_DEFAULTS,
  absoluteUrl,
  formatTitle,
} from "../../data/seo.js";

// Dependency-free document-head manager (Phase 8).
// No react-helmet or external head library: the tags are upserted directly on
// document.head inside an effect. Standard meta/link tags are updated in place
// (matched by a stable selector) so route changes never accumulate duplicates;
// JSON-LD blocks are marked and fully replaced on each change.
//
// Usage: <Seo pathname={location.pathname} /> resolves the head model from the
// route table. Explicit props override the resolved values, which is what future
// Service / Article pages (outside the current route table) will use.

const MANAGED = "data-seo-managed";
const JSONLD = "data-seo-jsonld";

function upsertMeta(attr, key, content) {
  if (content == null || content === "") return;
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MANAGED, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(schemas) {
  // Remove any previously injected JSON-LD, then add the current set.
  document.head
    .querySelectorAll(`script[${JSONLD}]`)
    .forEach((node) => node.remove());

  schemas
    .filter(Boolean)
    .forEach((schema) => {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute(JSONLD, "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
}

export default function Seo({
  pathname,
  title,
  description,
  image,
  canonicalPath,
  robots,
  ogType,
  schemas,
}) {
  // Resolve the base head model from the route table (when a pathname is given),
  // then let explicit props take precedence.
  const base = pathname != null ? getHead(pathname) : null;

  const resolvedTitle = formatTitle(title || base?.title || SEO_DEFAULTS.title);
  const resolvedDescription =
    description || base?.description || SEO_DEFAULTS.description;
  const resolvedCanonical = canonicalPath
    ? absoluteUrl(canonicalPath)
    : base?.canonical || absoluteUrl(pathname || "/");
  const resolvedImage = image
    ? absoluteUrl(image)
    : base?.image || absoluteUrl(SEO_DEFAULTS.image);
  const resolvedRobots = robots || base?.robots || SEO_DEFAULTS.robots;
  const resolvedOgType = ogType || base?.ogType || SEO_DEFAULTS.ogType;
  const resolvedSchemas = schemas || base?.schemas || [];

  // Serialise the schema set so the effect re-runs when structured data changes.
  const schemaKey = JSON.stringify(resolvedSchemas);

  useEffect(() => {
    document.title = resolvedTitle;

    // Standard head
    upsertMeta("name", "description", resolvedDescription);
    upsertMeta("name", "robots", resolvedRobots);
    upsertLink("canonical", resolvedCanonical);

    // Open Graph
    upsertMeta("property", "og:title", resolvedTitle);
    upsertMeta("property", "og:description", resolvedDescription);
    upsertMeta("property", "og:type", resolvedOgType);
    upsertMeta("property", "og:url", resolvedCanonical);
    upsertMeta("property", "og:image", resolvedImage);
    upsertMeta("property", "og:site_name", SEO_DEFAULTS.siteName);
    upsertMeta("property", "og:locale", SEO_DEFAULTS.locale);

    // Twitter
    upsertMeta("name", "twitter:card", SEO_DEFAULTS.twitterCard);
    upsertMeta("name", "twitter:title", resolvedTitle);
    upsertMeta("name", "twitter:description", resolvedDescription);
    upsertMeta("name", "twitter:image", resolvedImage);

    // Structured data
    setJsonLd(resolvedSchemas);
  }, [
    resolvedTitle,
    resolvedDescription,
    resolvedCanonical,
    resolvedImage,
    resolvedRobots,
    resolvedOgType,
    schemaKey,
  ]);

  return null;
}
