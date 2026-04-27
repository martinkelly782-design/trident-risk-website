import React, { useState } from "react";

const Button = ({ children, asChild, ...props }) => <button {...props}>{children}</button>;
const Card = ({ children, ...props }) => <div {...props}>{children}</div>;
const CardContent = ({ children, ...props }) => <div {...props}>{children}</div>;
const Badge = ({ children, ...props }) => <span {...props}>{children}</span>;
const email = "intelligence@tridentrisk.org";
const emailHref = `mailto:${email}`;

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

[
  ["Vessel Affiliation Check", "vessel-affiliation-check"],
  ["P&I Claim Support", "p-i-claim-support"],
  ["Dark Activity and AIS Manipulation Analysis", "dark-activity-and-ais-manipulation-analysis"],
].forEach(([input, expected]) => {
  console.assert(slugify(input) === expected, `slugify failed for ${input}`);
});

const imageBank = {
  vessel: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=85",
  ship: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85",
  cyber: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  map: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  buildings: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  legal: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",
  port: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=85",
};

const pillars = [
  {
    id: "maritime-intelligence",
    title: "Maritime Intelligence",
    intro: "Maritime intelligence services are used to understand vessel exposure, ownership risk, sanctions linkage and behavioural indicators before commercial or operational decisions are made.",
    hero: imageBank.vessel,
    services: [
      ["Vessel Affiliation Check", imageBank.vessel, "A structured review of ownership, management, beneficial control and trading behaviour to determine whether a vessel aligns with known targeting profiles or politically sensitive exposure. Used before chartering, insurance placement or transit through high risk regions."],
      ["Sanctions Exposure Analysis", imageBank.port, "Assessment of vessel, ownership, cargo, routing and counterparties against sanctions regimes and enforcement trends. Supports pre fixture checks, compliance validation and avoidance of regulatory or reputational exposure."],
      ["Counterparty Risk Intelligence", imageBank.buildings, "Due diligence on counterparties, ownership structures, operating history and reputational exposure before engagement. Used to identify hidden links, politically exposed interests or adverse reporting."],
      ["Port Call Risk History Analysis", imageBank.port, "Review of recent and historic port calls to identify exposure to sanctioned jurisdictions, conflict areas, high risk ports or politically sensitive trading patterns."],
      ["Dark Activity and AIS Manipulation Analysis", imageBank.map, "Assessment of AIS gaps, spoofing, routing anomalies and suspicious behaviour, including ship to ship transfer indicators. Used to identify sanctions evasion, grey fleet activity and deliberate concealment."],
      ["Flag and Registry Risk Profiling", imageBank.ship, "Assessment of flag state, registry history, ownership jurisdiction and compliance exposure where identity, flag changes or registry selection may affect risk perception."],
      ["Pre Charter Risk Intelligence Reports", imageBank.vessel, "Client ready reporting before fixture or voyage approval, combining vessel profile, route risk, ownership exposure and commercial sensitivity."],
    ],
  },
  {
    id: "maritime-security",
    title: "Maritime Security",
    intro: "Maritime security services provide practical, operationally grounded support to reduce risk to vessels, crews and assets operating in high threat or unstable environments.",
    hero: imageBank.ship,
    services: [
      ["Port Vulnerability Assessment", imageBank.port, "Detailed assessment of port security posture, access control, waterside exposure, local criminality, protest potential, ISPS implementation and resilience. Used to determine whether a port call is acceptable or requires mitigation."],
      ["Voyage Vulnerability Assessment", imageBank.ship, "Comprehensive voyage assessment combining vessel characteristics, route, cargo, ownership, recent trading patterns, threat environment and escalation indicators. Supports go or no go decisions, routing and insurance submissions."],
      ["High Risk Area Transit Planning", imageBank.map, "Planning support for vessels entering high risk maritime corridors, including route selection, reporting requirements, watchkeeping, communications, citadel considerations and escalation triggers."],
      ["Embarked Security Coordination", imageBank.ship, "Coordination of armed or unarmed embarked security arrangements, including provider selection, embarkation planning, rules of conduct, guard force oversight and reporting expectations."],
      ["Stowaway Risk Mitigation", imageBank.port, "Port and vessel level measures to reduce stowaway exposure, including search planning, access control, deck checks, machinery space checks and gangway discipline."],
      ["Offshore Asset Protection", imageBank.ship, "Security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure operating in exposed or politically sensitive waters."],
      ["Crisis Response and Incident Management", imageBank.map, "Support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents or rapid regional escalation affecting maritime operations."],
    ],
  },
  {
    id: "maritime-cyber",
    title: "Maritime Cyber",
    intro: "Maritime cyber services address real world vulnerabilities in navigation, tracking and onboard systems where digital disruption can directly impact operational safety.",
    hero: imageBank.cyber,
    services: [
      ["AIS Alternatives", imageBank.map, "Alternative tracking and monitoring solutions where AIS is unreliable, manipulated, degraded or unavailable. Used when standard maritime tracking cannot be treated as reliable."],
      ["GNSS Interference Advisory", imageBank.map, "Analysis of jamming, spoofing and navigation interference affecting vessel positioning and bridge decision making. Supports routing, reporting and practical navigation precautions."],
      ["Vessel Network Penetration Testing", imageBank.cyber, "Controlled testing of vessel or maritime company network exposure to identify vulnerabilities affecting operations, data integrity, communications or safety critical systems."],
      ["Cyber Threat Monitoring", imageBank.cyber, "Monitoring of maritime relevant cyber threat reporting, hostile actor activity, data exposure and attacks against shipping, port or logistics infrastructure."],
      ["Crew Cyber Awareness Training", imageBank.cyber, "Practical training covering phishing, device handling, onboard digital hygiene, removable media, communications discipline and escalation procedures."],
      ["Incident Response Advisory", imageBank.cyber, "Advisory support during cyber disruption, suspected compromise, navigation anomalies, data exposure or operational system interruption."],
    ],
  },
  {
    id: "geopolitical-analysis",
    title: "Geopolitical Analysis",
    intro: "Geopolitical analysis supports forward looking decision making by identifying how conflict, politics and regulation will affect operations, assets and market access.",
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
    intro: "Market entry services support organisations entering complex environments by identifying risk, shaping strategy and avoiding exposure before commitment.",
    hero: imageBank.buildings,
    services: [
      ["Country Entry Risk Assessments", imageBank.buildings, "Assessment of political, security, regulatory and reputational risk prior to market entry."],
      ["Port and Infrastructure Feasibility Studies", imageBank.port, "Risk led review of ports, terminals, logistics corridors, energy infrastructure and physical operating environments before investment or mobilisation."],
      ["Regulatory and Compliance Mapping", imageBank.legal, "Mapping of regulatory requirements, licensing exposure, sanctions considerations, local constraints and compliance pressure points."],
      ["Local Partner Due Diligence", imageBank.buildings, "Intelligence led review of local partners, agents, suppliers, owners, politically exposed persons and reputational risk indicators."],
      ["Security Framework Design for New Operations", imageBank.buildings, "Design of practical security frameworks for new offices, sites, port operations, offshore activity, project teams and executive travel."],
      ["Supply Chain Risk Mapping", imageBank.map, "Assessment of supply chain vulnerabilities, chokepoints, political exposure, transport disruption and third party dependency risk."],
    ],
  },
  {
    id: "legal",
    title: "Legal",
    intro: "Trident’s legal and expert witness capability is delivered by a former Royal Navy specialist and government advisor, with deep regional expertise across the Middle East and high risk maritime theatres. The service supports counsel and insurers with clear, defensible opinion grounded in real world operational context.",
    hero: imageBank.buildings,
    services: [
      ["Expert Witness", imageBank.legal, "Independent expert opinion grounded in operational maritime experience, supporting proceedings involving war risk, vessel exposure and security decision making."],
      ["Charterparty Dispute Support", imageBank.ship, "Support in disputes involving voyage risk, routing decisions, war risk clauses, port safety, deviation, delay and exposure to armed threat."],
      ["War Risk and Real Danger Assessments", imageBank.map, "Structured assessment of whether a vessel, voyage, port or operating area faced a credible risk threshold at a material time."],
      ["Insurance Claim Support", imageBank.buildings, "Analysis supporting P&I, hull and machinery, war risk, kidnap and ransom or business interruption claims linked to maritime security events."],
      ["Standard of Care Analysis", imageBank.legal, "Assessment of whether actions taken before, during or after an incident aligned with accepted maritime security practice and reasonable precautions."],
      ["Court and Arbitration Support", imageBank.legal, "Preparation of expert reports, technical notes, counsel briefings and evidential material for court or arbitration proceedings."],
      ["Joint Expert Meetings", imageBank.legal, "Support for joint expert discussions, issue narrowing, agreed statements and professional engagement with opposing experts."],
      ["Oral Evidence Preparation", imageBank.legal, "Preparation for oral evidence, cross examination, technical explanation and clear presentation of complex maritime risk matters."],
    ],
  },
];

