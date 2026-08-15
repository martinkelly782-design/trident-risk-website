const homeCards = [
  { icon: "♔", title: "Maritime Intelligence", text: "Actionable intelligence on vessels, ownership, movements and activity to reduce exposure and support informed decisions.", pillarId: "maritime-intelligence" },
  { icon: "◇", title: "Maritime Security", text: "Protect vessels, crews and voyages. Transit planning, crisis support and onboard response.", pillarId: "maritime-security" },
  { icon: "⌬", title: "Maritime Cyber", text: "Identify and mitigate cyber risks to vessels, systems and operations in an increasingly connected maritime environment.", pillarId: "maritime-cyber" },
  { icon: "◎", title: "Geopolitical Analysis", text: "Forward looking analysis of political, security and regulatory developments that shape maritime risk and opportunity.", pillarId: "geopolitical-analysis" },
  { icon: "▥", title: "Market Entry", text: "Risk led market entry advisory to help organisations expand confidently and avoid costly exposure in new environments.", pillarId: "market-entry" },
  { icon: "⚖", title: "Legal", text: "Expert witness and specialist legal support grounded in real world maritime and security experience.", pillarId: "legal" },
  { icon: "⚓︎", title: "Ports and Infrastructure", text: "Assess and manage risk to ports, infrastructure and maritime operations across critical environments.", pillarId: "maritime-security" },
  { icon: "☷", title: "Incident Response", text: "Rapid, discreet and effective support when incidents occur, helping you stabilise, respond and recover.", pillarId: "maritime-security", anchorId: "maritime-security-crisis-response-and-incident-management" },
];

export function HomeServicesGrid({ onOpenPage }) {
  return (
    <section id="home-services" className="bg-[#071827] px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {homeCards.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onOpenPage(item.pillarId, item.anchorId)}
            className="min-h-[260px] rounded-md border border-white/10 bg-white px-7 py-8 text-left shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="text-4xl leading-none text-[#b5893d]">
              {item.icon}
            </div>

            <h3 className="mt-7 text-2xl font-light leading-tight tracking-tight text-[#0f172a]">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              {item.text}
            </p>

            <div className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0f172a]">
              View Service
              <span className="text-[#b5893d]">→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
