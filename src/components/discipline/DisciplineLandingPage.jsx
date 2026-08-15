import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { latestIntelligence } from "../../data/homeContent";
import { email, emailHref } from "../../config/contact";
import DisciplineHeroBand from "./DisciplineHeroBand";
import ServicesSignpost from "../expertise/ServicesSignpost";

// Data-driven discipline landing page, built to the Maritime Security benchmark.
// Same visual system as the homepage: dark navy / warm off-white, Newsreader +
// Inter, restrained red, square editorial geometry, thin rules, strong
// light/dark rhythm. Content is supplied per discipline; service directories and
// related analysis resolve from the canonical data model. Gold is used only where
// a discipline opts in (Legal & Evidence) and only as a restrained micro-accent.
//
// The hero (restrained dark editorial treatment + pending named asset) and the
// services capability wall are shared with the Maritime Security page so all six
// disciplines carry an identical system.

const LG_COLS = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3" };

// 2. Proposition (light)
function Proposition({ discipline, content }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {discipline.name}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              {content.proposition.heading}
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:pt-3">
            {content.proposition.paragraphs.map((p, i) => (
              <p key={i} className="max-w-xl text-[15px] leading-7 text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. How the discipline supports decisions (dark)
function SupportModel({ content }) {
  const { support } = content;
  const cols = LG_COLS[support.stages.length] || "lg:grid-cols-3";
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {support.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">
            {support.heading}
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60">{support.intro}</p>
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 lg:border-t-0 ${cols}`}>
          {support.stages.map((stage) => (
            <div key={stage.number} className="flex flex-col bg-image-dark pt-8 lg:px-8 lg:pt-0">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-light text-white/35 tabular-nums">
                  {stage.number}
                </span>
                <span aria-hidden="true" className="h-px w-6 bg-accent" />
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                  {stage.label}
                </h3>
              </div>
              <p className="mt-5 text-[15px] leading-7 text-white/80">{stage.lead}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/12 pt-6">
                {stage.examples.map((example) => (
                  <li key={example} className="flex gap-3 text-sm leading-6 text-white/60">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent/70" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Operational insight (light) — gold rule only where the discipline opts in
function OperationalInsight({ content }) {
  const rule = content.gold ? "bg-gold" : "bg-accent";
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <div className={`h-px w-16 ${rule}`} />
          <p className="mt-8 font-display text-2xl font-light leading-[1.25] tracking-tight text-ink sm:text-3xl lg:text-[2.4rem]">
            {content.insight}
          </p>
        </div>
      </div>
    </section>
  );
}

// 6. Related intelligence / analysis (dark) — genuine content only
function RelatedIntelligence({ content }) {
  const resolved = (content.related || [])
    .map((item) => {
      if (item.type === "intel") {
        const intel = latestIntelligence.find((i) => i.category === item.category);
        return intel ? { kind: "intel", intel } : null;
      }
      return { kind: "analysis", ...item };
    })
    .filter(Boolean);

  if (resolved.length === 0) return null;
  const gridCols = resolved.length >= 2 ? "md:grid-cols-2" : "grid-cols-1";

  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-5">
          <h2 className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
            <span aria-hidden="true" className="h-3 w-[3px] bg-accent" />
            Related intelligence &amp; analysis
          </h2>
        </div>

        <div className={`mt-8 grid grid-cols-1 gap-px bg-white/10 ${gridCols}`}>
          {resolved.map((item, i) =>
            item.kind === "analysis" ? (
              <Link
                key={`a-${i}`}
                to={item.to}
                className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-image-dark p-8"
              >
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ filter: "grayscale(0.4) brightness(0.4) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-image-dark via-image-dark/70 to-image-dark/20" />
                <div className="relative">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.label}
                  </span>
                  <h3 className="mt-3 max-w-md font-display text-2xl font-normal leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors group-hover:text-accent">
                    Read briefing
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </span>
                </div>
              </Link>
            ) : (
              <article
                key={`i-${i}`}
                className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-image-dark p-8"
              >
                <img
                  src={item.intel.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "grayscale(0.4) brightness(0.4) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-image-dark via-image-dark/70 to-image-dark/20" />
                <div className="relative">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.intel.category} intelligence
                  </span>
                  <h3 className="mt-3 max-w-md font-display text-2xl font-normal leading-tight">
                    {item.intel.title}
                  </h3>
                  <div className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 tabular-nums">
                    {item.intel.date} <span className="text-white/25">·</span> {item.intel.time}
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

// 7. Speak to an analyst (light) — conversion
function Enquiries({ content }) {
  return (
    <section id="enquiries" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {content.enquiries.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
            Speak to an analyst.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
            {content.enquiries.supporting}
          </p>

          <a
            href={emailHref}
            className="mt-9 inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]"
          >
            Contact Trident
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>

          <div className="mt-6">
            <a
              href={emailHref}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DisciplineLandingPage({ discipline, services, content }) {
  const gold = Boolean(content.gold);

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="bg-canvas text-ink">
      <DisciplineHeroBand
        disciplineId={discipline.id}
        breadcrumbName={discipline.name}
        eyebrow={discipline.name}
        h1={content.hero.h1}
        supporting={content.hero.supporting}
        gold={gold}
        onExplore={() => scrollToId("services")}
        onEnquire={() => scrollToId("enquiries")}
      />
      <Proposition discipline={discipline} content={content} />
      <SupportModel content={content} />
      <OperationalInsight content={content} />
      <RelatedIntelligence content={content} />
      <ServicesSignpost discipline={discipline} count={services.length} gold={gold} />
      <Enquiries content={content} />
    </main>
  );
}
