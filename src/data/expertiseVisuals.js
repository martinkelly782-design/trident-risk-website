// Per-expertise visual configuration for the enrichment pass: hero focal point,
// the framework's synthesis ("converge") node, an optional signature diagram,
// and an optional map-ready area. All labels are editorial framings of canonical
// concepts — no fabricated data, scores or map content.

export const expertiseVisuals = {
  "maritime-security": {
    heroObjectPosition: "center",
    converge: {
      label: "Vessel exposure",
      caption: "The factors resolve into an analyst judgement on the vessel's exposure in this environment.",
    },
    signature: null,
    map: null,
  },

  "maritime-intelligence": {
    heroObjectPosition: "60% center",
    converge: {
      label: "Vessel assessment",
      caption: "Fragmented identity, ownership, trading and behavioural signals resolve into a single analyst assessment, with its confidence stated.",
    },
    signature: null,
    map: null,
  },

  "maritime-cyber": {
    heroObjectPosition: "center",
    converge: null,
    signature: {
      kind: "chain",
      eyebrow: "The chain",
      heading: "From signal to decision.",
      intro: "Cyber risk becomes maritime risk as it travels from the signal a vessel relies on to the decision made on the bridge.",
      steps: [
        { n: "01", label: "Digital signal", line: "GNSS, AIS and the communications a vessel depends on." },
        { n: "02", label: "Vessel system", line: "ECDIS, radar and onboard operational technology." },
        { n: "03", label: "Bridge understanding", line: "The position and picture the bridge is trusting." },
        { n: "04", label: "Operational decision", line: "The action taken on that understanding." },
      ],
    },
    map: null,
  },

  "geopolitical-analysis": {
    heroObjectPosition: "center",
    converge: null,
    signature: {
      kind: "relationship",
      eyebrow: "The relationship",
      heading: "Development, consequence, decision.",
      groups: [
        { title: "Development", items: ["Conflict", "Sanctions & policy", "State competition", "Political change"] },
        { title: "Maritime consequence", items: ["Routing", "Access", "Cost", "Insurance", "Trade & operations"] },
        { title: "Commercial decision", items: ["Routing & voyage choices", "Fixture & chartering", "Insurance & coverage", "Go / no-go timing"] },
      ],
      note: "A development may affect some or all of these consequences — the analysis identifies which, for a specific vessel, voyage or contract. This is not an automatic chain.",
    },
    map: {
      caption: "A strategic map treatment will sit here. Region-specific mapping is produced within Trident's analysis for the vessel, route or contract in question.",
    },
  },

  "market-entry": {
    heroObjectPosition: "center",
    converge: {
      label: "The commercial decision",
      caption: "Exposure is brought together to inform the kinds of decisions a client actually faces — not an automatic recommendation from Trident.",
      chips: ["Commit", "Delay", "Mitigate", "Reconsider"],
    },
    signature: null,
    map: null,
  },

  "legal-evidence": {
    heroObjectPosition: "center",
    converge: null,
    signature: {
      kind: "chain",
      gold: true,
      eyebrow: "The evidence chain",
      heading: "How understanding becomes evidence.",
      intro: "Trident's signature: the same operational understanding, followed through from the environment to independent expert opinion.",
      steps: [
        { n: "01", label: "Operating environment", line: "The conditions and threat picture in which a decision was taken." },
        { n: "02", label: "Contemporaneous information", line: "What was known, and recorded, at the time." },
        { n: "03", label: "Operational decision", line: "The decision made on that information." },
        { n: "04", label: "Evidence", line: "The record assembled and examined after the fact." },
        { n: "05", label: "Expert opinion", line: "Independent opinion on whether the decision was reasonable." },
      ],
    },
    map: null,
  },
};

export default expertiseVisuals;
