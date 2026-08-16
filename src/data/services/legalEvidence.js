// Legal & Evidence services (Phase 7). 8 services.
// Source: legacy `legalServices` in App.jsx, rewritten to the approved voice.
// No named individuals; expert independence is stated where relevant.

const DISCIPLINE_ID = "legal-evidence";
const IMAGE = "/legalheader.webp";
const IMAGE_ALT = "Legal and expert witness support";
const CTA = "Request advisory support";
const CLIENTS = [
  "Legal counsel",
  "Marine insurers and P&I clubs",
  "Shipowners and operators",
  "Arbitration parties",
];

export const legalEvidenceServices = [
  {
    id: "le-expert-witness",
    slug: "expert-witness",
    disciplineId: DISCIPLINE_ID,
    insight:
      "An expert's responsibility is to assist the tribunal, not the instructing party.",
    title: "Expert Witness",
    summary:
      "Independent expert opinion on maritime security exposure, targeting risk and operational decision making.",
    introduction:
      "Trident provides independent expert opinion on maritime security exposure, targeting risk and the reasonableness of operational decisions, prepared to the standard required of an expert whose duty is to the tribunal or court. The opinion is grounded in operational and intelligence experience and written to be tested under cross-examination.",
    clientProblem:
      "Maritime security and operational questions in disputes require independent expert opinion grounded in operational experience.",
    scope: [
      "Maritime security exposure",
      "Targeting risk",
      "Operational decision making",
    ],
    deliverables: ["Independent expert opinion"],
    operationalApplication:
      "Used in litigation, arbitration and dispute resolution requiring expert opinion.",
    limits: ["Independent opinion; duty is to the tribunal or court"],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-standard-of-care-analysis",
      "le-war-risk-and-real-danger-assessments",
      "le-court-and-arbitration-support",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
    ctaLabel: CTA,
    seoTitle:
      "Maritime Expert Witness — Charterparty & War Risk Disputes | Trident Risk & Advisory",
    seoDescription:
      "Independent maritime expert witness and expert evidence for charterparty and war-risk disputes and maritime arbitration — the security environment at the relevant date, real danger, unsafe-port and vessel targeting questions. Trident's duty is to the tribunal or court.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-charterparty-dispute-support",
    slug: "charterparty-dispute-support",
    disciplineId: DISCIPLINE_ID,
    title: "Charterparty Dispute Support",
    summary:
      "Support relating to war risk clauses, deviation, delay, unsafe ports and routing decisions.",
    introduction:
      "Charterparty dispute support addresses war risk clauses, deviation, delay, unsafe ports and routing decisions in the context of a dispute.",
    clientProblem:
      "Charterparty disputes often turn on operational and risk questions that require maritime and security expertise.",
    scope: [
      "War risk clauses",
      "Deviation, delay and unsafe ports",
      "Routing decisions",
    ],
    deliverables: ["Analysis supporting the charterparty dispute"],
    operationalApplication:
      "Used to support charterparty disputes and related proceedings.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-war-risk-and-real-danger-assessments",
      "le-standard-of-care-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Charterparty Dispute Support — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Support relating to war risk clauses, deviation, delay, unsafe ports and routing decisions in charterparty disputes.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-war-risk-and-real-danger-assessments",
    slug: "war-risk-and-real-danger-assessments",
    disciplineId: DISCIPLINE_ID,
    title: "War Risk and Real Danger Assessments",
    shortTitle: "War Risk Assessments",
    summary:
      "Assessment of real danger thresholds affecting vessels, ports and operating areas.",
    introduction:
      "War risk and real danger assessments consider real danger thresholds affecting vessels, ports and operating areas in the context of disputes and coverage.",
    clientProblem:
      "War risk and real danger questions require assessment grounded in the operational threat environment.",
    scope: [
      "Real danger thresholds",
      "Vessels, ports and operating areas",
    ],
    deliverables: ["Assessment of real danger for the relevant exposure"],
    operationalApplication:
      "Used to support disputes, coverage questions and operational decisions involving war risk.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-charterparty-dispute-support",
      "le-p-and-i-and-insurance-claim-support",
      "mi-maritime-threat-assessments",
    ],
    relatedAnalysisIds: ["iran-maritime-legal-risk-briefing"],
    ctaLabel: CTA,
    seoTitle:
      "War Risk and Real Danger Assessments — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Assessment of real danger thresholds affecting vessels, ports and operating areas for disputes and coverage questions.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-p-and-i-and-insurance-claim-support",
    slug: "p-and-i-and-insurance-claim-support",
    disciplineId: DISCIPLINE_ID,
    title: "P&I and Insurance Claim Support",
    shortTitle: "Insurance Claim Support",
    summary:
      "Operational analysis supporting P&I, H&M, war risk and business interruption claims.",
    introduction:
      "P&I and insurance claim support provides operational analysis supporting P&I, hull and machinery, war risk and business interruption claims.",
    clientProblem:
      "Insurance claims involving operational and security questions require analysis grounded in maritime experience.",
    scope: [
      "P&I and hull and machinery claims",
      "War risk claims",
      "Business interruption claims",
    ],
    deliverables: ["Operational analysis supporting the claim"],
    operationalApplication:
      "Used to support claims handling and related disputes.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-war-risk-and-real-danger-assessments",
      "le-standard-of-care-analysis",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "P&I and Insurance Claim Support — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Operational analysis supporting P&I, hull and machinery, war risk and business interruption claims.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-standard-of-care-analysis",
    slug: "standard-of-care-analysis",
    disciplineId: DISCIPLINE_ID,
    title: "Standard of Care Analysis",
    summary:
      "Assessment of whether reasonable maritime security precautions were implemented.",
    introduction:
      "Standard of care analysis assesses whether reasonable maritime security precautions were implemented in the circumstances.",
    clientProblem:
      "Disputes often turn on whether reasonable precautions were taken, which requires structured operational assessment.",
    scope: [
      "Reasonable maritime security precautions",
      "Circumstances and operational context",
    ],
    deliverables: ["Standard of care assessment"],
    operationalApplication:
      "Used to support disputes and claims where standard of care is in question.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-expert-witness",
      "le-charterparty-dispute-support",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Standard of Care Analysis — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Assessment of whether reasonable maritime security precautions were implemented in the circumstances.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-court-and-arbitration-support",
    slug: "court-and-arbitration-support",
    disciplineId: DISCIPLINE_ID,
    title: "Court and Arbitration Support",
    summary:
      "Technical reports, counsel briefings and evidential support for court or arbitration proceedings.",
    introduction:
      "Court and arbitration support provides technical reports, counsel briefings and evidential support for court or arbitration proceedings.",
    clientProblem:
      "Proceedings involving maritime and security questions require technical support that counsel can rely on.",
    scope: [
      "Technical reports",
      "Counsel briefings",
      "Evidential support",
    ],
    deliverables: ["Technical reports and evidential support"],
    operationalApplication:
      "Used throughout court or arbitration proceedings.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-expert-witness",
      "le-joint-expert-meetings",
      "le-oral-evidence-preparation",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Court and Arbitration Support — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Technical reports, counsel briefings and evidential support for court or arbitration proceedings.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-joint-expert-meetings",
    slug: "joint-expert-meetings",
    disciplineId: DISCIPLINE_ID,
    title: "Joint Expert Meetings",
    summary:
      "Issue narrowing, agreed statements and professional engagement with opposing experts.",
    introduction:
      "Joint expert meetings support issue narrowing, agreed statements and professional engagement with opposing experts.",
    clientProblem:
      "Proceedings benefit from disciplined expert engagement that narrows issues and produces agreed statements.",
    scope: [
      "Issue narrowing",
      "Agreed statements",
      "Engagement with opposing experts",
    ],
    deliverables: ["Participation in joint expert meetings and agreed statements"],
    operationalApplication:
      "Used during proceedings requiring expert-to-expert engagement.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-expert-witness",
      "le-court-and-arbitration-support",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Joint Expert Meetings — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Issue narrowing, agreed statements and professional engagement with opposing experts in maritime disputes.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },

  {
    id: "le-oral-evidence-preparation",
    slug: "oral-evidence-preparation",
    disciplineId: DISCIPLINE_ID,
    title: "Oral Evidence Preparation",
    summary:
      "Preparation for oral evidence, cross examination and technical explanation of complex maritime risk matters.",
    introduction:
      "Oral evidence preparation supports readiness for oral evidence, cross examination and the technical explanation of complex maritime risk matters.",
    clientProblem:
      "Oral evidence on complex maritime matters requires preparation to explain technical issues clearly under examination.",
    scope: [
      "Oral evidence readiness",
      "Cross examination",
      "Technical explanation of complex matters",
    ],
    deliverables: ["Preparation for oral evidence"],
    operationalApplication:
      "Used ahead of hearings involving oral evidence.",
    limits: [],
    idealClientTypes: CLIENTS,
    relatedServiceIds: [
      "le-expert-witness",
      "le-court-and-arbitration-support",
    ],
    relatedAnalysisIds: [],
    ctaLabel: CTA,
    seoTitle:
      "Oral Evidence Preparation — Legal & Evidence | Trident Risk & Advisory",
    seoDescription:
      "Preparation for oral evidence, cross examination and technical explanation of complex maritime risk matters.",
    image: IMAGE,
    imageAlt: IMAGE_ALT,
    publicationStatus: "draft",
  },
];

export default legalEvidenceServices;
