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

const email = "intelligence@tridentrisk.org";
const emailHref = `mailto:${email}`;

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

const caseExperience = [
  [
    "War Risk and Real Danger Assessments",
    "Credible risk evaluations for vessels, ports and operating areas.",
    Target,
  ],
  [
    "Houthi and Red Sea Exposure Analysis",
    "Operational analysis of threat activity, targeting and vessel exposure.",
    Ship,
  ],
  [
    "Strait of Hormuz Transit Risk",
    "Risk assessments relating to transit, military activity and regional tensions.",
    Compass,
  ],
  [
    "Vessel Attribution and Ownership Analysis",
    "Support in establishing vessel identity, affiliation and beneficial ownership.",
    Search,
  ],
  [
    "Insurance and Charterparty Support",
    "Assistance in claims, disputes and coverage related matters.",
    FileText,
  ],
  [
    "Maritime Incident Reconstruction",
    "Operational reconstruction of events to support legal and insurance outcomes.",
    Clock,
  ],
];

const maritimeIntelligenceServices = [
  {
    icon: Ship,
    title: "Vessel Affiliation Checks",
    text:
      "Assessment of ownership, management, beneficial control, commercial history and trading behaviour to identify exposure and risk linkages.",
  },
  {
    icon: FileText,
    title: "Sanctions Exposure Analysis",
    text:
      "Screening of vessels, ownership, cargo, routing and counterparties against sanctions regimes and enforcement trends.",
  },
  {
    icon: MapPin,
    title: "Port Call Risk History",
    text:
      "Analysis of historical and recent port calls to identify exposure to high risk jurisdictions, conflict areas and sensitive trading patterns.",
  },
  {
    icon: Target,
    title: "AIS Manipulation Analysis",
    text:
      "Detection of AIS spoofing, dark activity, identity masking and abnormal vessel behaviour patterns.",
  },
  {
    icon: Eye,
    title: "Dark Activity Assessment",
    text:
      "Investigation of AIS silence, loitering, ship to ship activity and suspicious routing behaviour.",
  },
  {
    icon: Flag,
    title: "Flag and Registry Profiling",
    text:
      "Evaluation of flag state risk, registry quality, enforcement posture, ownership jurisdiction and reputational exposure.",
  },
  {
    icon: Users,
    title: "Counterparty Intelligence",
    text:
      "Screening of commercial counterparties, managers, operators and associated entities before engagement.",
  },
  {
    icon: ClipboardCheck,
    title: "Pre Charter Risk Intelligence",
    text:
      "Decision ready intelligence before fixture, voyage approval, contracting or insurance placement.",
  },
  {
    icon: Anchor,
    title: "Fleet Exposure Analysis",
    text:
      "Assessment of fleet wide exposure to sanctions, dark activity, high risk ports and geopolitical targeting criteria.",
  },
  {
    icon: Globe2,
    title: "Maritime Threat Assessments",
    text:
      "Tailored assessments of regional threats impacting vessels, routes, ports and commercial operations.",
  },
];

const maritimeIntelligenceCases = [
  [
    "Red Sea Vessel Exposure Reviews",
    "Threat and exposure assessments for vessels transiting the Red Sea.",
    Target,
  ],
  [
    "Strait of Hormuz Threat Screening",
    "Risk screening for vessels operating in the Strait of Hormuz.",
    Radio,
  ],
  [
    "Israeli Affiliation Assessments",
    "Affiliation and linkage analysis for Israel related exposure.",
    Network,
  ],
  [
    "Sanctions Risk Reviews",
    "Vessel, entity and voyage screening against global sanctions.",
    Shield,
  ],
  [
    "Dark Fleet Behaviour Analysis",
    "Behavioural analysis on high risk and dark fleet operations.",
    Landmark,
  ],
  [
    "Maritime Insurance Support",
    "Intelligence support for underwriters, P&I clubs and legal teams.",
    Umbrella,
  ],
];

