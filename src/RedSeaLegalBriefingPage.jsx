export default function RedSeaLegalBriefingPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#071426]">
      <section className="bg-[#071426] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b5893d]">
            Trident Risk and Advisory
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight">
            Red Sea Maritime Legal Risk Briefing 2026
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Strategic legal and operational analysis covering
            charterparty disputes, force majeure,
            unsafe port arguments, owners refusal to transit,
            sanctions exposure, vessel targeting patterns
            and war risk implications across the Red Sea
            and Strait of Hormuz.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          
          <div>
            <h2 className="text-3xl font-semibold">
              What the briefing covers
            </h2>

            <ul className="mt-8 space-y-4 text-lg leading-8 text-slate-700">
              <li>Force majeure and frustration risks</li>
              <li>Owners refusal to transit</li>
              <li>Unsafe port legal considerations</li>
              <li>War risk insurance implications</li>
              <li>Sanctions exposure and vessel affiliation</li>
              <li>Vessel targeting analysis</li>
              <li>US blockade implications</li>
              <li>Humanitarian exemptions and food imports</li>
              <li>Case studies and operational trends</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
            <h3 className="text-2xl font-semibold">
              Download Briefing
            </h3>

            <p className="mt-4 text-slate-600">
              Enter your details to access the full report.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                type="email"
                placeholder="Company Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

              <a
                href="/Red-Sea-Maritime-Legal-Risk-Briefing-2026.pdf"
                download
                className="block rounded-xl bg-[#071426] px-6 py-4 text-center text-white transition hover:bg-[#0c2038]"
              >
                Download Briefing
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}