// Discipline records (Phase 7). Six disciplines, deterministic order.
// serviceIds are the ordered service IDs owned by each discipline; they are
// validated against the service records in validateContent.js.

export const disciplines = [
  {
    id: "maritime-intelligence",
    slug: "maritime-intelligence",
    name: "Maritime Intelligence",
    shortName: "Intelligence",
    homepageSummary:
      "Vessel, ownership and behavioural intelligence to identify exposure before commercial and operational decisions.",
    intro:
      "Maritime intelligence establishes what a vessel is, who controls it and how it behaves, so that exposure to ownership, sanctions, affiliation and behavioural risk can be understood before fixture, financing, insurance or entry into a high risk area.",
    positioning:
      "Intelligence is the first point on the Trident arc: the pre-fixture and pre-decision view that informs security planning downstream and, where matters are later disputed, the evidential record.",
    heroImage: "/maritime-intelligence-header.webp",
    heroImageAlt: "Aerial view of a merchant vessel underway",
    primaryCtaLabel: "Request intelligence support",
    seoTitle: "Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Vessel affiliation, sanctions exposure, AIS behaviour and pre-fixture intelligence to identify maritime risk before commercial and operational decisions.",
    serviceIds: [
      "mi-vessel-affiliation-checks",
      "mi-sanctions-exposure-analysis",
      "mi-port-call-risk-history",
      "mi-ais-manipulation-analysis",
      "mi-dark-activity-assessment",
      "mi-flag-and-registry-profiling",
      "mi-counterparty-intelligence",
      "mi-pre-charter-risk-intelligence",
      "mi-fleet-exposure-analysis",
      "mi-maritime-threat-assessments",
    ],
    relatedAnalysisIds: [],
  },

  {
    id: "maritime-security",
    slug: "maritime-security",
    name: "Maritime Security",
    shortName: "Security",
    homepageSummary:
      "Operational security advisory to protect vessels, crews and voyages in high threat environments.",
    intro:
      "Maritime security provides vessel and route specific advisory to reduce risk to vessels, crews, ports and offshore assets operating in high threat or unstable environments, supporting go or no-go decisions, transit planning and incident response.",
    positioning:
      "Security is where intelligence becomes operational: applying the pre-fixture picture to the protection of people, vessels and voyages, and coordinating the response when an incident develops.",
    heroImage: "/maritime-security-header.webp",
    heroImageAlt: "Maritime security operations at a port",
    primaryCtaLabel: "Request security support",
    seoTitle: "Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Port and voyage vulnerability assessment, high risk transit planning, onboard response and crisis support for vessels, crews and offshore assets.",
    serviceIds: [
      "ms-port-vulnerability-assessment",
      "ms-voyage-vulnerability-assessment",
      "ms-high-risk-area-transit-planning",
      "ms-bridge-response-officer",
      "ms-embarked-security-coordination",
      "ms-stowaway-risk-mitigation",
      "ms-offshore-asset-protection",
      "ms-crisis-response-and-incident-management",
      "ms-maritime-threat-monitoring",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
  },

  {
    id: "maritime-cyber",
    slug: "maritime-cyber",
    name: "Maritime Cyber",
    shortName: "Cyber",
    homepageSummary:
      "Cyber and electronic risk advisory for vessel systems, navigation and connected operations.",
    intro:
      "Maritime cyber addresses real world vulnerabilities in navigation, tracking, communications and onboard operational technology, where electronic interference or compromise can affect safety, operations and insurance exposure.",
    positioning:
      "Cyber risk is now inseparable from operational risk: navigation interference, AIS manipulation and OT exposure sit alongside physical threats in the operational picture Trident maintains.",
    heroImage: "/cyberheader.webp",
    heroImageAlt: "Maritime cyber and electronic risk environment",
    primaryCtaLabel: "Request cyber support",
    seoTitle: "Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Advisory on GNSS interference, AIS manipulation, vessel OT security and cyber resilience for ships, ports and offshore operations.",
    serviceIds: [
      "mc-ais-alternatives-and-resilient-tracking",
      "mc-gnss-interference-advisory",
      "mc-ais-spoofing-and-behaviour-analysis",
      "mc-vessel-ot-security-assessments",
      "mc-maritime-cyber-risk-assessments",
      "mc-cyber-incident-response",
      "mc-vessel-network-penetration-testing",
      "mc-crew-cyber-awareness-training",
      "mc-offshore-and-port-infrastructure-security",
      "mc-cyber-compliance-and-imo-iacs-advisory",
    ],
    relatedAnalysisIds: [],
  },

  {
    id: "geopolitical-analysis",
    slug: "geopolitical-analysis",
    name: "Geopolitical Analysis",
    shortName: "Geopolitical",
    homepageSummary:
      "Forward looking analysis of how conflict, sanctions and politics affect maritime and commercial operations.",
    intro:
      "Geopolitical analysis translates conflict, sanctions, elections and state policy into their practical consequences for maritime activity, energy markets, supply chains and market access.",
    positioning:
      "Geopolitical analysis sets the strategic context for the arc: the forward view of how the operating environment is likely to change before it becomes an operational or contractual problem.",
    heroImage: "/geopolitical-header.webp",
    heroImageAlt: "Geopolitical risk analysis visualisation",
    primaryCtaLabel: "Request geopolitical support",
    seoTitle: "Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Forward looking analysis of conflict, sanctions, elections and state policy and their impact on maritime, energy and commercial operations.",
    serviceIds: [
      "ga-regional-risk-reports",
      "ga-conflict-impact-assessments",
      "ga-energy-and-shipping-disruption-analysis",
      "ga-sanctions-forecasting",
      "ga-election-and-political-stability-monitoring",
      "ga-forward-looking-risk-scenarios",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
  },

  {
    id: "market-entry",
    slug: "market-entry",
    name: "Market Entry",
    shortName: "Market Entry",
    homepageSummary:
      "Risk led market entry advisory for organisations entering complex environments.",
    intro:
      "Market entry advisory identifies political, security, regulatory and partner risk before commitment, mobilisation or investment, so that exposure is understood while it can still be shaped.",
    positioning:
      "Market entry applies the same risk discipline before commitment that Trident applies before fixture: understanding exposure early, while decisions are still open.",
    heroImage: "/market-entry-header.webp",
    heroImageAlt: "Port infrastructure relevant to market entry advisory",
    primaryCtaLabel: "Request market entry support",
    seoTitle: "Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Country risk, regulatory mapping, partner due diligence and security framework design for organisations entering complex markets.",
    serviceIds: [
      "me-country-entry-risk-assessments",
      "me-port-and-infrastructure-feasibility-studies",
      "me-regulatory-and-compliance-mapping",
      "me-local-partner-due-diligence",
      "me-security-framework-design-for-new-operations",
      "me-supply-chain-risk-mapping",
    ],
    relatedAnalysisIds: [],
  },

  {
    id: "legal-evidence",
    slug: "legal-evidence",
    name: "Legal & Evidence",
    shortName: "Evidence",
    homepageSummary:
      "Operationally grounded expert witness and evidential support for maritime disputes.",
    intro:
      "Legal and evidence support applies operational maritime and security experience to disputes, providing expert witness opinion, war risk and standard of care analysis and evidential support for court and arbitration.",
    positioning:
      "Evidence is the final point on the Trident arc: the same understanding of vessels, threat and operational decisions, expressed as defensible analysis when matters reach arbitration or litigation.",
    heroImage: "/legalheader.webp",
    heroImageAlt: "Legal and expert witness support setting",
    primaryCtaLabel: "Request advisory support",
    seoTitle: "Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Expert witness opinion, war risk and standard of care analysis and evidential support for maritime court and arbitration proceedings.",
    serviceIds: [
      "le-expert-witness",
      "le-charterparty-dispute-support",
      "le-war-risk-and-real-danger-assessments",
      "le-p-and-i-and-insurance-claim-support",
      "le-standard-of-care-analysis",
      "le-court-and-arbitration-support",
      "le-joint-expert-meetings",
      "le-oral-evidence-preparation",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
  },
];

export const disciplinesById = Object.fromEntries(
  disciplines.map((discipline) => [discipline.id, discipline])
);

export default disciplines;
