// Public Intelligence content model — "what is happening".
//
// Deliberately small and portable: a flat array of plain records plus a few
// derived selectors. The frontend reads ONLY the selectors below, so this file
// can later be swapped for a CMS/API/database loader (returning the same record
// shape) without touching any page. No backend, fetching or env config here.
//
// Distinct from Insights (authored analysis — "what it means") and Services
// (what clients commission). Intelligence records are concise operational notes:
// factual, dated, and grounded in the approved source reports.
//
// CONTENT INTEGRITY
// - Only records with publicationStatus "published" appear in the public feed.
// - "draft" never appears publicly. "archived" may be shown separately.
// - `eventDate` is the dated operational development; `publishedAt` is when the
//   note was published. The UI shows the development date prominently and the
//   publication date as small metadata. Times are never displayed (not recorded).
// - Imagery: Intelligence notes are text-led. No image is attached unless a
//   local asset genuinely and specifically represents the story; none currently
//   does, so all published notes are image-free by design.
// - The client-only Red Sea / KSA advisory (TRI-ADV-2026-0731-A) is excluded;
//   Red Sea content derives only from the releasable Maritime Threat Assessment.

export const INTELLIGENCE_CATEGORIES = [
  "Maritime Security",
  "Maritime Intelligence",
  "Conflict",
  "Geopolitical",
  "Cyber / GNSS",
  "Sanctions",
  "Port / Operations",
];

export const INTELLIGENCE_REGIONS = [
  "Middle East",
  "Red Sea",
  "Black Sea",
  "West Africa",
  "Asia-Pacific",
  "Europe",
  "Global",
];

export const CATEGORY_TO_EXPERTISE = {
  "Maritime Security": "maritime-security",
  "Maritime Intelligence": "maritime-intelligence",
  Conflict: "geopolitical-analysis",
  Geopolitical: "geopolitical-analysis",
  "Cyber / GNSS": "maritime-cyber",
  Sanctions: "maritime-intelligence",
  "Port / Operations": "maritime-security",
};

// Downloadable public/releasable full reports (verified present in public/reports).
// The Voluntary Reporting Area overview is published as a downloadable report
// (owner-approved) and is also referenced as source material by selected public
// Intelligence records.
export const REPORTS = {
  "red-sea": {
    href: "/reports/red-sea-maritime-threat-assessment-13-aug-2026.pdf",
    label: "Red Sea Maritime Threat Assessment",
    date: "13 August 2026",
    region: "Red Sea",
  },
  "black-sea": {
    href: "/reports/merchant-shipping-russian-black-sea-region-27-jul-2026.pdf",
    label: "Merchant Shipping in the Russian Black Sea Region",
    date: "27 July 2026",
    region: "Black Sea",
  },
  wildfire: {
    href: "/reports/wildfire-risk-european-cruise-operations-13-aug-2026.pdf",
    label: "Wildfire Risk to European Cruise Operations",
    date: "13 August 2026",
    region: "Europe",
  },
  vra: {
    href: "/reports/voluntary-reporting-area-overview-07-aug-2026.pdf",
    label: "Voluntary Reporting Area Overview",
    date: "7 August 2026",
    region: "Middle East",
  },
};

// Returns the report descriptor with its stable id attached (used by the report
// access gate and analytics), or null.
export function reportFor(key) {
  return key && REPORTS[key] ? { id: key, ...REPORTS[key] } : null;
}

