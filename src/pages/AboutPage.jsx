import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { siteConfig } from "../data/site";
import { approachContent } from "../data/homeContent";
import { emailHref } from "../config/contact";

// About (/about) — institutional credibility. Built only from approved material
// already in the project: the site description and differentiator, the approved
// "arc" (approachContent), the canonical client types, and the Legal & Evidence
// independence principle. No invented employee/office/client counts, deployment
// statistics, awards or partnerships.

const CLIENT_TYPES = approachContent.enquiries.clientTypes.split(" · ");

function Hero() {
  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
            <li className="flex items-center gap-x-2">
              <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-white" aria-current="page">About</span>
            </li>
          </ol>
        </nav>
        <div className="grid items-center py-16 lg:min-h-[440px] lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">About Trident</p>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              A specialist maritime intelligence and risk advisory business.
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/72">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-canvas text-ink">
      <Hero />

      {/* What Trident is */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">What we are</p>
              <h2 className="mt-5 max-w-md font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">
                Maritime-focused, intelligence-led.
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-7 lg:pt-3">
              <p className="max-w-2xl text-[17px] leading-8 text-ink">
                {siteConfig.differentiator}
              </p>
              <p className="max-w-2xl text-[15px] leading-7 text-ink-soft">
                Trident works for owners, operators, insurers and legal teams operating in complex and high-risk environments — bringing operational maritime experience to decisions that carry commercial, safety and legal consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The arc (dark) */}
      <section className="bg-image-dark text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{approachContent.eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">
              {approachContent.heading}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/60">{approachContent.body}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 lg:grid-cols-3 lg:border-t-0">
            {approachContent.stages.map((stage) => (
              <div key={stage.number} className="flex flex-col bg-image-dark pt-8 lg:px-8 lg:pt-0">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-light text-white/35 tabular-nums">{stage.number}</span>
                  <span aria-hidden="true" className="h-px w-6 bg-accent" />
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">{stage.label}</h3>
                </div>
                <p className="mt-5 text-[15px] leading-7 text-white/80">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independence & standards */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="h-px w-16 bg-gold" />
            <p className="mt-8 font-display text-2xl font-light leading-[1.25] tracking-tight text-ink sm:text-3xl lg:text-[2.3rem]">
              When Trident acts as an expert, its responsibility is to assist the tribunal, not the instructing party.
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink-soft">
              That independence runs through the work: analysis and opinion are written to be tested, whether they support a commercial decision before an operation or an evidential position when that decision is later examined. Trident provides expert and technical opinion and operational analysis — not legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-canvas-raised">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Who we work with</p>
          <div className="mt-8 grid grid-cols-2 gap-px border-l border-t border-ink/15 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENT_TYPES.map((c) => (
              <div key={c} className="border-b border-r border-ink/15 bg-canvas p-6">
                <p className="text-sm font-medium leading-6 text-ink">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              Speak to Trident.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
              Tell us what you are dealing with. We will identify the appropriate support and respond directly.
            </p>
            <Link to="/contact" className="mt-9 inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]">
              Contact Trident
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
