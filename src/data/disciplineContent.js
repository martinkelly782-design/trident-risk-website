// Per-discipline editorial content for the benchmark discipline landing page.
// Maritime Security has its own dedicated (frozen) page; this drives the other
// five. Copy is authored in the approved Trident voice and grounded in each
// discipline's canonical intro/positioning and its real services. No fabricated
// facts, statistics, clients, incidents or dates. Service directories and
// related analysis are resolved from the canonical data model at render time.
//
// `related` descriptors:
//   { type: "analysis", to, title, description, image, label } — a genuine,
//       linkable published analysis.
//   { type: "intel", category } — resolves to an existing Current Intelligence
//       item (homeContent.latestIntelligence) by category; rendered editorially
//       with no fabricated destination.

const IRAN_BRIEFING = {
  type: "analysis",
  to: "/iran-maritime-legal-risk-briefing",
  label: "Analysis",
  title: "Iran Maritime Legal Risk Briefing 2026",
  description:
    "A structured assessment connecting the regional maritime threat picture to operational, charterparty and insurance exposure.",
  image: "/legalheader.webp",
};

export const disciplineContent = {
  "maritime-intelligence": {
    heroObjectPosition: "60% center",
    hero: {
      h1: "Maritime intelligence for decisions made before the risk.",
      supporting:
        "Trident helps clients understand the vessel, the counterparties and the threat environment behind a fixture, a financing decision or a transit — so exposure is understood before it is committed to.",
    },
    proposition: {
      heading: "Understand the vessel. Read the behaviour. See the exposure.",
      paragraphs: [
        "What a vessel is, who stands behind it and how it has behaved are rarely visible from a single record. Ownership, flag, affiliation, sanctions exposure, trading pattern and AIS behaviour each tell only part of the story.",
        "Trident brings those signals together into an operational picture a client can act on — before fixture, before financing and before a vessel enters a sensitive area.",
      ],
    },
    support: {
      eyebrow: "How intelligence supports decisions",
      heading: "Intelligence before the decision.",
      intro:
        "Where maritime intelligence informs a commercial or operational decision. These are examples of relevant support, not a fixed sequence.",
      stages: [
        {
          number: "01",
          label: "Before fixture",
          lead: "Understand the vessel and counterparty before committing to a charter, purchase or financing.",
          examples: [
            "Vessel affiliation assessment",
            "Counterparty intelligence",
            "Pre-charter risk intelligence",
            "Sanctions exposure analysis",
          ],
        },
        {
          number: "02",
          label: "Before transit",
          lead: "Understand behaviour and threat exposure before a vessel enters a sensitive area.",
          examples: [
            "Maritime threat assessments",
            "AIS manipulation analysis",
            "Dark activity assessment",
            "Port call risk history",
          ],
        },
        {
          number: "03",
          label: "Across the fleet",
          lead: "Maintain a portfolio view of exposure over time.",
          examples: ["Fleet exposure analysis", "Flag and registry profiling"],
        },
      ],
    },
    insight:
      "Operational exposure may be shaped by how a vessel is perceived by the relevant threat actor, not simply by its legal ownership.",
    related: [{ type: "intel", category: "Maritime Intelligence" }],
    enquiries: {
      eyebrow: "Maritime Intelligence enquiries",
      supporting:
        "Tell us about the vessel, counterparty or decision in front of you. We will identify the intelligence required and respond directly.",
    },
  },

  "maritime-cyber": {
    heroObjectPosition: "center",
    hero: {
      h1: "Maritime cyber risk, measured at sea.",
      supporting:
        "Trident addresses cyber and electronic risk where it affects the ship — navigation, positioning, communications and onboard systems — as an operational problem, not an abstract IT one.",
    },
    proposition: {
      heading: "Protect navigation. Protect systems. Protect the operation.",
      paragraphs: [
        "At sea, cyber risk is operational risk. Interference with positioning, manipulation of tracking or compromise of onboard technology can affect navigation, safety and the decisions made on the bridge.",
        "Trident assesses that exposure in operational terms and helps crews and operators maintain resilience — before, during and after a voyage.",
      ],
    },
    support: {
      eyebrow: "How cyber advisory supports operations",
      heading: "Cyber resilience across the voyage.",
      intro:
        "Where maritime cyber advisory supports safe operation. These are examples of relevant support, not a fixed sequence.",
      stages: [
        {
          number: "01",
          label: "Assess",
          lead: "Understand exposure across navigation, operational technology and connected systems.",
          examples: [
            "Maritime cyber risk assessments",
            "Vessel OT security assessments",
            "Vessel network penetration testing",
          ],
        },
        {
          number: "02",
          label: "Operate",
          lead: "Maintain resilience while the vessel is at sea.",
          examples: [
            "GNSS interference advisory",
            "AIS alternatives and resilient tracking",
            "AIS spoofing and behaviour analysis",
          ],
        },
        {
          number: "03",
          label: "Respond & comply",
          lead: "Respond to incidents and meet regulatory obligations.",
          examples: [
            "Cyber incident response",
            "Cyber compliance and IMO/IACS advisory",
            "Crew cyber awareness training",
          ],
        },
      ],
    },
    insight:
      "The real danger in GNSS interference is not the signal a bridge loses, but the false position it keeps trusting.",
    related: [{ type: "intel", category: "Maritime Cyber" }],
    enquiries: {
      eyebrow: "Maritime Cyber enquiries",
      supporting:
        "Tell us about the vessel, system or operational concern. We will identify the appropriate cyber advisory support and respond directly.",
    },
  },

  "geopolitical-analysis": {
    heroObjectPosition: "center",
    hero: {
      h1: "Geopolitics, translated into maritime consequences.",
      supporting:
        "Trident turns political, security and conflict developments into their practical consequences for vessels, voyages, trade and the operating environment — not commentary, but decision-useful analysis.",
    },
    proposition: {
      heading: "Read the region. See the exposure. Inform the decision.",
      paragraphs: [
        "Conflict, sanctions, elections and state policy rarely stay political for long. They change chokepoints, routing, cost, coverage and access — often before the market prices it in.",
        "Trident connects those developments to specific maritime and commercial consequences, so leadership can plan against them rather than react to them.",
      ],
    },
    support: {
      eyebrow: "How analysis supports decisions",
      heading: "From development to decision.",
      intro:
        "Where geopolitical analysis informs maritime and commercial decisions. These are examples of relevant support, not a fixed sequence.",
      stages: [
        {
          number: "01",
          label: "Anticipate",
          lead: "Prepare for change before it constrains operations.",
          examples: [
            "Forward-looking risk scenarios",
            "Sanctions forecasting",
            "Election and political stability monitoring",
          ],
        },
        {
          number: "02",
          label: "Assess",
          lead: "Connect current developments to operations and trade.",
          examples: [
            "Regional risk reports",
            "Conflict impact assessments",
            "Energy and shipping disruption analysis",
          ],
        },
      ],
    },
    insight:
      "Regional risk means little until it is attached to a specific vessel, voyage or contract.",
    related: [
      IRAN_BRIEFING,
      { type: "intel", category: "Geopolitical Analysis" },
    ],
    enquiries: {
      eyebrow: "Geopolitical Analysis enquiries",
      supporting:
        "Tell us about the region, route or commercial exposure in question. We will identify the analysis required and respond directly.",
    },
  },

  "market-entry": {
    heroObjectPosition: "center",
    hero: {
      h1: "Understand the market before you commit to it.",
      supporting:
        "Trident assesses political, security, regulatory and reputational exposure before an organisation commits people, capital or operations to a new market — while that exposure can still be shaped.",
    },
    proposition: {
      heading: "See the exposure. Shape it early. Enter with clarity.",
      paragraphs: [
        "Market entry decisions are often committed before the political, security and regulatory environment is fully understood — and exposure is far cheaper to influence before entry than to unwind after it.",
        "Trident brings political, security, regulatory, partner and infrastructure risk together into a single view, with the maritime and operational relevance made explicit.",
      ],
    },
    support: {
      eyebrow: "How market entry advisory supports decisions",
      heading: "Risk discipline before commitment.",
      intro:
        "Where market entry advisory supports a commercial decision. These are examples of relevant support, not a fixed sequence.",
      stages: [
        {
          number: "01",
          label: "Before commitment",
          lead: "Understand exposure before capital, people or operations are committed.",
          examples: [
            "Country entry risk assessments",
            "Regulatory and compliance mapping",
            "Local partner due diligence",
            "Supply chain risk mapping",
          ],
        },
        {
          number: "02",
          label: "At mobilisation",
          lead: "Stand up new operations against a proportionate framework.",
          examples: [
            "Security framework design for new operations",
            "Port and infrastructure feasibility studies",
          ],
        },
      ],
    },
    insight:
      "Market exposure is cheapest to shape before entry and most expensive to unwind after it.",
    related: [],
    enquiries: {
      eyebrow: "Market Entry enquiries",
      supporting:
        "Tell us about the market, project or decision ahead. We will identify the appropriate assessment and respond directly.",
    },
  },

  "legal-evidence": {
    gold: true,
    heroObjectPosition: "center",
    hero: {
      h1: "Independent maritime expertise, built for scrutiny.",
      supporting:
        "Trident provides independent expert opinion, evidential analysis and operational assessment for maritime disputes — grounded in operational experience and written to be tested. Trident does not provide legal advice.",
    },
    proposition: {
      heading: "Analysis. Opinion. Evidence.",
      paragraphs: [
        "When operational decisions are later examined, the questions are exacting: what was known, what was reasonable, and what the threat environment actually was. Answering them requires operational and intelligence experience, expressed to the standard a tribunal expects.",
        "Trident provides independent expert opinion, standard-of-care and war-risk analysis and evidential support for court and arbitration. This is technical and expert opinion and operational analysis — not legal advice or legal strategy.",
      ],
    },
    support: {
      eyebrow: "How expertise supports a dispute",
      heading: "From assessment to the hearing.",
      intro:
        "Where independent expertise supports a dispute. These are examples of relevant support, not a fixed sequence. Trident provides expert and technical opinion and evidential support, not legal advice.",
      stages: [
        {
          number: "01",
          label: "Assess",
          lead: "Operational and threat analysis relevant to the matter.",
          examples: [
            "War risk and real danger assessments",
            "Standard of care analysis",
            "Charterparty dispute support",
            "P&I and insurance claim support",
          ],
        },
        {
          number: "02",
          label: "Opine",
          lead: "Independent expert opinion, with a duty to the tribunal.",
          examples: ["Expert witness opinion"],
        },
        {
          number: "03",
          label: "Support proceedings",
          lead: "Evidential support through to the hearing.",
          examples: [
            "Court and arbitration support",
            "Joint expert meetings",
            "Oral evidence preparation",
          ],
        },
      ],
    },
    insight:
      "An expert's responsibility is to assist the tribunal, not the instructing party.",
    related: [IRAN_BRIEFING],
    enquiries: {
      eyebrow: "Legal & Evidence enquiries",
      supporting:
        "Tell us about the matter, forum and issues in dispute. We will identify the appropriate independent support and respond directly. Enquiries regarding ongoing matters are treated in confidence.",
    },
  },
};

export default disciplineContent;