export const intelligence = [
  // --- Draft fixtures (retained, never public). Migrated from the former
  // homepage placeholders; representative only, excluded from the feed.
  {
    id: "legacy-2025-05-gps-hormuz",
    slug: "gps-interference-bandar-abbas-approaches",
    publishedAt: "2025-05-20T08:12:00Z",
    category: "Cyber / GNSS",
    region: "Middle East",
    location: "Strait of Hormuz",
    headline: "Increased GPS interference reported in Bandar Abbas approaches",
    summary: "Reporting of elevated GPS interference affecting vessels on the approaches to Bandar Abbas.",
    relatedExpertise: "maritime-cyber",
    publicationStatus: "draft",
  },
  {
    id: "legacy-2025-05-iran-us-talks",
    slug: "iran-us-nuclear-talks-maritime-risk-posture",
    publishedAt: "2025-05-20T07:48:00Z",
    category: "Geopolitical",
    region: "Middle East",
    headline: "Iran–US nuclear talks: implications for maritime risk posture",
    summary: "Assessment of how the trajectory of Iran–US nuclear talks may bear on regional maritime risk posture.",
    relatedExpertise: "geopolitical-analysis",
    publicationStatus: "draft",
  },
  {
    id: "legacy-2025-05-shadow-fleet",
    slug: "shadow-fleet-activity-indian-ocean",
    publishedAt: "2025-05-20T06:35:00Z",
    category: "Sanctions",
    headline: "Sanctions update: shadow fleet activity in the Indian Ocean",
    summary: "Update on shadow-fleet activity and associated sanctions exposure in the Indian Ocean.",
    relatedExpertise: "maritime-intelligence",
    publicationStatus: "draft",
  },
  {
    id: "legacy-2025-05-ais-spoofing-trends",
    slug: "ais-spoofing-incident-trends",
    publishedAt: "2025-05-20T05:52:00Z",
    category: "Cyber / GNSS",
    headline: "AIS spoofing incident trends",
    summary: "Review of AIS spoofing and identity-manipulation incident trends.",
    relatedExpertise: "maritime-cyber",
    publicationStatus: "draft",
  },

  // --- Published public intelligence (owner-approved, Aug 2026). Concise notes
  // adapted from the releasable reports; source meaning and limitations preserved.

  // RED SEA — from the releasable Maritime Threat Assessment (13 Aug 2026).
  {
    id: "ti-2026-08-houthi-saudi-affiliation",
    slug: "houthi-targeting-profile-shifts-saudi-affiliation",
    eventDate: "2026-07-20",
    publishedAt: "2026-08-13T12:00:00Z",
    category: "Maritime Security",
    region: "Red Sea",
    headline: "Houthi targeting profile shifts towards Saudi affiliation",
    summary:
      "The Houthi blockade declaration of 20 July placed Saudi-linked shipping at the centre of the declared maritime target set. In the opening phase, affiliation rather than vessel type has been the clearest common feature of the vessels attacked or claimed.",
    situation:
      "On 20 July the Houthis declared a blockade of Saudi Arabia. Confirmed and claimed attacks in the opening phase have concentrated on Saudi-flagged or Saudi-operated tankers and on vessels associated with Saudi Red Sea trade, rather than on any single ship type.",
    whatChanged:
      "The declared target set is now defined primarily by association with Saudi Arabia. That is a shift from a broadly elevated Red Sea threat environment to one with a specific, affiliation-defined focus, and it changes how a transit should be assessed.",
    operationalRelevance:
      "Vessel type alone is no longer a sufficient indicator of exposure. Owners and operators need to understand flag, ownership, management, recent port calls and wider commercial associations before assessing a Red Sea transit.",
    tridentAssessment:
      "Affiliation is currently a more useful discriminator of Houthi targeting exposure than vessel class. A clean present-day affiliation should not be treated as conclusive where historic commercial relationships could contribute to mistaken identification.",
    whatToWatch:
      "Claims or attacks that clarify how widely association with Saudi trade is being interpreted, and any indication that the declared target set is broadening beyond Saudi-flagged and Saudi-operated tonnage.",
    sourceType: "Trident Red Sea Maritime Threat Assessment",
    report: "red-sea",
    relatedExpertise: ["maritime-security", "maritime-intelligence"],
    relatedInsight: "red-sea-maritime-threat-assessment",
    featured: true,
    publicationStatus: "published",
  },
  {
    id: "ti-2026-08-yanbu-corridor-exposure",
    slug: "yanbu-strategic-importance-vessel-exposure",
    publishedAt: "2026-08-13T10:00:00Z",
    category: "Conflict",
    region: "Red Sea",
    location: "Yanbu",
    headline: "Yanbu's strategic importance increases vessel exposure around the Saudi export corridor",
    summary:
      "As Strait of Hormuz disruption pushes more crude onto Saudi Arabia's west coast, Yanbu has become a strategically important export outlet — and the corridor around it now sits inside the threat environment.",
    situation:
      "Disruption to Strait of Hormuz traffic has increased reliance on Saudi Arabia's west-coast export infrastructure, raising the strategic importance of Yanbu as an outlet for crude. A July attack demonstrated that infrastructure around the corridor is within reach of the current threat.",
    whatChanged:
      "Exposure around Yanbu is no longer only a question of individual vessel affiliation. Attacks directed at strategically important fixed infrastructure place nearby tankers — alongside, at anchorage or waiting for access — within a zone of collateral risk.",
    operationalRelevance:
      "Tankers alongside, at anchorage or waiting for access may carry collateral exposure to attacks directed against nearby energy infrastructure in addition to any vessel-specific targeting risk.",
    tridentAssessment:
      "The threat to shipping around Yanbu should be assessed as a combination of vessel affiliation and proximity to strategically important fixed infrastructure.",
    whatToWatch:
      "The frequency and precision of attacks around west-coast export nodes such as Yanbu and Jizan, and whether waiting and anchorage patterns concentrate tonnage in exposed areas.",
    sourceType: "Trident Red Sea Maritime Threat Assessment",
    report: "red-sea",
    relatedExpertise: ["maritime-security", "geopolitical-analysis"],
    relatedInsight: "red-sea-maritime-threat-assessment",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-08-jwla-034-listed-area",
    slug: "jwla-034-saudi-red-sea-transits-listed-area",
    eventDate: "2026-07-29",
    publishedAt: "2026-08-13T11:00:00Z",
    category: "Maritime Intelligence",
    region: "Red Sea",
    location: "Saudi Red Sea coast",
    headline: "JWLA-034 brings Saudi Red Sea transits within the Listed Area",
    summary:
      "On 29 July the Joint War Committee issued JWLA-034, removing the qualifications that had kept Saudi Red Sea transits outside the Listed Area and moving the Red Sea notification line north to 25.5°N.",
    situation:
      "On 29 July 2026 the Joint War Committee issued JWLA-034. Under the previous JWLA-033 wording, Saudi Arabia was listed in qualified form — 'Saudi Arabia (Gulf coast)' and 'Saudi Arabia (Red Sea coast) excluding transits'. JWLA-034 removes those qualifications and lists Saudi Arabia without that variation.",
    whatChanged:
      "Saudi ports and coastal waters to 12 nautical miles offshore are now within the Listed Area, and transits along the Saudi Red Sea coast are included. The Red Sea notification line moved from 18°N to 25.5°N — excluding Egyptian territorial waters, and approximately 830 km further north — bringing the open-sea corridor serving Jeddah, King Abdullah Port and Yanbu inside the Listed Area, including relevant voyages routed through the Suez Canal.",
    operationalRelevance:
      "Entering a Listed Area does not automatically mean a vessel pays a higher premium. Application to an individual voyage depends on the insurance contract, notification requirements, cancellation and reinstatement provisions, and negotiation between owner and underwriter. The material change is that a much larger part of the Saudi Red Sea operating environment now falls within the war-risk notification and additional-premium framework.",
    tridentAssessment:
      "JWLA-034 represents a material change in how the insurance market defines the geographic exposure around Saudi Red Sea trade. The significance is not that every voyage automatically attracts the same additional premium, but that transits and port approaches previously carved out of the Saudi listing now fall inside the Listed Area framework.",
    whatToWatch:
      "How owners and underwriters apply the widened listing in practice, and any further Joint War Committee revisions affecting the Red Sea notification area.",
    sourceType: "Trident Red Sea Maritime Threat Assessment",
    report: "red-sea",
    relatedExpertise: ["maritime-intelligence", "maritime-security", "geopolitical-analysis"],
    relatedInsight: "red-sea-maritime-threat-assessment",
    publicationStatus: "published",
  },

  // BLACK SEA — from Merchant Shipping in the Russian Black Sea Region (27 Jul 2026).
  {
    id: "ti-2026-07-black-sea-mainstream-tonnage",
    slug: "black-sea-campaign-widens-mainstream-export-tonnage",
    eventDate: "2026-07-15",
    publishedAt: "2026-07-27T12:00:00Z",
    category: "Conflict",
    region: "Black Sea",
    headline: "Black Sea campaign widens into mainstream export tonnage",
    summary:
      "After the Ukrainian maritime campaign was extended into the Black Sea on 15 July, the observed target set widened from Crimea-facing logistics to mainstream export tonnage serving international markets.",
    situation:
      "Operation MoLoChKa began in the Sea of Azov on 6 July and was publicly extended into the Black Sea on 15 July. Within the observed record, casualties after that point included tankers and bulk carriers lifting cargo for international markets, not only vessels engaged in Crimea resupply.",
    whatChanged:
      "The commercially important change is the breadth of the target set. Vessels serving mainstream export trades — previously largely outside the observed pattern — appear in the casualty record after 15 July.",
    operationalRelevance:
      "Owners and charterers should not infer exposure solely from the campaign's stated focus on Crimea-related logistics. Presence at, or transit to and from, Russian Black Sea terminals is the stronger common feature in the observed casualty record.",
    tridentAssessment:
      "The campaign's stated purpose is not a reliable proxy for the full commercial target set observed since 15 July. This describes a short observation window and should not be generalised beyond the evidence.",
    whatToWatch:
      "Whether the widened target set persists beyond the short observation window, and whether it extends to additional cargo types or trades.",
    sourceType: "Trident Black Sea Maritime Security Risk Assessment",
    report: "black-sea",
    relatedExpertise: ["maritime-security", "geopolitical-analysis"],
    relatedInsight: "merchant-shipping-russian-black-sea-region",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-07-black-sea-bulk-carriers",
    slug: "bulk-carriers-enter-black-sea-target-set",
    publishedAt: "2026-07-27T11:30:00Z",
    category: "Maritime Security",
    region: "Black Sea",
    headline: "Bulk carriers enter the Black Sea maritime target set",
    summary:
      "Bulk carriers entered the Black Sea target set sharply after 15 July: five were struck in twelve days, against one serving a Russian port in the preceding six-and-a-half months.",
    situation:
      "Within the observed casualty record, five bulk carriers were struck in the twelve days following 15 July. In the preceding six-and-a-half months, only one bulk carrier serving a Russian port had been struck.",
    whatChanged:
      "Bulk carriers, largely absent from the earlier pattern, became a materially represented part of the casualty record over a short period.",
    operationalRelevance:
      "Bulk-carrier operators should not rely on the threat pattern observed during the first half of 2026 when evaluating calls at Russian Black Sea terminals.",
    tridentAssessment:
      "Within the observed record, the target set has materially widened beyond tankers. The finding rests on a short observation window and a limited casualty population.",
    whatToWatch:
      "Whether bulk-carrier casualties continue at the elevated rate observed since 15 July, or revert towards the earlier pattern.",
    sourceType: "Trident Black Sea Maritime Security Risk Assessment",
    report: "black-sea",
    relatedExpertise: ["maritime-security"],
    relatedInsight: "merchant-shipping-russian-black-sea-region",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-07-black-sea-stationary-time",
    slug: "stationary-time-greatest-exposure-eastern-black-sea",
    publishedAt: "2026-07-27T11:00:00Z",
    category: "Port / Operations",
    region: "Black Sea",
    location: "Eastern Black Sea terminals",
    headline: "Stationary time emerges as the greatest observed exposure near eastern Black Sea terminals",
    summary:
      "The greatest observed exposure in the Black Sea record was time spent stationary near eastern loading terminals — not distance from port.",
    situation:
      "The highest concentration of casualties occurred around eastern loading terminals, their approaches and anchorages. Six casualties were recorded in the north-eastern terminal cluster, including four within approximately two kilometres of one another.",
    whatChanged:
      "Time spent stationary — at anchor, drifting or alongside — emerged as the strongest observed exposure indicator, more so than distance from port.",
    operationalRelevance:
      "Loading delays, terminal suspensions and waiting at anchor can increase the time a vessel spends static and predictable inside the highest-exposure area identified in the casualty record.",
    tridentAssessment:
      "Within the observed dataset, stationary time around eastern terminal approaches is a more meaningful exposure indicator than distance from port alone.",
    whatToWatch:
      "Loading delays or terminal suspensions that increase stationary time in the eastern terminal approaches.",
    sourceType: "Trident Black Sea Maritime Security Risk Assessment",
    report: "black-sea",
    relatedExpertise: ["maritime-security", "maritime-intelligence"],
    relatedInsight: "merchant-shipping-russian-black-sea-region",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-07-black-sea-registry-sanctions",
    slug: "registry-sanctions-no-observable-protection-black-sea",
    publishedAt: "2026-07-27T10:30:00Z",
    category: "Maritime Intelligence",
    region: "Black Sea",
    headline: "Registry and sanctions status show no observable protection in Black Sea casualty record",
    summary:
      "Flag, ownership, vessel age, P&I profile and sanctions status showed no observable protection in the Black Sea casualty record.",
    situation:
      "Casualties following 15 July were distributed across multiple registries and included mainstream beneficial ownership, modern vessels and predominantly non-designated tonnage.",
    whatChanged:
      "No registry- or sanctions-based characteristic correlated with immunity in the observed casualty set. Exposure aligned more closely with location and activity.",
    operationalRelevance:
      "Flag, ownership jurisdiction, vessel age, P&I profile or the absence of a sanctions designation should not be treated individually as evidence that a vessel is outside the observed threat set.",
    tridentAssessment:
      "The casualty record supports a location-and-activity-led interpretation of exposure rather than a simple registry or sanctions-based model. The finding describes the observed record and does not prove the absence of small effects.",
    whatToWatch:
      "Whether a location-and-activity-led reading continues to explain casualties better than vessel-attribute models as more data accrues.",
    sourceType: "Trident Black Sea Maritime Security Risk Assessment",
    report: "black-sea",
    relatedExpertise: ["maritime-intelligence", "maritime-security"],
    relatedInsight: "merchant-shipping-russian-black-sea-region",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-07-black-sea-disabling-damage",
    slug: "black-sea-attack-consequences-disabling-damage",
    publishedAt: "2026-07-27T10:00:00Z",
    category: "Maritime Security",
    region: "Black Sea",
    headline: "Black Sea attack consequences remain concentrated on disabling damage",
    summary:
      "The characteristic Black Sea outcome was disabling damage rather than sinking — hull, machinery and steering, with most vessels remaining afloat.",
    situation:
      "Among vessels struck in the assessed Russia-serving trade, damage was concentrated in hull, machinery and steering, with fires or explosions also recorded. Most vessels remained afloat.",
    whatChanged:
      "The consequence profile is one of immobilisation rather than loss, which shifts the operational and contractual burden onto salvage, towage and delay.",
    operationalRelevance:
      "Contingency planning should account for immobilisation, salvage, towage, port-of-refuge requirements, off-hire and cargo delay rather than focusing exclusively on total loss.",
    tridentAssessment:
      "The observed consequence profile is operationally significant even where attacks do not produce vessel loss or large numbers of casualties.",
    whatToWatch:
      "Whether consequence severity changes, and the availability of salvage, towage and ports of refuge in the region.",
    sourceType: "Trident Black Sea Maritime Security Risk Assessment",
    report: "black-sea",
    relatedExpertise: ["maritime-security"],
    relatedInsight: "merchant-shipping-russian-black-sea-region",
    publicationStatus: "published",
  },

  // STRAIT OF HORMUZ / GNSS — from the VRA overview (7 Aug 2026). The VRA report
  // is source-only and NOT offered for download (no `report`).
  {
    id: "ti-2026-08-hormuz-traffic-suppressed",
    slug: "strait-of-hormuz-commercial-traffic-suppressed",
    publishedAt: "2026-08-07T12:00:00Z",
    category: "Port / Operations",
    region: "Middle East",
    location: "Strait of Hormuz",
    headline: "Strait of Hormuz commercial traffic remains heavily suppressed",
    summary:
      "AIS-derived data in Trident's Voluntary Reporting Area overview put Strait of Hormuz traffic at roughly four per cent of the pre-conflict average in the week ending 6 August.",
    situation:
      "For the seven days to 6 August, the overview recorded 18 outbound and 21 inbound full transits — both approximately four per cent of the pre-conflict average. The underlying data is AIS-derived and does not capture EMCOM-silent transits.",
    whatChanged:
      "Traffic remains heavily suppressed rather than recovering. The pattern is consistent with deferral or avoidance of transits, not simply a switch between available routes.",
    operationalRelevance:
      "The continued suppression indicates that operators are not simply switching between available routes; some planned transits are being deferred or abandoned in response to the operating environment.",
    tridentAssessment:
      "Traffic behaviour continues to indicate deliberate risk avoidance rather than a return towards normal Strait of Hormuz operations. Figures are AIS-derived and do not capture EMCOM-silent vessels, so they should be read as indicative rather than complete.",
    whatToWatch:
      "Whether weekly transit counts begin to recover towards pre-conflict levels, bearing in mind that AIS-derived figures understate EMCOM-silent movements.",
    sourceType: "AIS-derived transit data — Trident Voluntary Reporting Area overview",
    report: "vra",
    relatedExpertise: ["maritime-intelligence", "maritime-security", "geopolitical-analysis"],
    relatedInsight: "voluntary-reporting-area-overview",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-08-hormuz-northern-route",
    slug: "northern-strait-of-hormuz-route-larger-share",
    publishedAt: "2026-08-07T11:00:00Z",
    category: "Port / Operations",
    region: "Middle East",
    location: "Strait of Hormuz",
    headline: "Northern Strait of Hormuz route takes larger share of remaining traffic",
    summary:
      "Of the transits still being made, the northern route carried the larger share in the week to 6 August; the suspended Traffic Separation Scheme recorded none.",
    situation:
      "Over the seven-day period, 12 outbound and 15 inbound full transits used the northern route, against six outbound and six inbound using the southern Oman territorial-water route. No full transits used the suspended Traffic Separation Scheme. Figures are AIS-derived.",
    whatChanged:
      "Route selection among continuing transits has concentrated on the northern route, with the Traffic Separation Scheme unused.",
    operationalRelevance:
      "Observed route selection indicates that vessels continuing to transit are disproportionately favouring the northern route.",
    tridentAssessment:
      "The route split is consistent with operators adjusting behaviour in response to the current threat environment, although route choice alone should not be treated as evidence of safety. These are AIS-derived observations, not routing advice.",
    whatToWatch:
      "Shifts in the route split as the operating environment changes. The figures are AIS-derived and do not capture EMCOM-silent movements.",
    sourceType: "AIS-derived transit data — Trident Voluntary Reporting Area overview",
    report: "vra",
    relatedExpertise: ["maritime-intelligence", "maritime-security"],
    relatedInsight: "voluntary-reporting-area-overview",
    publicationStatus: "published",
  },
  {
    id: "ti-2026-08-gnss-three-corridors",
    slug: "gnss-disruption-three-maritime-corridors",
    publishedAt: "2026-08-07T10:00:00Z",
    category: "Cyber / GNSS",
    region: "Middle East",
    headline: "GNSS disruption remains concentrated across three maritime corridors",
    summary:
      "Voluntary reporting recorded 604 GNSS-interference reports year to date — 61 in the previous 30 days — concentrated in the Red Sea, Arabian Gulf and Gulf of Oman.",
    situation:
      "Trident's overview recorded 604 voluntary GNSS-interference reports year to date, including 61 in the previous 30 days, alongside 34,236 anomalous AIS positions during the seven-day analytical period. Concentrations persisted in the Red Sea, Arabian Gulf and Gulf of Oman.",
    whatChanged:
      "The geographic footprint remained broadly stable during the reporting period. Interference-report concentrations aligned closely with independently observed anomalous AIS positions.",
    operationalRelevance:
      "Reported interference continues to affect major commercial transit corridors and should remain part of bridge-team navigation-integrity planning.",
    tridentAssessment:
      "The alignment between voluntary interference reports and independently observed anomalous AIS positions increases confidence that both are observing the same underlying disruption. Voluntary reporting is not a complete representation of interference activity.",
    whatToWatch:
      "Any expansion of the affected corridors. Because voluntary reports are incomplete, absence of reports in an area should not be read as absence of interference.",
    sourceType: "Voluntary GNSS-interference reporting — Trident Voluntary Reporting Area overview",
    report: "vra",
    relatedExpertise: ["maritime-cyber", "maritime-intelligence"],
    relatedInsight: "voluntary-reporting-area-overview",
    publicationStatus: "published",
  },

  // WILDFIRE — from Wildfire Risk to European Cruise Operations (13 Aug 2026).
  {
    id: "ti-2026-08-wildfire-ashore-cruise",
    slug: "mediterranean-wildfire-exposure-falls-ashore",
    publishedAt: "2026-08-13T09:30:00Z",
    category: "Port / Operations",
    region: "Europe",
    location: "Mediterranean / Southern Europe",
    headline: "Mediterranean wildfire exposure increasingly falls ashore rather than at the berth",
    summary:
      "For cruise operations in the Mediterranean, the 2026 wildfire season's exposure has repeatedly fallen ashore — on excursions, transport and land programmes — rather than on the ship itself.",
    situation:
      "During the 2026 Mediterranean wildfire season, wildfire has repeatedly disrupted the shore-side elements of cruise calls — shore excursions, ground transport and land-based programmes — while vessels and berths often remained operational.",
    whatChanged:
      "The material exposure for cruise operations has been ashore rather than at the berth. Road closures, restricted access to excursion sites, smoke and heat, and diverted local emergency resources affect calls even where the port stays open.",
    operationalRelevance:
      "A ship may remain able to berth safely while wildfire in the surrounding region makes excursions, transport links or shore-side programmes unsuitable, creating itinerary, guest-safety and duty-of-care exposure that is not visible from the vessel's own status.",
    tridentAssessment:
      "For cruise operators, wildfire is better assessed as an ashore operational-risk problem than a vessel-safety problem; berth availability alone is not a reliable indicator that a call can proceed as planned.",
    whatToWatch:
      "Wildfire conditions across exposed Mediterranean itinerary regions through the season, and the readiness of excursion and itinerary contingencies. Guest and crew health, accountability of people ashore, and duty of care remain central.",
    sourceType: "Trident Wildfire Risk sector briefing",
    report: "wildfire",
    relatedExpertise: ["geopolitical-analysis"],
    relatedInsight: "wildfire-risk-european-cruise-operations",
    publicationStatus: "published",
  },
];

