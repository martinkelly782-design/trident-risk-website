import { Link } from "react-router-dom";
import { ArrowUpRight, Ship, ShieldCheck, Lock, Globe2, TrendingUp, Scale } from "lucide-react";
import { disciplinesById } from "../../data/disciplines";
import { disciplineRoutePath } from "../../routes/routeConfig";
import { whatWeDoIntro, whatWeDoCapabilities } from "../../data/homeContent";

const ICONS = {
  "maritime-intelligence": Ship,
  "maritime-security": ShieldCheck,
  "maritime-cyber": Lock,
  "geopolitical-analysis": Globe2,
  "market-entry": TrendingUp,
  "legal-evidence": Scale,
};

// Section 3 — What We Do. The six disciplines rendered as substantial vertical
// capability panels separated by strong rules, not small navigation links. Sits
// between the dark cinematic hero and the dark Current Intelligence band as the
// clear, confident explanation of what Trident does.
export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        {/* Intro: eyebrow + heading (left), supporting paragraph (right) */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {whatWeDoIntro.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.6rem]">
              {whatWeDoIntro.heading}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-xl text-[15px] leading-7 text-ink-soft">
              {whatWeDoIntro.supporting}
            </p>
          </div>
        </div>

        {/* Six substantial editorial capability blocks. Each has a dark navy
            top band (icon + discipline name in white) over a light body area —
            closer to sections in a premium annual report than feature cards.
            Desktop 6-up, tablet 3x2, mobile 1-up. */}
        <div className="mt-10 grid grid-cols-1 gap-px bg-ink/15 sm:grid-cols-3 xl:grid-cols-6">
          {whatWeDoCapabilities.map((capability, index) => {
            const discipline = disciplinesById[capability.id];
            if (!discipline) return null;
            const Icon = ICONS[capability.id] ?? Ship;
            const isLegalEvidence = capability.id === "legal-evidence";
            const accent = isLegalEvidence ? "text-gold" : "text-accent";
            return (
              <Link
                key={capability.id}
                to={disciplineRoutePath(capability.id)}
                aria-label={`${discipline.name} — ${capability.summary}`}
                className="group flex flex-col bg-canvas"
              >
                {/* Dark navy header band */}
                <div className="relative flex min-h-[168px] flex-col justify-between bg-image-dark p-6">
                  {/* Index + restrained line icon */}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-light text-white/35 tabular-nums">
                      0{index + 1}
                    </span>
                    <Icon
                      className={`h-8 w-8 ${isLegalEvidence ? "text-gold" : "text-accent"}`}
                      strokeWidth={1}
                    />
                  </div>
                  {/* Accent keyline + discipline name in white */}
                  <div>
                    <div className={`h-px w-8 ${isLegalEvidence ? "bg-gold" : "bg-accent"}`} />
                    <h3 className="mt-4 font-display text-[1.6rem] font-normal leading-[1.1] tracking-tight text-white">
                      {discipline.name}
                    </h3>
                  </div>
                </div>

                {/* Light body area */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-6 text-ink-soft">
                    {capability.summary}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${accent}`}
                  >
                    Explore
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
