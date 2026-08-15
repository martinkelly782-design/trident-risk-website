import { ArrowRight, Ship, ShieldCheck, Radar, Globe2, TrendingUp, Scale } from "lucide-react";

const ICONS = {
  ship: Ship,
  shield: ShieldCheck,
  radar: Radar,
  globe: Globe2,
  market: TrendingUp,
  scale: Scale,
};

// One tall, image-led discipline panel. Presentational; navigation is delegated
// to `onExplore(pillarId)` so the existing pillar routes keep working.
export default function DisciplinePanel({ discipline, onExplore }) {
  const { pillarId, name, title, description, image, alt, icon } = discipline;
  const Icon = ICONS[icon] ?? Ship;
  // Gold is reserved for the Legal & Evidence discipline as a subtle premium
  // evidential accent; every other panel keeps the neutral icon treatment.
  const isLegalEvidence = pillarId === "legal";

  return (
    <button
      type="button"
      onClick={() => onExplore(pillarId)}
      className="group relative flex min-h-[420px] w-full flex-col justify-between overflow-hidden bg-image-dark p-6 text-left"
    >
      {/* Dark maritime image treatment */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ filter: "grayscale(0.4) brightness(0.5) contrast(1.05)" }}
      />
      {/* Bottom-weighted legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-image-dark via-image-dark/65 to-image-dark/35" />

      {/* Line icon near the top */}
      <Icon
        className={`relative h-6 w-6 ${isLegalEvidence ? "text-gold" : "text-white/85"}`}
        strokeWidth={1.25}
      />

      {/* Lower block: discipline name (primary heading) → value proposition → description → explore */}
      <div className="relative">
        <h3 className="font-display text-2xl font-normal leading-tight text-white">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/75">
          {title}
        </p>

        <p className="mt-2 text-xs leading-5 text-white/55">
          {description}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors group-hover:text-accent">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
        </span>
      </div>
    </button>
  );
}