const maritimeSecurityServices = [
  {
    icon: Anchor,
    title: "Port Vulnerability Assessment",
    text:
      "Assessment of port security posture, waterside exposure, access control, local crime, protest activity, ISPS implementation and resilience.",
  },
  {
    icon: Ship,
    title: "Voyage Vulnerability Assessment",
    text:
      "Route based assessment combining vessel profile, cargo, ownership, recent trading pattern, threat environment and escalation indicators.",
  },
  {
    icon: Compass,
    title: "High Risk Area Transit Planning",
    text:
      "Planning support for vessels entering exposed maritime corridors, including routing, reporting, watchkeeping and escalation triggers.",
  },
  {
    icon: ShieldCheck,
    title: "Embarked Security Coordination",
    text:
      "Coordination of armed or unarmed embarked security arrangements, provider selection, embarkation planning and reporting expectations.",
  },
  {
    icon: Eye,
    title: "Stowaway Risk Mitigation",
    text:
      "Port and vessel level measures to reduce stowaway exposure through search planning, access control and gangway discipline.",
  },
  {
    icon: Landmark,
    title: "Offshore Asset Protection",
    text:
      "Security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure in exposed waters.",
  },
  {
    icon: Radio,
    title: "Crisis Response and Incident Management",
    text:
      "Support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents or rapid regional escalation.",
  },
  {
    icon: Radar,
    title: "Maritime Threat Monitoring",
    text:
      "Continuous monitoring of maritime incidents, threat reporting, vessel exposure and operational risk indicators.",
  },
];

const maritimeSecurityCases = [
  [
    "Port Call Risk Reviews",
    "Security assessment before calling at exposed or operationally sensitive ports.",
    Anchor,
  ],
  [
    "High Risk Transit Support",
    "Planning support for vessels entering elevated threat maritime corridors.",
    Compass,
  ],
  [
    "Offshore Security Advisory",
    "Support for offshore assets, survey activity and energy infrastructure.",
    Landmark,
  ],
  [
    "Boarding and Detention Response",
    "Advisory support during hostile boarding, detention or attempted interference.",
    Shield,
  ],
  [
    "Crew and Vessel Protection",
    "Practical measures to reduce exposure to crew, vessel and cargo.",
    Users,
  ],
  [
    "Crisis Management Support",
    "Operational advice during fast moving maritime security incidents.",
    Radio,
  ],
];

const cyberServices = [
  {
    icon: Globe2,
    title: "AIS Alternatives and Resilient Tracking",
    text:
      "Alternative tracking and monitoring solutions when AIS is unavailable, unreliable or manipulated.",
  },
  {
    icon: Compass,
    title: "GNSS Interference Advisory",
    text:
      "Analysis of jamming, spoofing and navigation interference affecting vessel position and safety.",
  },
  {
    icon: Target,
    title: "AIS Spoofing and Behaviour Analysis",
    text:
      "Detection of AIS manipulation, identity spoofing and anomalous vessel behaviour.",
  },
  {
    icon: Shield,
    title: "Vessel OT Security Assessments",
    text:
      "Assessment of onboard operational technology and control systems exposure.",
  },
  {
    icon: Search,
    title: "Maritime Cyber Risk Assessments",
    text:
      "Assessment of cyber risk across vessels, fleets, offshore assets and maritime operations.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Incident Response",
    text:
      "Advisory support during cyber incidents, system disruption and suspected compromise.",
  },
  {
    icon: FileText,
    title: "Vessel Network Penetration Testing",
    text:
      "Controlled testing of vessel or shore networks to identify vulnerabilities and gaps.",
  },
  {
    icon: Users,
    title: "Crew Cyber Awareness Training",
    text:
      "Practical training to strengthen crew awareness and reduce human risk onboard.",
  },
  {
    icon: Landmark,
    title: "Offshore and Port Infrastructure Security",
    text:
      "Cyber security advisory for ports, terminals, offshore assets and critical infrastructure.",
  },
  {
    icon: ClipboardCheck,
    title: "Cyber Compliance and IMO / IACS Advisory",
    text:
      "Support with IMO guidance, IACS requirements and emerging cyber compliance obligations.",
  },
];

