import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ArrowDown, ChevronRight } from "lucide-react";
import { servicesById } from "../../data/serviceIndex";
import { isServiceRouteLive, servicePath } from "../../routes/routeConfig";
import { email, emailHref } from "../../config/contact";
import { ServiceHeroImage } from "./serviceKit";

// Vessel Affiliation Assessment — dedicated benchmark service page.
//
// Built to the approved homepage / discipline visual system (dark navy / warm
// off-white, Newsreader + Inter, restrained red, square editorial geometry, thin
// rules, alternating dark/light rhythm, image-ready dark heros). This is the
// reference design for future service pages and is routed only for
// mi-vessel-affiliation-checks; every other service still renders the generic
// data-driven template.
//
// CONTENT INTEGRITY. The primary proposition here is how a vessel may be
// PERCEIVED by the relevant threat actor (e.g. Houthi / Iran operating
// environments); ownership, management, trading history, port calls, AIS and
// sanctions information are inputs to that judgement, not the end in themselves.
// This is grounded in the canonical service `insight` ("Operational exposure is
// often influenced by perception rather than legal ownership"). Where the
// canonical record is narrower than the copy on this page, the page stays
// honest: outputs are framed as typical (the canonical record formalises a
// single written assessment) and related services are the canonical set only.
// No threat criteria, probabilities, clients, statistics or scoring are invented.

// ---- Section content (approved copy, grounded in the canonical record) --------

const CHAIN = [
  { n: "01", label: "Vessel", line: "Identity, characteristics and operational profile." },
  { n: "02", label: "Affiliations", line: "Ownership, management, commercial relationships and relevant associations." },
  { n: "03", label: "Behaviour", line: "Trading history, port calls, AIS and operational patterns." },
  { n: "04", label: "Threat actor", line: "Current intent, targeting behaviour and relevant affiliation criteria." },
  { n: "05", label: "Exposure", line: "Analyst judgement on the vessel's potential relevance to that threat profile." },
];

const ASSESS = [
  { n: "01", title: "Ownership & control", body: "Registered ownership, beneficial interests, management and commercial control." },
  { n: "02", title: "Trading history", body: "Historical port calls, trading patterns and relevant commercial activity." },
  { n: "03", title: "Vessel behaviour", body: "AIS history, routing, operational behaviour and anomalies where relevant." },
  { n: "04", title: "Associated entities", body: "Relevant relationships between the vessel, owners, managers, charterers and other entities." },
  { n: "05", title: "Threat-actor profile", body: "Assessment against the affiliations, behaviours and indicators relevant to the specific threat environment." },
  { n: "06", title: "Current intelligence", body: "Contemporary reporting, maritime incidents, sanctions information, media and other corroborating sources." },
];

const METHOD = [
  { n: "01", label: "Collect", body: "AIS, shipping databases, company records, sanctions databases, satellite imagery, media reporting and social media where relevant." },
  { n: "02", label: "Assess", body: "Establish the vessel's relationships, history, behaviour and relevant associations." },
  { n: "03", label: "Compare", body: "Assess those findings against the current threat-specific affiliation and targeting profile." },
  { n: "04", label: "Advise", body: "Provide an analyst judgement, confidence assessment and practical recommendations relevant to the voyage or decision." },
];

const OUTPUTS = [
  { n: "01", title: "Vessel affiliation assessment", body: "Clear analyst assessment of relevant vessel affiliations and exposure." },
  { n: "02", title: "Affiliation matrix", body: "Structured presentation of the relationships and indicators considered." },
  { n: "03", title: "Threat-actor assessment", body: "How the identified affiliations relate to the relevant threat environment." },
  { n: "04", title: "Confidence assessment", body: "Clear indication of confidence and material intelligence gaps." },
  { n: "05", title: "Operational recommendations", body: "Practical recommendations relevant to the voyage or commercial decision." },
];

const COMMISSION = [
  "Before entering a higher-risk operating environment.",
  "Before a Strait of Hormuz, Red Sea or other threat-sensitive transit where affiliation may affect exposure.",
  "Before fixture or voyage approval.",
  "When ownership or trading history creates uncertainty.",
  "Following a material change in the threat actor's targeting profile.",
  "When an insurer, charterer, owner or manager requires vessel-specific intelligence.",
];

// ---- Small shared pieces ------------------------------------------------------

function Breadcrumbs({ discipline, service }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
          <Link to={`/${discipline.slug}`} className="transition-colors hover:text-white">
            {discipline.name}
          </Link>
        </li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
          <span className="text-white" aria-current="page">{service.title}</span>
        </li>
      </ol>
    </nav>
  );
}

