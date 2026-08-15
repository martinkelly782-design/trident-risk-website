// Geopolitical Analysis services (Phase 7). 6 services.
// Source: legacy `geopoliticalServices` (canonical) in App.jsx. Note: a second,
// near-duplicate inline copy exists inside `pillars[]` with minor wording drift;
// that duplication is flagged for reconciliation in a later phase.

const DISCIPLINE_ID = "geopolitical-analysis";
const IMAGE = "/geopolitical-header.webp";
const IMAGE_ALT = "Geopolitical risk analysis";
const CTA = "Request geopolitical support";
const CLIENTS = [
  "Shipowners and operators",
  "Energy and commodities firms",
  "Corporate leadership",
  "Insurers",
  "Legal teams",
];

export const geopoliticalAnalysisServices = [
  {
    id: "ga-regional-risk-reports",
    slug: "regional-risk-reports",
    disciplineId: DISCIPLINE_ID,
    insight:
      "Regional risk means little until it is attached to a specific vessel, voyage or contract.",
    title: "Regional Risk Reports",
    summary:
      "Structured reporting on political, security and conflict developments affecting maritime and commercial operations.",
    introduction:
      "A regional risk report gives a decision-maker one structured read of the political, security and conflict picture in a defined area, and connects those developments to the operational and commercial consequences that follow — for routing, port calls, crew and contractual exposure. It is written to inform a specific decision, not to summarise the news.",
    clientProblem:
      "Decision makers need a structured regional view that connects political and security developments to operational consequences.",
    scope: [
      "Political and security developments",
      "Conflict dynamics",
      "Relevance to maritime and commercial operations",
    ],
    deliverables: ["Structured regional risk report"],
    operationalApplication:
      "Used to inform operational, routing and commercial decisions in a region.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ga-conflict-impact-assessments",
      "mi-maritime-threat-assessments",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
    ctaLabel: CTA,
    seoTitle:
      "Regional Risk Reports — Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Structured reporting on political, security and conflict developments affecting maritime and commercial operations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ga-conflict-impact-assessments",
    slug: "conflict-impact-assessments",
    disciplineId: DISCIPLINE_ID,
    title: "Conflict Impact Assessments",
    summary:
      "Assessment of how conflict, military escalation, proxy activity or state action may affect assets, personnel, supply chains and operations.",
    introduction:
      "Conflict impact assessments consider how conflict, military escalation, proxy activity or state action may affect assets, personnel, supply chains and operations.",
    clientProblem:
      "Conflict affects commercial operations through multiple, interacting channels that require structured assessment.",
    scope: [
      "Conflict, escalation and proxy activity",
      "State action",
      "Impact on assets, personnel, supply chains and operations",
    ],
    deliverables: ["Conflict impact assessment for the relevant exposure"],
    operationalApplication:
      "Used to assess exposure to a specific conflict or escalation scenario.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ga-regional-risk-reports",
      "ga-energy-and-shipping-disruption-analysis",
      "ga-forward-looking-risk-scenarios",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Conflict Impact Assessments — Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Assessment of how conflict, military escalation, proxy activity or state action may affect assets, personnel, supply chains and operations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ga-energy-and-shipping-disruption-analysis",
    slug: "energy-and-shipping-disruption-analysis",
    disciplineId: DISCIPLINE_ID,
    title: "Energy and Shipping Disruption Analysis",
    shortTitle: "Disruption Analysis",
    summary:
      "Analysis of disruption to ports, chokepoints, energy infrastructure, freight routes, offshore operations and regional logistics networks.",
    introduction:
      "Energy and shipping disruption analysis examines disruption to ports, chokepoints, energy infrastructure, freight routes, offshore operations and regional logistics networks.",
    clientProblem:
      "Disruption to chokepoints and infrastructure propagates through energy and shipping in ways that require dedicated analysis.",
    scope: [
      "Ports, chokepoints and freight routes",
      "Energy and offshore infrastructure",
      "Regional logistics networks",
    ],
    deliverables: ["Disruption analysis for the relevant routes or infrastructure"],
    operationalApplication:
      "Used to assess exposure of shipping and energy operations to disruption.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ga-conflict-impact-assessments",
      "me-supply-chain-risk-mapping",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Energy and Shipping Disruption Analysis — Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Analysis of disruption to ports, chokepoints, energy infrastructure, freight routes, offshore operations and regional logistics networks.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ga-sanctions-forecasting",
    slug: "sanctions-forecasting",
    disciplineId: DISCIPLINE_ID,
    title: "Sanctions Forecasting",
    summary:
      "Forward looking assessment of potential sanctions, regulatory tightening, enforcement trends and likely commercial impact.",
    introduction:
      "Sanctions forecasting provides a forward looking assessment of potential sanctions, regulatory tightening and enforcement trends, and their likely commercial impact.",
    clientProblem:
      "Commercial planning is exposed to sanctions and regulatory change that has not yet occurred but can be anticipated.",
    scope: [
      "Potential sanctions and regulatory tightening",
      "Enforcement trends",
      "Likely commercial impact",
    ],
    deliverables: ["Forward looking sanctions and regulatory outlook"],
    operationalApplication:
      "Used in forward planning where future sanctions or regulatory change would affect operations.",
    limits: [
      "Forward looking assessment, not legal advice or a formal determination",
    ],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-sanctions-exposure-analysis",
      "ga-forward-looking-risk-scenarios",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Sanctions Forecasting — Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Forward looking assessment of potential sanctions, regulatory tightening, enforcement trends and likely commercial impact.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Positioning overlaps with Maritime Intelligence 'Sanctions Exposure Analysis'. This service is forward-looking forecasting; the intelligence service is present-tense exposure screening. The boundary requires editorial confirmation, and the relationship to legal advice must be clearly stated.",
  },

  {
    id: "ga-election-and-political-stability-monitoring",
    slug: "election-and-political-stability-monitoring",
    disciplineId: DISCIPLINE_ID,
    title: "Election and Political Stability Monitoring",
    shortTitle: "Political Stability Monitoring",
    summary:
      "Monitoring of election cycles, public order risk, governance stability, policy direction and business disruption indicators.",
    introduction:
      "Election and political stability monitoring tracks election cycles, public order risk, governance stability, policy direction and business disruption indicators.",
    clientProblem:
      "Election cycles and governance change can disrupt operations and policy in ways that reward early monitoring.",
    scope: [
      "Election cycles and public order risk",
      "Governance stability and policy direction",
      "Business disruption indicators",
    ],
    deliverables: ["Monitoring of political stability against defined exposure"],
    operationalApplication:
      "Used where operations are exposed to election cycles or governance change.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ga-regional-risk-reports",
      "me-country-entry-risk-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Election and Political Stability Monitoring — Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Monitoring of election cycles, public order risk, governance stability, policy direction and business disruption indicators.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ga-forward-looking-risk-scenarios",
    slug: "forward-looking-risk-scenarios",
    disciplineId: DISCIPLINE_ID,
    title: "Forward-Looking Risk Scenarios",
    shortTitle: "Risk Scenarios",
    summary:
      "Scenario based analysis to help leadership teams prepare for deterioration, escalation, stabilisation or market access changes.",
    introduction:
      "Forward-looking risk scenarios use scenario based analysis to help leadership teams prepare for deterioration, escalation, stabilisation or changes in market access.",
    clientProblem:
      "Leadership teams need structured scenarios to prepare for a range of plausible outcomes rather than a single forecast.",
    scope: [
      "Deterioration and escalation scenarios",
      "Stabilisation scenarios",
      "Market access change",
    ],
    deliverables: ["Scenario analysis for leadership planning"],
    operationalApplication:
      "Used to support leadership planning under uncertainty.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ga-conflict-impact-assessments",
      "ga-sanctions-forecasting",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Forward-Looking Risk Scenarios — Geopolitical Analysis | Trident Risk & Advisory",
    seoDescription:
      "Scenario based analysis to help leadership teams prepare for deterioration, escalation, stabilisation or market access changes.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },
];

export default geopoliticalAnalysisServices;
