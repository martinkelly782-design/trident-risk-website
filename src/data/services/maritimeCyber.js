// Maritime Cyber services (Phase 7). 10 services.
// Source: legacy `cyberServices` in App.jsx, rewritten to the approved voice.
// Note: legacy Cyber page prose contained several statistics; these are NOT
// carried into this data model (unsupported statistics are excluded by policy).

const DISCIPLINE_ID = "maritime-cyber";
const IMAGE = "/cyberheader.webp";
const IMAGE_ALT = "Maritime cyber and electronic risk";
const CTA = "Request cyber support";
const CLIENTS = [
  "Vessel operators",
  "Ship managers",
  "Offshore and port operators",
  "Fleet IT and OT teams",
  "Insurers",
];

export const maritimeCyberServices = [
  {
    id: "mc-ais-alternatives-and-resilient-tracking",
    slug: "ais-alternatives-and-resilient-tracking",
    disciplineId: DISCIPLINE_ID,
    title: "AIS Alternatives and Resilient Tracking",
    shortTitle: "Resilient Tracking",
    summary:
      "Alternative tracking and monitoring approaches when AIS is unavailable, unreliable or manipulated.",
    introduction:
      "AIS alternatives and resilient tracking address monitoring where AIS is unavailable, unreliable or manipulated, supporting continued awareness of vessel position and movement.",
    clientProblem:
      "Reliance on AIS alone leaves operators without awareness when signals are lost, degraded or falsified.",
    scope: [
      "AIS availability and reliability limitations",
      "Alternative tracking and monitoring approaches",
      "Continuity of position awareness",
    ],
    deliverables: ["Advisory on resilient tracking approaches"],
    operationalApplication:
      "Used where AIS integrity or availability cannot be relied upon.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-gnss-interference-advisory",
      "mc-ais-spoofing-and-behaviour-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "AIS Alternatives and Resilient Tracking — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Alternative tracking and monitoring approaches for when AIS is unavailable, unreliable or manipulated.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-gnss-interference-advisory",
    slug: "gnss-interference-advisory",
    disciplineId: DISCIPLINE_ID,
    insight:
      "The real danger in GNSS interference is not the signal a bridge loses, but the false position it keeps trusting.",
    title: "GNSS Interference Advisory",
    summary:
      "Analysis of jamming, spoofing and navigation interference affecting vessel position and safety.",
    introduction:
      "GNSS interference advisory sets out where and how a vessel's position and timing are being degraded on a given route — persistent jamming, deliberate spoofing or intermittent loss of signal — and what that means for a bridge team relying on GNSS for navigation, ECDIS and time-stamped records. It converts a technical interference picture into the practical precautions a vessel can take before and during transit.",
    clientProblem:
      "GNSS jamming and spoofing can degrade or falsify position, creating navigational and safety risk in affected areas.",
    scope: [
      "Jamming and spoofing indicators",
      "Position and navigation impact",
      "Operational implications for transits",
    ],
    deliverables: ["Advisory on GNSS interference and mitigating measures"],
    operationalApplication:
      "Used for vessels operating in or planning transits through areas of known interference.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-ais-alternatives-and-resilient-tracking",
      "mc-ais-spoofing-and-behaviour-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "GNSS Interference Advisory — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Analysis of jamming, spoofing and navigation interference affecting vessel position and safety, with operational implications.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-ais-spoofing-and-behaviour-analysis",
    slug: "ais-spoofing-and-behaviour-analysis",
    disciplineId: DISCIPLINE_ID,
    title: "AIS Spoofing and Behaviour Analysis",
    summary:
      "Detection of AIS manipulation, identity spoofing and anomalous vessel behaviour.",
    introduction:
      "AIS spoofing and behaviour analysis focuses on the technical detection of AIS manipulation, identity spoofing and anomalous vessel behaviour.",
    clientProblem:
      "AIS manipulation can falsify identity and movement, requiring technical detection to identify and respond to it.",
    scope: [
      "AIS manipulation and identity spoofing detection",
      "Anomalous behaviour indicators",
      "Technical interpretation and response",
    ],
    deliverables: ["Technical analysis of AIS spoofing and behaviour indicators"],
    operationalApplication:
      "Used where technical detection of AIS manipulation is required to support a decision or response.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mi-ais-manipulation-analysis",
      "mi-dark-activity-assessment",
      "mc-gnss-interference-advisory",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "AIS Spoofing and Behaviour Analysis — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Technical detection of AIS manipulation, identity spoofing and anomalous vessel behaviour.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Overlaps with Maritime Intelligence 'AIS Manipulation Analysis' and 'Dark Activity Assessment'. This service is framed around technical detection and response; the intelligence services are framed around risk interpretation. The distinction and non-duplicating deliverables require review.",
  },

  {
    id: "mc-vessel-ot-security-assessments",
    slug: "vessel-ot-security-assessments",
    disciplineId: DISCIPLINE_ID,
    title: "Vessel OT Security Assessments",
    summary:
      "Assessment of onboard operational technology and control systems exposure.",
    introduction:
      "Vessel OT security assessments evaluate the exposure of onboard operational technology and control systems that affect vessel operation and safety.",
    clientProblem:
      "Onboard operational technology can carry exposure that affects safety and operation and is not covered by conventional IT review.",
    scope: [
      "Onboard operational technology and control systems",
      "Exposure and vulnerability identification",
      "Operational and safety implications",
    ],
    deliverables: ["Written OT security assessment with findings"],
    operationalApplication:
      "Used to review onboard OT exposure across a vessel or fleet.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-maritime-cyber-risk-assessments",
      "mc-vessel-network-penetration-testing",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Vessel OT Security Assessments — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Assessment of onboard operational technology and control systems exposure affecting vessel operation and safety.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-maritime-cyber-risk-assessments",
    slug: "maritime-cyber-risk-assessments",
    disciplineId: DISCIPLINE_ID,
    title: "Maritime Cyber Risk Assessments",
    summary:
      "Assessment of cyber risk across vessels, fleets, offshore assets and maritime operations.",
    introduction:
      "Maritime cyber risk assessments evaluate cyber risk across vessels, fleets, offshore assets and maritime operations.",
    clientProblem:
      "Maritime operations combine vessel, shore and connectivity exposure that requires a structured cyber risk view.",
    scope: [
      "Vessel and fleet cyber exposure",
      "Offshore assets and operations",
      "Connectivity and shore interfaces",
    ],
    deliverables: ["Written cyber risk assessment with findings"],
    operationalApplication:
      "Used to establish a structured view of cyber risk across an operation.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-vessel-ot-security-assessments",
      "mc-cyber-compliance-and-imo-iacs-advisory",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Maritime Cyber Risk Assessments — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Assessment of cyber risk across vessels, fleets, offshore assets and maritime operations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-cyber-incident-response",
    slug: "cyber-incident-response",
    disciplineId: DISCIPLINE_ID,
    title: "Cyber Incident Response",
    summary:
      "Advisory support during cyber incidents, system disruption and suspected compromise.",
    introduction:
      "Cyber incident response provides advisory support during cyber incidents, system disruption and suspected compromise affecting vessels or operations.",
    clientProblem:
      "Cyber incidents affecting vessel or shore systems require structured advisory support during and after the event.",
    scope: [
      "Suspected compromise and system disruption",
      "Advisory support during the incident",
      "Post-incident considerations",
    ],
    deliverables: ["Advisory support during and after the incident"],
    operationalApplication:
      "Used during suspected or confirmed cyber incidents affecting maritime operations.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-maritime-cyber-risk-assessments",
      "ms-crisis-response-and-incident-management",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Cyber Incident Response — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Advisory support during cyber incidents, system disruption and suspected compromise affecting vessels or operations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-vessel-network-penetration-testing",
    slug: "vessel-network-penetration-testing",
    disciplineId: DISCIPLINE_ID,
    title: "Vessel Network Penetration Testing",
    summary:
      "Controlled testing of vessel or shore networks to identify vulnerabilities and gaps.",
    introduction:
      "Vessel network penetration testing applies controlled testing of vessel or shore networks to identify vulnerabilities and gaps.",
    clientProblem:
      "Vulnerabilities in vessel and shore networks are best identified through controlled testing before they are exploited.",
    scope: [
      "Vessel and shore network testing",
      "Vulnerability and gap identification",
    ],
    deliverables: ["Findings and identified vulnerabilities from controlled testing"],
    operationalApplication:
      "Used to test defined vessel or shore networks under agreed scope.",
    limits: ["Conducted under agreed, controlled scope"],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-vessel-ot-security-assessments",
      "mc-maritime-cyber-risk-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Vessel Network Penetration Testing — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Controlled testing of vessel or shore networks to identify vulnerabilities and gaps.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-crew-cyber-awareness-training",
    slug: "crew-cyber-awareness-training",
    disciplineId: DISCIPLINE_ID,
    title: "Crew Cyber Awareness Training",
    summary:
      "Training to strengthen crew awareness and reduce human risk onboard.",
    introduction:
      "Crew cyber awareness training strengthens crew awareness of cyber risk to reduce human-factor exposure onboard.",
    clientProblem:
      "Human factors are a significant source of cyber exposure onboard and are addressed through awareness.",
    scope: [
      "Crew cyber awareness",
      "Onboard human-factor risk",
    ],
    deliverables: ["Crew cyber awareness training"],
    operationalApplication:
      "Delivered to crews to reduce onboard human-factor cyber exposure.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-maritime-cyber-risk-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Crew Cyber Awareness Training — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Training to strengthen crew awareness and reduce human-factor cyber risk onboard.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "mc-offshore-and-port-infrastructure-security",
    slug: "offshore-and-port-infrastructure-security",
    disciplineId: DISCIPLINE_ID,
    title: "Offshore and Port Infrastructure Security",
    shortTitle: "Infrastructure Cyber Security",
    summary:
      "Cyber security advisory for ports, terminals, offshore assets and critical infrastructure.",
    introduction:
      "Offshore and port infrastructure security provides cyber security advisory for ports, terminals, offshore assets and critical infrastructure.",
    clientProblem:
      "Ports, terminals and offshore infrastructure depend on interconnected systems whose cyber exposure affects operations.",
    scope: [
      "Ports and terminals",
      "Offshore assets",
      "Critical infrastructure systems",
    ],
    deliverables: ["Cyber security advisory for the relevant infrastructure"],
    operationalApplication:
      "Used to review cyber exposure of port, terminal and offshore infrastructure.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "ms-offshore-asset-protection",
      "mc-maritime-cyber-risk-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Offshore and Port Infrastructure Security — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Cyber security advisory for ports, terminals, offshore assets and critical infrastructure.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "requires-review",
    editorialNote:
      "Name overlaps with Maritime Security 'Offshore Asset Protection'. This service is cyber security advisory; the security service is physical/operational. The naming should be reviewed to avoid client confusion, and the deliverables require confirmation.",
  },

  {
    id: "mc-cyber-compliance-and-imo-iacs-advisory",
    slug: "cyber-compliance-and-imo-iacs-advisory",
    disciplineId: DISCIPLINE_ID,
    title: "Cyber Compliance and IMO / IACS Advisory",
    shortTitle: "Cyber Compliance Advisory",
    summary:
      "Support with IMO guidance, IACS requirements and emerging cyber compliance obligations.",
    introduction:
      "Cyber compliance and IMO / IACS advisory supports alignment with IMO guidance, IACS requirements and emerging cyber compliance obligations.",
    clientProblem:
      "Cyber compliance obligations for shipping are evolving and require structured interpretation and alignment.",
    scope: [
      "IMO guidance",
      "IACS requirements",
      "Emerging cyber compliance obligations",
    ],
    deliverables: ["Advisory on compliance alignment and gaps"],
    operationalApplication:
      "Used to align vessels and operations with applicable cyber compliance obligations.",
    limits: ["Advisory support; not a formal certification or audit"],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "mc-maritime-cyber-risk-assessments",
      "mc-vessel-ot-security-assessments",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Cyber Compliance and IMO / IACS Advisory — Maritime Cyber | Trident Risk & Advisory",
    seoDescription:
      "Support with IMO guidance, IACS requirements and emerging maritime cyber compliance obligations.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },
];

export default maritimeCyberServices;