// 1. Hero — dark, image-ready. Restrained dark maritime-intelligence treatment;
// no legacy imagery. A real asset can later fade in over this base.
function Hero({ discipline, service, onRequest, onScrollTo }) {
  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-image-dark" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]"
      />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-white/10" />

      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <ServiceHeroImage src="/service-vessel-affiliation.webp" alt="Aerial view of a laden container ship underway at sea" objectPosition="68% 50%" className="h-full w-full" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-image-dark via-image-dark/40 to-transparent" />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-accent/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
        <Breadcrumbs discipline={discipline} service={service} />

        <div className="grid items-center py-12 lg:min-h-[500px] lg:py-20">
          <div className="max-w-xl lg:max-w-[47%]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              Maritime Intelligence <span className="text-white/40">/</span> Vessel Affiliation
            </p>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.3rem]">
              Understand how a vessel may be perceived by the threat actor.
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/72">
              Vessel-specific intelligence assessing ownership, management, trading
              history, port calls and wider associations against the targeting
              profile relevant to the operating environment.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onRequest(service.title)}
                className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]"
              >
                Request assessment
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={() => onScrollTo("va-enquiries")}
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/70"
              >
                Speak to an analyst
              </button>
            </div>
          </div>
        </div>

        <div className="-mx-5 pb-1 lg:hidden">
          <ServiceHeroImage src="/service-vessel-affiliation.webp" alt="Aerial view of a laden container ship underway at sea" objectPosition="68% 50%" className="aspect-[16/9] w-full" />
        </div>
      </div>
    </section>
  );
}

// 2. The Question — light editorial statement.
function TheQuestion() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              The question
            </p>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              What does this vessel look like to the actor that matters?
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:pt-3">
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              A vessel's exposure cannot always be understood from its flag or
              registered owner alone.
            </p>
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              Ownership and management relationships, trading history, previous
              port calls, commercial associations and operational behaviour may
              all influence how a vessel is perceived within a specific threat
              environment.
            </p>
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              Trident brings those factors together to assess the vessel against
              the threat-specific affiliation profile relevant to the voyage or
              operation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. Assessment framework — the intelligence chain (dark).
