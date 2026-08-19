// Central route table (Phase 8).
// Single source of truth for the site's current routes and their per-route SEO:
// title, description, canonical path, social image, robots directive, breadcrumb
// trail and JSON-LD schemas. AppRoutes.jsx renders the <Route> elements; Seo.jsx
// reads the resolved head model from getHead(). No routes are generated here — the
// table lists exactly the routes that exist today, in deterministic order.

import siteConfig from "../data/site.js";
import { disciplinesById } from "../data/disciplines.js";
import { services, servicesByDiscipline } from "../data/serviceIndex.js";
import {
  getPublishedIntelligenceBySlug,
  intelligenceDate,
} from "../data/intelligence.js";
import { getArticleInsightBySlug } from "../data/insights.js";
import {
  DEFAULT_OG_IMAGE,
  SEO_DEFAULTS,
  absoluteUrl,
  normalizePath,
  professionalServiceSchema,
  breadcrumbListSchema,
  itemListSchema,
  serviceSchema,
  articleSchema,
} from "../data/seo.js";

const HOME_CRUMB = { name: "Home", path: "/" };

// Services implemented as live pages in Phase 10A — the six reference services,
// one per discipline. Phase 10B expands this to every service. Discipline
// service links and generated routes derive from this set, so unimplemented
// services never route anywhere until their page exists.
export const IMPLEMENTED_SERVICE_IDS = new Set([
  "mi-vessel-affiliation-checks",
  "ms-bridge-response-officer",
  "ms-high-risk-area-transit-planning",
  "ms-voyage-vulnerability-assessment",
  "mc-gnss-interference-advisory",
  "ga-regional-risk-reports",
  "me-country-entry-risk-assessments",
  "le-expert-witness",
]);

// The live landing route for a discipline. Derived from the discipline slug, so
// legal-evidence resolves to "/legal-evidence" (activated in Phase 10; "/legal"
// is preserved as a redirect in AppRoutes).
export function disciplineRoutePath(disciplineId) {
  const discipline = disciplinesById[disciplineId];
  return discipline ? `/${discipline.slug}` : undefined;
}

// Canonical service URL: /<discipline-slug>/<service-slug>. Service slugs are
// globally unique; the discipline slug gives a readable, hierarchical path.
export function servicePath(service) {
  if (!service?.slug || !service?.disciplineId) return undefined;
  const discipline = disciplinesById[service.disciplineId];
  return discipline ? `/${discipline.slug}/${service.slug}` : undefined;
}

// Whether a service's own page route is live. In Phase 10A only the six
// reference services are implemented; the rest render in a clearly-unavailable
// state rather than routing to a non-existent page.
export function isServiceRouteLive(service) {
  return Boolean(service) && IMPLEMENTED_SERVICE_IDS.has(service.id);
}

// Build an interior discipline route descriptor. `routePath` is the live URL
// (kept exactly as today, e.g. "/legal"); `disciplineId` selects the Phase 7
// content record that supplies the SEO copy and hero image.
function disciplineRoute(routePath, disciplineId, breadcrumbLabel) {
  const discipline = disciplinesById[disciplineId];
  const label = breadcrumbLabel || discipline.name;
  const breadcrumbs = [HOME_CRUMB, { name: label, path: routePath }];
  const serviceNames = (servicesByDiscipline[disciplineId] || []).map(
    (service) => service.title
  );

  return {
    path: routePath,
    title: discipline.seoTitle,
    description: discipline.seoDescription,
    image: discipline.heroImage,
    robots: "index, follow",
    ogType: "website",
    breadcrumbs,
    schemas: [
      breadcrumbListSchema(breadcrumbs),
      // Supportable ItemList of the discipline's real services (names only).
      itemListSchema(`${discipline.name} services`, serviceNames),
    ],
  };
}

// Build a service route descriptor: unique SEO head plus BreadcrumbList and
// Service structured data. Breadcrumb trail is Home → Discipline → Service.
function serviceRoute(service) {
  const discipline = disciplinesById[service.disciplineId];
  const path = servicePath(service);
  const breadcrumbs = [
    HOME_CRUMB,
    { name: discipline.name, path: disciplineRoutePath(discipline.id) },
    { name: service.title, path },
  ];

  return {
    path,
    title: service.seoTitle,
    description: service.seoDescription,
    // og:image — a service may override with its own page-specific social image.
    image: service.ogImage || service.image,
    robots: "index, follow",
    ogType: "website",
    breadcrumbs,
    schemas: [
      breadcrumbListSchema(breadcrumbs),
      serviceSchema(service, discipline, absoluteUrl(path)),
    ],
  };
}

