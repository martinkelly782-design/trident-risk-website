// Insights — authored Trident publications ("what Trident thinks it means").
// Distinct from Intelligence (timestamped situational items) and from Services.
// Only genuine, owner-approved publications are listed — none invented.
//
// The library now holds six publications:
//   1. Iran Maritime Legal Risk Briefing 2026  (existing; bespoke page/URL)
//   2. Red Sea Maritime Threat Assessment       (generic article template)
//   3. Merchant Shipping in the Russian Black Sea Region
//   4. Wildfire Risk to European Cruise Operations
//   5. Voluntary Reporting Area Overview
//   6. Strait of Hormuz Transit Fees & Sanctions Exposure
//
// New records carry an `sections` article body and render through the generic
// InsightArticlePage at /insights/:slug. The Iran record has no `sections`; it
// keeps its existing bespoke page and URL. `publishedAt` drives ordering only;
// only `dateLabel` is shown, so no invented time precision reaches the user.
//
// CONTENT INTEGRITY
// - Editorial web adaptations preserve the approved reports' substantive
//   judgements; PDFs are not reproduced verbatim.
// - No numerical public risk-rating table and no coloured risk matrix — the
//   public site uses qualitative language only.
// - The Red Sea adaptation deliberately excludes the client-only JWC / 25.5°N
//   material (ref TRI-ADV-2026-0731-A), which is not for public distribution.