// --- Derived selectors (the only things the frontend imports) --------------

// Displayed chronology uses the development date where present, else publication.
export function intelligenceDate(r) {
  return r.eventDate || r.publishedAt;
}
const byDisplayDateDesc = (a, b) =>
  new Date(intelligenceDate(b)) - new Date(intelligenceDate(a));

// The public feed: published records only, newest-development first.
export const publishedIntelligence = intelligence
  .filter((r) => r.publicationStatus === "published")
  .sort(byDisplayDateDesc);

export const archivedIntelligence = intelligence
  .filter((r) => r.publicationStatus === "archived")
  .sort(byDisplayDateDesc);

// The single editorially-featured published record, if any (never auto-picked).
export const featuredIntelligence =
  publishedIntelligence.find((r) => r.featured) || null;

// Published records excluding the featured one, for the standard row list.
export const standardIntelligence = publishedIntelligence.filter((r) => !r.featured);

// Regions actually represented in the published feed, in canonical order.
export const publishedRegions = INTELLIGENCE_REGIONS.filter((region) =>
  publishedIntelligence.some((r) => r.region === region)
);

const publishedBySlug = Object.fromEntries(
  publishedIntelligence.map((r) => [r.slug, r])
);

export function getPublishedIntelligenceBySlug(slug) {
  return publishedBySlug[slug] || null;
}

