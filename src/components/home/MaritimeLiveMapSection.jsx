import { useEffect, useState } from "react";

import Map, {
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

export function MaritimeLiveMapSection() {
  const [activeIncident, setActiveIncident] = useState(null);
  const [popupIncident, setPopupIncident] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const loadIncidents = async () => {
      try {
        const response = await fetch(`/incidents.json?ts=${Date.now()}`);

        if (!response.ok) {
          throw new Error(`Failed to load incidents: ${response.status}`);
        }

        const data = await response.json();

        const cleanData = Array.isArray(data)
          ? data.filter(
              (incident) =>
                incident &&
                Number.isFinite(Number(incident.latitude)) &&
                Number.isFinite(Number(incident.longitude))
            )
          : [];

        setIncidents(cleanData);
      } catch (error) {
        console.error("Failed to load incidents:", error);
        setIncidents([]);
      }
    };

    loadIncidents();

    const interval = setInterval(loadIncidents, 120000);

    return () => clearInterval(interval);
  }, []);

  const filteredIncidents =
    selectedFilter === "All"
      ? incidents
      : incidents.filter((incident) => incident.type === selectedFilter);

  const bannerText =
    filteredIncidents.length > 0
      ? filteredIncidents
          .map(
            (incident) =>
              `LIVE MARITIME INCIDENT: ${incident.region || "Region unknown"} · ${
                incident.summary || incident.type || "Incident reported"
              }`
          )
          .join("     |     ")
      : "LIVE MARITIME INCIDENT MONITORING ACTIVE";

  return (
    <section className="bg-[#f3f6f8] py-10">
      <div className="mx-auto mb-4 max-w-[1800px] overflow-hidden rounded-2xl border border-slate-200 bg-[#071426] py-3 text-white shadow-lg">
        <div className="flex w-full items-center gap-4">
          <span className="ml-4 shrink-0 rounded-full bg-[#b5893d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Live
          </span>

          <div className="relative flex-1 overflow-hidden whitespace-nowrap text-xs text-slate-200">
            <div className="inline-block min-w-full animate-[ticker_35s_linear_infinite] pr-16">
              {bannerText}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-slate-200 bg-white">
        <div className="grid min-h-[520px] grid-cols-1 lg:min-h-[760px] lg:grid-cols-[340px_1fr]">
          <aside className="max-h-[320px] overflow-hidden border-b-4 border-[#b5893d] bg-white lg:max-h-none lg:border-b-0 lg:border-r lg:border-slate-200">
            <div className="border-b border-slate-200 bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b5893d]">
                Trident Live
              </p>

              <h2 className="mt-3 text-3xl font-light tracking-tight text-[#071426]">
                Recent Incidents
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                ({filteredIncidents.length}) live markers
              </p>
            </div>

            <div className="max-h-[230px] overflow-y-auto px-4 py-4 lg:h-[660px] lg:max-h-none">
              <div className="space-y-4">
                {filteredIncidents.length === 0 ? (
                  <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                    No live incidents currently loaded.
                  </p>
                ) : (
                  filteredIncidents.map((incident, index) => (
                    <article
                      key={incident.id || index}
                      onMouseEnter={() => setActiveIncident(incident.id || index)}
                      onMouseLeave={() => setActiveIncident(null)}
                      className={`rounded-2xl border p-4 shadow-sm transition ${
                        activeIncident === (incident.id || index)
                          ? "border-[#b5893d] bg-[#fff8e8] shadow-lg"
                          : "border-slate-200 bg-white hover:shadow-lg"
                      }`}
                    >
                      <h3 className="text-base font-semibold text-slate-900">
                        #{index + 1} {incident.type || "Maritime Incident"}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#b5893d]">
                        {incident.source || "UKMTO"} · {incident.region || "Region unknown"}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {incident.summary || "Incident details unavailable."}
                      </p>
                    </article>
                  ))
                )}
              </div>
            </div>
          </aside>

          <div className="relative mt-3 h-[520px] min-h-[520px] overflow-hidden md:h-[760px] lg:mt-0">
            <Map
              initialViewState={{
                longitude: 45,
                latitude: 18,
                zoom: 2.1,
              }}
              mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
              style={{ width: "100%", height: "100%" }}
            >
              <NavigationControl position="top-right" />

              {filteredIncidents.map((incident, index) => (
                <Marker
                  key={incident.id || index}
                  longitude={Number(incident.longitude)}
                  latitude={Number(incident.latitude)}
                  anchor="center"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIncident(incident.id || index)}
                    onMouseLeave={() => setActiveIncident(null)}
                    onClick={() => {
                      setActiveIncident(incident.id || index);
                      setPopupIncident(incident);
                    }}
                    className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#b5893d] text-xs font-bold text-white shadow-xl ring-2 ring-white"
                  >
                    <span className="absolute h-7 w-7 animate-ping rounded-full bg-[#d6b25e] opacity-60" />
                    <span className="relative z-10">{index + 1}</span>
                  </button>
                </Marker>
              ))}

              {popupIncident && (
                <Popup
                  longitude={Number(popupIncident.longitude)}
                  latitude={Number(popupIncident.latitude)}
                  anchor="top"
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setPopupIncident(null)}
                >
                  <div className="max-w-[240px] p-1 text-[#071426]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5893d]">
                      {popupIncident.source || "UKMTO"}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold">
                      {popupIncident.type || "Maritime Incident"}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-slate-600">
                      {popupIncident.region || "Region unknown"}
                    </p>

                    <p className="mt-3 text-xs leading-5 text-slate-700">
                      {popupIncident.summary || "Incident details unavailable."}
                    </p>
                  </div>
                </Popup>
              )}
            </Map>

            <div className="absolute left-3 top-3 z-20 w-[240px] rounded-xl border border-slate-200 bg-white/90 text-[#071426] shadow-lg backdrop-blur">
              <button
                type="button"
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5893d]">
                  Filters
                </span>

                <span className="text-sm font-semibold text-slate-500">
                  {filtersOpen ? "−" : "+"}
                </span>
              </button>

              {filtersOpen && (
                <div className="border-t border-slate-200 px-3 pb-3 pt-3">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700"
                  >
                    <option>All</option>
                    <option>Suspicious Approach</option>
                    <option>GPS Interference</option>
                    <option>Boarding</option>
                    <option>Piracy Warning</option>
                    <option>Conflict Disruption</option>
                    <option>UKMTO</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
