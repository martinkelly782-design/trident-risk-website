import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { expertiseIntro, expertiseAreas } from "../data/expertise";

// Expertise index (/expertise) — introduces Trident's six areas of expertise as
// fields of understanding, not as a catalogue. Deliberately editorial and
// distinct from the homepage "What We Do" tile grid: a dark thesis hero over a
// numbered editorial roll of the six areas, each following the Trident arc.

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
              <span className="text-white" aria-current="page">Expertise</span>
            </li>
          </ol>
        </nav>
        <div className="grid items-center py-16 lg:min-h-[420px] lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{expertiseIntro.eyebrow}</p>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {expertiseIntro.heading}
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/72">{expertiseIntro.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ExpertiseIndex() {
  return (
    <main className="bg-canvas text-ink">
      <Hero />
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8 lg:py-10">
          {expertiseAreas.map((area, i) => {
            const accentText = area.gold ? "text-gold" : "text-accent";
            const accentBar = area.gold ? "bg-gold" : "bg-accent";
            return (
              <Link
                key={area.id}
                to={area.to}
                className="group grid grid-cols-1 gap-x-10 gap-y-4 border-b border-ink/15 py-10 lg:grid-cols-12 lg:gap-x-12 lg:py-12"
              >
                <div className="flex items-center gap-4 lg:col-span-4">
                  <span className="font-display text-lg font-light text-ink-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${accentText}`}>{area.arc}</span>
                    <h2 className="mt-1 font-display text-[1.8rem] font-normal leading-[1.08] tracking-tight text-ink transition-colors group-hover:text-accent sm:text-[2.1rem]">
                      {area.name}
                    </h2>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:pt-2">
                  <p className="max-w-xl text-[15px] leading-7 text-ink-soft">{area.thesis}</p>
                </div>
                <div className="lg:col-span-2 lg:pt-3 lg:text-right">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${accentText}`}>
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  </span>
                </div>
                <div aria-hidden="true" className={`h-px w-0 transition-all duration-500 group-hover:w-16 ${accentBar} lg:col-span-12`} />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
