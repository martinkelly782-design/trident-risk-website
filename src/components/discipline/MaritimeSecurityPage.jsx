import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { heroAssetFor } from "../../config/disciplineHeroAssets";
import { latestIntelligence } from "../../data/homeContent";
import { insights } from "../../data/insights";
import { email, emailHref } from "../../config/contact";
import ServicesSignpost from "../expertise/ServicesSignpost";

// Maritime Security — the benchmark EXPERTISE page (IA correction).
//
// This page answers "what does Trident understand about maritime security?",
// not "what can I buy?". It leads with a thesis, a discipline-specific risk
// framework and the themes Trident works across — NOT a service catalogue. The
// full catalogue lives on the Services index; this page only signposts to it.
// Built on the approved dark/light editorial system, but with an editorial
// (argument-led) signature distinct from a Service page. All copy is grounded
// in the canonical Maritime Security discipline material; nothing is invented.

// The factors that shape maritime security exposure — canonical (from the
// discipline proposition). Presented as a framework, not as services.
const RISK_FACTORS = [
  { n: "01", label: "Vessel & routing", line: "Vessel characteristics and the route it must take through the area." },
  { n: "02", label: "Affiliation", line: "How the vessel and its associations may be perceived by the relevant threat actor." },
  { n: "03", label: "Cargo", line: "The nature of the cargo and what it signals in the operating environment." },
  { n: "04", label: "Regional escalation", line: "The direction and pace of escalation across the theatre." },
  { n: "05", label: "Threat-actor intent", line: "The intent and targeting behaviour of the actors that matter." },
  { n: "06", label: "Commercial constraints", line: "The commercial realities shaping what is actually possible." },
];

// The major issues Trident works across — themes, not service names.
const THEMES = [
  { n: "01", title: "Conflict & war risk", line: "State conflict, war-risk zones and escalation that change the risk to shipping in a theatre." },
  { n: "02", title: "Piracy & maritime crime", line: "Piracy, armed robbery, kidnap and other maritime crime against vessels and crews." },
  { n: "03", title: "Vessel targeting", line: "How a vessel's characteristics, affiliation and behaviour may affect its relevance to a threat actor." },
  { n: "04", title: "High-risk operations", line: "Planning and supporting voyages and operations through high-risk and contested waters." },
  { n: "05", title: "The threat environment", line: "Maintaining a current picture of the threat environment across the regions a vessel operates in." },
];

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
          <Link to="/expertise" className="transition-colors hover:text-white">Expertise</Link>
        </li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
          <span className="text-white" aria-current="page">Maritime Security</span>
        </li>
      </ol>
    </nav>
  );
}