export function getIntelligenceForExpertise(disciplineId) {
  return publishedIntelligence.filter((r) =>
    Array.isArray(r.relatedExpertise)
      ? r.relatedExpertise.includes(disciplineId)
      : r.relatedExpertise === disciplineId
  );
}

// --- Lightweight validation (run by scripts/validate-content.mjs) ----------
export function validateIntelligence() {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const slugs = new Set();

  for (const r of intelligence) {
    const ref = r.id || r.slug || "(unknown)";
    if (!r.id) errors.push(`Intelligence record missing id: ${ref}`);
    else if (ids.has(r.id)) errors.push(`Duplicate intelligence id: ${r.id}`);
    else ids.add(r.id);

    if (!r.slug) errors.push(`Intelligence record missing slug: ${ref}`);
    else if (slugs.has(r.slug)) errors.push(`Duplicate intelligence slug: ${r.slug}`);
    else slugs.add(r.slug);

    if (!["draft", "published", "archived"].includes(r.publicationStatus))
      errors.push(`Invalid publicationStatus on ${ref}: ${r.publicationStatus}`);

    if (r.publicationStatus === "published") {
      if (!r.headline) errors.push(`Published record missing headline: ${ref}`);
      if (!r.summary) errors.push(`Published record missing summary: ${ref}`);
      if (!r.publishedAt || Number.isNaN(Date.parse(r.publishedAt)))
        errors.push(`Published record has invalid publishedAt: ${ref}`);
      if (r.eventDate && Number.isNaN(Date.parse(r.eventDate)))
        errors.push(`Published record has invalid eventDate: ${ref}`);
      if (r.category && !INTELLIGENCE_CATEGORIES.includes(r.category))
        errors.push(`Published record has unknown category "${r.category}": ${ref}`);
      if (r.report && !REPORTS[r.report])
        errors.push(`Published record references unknown report "${r.report}": ${ref}`);
    }

    if (r.region && !INTELLIGENCE_REGIONS.includes(r.region))
      errors.push(`Record ${ref} has unknown region: ${r.region}`);
  }

  const featuredCount = publishedIntelligence.filter((r) => r.featured).length;
  if (featuredCount > 1)
    warnings.push(`More than one featured published record (${featuredCount}); only the first is shown.`);

  return {
    errors,
    warnings,
    summary: {
      total: intelligence.length,
      published: publishedIntelligence.length,
      archived: archivedIntelligence.length,
      draft: intelligence.filter((r) => r.publicationStatus === "draft").length,
      publishedRegions,
    },
  };
}

export default intelligence;
