// Expertise — the client-facing framing of Trident's six areas ("what Trident
// understands"). The six areas map 1:1 onto the internal disciplines data model
// but are presented as fields of understanding, not as a service catalogue.
// Thesis lines are condensed from each discipline's canonical `positioning`
// and `homepageSummary` in disciplines.js — no new substantive claims.

export const expertiseIntro = {
  eyebrow: "Expertise",
  heading: "Expertise built around maritime decisions.",
  body: "Trident combines maritime intelligence, security, cyber, geopolitical analysis, market-entry risk and independent evidence — one connected view of how maritime risk develops, from understanding a vessel or environment before a decision is taken to defending that decision when it is later examined.",
};

// Ordered to follow the Trident arc: understand → operate → contextualise →
// commit → defend.
export const expertiseAreas = [
  {
    id: "maritime-intelligence",
    name: "Maritime Intelligence",
    to: "/maritime-intelligence",
    arc: "Understand",
    thesis:
      "The pre-decision view of a vessel, its counterparties and the threat environment — established before a fixture, financing or transit is committed.",
  },
  {
    id: "maritime-security",
    name: "Maritime Security",
    to: "/maritime-security",
    arc: "Operate",
    thesis:
      "Where intelligence becomes operational: protecting vessels, crews and voyages through high-threat and contested environments.",
  },
  {
    id: "maritime-cyber",
    name: "Maritime Cyber",
    to: "/maritime-cyber",
    arc: "Operate",
    thesis:
      "Cyber and electronic risk where it affects the ship — navigation, positioning, communications and onboard systems as an operational problem.",
  },
  {
    id: "geopolitical-analysis",
    name: "Geopolitical Analysis",
    to: "/geopolitical-analysis",
    arc: "Contextualise",
    thesis:
      "The forward view of how conflict, sanctions and state policy change the maritime operating environment before they become operational problems.",
  },
  {
    id: "market-entry",
    name: "Market Entry",
    to: "/market-entry",
    arc: "Commit",
    thesis:
      "Understanding political, security and regulatory exposure before people, capital or operations are committed to a new market.",
  },
  {
    id: "legal-evidence",
    name: "Legal & Evidence",
    to: "/legal-evidence",
    arc: "Defend",
    thesis:
      "Independent expert opinion and evidential analysis when operational decisions are later examined in arbitration or litigation.",
    gold: true,
  },
];

export default expertiseAreas;
