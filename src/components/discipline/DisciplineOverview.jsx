import SectionHeader from "../system/SectionHeader";
import { siteConfig } from "../../data/site";

// Discipline overview and positioning (Phase 9).
// Places the discipline within the wider Trident arc using only data-model
// wording: the discipline's own `positioning` sentence and the site-level
// differentiator. No invented claims, adjectives or statistics.
export default function DisciplineOverview({ discipline }) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader
          title="Overview"
          supporting="Where this discipline sits in the Trident arc."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <p className="font-display text-2xl font-light leading-snug tracking-tight text-ink">
            {discipline.homepageSummary}
          </p>

          <div className="space-y-5 text-sm leading-7 text-ink-soft">
            <p>{discipline.positioning}</p>
            <p className="text-ink-muted">{siteConfig.differentiator}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
