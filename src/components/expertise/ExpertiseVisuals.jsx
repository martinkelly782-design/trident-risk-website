import { ArrowRight, ArrowDown } from "lucide-react";

// Reusable analytical visual primitives for Expertise pages (visual-depth pass).
// These give the pages the feel of an intelligence report rather than a bare
// typeset consultancy site — WITHOUT images. Shared language: thin hairline
// rules, restrained red (gold for Legal), navy/cream, square geometry. No
// rounded cards, no shadows, no glassmorphism, no fake dashboards/HUDs/scores.

// --- AnalyticalFramework -------------------------------------------------------
// The "what shapes the risk" section as a connected framework: numbered factors
// in a hairline grid that resolve into a single synthesis node (the central
// VESSEL / EXPOSURE relationship), rather than six standalone cards.
export function AnalyticalFramework({ eyebrow, heading, intro, items, converge, gold }) {
  const bar = gold ? "bg-gold" : "bg-accent";
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${gold ? "text-gold" : "text-accent"}`}>{eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight sm:text-[2.4rem]">{heading}</h2>
          {intro && <p className="mt-5 text-sm leading-7 text-white/60">{intro}</p>}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 lg:grid-cols-12">
          {/* Factors — column count adapts so short frameworks leave no empty cell */}
          <div className={`grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 ${converge ? "lg:col-span-8" : items.length > 2 ? "lg:col-span-12 lg:grid-cols-3" : "lg:col-span-12"}`}>
            {items.map((f) => (
              <div key={f.n} className="flex flex-col bg-image-dark p-6 lg:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-light text-white/35 tabular-nums">{f.n}</span>
                  <span aria-hidden="true" className={`h-px w-6 ${bar}`} />
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">{f.label}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-white/70">{f.line}</p>
              </div>
            ))}
          </div>

          {/* Synthesis node — the factors resolve here. */}
          {converge && (
            <div className="flex flex-col justify-center bg-image-dark p-7 lg:col-span-4 lg:p-9">
              <ArrowRight className={`h-5 w-5 ${gold ? "text-gold" : "text-accent"}`} strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">Resolves into</p>
              <p className="mt-2 font-display text-[1.7rem] font-normal leading-tight text-white">{converge.label}</p>
              <p className="mt-4 text-sm leading-6 text-white/60">{converge.caption}</p>
              {converge.chips && (
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/12 pt-5">
                  {converge.chips.map((chip) => (
                    <span key={chip} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">{chip}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// --- SequenceChain -------------------------------------------------------------
// A → B → C … horizontal stepped chain on a light band (Cyber, Legal). Editorial
// numbering + accent connectors, not a software workflow.
export function SequenceChain({ eyebrow, heading, intro, steps, gold }) {
  const barText = gold ? "text-gold" : "text-accent";
  const bar = gold ? "bg-gold" : "bg-accent";
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${barText}`}>{eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">{heading}</h2>
          {intro && <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft">{intro}</p>}
        </div>
        <div className="mt-12 flex flex-col md:flex-row md:items-stretch">
          {steps.map((s, i) => (
            <div key={s.n} className="contents">
              <div className="flex-1 border-t border-ink/15 pt-6 md:border-t-0 md:pt-0">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-light text-ink-muted tabular-nums">{s.n}</span>
                  <span aria-hidden="true" className={`h-px w-6 ${bar}`} />
                </div>
                <h3 className="mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">{s.label}</h3>
                <p className="mt-3 max-w-[15rem] text-sm leading-6 text-ink-soft">{s.line}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex items-center justify-start py-3 md:justify-center md:px-1 md:py-0 ${barText}`}>
                  <ArrowDown className="h-4 w-4 md:hidden" strokeWidth={1.75} aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" strokeWidth={1.75} aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- RelationshipDiagram -------------------------------------------------------
// Development → maritime consequence → commercial decision, as an editorial
// relationship (not a mesh). Explicitly does not imply every input hits every
// output (see note). Geopolitical Analysis signature.
export function RelationshipDiagram({ eyebrow, heading, groups, note }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-[1.12] tracking-tight text-ink sm:text-[2.4rem]">{heading}</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-y-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-x-2">
          {groups.map((g, i) => (
            <div key={g.title} className="contents">
              <div className="border-t border-ink/15 pt-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">{g.title}</h3>
                <ul className="mt-5 space-y-3">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[15px] leading-6 text-ink-soft">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              {i < groups.length - 1 && (
                <div className="flex items-center justify-start py-2 text-accent md:justify-center md:py-0">
                  <ArrowDown className="h-4 w-4 md:hidden" strokeWidth={1.75} aria-hidden="true" />
                  <ArrowRight className="hidden h-4 w-4 md:block" strokeWidth={1.75} aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
        {note && <p className="mt-8 max-w-2xl text-sm leading-6 text-ink-muted">{note}</p>}
      </div>
    </section>
  );
}

// --- MapPlaceholder ------------------------------------------------------------
// A reserved, image-ready area for a future strategic map, with a TRUTHFUL empty
// state (no fabricated map, coordinates or data). Geopolitical Analysis.
export function MapPlaceholder({ caption }) {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Strategic geography</p>
        <div className="relative mt-6 aspect-[21/9] w-full overflow-hidden border border-white/12">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_140%_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-image-dark/20" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <p className="max-w-md text-center text-sm leading-7 text-white/55">{caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dispatcher for a discipline's optional signature diagram.
export function SignatureVisual({ signature }) {
  if (!signature) return null;
  if (signature.kind === "chain") return <SequenceChain {...signature} />;
  if (signature.kind === "relationship") return <RelationshipDiagram {...signature} />;
  return null;
}
