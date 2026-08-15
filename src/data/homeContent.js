// Structured content for the homepage header and hero (Phase 3).
// Keeping copy and navigation here keeps HomePage/Header presentational.

// Top-level navigation as shown in the approved reference.
// `pillarId` links a label to an existing pillar route so navigation keeps
// working today; labels without one are placeholders for sections wired up in
// later phases and currently return to home.
// Primary navigation (IA correction). Six distinct client-facing jobs, each a
// real destination: Expertise (what Trident understands), Services (what a
// client can commission), Intelligence (what is happening now), Insights (what
// Trident thinks it means), About (who Trident is), Contact (how to engage).
// "Disciplines" is now an internal data-model concept only, never a nav label.
export const navItems = [
  { label: "Expertise", to: "/expertise" },
  { label: "Services", to: "/services" },
  { label: "Intelligence", to: "/intelligence" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// --- Homepage v2 (approved reference: homepage-v2-reference.png) -----------
// Dark hero. Copy states plainly what Trident is; no invented statistics.
export const heroV2 = {
  eyebrow: "Independent · Operational · Trusted",
  headingLines: [
    "Independent maritime",
    "intelligence and risk",
    "advisory.",
  ],
  supporting:
    "Trident is a specialist maritime intelligence and risk advisory business — supporting owners, operators, insurers and legal teams across the full arc of maritime risk, from pre-fixture intelligence and operational security through to expert evidence.",
  primaryCta: { label: "Our services", target: "what-we-do" },
  secondaryCta: { label: "Contact us" },
  image: {
    src: "/ship.png",
    alt: "Merchant container vessel underway, viewed from above",
  },
  // Non-numeric capability rail replacing the reference's invented metrics.
  arc: [
    { label: "Intelligence", detail: "Pre-fixture and pre-decision" },
    { label: "Security", detail: "Operational risk and response" },
    { label: "Evidence", detail: "Expert opinion and analysis" },
  ],
};

// "What We Do" section intro. The six discipline columns are sourced from the
// canonical disciplines.js so names, summaries and routes stay in one place.
export const whatWeDoIntro = {
  eyebrow: "What we do",
  heading: "Maritime risk, from intelligence to evidence.",
  supporting:
    "Trident supports maritime decisions before, during and after an operation — from intelligence and threat assessment through operational security, geopolitical and cyber risk, to independent expert evidence when decisions are later tested.",
};

// Capability panel copy for the WHAT WE DO section. `id` maps to the canonical
// discipline record (route, hero image); the summary here is the panel-specific
// line approved for the homepage, distinct from each discipline's own summary.
export const whatWeDoCapabilities = [
  {
    id: "maritime-intelligence",
    summary:
      "Understand the vessel, counterparties and threat before decisions are made.",
  },
  {
    id: "maritime-security",
    summary:
      "Prepare for, support and respond to security threats affecting vessels and operations.",
  },
  {
    id: "maritime-cyber",
    summary:
      "Understand and manage cyber, GNSS and connected-system risk at sea.",
  },
  {
    id: "geopolitical-analysis",
    summary:
      "Translate political and security developments into operational consequences.",
  },
  {
    id: "market-entry",
    summary:
      "Understand political, security and commercial exposure before committing people or capital.",
  },
  {
    id: "legal-evidence",
    summary:
      "Independent maritime expertise when operational decisions become matters of evidence.",
  },
];

// Section 5 — the single genuinely published report/resource. No fabricated
// report library; further briefings are offered honestly on request.
export const reportsResources = {
  eyebrow: "Reports & resources",
  featured: {
    category: "Legal & Evidence briefing",
    title: "Iran Maritime Legal Risk Briefing 2026",
    description:
      "A structured assessment of maritime legal and security risk in the Gulf and wider region, connecting the operational threat picture to charterparty, insurance and evidential exposure.",
    href: "/iran-maritime-legal-risk-briefing",
    image: "/legalheader.webp",
    imageAlt: "Legal and evidence briefing",
  },
  // Capability/resource categories — the types of intelligence product Trident
  // produces, not claims that specific published reports already exist.
  categories: [
    {
      label: "Maritime Security",
      title: "Maritime Security Briefings",
      description:
        "Operational updates and assessments covering developing maritime security threats and high-risk operating environments.",
      action: "Request",
    },
    {
      label: "Geopolitical",
      title: "Regional Assessments",
      description:
        "Structured analysis connecting geopolitical and security developments to maritime and commercial operations.",
      action: "Request",
    },
    {
      label: "Operations",
      title: "Voyage & Port Assessments",
      description:
        "Voyage-specific and port-specific assessments supporting operational planning and commercial decision-making.",
      action: "Request",
    },
  ],
};

// Section 6 — real positioning in place of an invented case study, and a real
// enquiries panel in place of fabricated media appearances.
export const approachContent = {
  eyebrow: "Our approach",
  heading: "From intelligence to evidence.",
  body:
    "Trident supports maritime decisions across the full risk lifecycle — from understanding a vessel, counterparty or threat before an operation, through operational security and crisis support, to independent expert evidence when those decisions are later examined.",
  stages: [
    {
      number: "01",
      label: "Understand",
      description:
        "Intelligence, affiliation, geopolitical and cyber analysis before decisions are made.",
    },
    {
      number: "02",
      label: "Support",
      description:
        "Operational planning, maritime security and crisis support while vessels and organisations are exposed.",
    },
    {
      number: "03",
      label: "Evidence",
      description:
        "Independent analysis and expert opinion when operational decisions become matters of dispute, insurance or litigation.",
    },
  ],
  cta: { label: "Explore our services", target: "what-we-do" },
  enquiries: {
    eyebrow: "Enquiries",
    heading: "Speak to an analyst.",
    body:
      "Tell us what you are dealing with. We will identify the appropriate support and respond directly.",
    ctaLabel: "Contact Trident",
    // Client types / sectors supported — not a claim of existing clients.
    clientTypes:
      "Shipowners · Ship managers · Marine insurers · P&I Clubs · Charterers · Law firms · Offshore and cruise operators",
    // Same audiences as a restrained editorial list (homepage "Who we work with").
    whoWeWorkWith: [
      "Shipowners",
      "Ship managers",
      "Marine insurers",
      "P&I clubs",
      "Charterers",
      "Law firms",
      "Offshore & cruise operators",
    ],
  },
};

export const heroContent = {
  headingLines: [
    "Informed by intelligence.",
    "Driven by expertise.",
    "Proven in evidence.",
  ],
  supporting:
    "End-to-end maritime risk advisory across intelligence, security, cyber, geopolitics, market entry and legal evidence.",
  ctaLabel: "Explore our capabilities",
  threatBoardLabel: "View full threat board",
  image: {
    src: "/ship.png",
    alt: "Merchant container vessel underway, viewed from above",
  },
  overlays: {
    droneId: "DRONE ID",
    coordinates: ["LAT 25°17.6′ N", "LON 56°18.4′ E"],
  },
};

// DEPRECATED — superseded by the public intelligence model in
// src/data/intelligence.js. These four 20 May 2025 items were representative
// placeholders; they have been migrated to that model as `draft` fixtures and
// are no longer rendered by any live surface (homepage, /intelligence and the
// Expertise pages now read published records from the new model). Retained only
// because some orphaned/legacy components still import this symbol; safe to
// remove once those are deleted.
export const latestIntelligence = [
  {
    category: "Maritime Security",
    time: "08:12 UTC",
    title: "Increased GPS interference reported in Bandar Abbas approaches",
    date: "20 May 2025",
    readTime: "4 min read",
    image: "/maritime-security-header.webp",
    alt: "Maritime security operations at a port",
  },
  {
    category: "Geopolitical Analysis",
    time: "07:48 UTC",
    title: "Iran–US nuclear talks: implications for maritime risk posture",
    date: "20 May 2025",
    readTime: "6 min read",
    image: "/digital-geopolitics-pakistan.jpg",
    alt: "Digital geopolitical risk visualisation",
  },
  {
    category: "Maritime Intelligence",
    time: "06:35 UTC",
    title: "Sanctions update: shadow fleet activity in the Indian Ocean",
    date: "20 May 2025",
    readTime: "5 min read",
    image: "/maritime-intelligence-header.webp",
    alt: "Maritime intelligence vessel tracking",
  },
  {
    category: "Maritime Cyber",
    time: "05:52 UTC",
    title: "AIS spoofing incident trends: Q2 2026",
    date: "20 May 2025",
    readTime: "7 min read",
    image: "/cyberheader.webp",
    alt: "Maritime cyber threat monitoring",
  },
];

// "How We Help" — six discipline panels. `pillarId` maps each panel to its
// existing pillar route; `icon` keys a lucide line icon in DisciplinePanel.
// Images are existing local optimized WebP/JPG assets only.
export const disciplines = [
  {
    pillarId: "maritime-intelligence",
    name: "Maritime Intelligence",
    title: "Know the vessel. Understand the exposure.",
    description: "Affiliation, sanctions, AIS and pre-fixture intelligence.",
    icon: "ship",
    image: "/maritime-intelligence-header.webp",
    alt: "Maritime intelligence vessel analysis",
  },
  {
    pillarId: "maritime-security",
    name: "Maritime Security",
    title: "Protect vessels, crews and voyages.",
    description: "Transit planning, crisis support and onboard response.",
    icon: "shield",
    image: "/maritime-security-header.webp",
    alt: "Maritime security operations",
  },
  {
    pillarId: "maritime-cyber",
    name: "Maritime Cyber",
    title: "Protect connected ships and systems.",
    description: "GNSS, AIS, OT security and cyber resilience.",
    icon: "radar",
    image: "/cyberheader.webp",
    alt: "Maritime cyber resilience",
  },
  {
    pillarId: "geopolitical-analysis",
    name: "Geopolitical Analysis",
    title: "Anticipate what changes next.",
    description: "Conflict, sanctions and forward-looking regional analysis.",
    icon: "globe",
    image: "/digital-geopolitics-pakistan.jpg",
    alt: "Geopolitical risk analysis",
  },
  {
    pillarId: "market-entry",
    name: "Market Entry",
    title: "Enter complex markets with clarity.",
    description: "Country risk, regulatory mapping and partner due diligence.",
    icon: "market",
    image: "/market-entry-header.webp",
    alt: "Market entry advisory",
  },
  {
    pillarId: "legal",
    name: "Legal & Evidence",
    title: "Turn analysis into defensible evidence.",
    description: "Expert witness, real danger and standard-of-care analysis.",
    icon: "scale",
    image: "/legalheader.webp",
    alt: "Legal and evidence advisory",
  },
];
