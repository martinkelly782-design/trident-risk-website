// Per-expertise editorial content for the data-driven ExpertisePage template.
// All six areas share one visual family but keep distinct editorial emphasis.
// Grounded entirely in canonical material (disciplines.js, disciplineContent.js,
// service scope/summaries); no fabricated facts, statistics or claims. Maritime
// Security is the approved benchmark and its content is ported verbatim.
//
// Shape per area:
//   hero        { h1, supporting, primaryCtaLabel }
//   thesis      { heading, lead, body }
//   framework   { eyebrow, heading, intro, items:[{n,label,line}] }
//   themes      { items:[{n,title,line}] }        // heading fixed in template
//   midCta      { prompt, label }                 // restrained Level-2 contextual CTA
//   perspective { statement }                     // the operational principle
//   intelCategory  string|null                    // filters latestIntelligence
//   insightSlug    string|null                    // a genuinely relevant Insight
//   enquiries   { eyebrow, heading, supporting }
//   gold        boolean

export const expertiseContent = {
  "maritime-security": {
    gold: false,
    hero: {
      h1: "Operating through the maritime security environment.",
      supporting:
        "Maritime security is an intelligence problem before it is an operational one. Trident helps owners, operators and insurers understand the threat, prepare the vessel and hold experienced support when conditions change.",
      primaryCtaLabel: "Speak to an analyst",
    },
    thesis: {
      heading: "Security decisions are rarely made in isolation.",
      lead: "Vessel characteristics, routing, affiliation, cargo, regional escalation, threat-actor intent and commercial constraints all shape a vessel's exposure — and they move together.",
      body: "Trident reads those factors as one picture: understanding the threat before a voyage, preparing the vessel against it, and maintaining access to experienced maritime security support when the environment changes. The aim is not to remove risk, but to make it a decision rather than a surprise.",
    },
    framework: {
      eyebrow: "What shapes the risk",
      heading: "Six factors, read together.",
      intro:
        "No single factor decides a vessel's security exposure. Trident weighs them together against the environment the vessel will actually operate in.",
      items: [
        { n: "01", label: "Vessel & routing", line: "Vessel characteristics and the route it must take through the area." },
        { n: "02", label: "Affiliation", line: "How the vessel and its associations may be perceived by the relevant threat actor." },
        { n: "03", label: "Cargo", line: "The nature of the cargo and what it signals in the operating environment." },
        { n: "04", label: "Threat actor", line: "The intent and targeting behaviour of the actors that matter." },
        { n: "05", label: "Operating environment", line: "The theatre the vessel operates in, and how it is escalating." },
        { n: "06", label: "Commercial constraints", line: "The commercial realities shaping what is actually possible." },
      ],
    },
    themes: {
      items: [
        { n: "01", title: "Conflict & war risk", line: "State conflict, war-risk zones and escalation that change the risk to shipping in a theatre." },
        { n: "02", title: "Piracy & maritime crime", line: "Piracy, armed robbery, kidnap and other maritime crime against vessels and crews." },
        { n: "03", title: "Vessel targeting", line: "How a vessel's characteristics, affiliation and behaviour may affect its relevance to a threat actor." },
        { n: "04", title: "High-risk operations", line: "Planning and supporting voyages and operations through high-risk and contested waters." },
        { n: "05", title: "The threat environment", line: "Maintaining a current picture of the threat environment across the regions a vessel operates in." },
      ],
    },
    midCta: { prompt: "Concerned about a specific voyage or operation?", label: "Discuss your operating exposure" },
    perspective: {
      statement: "Effective maritime security supports the Master's decision-making; it does not attempt to replace it.",
    },
    intelCategory: "Maritime Security",
    insightSlug: "iran-maritime-legal-risk-briefing",
    enquiries: {
      eyebrow: "Maritime Security enquiries",
      heading: "Speak to an analyst.",
      supporting:
        "Tell us about the vessel, voyage or operational concern. We will identify the appropriate level of maritime security support and respond directly.",
    },
  },

  "maritime-intelligence": {
    gold: false,
    hero: {
      h1: "Maritime intelligence for decisions made before the risk.",
      supporting:
        "Trident helps clients understand the vessel, the counterparties and the threat environment behind a fixture, a financing decision or a transit — so exposure is understood before it is committed to.",
      primaryCtaLabel: "Speak to an analyst",
    },
    thesis: {
      heading: "Understand the vessel. Read the behaviour. See the exposure.",
      lead: "What a vessel is, who stands behind it and how it has behaved are rarely visible from a single record. Ownership, flag, affiliation, sanctions exposure, trading pattern and AIS behaviour each tell only part of the story.",
      body: "Trident brings those signals together into an operational picture a client can act on — before fixture, before financing and before a vessel enters a sensitive area.",
    },
    framework: {
      eyebrow: "What shapes the picture",
      heading: "Fragmented signals, one assessment.",
      intro:
        "No single record establishes what a vessel is or how it may be perceived. Trident assembles these strands and weighs them together.",
      items: [
        { n: "01", label: "Identity", line: "Flag, name history and the vessel's declared identity." },
        { n: "02", label: "Ownership", line: "Registered and beneficial ownership, management and control." },
        { n: "03", label: "Trading", line: "Trading pattern and the commercial activity behind it." },
        { n: "04", label: "AIS & behaviour", line: "Movement, anomalies, spoofing and dark activity." },
        { n: "05", label: "Port calls", line: "Where the vessel has actually been." },
        { n: "06", label: "Threat context", line: "How the relevant threat actor may read all of the above." },
      ],
    },
    themes: {
      items: [
        { n: "01", title: "Vessel identity & affiliation", line: "What a vessel is, and how it may be perceived by the relevant threat actor." },
        { n: "02", title: "Ownership & control", line: "Registered and beneficial ownership, management and commercial control." },
        { n: "03", title: "Trading & port-call history", line: "Where a vessel has been and what its pattern of trade signals." },
        { n: "04", title: "AIS & behaviour", line: "Spoofing, dark activity, identity masking and abnormal vessel behaviour." },
        { n: "05", title: "Sanctions & counterparties", line: "Exposure arising through ownership, cargo, routing or counterparties." },
        { n: "06", title: "Confidence & gaps", line: "What is known, how strongly it is held, and where the intelligence gaps sit." },
      ],
    },
    midCta: { prompt: "Facing a decision on a specific vessel or counterparty?", label: "Discuss a vessel or counterparty" },
    perspective: {
      statement: "Operational exposure may be shaped by how a vessel is perceived by the relevant threat actor, not simply by its legal ownership.",
    },
    intelCategory: "Maritime Intelligence",
    insightSlug: "iran-maritime-legal-risk-briefing",
    enquiries: {
      eyebrow: "Maritime Intelligence enquiries",
      heading: "Speak to an analyst.",
      supporting:
        "Tell us about the vessel, counterparty or decision in front of you. We will identify the intelligence required and respond directly.",
    },
  },

  "maritime-cyber": {
    gold: false,
    hero: {
      h1: "Maritime cyber risk, measured at sea.",
      supporting:
        "Trident addresses cyber and electronic risk where it affects the ship — navigation, positioning, communications and onboard systems — as an operational problem, not an abstract IT one.",
      primaryCtaLabel: "Speak to an analyst",
    },
    thesis: {
      heading: "Protect navigation. Protect systems. Protect the operation.",
      lead: "At sea, cyber risk is operational risk. Interference with positioning, manipulation of tracking or compromise of onboard technology can affect navigation, safety and the decisions made on the bridge.",
      body: "Trident assesses that exposure in operational terms and helps crews and operators maintain resilience — before, during and after a voyage.",
    },
    framework: {
      eyebrow: "What shapes the risk",
      heading: "Cyber resilience across the voyage.",
      intro:
        "Where maritime cyber risk becomes operational. These are the points at which it is assessed and managed, not a fixed sequence.",
      items: [
        { n: "01", label: "Assess", line: "Understand exposure across navigation, operational technology and connected systems." },
        { n: "02", label: "Operate", line: "Maintain resilience while the vessel is at sea." },
        { n: "03", label: "Respond & comply", line: "Respond to incidents and meet regulatory obligations." },
      ],
    },
    themes: {
      items: [
        { n: "01", title: "GNSS integrity", line: "Whether the position a bridge is trusting is the position it actually holds." },
        { n: "02", title: "Jamming", line: "Loss of positioning and navigation signal in contested waters." },
        { n: "03", title: "Spoofing", line: "Manipulated positions and tracks that mislead the bridge or the shore." },
        { n: "04", title: "Navigation & vessel systems", line: "ECDIS, radar and onboard operational technology exposure." },
        { n: "05", title: "Communications", line: "The links a vessel depends on, and what their compromise means." },
        { n: "06", title: "Operational resilience", line: "Maintaining safe operation when systems are degraded or attacked." },
      ],
    },
    midCta: { prompt: "Concerned about your vessel's systems?", label: "Discuss your vessel systems" },
    perspective: {
      statement: "The real danger in GNSS interference is not the signal a bridge loses, but the false position it keeps trusting.",
    },
    intelCategory: "Maritime Cyber",
    insightSlug: null,
    enquiries: {
      eyebrow: "Maritime Cyber enquiries",
      heading: "Speak to an analyst.",
      supporting:
        "Tell us about the vessel, system or operational concern. We will identify the appropriate cyber advisory support and respond directly.",
    },
  },

  "geopolitical-analysis": {
    gold: false,
    hero: {
      h1: "Geopolitics, translated into maritime consequences.",
      supporting:
        "Trident turns political, security and conflict developments into their practical consequences for vessels, voyages, trade and the operating environment — not commentary, but decision-useful analysis.",
      primaryCtaLabel: "Speak to an analyst",
    },
    thesis: {
      heading: "Read the region. See the exposure. Inform the decision.",
      lead: "Conflict, sanctions, elections and state policy rarely stay political for long. They change chokepoints, routing, cost, coverage and access — often before the market prices it in.",
      body: "Trident connects those developments to specific maritime and commercial consequences, so leadership can plan against them rather than react to them.",
    },
    framework: {
      eyebrow: "How analysis supports decisions",
      heading: "From development to decision.",
      intro:
        "Where geopolitical analysis informs maritime and commercial decisions. These are points at which the strategic picture matters, not a fixed sequence.",
      items: [
        { n: "01", label: "Anticipate", line: "Prepare for change before it constrains operations." },
        { n: "02", label: "Assess", line: "Connect current developments to operations and trade." },
      ],
    },
    themes: {
      items: [
        { n: "01", title: "State competition", line: "How rivalry between states reshapes the maritime operating environment." },
        { n: "02", title: "Conflict", line: "Where conflict changes routing, cost and exposure for shipping." },
        { n: "03", title: "Sanctions & policy", line: "Policy and enforcement shifts that alter what is permissible and what is exposed." },
        { n: "04", title: "Strategic waterways", line: "Chokepoints and corridors where disruption has outsized commercial effect." },
        { n: "05", title: "Trade & energy", line: "How energy and trade flows respond to political and security developments." },
      ],
    },
    midCta: { prompt: "Weighing a route, region or commercial decision?", label: "Discuss your exposure" },
    perspective: {
      statement: "Regional risk means little until it is attached to a specific vessel, voyage or contract.",
    },
    intelCategory: "Geopolitical Analysis",
    insightSlug: "iran-maritime-legal-risk-briefing",
    enquiries: {
      eyebrow: "Geopolitical Analysis enquiries",
      heading: "Speak to an analyst.",
      supporting:
        "Tell us about the region, route or commercial exposure in question. We will identify the analysis required and respond directly.",
    },
  },

  "market-entry": {
    gold: false,
    hero: {
      h1: "Understand the market before you commit to it.",
      supporting:
        "Trident assesses political, security, regulatory and reputational exposure before an organisation commits people, capital or operations to a new market — while that exposure can still be shaped.",
      primaryCtaLabel: "Speak to an analyst",
    },
    thesis: {
      heading: "See the exposure. Shape it early. Enter with clarity.",
      lead: "Market entry decisions are often committed before the political, security and regulatory environment is fully understood — and exposure is far cheaper to influence before entry than to unwind after it.",
      body: "Trident brings political, security, regulatory, partner and infrastructure risk together into a single view, with the maritime and operational relevance made explicit.",
    },
    framework: {
      eyebrow: "What shapes the exposure",
      heading: "Six exposures, one commitment.",
      intro:
        "Entering a new market concentrates several kinds of exposure at once. Trident brings them into a single view before commitment.",
      items: [
        { n: "01", label: "Political", line: "The stability and direction of the environment being entered." },
        { n: "02", label: "Security", line: "The physical and operational security picture on the ground and offshore." },
        { n: "03", label: "Counterparty", line: "The partners, agents and entities an operation will depend on." },
        { n: "04", label: "Regulatory & operating", line: "Regulatory, logistical and infrastructure realities that shape what is feasible." },
        { n: "05", label: "Reputational", line: "What association with the market or its counterparties exposes." },
        { n: "06", label: "Commercial", line: "What capital, timing and commitment put at stake." },
      ],
    },
    themes: {
      items: [
        { n: "01", title: "Political environment", line: "The stability and direction of the environment being entered." },
        { n: "02", title: "Security environment", line: "The physical and operational security picture on the ground and offshore." },
        { n: "03", title: "Local counterparties", line: "The partners, agents and entities an operation will depend on." },
        { n: "04", title: "Operating constraints", line: "Regulatory, logistical and infrastructure realities that shape what is feasible." },
        { n: "05", title: "Reputational & investment exposure", line: "What commitment exposes commercially and reputationally." },
      ],
    },
    midCta: { prompt: "Entering a complex or unfamiliar market?", label: "Discuss a market" },
    perspective: {
      statement: "Market exposure is cheapest to shape before entry and most expensive to unwind after it.",
    },
    intelCategory: null,
    insightSlug: null,
    enquiries: {
      eyebrow: "Market Entry enquiries",
      heading: "Speak to an analyst.",
      supporting:
        "Tell us about the market, project or decision ahead. We will identify the appropriate assessment and respond directly.",
    },
  },

  "legal-evidence": {
    gold: true,
    hero: {
      h1: "Independent maritime expertise, built for scrutiny.",
      supporting:
        "Trident provides independent expert opinion, evidential analysis and operational assessment for maritime disputes — grounded in operational experience and written to be tested. Trident does not provide legal advice.",
      primaryCtaLabel: "Discuss an instruction",
    },
    thesis: {
      heading: "Analysis. Opinion. Evidence.",
      lead: "When operational decisions are later examined, the questions are exacting: what was known, what was reasonable, and what the threat environment actually was.",
      body: "Answering them requires operational and intelligence experience, expressed to the standard a tribunal expects. Trident provides independent expert opinion, standard-of-care and war-risk analysis and evidential support for court and arbitration — technical and expert opinion and operational analysis, not legal advice or legal strategy.",
    },
    framework: {
      eyebrow: "How expertise supports a dispute",
      heading: "From assessment to the hearing.",
      intro:
        "Where independent expertise supports a dispute. These are examples of relevant support, not a fixed sequence. Trident provides expert and technical opinion and evidential support, not legal advice.",
      items: [
        { n: "01", label: "Assess", line: "Operational and threat analysis relevant to the matter." },
        { n: "02", label: "Opine", line: "Independent expert opinion, with a duty to the tribunal." },
        { n: "03", label: "Support proceedings", line: "Evidential support through to the hearing." },
      ],
    },
    themes: {
      items: [
        { n: "01", title: "Independent expert opinion", line: "Opinion written to be tested, with a duty to the tribunal rather than the instructing party." },
        { n: "02", title: "Contemporaneous evidence", line: "What was known and recorded at the time a decision was made." },
        { n: "03", title: "Operational decision-making", line: "How reasonable decisions look against the environment as it actually was." },
        { n: "04", title: "War risk & real danger", line: "Assessment of real danger thresholds affecting vessels, ports and voyages." },
        { n: "05", title: "Dispute support", line: "Charterparty, insurance and arbitration support grounded in operational fact." },
      ],
    },
    midCta: { prompt: "Facing a dispute, claim or instruction?", label: "Discuss an instruction" },
    perspective: {
      statement: "An expert's responsibility is to assist the tribunal, not the instructing party.",
    },
    intelCategory: null,
    insightSlug: "iran-maritime-legal-risk-briefing",
    enquiries: {
      eyebrow: "Legal & Evidence enquiries",
      heading: "Discuss an instruction.",
      supporting:
        "Tell us about the matter, forum and issues in dispute. We will identify the appropriate independent support and respond directly. Enquiries regarding ongoing matters are treated in confidence.",
    },
  },
};

export default expertiseContent;
