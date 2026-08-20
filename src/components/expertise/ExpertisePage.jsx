import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getIntelligenceForExpertise } from "../../data/intelligence";
import { insightsById } from "../../data/insights";
import { expertiseContent } from "../../data/expertiseContent";
import { expertiseVisuals } from "../../data/expertiseVisuals";
import { email, emailHref } from "../../config/contact";
import ExpertiseHero from "./ExpertiseHero";
import { AnalyticalFramework, SignatureVisual, MapPlaceholder } from "./ExpertiseVisuals";
import TransitSupportSignpost from "../service/TransitSupportSignpost";

// Generic, data-driven EXPERTISE page (IA correction + visual-depth pass).
//
// One template drives all six areas: split image hero → thesis → analytical
// framework (factors resolving into a synthesis node) → key themes → an optional
// signature diagram (chain / relationship) and map-ready area → restrained
// mid-page CTA → perspective → relevant intelligence/insights → compact services
// signpost → enquiry. No service wall; the analytical visuals give the page the
// feel of an intelligence report rather than a bare typeset site.

// 2. Thesis — improved editorial relationship: emphasised lead, accent rule,
// a dividing rule between claim and explanation. Not more copy.
function Thesis({ c }) {
  const rule = c.gold ? "bg-gold" : "bg-accent";
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${c.gold ? "text-gold" : "text-accent"}`}>The thesis</p>
            <h2 className="mt-5 max-w-md font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              {c.thesis.heading}
            </h2>
            <div className={`mt-7 h-px w-16 ${rule}`} />
          </div>
          <div className="lg:col-span-7 lg:border-l lg:border-ink/12 lg:pl-12 lg:pt-1">
            <p className="max-w-2xl font-display text-[1.4rem] font-light leading-[1.4] tracking-tight text-ink sm:text-[1.6rem]">
              {c.thesis.lead}
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-soft">{c.thesis.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyThemes({ c }) {
  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl border-b border-ink/15 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Key themes</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">What we work across.</h2>
        </div>
        <div className="mt-4">
          {c.themes.items.map((t) => (
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

function MidCta({ c }) {
  const accentText = c.gold ? "text-gold" : "text-accent";
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-4 border-y border-ink/12 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-xl font-light leading-snug text-ink sm:text-2xl">{c.midCta.prompt}</p>
          <Link to="/contact" className={`group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentText}`}>
            {c.midCta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Perspective({ c }) {
  const rule = c.gold ? "bg-gold" : "bg-accent";
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className={`h-px w-16 ${rule}`} />
          <p className="mt-8 font-display text-[1.7rem] font-light leading-[1.22] tracking-tight sm:text-3xl lg:text-[2.5rem]">
            {c.perspective.statement}
          </p>
        </div>
      </div>
    </section>
  );
}

function CurrentIntelligence({ discipline }) {
  // Published records related to this expertise area, from the public model.
  // Renders nothing until genuine records exist (no stale fixtures shown here).
  const items = getIntelligenceForExpertise(discipline.id);
  if (items.length === 0) return null;
  const fmt = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime())
      ? ""
      : d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
  };
  return (
    <section id="intel" className="scroll-mt-20 bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-ink/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Related intelligence
          </h2>
          <Link to="/intelligence" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            View the intelligence feed
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="mt-2">
          {items.map((item) => (
            <Link key={item.id} to={`/intelligence/${item.slug}`} className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-ink/15 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline">
              <div className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                {fmt(item.publishedAt)}
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">{item.category}</p>
                <h3 className="mt-1 max-w-3xl font-display text-xl font-normal leading-snug text-ink transition-colors group-hover:text-accent">{item.headline}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestInsights({ c }) {
  const item = c.insightSlug ? insightsById[c.insightSlug] : null;
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

function Enquiries({ c }) {
  const primaryBg = c.gold ? "bg-gold hover:bg-[#a07a33]" : "bg-accent hover:bg-[#a83d26]";
  return (
    <section id="enquiries" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${c.gold ? "text-gold" : "text-accent"}`}>{c.enquiries.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">{c.enquiries.heading}</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">{c.enquiries.supporting}</p>
          <a href={emailHref} className={`mt-9 inline-flex items-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors ${primaryBg}`}>
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

export default function ExpertisePage({ discipline, services }) {
  const c = expertiseContent[discipline.id];
  const v = expertiseVisuals[discipline.id] || {};
  if (!c) return null;

  return (
    <main className="bg-canvas text-ink">
      <ExpertiseHero discipline={discipline} c={c} objectPosition={v.heroObjectPosition} />
      <Thesis c={c} />
      <AnalyticalFramework {...c.framework} converge={v.converge} gold={c.gold} />
      <KeyThemes c={c} />
      {/* Owner requirement: surface Red Sea / Strait of Hormuz transit support on
          the Maritime Security expertise page (additive; not a redesign). */}
      {discipline.id === "maritime-security" && <TransitSupportSignpost />}
      <SignatureVisual signature={v.signature} />
      {v.map && <MapPlaceholder caption={v.map.caption} />}
      <MidCta c={c} />
      <Perspective c={c} />
      <CurrentIntelligence discipline={discipline} />
      <LatestInsights c={c} />
      <Enquiries c={c} />
    </main>
  );
}
