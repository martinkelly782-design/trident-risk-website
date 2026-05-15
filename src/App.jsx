import React, { useState } from "react";
import {
  ShieldCheck,
  Compass,
  Globe2,
  Scale,
  UserRound,
  FileText,
  Shield,
  Umbrella,
  ClipboardCheck,
  Landmark,
  Users,
  Mic,
  Ship,
  Search,
  Clock,
  Target,
  Mail,
  Globe,
  Anchor,
  Radio,
  Network,
  Flag,
  Eye,
  MapPin,
  Radar,
} from "lucide-react";

const email = "intelligence@tridentrisk.org";
const emailHref = `mailto:${email}`;

const Button = ({ children, asChild, className = "", ...props }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${className} ${children.props.className || ""}`,
      ...props,
    });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const Badge = ({ children, className = "", ...props }) => (
  <span className={className} {...props}>
    {children}
  </span>
);

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/pandi/g, "p-and-i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const imageBank = {
  vessel: "/productAISLarge.webp",
  maritimeIntelligenceHero: "/maritime-intelligence-header.png",
  maritimeThreat: "/maritime-threat-map.png",
  ship:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85",
  cyber: "/Cyber.webp",
  map: "/digital-geopolitics-pakistan.jpg",
  buildings:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  legal:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",
  port:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=85",
};

const legalServices = [
  {
    icon: UserRound,
    title: "Expert Witness",
    text:
      "Independent expert opinion on maritime security exposure, targeting risk and operational decision making.",
  },
  {
    icon: FileText,
    title: "Charterparty Dispute Support",
    text:
      "Support relating to war risk clauses, deviation, delay, unsafe ports and routing decisions.",
  },
  {
    icon: Shield,
    title: "War Risk and Real Danger Assessments",
    text:
      "Assessment of real danger thresholds affecting vessels, ports and operating areas.",
  },
  {
    icon: Umbrella,
    title: "P&I and Insurance Claim Support",
    text:
      "Operational analysis supporting P&I, H&M, war risk and business interruption claims.",
  },
  {
    icon: ClipboardCheck,
    title: "Standard of Care Analysis",
    text:
      "Assessment of whether reasonable maritime security precautions were implemented.",
  },
  {
    icon: Landmark,
    title: "Court and Arbitration Support",
    text:
      "Technical reports, counsel briefings and evidential support for court or arbitration proceedings.",
  },
  {
    icon: Users,
    title: "Joint Expert Meetings",
    text:
      "Issue narrowing, agreed statements and professional engagement with opposing experts.",
  },
  {
    icon: Mic,
    title: "Oral Evidence Preparation",
    text:
      "Preparation for oral evidence, cross examination and technical explanation of complex maritime risk matters.",
  },
];

const legalCases = [
  ["War Risk and Real Danger Assessments", "Credible risk evaluations for vessels, ports and operating areas.", Target],
  ["Houthi and Red Sea Exposure Analysis", "Operational analysis of threat activity, targeting and vessel exposure.", Ship],
  ["Strait of Hormuz Transit Risk", "Risk assessments relating to transit, military activity and regional tensions.", Compass],
  ["Vessel Attribution and Ownership Analysis", "Support in establishing vessel identity, affiliation and beneficial ownership.", Search],
  ["Insurance and Charterparty Support", "Assistance in claims, disputes and coverage related matters.", FileText],
  ["Maritime Incident Reconstruction", "Operational reconstruction of events to support legal and insurance outcomes.", Clock],
];

const maritimeIntelligenceServices = [
  { icon: Ship, title: "Vessel Affiliation Checks", text: "Assessment of ownership, management, beneficial control, commercial history and trading behaviour to identify exposure and risk linkages." },
  { icon: FileText, title: "Sanctions Exposure Analysis", text: "Screening of vessels, ownership, cargo, routing and counterparties against sanctions regimes and enforcement trends." },
  { icon: MapPin, title: "Port Call Risk History", text: "Analysis of historical and recent port calls to identify exposure to high risk jurisdictions, conflict areas and sensitive trading patterns." },
  { icon: Target, title: "AIS Manipulation Analysis", text: "Detection of AIS spoofing, dark activity, identity masking and abnormal vessel behaviour patterns." },
  { icon: Eye, title: "Dark Activity Assessment", text: "Investigation of AIS silence, loitering, ship to ship activity and suspicious routing behaviour." },
  { icon: Flag, title: "Flag and Registry Profiling", text: "Evaluation of flag state risk, registry quality, enforcement posture, ownership jurisdiction and reputational exposure." },
  { icon: Users, title: "Counterparty Intelligence", text: "Screening of commercial counterparties, managers, operators and associated entities before engagement." },
  { icon: ClipboardCheck, title: "Pre Charter Risk Intelligence", text: "Decision ready intelligence before fixture, voyage approval, contracting or insurance placement." },
  { icon: Anchor, title: "Fleet Exposure Analysis", text: "Assessment of fleet wide exposure to sanctions, dark activity, high risk ports and geopolitical targeting criteria." },
  { icon: Globe2, title: "Maritime Threat Assessments", text: "Tailored assessments of regional threats impacting vessels, routes, ports and commercial operations." },
];

const maritimeIntelligenceCases = [
  ["Red Sea Vessel Exposure Reviews", "Threat and exposure assessments for vessels transiting the Red Sea.", Target],
  ["Strait of Hormuz Threat Screening", "Risk screening for vessels operating in the Strait of Hormuz.", Radio],
  ["Israeli Affiliation Assessments", "Affiliation and linkage analysis for Israel related exposure.", Network],
  ["Sanctions Risk Reviews", "Vessel, entity and voyage screening against global sanctions.", Shield],
  ["Dark Fleet Behaviour Analysis", "Behavioural analysis on high risk and dark fleet operations.", Landmark],
  ["Maritime Insurance Support", "Intelligence support for underwriters, P&I clubs and legal teams.", Umbrella],
];

const maritimeSecurityServices = [
  { icon: Anchor, title: "Port Vulnerability Assessment", text: "Assessment of port security posture, waterside exposure, access control, local crime, protest activity, ISPS implementation and resilience." },
  { icon: Ship, title: "Voyage Vulnerability Assessment", text: "Route based assessment combining vessel profile, cargo, ownership, recent trading pattern, threat environment and escalation indicators." },
  { icon: Compass, title: "High Risk Area Transit Planning", text: "Planning support for vessels entering exposed maritime corridors, including routing, reporting, watchkeeping and escalation triggers." },
  { icon: ShieldCheck, title: "Embarked Security Coordination", text: "Coordination of armed or unarmed embarked security arrangements, provider selection, embarkation planning and reporting expectations." },
  { icon: Eye, title: "Stowaway Risk Mitigation", text: "Port and vessel level measures to reduce stowaway exposure through search planning, access control and gangway discipline." },
  { icon: Landmark, title: "Offshore Asset Protection", text: "Security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure in exposed waters." },
  { icon: Radio, title: "Crisis Response and Incident Management", text: "Support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents or rapid regional escalation." },
  { icon: Radar, title: "Maritime Threat Monitoring", text: "Continuous monitoring of maritime incidents, threat reporting, vessel exposure and operational risk indicators." },
];

const maritimeSecurityCases = [
  ["Port Call Risk Reviews", "Security assessment before calling at exposed or operationally sensitive ports.", Anchor],
  ["High Risk Transit Support", "Planning support for vessels entering elevated threat maritime corridors.", Compass],
  ["Offshore Security Advisory", "Support for offshore assets, survey activity and energy infrastructure.", Landmark],
  ["Boarding and Detention Response", "Advisory support during hostile boarding, detention or attempted interference.", Shield],
  ["Crew and Vessel Protection", "Practical measures to reduce exposure to crew, vessel and cargo.", Users],
  ["Crisis Management Support", "Operational advice during fast moving maritime security incidents.", Radio],
];

const cyberServices = [
  { icon: Globe2, title: "AIS Alternatives and Resilient Tracking", text: "Alternative tracking and monitoring solutions when AIS is unavailable, unreliable or manipulated." },
  { icon: Compass, title: "GNSS Interference Advisory", text: "Analysis of jamming, spoofing and navigation interference affecting vessel position and safety." },
  { icon: Target, title: "AIS Spoofing and Behaviour Analysis", text: "Detection of AIS manipulation, identity spoofing and anomalous vessel behaviour." },
  { icon: Shield, title: "Vessel OT Security Assessments", text: "Assessment of onboard operational technology and control systems exposure." },
  { icon: Search, title: "Maritime Cyber Risk Assessments", text: "Assessment of cyber risk across vessels, fleets, offshore assets and maritime operations." },
  { icon: ShieldCheck, title: "Cyber Incident Response", text: "Advisory support during cyber incidents, system disruption and suspected compromise." },
  { icon: FileText, title: "Vessel Network Penetration Testing", text: "Controlled testing of vessel or shore networks to identify vulnerabilities and gaps." },
  { icon: Users, title: "Crew Cyber Awareness Training", text: "Practical training to strengthen crew awareness and reduce human risk onboard." },
  { icon: Landmark, title: "Offshore and Port Infrastructure Security", text: "Cyber security advisory for ports, terminals, offshore assets and critical infrastructure." },
  { icon: ClipboardCheck, title: "Cyber Compliance and IMO / IACS Advisory", text: "Support with IMO guidance, IACS requirements and emerging cyber compliance obligations." },
];

const cyberCases = [
  ["Strait of Hormuz GNSS Interference", "Support for vessels transiting areas of active electronic warfare and interference.", Target],
  ["Baltic Sea GPS Disruption", "Advisory during widespread jamming and spoofing affecting commercial traffic.", Compass],
  ["AIS Spoofing Investigations", "Analysis of manipulated AIS signals and identity spoofing incidents.", Search],
  ["Vessel OT Vulnerability Reviews", "Assessment of onboard systems, networks and operational technology risk.", Shield],
  ["Offshore Infrastructure Resilience", "Cyber security reviews for rigs, platforms and offshore support operations.", Landmark],
  ["Maritime Cyber Incident Response", "Support during live incidents affecting vessels, networks or critical operations.", Clock],
];
const marketEntryServices = [
  {
    icon: Globe2,
    title: "Country Entry Risk Assessments",
    text:
      "Assessment of political, security, regulatory and reputational risk prior to market entry, investment, mobilisation or commercial commitment.",
  },
  {
    icon: Anchor,
    title: "Port and Infrastructure Feasibility Studies",
    text:
      "Risk led review of ports, terminals, logistics corridors, energy infrastructure and physical operating environments before investment or mobilisation.",
  },
  {
    icon: Scale,
    title: "Regulatory and Compliance Mapping",
    text:
      "Mapping of regulatory requirements, licensing exposure, sanctions considerations, local constraints and compliance pressure points.",
  },
  {
    icon: Users,
    title: "Local Partner Due Diligence",
    text:
      "Intelligence led review of local partners, agents, suppliers, owners, politically exposed persons and reputational risk indicators.",
  },
  {
    icon: ShieldCheck,
    title: "Security Framework Design for New Operations",
    text:
      "Design of practical security frameworks for new offices, sites, port operations, offshore activity, project teams and executive travel.",
  },
  {
    icon: Network,
    title: "Supply Chain Risk Mapping",
    text:
      "Assessment of supply chain vulnerabilities, chokepoints, political exposure, transport disruption and third party dependency risk.",
  },
];

const geopoliticalServices = [
  {
    icon: Globe2,
    title: "Regional Risk Reports",
    text:
      "Structured reporting on political, security and conflict developments affecting maritime and commercial operations.",
  },
  {
    icon: Target,
    title: "Conflict Impact Assessments",
    text:
      "Assessment of how conflict, military escalation, proxy activity or state action may affect assets, personnel, supply chains and operations.",
  },
  {
    icon: Ship,
    title: "Energy and Shipping Disruption Analysis",
    text:
      "Analysis of disruption to ports, chokepoints, energy infrastructure, freight routes, offshore operations and regional logistics networks.",
  },
  {
    icon: Scale,
    title: "Sanctions Forecasting",
    text:
      "Forward looking assessment of potential sanctions, regulatory tightening, enforcement trends and likely commercial impact.",
  },
  {
    icon: Landmark,
    title: "Election and Political Stability Monitoring",
    text:
      "Monitoring of election cycles, public order risk, governance stability, policy direction and business disruption indicators.",
  },
  {
    icon: Network,
    title: "Forward Looking Risk Scenarios",
    text:
      "Scenario based analysis to help leadership teams prepare for deterioration, escalation, stabilisation or market access changes.",
  },
];

const geopoliticalCases = [
  ["Middle East Escalation Monitoring", "Assessment of conflict, proxy activity and maritime spillover risk.", Target],
  ["Energy Infrastructure Risk", "Analysis of risks affecting oil, gas, ports and offshore infrastructure.", Ship],
  ["Sanctions and Policy Forecasting", "Forward looking regulatory and sanctions exposure analysis.", Scale],
  ["Election Stability Monitoring", "Political risk monitoring around election cycles and governance change.", Landmark],
  ["Supply Chain Disruption", "Assessment of trade, logistics and transport disruption.", Network],
  ["Executive Decision Support", "Briefings and scenarios for leadership teams operating in complex markets.", Users],
];
const marketEntryCases = [
  [
    "Country Entry Reviews",
    "Pre entry risk assessments for complex or unstable markets.",
    Globe2,
  ],
  [
    "Port and Logistics Access",
    "Review of operating conditions around ports, terminals and logistics routes.",
    Anchor,
  ],
  [
    "Partner Risk Screening",
    "Due diligence on agents, suppliers, partners and local counterparties.",
    Users,
  ],
  [
    "Regulatory Exposure",
    "Mapping of licensing, sanctions, compliance and political constraints.",
    Scale,
  ],
  [
    "Operational Security Design",
    "Security planning for new offices, sites and project activity.",
    ShieldCheck,
  ],
  [
    "Supply Chain Resilience",
    "Assessment of disruption exposure across routes, suppliers and chokepoints.",
    Network,
  ],
];
const pillars = [
  {
    id: "maritime-intelligence",
    title: "Maritime Intelligence",
    intro:
      "Maritime intelligence services are used to understand vessel exposure, ownership risk, sanctions linkage and behavioural indicators before commercial or operational decisions are made.",
    hero: imageBank.maritimeIntelligenceHero,
    services: maritimeIntelligenceServices.map((item) => [
      item.title,
      imageBank.maritimeIntelligenceHero,
      item.text,
    ]),
  },
  {
    id: "maritime-security",
    title: "Maritime Security",
    intro:
      "Maritime security services provide practical, operationally grounded support to reduce risk to vessels, crews and assets operating in high threat or unstable environments.",
    hero: "/maritime-security-header.png",
    services: maritimeSecurityServices.map((item) => [
      item.title,
      "/maritime-security-header.png",
      item.text,
    ]),
  },
  {
    id: "maritime-cyber",
    title: "Maritime Cyber",
    intro:
      "Maritime cyber services address real world vulnerabilities in navigation, tracking and onboard systems where digital disruption can directly impact operational safety.",
    hero: "/cyberheader.png",
    services: cyberServices.map((item) => [item.title, imageBank.cyber, item.text]),
  },
  {
    id: "geopolitical-analysis",
    title: "Geopolitical Analysis",
    intro:
      "Geopolitical analysis supports forward looking decision making by identifying how conflict, politics and regulation will affect operations, assets and market access.",
    hero: imageBank.map,
    services: [
      ["Regional Risk Reports", imageBank.map, "Structured reporting on political, security and conflict developments affecting maritime and commercial operations."],
      ["Conflict Impact Assessments", imageBank.map, "Assessment of how armed conflict, military escalation, proxy activity or state action may affect assets, personnel, supply chains and operations."],
      ["Energy and Shipping Disruption Analysis", imageBank.ship, "Analysis of disruption to ports, chokepoints, energy infrastructure, freight routes, offshore operations and regional logistics networks."],
      ["Sanctions Forecasting", imageBank.buildings, "Forward looking assessment of potential sanctions, regulatory tightening, enforcement trends and likely commercial impact."],
      ["Election and Political Stability Monitoring", imageBank.buildings, "Monitoring of election cycles, public order risk, governance stability, policy direction and business disruption indicators."],
      ["Forward Looking Risk Scenarios", imageBank.map, "Scenario based analysis to help leadership teams prepare for deterioration, escalation, stabilisation or market access changes."],
    ],
  },
  {
  id: "market-entry",
  title: "Market Entry",
  intro:
    "Market entry services support organisations entering complex environments by identifying risk, shaping strategy and avoiding exposure before commitment.",
  hero: "/market-entry-header.png",
  services: marketEntryServices.map((item) => [
    item.title,
    "/market-entry-header.png",
    item.text,
  ]),
},
  {
    id: "legal",
    title: "Legal",
    intro:
      "Trident provides operationally grounded legal and expert witness support across maritime security, war risk, charterparty disputes and vessel exposure analysis. Support is delivered by government and military advisors, intelligence specialists and maritime risk professionals with experience across high threat operating environments.",
    hero: "/legalheader.png",
    services: legalServices.map((item) => [item.title, imageBank.legal, item.text]),
  },
];

const homeCards = [
  { icon: "♔", title: "Maritime Intelligence", text: "Actionable intelligence on vessels, ownership, movements and activity to reduce exposure and support informed decisions.", pillarId: "maritime-intelligence" },
  { icon: "◇", title: "Maritime Security", text: "Operationally grounded security support to protect people, assets and operations in high threat environments.", pillarId: "maritime-security" },
  { icon: "⌬", title: "Maritime Cyber", text: "Identify and mitigate cyber risks to vessels, systems and operations in an increasingly connected maritime environment.", pillarId: "maritime-cyber" },
  { icon: "◎", title: "Geopolitical Analysis", text: "Forward looking analysis of political, security and regulatory developments that shape maritime risk and opportunity.", pillarId: "geopolitical-analysis" },
  { icon: "▥", title: "Market Entry", text: "Risk led market entry advisory to help organisations expand confidently and avoid costly exposure in new environments.", pillarId: "market-entry" },
  { icon: "⚖", title: "Legal", text: "Expert witness and specialist legal support grounded in real world maritime and security experience.", pillarId: "legal" },
  { icon: "⚓︎", title: "Ports and Infrastructure", text: "Assess and manage risk to ports, infrastructure and maritime operations across critical environments.", pillarId: "maritime-security" },
  { icon: "☷", title: "Incident Response", text: "Rapid, discreet and effective support when incidents occur, helping you stabilise, respond and recover.", pillarId: "maritime-security", anchorId: "maritime-security-crisis-response-and-incident-management" },
];

function CapabilityStrip({ items }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-7 md:grid-cols-4 lg:px-8">
        {items.map(([Icon, text]) => (
          <div
            key={text}
            className="flex items-center gap-5 border-slate-200 md:border-r last:border-r-0"
          >
            <Icon className="h-9 w-9 text-[#c4933a]" strokeWidth={1.5} />
            <p className="max-w-[190px] text-sm font-medium leading-6 text-[#071426]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroSection({
  title,
  subtitle,
  image,
  label,
  primaryText,
  onPrimary,
  onHome,
}) {
  return (
    <section
      className="relative min-h-[580px] bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/100 via-[#061426]/96 to-[#061426]/82" />
<div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <button
          type="button"
          onClick={onHome}
          className="mb-8 text-sm text-white/85 hover:text-white"
        >
          Home <span className="mx-2 text-white/40">›</span>
          <span className="text-[#c4933a]">{label}</span>
        </button>

        <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
          <Button
            type="button"
            onClick={onPrimary}
            className="rounded-md bg-[#c4933a] px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#ad7f2e]"
          >
            {primaryText} →
          </Button>

          <a
            href={emailHref}
            className="rounded-md border border-white/60 px-7 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#071426]"
          >
            Speak to an Analyst →
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ services, prefix, onRequest, columns = "xl:grid-cols-4" }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="mb-5 flex items-center gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
          Services
        </p>
        <div className="h-px w-10 bg-[#c4933a]" />
      </div>

      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${columns}`}>
        {services.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            id={`${prefix}-${slugify(title)}`}
            className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Icon className="mb-8 h-9 w-9 text-[#c4933a]" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold leading-6 text-[#071426]">
              {title}
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-700">{text}</p>
            <button
              type="button"
              onClick={() => onRequest(title)}
              className="mt-7 text-sm font-semibold text-[#b5832f]"
            >
              Request this service →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseGrid({ cases, description }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
      <div className="mb-5 flex flex-wrap items-center gap-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#071426]">
          Case Experience
        </p>
        <div className="h-px w-10 bg-[#c4933a]" />
        <p className="text-sm text-slate-500">{description}</p>
      </div>

      <div className="grid grid-cols-1 rounded-md border border-slate-200 bg-white md:grid-cols-3 xl:grid-cols-6">
        {cases.map(([title, text, Icon]) => (
          <div
            key={title}
            className="border-b border-slate-200 p-6 text-center md:border-r xl:border-b-0 last:border-r-0"
          >
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#071426]">
              <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold leading-5 text-[#071426]">
              {title}
            </h3>
            <p className="mt-3 text-xs leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BottomCta({ title, text, items, buttonText, onClick }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
      <div className="relative overflow-hidden rounded-xl bg-[#071426] px-8 py-10 shadow-2xl">
        <div className="absolute left-0 bottom-0 h-full w-[36%] bg-[url('/globe.png')] bg-cover bg-left opacity-80" />
        <div className="relative ml-auto max-w-4xl">
          <h2 className="text-3xl font-light text-white">{title}</h2>
          <p className="mt-3 text-sm text-white/85">{text}</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_1fr_auto]">
            {items.map(([Icon, itemText]) => (
              <div key={itemText} className="flex items-center gap-3 text-white">
                <Icon className="h-7 w-7 text-[#c4933a]" strokeWidth={1.5} />
                <span className="text-sm">{itemText}</span>
              </div>
            ))}

            <button
              type="button"
              onClick={onClick}
              className="rounded-md bg-[#c4933a] px-8 py-4 text-center text-sm font-semibold text-white hover:bg-[#ad7f2e]"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaritimeIntelligencePage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <HeroSection
        title={<>Maritime <br /> Intelligence</>}
        subtitle="Intelligence led vessel, ownership and operational risk analysis for ship owners, charterers, insurers, legal teams and maritime operators."
        image="/maritime-intelligence-header.png"
        label="Maritime Intelligence"
        primaryText="Request Intelligence Support"
        onPrimary={() => onRequest("Maritime Intelligence Support")}
        onHome={onHome}
      />

      <CapabilityStrip
        items={[
          [Ship, "Vessel Intelligence Specialists"],
          [Scale, "Sanctions and Compliance Analysis"],
          [Radio, "AIS and Behavioural Monitoring"],
          [Globe2, "Global Maritime Threat Monitoring"],
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
              Threat Landscape
            </p>
            <div className="h-px w-10 bg-[#c4933a]" />
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#071426]">
            The maritime threat environment is evolving
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
            <p>
              Vessels are increasingly exposed to a range of risks including ownership linkages, sanctions, AIS manipulation, geopolitical targeting, port call exposure and state or non state threats.
            </p>
            <p>
              Maritime intelligence capability integrates multiple data sources, behavioural analytics, open source intelligence and proprietary monitoring to deliver timely, actionable risk insight.
            </p>
            <p>
              The output supports commercial decisions before fixture, voyage approval, insurance placement, legal review or entry into high risk maritime regions.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#071426] shadow-xl">
          <div
            className="min-h-[360px] bg-cover bg-center"
            style={{ backgroundImage: "url('/maritime-threat-map.png')" }}
          >
            <div className="h-full min-h-[360px] bg-gradient-to-t from-[#071426]/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <ServicesGrid
        services={maritimeIntelligenceServices}
        prefix="maritime-intelligence"
        onRequest={onRequest}
        columns="xl:grid-cols-5"
      />

      <CaseGrid
        cases={maritimeIntelligenceCases}
        description="Operational intelligence and risk support delivered across key maritime environments."
      />

      <BottomCta
        title="Need maritime intelligence support?"
        text="24/7 operational intelligence support for ship owners, charterers, insurers and legal teams operating in complex maritime environments."
        items={[
          [Radar, "Global Monitoring 24/7"],
          [Network, "Multi Source Intelligence"],
          [UserRound, "Expert Analyst Support"],
        ]}
        buttonText="Contact Trident →"
        onClick={() => onRequest("Maritime Intelligence Support")}
      />
    </main>
  );
}
function MaritimeSecurityPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <HeroSection
        title={<>Maritime <br /> Security</>}
        subtitle="Operational security advisory for vessels, ports, offshore assets and crews operating in high threat or unstable maritime environments."
        image="/maritime-security-header.png"
        label="Maritime Security"
        primaryText="Request Security Support"
        onPrimary={() => onRequest("Maritime Security Support")}
        onHome={onHome}
      />

      <CapabilityStrip
        items={[
          [ShieldCheck, "Operational Security Advisors"],
          [Anchor, "Port and Vessel Risk Assessments"],
          [Radio, "Incident Response Support"],
          [Globe2, "Global Maritime Threat Monitoring"],
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
              Threat Landscape
            </p>
            <div className="h-px w-10 bg-[#c4933a]" />
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#071426]">
            Maritime security risk remains operationally complex
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
            <p>
              Commercial vessels, offshore assets and port operations remain exposed to threats including piracy, armed robbery, hostile boarding, detention, civil unrest, stowaway activity and regional military escalation.
            </p>
            <p>
              Security decisions require more than generic country risk reporting. They require vessel specific analysis, route context, port exposure, crew vulnerability and clear operational mitigation.
            </p>
            <p>
              Trident supports go or no go decisions, port call planning, offshore activity, high risk area transit and incident response through practical maritime security advice.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#071426] shadow-xl">
          <div
            className="min-h-[360px] bg-cover bg-center"
            style={{ backgroundImage: "url('/maritime-security-threat.png')" }}
          >
            <div className="h-full min-h-[360px] bg-gradient-to-t from-[#071426]/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <ServicesGrid
        services={maritimeSecurityServices}
        prefix="maritime-security"
        onRequest={onRequest}
        columns="xl:grid-cols-4"
      />

      <CaseGrid
        cases={maritimeSecurityCases}
        description="Practical security support across ports, vessels, offshore assets and high risk transits."
      />

      <BottomCta
        title="Need maritime security support?"
        text="24/7 operational support for vessels, ports, offshore assets and maritime organisations exposed to security risk."
        items={[
          [ShieldCheck, "Operational Risk Advice"],
          [Radar, "Threat Monitoring"],
          [Radio, "Incident Response Support"],
        ]}
        buttonText="Contact Trident →"
        onClick={() => onRequest("Maritime Security Support")}
      />
    </main>
  );
}

function GeopoliticalAnalysisPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <HeroSection
        title={<>Geopolitical <br /> Analysis</>}
        subtitle="Forward looking geopolitical analysis for organisations exposed to conflict, political instability, regulatory pressure, sanctions risk and market disruption."
        image="/geopolitical-header.png"
        label="Geopolitical Analysis"
        primaryText="Request Geopolitical Support"
        onPrimary={() => onRequest("Geopolitical Analysis Support")}
        onHome={onHome}
      />

      <CapabilityStrip
        items={[
          [Globe2, "Global Risk Monitoring"],
          [Target, "Conflict Impact Assessment"],
          [Scale, "Sanctions and Policy Analysis"],
          [Network, "Market Disruption Insight"],
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
              Strategic Risk Landscape
            </p>
            <div className="h-px w-10 bg-[#c4933a]" />
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#071426]">
            Political risk is now operational risk
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
            <p>
              Conflict, sanctions, elections, public unrest and state policy shifts increasingly affect commercial operations, maritime activity, energy markets and market access.
            </p>
            <p>
              Geopolitical analysis supports decision makers by translating strategic events into practical commercial, operational and security consequences.
            </p>
            <p>
              Trident provides forward looking analysis to help clients understand exposure, identify warning indicators and prepare for disruption before it becomes operationally critical.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#071426] shadow-xl">
          <div
            className="min-h-[360px] bg-cover bg-center"
            style={{ backgroundImage: "url('/geopolitical-threat.png')" }}
          >
            <div className="h-full min-h-[360px] bg-gradient-to-t from-[#071426]/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <ServicesGrid
        services={geopoliticalServices}
        prefix="geopolitical-analysis"
        onRequest={onRequest}
        columns="xl:grid-cols-3"
      />

      <CaseGrid
        cases={geopoliticalCases}
        description="Strategic risk analysis supporting commercial, maritime, legal and operational decision making."
      />

      <BottomCta
        title="Need geopolitical analysis support?"
        text="Forward looking intelligence support for organisations exposed to political, regulatory, security and market disruption."
        items={[
          [Globe2, "Global Monitoring"],
          [Target, "Scenario Analysis"],
          [Users, "Leadership Briefings"],
        ]}
        buttonText="Contact Trident →"
        onClick={() => onRequest("Geopolitical Analysis Support")}
      />
    </main>
  );
}
function LegalPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <HeroSection
        title={<>Legal and <br /> Expert Witness Support</>}
        subtitle="Operationally grounded maritime legal advisory for insurers, counsel and commercial stakeholders operating in complex environments."
        image="/legalheader.png"
        label="Legal"
        primaryText="Request Advisory Support"
        onPrimary={() => onRequest("Legal and Expert Witness Support")}
        onHome={onHome}
      />

      <CapabilityStrip
        items={[
          [ShieldCheck, "Government and Military Advisors"],
          [Compass, "Maritime Intelligence Specialists"],
          [Globe2, "Global Operational Experience"],
          [Scale, "Court and Arbitration Support"],
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 lg:grid-cols-[300px_1fr] lg:px-8">
        <aside className="border-r border-slate-200 pr-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
            Overview
          </p>
          <p className="text-sm leading-7 text-slate-700">
            Trident provides operationally grounded legal and expert witness support across maritime security, war risk, charterparty disputes and vessel exposure analysis. Support is delivered by government and military advisors, intelligence specialists and maritime risk advisors with experience across high threat operating environments.
          </p>
        </aside>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
            Services
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {legalServices.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                id={`legal-${slugify(title)}`}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className="mb-8 h-9 w-9 text-[#c4933a]" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold leading-6 text-[#071426]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-700">{text}</p>
                <button
                  type="button"
                  onClick={() => onRequest(title)}
                  className="mt-7 text-sm font-semibold text-[#b5832f]"
                >
                  Request this service →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CaseGrid
        cases={legalCases}
        description="Support provided across a wide range of complex maritime matters."
      />

      <BottomCta
        title="Need operational legal support?"
        text="24/7 analyst support for legal teams, insurers and commercial operators."
        items={[
          [Clock, "Rapid Global Response"],
          [Target, "Operationally Grounded Analysis"],
          [Users, "Support for Legal Teams, Insurers and Commercial Operators"],
        ]}
        buttonText="Contact Trident →"
        onClick={() => onRequest("Operational Legal Support")}
      />
    </main>
  );
}

function CyberPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <HeroSection
        title="Maritime Cyber and Electronic Risk"
        subtitle="Operational cyber advisory addressing vessel systems, navigation disruption, AIS manipulation and maritime operational technology risk."
        image="/cyberheader.png"
        label="Maritime Cyber"
        primaryText="Request Cyber Support"
        onPrimary={() => onRequest("Maritime Cyber Support")}
        onHome={onHome}
      />

      <CapabilityStrip
        items={[
          [ShieldCheck, "Maritime Cyber Specialists"],
          [Compass, "GNSS and AIS Risk Analysis"],
          [Target, "Operational Technology Security"],
          [Globe2, "Global Maritime Threat Monitoring"],
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
            Threat Landscape
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#071426]">
            The threat landscape is changing rapidly across the maritime sector
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
            <p>Commercial shipping, ports and offshore infrastructure are increasingly exposed to cyber and electronic threats capable of disrupting navigation, cargo handling, communications and operational technology systems.</p>
            <p>Cyber attacks against the maritime industry increased significantly over the past two years. Industry reporting identified a 103% increase in recorded maritime cyber incidents during 2025, with ransomware, malware infections and distributed denial of service attacks accounting for the majority of incidents.</p>
            <p>The maritime sector is now considered one of the most targeted critical infrastructure environments globally. Reporting during 2025 indicated that 31% of maritime organisations experienced a cyber attack within the previous 12 months, nearly double the level recorded five years earlier.</p>
            <p>GNSS interference, AIS spoofing and electronic navigation disruption are increasingly affecting vessels operating in the Arabian Gulf, Strait of Hormuz, Red Sea, Black Sea and Baltic Sea. These incidents create direct navigational, operational and insurance exposure, particularly for vessels transiting congested or geopolitically sensitive maritime corridors.</p>
            <p>The increasing integration of vessel systems, satellite communications, remote monitoring and shore connectivity continues to improve operational efficiency, but significantly expands the attack surface across bridge systems, operational technology, propulsion systems and vessel networks. CyberOwl reported that remote access pathways accounted for 13% of maritime cyber incidents during 2024, compared to less than 5% in 2023.</p>
            <p>Ports and terminals remain particularly exposed due to their dependence on interconnected logistics and cargo handling systems. Maritime cyber incidents now regularly target port infrastructure, container management systems, satellite communications and industrial control systems. NATO linked reporting during 2025 highlighted a significant increase in ransomware activity against European port infrastructure.</p>
            <p>The operational impact of maritime cyber attacks has already demonstrated the potential to disrupt global trade. The 2017 NotPetya attack against Maersk disrupted operations across 76 port terminals worldwide, impacted more than 45,000 systems and resulted in estimated losses of USD 250 to 300 million.</p>
            <p>More recent reporting identified 23,400 malware detections and 178 ransomware incidents across approximately 1,800 monitored vessels during the first half of 2024 alone.</p>
            <p>Operational technology compromise is now assessed as one of the most significant emerging threats to maritime operations. Cyber incidents affecting propulsion systems, cargo handling systems, communications and navigational equipment can create direct safety consequences in addition to financial and operational disruption.</p>
          </div>
        </div>

       <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-[#071426] shadow-xl">
  <img
    src="/cyberthreat.png"
    alt="Maritime cyber threat landscape"
    className="h-auto w-full object-contain object-center"
  />
</div>
      </section>

      <ServicesGrid
        services={cyberServices}
        prefix="maritime-cyber"
        onRequest={onRequest}
        columns="xl:grid-cols-5"
      />

      <CaseGrid
        cases={cyberCases}
        description="Support provided across maritime cyber and electronic risk matters."
      />

      <BottomCta
        title="Need maritime cyber support?"
        text="24/7 operational support for vessel operators, offshore infrastructure and maritime organisations facing cyber and electronic threats."
        items={[
          [Compass, "Navigation Risk Analysis"],
          [Target, "AIS and GNSS Monitoring"],
          [Shield, "Operational Technology Advisory"],
        ]}
        buttonText="Contact Trident →"
        onClick={() => onRequest("Maritime Cyber Support")}
      />
    </main>
  );
}

function MarketEntryPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <section
        className="relative min-h-[580px] bg-cover bg-center"
        style={{ backgroundImage: "url('/market-entry-header.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/98 via-[#061426]/88 to-[#061426]/60" />
<div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
          <button
            type="button"
            onClick={onHome}
            className="mb-8 text-sm text-white/85 hover:text-white"
          >
            Home <span className="mx-2 text-white/40">›</span>
            <span className="text-[#c4933a]">Market Entry</span>
          </button>

          <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
            Market <br /> Entry
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
            Market entry services support organisations entering complex
            environments by identifying risk, shaping strategy and avoiding
            exposure before commitment.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Button
              type="button"
              onClick={() => onRequest("Market Entry Support")}
              className="rounded-md bg-[#c4933a] px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#ad7f2e]"
            >
              Request Market Entry Support →
            </Button>

            <a
              href={emailHref}
              className="rounded-md border border-white/60 px-7 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#071426]"
            >
              Speak to an Analyst →
            </a>
          </div>
        </div>
      </section>

      <CapabilityStrip
        items={[
          [Globe2, "Country Risk Assessment"],
          [Scale, "Regulatory and Compliance Review"],
          [Users, "Partner Due Diligence"],
          [Network, "Supply Chain Risk Mapping"],
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
              Operating Environment
            </p>
            <div className="h-px w-10 bg-[#c4933a]" />
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#071426]">
            Entering complex markets requires informed commitment
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
            <p>
              New market entry exposes organisations to political uncertainty,
              regulatory complexity, local partner risk, security threats,
              reputational exposure and supply chain disruption.
            </p>
            <p>
              Early stage decisions often determine whether a project is
              commercially viable, legally defensible and operationally
              sustainable. Trident supports clients before commitment, before
              mobilisation and before exposure becomes embedded.
            </p>
            <p>
              Market entry advisory combines country risk, local operating
              conditions, partner intelligence, infrastructure assessment and
              practical security planning to support confident decision making.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#071426] shadow-xl">
          <div
            className="min-h-[360px] bg-cover bg-center"
            style={{ backgroundImage: "url('/market-entry-threat.png')" }}
          >
            <div className="h-full min-h-[360px] bg-gradient-to-t from-[#071426]/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-5 flex items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
            Services
          </p>
          <div className="h-px w-10 bg-[#c4933a]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketEntryServices.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              id={`market-entry-${slugify(title)}`}
              className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="mb-8 h-9 w-9 text-[#c4933a]" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold leading-6 text-[#071426]">
                {title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-700">{text}</p>
              <button
                type="button"
                onClick={() => onRequest(title)}
                className="mt-7 text-sm font-semibold text-[#b5832f]"
              >
                Request this service →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center gap-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#071426]">
            Case Experience
          </p>
          <div className="h-px w-10 bg-[#c4933a]" />
          <p className="text-sm text-slate-500">
            Support for clients entering new markets, operating environments and
            complex jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 rounded-md border border-slate-200 bg-white md:grid-cols-3 xl:grid-cols-6">
          {marketEntryCases.map(([title, text, Icon]) => (
            <div
              key={title}
              className="border-b border-slate-200 p-6 text-center md:border-r xl:border-b-0 last:border-r-0"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#071426]">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold leading-5 text-[#071426]">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <BottomCta
        title="Need market entry support?"
        text="Risk led advisory for organisations entering complex markets, mobilising new operations or assessing commercial exposure before commitment."
        items={[
          [Globe2, "Country Risk"],
          [Users, "Partner Intelligence"],
          [ShieldCheck, "Operational Security"],
        ]}
        buttonText="Contact Trident →"
        onClick={() => onRequest("Market Entry Support")}
      />
    </main>
  );
}
function ServiceCard({ service, pillarId, onRequest }) {
  const [title, image, summary] = service;

  return (
    <Card
      id={`${pillarId}-${slugify(title)}`}
      className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-500/10"
    >
      <div
        className="h-44 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8,15,28,0.08), rgba(8,15,28,0.45)), url(${image})`,
        }}
      />

      <CardContent className="p-7">
        <h3 className="text-2xl font-light tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
          {summary}
        </p>
        <Button
          type="button"
          onClick={() => onRequest(title)}
          className="mt-6 rounded-2xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2b3443]"
        >
          Request this service
        </Button>
      </CardContent>
    </Card>
  );
}

function NavDropdown({ pillar, onOpenPage }) {
  const [open, setOpen] = useState(false);

  function handleSelect(anchorId) {
    setOpen(false);
    onOpenPage(pillar.id, anchorId);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => onOpenPage(pillar.id)}
        className="rounded-xl px-2 py-2 text-sm text-slate-700 hover:text-slate-950"
      >
        {pillar.title} <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-96 pt-2">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
            {pillar.services.map((service) => (
              <button
                key={service[0]}
                type="button"
                onClick={() =>
                  handleSelect(`${pillar.id}-${slugify(service[0])}`)
                }
                className="block w-full rounded-2xl px-3 py-3 text-left text-sm text-slate-700 hover:bg-slate-100"
              >
                {service[0]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ onHome, onOpenPage }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button type="button" onClick={onHome} className="flex items-center">
          <img
            src="/logo.png"
            alt="Trident Risk and Advisory"
            className="h-12 w-auto"
          />
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {pillars.map((pillar) => (
            <NavDropdown
              key={pillar.id}
              pillar={pillar}
              onOpenPage={onOpenPage}
            />
          ))}
        </nav>

        <a
          href={emailHref}
          className="rounded-2xl bg-[#111827] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2b3443]"
        >
          Ask an Analyst
        </a>
      </div>
    </header>
  );
}

function PillarPage({ pillar, onHome, onRequest }) {
  if (pillar.id === "maritime-intelligence") {
    return <MaritimeIntelligencePage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "maritime-security") {
    return <MaritimeSecurityPage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "geopolitical-analysis") {
  return <GeopoliticalAnalysisPage onHome={onHome} onRequest={onRequest} />;
}
  
  if (pillar.id === "legal") {
    return <LegalPage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "maritime-cyber") {
    return <CyberPage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "market-entry") {
    return <MarketEntryPage onHome={onHome} onRequest={onRequest} />;
  }

  return null;
}
function RequestPage({ service, onBack }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(17,24,39,0.90), rgba(17,24,39,0.62), rgba(17,24,39,0.90)), url(${imageBank.port})`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <button
            type="button"
            onClick={onBack}
            className="mb-8 text-sm text-white/80 hover:text-white"
          >
            Back
          </button>

          <div className="max-w-4xl text-white">
            <div className="text-xs uppercase tracking-[0.35em] text-[#d6b25e]">
              Request Support
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Request: {service}
            </h1>
            <p className="mt-6 max-w-3xl leading-8 text-slate-100">
              Submit the outline below and Trident will review the requirement,
              identify the correct analyst support and respond with the proposed
              next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-500/10">
            <CardContent className="p-7">
              <h2 className="text-2xl font-light tracking-tight text-slate-950">
                What happens next
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
                <p>
                  <strong>1. Requirement review:</strong> Trident confirms the
                  service requirement, urgency, geography and operational
                  context.
                </p>
                <p>
                  <strong>2. Analyst allocation:</strong> The relevant analyst
                  or advisory lead is assigned.
                </p>
                <p>
                  <strong>3. Response and scope:</strong> Trident responds with
                  the proposed scope and any information required to proceed.
                </p>
                <a href={emailHref} className="block text-[#9b7a2f]">
                  {email}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-500/10">
            <CardContent className="p-7">
              {submitted ? (
                <div>
                  <h2 className="text-2xl font-light text-slate-950">
                    Request captured
                  </h2>
                  <p className="mt-4 leading-7 text-slate-700">
                    This prototype has captured the request locally. In the live
                    build, connect this form to Wix Forms, HubSpot, Zapier or
                    secure email.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <input className="rounded-2xl border border-slate-300 bg-white p-4" placeholder="Name" />
                  <input className="rounded-2xl border border-slate-300 bg-white p-4" placeholder="Company" />
                  <input className="rounded-2xl border border-slate-300 bg-white p-4" placeholder="Email" />
                  <input className="rounded-2xl border border-slate-300 bg-white p-4" value={service || ""} readOnly />
                  <select className="rounded-2xl border border-slate-300 bg-white p-4 text-slate-700" defaultValue="">
                    <option value="" disabled>
                      Urgency
                    </option>
                    <option>Routine</option>
                    <option>Time sensitive</option>
                    <option>Urgent</option>
                  </select>
                  <textarea
                    className="rounded-2xl border border-slate-300 bg-white p-4"
                    rows={7}
                    placeholder="Briefly describe the requirement, geography, vessel, route, legal issue or market entry question"
                  />
                  <Button
                    type="submit"
                    className="rounded-2xl bg-[#111827] px-5 py-3 font-semibold text-white hover:bg-[#2b3443]"
                  >
                    Submit Request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function HomeServicesGrid({ onOpenPage }) {
  return (
    <section id="home-services" className="bg-[#071827] px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {homeCards.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onOpenPage(item.pillarId, item.anchorId)}
            className="min-h-[260px] rounded-md border border-white/10 bg-white px-7 py-8 text-left shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="text-4xl leading-none text-[#b5893d]">
              {item.icon}
            </div>

            <h3 className="mt-7 text-2xl font-light leading-tight tracking-tight text-[#0f172a]">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              {item.text}
            </p>

            <div className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0f172a]">
              View Service
              <span className="text-[#b5893d]">→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function HomePage({ onOpenPage }) {
  function scrollToHomeServices() {
    document.getElementById("home-services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main>
      <section className="relative h-[88vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ship.png')" }}
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/45 via-[#111827]/20 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="text-xs uppercase tracking-[0.35em] text-[#d6b25e]">
              Trident Risk and Advisory
            </div>

            <h1 className="mt-6 text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Intelligence led advisory for maritime, geopolitical and legal
              risk.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-lg">
              Supporting shipping, insurance, corporate and legal clients with
              clear, defensible analysis in complex and high risk environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-2xl bg-[#d6b25e] px-8 py-4 text-base font-semibold text-[#111827] hover:bg-[#c19d4a]"
              >
                <a href={emailHref}>Ask an Analyst</a>
              </Button>

              <Button
                type="button"
                onClick={scrollToHomeServices}
                className="rounded-2xl border border-white/70 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex items-center bg-white px-8 py-16 lg:px-14">
              <div className="max-w-xl">
                <div className="text-xs uppercase tracking-[0.32em] text-[#b5893d]">
                  Global Monitoring Centre
                </div>

                <div className="mt-5 h-px w-20 bg-[#b5893d]" />

                <h2 className="mt-7 text-3xl font-light leading-tight tracking-tight text-[#0f172a] md:text-5xl">
                  24/7 oversight.
                  <br />
                  Real time insight.
                  <br />
                  Confident decisions.
                </h2>

                <p className="mt-6 text-base leading-7 text-slate-700">
                  Trident operates a 24/7 Global Monitoring Centre providing
                  continuous oversight of vessel activity, geopolitical
                  developments and emerging threats.
                </p>
              </div>

              <div className="absolute right-0 top-0 hidden h-full w-32 bg-gradient-to-r from-white to-transparent lg:block" />
            </div>

            <div className="relative min-h-[480px]">
              <img
                src="/opr2.png"
                alt="Global Monitoring Centre operations room"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10" />
            </div>
          </div>

          <div className="grid border-t border-slate-200 bg-white lg:grid-cols-4">
            {[
              ["24/7 Vessel Tracking", "Continuous monitoring of global vessel movements, routing and behavioural indicators."],
              ["Real Time Incident Monitoring", "Live monitoring of geopolitical escalation, maritime incidents and emerging threats."],
              ["Direct Analyst Support", "Immediate access to experienced analysts during operational or crisis situations."],
              ["Crisis Response Capability", "Support during rapidly evolving incidents affecting vessels, personnel or operations."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-slate-200 px-6 py-8 lg:border-b-0 lg:border-r last:border-r-0"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b5893d]">
                  {title}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeServicesGrid onOpenPage={onOpenPage} />
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [requestedService, setRequestedService] = useState(null);

  function openPage(pillarId, anchorId) {
    setRequestedService(null);
    setPage(pillarId);

    setTimeout(() => {
      if (anchorId) {
        document.getElementById(anchorId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  }

  function goHome() {
    setRequestedService(null);
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function requestService(service) {
    setRequestedService(service);
    setPage("request");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activePillar = pillars.find((pillar) => pillar.id === page);

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-950">
      <Header onHome={goHome} onOpenPage={openPage} />

      {page === "home" && <HomePage onOpenPage={openPage} />}

      {activePillar && (
        <PillarPage
          pillar={activePillar}
          onHome={goHome}
          onRequest={requestService}
        />
      )}

      {page === "request" && (
        <RequestPage service={requestedService} onBack={goHome} />
      )}

      <footer className="bg-white px-6 py-10 text-[#071426] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Trident Risk and Advisory"
              className="h-12 w-auto"
            />
            <div>
              <div className="text-xl font-semibold tracking-[0.25em]">
                TRIDENT
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#071426]">
                Risk and Advisory
              </div>
            </div>
          </div>

          <a
            href={emailHref}
            className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#071426]"
          >
            <Mail className="h-5 w-5" strokeWidth={1.5} />
            {email}
          </a>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Globe className="h-5 w-5" strokeWidth={1.5} />
            www.tridentrisk.org
          </div>
        </div>
      </footer>
    </div>
  );
}
