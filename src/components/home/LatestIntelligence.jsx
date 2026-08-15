import { latestIntelligence } from "../../data/homeContent";
import IntelligenceCard from "./IntelligenceCard";
import SectionHeader from "../system/SectionHeader";

export default function LatestIntelligence() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8 lg:py-16">
        <SectionHeader
          title="Latest Intelligence"
          linkLabel="View all intelligence"
          linkAriaLabel="View all intelligence — coming soon"
        />

        {/* Four editorial columns with a continuous thin-grey divider grid */}
        <div className="mt-8 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 xl:grid-cols-4">
          {latestIntelligence.map((item) => (
            <IntelligenceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
