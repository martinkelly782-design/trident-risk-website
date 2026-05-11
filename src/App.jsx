import React, { useState } from "react";

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
  vessel:
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=85",
  ship:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85",
  cyber:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  map:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  buildings:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  legal:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85",
  port:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=85",
};

const pillars = [
  {
    id: "maritime-intelligence",
    title: "Maritime Intelligence",
    intro:
      "Maritime intelligence services are used to understand vessel exposure, ownership risk, sanctions linkage and behavioural indicators before commercial or operational decisions are made.",
    hero: imageBank.vessel,
    services: [
      [
        "Vessel Affiliation Check",
        imageBank.vessel,
        "A structured review of ownership, management, beneficial control and trading behaviour to determine whether a vessel aligns with known targeting profiles or politically sensitive exposure. Used before chartering, insurance placement or transit through high risk regions.",
      ],
      [
        "Sanctions Exposure Analysis",
        imageBank.port,
        "Assessment of vessel, ownership, cargo, routing and counterparties against sanctions regimes and enforcement trends. Supports pre fixture checks, compliance validation and avoidance of regulatory or reputational exposure.",
      ],
      [
        "Counterparty Risk Intelligence",
        imageBank.buildings,
        "Due diligence on counterparties, ownership structures, operating history and reputational exposure before engagement. Used to identify hidden links, politically exposed interests or adverse reporting.",
      ],
      [
        "Port Call Risk History Analysis",
        imageBank.port,
        "Review of recent and historic port calls to identify exposure to sanctioned jurisdictions, conflict areas, high risk ports or politically sensitive trading patterns.",
      ],
      [
        "Dark Activity and AIS Manipulation Analysis",
        imageBank.map,
        "Assessment of AIS gaps, spoofing, routing anomalies and suspicious behaviour, including ship to ship transfer indicators. Used to identify sanctions evasion, grey fleet activity and deliberate concealment.",
      ],
      [
        "Flag and Registry Risk Profiling",
        imageBank.ship,
        "Assessment of flag state, registry history, ownership jurisdiction and compliance exposure where identity, flag changes or registry selection may affect risk perception.",
      ],
      [
        "Pre Charter Risk Intelligence Reports",
        imageBank.vessel,
        "Client ready reporting before fixture or voyage approval, combining vessel profile, route risk, ownership exposure and commercial sensitivity.",
      ],
    ],
  },
  {
    id: "maritime-security",
    title: "Maritime Security",
    intro:
      "Maritime security services provide practical, operationally grounded support to reduce risk to vessels, crews and assets operating in high threat or unstable environments.",
    hero: imageBank.ship,
    services: [
      [
        "Port Vulnerability Assessment",
        imageBank.port,
        "Detailed assessment of port security posture, access control, waterside exposure, local criminality, protest potential, ISPS implementation and resilience. Used to determine whether a port call is acceptable or requires mitigation.",
      ],
      [
        "Voyage Vulnerability Assessment",
        imageBank.ship,
        "Comprehensive voyage assessment combining vessel characteristics, route, cargo, ownership, recent trading patterns, threat environment and escalation indicators. Supports go or no go decisions, routing and insurance submissions.",
      ],
      [
        "High Risk Area Transit Planning",
        imageBank.map,
        "Planning support for vessels entering high risk maritime corridors, including route selection, reporting requirements, watchkeeping, communications, citadel considerations and escalation triggers.",
      ],
      [
        "Embarked Security Coordination",
        imageBank.ship,
        "Coordination of armed or unarmed embarked security arrangements, including provider selection, embarkation planning, rules of conduct, guard force oversight and reporting expectations.",
      ],
      [
        "Stowaway Risk Mitigation",
        imageBank.port,
        "Port and vessel level measures to reduce stowaway exposure, including search planning, access control, deck checks, machinery space checks and gangway discipline.",
      ],
      [
        "Offshore Asset Protection",
        imageBank.ship,
        "Security advisory for offshore vessels, rigs, platforms, survey activity and energy infrastructure operating in exposed or politically sensitive waters.",
      ],
      [
        "Crisis Response and Incident Management",
        imageBank.map,
        "Support during boardings, detention, attack, port closure, civil unrest, crew welfare incidents or rapid regional escalation affecting maritime operations.",
      ],
    ],
  },
  {
    id: "maritime-cyber",
    title: "Maritime Cyber",
    intro:
      "Maritime cyber services address real world vulnerabilities in navigation, tracking and onboard systems where digital disruption can directly impact operational safety.",
    hero: imageBank.cyber,
    services: [
      [
        "AIS Alternatives",
        imageBank.map,
        "Alternative tracking and monitoring solutions where AIS is unreliable, manipulated, degraded or unavailable. Used when standard maritime tracking cannot be treated as reliable.",
      ],
      [
        "GNSS Interference Advisory",
        imageBank.map,
        "Analysis of jamming, spoofing and navigation interference affecting vessel positioning and bridge decision making. Supports routing, reporting and practical navigation precautions.",
      ],
      [
        "Vessel Network Penetration Testing",
        imageBank.cyber,
        "Controlled testing of vessel or maritime company network exposure to identify vulnerabilities affecting operations, data integrity, communications or safety critical systems.",
      ],
      [
        "Cyber Threat Monitoring",
        imageBank.cyber,
        "Monitoring of maritime relevant cyber threat reporting, hostile actor activity, data exposure and attacks against shipping, port or logistics infrastructure.",
      ],
      [
        "Crew Cyber Awareness Training",
        imageBank.cyber,
        "Practical training covering phishing, device handling, onboard digital hygiene, removable media, communications discipline and escalation procedures.",
      ],
      [
        "Incident Response Advisory",
        imageBank.cyber,
        "Advisory support during cyber disruption, suspected compromise, navigation anomalies, data exposure or operational system interruption.",
      ],
    ],
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
      "Trident’s legal and expert witness capability is delivered by a former Royal Navy specialist and government advisor, with deep regional expertise across the Middle East and high risk maritime theatres. The service supports counsel and insurers with clear, defensible opinion grounded in real world operational context.",
    hero: imageBank.legal,
    services: [
      [
        "Expert Witness",
        imageBank.legal,
        "Independent expert opinion grounded in operational maritime experience, supporting proceedings involving war risk, vessel exposure and security decision making.",
      ],
      [
        "Charterparty Dispute Support",
        imageBank.ship,
        "Support in disputes involving voyage risk, routing decisions, war risk clauses, port safety, deviation, delay and exposure to armed threat.",
      ],
      [
        "War Risk and Real Danger Assessments",
        imageBank.map,
        "Structured assessment of whether a vessel, voyage, port or operating area faced a credible risk threshold at a material time.",
      ],
      [
        "P and I Claim Support",
        imageBank.buildings,
        "Analysis supporting P and I, hull and machinery, war risk, kidnap and ransom or business interruption claims linked to maritime security events.",
      ],
      [
        "Standard of Care Analysis",
        imageBank.legal,
        "Assessment of whether actions taken before, during or after an incident aligned with accepted maritime security practice and reasonable precautions.",
      ],
      [
        "Court and Arbitration Support",
        imageBank.legal,
        "Preparation of expert reports, technical notes, counsel briefings and evidential material for court or arbitration proceedings.",
      ],
      [
        "Joint Expert Meetings",
        imageBank.legal,
        "Support for joint expert discussions, issue narrowing, agreed statements and professional engagement with opposing experts.",
      ],
      [
        "Oral Evidence Preparation",
        imageBank.legal,
        "Preparation for oral evidence, cross examination, technical explanation and clear presentation of complex maritime risk matters.",
      ],
    ],
  },
];

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <button
          type="button"
          onClick={onHome}
          className="text-left text-xl font-semibold tracking-tight text-slate-950"
        >
          TRIDENT
          <span className="block text-xs font-normal uppercase tracking-[0.3em] text-[#9b7a2f]">
            Risk and Advisory
          </span>
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
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pillar.hero})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Button
            type="button"
            onClick={onHome}
            className="mb-8 rounded-2xl bg-white/90 px-5 py-3 text-slate-900 hover:bg-white"
          >
            Back to Home
          </Button>

          <Badge className="mb-6 inline-block rounded-full border border-white/30 bg-white/15 px-4 py-1 text-white backdrop-blur-sm">
            {pillar.title}
          </Badge>

          <h1 className="text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
            {pillar.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">
            {pillar.intro}
          </p>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs uppercase tracking-[0.35em] text-[#9b7a2f]">
              Services
            </div>
            <h2 className="text-3xl font-light tracking-tight text-slate-950 md:text-5xl">
              Explore {pillar.title}
            </h2>
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              {pillar.intro}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {pillar.services.map((service) => (
              <ServiceCard
                key={service[0]}
                service={service}
                pillarId={pillar.id}
                onRequest={onRequest}
              />
            ))}
          </div>
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
                  <input
                    className="rounded-2xl border border-slate-300 bg-white p-4"
                    placeholder="Name"
                  />
                  <input
                    className="rounded-2xl border border-slate-300 bg-white p-4"
                    placeholder="Company"
                  />
                  <input
                    className="rounded-2xl border border-slate-300 bg-white p-4"
                    placeholder="Email"
                  />
                  <input
                    className="rounded-2xl border border-slate-300 bg-white p-4"
                    value={service || ""}
                    readOnly
                  />
                  <select
                    className="rounded-2xl border border-slate-300 bg-white p-4 text-slate-700"
                    defaultValue=""
                  >
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

function HomeServiceSection({ pillar, onOpenPage }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pillar.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/82 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl text-white">
            <div className="text-xs uppercase tracking-[0.35em] text-[#d6b25e]">
              Service Type
            </div>

            <h2 className="mt-3 text-3xl font-light tracking-tight md:text-5xl">
              {pillar.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
              {pillar.intro}
            </p>
          </div>

          <Button
            type="button"
            onClick={() => onOpenPage(pillar.id)}
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200"
          >
            View {pillar.title}
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillar.services.map((service) => (
            <button
              key={service[0]}
              type="button"
              onClick={() =>
                onOpenPage(pillar.id, `${pillar.id}-${slugify(service[0])}`)
              }
              className="rounded-2xl border border-white/20 bg-white/90 px-5 py-5 text-left shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              <div className="text-lg font-semibold leading-snug text-slate-950">
                {service[0]}
              </div>

              <p className="mt-4 line-clamp-3 text-sm font-normal leading-6 text-slate-600">
                {service[2]}
              </p>
            </button>
          ))}
        </div>
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

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
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
              [
                "24/7 Vessel Tracking",
                "Continuous monitoring of global vessel movements, routing and behavioural indicators.",
              ],
              [
                "Real Time Incident Monitoring",
                "Live monitoring of geopolitical escalation, maritime incidents and emerging threats.",
              ],
              [
                "Direct Analyst Support",
                "Immediate access to experienced analysts during operational or crisis situations.",
              ],
              [
                "Crisis Response Capability",
                "Support during rapidly evolving incidents affecting vessels, personnel or operations.",
              ],
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

      <section id="home-services">
        {pillars.map((pillar) => (
          <HomeServiceSection
            key={pillar.id}
            pillar={pillar}
            onOpenPage={onOpenPage}
          />
        ))}
      </section>
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

      <footer className="bg-[#111827] px-6 py-12 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight">TRIDENT</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#d6b25e]">
              Risk and Advisory
            </div>
          </div>

          <a
            href={emailHref}
            className="text-sm text-slate-300 hover:text-white"
          >
            {email}
          </a>
        </div>
      </footer>
    </div>
  );
}
