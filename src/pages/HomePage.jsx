import HeroV2 from "../components/home/HeroV2";
import WhatWeDo from "../components/home/WhatWeDo";
import CoreServices from "../components/home/CoreServices";
import CurrentIntelligence from "../components/home/CurrentIntelligence";
import ReportsResources from "../components/home/ReportsResources";
import ApproachEnquiries from "../components/home/ApproachEnquiries";

// Homepage v2 (approved reference: design-reference/homepage-v2-reference.png).
// Section order — services (What We Do) appears before intelligence — with an
// alternating dark/light rhythm: hero (dark) → what we do (light) → current
// intelligence (dark) → reports (light) → approach/enquiries (split).
export default function HomePage() {
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main>
      <HeroV2 onScrollTo={scrollToId} />
      <WhatWeDo />
      <CoreServices />
      <CurrentIntelligence />
      <ReportsResources />
      <ApproachEnquiries onScrollTo={scrollToId} />
    </main>
  );
}