// Head descriptors for the implemented service routes (Phase 10A: six).
const serviceRoutes = services
  .filter((service) => IMPLEMENTED_SERVICE_IDS.has(service.id))
  .map(serviceRoute);

// Head descriptor for a primary-nav index route (IA correction). Indexable,
// with a Home → <name> breadcrumb trail. Metadata added only for these newly
// created index pages; no existing canonical route is changed.
function indexRoute(path, name, title, description) {
  const breadcrumbs = [HOME_CRUMB, { name, path }];
  return {
    path,
    title,
    description,
    image: DEFAULT_OG_IMAGE,
    robots: "index, follow",
    ogType: "website",
    breadcrumbs,
    schemas: [breadcrumbListSchema(breadcrumbs)],
  };
}

const REQUEST_CRUMBS = [HOME_CRUMB, { name: "Request Support", path: "/request" }];
const IRAN_CRUMBS = [
  HOME_CRUMB,
  {
    name: "Iran Maritime Legal Risk Briefing",
    path: "/iran-maritime-legal-risk-briefing",
  },
];

// Deterministic route order. Every entry corresponds to a live route preserved
// from Phase 7; nothing here activates a future path.
export const routes = [
  {
    path: "/",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    image: DEFAULT_OG_IMAGE,
    robots: "index, follow",
    ogType: "website",
    breadcrumbs: [],
    schemas: [professionalServiceSchema()],
  },
  disciplineRoute("/maritime-intelligence", "maritime-intelligence"),
  disciplineRoute("/maritime-security", "maritime-security"),
  disciplineRoute("/maritime-cyber", "maritime-cyber"),
  disciplineRoute("/geopolitical-analysis", "geopolitical-analysis"),
  disciplineRoute("/market-entry", "market-entry"),
  // Canonical legal discipline route is now "/legal-evidence" (/legal redirects).
  disciplineRoute("/legal-evidence", "legal-evidence", "Legal & Evidence"),
  // Primary-nav index routes (IA correction).
  indexRoute(
    "/expertise",
    "Expertise",
    "Expertise | Trident Risk & Advisory",
    "Trident's six areas of maritime expertise — intelligence, security, cyber, geopolitical analysis, market entry and legal and evidence."
  ),
  indexRoute(
    "/services",
    "Services",
    "Services | Trident Risk & Advisory",
    "Commissionable maritime intelligence, security, cyber, geopolitical, market entry and legal and evidence services from Trident Risk & Advisory."
  ),
  indexRoute(
    "/intelligence",
    "Intelligence",
    "Intelligence | Trident Risk & Advisory",
    "Trident's operational view of developing maritime intelligence, security, cyber and geopolitical situations."
  ),
  indexRoute(
    "/insights",
    "Insights",
    "Insights | Trident Risk & Advisory",
    "Analysis, briefings and assessments from Trident Risk & Advisory on maritime and geopolitical risk."
  ),
  indexRoute(
    "/about",
    "About",
    "About | Trident Risk & Advisory",
    "Trident Risk & Advisory is a specialist maritime intelligence and risk advisory business, covering the full arc from intelligence to expert evidence."
  ),
  indexRoute(
    "/contact",
    "Contact",
    "Contact | Trident Risk & Advisory",
    "Speak to Trident Risk & Advisory about maritime intelligence, security, cyber, geopolitical, market entry or legal and evidence support."
  ),
  indexRoute(
    "/privacy-policy",
    "Privacy Policy",
    "Privacy Policy | Trident Risk & Advisory",
    "How Trident Risk & Advisory handles personal information in connection with the tridentrisk.org website."
  ),
  indexRoute(
    "/terms",
    "Website Terms of Use",
    "Terms of Use | Trident Risk & Advisory",
    "The terms that govern use of the Trident Risk & Advisory website and its public content."
  ),
  indexRoute(
    "/cookies",
    "Cookie Policy",
    "Cookie Policy | Trident Risk & Advisory",
    "How the Trident Risk & Advisory website uses cookies and similar storage technologies, and how to control them."
  ),
  // Implemented service pages.
  ...serviceRoutes,
  {
    path: "/request",
    title: "Request Support | Trident Risk & Advisory",
    description:
      "Request maritime intelligence, security, cyber, geopolitical, market entry or legal and evidence support from Trident Risk & Advisory.",
    image: DEFAULT_OG_IMAGE,
    // Utility form page — keep out of the index but let links be followed.
    robots: "noindex, follow",
    ogType: "website",
    breadcrumbs: REQUEST_CRUMBS,
    schemas: [breadcrumbListSchema(REQUEST_CRUMBS)],
  },
  {
    path: "/iran-maritime-legal-risk-briefing",
    title: "Iran Maritime Legal Risk Briefing | Trident Risk & Advisory",
    description:
      "Trident briefing on Iran-related maritime legal and war risk exposure, targeting indicators and vessel affiliation considerations for owners, insurers and counsel.",
    image: DEFAULT_OG_IMAGE,
    robots: "index, follow",
    ogType: "article",
    breadcrumbs: IRAN_CRUMBS,
    schemas: [breadcrumbListSchema(IRAN_CRUMBS)],
  },
];

