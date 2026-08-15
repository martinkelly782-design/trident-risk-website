import { disciplines } from "../../data/homeContent";
import DisciplinePanel from "./DisciplinePanel";
import SectionHeader from "../system/SectionHeader";

export default function HowWeHelp({ onOpenPage }) {
  return (
    <section id="how-we-help" className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeader
          title="How We Help"
          supporting="Comprehensive advisory across six integrated disciplines."
          linkLabel="View all services"
          linkAriaLabel="View all services — coming soon"
        />

        {/* Six tall image-led panels, tight spacing */}
        <div className="mt-8 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {disciplines.map((discipline) => (
            <DisciplinePanel
              key={discipline.pillarId}
              discipline={discipline}
              onExplore={onOpenPage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
