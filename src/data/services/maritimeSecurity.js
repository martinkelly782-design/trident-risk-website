// Maritime Security services (Phase 7). 9 services, including Bridge Response Officer.
// Source: legacy `maritimeSecurityServices` in App.jsx plus the explicitly
// provided Bridge Response Officer specification.

const DISCIPLINE_ID = "maritime-security";
const IMAGE = "/maritime-security-header.webp";
const IMAGE_ALT = "Maritime security operations";
const CTA = "Request security support";
const CLIENTS = [
  "Shipowners and operators",
  "Ship managers",
  "Offshore and energy operators",
  "Charterers",
  "Insurers",
];

export const maritimeSecurityServices = [
  {
    id: "ms-port-vulnerability-assessment",
    slug: "port-vulnerability-assessment",
    disciplineId: DISCIPLINE_ID,
    title: "Port Vulnerability Assessment",
    summary:
      "Assessment of port security posture, waterside exposure, access control, local crime, protest activity, ISPS implementation and resilience.",
    introduction:
      "A port vulnerability assessment reviews the security posture of a specific port, including waterside exposure, access control, local crime and protest activity, and the implementation of ISPS measures.",
    clientProblem:
      "Port security posture varies widely and is not reliably captured by generic country risk reporting.",
    scope: [
      "Waterside and shoreside exposure",
      "Access control and ISPS implementation",
      "Local crime and protest activity",
      "Resilience considerations",
    ],
    deliverables: ["Written port vulnerability assessment with findings"],
    operationalApplication:
      "Used before calling at an exposed or operationally sensitive port.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-voyage-vulnerability-assessment",
      "ms-stowaway-risk-mitigation",
      "mi-port-call-risk-history",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Port Vulnerability Assessment — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Assessment of port security posture, waterside exposure, access control, local crime, protest activity and ISPS implementation.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ms-voyage-vulnerability-assessment",
    slug: "voyage-vulnerability-assessment",
    disciplineId: DISCIPLINE_ID,
    title: "Voyage Vulnerability Assessment",
    summary:
      "Route based assessment combining vessel profile, cargo, ownership, recent trading pattern, threat environment and escalation indicators.",
    introduction:
      "A voyage vulnerability assessment combines vessel profile, cargo, ownership, recent trading pattern and the threat environment to assess the exposure of a specific voyage.",
    clientProblem:
      "The risk of a voyage depends on the interaction of vessel, cargo, route and threat environment, which is not visible from any single factor.",
    scope: [
      "Vessel profile and cargo",
      "Ownership and recent trading pattern",
      "Route threat environment and escalation indicators",
    ],
    deliverables: ["Written voyage vulnerability assessment"],
    operationalApplication:
      "Used in voyage planning and go or no-go decisions.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-high-risk-area-transit-planning",
      "mi-maritime-threat-assessments",
      "ms-port-vulnerability-assessment",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Voyage Vulnerability Assessment — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Route based assessment combining vessel profile, cargo, ownership, trading pattern and threat environment to assess voyage exposure.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ms-high-risk-area-transit-planning",
    slug: "high-risk-area-transit-planning",
    disciplineId: DISCIPLINE_ID,
    title: "High Risk Area Transit Planning",
    summary:
      "Planning support for vessels entering exposed maritime corridors, including routing, reporting, watchkeeping and escalation triggers.",
    introduction:
      "High risk area transit planning supports vessels entering exposed maritime corridors, covering routing, reporting, watchkeeping and escalation triggers.",
    clientProblem:
      "Transits of exposed corridors require preparation across routing, reporting and response that must be set before entry.",
    scope: [
      "Routing and reporting",
      "Watchkeeping arrangements",
      "Escalation triggers and response readiness",
    ],
    deliverables: ["Transit plan covering routing, reporting and escalation"],
    operationalApplication:
      "Used before and during transits of exposed maritime corridors.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-voyage-vulnerability-assessment",
      "ms-bridge-response-officer",
      "ms-embarked-security-coordination",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
    ctaLabel: CTA,
    seoTitle:
      "Strait of Hormuz Risk Assessment & High-Risk Transit Planning | Trident Risk & Advisory",
    seoDescription:
      "Vessel- and voyage-specific maritime security risk assessment and high-risk transit planning for commercial shipping through the Strait of Hormuz, Persian Gulf, Gulf of Oman and Red Sea — threat assessment, routing, reporting and operational support from Trident.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ms-bridge-response-officer",
    slug: "bridge-response-officer",
    disciplineId: DISCIPLINE_ID,
    insight:
      "The most important decisions affecting a high-risk transit are usually made before the vessel reaches the area of concern.",
    title: "Bridge Response Officer",
    shortTitle: "Bridge Response Officer",
    summary:
      "Onboard operational support for vessels transiting high-risk areas, including crew briefings, drills, threat updates and continuous liaison with the Trident GSOC.",
    introduction:
      "A Bridge Response Officer is a security advisor placed onboard to work alongside the Master and bridge team through a high-risk-area transit. The role strengthens the vessel's own preparedness, response and decision-making and maintains a continuous link to the Trident Global Security Operations Centre (GSOC) ashore. It is embedded operational advice — not a protective detail, and not a change to how the vessel is manned or commanded.",
    clientProblem:
      "Vessels entering high-risk areas must brief crews, rehearse response, apply mitigation measures and manage developing incidents while maintaining safe navigation, often without dedicated onboard support or a direct line to shore-based monitoring.",
    scope: [
      "Briefing the Master, bridge team and crew before entry into a high-risk area",
      "Onboard security and emergency-response drills",
      "Vessel-specific threat and passage review",
      "Support implementing recommended mitigation measures",
      "Direct liaison with the Trident GSOC",
      "Operational updates and escalation support",
      "Advisory assistance during developing security incidents",
      "Post-deployment or post-transit reporting where required",
    ],
    deliverables: [
      "Pre-transit operational briefing",
      "Vessel-specific transit review",
      "Onboard operational advisory support",
      "Liaison with the Trident GSOC throughout the deployment",
      "Post-transit observations and recommendations",
    ],
    scopeNote:
      "The exact scope of deployment is agreed during operational planning and reflects the vessel, voyage and the client's operational requirements.",
    operationalApplication:
      "Typically before a vessel enters an elevated or high-risk maritime area where the owner, operator, charterer or insurer requires additional onboard maritime security advisory and operational support.",
    limits: [
      "Advisory only — not armed security, an armed guard team or an embarked military detachment",
      "Not a riding squad or technical riding team",
      "Does not replace the Master or assume command of the vessel",
      "Does not replace the Company Security Officer or the vessel's ISPS responsibilities",
      "Does not transfer the vessel's duty of care",
      "Provides onboard advisory, coordination and escalation support only",
    ],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-high-risk-area-transit-planning",
      "ms-embarked-security-coordination",
      "ms-crisis-response-and-incident-management",
      "ms-voyage-vulnerability-assessment",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Bridge Response Officer — Onboard Maritime Security Adviser | Trident Risk & Advisory",
    seoDescription:
      "Trident's Bridge Response Officer is an experienced onboard maritime security adviser supporting the Master and bridge team through high-risk transits — Red Sea, Bab el-Mandeb, Gulf of Aden and Strait of Hormuz. Advisory support and GSOC liaison, not armed security.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    // Page-specific social/OG image: a dedicated 1200x630 WebP cropped from the
    // approved BRO photograph (adviser with the bridge team) rather than the
    // shared discipline header, so shared links represent the Bridge Response
    // Officer service accurately. The unique filename also cache-busts external
    // scrapers that had cached the previous shared image.
    ogImage: "/service-bridge-response-officer-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt:
      "Bridge Response Officer supporting a merchant vessel bridge team during a high-risk transit",
    publicationStatus: "published",
  },

  {
    id: "ms-embarked-security-coordination",
    slug: "embarked-security-coordination",
    disciplineId: DISCIPLINE_ID,
    title: "Embarked Security Coordination",
    summary:
      "Coordination of armed or unarmed embarked security arrangements, provider selection, embarkation planning and reporting expectations.",
    introduction:
      "Embarked security coordination supports the selection and management of armed or unarmed embarked security arrangements, including provider selection, embarkation planning and reporting expectations.",
    clientProblem:
      "Arranging embarked security involves provider selection, planning and oversight that owners and operators may not be positioned to coordinate directly.",
    scope: [
      "Provider selection and standards",
      "Embarkation and disembarkation planning",
      "Reporting expectations and oversight",
    ],
    deliverables: [
      "Coordination of embarked security arrangements and reporting framework",
    ],
    operationalApplication:
      "Used where armed or unarmed embarked security is being considered or arranged for a transit.",
    limits: [
      "Coordination and advisory role; embarked security is provided by third parties",
    ],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-high-risk-area-transit-planning",
      "ms-bridge-response-officer",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Embarked Security Coordination — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Coordination of armed or unarmed embarked security arrangements, provider selection, embarkation planning and reporting expectations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ms-stowaway-risk-mitigation",
    slug: "stowaway-risk-mitigation",
    disciplineId: DISCIPLINE_ID,
    title: "Stowaway Risk Mitigation",
    summary:
      "Port and vessel level measures to reduce stowaway exposure through search planning, access control and gangway discipline.",
    introduction:
      "Stowaway risk mitigation applies port and vessel level measures, including search planning, access control and gangway discipline, to reduce stowaway exposure.",
    clientProblem:
      "Stowaway incidents carry welfare, delay and financial consequences that are reduced by disciplined port and vessel measures.",
    scope: [
      "Search planning",
      "Access control",
      "Gangway discipline",
    ],
    deliverables: ["Stowaway risk mitigation measures and guidance"],
    operationalApplication:
      "Used when calling at ports with elevated stowaway risk.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-port-vulnerability-assessment",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Stowaway Risk Mitigation — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Port and vessel level measures to reduce stowaway exposure through search planning, access control and gangway discipline.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ms-offshore-asset-protection",
    slug: "offshore-asset-protection",
    disciplineId: DISCIPLINE_ID,
    title: "Offshore Asset Protection",
    summary:
      "Security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure in exposed waters.",
    introduction:
      "Offshore asset protection provides physical and operational security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure in exposed waters.",
    clientProblem:
      "Offshore assets in exposed waters face physical and operational security risks distinct from those affecting transiting vessels.",
    scope: [
      "Offshore vessels, rigs and platforms",
      "Survey activity",
      "Energy infrastructure in exposed waters",
    ],
    deliverables: ["Offshore security advisory and recommended measures"],
    operationalApplication:
      "Used for offshore operations and energy infrastructure in exposed waters.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-offshore-and-port-infrastructure-security",
      "ms-maritime-threat-monitoring",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Offshore Asset Protection — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Physical and operational security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure in exposed waters.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Name overlaps with Maritime Cyber 'Offshore and Port Infrastructure Security'. This service is physical/operational security advisory; the cyber service is cyber security advisory. The naming should be reviewed to avoid client confusion, and the deliverables require confirmation.",
  },

  {
    id: "ms-crisis-response-and-incident-management",
    slug: "crisis-response-and-incident-management",
    disciplineId: DISCIPLINE_ID,
    title: "Crisis Response and Incident Management",
    shortTitle: "Crisis Response",
    summary:
      "Support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents or rapid regional escalation.",
    introduction:
      "Crisis response and incident management provides advisory support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents and rapid regional escalation.",
    clientProblem:
      "Fast moving maritime incidents require structured advisory support alongside the vessel's own response.",
    scope: [
      "Boarding, detention and attack response support",
      "Port closure, civil unrest and escalation",
      "Crew welfare incidents",
    ],
    deliverables: ["Advisory support and coordination during the incident"],
    operationalApplication:
      "Used during developing or active maritime security incidents.",
    limits: [
      "Advisory and coordination role; does not assume command of the vessel",
    ],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-bridge-response-officer",
      "ms-maritime-threat-monitoring",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Crisis Response and Incident Management — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Advisory support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents and rapid regional escalation.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "ms-maritime-threat-monitoring",
    slug: "maritime-threat-monitoring",
    disciplineId: DISCIPLINE_ID,
    title: "Maritime Threat Monitoring",
    summary:
      "Continuous monitoring of maritime incidents, threat reporting, vessel exposure and operational risk indicators.",
    introduction:
      "Maritime threat monitoring provides continuous monitoring of maritime incidents, threat reporting, vessel exposure and operational risk indicators.",
    clientProblem:
      "Operators exposed to changing threat environments need continuous awareness rather than a single point-in-time view.",
    scope: [
      "Incident and threat reporting",
      "Vessel exposure",
      "Operational risk indicators",
    ],
    deliverables: [
      "Ongoing monitoring updates against agreed exposure",
    ],
    operationalApplication:
      "Used to maintain continuous awareness for vessels and operations exposed to changing threat environments.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-maritime-threat-assessments",
      "ms-crisis-response-and-incident-management",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Maritime Threat Monitoring — Maritime Security | Trident Risk & Advisory",
    seoDescription:
      "Continuous monitoring of maritime incidents, threat reporting, vessel exposure and operational risk indicators.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Overlaps in name with Maritime Intelligence 'Maritime Threat Assessments'. Intended distinction: continuous monitoring versus a point-in-time assessment. The monitoring cadence and the outputs that can be defensibly offered require confirmation.",
  },
];

export default maritimeSecurityServices;
