import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../system/SectionHeader";
import { getRoute } from "../../routes/routeConfig";

// Related analysis for a service (Phase 10).
// Only genuine, routed analysis is shown, resolved by id from the data model.
// The sole existing analysis is the Iran maritime legal risk briefing; its title
// and description are reused from the route table — nothing invented. Renders
// nothing when the service references no genuine analysis.
const KNOWN_ANALYSES = {
  "iran-maritime-legal-risk-briefing": {
    path: "/iran-maritime-legal-risk-briefing",
    displayTitle: "Iran Maritime Legal Risk Briefing",
    kicker: "Briefing",
  },
};

function resolveAnalyses(relatedAnalysisIds = []) {
  return relatedAnalysisIds
    .map((id) => {
      const known = KNOWN_ANALYSES[id];
      if (!known) return null;
      const route = getRoute(known.path);
      if (!route) return null;
      return {
        id,
        path: known.path,
        title: known.displayTitle,
        kicker: known.kicker,
        description: route.description || "",
      };
    })
    .filter(Boolean);
}

export default function RelatedAnalysis({ service }) {
  const analyses = resolveAnalyses(service.relatedAnalysisIds);
  if (analyses.length === 0) return null;

  return (
    <section className="bg-canvas-raised">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8 lg:py-14">
        <SectionHeader title="Related analysis" />

        <ul className="mt-4 divide-y divide-hairline border-b border-hairline">
          {analyses.map((analysis) => (
            <li key={analysis.id}>
              <Link
                to={analysis.path}
                className="group grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
              >
                <div className="min-w-0">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                    <span aria-hidden="true" className="h-3 w-[3px] shrink-0 bg-accent" />
                    {analysis.kicker}
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-light leading-snug tracking-tight text-ink">
                    {analysis.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-soft">
                    {analysis.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-accent">
                  Read briefing
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
