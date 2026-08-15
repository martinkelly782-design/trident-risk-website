// Site-level configuration and SEO defaults (Phase 7).
// Canonical constants for the whole site; consumed by later routing/SEO phases.

export const siteConfig = {
  name: "Trident Risk & Advisory",
  legalName: "Trident Risk and Advisory",
  // Registered legal entity that operates the website (owner-confirmed). The
  // public/trading brand remains "Trident Risk & Advisory".
  operatingEntity: "Trident FZC LLC",
  shortName: "Trident",
  url: "https://www.tridentrisk.org",
  email: "intelligence@tridentrisk.org",
  description:
    "Intelligence led maritime, geopolitical and legal risk advisory for shipping, energy, insurance and corporate clients operating in complex environments.",

  // Core differentiator — stated once here and adapted per discipline/service.
  // It is deliberately not repeated verbatim across pages.
  differentiator:
    "Trident covers the full arc from pre-fixture intelligence and operational risk through to expert evidence in arbitration and litigation.",

  seo: {
    titleTemplate: "%s | Trident Risk & Advisory",
    defaultTitle:
      "Trident Risk & Advisory — Maritime, Geopolitical and Legal Risk",
    defaultDescription:
      "Intelligence led maritime, geopolitical, cyber, market entry and legal advisory for organisations operating in complex and high risk environments.",
    ogImage: "/social-preview-v5.png",
    locale: "en_GB",
  },

  // Deterministic discipline ordering used across the site.
  disciplineOrder: [
    "maritime-intelligence",
    "maritime-security",
    "maritime-cyber",
    "geopolitical-analysis",
    "market-entry",
    "legal-evidence",
  ],
};

export default siteConfig;