// 1. Image-led hero (dark). Expertise CTAs — no "explore services" lead.
function Hero({ onScrollTo }) {
  const asset = heroAssetFor("maritime-security");
  const [imgReady, setImgReady] = useState(false);
  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-image-dark" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
      {asset && (
        <img
          src={asset.src}
          alt={asset.alt}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImgReady(true)}
          onError={() => setImgReady(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${imgReady ? "opacity-100" : "opacity-0"}`}
          style={{ filter: "grayscale(0.35) contrast(1.06) brightness(0.66)" }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-image-dark via-image-dark/70 to-image-dark/25" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
        <Breadcrumbs />
        <div className="grid items-center py-16 lg:min-h-[560px] lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              Expertise <span className="text-white/40">/</span> Maritime Security
            </p>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Operating through the maritime security environment.
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/72">
              Maritime security is an intelligence problem before it is an operational one. Trident helps owners, operators and insurers understand the threat, prepare the vessel and hold experienced support when conditions change.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => onScrollTo("ms-enquiries")} className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]">
                Speak to an analyst
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <button type="button" onClick={() => onScrollTo("ms-intel")} className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/70">
                Current intelligence
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. Core thesis (light) — the argument.
function Thesis() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">The thesis</p>
            <h2 className="mt-5 max-w-md font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              Security decisions are rarely made in isolation.
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:pt-3">
            <p className="max-w-2xl text-[17px] leading-8 text-ink">
              Vessel characteristics, routing, affiliation, cargo, regional escalation, threat-actor intent and commercial constraints all shape a vessel's exposure — and they move together.
            </p>
            <p className="max-w-2xl text-[15px] leading-7 text-ink-soft">
              Trident reads those factors as one picture: understanding the threat before a voyage, preparing the vessel against it, and maintaining access to experienced maritime security support when the environment changes. The aim is not to remove risk, but to make it a decision rather than a surprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. What shapes the risk (dark framework).
function RiskFramework() {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">What shapes the risk</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">
            Six factors, read together.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60">
            No single factor decides a vessel's security exposure. Trident weighs them together against the environment the vessel will actually operate in.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 lg:border-t-0">
          {RISK_FACTORS.map((f) => (
            <div key={f.n} className="flex flex-col bg-image-dark pt-8 lg:px-7 lg:pt-0">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-light text-white/35 tabular-nums">{f.n}</span>
                <span aria-hidden="true" className="h-px w-6 bg-accent" />
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">{f.label}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-white/75">{f.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. Key themes (light) — editorial rows, NOT service cards.
function KeyThemes() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl border-b border-ink/15 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Key themes</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">
            What we work across.
          </h2>
        </div>
        <div className="mt-4">
          {THEMES.map((t) => (
            <div key={t.n} className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-ink/15 py-8 md:grid-cols-[auto_1fr] md:items-baseline">
              <span className="font-display text-sm font-light text-ink-muted tabular-nums">{t.n}</span>
              <div className="max-w-3xl">
                <h3 className="font-display text-2xl font-normal leading-snug text-ink sm:text-[1.7rem]">{t.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-soft">{t.line}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Trident perspective (dark) — the operational principle, given prominence.
function Perspective() {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Trident perspective</p>
          <p className="mt-8 font-display text-[1.7rem] font-light leading-[1.22] tracking-tight sm:text-3xl lg:text-[2.5rem]">
            Effective maritime security supports the Master's decision-making; it does not attempt to replace it.
          </p>
        </div>
      </div>
    </section>
  );
}

// 6. Current intelligence (light) — genuine, timestamped, links to the feed.
function CurrentIntelligence() {
  const items = latestIntelligence.filter((i) => i.category === "Maritime Security");
  if (items.length === 0) return null;
  return (
    <section id="ms-intel" className="scroll-mt-20 bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-ink/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Current intelligence
          </h2>
          <Link to="/intelligence" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            View the intelligence feed
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="mt-2">
          {items.map((item) => (
            <div key={item.title} className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-ink/15 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline">
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted tabular-nums whitespace-nowrap">
                {item.date} <span className="text-ink-muted/50">·</span> {item.time}
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{item.category}</p>
                <h3 className="mt-1 max-w-3xl font-display text-xl font-normal leading-snug text-ink">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Latest insights (light) — genuine authored analysis.
function LatestInsights() {
  const item = insights[0];
  if (!item) return null;
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="border-b border-ink/15 pb-5">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Latest insights
          </h2>
        </div>
        <Link to={item.path} className="group mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              {item.category} <span className="text-ink-muted">· {item.dateLabel}</span>
            </p>
            <h3 className="mt-3 max-w-xl font-display text-2xl font-normal leading-tight text-ink sm:text-[1.9rem]">{item.title}</h3>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">{item.standfirst}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Read the briefing
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-image-dark md:aspect-[5/4]">
            <img src={item.image} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{ filter: "grayscale(0.35) brightness(0.7) contrast(1.05)" }} />
          </div>
        </Link>
      </div>
    </section>
  );
}

// 9. Speak to an analyst (light) — conversion.
function Enquiries() {
  return (
    <section id="ms-enquiries" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Maritime Security enquiries</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">Speak to an analyst.</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
            Tell us about the vessel, voyage or operational concern. We will identify the appropriate level of maritime security support and respond directly.
          </p>
          <a href={emailHref} className="mt-9 inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]">
            Contact Trident
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <div className="mt-6">
            <a href={emailHref} className="text-sm text-ink-soft transition-colors hover:text-accent">{email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MaritimeSecurityPage({ discipline, services }) {
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <main className="bg-canvas text-ink">
      <Hero onScrollTo={scrollToId} />
      <Thesis />
      <RiskFramework />
      <KeyThemes />
      <Perspective />
      <CurrentIntelligence />
      <LatestInsights />
      <ServicesSignpost discipline={discipline} count={services.length} />
      <Enquiries />
    </main>
  );
}
