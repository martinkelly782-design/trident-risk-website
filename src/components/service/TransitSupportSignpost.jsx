import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Reusable editorial signpost establishing that Trident supports vessels
// transiting the Red Sea and the Strait of Hormuz. Used selectively (Services
// index, Maritime Security expertise) so the proposition is not hidden only
// inside the High Risk Area Transit Planning page. Wording is deliberately
// careful: no guarantee of safe passage, no naval protection, no claim to
// control military coordination, no universal geographic-coverage claim, no
// 24/7 claim. The full proposition lives on the HRA Transit Planning page.

const HRA_PATH = "/maritime-security/high-risk-area-transit-planning";

const AREAS = [
  {
    title: "Red Sea",
    sub: "Bab el-Mandeb · Gulf of Aden",
    line: "Voyage-specific threat assessment, vessel affiliation exposure and operational planning for merchant shipping operating through the Red Sea corridor, with coordination with recognised maritime and military shipping-support mechanisms where applicable.",
  },
  {
    title: "Strait of Hormuz",
    sub: "Transit planning · Decision support",
    line: "Transit planning and operational decision support for the Strait of Hormuz, including route and context assessment and vessel-specific support, with coordination with relevant maritime authorities and recognised shipping-support mechanisms where applicable.",
  },
];

export default function TransitSupportSignpost() {
  return (
    <section className="bg-image-dark text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">High-risk transit support</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight sm:text-[2.4rem]">
              Red Sea.<br />Strait of Hormuz.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/65">
              Voyage-specific intelligence and operational support for vessels navigating high-risk maritime environments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to={HRA_PATH} className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                High-risk transit support
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </Link>
              <Link to="/contact" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-white">
                Speak to an analyst
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px border-t border-white/15 bg-white/10 sm:grid-cols-2 lg:col-span-8 lg:border-t-0">
            {AREAS.map((a) => (
              <div key={a.title} className="flex flex-col bg-image-dark p-6 lg:p-8">
                <div className="h-px w-8 bg-accent" />
                <h3 className="mt-5 font-display text-2xl font-normal leading-tight text-white">{a.title}</h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">{a.sub}</p>
                <p className="mt-5 text-sm leading-7 text-white/70">{a.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
