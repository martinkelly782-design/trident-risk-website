import fs from "fs";
import { chromium } from "playwright";

const incidents = [];

function offsetFromPoint(lat, lon, distanceNm, bearingDeg) {
  const earthRadiusNm = 3440.065;
  const bearing = (bearingDeg * Math.PI) / 180;
  const lat1 = (lat * Math.PI) / 180;
  const lon1 = (lon * Math.PI) / 180;
  const distanceRatio = distanceNm / earthRadiusNm;

  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(distanceRatio) +
      Math.cos(lat1) * Math.sin(distanceRatio) * Math.cos(bearing)
  );

  const lon2 =
    lon1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(distanceRatio) * Math.cos(lat1),
      Math.cos(distanceRatio) - Math.sin(lat1) * Math.sin(lat2)
    );

  return {
    latitude: Number(((lat2 * 180) / Math.PI).toFixed(3)),
    longitude: Number(((lon2 * 180) / Math.PI).toFixed(3)),
  };
}

function getBearing(directionText) {
  const direction = directionText.replace(/\s+/g, "");

  const bearings = {
    north: 0,
    northeast: 45,
    east: 90,
    southeast: 135,
    south: 180,
    southwest: 225,
    west: 270,
    northwest: 315,
  };

  return bearings[direction];
}

function getApproxLocation(text) {
  const lower = text.toLowerCase();

  const referencePoints = {
    socotra: { name: "Socotra", latitude: 12.4634, longitude: 53.8237 },
    aden: { name: "Aden", latitude: 12.7855, longitude: 45.0187 },
    mokha: { name: "Mokha", latitude: 13.3197, longitude: 43.2473 },
    "al mukalla": { name: "Al Mukalla", latitude: 14.5425, longitude: 49.1242 },
    mukalla: { name: "Al Mukalla", latitude: 14.5425, longitude: 49.1242 },
    hodeidah: { name: "Hodeidah", latitude: 14.7978, longitude: 42.9545 },
    hudaydah: { name: "Hudaydah", latitude: 14.7978, longitude: 42.9545 },
    salalah: { name: "Salalah", latitude: 17.0194, longitude: 54.0897 },
    muscat: { name: "Muscat", latitude: 23.588, longitude: 58.3829 },
    duqm: { name: "Duqm", latitude: 19.662, longitude: 57.707 },
    fujairah: { name: "Fujairah", latitude: 25.1288, longitude: 56.3265 },
    doha: { name: "Doha", latitude: 25.2854, longitude: 51.531 },
    "mina saqr": { name: "Mina Saqr", latitude: 25.9667, longitude: 56.05 },
    sirik: { name: "Sirik", latitude: 26.4833, longitude: 57.1 },
    hormuz: { name: "Strait of Hormuz", latitude: 26.5667, longitude: 56.25 },
  };

  const distanceMatch = lower.match(
    /(\d+)\s*nm\s*(north|south|east|west|northeast|north east|northwest|north west|southeast|south east|southwest|south west)\s*of\s*(socotra|aden|mokha|al mukalla, yemen|al mukalla|mukalla, yemen|mukalla|hodeidah|hudaydah|salalah|muscat|duqm|fujairah|doha|mina saqr|sirik|hormuz)/
  );

  if (distanceMatch) {
    const distanceNm = Number(distanceMatch[1]);
    const directionText = distanceMatch[2];
    const placeKey = distanceMatch[3].replace(", yemen", "").trim();
    const bearing = getBearing(directionText);
    const reference = referencePoints[placeKey];

    if (reference && bearing !== undefined) {
      const coords = offsetFromPoint(
        reference.latitude,
        reference.longitude,
        distanceNm,
        bearing
      );

      return {
        region: `${distanceNm}NM ${directionText} of ${reference.name}`,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };
    }
  }

  if (lower.includes("fujairah")) return { region: "Fujairah", longitude: 56.3265, latitude: 25.1288 };
  if (lower.includes("doha")) return { region: "Doha", longitude: 51.531, latitude: 25.2854 };
  if (lower.includes("mina saqr")) return { region: "Mina Saqr", longitude: 56.05, latitude: 25.9667 };
  if (lower.includes("sirik")) return { region: "Sirik", longitude: 57.1, latitude: 26.4833 };
  if (lower.includes("socotra")) return { region: "Socotra Area", longitude: 54.1, latitude: 13.8 };
  if (lower.includes("hormuz")) return { region: "Strait of Hormuz", longitude: 56.3, latitude: 26.6 };
  if (lower.includes("gulf of oman") || lower.includes("oman")) return { region: "Gulf of Oman", longitude: 58.6, latitude: 24.4 };
  if (lower.includes("gulf of aden") || lower.includes("aden")) return { region: "Gulf of Aden", longitude: 48.2, latitude: 12.5 };
  if (lower.includes("red sea") || lower.includes("hodeidah") || lower.includes("hudaydah")) return { region: "Red Sea", longitude: 42.8, latitude: 17.5 };

  return {
    region: "Unspecified Maritime Area",
    longitude: 56.8,
    latitude: 24.8,
  };
}

