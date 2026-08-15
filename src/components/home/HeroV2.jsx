import { ArrowRight } from "lucide-react";
import { heroV2 } from "../../data/homeContent";
import { email, emailHref } from "../../config/contact";

const { eyebrow, headingLines, supporting, primaryCta, secondaryCta, image, arc } =
  heroV2;

// Section 2 — dark hero. Full-bleed vessel image on the right; the copy states
// plainly what Trident is. No invented statistics: the reference's numeric
// stat rail is replaced by the three non-numeric "arc" capability markers.
export default function HeroV2({ onScrollTo }) {
  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      {/* Vessel image, right half, bleeding to the edge */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <img
          src={image.src}
          alt={image.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[92%_center]"
          style={{ filter: "grayscale(0.55) contrast(1.08) brightness(0.62)" }}
        />
        {/* Left-to-right scrim so the copy stays legible over the image seam */}
        <div className="absolute inset-0 bg-gradient-to-r from-image-dark via-image-dark/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid items-center gap-10 py-16 lg:min-h-[620px] lg:grid-cols-12 lg:gap-0 lg:py-0">
          {/* Left copy */}
          <div className="lg:col-span-7 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>

            <h1 className="mt-6 font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/70">
              {supporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onScrollTo?.(primaryCta.target)}
                className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>

              <a
                href={emailHref}
                aria-label={`${secondaryCta.label} — ${email}`}
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/70"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Right rail: the three-point Trident arc (non-numeric) */}
          <div className="lg:col-span-5 lg:py-24 lg:pl-12">
            <ul className="flex flex-col gap-6 lg:items-end">
              {arc.map((item, index) => (
                <li
                  key={item.label}
                  className="flex items-baseline gap-4 lg:flex-row-reverse lg:text-right"
                >
                  <span className="font-display text-2xl font-light text-white/40 tabular-nums">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-display text-xl font-normal text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/50">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile: image stacked below copy */}
      <div className="relative h-56 overflow-hidden sm:h-72 lg:hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover object-[60%_center]"
          style={{ filter: "grayscale(0.55) contrast(1.08) brightness(0.6)" }}
        />
        <div className="absolute inset-0 bg-image-dark/40" />
      </div>
    </section>
  );
}