const routesByPath = Object.fromEntries(routes.map((route) => [route.path, route]));

// The head model applied when no route matches (unknown URL → 404). Kept out of
// the index; canonical points at the site root rather than the bad path.
export function notFoundHead(pathname = "/") {
  return {
    path: normalizePath(pathname),
    title: "Page not found | Trident Risk & Advisory",
    description:
      "The page you requested could not be found. Return to Trident Risk & Advisory to continue.",
    canonical: siteConfig.url,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    robots: "noindex, follow",
    ogType: "website",
    breadcrumbs: [HOME_CRUMB, { name: "Page not found", path: normalizePath(pathname) }],
    schemas: [],
    notFound: true,
  };
}

// Look up a route descriptor by pathname (normalised). Returns undefined for
// unknown paths.
export function getRoute(pathname) {
  return routesByPath[normalizePath(pathname)];
}

// Resolve a route descriptor for the two dynamic content templates
// (/intelligence/:slug and /insights/:slug), which are not in the static table.
// Only PUBLISHED intelligence and article-bearing insights resolve; unknown or
// draft slugs return null and fall through to the 404 head. This gives every
// real content page a proper, indexable, per-item head from the single
// top-level <Seo>, rather than inheriting the 404 head.
function dynamicRoute(pathname) {
  if (pathname.startsWith("/intelligence/")) {
    const slug = pathname.slice("/intelligence/".length);
    const record = getPublishedIntelligenceBySlug(slug);
    if (!record) return null;
    const path = `/intelligence/${record.slug}`;
    const breadcrumbs = [
      HOME_CRUMB,
      { name: "Intelligence", path: "/intelligence" },
      { name: record.headline, path },
    ];
    return {
      path,
      title: record.headline,
      description: record.summary,
      image: DEFAULT_OG_IMAGE,
      robots: "index, follow",
      ogType: "article",
      breadcrumbs,
      schemas: [
        breadcrumbListSchema(breadcrumbs),
        articleSchema({
          title: record.headline,
          description: record.summary,
          datePublished: intelligenceDate(record),
          path,
        }),
      ],
    };
  }

  if (pathname.startsWith("/insights/")) {
    const slug = pathname.slice("/insights/".length);
    const record = getArticleInsightBySlug(slug);
    if (!record) return null;
    const path = record.path || `/insights/${record.slug}`;
    const displayName = record.displayTitle || record.title;
    const breadcrumbs = [
      HOME_CRUMB,
      { name: "Insights", path: "/insights" },
      { name: displayName, path },
    ];
    return {
      path,
      // SEO/browser title may differ from the editorial headline (record.title)
      // to match how the risk is searched for; the on-page H1 stays editorial.
      title: record.metaTitle || record.title,
      description: record.standfirst,
      image: record.image || DEFAULT_OG_IMAGE,
      robots: "index, follow",
      ogType: "article",
      breadcrumbs,
      schemas: [
        breadcrumbListSchema(breadcrumbs),
        articleSchema({
          title: record.title,
          description: record.standfirst,
          datePublished: record.publishedAt,
          image: record.image,
          path,
        }),
      ],
    };
  }

  return null;
}

// Resolve a pathname to the full head model consumed by Seo.jsx. Always returns
// an object; unknown paths resolve to the 404 head.
export function getHead(pathname) {
  const route = getRoute(pathname) || dynamicRoute(normalizePath(pathname));
  if (!route) return notFoundHead(pathname);

  return {
    path: route.path,
    title: route.title || SEO_DEFAULTS.title,
    description: route.description || SEO_DEFAULTS.description,
    canonical: absoluteUrl(route.path),
    image: absoluteUrl(route.image || DEFAULT_OG_IMAGE),
    robots: route.robots || SEO_DEFAULTS.robots,
    ogType: route.ogType || SEO_DEFAULTS.ogType,
    breadcrumbs: route.breadcrumbs || [],
    schemas: route.schemas || [],
    notFound: false,
  };
}

export default routes;
