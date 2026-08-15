// Market Entry services (Phase 7). 6 services.
// Source: legacy `marketEntryServices` in App.jsx, rewritten to the approved voice.

const DISCIPLINE_ID = "market-entry";
const IMAGE = "/market-entry-header.webp";
const IMAGE_ALT = "Market entry risk advisory";
const CTA = "Request market entry support";
const CLIENTS = [
  "Corporates entering new markets",
  "Energy and infrastructure operators",
  "Investors",
  "Project teams",
];

export const marketEntryServices = [
  {
    id: "me-country-entry-risk-assessments",
    slug: "country-entry-risk-assessments",
    disciplineId: DISCIPLINE_ID,
    insight:
      "Market exposure is cheapest to shape before entry and most expensive to unwind after it.",
    title: "Country Entry Risk Assessments",
    summary:
      "Assessment of political, security, regulatory and reputational risk prior to market entry, investment, mobilisation or commercial commitment.",
    introduction:
      "A country entry risk assessment examines the political, security, regulatory and reputational conditions of a market before capital, people or assets are committed, and sets out where exposure would sit once operations begin. It is built to shape the entry decision while it can still be changed, not to describe the risk after commitment.",
    clientProblem:
      "Entry decisions are often committed before the political, security and regulatory environment is fully understood.",
    scope: [
      "Political and security environment",
      "Regulatory and reputational risk",
      "Implications for entry and mobilisation",
    ],
    deliverables: ["Country entry risk assessment"],
    operationalApplication:
      "Used before entry, investment or mobilisation into a new market.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "me-regulatory-and-compliance-mapping",
      "me-local-partner-due-diligence",
      "ga-election-and-political-stability-monitoring",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Country Entry Risk Assessments — Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Assessment of political, security, regulatory and reputational risk prior to market entry, investment, mobilisation or commercial commitment.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "me-port-and-infrastructure-feasibility-studies",
    slug: "port-and-infrastructure-feasibility-studies",
    disciplineId: DISCIPLINE_ID,
    title: "Port and Infrastructure Feasibility Studies",
    shortTitle: "Feasibility Studies",
    summary:
      "Risk led review of ports, terminals, logistics corridors, energy infrastructure and physical operating environments before investment or mobilisation.",
    introduction:
      "Port and infrastructure feasibility studies apply a risk led review to ports, terminals, logistics corridors, energy infrastructure and physical operating environments before investment or mobilisation.",
    clientProblem:
      "Infrastructure and physical operating conditions can determine whether an investment is viable, and are best reviewed before commitment.",
    scope: [
      "Ports, terminals and logistics corridors",
      "Energy infrastructure",
      "Physical operating environment",
    ],
    deliverables: ["Risk led feasibility review"],
    operationalApplication:
      "Used before investment or mobilisation involving ports or infrastructure.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "me-country-entry-risk-assessments",
      "me-supply-chain-risk-mapping",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Port and Infrastructure Feasibility Studies — Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Risk led review of ports, terminals, logistics corridors, energy infrastructure and physical operating environments before investment or mobilisation.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "me-regulatory-and-compliance-mapping",
    slug: "regulatory-and-compliance-mapping",
    disciplineId: DISCIPLINE_ID,
    title: "Regulatory and Compliance Mapping",
    summary:
      "Mapping of regulatory requirements, licensing exposure, sanctions considerations, local constraints and compliance pressure points.",
    introduction:
      "Regulatory and compliance mapping sets out regulatory requirements, licensing exposure, sanctions considerations and local constraints relevant to an operation.",
    clientProblem:
      "Regulatory and licensing requirements in a new market are often unclear until they constrain operations.",
    scope: [
      "Regulatory requirements and licensing exposure",
      "Sanctions considerations",
      "Local constraints and compliance pressure points",
    ],
    deliverables: ["Regulatory and compliance map"],
    operationalApplication:
      "Used in entry planning and ongoing compliance review.",
    limits: ["Advisory mapping; not legal advice"],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "me-country-entry-risk-assessments",
      "mi-sanctions-exposure-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Regulatory and Compliance Mapping — Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Mapping of regulatory requirements, licensing exposure, sanctions considerations, local constraints and compliance pressure points.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "me-local-partner-due-diligence",
    slug: "local-partner-due-diligence",
    disciplineId: DISCIPLINE_ID,
    title: "Local Partner Due Diligence",
    summary:
      "Intelligence led review of local partners, agents, suppliers, owners, politically exposed persons and reputational risk indicators.",
    introduction:
      "Local partner due diligence provides an intelligence led review of local partners, agents, suppliers and owners, including politically exposed persons and reputational risk indicators.",
    clientProblem:
      "Local partners carry reputational, compliance and commercial risk that is not visible without due diligence.",
    scope: [
      "Partners, agents, suppliers and owners",
      "Politically exposed persons",
      "Reputational risk indicators",
    ],
    deliverables: ["Due diligence assessment on the relevant parties"],
    operationalApplication:
      "Used before appointing or contracting a local partner.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-counterparty-intelligence",
      "me-country-entry-risk-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Local Partner Due Diligence — Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Intelligence led review of local partners, agents, suppliers, owners, politically exposed persons and reputational risk indicators.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "me-security-framework-design-for-new-operations",
    slug: "security-framework-design-for-new-operations",
    disciplineId: DISCIPLINE_ID,
    title: "Security Framework Design for New Operations",
    shortTitle: "Security Framework Design",
    summary:
      "Design of practical security frameworks for new offices, sites, port operations, offshore activity, project teams and executive travel.",
    introduction:
      "Security framework design develops practical security frameworks for new offices, sites, port operations, offshore activity, project teams and executive travel.",
    clientProblem:
      "New operations require a security framework proportionate to the environment, set up before mobilisation.",
    scope: [
      "Offices, sites and port operations",
      "Offshore activity and project teams",
      "Executive travel",
    ],
    deliverables: ["Security framework for the new operation"],
    operationalApplication:
      "Used when establishing new operations or activity in a market.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "me-country-entry-risk-assessments",
      "ms-port-vulnerability-assessment",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Security Framework Design for New Operations — Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Design of practical security frameworks for new offices, sites, port operations, offshore activity, project teams and executive travel.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "me-supply-chain-risk-mapping",
    slug: "supply-chain-risk-mapping",
    disciplineId: DISCIPLINE_ID,
    title: "Supply Chain Risk Mapping",
    summary:
      "Assessment of supply chain vulnerabilities, chokepoints, political exposure, transport disruption and third party dependency risk.",
    introduction:
      "Supply chain risk mapping assesses supply chain vulnerabilities, chokepoints, political exposure, transport disruption and third party dependency risk.",
    clientProblem:
      "Supply chains concentrate exposure at chokepoints and dependencies that are not visible without mapping.",
    scope: [
      "Vulnerabilities and chokepoints",
      "Political exposure and transport disruption",
      "Third party dependency risk",
    ],
    deliverables: ["Supply chain risk map"],
    operationalApplication:
      "Used to assess and reduce supply chain exposure.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ga-energy-and-shipping-disruption-analysis",
      "me-port-and-infrastructure-feasibility-studies",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Supply Chain Risk Mapping — Market Entry | Trident Risk & Advisory",
    seoDescription:
      "Assessment of supply chain vulnerabilities, chokepoints, political exposure, transport disruption and third party dependency risk.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },
];

export default marketEntryServices;
