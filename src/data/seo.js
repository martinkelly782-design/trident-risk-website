// SEO infrastructure (Phase 8). Dependency-free.
// Low-level helpers, defaults and JSON-LD schema builders shared by the route
// table (routeConfig.js) and the document-head component (Seo.jsx). This module
// holds NO React and NO route table — it is pure data + pure functions so it can
// be imported anywhere without a cycle.

import siteConfig from "./site.js";

const { url, name, legalName, email, description, seo } = siteConfig;

// Default social image. `/social-preview-v5.png` ships in /public (1200x630) and
// is the verified fallback used for Open Graph and Twitter cards.
export const DEFAULT_OG_IMAGE = seo.ogImage;

// Site-wide head defaults, applied when a route (or a future page) supplies none.
// The default social image (/social-preview-v5.png) is a 1200x630 PNG, so the
// image-type/dimension defaults describe it. A route may override these when it
// supplies its own page-specific social image (see routeConfig serviceRoute).
export const SEO_DEFAULTS = {
  title: seo.defaultTitle,
  description: seo.defaultDescription,
  image: DEFAULT_OG_IMAGE,
  imageType: "image/png",
  imageWidth: 1200,
  imageHeight: 630,
  robots: "index, follow",
  ogType: "website",
  siteName: name,
  locale: seo.locale,
  twitterCard: "summary_large_image",
};

// Resolve a path or already-absolute URL to an absolute canonical URL.
export function absoluteUrl(path = "/") {
  if (typeof path !== "string" || path === "") return url;
  if (/^https?:\/\//i.test(path)) return path;
  const base = url.replace(/\/+$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return suffix === "/" ? base : `${base}${suffix}`;
}

// Normalise a router pathname for lookup and canonicalisation: strip query,
// hash and any trailing slash (except the root).
export function normalizePath(pathname) {
  if (!pathname || typeof pathname !== "string") return "/";
  let p = pathname.split("?")[0].split("#")[0];
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

// Apply the brand title template unless the title is already branded.
export function formatTitle(title) {
  if (!title) return SEO_DEFAULTS.title;
  return /trident/i.test(title) ? title : seo.titleTemplate.replace("%s", title);
}

// --- JSON-LD schema builders -------------------------------------------------
// Each builder returns a plain object ready to be serialised into a
// <script type="application/ld+json"> tag.

// Homepage entity schema. ProfessionalService is a subtype of LocalBusiness /
// Organization and best fits an advisory practice.
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url.replace(/\/+$/, "")}/#organization`,
    name: legalName,
    alternateName: name,
    url,
    email,
    description,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl("/logo.png"),
    areaServed: "Worldwide",
    knowsAbout: [
      "Maritime intelligence",
      "Maritime security",
      "Maritime cyber risk",
      "Geopolitical analysis",
      "Market entry risk",
      "Maritime legal and expert evidence",
    ],
  };
}

// Interior-route breadcrumb trail. `trail` is an ordered list of
// { name, path } segments (root first).
export function breadcrumbListSchema(trail = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

// Minimal, supportable ItemList of named entities (e.g. a discipline's
// services). Name + position only — no URLs are asserted, because the target
// pages do not yet exist. This activates no unsupported data.
export function itemListSchema(name, items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((itemName, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: itemName,
    })),
  };
}

// --- Future schema support ---------------------------------------------------
// Exported for later phases (service detail + analysis/article routes). These
// are intentionally NOT wired into any current route: no unsupported data is
// activated by defining them.

// Service schema for an individual service page. Supported fields only — no
// invented ratings, offers, prices or deployment claims. `absoluteServiceUrl`
// is passed in (routeConfig owns the URL scheme) to avoid an import cycle.
export function serviceSchema(service = {}, discipline = {}, absoluteServiceUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: discipline.name,
    description: service.seoDescription || service.summary,
    provider: { "@id": `${url.replace(/\/+$/, "")}/#organization` },
    areaServed: "Worldwide",
    ...(absoluteServiceUrl ? { url: absoluteServiceUrl } : {}),
  };
}

export function articleSchema(article = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image ? absoluteUrl(article.image) : absoluteUrl(DEFAULT_OG_IMAGE),
    author: { "@type": "Organization", name: legalName },
    publisher: { "@id": `${url.replace(/\/+$/, "")}/#organization` },
    mainEntityOfPage: article.path ? absoluteUrl(article.path) : undefined,
  };
}

export default {
  DEFAULT_OG_IMAGE,
  SEO_DEFAULTS,
  absoluteUrl,
  normalizePath,
  formatTitle,
  professionalServiceSchema,
  breadcrumbListSchema,
  itemListSchema,
  serviceSchema,
  articleSchema,
};