function ServiceCard({ service, pillarId, onRequest }) {
  const [title, image, summary] = service;
  return (
    <Card id={`${pillarId}-${slugify(title)}`} className="scroll-mt-32 overflow-hidden rounded-[2rem] border-slate-400/50 bg-[#f8faf9] shadow-xl shadow-slate-500/10">
      <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(8,15,28,0.08), rgba(8,15,28,0.45)), url(${image})` }} />
      <CardContent className="p-7">
        <h3 className="text-2xl font-light tracking-tight text-slate-900">{title}</h3>
        <p className="mt-5 text-sm leading-7 text-slate-800 md:text-base">{summary}</p>
        <Button type="button" onClick={() => onRequest(title)} className="mt-6 rounded-2xl bg-[#123047] text-white hover:bg-[#0b2234]">
          Request this service
        </Button>
      </CardContent>
    </Card>
  );
}

function NavDropdown({ pillar, onOpenPage }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" onClick={() => onOpenPage(pillar.id)} className="text-sm text-slate-800 hover:text-slate-950">
        {pillar.title} <span className="text-xs">▾</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-3 w-96 rounded-3xl border border-slate-400/50 bg-[#eef3f4]/95 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          {pillar.services.map((service) => (
            <button
              key={service[0]}
              type="button"
              onClick={() => onOpenPage(pillar.id, `${pillar.id}-${slugify(service[0])}`)}
              className="block w-full rounded-2xl px-3 py-3 text-left text-sm text-slate-800 hover:bg-[#f8faf9]"
            >
              {service[0]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PillarPage({ pillar, onHome, onRequest }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-400/50">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,34,52,0.84), rgba(11,34,52,0.5), rgba(11,34,52,0.88)), url(${pillar.hero})` }} />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Button type="button" variant="outline" onClick={onHome} className="mb-8 rounded-2xl bg-white/90 text-slate-900 hover:bg-white">
            Back to Home
          </Button>
          <Badge className="mb-6 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-white backdrop-blur-sm">{pillar.title}</Badge>
          <h1 className="text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">{pillar.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">{pillar.intro}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl rounded-t-[2rem] bg-[linear-gradient(180deg,#e5eef0_0%,#d5e1e4_100%)] px-6 py-16 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Services</div>
          <h2 className="text-3xl font-light tracking-tight text-slate-900 md:text-5xl">Explore {pillar.title}</h2>
          <p className="text-sm leading-7 text-slate-800 md:text-base">{pillar.intro}</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {pillar.services.map((service) => (
            <ServiceCard key={service[0]} service={service} pillarId={pillar.id} onRequest={onRequest} />
          ))}
        </div>
      </section>
    </main>
  );
}