export const insights = [
  {
    slug: "strait-of-hormuz-transit-fees-sanctions-exposure",
    path: "/insights/strait-of-hormuz-transit-fees-sanctions-exposure",
    category: "Maritime Intelligence",
    title: "Strait of Hormuz Transit Fees & Sanctions Exposure",
    // Browser/meta title (SEO). On-page H1 stays the editorial title above.
    metaTitle: "Strait of Hormuz Transit Fees & Sanctions Exposure | Trident",
    // On-page deck (masthead) and index-card line — the source subtitle.
    standfirst:
      "Operational and sanctions implications after expiry of the 60-day toll-free window.",
    // SEO meta description (distinct from the deck; see routeConfig).
    metaDescription:
      "Assessment of the operational and sanctions implications of Iranian Strait of Hormuz transit fees following expiry of the 60-day toll-free window.",
    dateLabel: "19 August 2026",
    publishedAt: "2026-08-19T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Intelligence"],
    region: "Middle East / Strait of Hormuz",
    // Editorial feature/hero image (index lead + article hero band): a clean crop
    // of a commercial tanker in the Gulf near the Strait of Hormuz — no warship,
    // patrol craft, weapon or text. Restrained maritime treatment applied in CSS.
    image: "/insight-hormuz-transit-fees.webp",
    imageAlt:
      "A commercial oil and product tanker under way in the Gulf near the Strait of Hormuz",
    // Dedicated 1200x630 social derivative from the same source image (not the
    // generic Trident social image), with accurate type/dimensions/alt.
    ogImage: "/insight-hormuz-transit-fees-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt:
      "Commercial tanker in the Strait of Hormuz approaches — transit fees and sanctions exposure",
    report: "hormuz-fees",
    relatedServiceIds: [
      "ms-high-risk-area-transit-planning",
      "mi-sanctions-exposure-analysis",
      "mi-vessel-affiliation-checks",
    ],
    keyJudgement:
      "The expiry of the 60-day toll-free period has converted the Hormuz fee question from a future contingency into an immediate operational, sanctions and compliance problem for owners, charterers, managers, insurers and banks considering any payment or guarantee connected with passage.",
    sections: [
      {
        heading: "Executive assessment",
        paragraphs: [
          "The 60-day period in which Iran undertook to facilitate commercial passage through the Strait of Hormuz without charge has expired without a final U.S.-Iran settlement. The operating environment has shifted from an ambiguous future-fee question to an immediate sanctions and compliance problem for owners, charterers, insurers, banks and managers considering any payment or guarantee connected with passage.",
          "The June Islamabad Memorandum of Understanding provided for safe passage of commercial vessels at no charge for 60 days while a final agreement was negotiated. That window has now expired. Iran has moved to a more offensive posture and continues to assert control over passage, while shipping volumes remain sharply below pre-war levels.",
          "Iranian reporting on 17 August stated that a tanker had been detained for failing to meet Iranian transit conditions, including payment of fees. Trident assesses the vessel was likely AMARA (IMO 9333280), a Liberian-flagged oil/chemical tanker managed from the UAE; the detention rationale has not been independently confirmed.",
          "Key judgement. For U.S. persons, a payment to Iran or the IRGC for safe passage through Hormuz is not authorised absent an applicable OFAC authorisation. For non-U.S. persons, OFAC expressly warns of secondary-sanctions exposure. EU persons face a direct asset-freeze prohibition if funds are made available to the listed IRGCN Hormozgan Provincial Command or for its benefit.",
        ],
      },
      {
        heading: "What has changed operationally",
        paragraphs: [
          "On 17 June the Islamabad MoU committed Iran to facilitate safe passage of commercial vessels with no charge for 60 days. U.S. reporting described the period as toll-free and left open what would follow. The 60-day negotiation period has now expired without a final deal.",
          "Traffic has slowed materially. Reuters reported only five commodity vessels transiting on 15 August and none on 16 August, compared with 31 the previous weekend. On 18 August Reuters reported that Chinese state shippers COSCO Shipping Energy Transportation and China Merchants Energy Shipping had stopped operations through Hormuz and Bab el-Mandeb since late July, using alternative logistics and ship-to-ship transfers.",
          "The commercial choice is therefore no longer theoretical: operators may face a demand to comply with an Iranian transit mechanism, refuse and accept detention or security exposure, or divert.",
        ],
      },
      {
        heading: "U.S. sanctions — U.S. persons",
        paragraphs: [
          "OFAC FAQ 1249 is explicit: payments to, and guarantees from, the Government of Iran or the IRGC, directly or indirectly, for safe passage through the Strait of Hormuz are not authorised for U.S. persons, U.S. financial institutions, or U.S.-owned or -controlled foreign entities. OFAC also states that U.S. persons are prohibited from receiving safe-passage services from the Government of Iran even where no payment is made.",
          "The May 2026 OFAC Hormuz toll alert states that the risk is payment-method neutral. Fiat currency, digital assets, offsets, informal swaps, in-kind consideration and nominally charitable donations may all create sanctions exposure where they are mechanisms for obtaining Iranian safe passage.",
          "A U.S.-linked owner, charterer, manager, insurer, broker, bank or other U.S. person should therefore not treat a Hormuz transit fee as an ordinary port or navigation charge. The baseline is prohibition unless an applicable OFAC general or specific licence exists.",
        ],
      },
      {
        heading: "U.S. sanctions — non-U.S. persons",
        paragraphs: [
          "Non-U.S. persons are not subject to the same comprehensive primary prohibition merely because they are foreign. However, OFAC expressly warns that safe-passage payments create significant secondary-sanctions exposure. Foreign financial institutions and other non-U.S. persons may face sanctions consequences for certain dealings with designated or otherwise blocked persons, including the Government of Iran and the IRGC.",
          "OFAC designated the Persian Gulf Strait Authority (PGSA) for support to the IRGC. Dealings with PGSA therefore carry sanctions risk. Executive Order 13902 and the Iranian Financial Sanctions Regulations also expose foreign persons and financial institutions in connection with certain significant transactions involving blocked Iranian actors or determined sectors.",
          "OFAC assesses 'significance' using the totality of circumstances, including size, frequency, nature, management awareness, nexus to blocked persons, policy impact and deceptive practices. A small payment is not automatically safe, while indirect or disguised payment routes can increase risk.",
        ],
      },
      {
        heading: "European Union sanctions exposure",
        paragraphs: [
          "The EU position differs structurally from the U.S. regime: the EU does not impose a blanket U.S.-style embargo on all dealings with Iran. The critical question is whether funds or economic resources are made available, directly or indirectly, to a listed person or entity, or whether another EU restriction applies.",
          "On 8 June 2026 the EU listed the IRGC Navy Hormozgan Provincial Command under the framework addressing Iranian actions undermining freedom of navigation. The listing reasons state that the Command screens vessels and determines which may transit, sometimes subject to payment of a toll.",
          "Article 3(2) of Regulation (EU) 2023/1529 prohibits funds or economic resources from being made available, directly or indirectly, to or for the benefit of persons and entities listed in Annex III. An EU person or EU-incorporated company paying a toll to the Hormozgan Provincial Command, or through an intermediary where the funds are for its benefit, would therefore face a direct EU asset-freeze prohibition unless a competent authority authorises a relevant derogation.",
          "It does not follow that every Iran-related payment is automatically prohibited under EU law. A payment to an unlisted entity requires separate analysis of the legal and beneficial recipient, intermediary, bank, purpose and any sectoral restrictions. The EU's specific description of the toll system as implemented by a listed IRGCN command materially raises the risk of indirect benefit.",
        ],
      },
      {
        heading: "Non-U.S. / non-EU operators",
        paragraphs: [
          "A UAE, Asian or other non-U.S./non-EU shipping company is not automatically bound by U.S. or EU primary sanctions merely because those regimes exist. But practical exposure remains: the transaction may involve U.S. dollar clearing, a U.S. or EU bank, insurer, P&I club, parent company, broker or listed counterparty. U.S. secondary sanctions can also target foreign persons without primary U.S. jurisdiction over the underlying transaction.",
          "For shipowners, flag and place of incorporation are therefore insufficient. Ownership and control, payment currency, correspondent banks, insurers, charterparty parties and the identity of the Iranian recipient all matter.",
        ],
      },
      {
        heading: "Operational decision framework",
        paragraphs: [
          "Pay — potentially prohibited for U.S. persons; secondary-sanctions exposure for non-U.S. persons; and a direct EU prohibition where the beneficiary is a listed entity such as the IRGCN Hormozgan Provincial Command. It should not be treated as a routine disbursement.",
          "Refuse or attempt passage — creates credible detention, harassment, denial-of-passage or kinetic-security exposure where Iran treats the vessel as unauthorised. The reported AMARA detention increases concern, although the stated basis remains unverified.",
          "Divert or postpone — may reduce sanctions exposure but creates delay, deviation cost, and charterparty, cargo and insurance consequences.",
          "Use an intermediary or alternative payment method — does not remove sanctions risk where the payment is indirectly for a blocked person or a safe-passage service. Concealment or deceptive routing can aggravate exposure.",
        ],
      },
      {
        heading: "Trident assessment",
        paragraphs: [
          "The expiry of the toll-free period materially increases both operational and compliance uncertainty. The central risk is the collision of two coercive systems: Iran may seek to make payment or authorisation a condition of passage, while U.S. and EU sanctions can make payment to the relevant Iranian actors unlawful or sanctionable.",
          "For U.S. persons the position is the clearest: safe-passage payments to the Government of Iran or the IRGC are not authorised absent OFAC permission. For EU persons, the June listing of the IRGCN Hormozgan Provincial Command is critical because the EU itself identifies that command as implementing the toll-screening system. For non-U.S./non-EU operators, secondary-sanctions, banking and counterparty exposure can still be substantial.",
          "Trident recommends that any demand for a Hormuz transit fee be treated as a sanctions event requiring recipient-level screening and legal review before payment, alongside a separate voyage-specific assessment of the operational consequences of refusal or diversion.",
        ],
      },
      {
        heading: "Sources and legal framework",
        paragraphs: [
          "Islamabad Memorandum of Understanding, 17 June 2026; Reuters reporting on the 14-point agreement and 60-day toll-free passage commitment.",
          "U.S. Treasury / OFAC: FAQ 1249; OFAC Alert, Sanctions Risks of Iranian Demands for Strait of Hormuz Passage (1 May 2026); Iran sanctions FAQs on significant transactions.",
          "European Union: Council Regulation (EU) 2023/1529, Article 3; Council Regulation (EU) 2026/1164; Council Implementing Regulation (EU) 2026/1225 listing the IRGCN Hormozgan Provincial Command.",
          "Reuters, 16–19 August 2026: Hormuz traffic slowdown, Chinese state-shipping avoidance and current U.S.-Iran positions.",
          "ClassNK vessel register: AMARA, IMO 9333280, Liberian flag, HSG Shipping Inc., Superfleet DMCC.",
        ],
      },
      {
        heading: "About this assessment",
        paragraphs: [
          "This publication is provided for general information and situational awareness and does not constitute legal, sanctions, insurance or financial advice. It is not a substitute for transaction-specific legal advice or a voyage-specific risk assessment.",
        ],
      },
    ],
  },

  {
    slug: "iran-maritime-legal-risk-briefing",
    path: "/iran-maritime-legal-risk-briefing",
    category: "Briefing",
    title: "Iran Maritime Legal Risk Briefing 2026",
    standfirst:
      "Strategic legal and operational analysis of Iran-related maritime risk — charterparty disputes, force majeure, unsafe-port arguments, sanctions exposure, vessel affiliation, war-risk insurance and Strait of Hormuz disruption.",
    dateLabel: "2026",
    publishedAt: "2026-01-15T00:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: "Legal & Evidence",
    image: "/legalheader.webp",
    imageAlt: "Iran maritime legal risk briefing",
  },

  {
    slug: "red-sea-maritime-threat-assessment",
    path: "/insights/red-sea-maritime-threat-assessment",
    category: "Maritime Threat Assessment",
    title:
      "War Risk to Merchant Shipping Following the Houthi Blockade of Saudi Arabia",
    displayTitle: "Red Sea Maritime Threat Assessment",
    // Browser/meta title (SEO) — intentionally differs from the editorial H1 to
    // connect the assessment to how the risk is actually searched for. The H1
    // above remains the on-page headline.
    metaTitle:
      "Red Sea Maritime Risk Assessment: Houthi Threat to Merchant Shipping | Trident Risk & Advisory",
    standfirst:
      "The Houthi blockade of Saudi Arabia has created a new affiliation-led threat to merchant shipping at the same time that disruption in the Strait of Hormuz has increased the strategic importance of Saudi Red Sea export routes.",
    dateLabel: "13 August 2026",
    publishedAt: "2026-08-13T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Security", "Geopolitical Analysis"],
    region: "Red Sea / Gulf of Aden",
    report: "red-sea",
    // Commercial services this assessment leads into (internal-link authority).
    relatedServiceIds: [
      "ms-high-risk-area-transit-planning",
      "ms-bridge-response-officer",
      "mi-vessel-affiliation-checks",
    ],
    keyJudgement:
      "The operative question for owners and operators is increasingly not vessel type, but affiliation. Saudi-linked shipping sits inside the primary declared target set, while vessels with historic or misidentified Saudi, Israeli, US or UK associations may retain material exposure even where their current commercial profile appears clean.",
    sections: [
      {
        heading: "The escalation of July 2026",
        paragraphs: [
          "The Houthi blockade declaration of 20 July 2026 placed Saudi-linked shipping at the centre of a declared maritime target set for the first time. Confirmed and claimed attacks in the opening phase concentrated on Saudi-flagged or Saudi-operated tankers and on vessels associated with Saudi Red Sea trade.",
          "The declaration followed a period of escalation in which attacks reached infrastructure around Saudi Arabia's west-coast export corridor. Together these developments moved the Red Sea and Gulf of Aden from a broadly elevated threat environment to one with a specific, affiliation-defined focus.",
        ],
      },
      {
        heading: "The insurance response",
        paragraphs: [
          "A declared blockade of this kind changes how war-risk exposure is priced and underwritten. Owners and operators should expect additional premium for Red Sea and Gulf of Aden transits to be reviewed, cover to be written more selectively, and vessel affiliation and recent trading history to weigh more heavily in risk selection and terms.",
          "War-risk cover, additional-premium terms and any held-covered or breach considerations are best treated as matters to be assessed case by case and confirmed with insurers before a transit is committed, rather than assumed from prior arrangements.",
        ],
      },
      {
        heading: "The Houthi threat and target profile",
        paragraphs: [
          "In the opening phase, affiliation has been a more useful discriminator of exposure than vessel class. Saudi flag, Saudi operation and association with Saudi Red Sea trade have been the common features of the vessels attacked or claimed, rather than any single ship type.",
          "For owners and operators this means vessel type alone is no longer a sufficient indicator of exposure. Flag, ownership, management, recent port calls and wider commercial associations all need to be understood before a Red Sea transit is assessed.",
        ],
      },
      {
        heading: "Yanbu and Jizan",
        paragraphs: [
          "With disruption to Strait of Hormuz traffic increasing reliance on Saudi Arabia's west-coast export infrastructure, Yanbu has become a strategically important outlet for crude exports. The July attack demonstrated that infrastructure around the corridor sits inside the threat environment.",
          "Southern terminals such as Jizan sit within the same corridor. Tankers alongside, at anchorage or waiting for access can carry collateral exposure to attacks directed against nearby energy and industrial infrastructure, in addition to any vessel-specific targeting risk.",
        ],
      },
      {
        heading: "The strategic picture",
        paragraphs: [
          "The blockade has created an affiliation-led threat to merchant shipping at precisely the moment that Saudi Red Sea export routes have gained strategic importance as an alternative to Hormuz-dependent flows. The two developments compound one another.",
          "The result is a corridor that is simultaneously more important to global energy trade and more exposed — a combination that raises the operational and commercial stakes of each transit decision.",
        ],
      },
      {
        heading: "Operating picture and outlook",
        paragraphs: [
          "Traffic behaviour in the wider region continues to indicate deliberate risk avoidance rather than a return towards normal operations, and reported GNSS interference remains a feature of the major transit corridors. These conditions are drawn from AIS-derived and voluntary reporting and should be read as indicative rather than complete.",
          "On the evidence available at the assessment date, the affiliation-led threat is likely to persist while the blockade remains declared. Exposure is best understood as a combination of vessel affiliation and proximity to strategically important fixed infrastructure.",
        ],
      },
      {
        heading: "Implications for owners and operators",
        paragraphs: [
          "Before committing a Red Sea transit, establish flag, ownership, management, recent port-call history and wider commercial associations, and test the vessel's profile for any historic or apparent link to the target set. Treat mistaken identity as a live exposure and confirm war-risk arrangements with insurers in advance.",
          "Where vessels will be static near strategically important infrastructure, account for proximity exposure and plan for disabling-damage consequences — immobilisation, towage and port-of-refuge — alongside vessel-specific targeting risk. Trident supports these decisions on a vessel- and voyage-specific basis.",
        ],
      },
    ],
  },

  {
    slug: "merchant-shipping-russian-black-sea-region",
    path: "/insights/merchant-shipping-russian-black-sea-region",
    category: "Maritime Security Risk Assessment",
    title: "Merchant Shipping in the Russian Black Sea Region",
    standfirst:
      "What changed in the Russian Black Sea after 15 July — and why the observed target set matters more than the campaign's stated aims.",
    dateLabel: "27 July 2026",
    publishedAt: "2026-07-27T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Security", "Maritime Intelligence", "Geopolitical Analysis"],
    region: "Black Sea / Sea of Azov",
    report: "black-sea",
    keyJudgement:
      "Risk to merchant shipping serving Russian Black Sea ports increased sharply after 15 July. The commercially important change is that the observed target set widened from Crimea-facing logistics to mainstream export tonnage serving international markets.",
    sections: [
      {
        heading: "What changed after 15 July",
        paragraphs: [
          "Operation MoLoChKa began in the Sea of Azov on 6 July and was publicly extended into the Black Sea on 15 July. The assessment found that risk to merchant shipping serving Russian Black Sea ports increased sharply from that point.",
          "The commercially important change was in the observed target set. Casualties recorded after 15 July included mainstream export tonnage lifting cargo for international markets, rather than vessels engaged solely in Crimea resupply.",
        ],
      },
      {
        heading: "The observed target set",
        paragraphs: [
          "Within the observed record, ten of 111 tankers and gas carriers present in the region between 15 and 27 July were struck. Bulk carriers also entered the target set: five were struck in the twelve days following 15 July, against only one serving a Russian port in the preceding six-and-a-half months.",
          "The casualty set therefore indicates a target set that widened materially beyond tankers over a short period, rather than a continuation of the earlier pattern.",
        ],
      },
      {
        heading: "What did not predict exposure",
        paragraphs: [
          "Casualties after 15 July were distributed across multiple registries and included mainstream beneficial ownership, modern vessels and predominantly non-designated tonnage. Registry did not provide observable protection or additional exposure in the record.",
          "On the evidence available at the assessment date, sanctions status, mainstream ownership, vessel age and P&I profile did not correlate with immunity in the observed casualty set. The record supports a location-and-activity-led reading of exposure rather than a registry- or sanctions-based one.",
        ],
      },
      {
        heading: "Where exposure concentrated",
        paragraphs: [
          "The highest concentration of casualties occurred around eastern loading terminals, their approaches and anchorages. Six casualties were recorded in the north-eastern terminal cluster, including four within approximately two kilometres of one another.",
          "Time spent stationary — at anchor, drifting or alongside — emerged as the greatest observed exposure in the record. Loading delays, terminal suspensions and waiting at anchor can increase the time a vessel spends static and predictable inside the highest-exposure area.",
        ],
      },
      {
        heading: "Consequence profile",
        paragraphs: [
          "Among vessels struck in the assessed Russia-serving trade, damage was concentrated in hull, machinery and steering, with fires or explosions also recorded. Most vessels remained afloat.",
          "The characteristic consequence was disabling damage rather than sinking — operationally significant even where attacks did not produce vessel loss. Contingency planning should account for immobilisation, salvage, towage, port-of-refuge requirements, off-hire and cargo delay.",
        ],
      },
      {
        heading: "Methodology and limitations",
        paragraphs: [
          "The underlying assessment covers a short observation window and a limited casualty population. Its findings describe what was observed within that record and should not be turned into universal rules.",
          "Where the assessment identifies patterns, they are best read as indicative on the evidence available at the assessment date. Casualty identities and detailed tables are held in the underlying report and are not reproduced here.",
        ],
      },
      {
        heading: "Implications for owners and operators",
        paragraphs: [
          "Owners and charterers should not infer exposure solely from the campaign's stated focus on Crimea-related logistics. Presence at, or transit to and from, Russian Black Sea terminals is the stronger common feature in the observed casualty record.",
          "Where calls cannot be avoided, minimising stationary time in the eastern terminal approaches, planning for disabling-damage consequences and seeking vessel- and voyage-specific assessment are the practical priorities.",
        ],
      },
    ],
  },

  {
    slug: "wildfire-risk-european-cruise-operations",
    path: "/insights/wildfire-risk-european-cruise-operations",
    category: "Sector Risk Briefing",
    title: "Wildfire Risk to European Cruise Operations",
    standfirst:
      "Wildfire increasingly affects cruise operations through shore excursions, transport, guest and crew safety, itinerary disruption and duty of care — even where the vessel and port remain operational.",
    dateLabel: "13 August 2026",
    publishedAt: "2026-08-13T08:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Geopolitical Analysis"],
    sector: "Cruise",
    region: "Mediterranean / Southern Europe",
    report: "wildfire",
    keyJudgement:
      "For cruise operators, wildfire exposure is often an ashore problem rather than a vessel problem. A ship may berth safely while fires in the surrounding region make excursions, transport links or land-based programmes unsuitable.",
    sections: [
      {
        heading: "The 2026 season in context",
        paragraphs: [
          "The 2026 wildfire season again affected coastal and near-coastal regions across the Mediterranean and Southern Europe that cruise itineraries depend on. For cruise operations the significance lies less in any single fire than in how readily wildfire disrupts the shore-side elements of a call.",
          "Wildfire has become a recurring seasonal feature of the operating environment in these regions rather than an exceptional event, and is best planned for on that basis.",
        ],
      },
      {
        heading: "Why cruise exposure is distinctive",
        paragraphs: [
          "For cruise operators, wildfire exposure is often an ashore problem rather than a vessel problem. A ship may berth safely while fires in the surrounding region make excursions, transport links or land-based programmes unsuitable.",
          "This distinguishes cruise from most cargo operations: the vessel's own status is not a reliable indicator that a call can proceed as intended, because much of the product is delivered ashore.",
        ],
      },
      {
        heading: "Port and shore-excursion disruption",
        paragraphs: [
          "Wildfire can close roads, restrict access to inland and coastal excursion sites, degrade air quality and divert local emergency resources, even where the port itself remains open. Shore-excursion programmes are frequently the first element of a call to be affected.",
          "Because excursions rely on ground transport and land-based venues, disruption can extend well beyond the immediate fire area to the transport corridors that connect the port to its excursion destinations.",
        ],
      },
      {
        heading: "Guest and crew safety",
        paragraphs: [
          "Where guests and crew are ashore, wildfire raises questions of heat, smoke exposure, evacuation and accountability that are harder to manage than incidents confined to the vessel. Groups dispersed across excursions are particularly difficult to account for at short notice.",
          "Clear thresholds for suspending or recalling shore activity, and for accounting for people ashore, are central to managing this exposure.",
        ],
      },
      {
        heading: "Itinerary and scheduling exposure",
        paragraphs: [
          "Wildfire can force port skips, re-routing and changes to timings that ripple through a tightly scheduled itinerary. A single affected call can create knock-on pressure on subsequent turnarounds and berth windows.",
          "Itinerary flexibility, contingency ports and realistic scheduling assumptions reduce the operational cost of these changes when they occur.",
        ],
      },
      {
        heading: "Duty of care and reputational exposure",
        paragraphs: [
          "Operators retain responsibility for guests and crew ashore, including those on independently arranged activities. Decisions to proceed with, curtail or cancel shore programmes carry both safety and reputational weight.",
          "Clear communication with guests, crew and local partners before and during a disruption is as important to reputational outcomes as the operational decision itself.",
        ],
      },
      {
        heading: "Regional exposure",
        paragraphs: [
          "Exposure is concentrated in the Mediterranean and Southern European coastal regions that feature heavily in summer itineraries, where wildfire season overlaps with the peak cruise season.",
          "The overlap of high itinerary density with elevated seasonal wildfire activity is what makes this a sector-specific rather than a general operational concern.",
        ],
      },
      {
        heading: "Outlook",
        paragraphs: [
          "Wildfire is likely to remain a recurring operational factor for European cruise itineraries during the summer season and is best treated as a planning assumption rather than an exception.",
          "Operators that prepare excursion and itinerary contingencies in advance are better placed to protect guest experience and duty-of-care obligations when disruption occurs.",
        ],
      },
      {
        heading: "Practical considerations for operators",
        paragraphs: [
          "Monitor regional wildfire conditions ahead of and during the season, build excursion and transport contingencies for exposed ports, and maintain local liaison to inform go/no-go decisions on shore programmes.",
          "Set clear thresholds for suspending shore activity and accounting for people ashore, and prepare guest and crew communications in advance so that decisions can be made and explained quickly.",
        ],
      },
    ],
  },

  {
    slug: "voluntary-reporting-area-overview",
    path: "/insights/voluntary-reporting-area-overview",
    category: "Maritime Security Report",
    title: "Voluntary Reporting Area Overview",
    displayTitle: "Voluntary Reporting Area Overview",
    standfirst:
      "Transit statistics, GNSS interference and regional incident activity across the maritime Voluntary Reporting Area.",
    dateLabel: "7 August 2026",
    publishedAt: "2026-08-07T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Intelligence", "Maritime Security", "Maritime Cyber"],
    region: "Middle East / Red Sea / Gulf of Aden",
    report: "vra",
    keyJudgement:
      "Across the Voluntary Reporting Area, commercial transit through the Strait of Hormuz remained at roughly four per cent of its pre-conflict average, GNSS interference persisted across three corridors, and piracy-related activity continued at a measurable level. The figures are drawn from AIS and voluntary reporting, and are indicative rather than complete.",
    sections: [
      {
        heading: "Strait of Hormuz transit picture",
        paragraphs: [
          "For the week ending 7 August, AIS-derived data recorded 18 outbound and 21 inbound full transits of the Strait of Hormuz — both approximately four per cent of the pre-conflict average.",
          "The figures are AIS-derived and do not capture EMCOM-silent transits, so they should be read as indicative rather than a complete count. Traffic remains heavily suppressed rather than recovering, consistent with deferral or avoidance of transits rather than a simple switch between routes.",
        ],
      },
      {
        heading: "Traffic composition and recent flow",
        paragraphs: [
          "By vessel type, transiting tonnage since 28 February was led by product tankers at 45 per cent, followed by dry bulk at 22 per cent and general cargo at 14 per cent.",
          "Cellular container (6 per cent), other (5 per cent), Ro-Ro (3 per cent), liquid cargo (3 per cent) and unknown (2 per cent) made up the remainder — a composition that reflects the corridor's role in energy and bulk trades.",
        ],
      },
      {
        heading: "Maritime flow assessment",
        paragraphs: [
          "Over the last seven days, of the transits still being made the northern PGSA route carried 12 outbound and 15 inbound movements, against six outbound and six inbound using the southern Oman territorial-water route. No full transits used the suspended Traffic Separation Scheme.",
          "Route selection among continuing transits has concentrated on the northern route. These are observations of behaviour, not routing advice, and route choice alone should not be treated as evidence of safety.",
        ],
      },
      {
        heading: "Red Sea and Gulf of Aden",
        paragraphs: [
          "Across the wider Voluntary Reporting Area, the Red Sea and Gulf of Aden remained an active incident environment, with 37 piracy-related incidents recorded year to date.",
          "These figures provide regional context alongside the Houthi-related threat covered separately in Trident's Red Sea Maritime Threat Assessment.",
        ],
      },
      {
        heading: "Piracy-related activity",
        paragraphs: [
          "Of the 37 piracy-related incidents recorded year to date, seven were categorised as boardings or hijacks and four as attacks; the remaining 26 were suspicious-activity reports.",
          "The distribution is weighted towards suspicious-activity reporting, with a smaller number of boardings, hijacks and attacks. Named-vessel incident detail is held in the full report.",
        ],
      },
      {
        heading: "GNSS interference",
        paragraphs: [
          "Voluntary reporting recorded 604 GNSS-interference reports year to date, including 61 in the previous 30 days, alongside 34,236 anomalous AIS positions during the seven-day analytical period. Persistent concentrations remained in the Red Sea, Arabian Gulf and Gulf of Oman.",
          "Interference-report concentrations aligned closely with independently observed anomalous AIS positions, increasing confidence that both are observing the same underlying disruption. Voluntary reporting is not a complete representation of interference activity, so absence of reports should not be read as absence of interference.",
        ],
      },
      {
        heading: "Methodology and limitations",
        paragraphs: [
          "Transit and route figures are AIS-derived and do not capture EMCOM-silent movements. GNSS figures rest on voluntary reporting, which is incomplete. The overview covers a defined reporting period and should be read as indicative of observed activity rather than a complete account.",
          "The full report contains the detailed tables and methodology; this adaptation summarises its principal findings.",
        ],
      },
    ],
  },
];

export const insightsById = Object.fromEntries(insights.map((i) => [i.slug, i]));

// Insights ordered newest-first for the index (publishedAt drives order only).
export const insightsByRecency = [...insights].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

// Article-bearing insights render through the generic /insights/:slug template.
export function getArticleInsightBySlug(slug) {
  const item = insightsById[slug];
  return item && item.sections ? item : null;
}

export default insights;
