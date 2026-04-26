export default function App() {
  return (
    <div className="bg-[#0b2234] text-white min-h-screen font-sans">
      
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <span className="font-semibold">Trident Risk & Advisory</span>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Maritime Intelligence</a>
          <a href="#">Maritime Security</a>
          <a href="#">Geopolitical Analysis</a>
          <a href="#">Legal</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-8 py-20 max-w-6xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Intelligence led advisory for maritime, geopolitical and legal risk.
        </h1>

        <p className="text-gray-300 max-w-2xl mb-6">
          Supporting shipping, insurance, corporate and legal clients with clear,
          defensible analysis in complex and high risk environments.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#d6b25e] text-black px-6 py-3 rounded-md font-semibold">
            Ask an Analyst
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-md">
            Explore Services
          </button>
        </div>
      </section>

      {/* GMC SECTION */}
      <section className="px-8 py-16 border-t border-gray-700">
        <h2 className="text-3xl font-semibold mb-4">
          Global Monitoring Centre
        </h2>

        <p className="text-gray-300 max-w-3xl">
          24/7 monitoring, real time alerts, and rapid crisis response delivered
          by experienced analysts supporting clients operating in high risk environments.
        </p>
      </section>

    </div>
  );
}
