import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { heroAssetFor } from "../../config/disciplineHeroAssets";

// Expertise hero — split editorial composition (visual-enrichment pass).
//
// Desktop: text occupies the left ~54%; a large image occupies the right ~46%
// and bleeds to the right viewport edge (no card, no border, no rounded box).
// The image is kept SUBSTANTIALLY present (light desaturation + gentle navy
// grade, ~80%), with only a left-edge fade into the navy so the copy stays
// legible — not a ghosted texture. Mobile: text and CTAs first, then a
// substantial 4:3 image (never hidden, never the inferior version).
//
// Asset system: the approved /public/hero-<area>.webp fades in when present.
// While missing, the image AREA is preserved by a restrained dark placeholder
// (navy field + soft radial) — no engineering text, no legacy image, no fake
// HUD/coordinates/reticles. Missing assets are reported, not exposed.

function HeroImage({ discipline, objectPosition, eager, rounded, className }) {
  const asset = heroAssetFor(discipline.id);
  const [ready, setReady] = useState(false);
  const imgRef = useRef(null);

  // Cover the prerender/hydration race: a cached/eager image can finish loading
  // before React attaches onLoad during hydration, so onLoad never fires and the
  // image would stay hidden. Check completion on mount and reveal if already done.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setReady(true);
  }, [asset?.src]);

  return (
    <div className={className}>
      {/* Image-ready placeholder base (shown until the asset exists). */}
      <div aria-hidden="true" className="absolute inset-0 bg-image-dark" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_120%_at_72%_18%,rgba(255,255,255,0.08),transparent_60%)]" />
      {asset && (
        <img
          ref={imgRef}
          src={asset.src}
          alt={asset.alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          onLoad={() => setReady(true)}
          onError={() => setReady(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          style={{ objectPosition: objectPosition || "center", filter: "grayscale(0.18) contrast(1.05) brightness(0.9)" }}
        />
      )}
      {/* Left-edge fade into the navy text field (desktop only). */}
      <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-image-dark via-image-dark/20 to-transparent md:block" />
      {/* Mobile: gentle bottom grade only, image stays clearly visible. */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-image-dark/50 to-transparent md:hidden" />
      {/* Restrained red edge micro-detail at the transition. */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-px bg-accent/40 md:block" />
    </div>
  );
}

function Breadcrumbs({ name }) {
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
          <span className="text-white" aria-current="page">{name}</span>
        </li>
      </ol>
    </nav>
  );
}

export default function ExpertiseHero({ discipline, c, objectPosition }) {
  const primaryBg = c.gold ? "bg-gold hover:bg-[#a07a33]" : "bg-accent hover:bg-[#a83d26]";
  return (
    <section className="relative overflow-hidden bg-image-dark text-white">
      {/* Desktop image — right ~46%, bleeds to the viewport edge. */}
      <HeroImage
        discipline={discipline}
        objectPosition={objectPosition}
        eager
        className="absolute inset-y-0 right-0 hidden w-[48%] md:block lg:w-[46%]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-8 lg:px-8">
        <Breadcrumbs name={discipline.name} />

        <div className="grid items-center py-12 md:min-h-[520px] md:py-16 lg:min-h-[580px] lg:py-20">
          <div className="max-w-xl md:max-w-[34rem] lg:max-w-[38rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              Expertise <span className="text-white/40">/</span> {discipline.name}
            </p>
            {c.gold && <div className="mt-4 h-px w-10 bg-gold" />}
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {c.hero.h1}
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/72">{c.hero.supporting}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className={`inline-flex items-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors ${primaryBg}`}>
                {c.hero.primaryCtaLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              {/* Direct link to the pre-filtered Services catalogue for this area
                  — one click, no intermediary scroll. Renders as a real anchor in
                  the prerendered HTML. */}
              <Link to={`/services?area=${discipline.slug}`} className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/70">
                Explore services
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile image — after the copy/CTAs, substantial 4:3, full-bleed. */}
        <div className="-mx-5 md:hidden">
          <HeroImage
            discipline={discipline}
            objectPosition={objectPosition}
            eager
            className="relative aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  );
}
