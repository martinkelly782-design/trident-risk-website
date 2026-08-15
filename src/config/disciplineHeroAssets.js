// Named hero asset requirements for the six discipline landing pages.
//
// Each discipline page loads its own dedicated 1600×1000 landscape WebP from
// /public. The previous per-discipline legacy header images were withdrawn:
// until an approved asset is dropped in, the hero renders a restrained dark
// editorial treatment (no image, no broken-image icon), and the real asset
// fades in automatically once the file exists — see DisciplineHero.jsx.
//
// These paths are the ON-PAGE hero visual only. They intentionally do NOT feed
// SEO og:image (that remains disciplines.js `heroImage`), so the SEO/social
// architecture is untouched while these assets are pending.
//
// Approved asset specification (all six):
//   1600 × 1000, landscape, dark/cinematic, premium editorial treatment,
//   no infographic overlays, no baked-in text, WebP ≤ 250 KB.
export const disciplineHeroAssets = {
  "maritime-intelligence": {
    src: "/hero-maritime-intelligence.webp",
    alt: "Stylised digital globe with a global network overlay — maritime intelligence context",
  },
  "maritime-security": {
    src: "/hero-maritime-security.webp",
    alt: "Commercial vessel in a high-risk operating environment — maritime security context",
  },
  "maritime-cyber": {
    src: "/hero-maritime-cyber.webp",
    alt: "Vessel bridge and navigation environment — maritime cyber context",
  },
  "geopolitical-analysis": {
    src: "/hero-geopolitical-analysis.webp",
    alt: "Maritime trade route and strategic chokepoint — geopolitical analysis context",
  },
  "market-entry": {
    src: "/hero-market-entry.webp",
    alt: "Port and offshore energy infrastructure — market entry context",
  },
  "legal-evidence": {
    src: "/hero-legal-evidence.webp",
    alt: "Maritime evidence and arbitration setting — legal and evidence context",
  },
};

export function heroAssetFor(disciplineId) {
  return disciplineHeroAssets[disciplineId] || null;
}

export default disciplineHeroAssets;
