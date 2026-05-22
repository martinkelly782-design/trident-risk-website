import fs from "fs";

const ukmtoIncidents = [
  {
    id: 1,
    type: "Suspicious Approach",
    source: "UKMTO",
    region: "Red Sea",
    longitude: 43.3,
    latitude: 12.6,
    summary:
      "UKMTO received a report of suspicious maritime activity near the southern Red Sea.",
    date: new Date().toISOString(),
    markerColour: "bg-[#b5832f]",
    pulseColour: "bg-[#d6b25e]",
  },

  {
    id: 2,
    type: "GPS Interference",
    source: "UKMTO",
    region: "Strait of Hormuz",
    longitude: 56.3,
    latitude: 26.6,
    summary:
      "Masters reported intermittent GPS disruption and electronic interference.",
    date: new Date().toISOString(),
    markerColour: "bg-[#2563eb]",
    pulseColour: "bg-[#60a5fa]",
  },
];

const recaapIncidents = [
  {
    id: 3,
    type: "Boarding",
    source: "ReCAAP",
    region: "Singapore Strait",
    longitude: 104.1,
    latitude: 1.2,
    summary:
      "ReCAAP reported unauthorised boarding activity involving small craft.",
    date: new Date().toISOString(),
    markerColour: "bg-[#c2410c]",
    pulseColour: "bg-[#fb923c]",
  },
];

const incidents = [
  ...ukmtoIncidents,
  ...recaapIncidents,
];

fs.writeFileSync(
  "./public/incidents.json",
  JSON.stringify(incidents, null, 2)
);

console.log("incidents.json updated");