function AssessmentFramework() {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            Assessment framework
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">
            From the vessel to its exposure.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60">
            A structured intelligence chain, not a fixed process — each stage
            informs an analyst judgement about the vessel's relevance to the
            threat profile that matters.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-stretch">
          {CHAIN.map((stage, i) => (
            <div key={stage.n} className="contents">
              <div className="flex-1 border-t border-white/15 pt-6 md:border-t-0 md:pt-0">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-light text-white/35 tabular-nums">
                    {stage.n}
                  </span>
                  <span aria-hidden="true" className="h-px w-6 bg-accent" />
                </div>
                <h3 className="mt-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                  {stage.label}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/60">
                  {stage.line}
                </p>
              </div>
              {i < CHAIN.length - 1 && (
                <div className="flex items-center justify-start py-3 text-accent md:justify-center md:px-1 md:py-0">
                  <ArrowDown className="h-4 w-4 md:hidden" strokeWidth={1.75} aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" strokeWidth={1.75} aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. What we assess — six substantial editorial blocks (capability-wall style).
function WhatWeAssess() {
  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
              <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
              What we assess
            </h2>
            <p className="mt-5 max-w-xl font-display text-[1.7rem] font-light leading-[1.14] tracking-tight text-ink sm:text-[2rem]">
              The inputs behind the judgement.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              Each strand is an input to the affiliation judgement — assembled and
              weighed together, not read in isolation. Scope is set to the vessel,
              voyage and operating concern.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {ASSESS.map((item) => (
            <div key={item.n} className="flex flex-col border-b border-r border-ink/15 bg-canvas">
              <div className="relative flex min-h-[128px] flex-col justify-between bg-image-dark p-6 lg:p-7">
                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-light text-white/35 tabular-nums">
                    {item.n}
                  </span>
                  <span aria-hidden="true" className="mt-2 h-px w-6 bg-white/20" />
                </div>
                <div>
                  <div className="h-px w-8 bg-accent" />
                  <h3 className="mt-4 font-display text-[1.3rem] font-normal leading-[1.15] tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <p className="text-sm leading-[1.6] text-ink-soft">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. From data to operational judgement — high-level public methodology (dark).
function Methodology() {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            Method
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">
            From data to operational judgement.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60">
            A high-level view of how an assessment is built. It is deliberately
            general — analytical procedure and source handling are not disclosed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:border-t-0">
          {METHOD.map((stage) => (
            <div key={stage.n} className="flex flex-col bg-image-dark pt-8 lg:px-7 lg:pt-0">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-light text-white/35 tabular-nums">
                  {stage.n}
                </span>
                <span aria-hidden="true" className="h-px w-6 bg-accent" />
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                  {stage.label}
                </h3>
              </div>
              <p className="mt-5 text-[15px] leading-7 text-white/75">{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. What you receive — decision-ready intelligence (light). Framed as typical
// outputs: the canonical record formalises a single written assessment, so the
// page does not promise a fixed multi-part format.
function WhatYouReceive() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              What you receive
            </p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              Decision-ready vessel intelligence.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-ink-soft">
              Delivered as a written affiliation and exposure assessment. Scope is
              confirmed for each engagement; a typical assessment brings together
              the following.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {OUTPUTS.map((o) => (
                <div
                  key={o.n}
                  className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-b border-ink/15 py-6"
                >
                  <span className="font-display text-sm font-light text-ink-muted tabular-nums">
                    {o.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-normal leading-snug text-ink">
                      {o.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-ink-soft">{o.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. When to commission — commercial triggers (dark). Kept dark so the page
// does not run two near-identical light sections together, and to give the
// commercial triggers weight ahead of the operational-principle statement.
function WhenToCommission() {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              When to commission
            </p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.6rem]">
              Before exposure becomes an operational problem.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/60">
              Common points at which a vessel-specific assessment is worth
              commissioning. These are indicative, not an exhaustive list.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-white/15">
              {COMMISSION.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-white/15 py-5 text-[15px] leading-7 text-white/75"
                >
                  <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 8. Operational principle — the prominent editorial statement (dark).
function OperationalPrinciple() {
  return (
    <section className="border-t border-white/10 bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className="h-px w-16 bg-accent" />
          <p className="mt-8 font-display text-[1.7rem] font-light leading-[1.22] tracking-tight sm:text-3xl lg:text-[2.5rem]">
            Affiliation assessment does not predict whether a vessel will be
            attacked.
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/70">
            It identifies whether characteristics, relationships or behaviour may
            increase or reduce the vessel's relevance to a specific threat profile
            — giving decision-makers a stronger basis for operational judgement.
          </p>
        </div>
      </div>
    </section>
  );
}

// 9. Related services — canonical related set only, capability-wall cards (light).
function RelatedServices({ service }) {
  const related = (service.relatedServiceIds || [])
    .map((id) => servicesById[id])
    .filter(Boolean);
  if (related.length === 0) return null;

  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-ink/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Related services
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((rel, i) => {
            const live = isServiceRouteLive(rel);
            const inner = (
              <>
                <div className="relative flex min-h-[128px] flex-col justify-between bg-image-dark p-6 lg:p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-light text-white/35 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="mt-2 h-px w-6 bg-white/20 transition-all duration-300 group-hover:w-9 group-hover:bg-white/40" />
                  </div>
                  <div>
                    <div className="h-px w-8 bg-accent" />
                    <h3 className="mt-4 font-display text-[1.3rem] font-normal leading-[1.15] tracking-tight text-white">
                      {rel.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <p className="text-sm leading-[1.6] text-ink-soft">{rel.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {live ? "View service" : "Enquire"}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </>
            );
            const cardClass =
              "group flex flex-col border-b border-r border-ink/15 bg-canvas transition-colors hover:bg-canvas-raised";
            return live ? (
              <Link key={rel.id} to={servicePath(rel)} aria-label={`${rel.title} — view service`} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <a key={rel.id} href={emailHref} aria-label={`${rel.title} — enquire`} className={cardClass}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 10. Enquiries — conversion (light).
function Enquiries({ service, onRequest }) {
  return (
    <section id="va-enquiries" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            Vessel Affiliation enquiries
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
            Request a vessel assessment.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
            Tell us the vessel, voyage and operating concern. We will identify the
            appropriate scope and respond directly.
          </p>

          <button
            type="button"
            onClick={() => onRequest(service.title)}
            className="mt-9 inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]"
          >
            Request assessment
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </button>

          <div className="mt-6">
            <a href={emailHref} className="text-sm text-ink-soft transition-colors hover:text-accent">
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VesselAffiliationPage({ service, discipline, onRequest }) {
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="bg-canvas text-ink">
      <Hero discipline={discipline} service={service} onRequest={onRequest} onScrollTo={scrollToId} />
      <TheQuestion />
      <AssessmentFramework />
      <WhatWeAssess />
      <Methodology />
      <WhatYouReceive />
      <WhenToCommission />
      <OperationalPrinciple />
      <RelatedServices service={service} />
      <Enquiries service={service} onRequest={onRequest} />
    </main>
  );
}
