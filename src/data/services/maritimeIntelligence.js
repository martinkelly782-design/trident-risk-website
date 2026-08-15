// Maritime Intelligence services (Phase 7). 10 services.
// Source: legacy `maritimeIntelligenceServices` in App.jsx, rewritten to the
// approved institutional voice. Restrained where the source is thin.

const DISCIPLINE_ID = "maritime-intelligence";
const IMAGE = "/maritime-intelligence-header.webp";
const IMAGE_ALT = "Maritime intelligence and vessel analysis";
const CTA = "Request intelligence support";
const CLIENTS = [
  "Shipowners",
  "Charterers",
  "Ship managers",
  "Marine insurers and P&I clubs",
  "Legal teams",
];

export const maritimeIntelligenceServices = [
  {
    id: "mi-vessel-affiliation-checks",
    // Route/slug preserved deliberately to avoid breaking existing URLs and SEO;
    // the client-facing name is now "Vessel Affiliation Assessment".
    slug: "vessel-affiliation-checks",
    disciplineId: DISCIPLINE_ID,
    insight:
      "Operational exposure is often influenced by perception rather than legal ownership.",
    title: "Vessel Affiliation Assessment",
    summary:
      "Vessel-specific intelligence assessing ownership, management, trading history, port calls and wider associations against the threat profile relevant to the operating environment.",
    introduction:
      "Vessel affiliation assessment examines how a vessel may be perceived by the relevant threat actor within a particular operating environment. Ownership, management, trading history, port calls, commercial relationships, associated entities, AIS, sanctions information, media and other intelligence are assembled as inputs to that judgement, not treated as the purpose in themselves. The result gives decision-makers a clearer view of whether a vessel's characteristics, relationships or behaviour may affect its relevance to a specific threat profile.",
    purpose:
      "To help decision-makers understand whether characteristics, relationships or behaviour associated with a vessel may affect its relevance to a specific threat profile within a given operating environment.",
    clientProblem:
      "A vessel's exposure cannot always be understood from flag, registered ownership or a single corporate relationship. Relevant threat actors may interpret ownership, management, trading history, port calls, commercial associations and vessel behaviour differently depending on the current operating environment, so clients need vessel-specific analysis rather than a single ownership or sanctions check.",
    // The six approved assessment areas. The former ownership/control, trading
    // and associated-entity fields map into areas 1, 2 and 4; behaviour, the
    // threat-actor profile and current intelligence make the reframe explicit.
    scope: [
      "Ownership & control",
      "Trading history",
      "Vessel behaviour",
      "Associated entities",
      "Threat-actor profile",
      "Current intelligence",
    ],
    // Intelligence inputs to the assessment — not every source is used in every
    // engagement (see sourcesNote); "where relevant" marks the discretionary ones.
    sources: [
      "AIS",
      "Shipping databases",
      "Company records",
      "Sanctions databases",
      "Satellite imagery where relevant",
      "Media reporting",
      "Social media where relevant",
    ],
    sourcesNote:
      "Sources are selected as relevant to the vessel, voyage and operating environment; not every source is used in every engagement.",
    // Formal deliverable: a single written assessment. `outputs` are the
    // analytical components presented within it, not separate documents.
    deliverables: [
      "Written vessel affiliation and exposure assessment",
    ],
    outputs: [
      "Vessel affiliation assessment",
      "Affiliation matrix",
      "Threat-actor assessment",
      "Confidence assessment",
      "Operational recommendations",
    ],
    outputsNote:
      "Analytical components of the assessment, not separate deliverables. The formal deliverable is a single written assessment; components are presented within it and scope is confirmed for each engagement.",
    operationalApplication:
      "Commissioned before entering a higher-risk operating environment or a threat-sensitive transit, before fixture or voyage approval, or when ownership, trading history or a change in the threat environment creates uncertainty about a vessel's exposure.",
    operationalPrinciple:
      "Affiliation assessment does not predict whether a vessel will be attacked. It identifies whether characteristics, relationships or behaviour may increase or reduce the vessel's relevance to a specific threat profile, giving decision-makers a stronger basis for operational judgement.",
    // Applied to the environment relevant to the voyage; no fixed or universal
    // targeting criteria are assumed or encoded here. Actors named only as
    // examples of environments, never as encoded targeting rules.
    threatActorScope:
      "Applied to the threat environment relevant to the voyage or operation — for example transits exposed to Houthi or Iranian activity, or other relevant state or non-state actors. The assessment does not rely on fixed or universal targeting criteria.",
    limits: [],
    idealClientTypes: CLIENTS,
    // Reassessed for the threat-actor-led proposition: the strongest current
    // relationships are the operational transit services the assessment feeds
    // (HRA transit planning, voyage vulnerability) plus the closest intelligence
    // inputs (sanctions exposure, flag & registry). Counterparty Intelligence was
    // dropped as it reflected the former counterparty-due-diligence framing.
    relatedServiceIds: [
      "ms-high-risk-area-transit-planning",
      "ms-voyage-vulnerability-assessment",
      "mi-sanctions-exposure-analysis",
      "mi-flag-and-registry-profiling",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Vessel Affiliation Assessment — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Vessel-specific maritime intelligence assessing how a vessel may be perceived by the relevant threat actor — weighing ownership, trading history, port calls and wider associations against the threat profile for the operating environment.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mi-sanctions-exposure-analysis",
    slug: "sanctions-exposure-analysis",
    disciplineId: DISCIPLINE_ID,
    title: "Sanctions Exposure Analysis",
    summary:
      "Screening of vessels, ownership, cargo, routing and counterparties against sanctions regimes and enforcement trends.",
    introduction:
      "Sanctions exposure analysis screens a vessel, its ownership, cargo, routing and counterparties against relevant sanctions regimes to identify present exposure before a transaction proceeds.",
    clientProblem:
      "Sanctions exposure can arise through ownership, cargo, routing or counterparties in ways that are not visible without structured screening.",
    scope: [
      "Vessel, ownership and counterparty screening",
      "Cargo and routing considerations",
      "Relevant sanctions regimes and enforcement context",
    ],
    deliverables: [
      "Written screening assessment identifying present sanctions exposure",
    ],
    operationalApplication:
      "Used before fixture, cargo nomination, payment or insurance placement.",
    limits: [
      "Risk assessment, not legal advice or a formal sanctions determination",
    ],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-vessel-affiliation-checks",
      "mi-counterparty-intelligence",
      "ga-sanctions-forecasting",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Sanctions Exposure Analysis — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Screening of vessels, ownership, cargo, routing and counterparties against sanctions regimes to identify present exposure before a transaction.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Positioning overlaps with Geopolitical Analysis 'Sanctions Forecasting'. This service is present-tense exposure screening; the geopolitical service is forward-looking forecasting of likely future sanctions. The boundary and the specific screening deliverables require editorial confirmation, and the relationship to legal advice must be clearly stated.",
  },

  {
    id: "mi-port-call-risk-history",
    slug: "port-call-risk-history",
    disciplineId: DISCIPLINE_ID,
    title: "Port Call Risk History",
    summary:
      "Analysis of historical and recent port calls to identify exposure to high risk jurisdictions, conflict areas and sensitive trading patterns.",
    introduction:
      "Port call risk history reviews a vessel's historical and recent port calls to identify exposure to high risk jurisdictions, conflict areas and sensitive trading patterns.",
    clientProblem:
      "A vessel's recent trading pattern can carry exposure that is not apparent from its current voyage alone.",
    scope: [
      "Historical and recent port calls",
      "High risk jurisdiction and conflict area exposure",
      "Sensitive or anomalous trading patterns",
    ],
    deliverables: [
      "Written review of port call history and associated exposure",
    ],
    operationalApplication:
      "Used before fixture, chartering or insurance placement, and to support due diligence.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-vessel-affiliation-checks",
      "mi-dark-activity-assessment",
      "mi-fleet-exposure-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Port Call Risk History — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Analysis of a vessel's historical and recent port calls to identify exposure to high risk jurisdictions, conflict areas and sensitive trading patterns.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mi-ais-manipulation-analysis",
    slug: "ais-manipulation-analysis",
    disciplineId: DISCIPLINE_ID,
    title: "AIS Manipulation Analysis",
    summary:
      "Detection of AIS spoofing, dark activity, identity masking and abnormal vessel behaviour patterns.",
    introduction:
      "AIS manipulation analysis examines a vessel's AIS record for spoofing, identity masking and abnormal behaviour, framed as an intelligence product to inform risk decisions.",
    clientProblem:
      "AIS data can be manipulated to disguise identity, position or activity, misleading commercial and compliance decisions.",
    scope: [
      "AIS spoofing and identity masking indicators",
      "Signal gaps and abnormal behaviour patterns",
      "Interpretation for risk decision making",
    ],
    deliverables: [
      "Written analysis of AIS manipulation indicators and their risk implications",
    ],
    operationalApplication:
      "Used to support pre-fixture, compliance and insurance decisions where AIS integrity is in question.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-dark-activity-assessment",
      "mc-ais-spoofing-and-behaviour-analysis",
      "mi-sanctions-exposure-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "AIS Manipulation Analysis — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Detection of AIS spoofing, identity masking and abnormal vessel behaviour, interpreted as an intelligence product to inform maritime risk decisions.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Overlaps with Maritime Cyber 'AIS Spoofing and Behaviour Analysis' and with 'Dark Activity Assessment'. This service is framed as an intelligence product informing risk decisions; the cyber service is framed around detection and technical response. The distinction and non-duplicating deliverables require review.",
  },

  {
    id: "mi-dark-activity-assessment",
    slug: "dark-activity-assessment",
    disciplineId: DISCIPLINE_ID,
    title: "Dark Activity Assessment",
    summary:
      "Investigation of AIS silence, loitering, ship to ship activity and suspicious routing behaviour.",
    introduction:
      "Dark activity assessment investigates AIS silence, loitering, ship to ship transfers and suspicious routing to identify concealed or high risk behaviour.",
    clientProblem:
      "Periods of AIS silence and unusual movement can conceal sanctions evasion, illicit transfers or other high risk activity.",
    scope: [
      "AIS silence and loitering",
      "Ship to ship transfer indicators",
      "Suspicious routing behaviour",
    ],
    deliverables: [
      "Written assessment of dark activity indicators and associated risk",
    ],
    operationalApplication:
      "Used to support compliance, chartering and insurance decisions where concealed activity is suspected.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-ais-manipulation-analysis",
      "mc-ais-spoofing-and-behaviour-analysis",
      "mi-port-call-risk-history",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Dark Activity Assessment — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Investigation of AIS silence, loitering, ship to ship activity and suspicious routing to identify concealed or high risk vessel behaviour.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Overlaps with 'AIS Manipulation Analysis'; both address AIS silence, spoofing and anomalous behaviour. Intended distinction: dark activity focuses on loitering, ship-to-ship and routing behaviour; manipulation analysis focuses on identity and signal tampering. The boundary requires editorial confirmation.",
  },

  {
    id: "mi-flag-and-registry-profiling",
    slug: "flag-and-registry-profiling",
    disciplineId: DISCIPLINE_ID,
    title: "Flag and Registry Profiling",
    summary:
      "Evaluation of flag state risk, registry quality, enforcement posture, ownership jurisdiction and reputational exposure.",
    introduction:
      "Flag and registry profiling evaluates flag state risk, registry quality, enforcement posture and jurisdictional exposure associated with a vessel.",
    clientProblem:
      "Flag and registry choices carry differing enforcement, quality and reputational implications that affect risk exposure.",
    scope: [
      "Flag state and registry quality",
      "Enforcement posture",
      "Ownership jurisdiction and reputational exposure",
    ],
    deliverables: [
      "Written flag and registry risk profile",
    ],
    operationalApplication:
      "Used in due diligence, chartering and compliance review.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-vessel-affiliation-checks",
      "mi-counterparty-intelligence",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Flag and Registry Profiling — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Evaluation of flag state risk, registry quality, enforcement posture and jurisdictional exposure associated with a vessel.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mi-counterparty-intelligence",
    slug: "counterparty-intelligence",
    disciplineId: DISCIPLINE_ID,
    title: "Counterparty Intelligence",
    summary:
      "Screening of commercial counterparties, managers, operators and associated entities before engagement.",
    introduction:
      "Counterparty intelligence screens commercial counterparties, managers, operators and associated entities to identify risk before engagement.",
    clientProblem:
      "Engaging a counterparty without visibility of its affiliations and history can transfer sanctions, reputational and commercial risk.",
    scope: [
      "Counterparty, manager and operator screening",
      "Associated entities and affiliations",
      "Reputational and commercial risk indicators",
    ],
    deliverables: [
      "Written counterparty risk assessment",
    ],
    operationalApplication:
      "Used before contracting, chartering or entering a commercial relationship.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-vessel-affiliation-checks",
      "mi-sanctions-exposure-analysis",
      "me-local-partner-due-diligence",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Counterparty Intelligence — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Screening of commercial counterparties, managers, operators and associated entities to identify risk before engagement.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mi-pre-charter-risk-intelligence",
    slug: "pre-charter-risk-intelligence",
    disciplineId: DISCIPLINE_ID,
    title: "Pre-Charter Risk Intelligence",
    shortTitle: "Pre-Charter Intelligence",
    summary:
      "Decision ready intelligence before fixture, voyage approval, contracting or insurance placement.",
    introduction:
      "Pre-charter risk intelligence consolidates the relevant vessel, ownership, sanctions and behavioural picture into decision ready intelligence ahead of fixture, voyage approval, contracting or insurance placement.",
    clientProblem:
      "Chartering decisions are often made under time pressure without a consolidated view of vessel and counterparty risk.",
    scope: [
      "Consolidated vessel, ownership and behavioural picture",
      "Sanctions and affiliation exposure",
      "Decision relevant risk summary",
    ],
    deliverables: [
      "Decision ready pre-charter intelligence summary",
    ],
    operationalApplication:
      "Used immediately before fixture, voyage approval or contracting.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-vessel-affiliation-checks",
      "mi-sanctions-exposure-analysis",
      "mi-maritime-threat-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Pre-Charter Risk Intelligence — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Decision ready intelligence on vessel, ownership, sanctions and behavioural risk before fixture, voyage approval, contracting or insurance placement.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mi-fleet-exposure-analysis",
    slug: "fleet-exposure-analysis",
    disciplineId: DISCIPLINE_ID,
    title: "Fleet Exposure Analysis",
    summary:
      "Assessment of fleet wide exposure to sanctions, dark activity, high risk ports and geopolitical targeting criteria.",
    introduction:
      "Fleet exposure analysis assesses a fleet's aggregate exposure to sanctions, dark activity, high risk ports and geopolitical targeting criteria.",
    clientProblem:
      "Risk that is acceptable for a single vessel can concentrate into material exposure across a fleet.",
    scope: [
      "Fleet wide sanctions and affiliation exposure",
      "Dark activity and high risk port exposure",
      "Geopolitical targeting criteria",
    ],
    deliverables: [
      "Fleet exposure assessment identifying concentrations of risk",
    ],
    operationalApplication:
      "Used for portfolio, underwriting and fleet management review.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-sanctions-exposure-analysis",
      "mi-port-call-risk-history",
      "mi-maritime-threat-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Fleet Exposure Analysis — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Assessment of fleet wide exposure to sanctions, dark activity, high risk ports and geopolitical targeting criteria.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mi-maritime-threat-assessments",
    slug: "maritime-threat-assessments",
    disciplineId: DISCIPLINE_ID,
    title: "Maritime Threat Assessments",
    summary:
      "Tailored assessments of regional threats impacting vessels, routes, ports and commercial operations.",
    introduction:
      "Maritime threat assessments provide a point-in-time analytical view of regional threats affecting vessels, routes, ports and commercial operations.",
    clientProblem:
      "Operators need a current, structured view of the threats affecting a specific vessel, route or region to support decisions.",
    scope: [
      "Regional threat picture",
      "Route, port and vessel relevance",
      "Implications for commercial operations",
    ],
    deliverables: [
      "Written threat assessment for the specified vessel, route or region",
    ],
    operationalApplication:
      "Used to inform routing, transit and go or no-go decisions.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-maritime-threat-monitoring",
      "ga-regional-risk-reports",
      "ms-high-risk-area-transit-planning",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Maritime Threat Assessments — Maritime Intelligence | Trident Risk & Advisory",
    seoDescription:
      "Tailored point-in-time assessments of regional threats affecting vessels, routes, ports and commercial operations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Overlaps in name with Maritime Security 'Maritime Threat Monitoring'. Intended distinction: this is a point-in-time analytical product; monitoring is continuous. The deliverable format and the boundary between the two require review.",
  },
];

export default maritimeIntelligenceServices;