function RequestPage({ service, onBack }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,34,52,0.86), rgba(11,34,52,0.58), rgba(11,34,52,0.88)), url(${imageBank.port})` }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <button type="button" onClick={onBack} className="mb-8 text-sm text-white/80 hover:text-white">Back</button>
          <div className="max-w-4xl text-white">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-200">Request Support</div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">Request: {service}</h1>
            <p className="mt-6 max-w-3xl leading-8 text-slate-100">Submit the outline below and Trident will review the requirement, identify the correct analyst support and respond with the proposed next step.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Card className="rounded-[2rem] border-slate-400/50 bg-[#f8faf9] shadow-xl shadow-slate-500/10">
          <CardContent className="p-7">
            <h2 className="text-2xl font-light tracking-tight text-slate-900">What happens next</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
              <p><strong>1. Requirement review:</strong> Trident confirms the service requirement, urgency, geography and operational context.</p>
              <p><strong>2. Analyst allocation:</strong> The relevant analyst or advisory lead is assigned.</p>
              <p><strong>3. Response and scope:</strong> Trident responds with the proposed scope and any information required to proceed.</p>
              <a href={emailHref} className="block text-[#123047]">{email}</a>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-[2rem] border-slate-400/50 bg-[#f8faf9] shadow-xl shadow-slate-500/10">
          <CardContent className="p-7">
            {submitted ? (
              <div>
                <h2 className="text-2xl font-light text-slate-900">Request captured</h2>
                <p className="mt-4 leading-7 text-slate-700">This prototype has captured the request locally. In the live build, connect this form to Wix Forms, HubSpot, Zapier or secure email.</p>
              </div>
            ) : (
              <form className="grid gap-3" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                <input className="rounded-2xl border border-slate-300 bg-white p-4" placeholder="Name" />
                <input className="rounded-2xl border border-slate-300 bg-white p-4" placeholder="Company" />
                <input className="rounded-2xl border border-slate-300 bg-white p-4" placeholder="Email" />
                <input className="rounded-2xl border border-slate-300 bg-white p-4" value={service || ""} readOnly />
                <select className="rounded-2xl border border-slate-300 bg-white p-4 text-slate-700" defaultValue="">
                  <option value="" disabled>Urgency</option>
                  <option>Routine</option>
                  <option>Time sensitive</option>
                  <option>Urgent</option>
                </select>
                <textarea className="rounded-2xl border border-slate-300 bg-white p-4" rows={7} placeholder="Briefly describe the requirement, geography, vessel, route, legal issue or market entry question" />
                <Button type="submit" className="rounded-2xl bg-[#123047] text-white hover:bg-[#0b2234]">Submit Request</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function HomeServiceSection({ pillar, onOpenPage }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-300/60 py-24">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${pillar.hero})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2234]/85 via-[#0b2234]/65 to-[#0b2234]/85" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl text-white">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-200">Service Type</div>
            <h2 className="mt-3 text-3xl font-light tracking-tight md:text-5xl">{pillar.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">{pillar.intro}</p>
          </div>
          <Button type="button" onClick={() => onOpenPage(pillar.id)} className="rounded-2xl bg-white text-slate-900 hover:bg-slate-200">
            View {pillar.title}
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillar.services.map((service) => (
            <button
              key={service[0]}
              type="button"
              onClick={() => onOpenPage(pillar.id, `${pillar.id}-${slugify(service[0])}`)}
              className="rounded-2xl border border-white/30 bg-white/95 px-5 py-5 text-left font-semibold text-slate-900 shadow-lg transition hover:shadow-2xl"
            >
              {service[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage({ onOpenPage }) {
  return (
    <main>
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ship.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2234]/95 via-[#0b2234]/75 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-200">
              Trident Risk & Advisory
            </div>

            <h1 className="mt-6 text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Intelligence led advisory for maritime, geopolitical and legal risk.
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-200 md:text-lg">
              Supporting shipping, insurance, corporate and legal clients with clear, defensible analysis in complex and high risk environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
  <Button
    asChild
    className="rounded-2xl bg-[#d6b25e] text-[#0b2234] hover:bg-[#c19d4a] px-6 py-3 text-base whitespace-nowrap"
  >
    <a href={emailHref}>Ask an Analyst</a>
  </Button>

  <Button
    onClick={() => onOpenPage("maritime-intelligence")}
    className="rounded-2xl border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-6 py-3 text-base whitespace-nowrap"
  >
    Explore Services
  </Button>
</div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[600px] overflow-hidden">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/opr2.png')" }}
/>

<div className="absolute inset-0 bg-black/30" />

<div className="absolute inset-0 bg-gradient-to-r from-[#0b2234]/95 via-[#0b2234]/80 to-transparent" />
  {/* Dark gradient overlay (THIS is what makes text readable) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0b2234]/95 via-[#0b2234]/80 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl h-full flex items-center px-6 lg:px-8">
    <div className="max-w-2xl text-white">

      <div className="text-xs uppercase tracking-[0.35em] text-[#d6b25e] mb-4">
        Global Monitoring Centre
      </div>

      <h2 className="text-4xl md:text-5xl font-light leading-tight">
        24/7 oversight.<br />
        Real time insight.<br />
        Confident decisions.
      </h2>

      <p className="mt-6 text-base md:text-lg text-slate-200">
        Trident operates a 24/7 Global Monitoring Centre providing continuous oversight of vessel activity, geopolitical developments and emerging threats.
      </p>

      <div className="mt-8 space-y-3 text-slate-200 text-sm">
        <p>• 24/7 vessel tracking and alerting</p>
        <p>• Real time incident monitoring and escalation</p>
        <p>• Direct analyst support during crises</p>
        <p>• Integration with client operations</p>
      </div>

    </div>
  </div>

</section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8 border-t border-slate-300/60 mt-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-slate-900 md:text-5xl">
              Built for decision makers operating under uncertainty.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Trident operates where commercial decisions intersect with geopolitical risk, maritime exposure and legal consequence. The advisory is structured to provide clarity before commitment, movement or dispute.
            </p>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-slate-400/50">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${imageBank.ship})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2234]/60 to-transparent" />
          </div>
        </div>
      </section>

      {pillars.map((pillar) => (
        <HomeServiceSection key={pillar.id} pillar={pillar} onOpenPage={onOpenPage} />
      ))}
    </main>
  );
}

export default function TridentWebsitePreview() {
  const [activePage, setActivePage] = useState("home");
  const [requestService, setRequestService] = useState(null);

  function openPage(pageId, anchorId) {
    setActivePage(pageId);
    setRequestService(null);
    setTimeout(() => {
      if (anchorId) document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }

  function openRequest(service) {
    setRequestService(service);
    setActivePage("request");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  }

  const activePillar = pillars.find((pillar) => pillar.id === activePage);

  return (
    <div className="min-h-screen bg-[#eef3f4] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-400/50 bg-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button type="button" onClick={() => openPage("home")} className="flex items-center gap-3 text-left">
           <button type="button" onClick={() => openPage("home")} className="flex items-center gap-3 text-left">
  <img src="/logo.png" alt="Trident Risk" className="h-16 w-auto" />
</button>
          </button>
          <nav className="hidden items-center gap-5 lg:flex">
            <button type="button" onClick={() => openPage("home")} className="text-sm text-slate-800 hover:text-slate-950">Home</button>
            {pillars.map((pillar) => <NavDropdown key={pillar.id} pillar={pillar} onOpenPage={openPage} />)}
          </nav>
        </div>
      </header>
      {activePage === "request" ? (
        <RequestPage service={requestService} onBack={() => openPage("home")} />
      ) : activePillar ? (
        <PillarPage pillar={activePillar} onHome={() => openPage("home")} onRequest={openRequest} />
      ) : (
        <HomePage onOpenPage={openPage} />
      )}
    </div>
  );
}
