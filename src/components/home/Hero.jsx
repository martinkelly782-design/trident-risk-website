import { ArrowRight, Crosshair } from "lucide-react";
import { Button } from "../ui/Button";
import { heroContent } from "../../data/homeContent";

const { headingLines, supporting, ctaLabel, threatBoardLabel, image, overlays } =
  heroContent;

// Approximate diagonal from the reference: image occupies the right, its left
// edge leans so more of the vessel shows toward the top-right.
const DIAGONAL_CLIP = "polygon(26% 0, 100% 0, 100% 100%, 8% 100%)";

// Subtle topographic/technical texture sitting behind the copy.
function ContourTexture() {
  const lines = Array.from({ length: 11 }, (_, i) => 30 + i * 52);
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-[#0f1b2d] opacity-[0.05]"
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
    >
      {lines.map((y) => (
        <path
          key={y}
          d={`M -40 ${y} C 160 ${y - 34}, 320 ${y + 34}, 500 ${y - 12} S 820 ${y + 32}, 1040 ${y - 22} S 1320 ${y + 22}, 1480 ${y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

// Restrained operational overlays layered over the vessel image.
function OperationalOverlays() {
  return (
    <>
      {/* Drone identification label, top-right */}
      <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85">
        {overlays.droneId}
        <Crosshair className="h-4 w-4" strokeWidth={1} />
      </div>

      {/* Coordinate readout */}
      <div className="pointer-events-none absolute right-5 top-16 border border-accent/80 px-2.5 py-1.5 text-[10px] leading-4 tracking-[0.12em] text-white/90">
        {overlays.coordinates.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Crosshair + ruler markings, lower-left of the image */}
      <div className="pointer-events-none absolute bottom-24 left-[14%] hidden xl:block">
        <Crosshair className="h-8 w-8 text-white/70" strokeWidth={0.75} />
        <div className="mt-3 h-px w-40 bg-white/40" />
        <div className="mt-1 flex w-40 justify-between text-[9px] tracking-[0.15em] text-white/60">
          <span>10</span>
          <span>10</span>
          <span>20</span>
        </div>
      </div>

      {/* Threat board link, lower-right — placeholder until the threat board exists */}
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        aria-label={`${threatBoardLabel} — coming soon`}
        className="absolute bottom-6 right-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/90 transition-colors hover:text-white"
      >
        {threatBoardLabel}
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
      </a>
    </>
  );
}

function HeroImage({ withOverlays }) {
  return (
    <>
      <img
        src={image.src}
        alt={image.alt}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-[78%_center]"
        style={{ filter: "grayscale(1) contrast(1.08) brightness(0.62)" }}
      />
      {/* Flat legibility scrim (no gradient/glass) */}
      <div className="absolute inset-0 bg-image-dark/45" />
      {withOverlays && <OperationalOverlays />}
    </>
  );
}

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <ContourTexture />

      {/* Desktop: diagonal-clipped vessel image on the right */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[66%] lg:block"
        style={{ clipPath: DIAGONAL_CLIP }}
      >
        <HeroImage withOverlays />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid items-center gap-10 py-14 lg:min-h-[600px] lg:grid-cols-2 lg:gap-0 lg:py-0">
          {/* Left copy */}
          <div className="max-w-2xl lg:py-24">
            <h1 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <div className="mt-8 h-px w-16 bg-accent" />

            <p className="mt-7 max-w-md text-sm leading-6 text-ink-soft">
              {supporting}
            </p>

            <Button
              type="button"
              onClick={onExplore}
              className="mt-9 inline-flex items-center gap-3 rounded-none bg-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#1b2c44]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
          </div>

          {/* Mobile / tablet: image stacked below the copy */}
          <div className="relative h-64 overflow-hidden sm:h-80 lg:hidden">
            <HeroImage withOverlays />
          </div>
        </div>
      </div>
    </section>
  );
}