async function inspectUKMTO() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto("https://www.ukmto.org/recent-incidents", {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });

    await page.waitForTimeout(10000);

    const bodyText = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("article, .card, li, div"))
        .map((el) => el.innerText)
        .filter(Boolean)
        .filter((text) =>
          text.includes("UKMTO has received a report of an incident")
        )
        .join("\n\n");
    });

    const cleanText = bodyText
      .replace(/Your choice regarding cookies[\s\S]*?SETTINGS/gi, "")
      .replace(/Recent Incidents[\s\S]*?Map shortcuts:[\s\S]*?Decrease pitch/gi, "")
      .replace(/Total Incidents Summary[\s\S]*?(?=Attack UKMTO|Suspicious Activity UKMTO|Hijack UKMTO|Advisory UKMTO|$)/gi, "")
      .replace(/UKMTO has received \d+ reports[\s\S]*?(?=Attack UKMTO|Suspicious Activity UKMTO|Hijack UKMTO|Advisory UKMTO|$)/gi, "");

    const reports = cleanText
      .split(/(?=(?:Attack|Suspicious Activity|Hijack|Advisory)\s+UKMTO\s+#?\d+)/gi)
      .map((item) => item.replace(/\s+/g, " ").trim())
      .filter(
        (item) =>
          item.length > 80 &&
          item.includes("UKMTO has received a report") &&
          !item.includes("Total Incidents Summary") &&
          !item.includes("Map shortcuts") &&
          !item.toLowerCase().includes("cookies")
      );

    const uniqueReports = [
      ...new Map(
        reports.map((report) => {
          const locationMatch = report.match(/incident\s+(.+?)\./i);
          const key = locationMatch
            ? locationMatch[1].toLowerCase().trim()
            : report.slice(0, 120);
          return [key, report];
        })
      ).values(),
    ];

    uniqueReports.slice(0, 10).forEach((report, index) => {
      const fullReport = report
        .replace(/Recent Incidents[\s\S]*$/i, "")
        .replace(/Total Incidents Summary[\s\S]*$/i, "")
        .trim();

      const location = getApproxLocation(fullReport);

      incidents.push({
        id: index + 1,
        type: "UKMTO Incident",
        source: "UKMTO",
        region: location.region,
        longitude: location.longitude,
        latitude: location.latitude,
        summary: fullReport
          .replace(/\.\.\.\s*10 degrees:[\s\S]*$/i, ".")
          .replace(/\s*10 degrees:[\s\S]*$/i, "")
          .replace(/\s*shift \+ down arrow[\s\S]*$/i, "")
          .replace(/\s*Jump focus to the map[\s\S]*$/i, "")
          .replace(/\s*©2026[\s\S]*$/i, "")
          .trim()
          .slice(0, 500),
        date: new Date().toISOString(),
        markerColour: "bg-[#b5893d]",
        pulseColour: "bg-[#d6b25e]",
      });
    });

    fs.writeFileSync(
      "./public/incidents.json",
      JSON.stringify(incidents, null, 2)
    );

    console.log(`incidents.json updated with ${incidents.length} incidents`);
  } catch (error) {
    console.error("UKMTO inspect failed:", error);
  } finally {
    await browser.close();
  }
}

inspectUKMTO();