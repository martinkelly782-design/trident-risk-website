import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { heroAssetFor } from "../../config/disciplineHeroAssets";

// Shared discipline hero (Discipline Direction Change).
//
// The legacy per-discipline header images were withdrawn. This hero renders a
// restrained dark editorial treatment as its permanent base — a deep navy field
// with a soft directional wash and a single accent keyline — so a page never
// depends on a weak legacy asset. Each discipline's approved 1600×1000 WebP
// (see config/disciplineHeroAssets.js) is layered on top and fades in only once
// the file exists in /public; while it is pending the img stays at opacity 0
// (no broken-image icon) and the dark treatment carries the hero. Dropping the
// approved asset in later requires no code change.

function HeroBreadcrumbs({ name }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-x-2">
          <ChevronRight className="h-3.5 w-3.5 text-white/30" strokeWidth={1.75} aria-hidden="true" />
          <span className="text-white" aria-current="page">
            {name}
          </span>
        </li>
      </ol>
    </nav>
  );
}

export default function DisciplineHeroBand({
  disciplineId,
  breadcrumbName,
  eyebrow,
  h1,
  supporting,
  gold = false,
  onExplore,
  onEnquire,
}) {
  const asset = heroAssetFor(disciplineId);
  const [imgReady, setImgReady] = useState(false);
  const rule = gold ? "bg-gold" : "bg-accent";

  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      {/* Restrained dark editorial base — always present, carries the hero on
          its own until an approved asset exists. */}
      <div aria-hidden="true" className="absolute inset-0 bg-image-dark" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_140%_at_85%_0%,rgba(255,255,255,0.06),transparent_55%)]"
      />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-white/10" />

      {/* Approved asset — fades in only once the file exists; stays hidden
          (opacity 0) on error so no broken image is shown. */}
      {asset && (
        <img
          src={asset.src}
          alt={asset.alt}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setImgReady(true)}
          onError={() => setImgReady(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            imgReady ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "grayscale(0.35) contrast(1.06) brightness(0.66)" }}
        />
      )}
      {/* Restrained navy legibility scrim — strong on the left where the copy
          sits, clearing toward the right so the photograph itself stays visible.
          Over the opaque dark base (no asset) it simply reads as the dark
          placeholder; over a loaded photo it reveals the subject rather than
          hiding it. A soft bottom scrim seats the hero and holds the CTAs. */}
      <div className="absolute inset-0 bg-gradient-to-r from-image-dark via-image-dark/70 to-image-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-image-dark/75 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
        <HeroBreadcrumbs name={breadcrumbName} />

        <div className="grid items-center py-14 lg:min-h-[540px] lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </p>
            {gold && <div className="mt-4 h-px w-10 bg-gold" />}
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {h1}
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/72">
              {supporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a83d26]"
              >
                Explore services
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={onEnquire}
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/70"
              >
                Speak to an analyst
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline to seat the hero against the proposition band. */}
      <div aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-px ${rule} opacity-40`} />
    </section>
  );
}