const cyberCases = [
  [
    "Strait of Hormuz GNSS Interference",
    "Support for vessels transiting areas of active electronic warfare and interference.",
    Target,
  ],
  [
    "Baltic Sea GPS Disruption",
    "Advisory during widespread jamming and spoofing affecting commercial traffic.",
    Compass,
  ],
  [
    "AIS Spoofing Investigations",
    "Analysis of manipulated AIS signals and identity spoofing incidents.",
    Search,
  ],
  [
    "Vessel OT Vulnerability Reviews",
    "Assessment of onboard systems, networks and operational technology risk.",
    Shield,
  ],
  [
    "Offshore Infrastructure Resilience",
    "Cyber security reviews for rigs, platforms and offshore support operations.",
    Landmark,
  ],
  [
    "Maritime Cyber Incident Response",
    "Support during live incidents affecting vessels, networks or critical operations.",
    Clock,
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
    services: cyberServices.map((item) => [
      item.title,
      imageBank.cyber,
      item.text,
    ]),
  },
  {
    id: "geopolitical-analysis",
    title: "Geopolitical Analysis",
    intro:
      "Geopolitical analysis supports forward looking decision making by identifying how conflict, politics and regulation will affect operations, assets and market access.",
    hero: imageBank.map,
    services: [
      [
        "Regional Risk Reports",
        imageBank.map,
        "Structured reporting on political, security and conflict developments affecting maritime and commercial operations.",
      ],
      [
        "Conflict Impact Assessments",
        imageBank.map,
        "Assessment of how armed conflict, military escalation, proxy activity or state action may affect assets, personnel, supply chains and operations.",
      ],
      [
        "Energy and Shipping Disruption Analysis",
        imageBank.ship,
        "Analysis of disruption to ports, chokepoints, energy infrastructure, freight routes, offshore operations and regional logistics networks.",
      ],
      [
        "Sanctions Forecasting",
        imageBank.buildings,
        "Forward looking assessment of potential sanctions, regulatory tightening, enforcement trends and likely commercial impact.",
      ],
      [
        "Election and Political Stability Monitoring",
        imageBank.buildings,
        "Monitoring of election cycles, public order risk, governance stability, policy direction and business disruption indicators.",
      ],
      [
        "Forward Looking Risk Scenarios",
        imageBank.map,
        "Scenario based analysis to help leadership teams prepare for deterioration, escalation, stabilisation or market access changes.",
      ],
    ],
  },
  {
    id: "market-entry",
    title: "Market Entry",
    intro:
      "Market entry services support organisations entering complex environments by identifying risk, shaping strategy and avoiding exposure before commitment.",
    hero: imageBank.buildings,
    services: [
      [
        "Country Entry Risk Assessments",
        imageBank.buildings,
        "Assessment of political, security, regulatory and reputational risk prior to market entry.",
      ],
      [
        "Port and Infrastructure Feasibility Studies",
        imageBank.port,
        "Risk led review of ports, terminals, logistics corridors, energy infrastructure and physical operating environments before investment or mobilisation.",
      ],
      [
        "Regulatory and Compliance Mapping",
        imageBank.legal,
        "Mapping of regulatory requirements, licensing exposure, sanctions considerations, local constraints and compliance pressure points.",
      ],
      [
        "Local Partner Due Diligence",
        imageBank.buildings,
        "Intelligence led review of local partners, agents, suppliers, owners, politically exposed persons and reputational risk indicators.",
      ],
      [
        "Security Framework Design for New Operations",
        imageBank.buildings,
        "Design of practical security frameworks for new offices, sites, port operations, offshore activity, project teams and executive travel.",
      ],
      [
        "Supply Chain Risk Mapping",
        imageBank.map,
        "Assessment of supply chain vulnerabilities, chokepoints, political exposure, transport disruption and third party dependency risk.",
      ],
    ],
  },
  {
    id: "legal",
    title: "Legal",
    intro:
      "Trident provides operationally grounded legal and expert witness support across maritime security, war risk, charterparty disputes and vessel exposure analysis. Support is delivered by government and military advisors, intelligence specialists and maritime risk professionals with experience across high threat operating environments.",
    hero: "/legalheader.png",
    services: legalServices.map((item) => [
      item.title,
      imageBank.legal,
      item.text,
    ]),
  },
];

const homeCards = [
  {
    icon: "♔",
    title: "Maritime Intelligence",
    text:
      "Actionable intelligence on vessels, ownership, movements and activity to reduce exposure and support informed decisions.",
    pillarId: "maritime-intelligence",
  },
  {
    icon: "◇",
    title: "Maritime Security",
    text:
      "Operationally grounded security support to protect people, assets and operations in high threat environments.",
    pillarId: "maritime-security",
  },
  {
    icon: "⌬",
    title: "Maritime Cyber",
    text:
      "Identify and mitigate cyber risks to vessels, systems and operations in an increasingly connected maritime environment.",
    pillarId: "maritime-cyber",
  },
  {
    icon: "◎",
    title: "Geopolitical Analysis",
    text:
      "Forward looking analysis of political, security and regulatory developments that shape maritime risk and opportunity.",
    pillarId: "geopolitical-analysis",
  },
  {
    icon: "▥",
    title: "Market Entry",
    text:
      "Risk led market entry advisory to help organisations expand confidently and avoid costly exposure in new environments.",
    pillarId: "market-entry",
  },
  {
    icon: "⚖",
    title: "Legal",
    text:
      "Expert witness and specialist legal support grounded in real world maritime and security experience.",
    pillarId: "legal",
  },
  {
    icon: "⚓︎",
    title: "Ports and Infrastructure",
    text:
      "Assess and manage risk to ports, infrastructure and maritime operations across critical environments.",
    pillarId: "maritime-security",
  },
  {
    icon: "☷",
    title: "Incident Response",
    text:
      "Rapid, discreet and effective support when incidents occur, helping you stabilise, respond and recover.",
    pillarId: "maritime-security",
    anchorId: "maritime-security-crisis-response-and-incident-management",
  },
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

function MaritimeSecurityPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <section
        className="relative min-h-[580px] bg-cover bg-center"
        style={{ backgroundImage: "url('/maritime-security-header.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/96 via-[#061426]/78 to-[#061426]/32" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
          <button
            type="button"
            onClick={onHome}
            className="mb-8 text-sm text-white/85 hover:text-white"
          >
            Home <span className="mx-2 text-white/40">›</span>
            <span className="text-[#c4933a]">Maritime Security</span>
          </button>

          <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
            Maritime <br /> Security
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
            Operational security advisory for vessels, ports, offshore assets
            and crews operating in high threat or unstable maritime
            environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Button
              type="button"
              onClick={() => onRequest("Maritime Security Support")}
              className="rounded-md bg-[#c4933a] px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#ad7f2e]"
            >
              Request Security Support →
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
              Commercial vessels, offshore assets and port operations remain
              exposed to threats including piracy, armed robbery, hostile
              boarding, detention, civil unrest, stowaway activity and regional
              military escalation.
            </p>
            <p>
              Security decisions require more than generic country risk
              reporting. They require vessel specific analysis, route context,
              port exposure, crew vulnerability and clear operational
              mitigation.
            </p>
            <p>
              Trident supports go or no go decisions, port call planning,
              offshore activity, high risk area transit and incident response
              through practical maritime security advice.
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

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mb-5 flex items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
            Services
          </p>
          <div className="h-px w-10 bg-[#c4933a]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {maritimeSecurityServices.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              id={`maritime-security-${slugify(title)}`}
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
            Practical security support across ports, vessels, offshore assets
            and high risk transits.
          </p>
        </div>

        <div className="grid grid-cols-1 rounded-md border border-slate-200 bg-white md:grid-cols-3 xl:grid-cols-6">
          {maritimeSecurityCases.map(([title, text, Icon]) => (
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

function CyberPage({ onHome, onRequest }) {
  return (
    <main className="bg-[#f7f8fa] text-[#071426]">
      <section
        className="relative min-h-[520px] bg-cover bg-center"
        style={{ backgroundImage: "url('/cyberheader.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/95 via-[#061426]/78 to-[#061426]/32" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
          <button
            type="button"
            onClick={onHome}
            className="mb-8 text-sm text-white/85 hover:text-white"
          >
            Home <span className="mx-2 text-white/40">›</span>
            <span className="text-[#c4933a]">Maritime Cyber</span>
          </button>

          <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
            Maritime Cyber and Electronic Risk
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
            Operational cyber advisory addressing vessel systems, navigation
            disruption, AIS manipulation and maritime operational technology
            risk.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Button
              type="button"
              onClick={() => onRequest("Maritime Cyber Support")}
              className="rounded-md bg-[#c4933a] px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#ad7f2e]"
            >
              Request Cyber Support →
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
          [ShieldCheck, "Maritime Cyber Specialists"],
          [Compass, "GNSS and AIS Risk Analysis"],
          [Target, "Operational Technology Security"],
          [Globe2, "Global Maritime Threat Monitoring"],
        ]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
            Threat Landscape
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#071426]">
            The threat landscape is changing rapidly across the maritime sector
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-700">
            <p>
              Commercial shipping, ports and offshore infrastructure are
              increasingly exposed to cyber and electronic threats capable of
              disrupting navigation, cargo handling, communications and
              operational technology systems.
            </p>
            <p>
              Cyber attacks against the maritime industry increased
              significantly over the past two years. Industry reporting
              identified a 103% increase in recorded maritime cyber incidents
              during 2025, with ransomware, malware infections and distributed
              denial of service attacks accounting for the majority of
              incidents.
            </p>
            <p>
              The maritime sector is now considered one of the most targeted
              critical infrastructure environments globally. Reporting during
              2025 indicated that 31% of maritime organisations experienced a
              cyber attack within the previous 12 months, nearly double the
              level recorded five years earlier.
            </p>
            <p>
              GNSS interference, AIS spoofing and electronic navigation
              disruption are increasingly affecting vessels operating in the
              Arabian Gulf, Strait of Hormuz, Red Sea, Black Sea and Baltic Sea.
              These incidents create direct navigational, operational and
              insurance exposure, particularly for vessels transiting congested
              or geopolitically sensitive maritime corridors.
            </p>
            <p>
              The increasing integration of vessel systems, satellite
              communications, remote monitoring and shore connectivity continues
              to improve operational efficiency, but significantly expands the
              attack surface across bridge systems, operational technology,
              propulsion systems and vessel networks. CyberOwl reported that
              remote access pathways accounted for 13% of maritime cyber
              incidents during 2024, compared to less than 5% in 2023.
            </p>
            <p>
              Ports and terminals remain particularly exposed due to their
              dependence on interconnected logistics and cargo handling systems.
              Maritime cyber incidents now regularly target port infrastructure,
              container management systems, satellite communications and
              industrial control systems. NATO linked reporting during 2025
              highlighted a significant increase in ransomware activity against
              European port infrastructure.
            </p>
            <p>
              The operational impact of maritime cyber attacks has already
              demonstrated the potential to disrupt global trade. The 2017
              NotPetya attack against Maersk disrupted operations across 76 port
              terminals worldwide, impacted more than 45,000 systems and
              resulted in estimated losses of USD 250 to 300 million.
            </p>
            <p>
              More recent reporting identified 23,400 malware detections and
              178 ransomware incidents across approximately 1,800 monitored
              vessels during the first half of 2024 alone.
            </p>
            <p>
              Operational technology compromise is now assessed as one of the
              most significant emerging threats to maritime operations. Cyber
              incidents affecting propulsion systems, cargo handling systems,
              communications and navigational equipment can create direct safety
              consequences in addition to financial and operational disruption.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#071426] shadow-xl">
          <img
            src="/cyberthreat.png"
            alt="Maritime cyber threat landscape"
            className="h-full min-h-[360px] w-full object-contain object-center p-4"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#b5832f]">
          Services
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {cyberServices.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              id={`maritime-cyber-${slugify(title)}`}
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
            Support provided across maritime cyber and electronic risk matters.
          </p>
        </div>

        <div className="grid grid-cols-1 rounded-md border border-slate-200 bg-white md:grid-cols-3 xl:grid-cols-6">
          {cyberCases.map(([title, text, Icon]) => (
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

function PillarPage({ pillar, onHome, onRequest }) {
  if (pillar.id === "maritime-intelligence") {
    return <MaritimeIntelligencePage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "maritime-security") {
    return <MaritimeSecurityPage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "legal") {
    return <LegalPage onHome={onHome} onRequest={onRequest} />;
  }

  if (pillar.id === "maritime-cyber") {
    return <CyberPage onHome={onHome} onRequest={onRequest} />;
  }

  return null;
}
