// Insights — authored Trident publications ("what Trident thinks it means").
// Distinct from Intelligence (timestamped situational items) and from Services.
// Only genuine, owner-approved publications are listed — none invented.
//
// The library holds the core publications (Iran briefing with its bespoke
// page/URL; Red Sea, Black Sea, Wildfire, Voluntary Reporting Area and Strait of
// Hormuz Transit Fees assessments on the generic article template) plus an
// eight-article Maritime Expert Witness search-authority cluster that reinforces
// the /legal-evidence/expert-witness commercial page.
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
  // --- Maritime Expert Witness search-authority cluster (8 supporting Insights).
  // Informational/regional analysis that reinforces the commercial Expert Witness
  // page (/legal-evidence/expert-witness) without competing for the principal
  // commercial query. Trident provides operational/maritime expert evidence, not
  // legal advice; legal framework is distinguished from the operational evidence
  // an expert may assess. Nothing is invented — regional specifics defer to
  // Trident's published assessments (cross-linked) or the supplied Black Sea report.
  {
    slug: "how-a-maritime-security-expert-assesses-whether-a-voyage-was-dangerous",
    path: "/insights/how-a-maritime-security-expert-assesses-whether-a-voyage-was-dangerous",
    category: "Expert Evidence",
    title: "How a Maritime Security Expert Assesses Whether a Voyage Was Dangerous",
    metaTitle:
      "How a Maritime Security Expert Assesses Whether a Voyage Was Dangerous | Trident",
    standfirst:
      "Retrospective voyage-risk assessment turns on the information reasonably available at the relevant date — not on what is known with hindsight.",
    metaDescription:
      "How an independent maritime-security expert reconstructs the threat and operating conditions on a voyage at the relevant date, and why regional danger is not the same as danger to a particular vessel.",
    dateLabel: "14 May 2026",
    publishedAt: "2026-05-14T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Legal & Evidence", "Maritime Security"],
    region: "Global",
    image: "/insight-voyage-danger.webp",
    imageAlt: "A laden container ship on an open-sea voyage",
    ogImage: "/insight-voyage-danger-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A laden container ship under way on an open-sea voyage",
    relatedServiceIds: ["le-expert-witness", "ms-high-risk-area-transit-planning"],
    keyJudgement:
      "Whether a voyage was dangerous is judged on what was reasonably knowable at the relevant date. An assessment built on later information — including the outcome itself — measures the wrong thing.",
    sections: [
      {
        heading: "The retrospective question",
        paragraphs: [
          "When a maritime-security decision is later disputed — an order refused, a route changed, a call cancelled, additional premium incurred — the question put to an expert is rarely whether harm eventually occurred. It is whether, on the information reasonably available at the time, the voyage exposed the vessel to a level of risk that made the decision reasonable.",
          "That is a factual and operational question before it is a legal one. Trident's role is to reconstruct the threat and operating environment as it stood at the relevant date and to give an independent opinion on the vessel's exposure — [maritime-security expert evidence](/legal-evidence/expert-witness), offered without advocacy and prepared to be tested under cross-examination.",
        ],
      },
      {
        heading: "The relevant date, not hindsight",
        paragraphs: [
          "The single most important discipline in this work is temporal. A voyage decision must be assessed on what was reasonably knowable when it was made, using the warnings, reporting and guidance then in circulation — not the fuller, cleaner picture that emerges afterwards.",
          "Hindsight distorts in both directions. A transit that passed without incident was not necessarily safe when ordered; a vessel that was attacked was not necessarily imperceptibly exposed beforehand. The outcome is evidence of what happened, not proof of what a competent operator should have foreseen. An expert opinion that quietly imports later knowledge measures the wrong thing, and is vulnerable the moment that assumption is exposed.",
        ],
      },
      {
        heading: "Regional danger is not danger to the vessel",
        paragraphs: [
          "A region can be dangerous in general while a particular vessel on a particular voyage is materially more, or less, exposed. Headline regional threat and vessel-specific exposure are related but distinct, and conflating them is a common analytical error.",
          "Two ships transiting the same water on the same day can carry very different risk. Flag, ownership and management, recent trading pattern, apparent affiliation, cargo, direction of travel, and how closely the vessel matches a threat actor's targeting criteria can move exposure sharply in either direction. The assessment that matters is of the threat to this vessel, on this voyage, at this time.",
        ],
      },
      {
        heading: "The factors an expert weighs",
        paragraphs: [
          "A reasoned opinion draws the relevant factors together rather than resting on any single indicator. The threat environment and its direction of travel; the vessel's geographic exposure and the specific waters it must transit; vessel characteristics; voyage direction; cargo and the trade served; ownership, management and affiliation; flag; and any sanctions exposure all bear on how the vessel was likely to be perceived and targeted.",
          "The operational record matters as much as the threat picture: AIS and movement data, port and terminal exposure, and time spent stationary at anchor or alongside — often a greater exposure than time under way. Contemporaneous warnings and official maritime guidance, and insurance-market indicators such as the treatment of the area by war-risk underwriters, provide independent evidence of how the risk was understood at the time. For a live voyage, this is the same discipline that underpins [high-risk area transit planning](/maritime-security/high-risk-area-transit-planning).",
        ],
      },
      {
        heading: "From factors to a reasoned opinion",
        paragraphs: [
          "The factors are weighed together against the environment the vessel actually faced. The object is not a single number but a defensible judgement: what the threat to this vessel reasonably appeared to be at the relevant date, and whether the decision taken fell within the range a competent operator could reasonably have reached.",
          "That judgement has to survive scrutiny. Each material input should be traceable to contemporaneous evidence, the limits of that evidence should be stated plainly, and the reasoning should hold whichever party instructs it. The related question of whether a vessel faced [real danger in a war risk dispute](/insights/what-is-real-danger-in-a-maritime-war-risk-dispute) applies the same evidential discipline to a narrower threshold.",
        ],
      },
      {
        heading: "What the opinion is, and is not",
        paragraphs: [
          "Trident provides independent operational and maritime-security expert evidence. It does not give legal advice, construe the contract, or decide the case; those are matters for the lawyers and the tribunal. The value of the opinion is its independence — the expert's duty is to the tribunal or court, not to the instructing party.",
          "Where the dispute arises under a charterparty, that operational evidence sits alongside legal argument on the clause: see [maritime expert witnesses in charterparty war risk disputes](/insights/maritime-expert-witnesses-in-charterparty-war-risk-disputes).",
        ],
      },
    ],
  },

  {
    slug: "maritime-expert-witnesses-in-charterparty-war-risk-disputes",
    path: "/insights/maritime-expert-witnesses-in-charterparty-war-risk-disputes",
    category: "Expert Evidence",
    title: "Maritime Expert Witnesses in Charterparty War Risk Disputes",
    metaTitle:
      "Maritime Expert Witnesses in Charterparty War Risk Disputes | Trident",
    standfirst:
      "Independent operational evidence on the threat environment — distinct from legal interpretation of the clause — in disputes over war risks, voyage orders, routeing and port calls.",
    metaDescription:
      "The role of independent maritime expert evidence in charterparty war risk disputes: the operational threat environment, reasonable decisions and the information available at the relevant time.",
    dateLabel: "29 May 2026",
    publishedAt: "2026-05-29T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Legal & Evidence", "Maritime Security"],
    region: "Global",
    image: "/insight-charterparty-war-risk.webp",
    imageAlt: "Aerial view of a laden container ship under way at sea",
    ogImage: "/insight-charterparty-war-risk-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "Aerial view of a laden container ship under way at sea",
    relatedServiceIds: ["le-expert-witness", "mi-vessel-affiliation-checks"],
    keyJudgement:
      "In a charterparty war risk dispute the tribunal construes the clause; the expert supplies the factual threat picture. Keeping those two roles distinct is what makes the evidence useful.",
    sections: [
      {
        heading: "Where operational evidence meets a charterparty dispute",
        paragraphs: [
          "War risk disputes under a charterparty commonly turn on whether it was reasonable to refuse a voyage order, deviate, decline a port call, or incur additional cost because of the security environment. Standard war risk clauses — for example the widely used BIMCO CONWARTIME and VOYWAR forms — allow an owner to act where the vessel may be, or is likely to be, exposed to war risks.",
          "Whether the contractual threshold is met is a question of construction and fact for the tribunal. What the tribunal needs in order to decide it is a clear, independent account of the actual threat environment on the route and at the time — the operational input to a legal test. That is where [maritime expert evidence in charterparty disputes](/legal-evidence/expert-witness) is directed.",
        ],
      },
      {
        heading: "Legal interpretation and expert evidence are different roles",
        paragraphs: [
          "It is important to keep two things apart. The interpretation of the clause — what it requires, what standard it sets, how it applies to the facts — is a matter of law for counsel and the tribunal. The factual threat environment — what the danger to this vessel actually was, how it was reported, how it was developing — is a matter of operational and intelligence expertise.",
          "An expert who strays into legal conclusions weakens the evidence and invites challenge. Trident's opinion stays on the operational side of that line: exposure, targeting risk, and the reasonableness of the decisions taken in the conditions prevailing at the time. It does not tell the tribunal how to construe the contract.",
        ],
      },
      {
        heading: "Reconstructing the information available at the time",
        paragraphs: [
          "The reasonableness of a master's or owner's decision is judged on what was reasonably available when the decision was made. Rebuilding that contemporaneous picture is central to the opinion: the warnings and advisories then current, official maritime guidance, threat reporting for the area and period, and the operational record for the vessel and voyage.",
          "This is deliberate work to exclude hindsight. The point is not what is now known about the transit, but what a competent operator could reasonably have known and concluded at the relevant date — the discipline set out in [how a maritime security expert assesses whether a voyage was dangerous](/insights/how-a-maritime-security-expert-assesses-whether-a-voyage-was-dangerous).",
        ],
      },
      {
        heading: "Threat to a particular vessel",
        paragraphs: [
          "Voyage orders, routeing decisions and port calls are assessed against the exposure of the specific vessel, not the region in the abstract. Two vessels ordered on similar voyages can face materially different risk depending on flag, ownership and management, recent port-call history and any apparent affiliation — the same considerations that drive [vessel affiliation checks](/maritime-security/vessel-affiliation-checks).",
          "A defensible opinion therefore reasons from the particular: how this vessel was likely to be perceived by the relevant threat actor, whether it matched a discernible targeting pattern, and how its direction and profile affected exposure on the ordered voyage. Whether that exposure crossed the contractual threshold of [real danger](/insights/what-is-real-danger-in-a-maritime-war-risk-dispute) is then for the tribunal.",
        ],
      },
      {
        heading: "Independence is the value",
        paragraphs: [
          "Expert evidence is only worth what its independence makes it worth. The expert's duty is to the tribunal or court, and the opinion is offered without advocacy — it should read the same whichever party instructs it, and it should hold under cross-examination.",
          "That independence is also what makes the evidence useful across the range of war-risk questions a charterparty can raise, from unsafe-port arguments to force majeure and deviation: see [safe port, war risk and force majeure](/insights/safe-port-war-risk-and-force-majeure-the-evidence-behind-maritime-disputes).",
        ],
      },
    ],
  },

  {
    slug: "what-is-real-danger-in-a-maritime-war-risk-dispute",
    path: "/insights/what-is-real-danger-in-a-maritime-war-risk-dispute",
    category: "War Risk Analysis",
    title: "What Is “Real Danger” in a Maritime War Risk Dispute?",
    metaTitle:
      "What Is “Real Danger” in a Maritime War Risk Dispute? | Trident",
    standfirst:
      "The threshold is for the tribunal; the evidence is operational. What likelihood, consequence, proximity and targeting tell you about danger to a particular vessel — and why an incident count alone does not.",
    metaDescription:
      "What operational evidence is relevant when a tribunal considers whether a vessel faced real danger in a war risk dispute — likelihood, consequence, proximity, targeting pattern and vessel-specific exposure.",
    dateLabel: "12 June 2026",
    publishedAt: "2026-06-12T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Legal & Evidence", "Maritime Security"],
    region: "Global",
    image: "/insight-real-danger.webp",
    imageAlt: "A merchant tanker under way in open water",
    ogImage: "/insight-real-danger-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A merchant tanker under way in open water",
    relatedServiceIds: ["le-expert-witness", "ms-high-risk-area-transit-planning"],
    keyJudgement:
      "Whether danger was “real” is a legal threshold for the tribunal. The evidence that informs it is operational: likelihood, consequence, proximity and — decisively — how closely the particular vessel matched the threat. An incident count alone establishes none of this.",
    sections: [
      {
        heading: "A legal threshold, an operational input",
        paragraphs: [
          "War risk clauses turn on danger: whether a vessel may be, or is likely to be, exposed to war risks such that an owner may decline to proceed. Whether the danger in a given case was “real” — sufficient to engage the clause — is a question for the tribunal, applying the contract to the facts. This article does not offer a view on that legal question.",
          "What an [independent maritime-security expert](/legal-evidence/expert-witness) can do is supply the factual picture the threshold is applied to: how likely harm to the vessel was, how severe, how near, and how closely the vessel matched what the threat actor was actually targeting. Those are the inputs to the test, not the test itself.",
        ],
      },
      {
        heading: "Likelihood and consequence",
        paragraphs: [
          "Danger has two dimensions that should not be collapsed into one. Likelihood is the probability that this vessel would be attacked or interfered with on this voyage. Consequence is what would follow if it were — the difference between harassment, boarding, detention, disabling damage and total loss.",
          "A low-likelihood, high-consequence exposure and a higher-likelihood, low-consequence exposure are not the same, and an opinion that reports only one of them is incomplete. Both have to be reasoned from the evidence rather than assumed.",
        ],
      },
      {
        heading: "Proximity, reach and frequency",
        paragraphs: [
          "Proximity matters, but geographic reach can matter more. A threat actor able to strike far from its own coast changes the exposure of vessels that a simple distance measure would treat as safe. The relevant question is the effective reach of the credible threat, not the distance to the nearest reported incident.",
          "Frequency and tempo add a further dimension: a small number of high-profile events and a sustained campaign of attacks describe different environments even where a headline count looks similar. The pattern over time is often more informative than the total.",
        ],
      },
      {
        heading: "Targeting pattern and vessel-specific exposure",
        paragraphs: [
          "The most decisive factor is usually how closely the particular vessel matched the threat actor's targeting criteria. Where attacks concentrate on a defined set — a flag, an ownership link, an affiliation, a trade — a vessel inside that set is exposed very differently from one outside it, even on the same water.",
          "This is why vessel-specific analysis cannot be skipped. Credible capability and intent, the observed targeting pattern, and the vessel's own profile together determine exposure far more reliably than the general reputation of the area.",
        ],
      },
      {
        heading: "Mitigation and alternatives",
        paragraphs: [
          "Exposure is not static. Mitigation measures, naval or coalition presence, routeing choices and the availability of genuine alternatives all bear on the residual danger a vessel actually faced. An assessment that ignores available mitigation, or assumes an alternative that did not realistically exist, will misstate the risk.",
          "Equally, mitigation should not be over-credited. Its effect has to be evidenced, not assumed, and weighed against the specific threat rather than treated as a general reassurance.",
        ],
      },
      {
        heading: "Why an incident count is not enough",
        paragraphs: [
          "A raw count of incidents in a region is a weak proxy for danger to a particular vessel. It says nothing about which vessels were targeted, why, how near, with what capability, or with what consequence — and it can rise or fall for reasons unconnected to the exposure of the ship in question.",
          "A defensible opinion moves from the aggregate to the specific: from what happened in the area to what the evidence shows about the threat to this vessel, on this voyage, at the relevant time. Regional applications of the same method are set out for the [Red Sea](/insights/red-sea-war-risk-evidence-in-charterparty-disputes), the [Strait of Hormuz](/insights/strait-of-hormuz-war-risk-safe-passage-and-charterparty-disputes) and the [Black Sea](/insights/black-sea-war-risk-assessing-danger-to-merchant-shipping).",
        ],
      },
    ],
  },

  {
    slug: "safe-port-war-risk-and-force-majeure-the-evidence-behind-maritime-disputes",
    path: "/insights/safe-port-war-risk-and-force-majeure-the-evidence-behind-maritime-disputes",
    category: "Expert Evidence",
    title: "Safe Port, War Risk and Force Majeure: The Evidence Behind Maritime Disputes",
    metaTitle:
      "Safe Port, War Risk and Force Majeure: The Evidence Behind Maritime Disputes | Trident",
    standfirst:
      "Three legal doctrines, one evidential foundation. The operational material that underpins disputes over safe port, war risk, force majeure, deviation and delay.",
    metaDescription:
      "The operational evidence behind safe port, war risk and force majeure disputes — port and terminal status, navigational restrictions, threat geography, official warnings, AIS traffic and insurance pricing.",
    dateLabel: "26 June 2026",
    publishedAt: "2026-06-26T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Legal & Evidence", "Maritime Security"],
    region: "Global",
    image: "/insight-safe-port-evidence.webp",
    imageAlt: "A container ship alongside at a port terminal under gantry cranes",
    ogImage: "/insight-safe-port-evidence-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A container ship alongside at a port terminal under gantry cranes",
    relatedServiceIds: ["le-expert-witness", "ms-high-risk-area-transit-planning"],
    keyJudgement:
      "Safe port, war risk and force majeure are distinct legal doctrines, but they draw on the same operational evidence: the state of the port and approaches, the threat geography, the official warnings and the market's own response at the relevant time.",
    sections: [
      {
        heading: "Three doctrines, one evidential foundation",
        paragraphs: [
          "Safe-port arguments, war-risk clauses and force majeure raise different legal questions, and the legal analysis of each is for the lawyers and the tribunal. But in maritime-security disputes they tend to rest on the same underlying facts: what the port and its approaches were actually like, and what the threat environment was, at the relevant time.",
          "Assembling that factual foundation — clearly, contemporaneously and independently — is where [expert evidence on the operating environment](/legal-evidence/expert-witness) is directed. The doctrine is applied by others; the evidence has to be sound whichever doctrine is in play.",
        ],
      },
      {
        heading: "Port, berth and terminal status",
        paragraphs: [
          "Whether a port was safe, or a call frustrated, often begins with its operational state: berth and terminal availability, closures or suspensions, damage, congestion, and whether cargo operations could actually be conducted. A port that is nominally open may be effectively unusable for a particular vessel or cargo.",
          "The evidence is granular and time-specific. Terminal status can change day to day, and the relevant question is the condition of the facility at the moment the vessel was ordered there or arrived — not its general reputation before or after.",
        ],
      },
      {
        heading: "Navigational restrictions and access routes",
        paragraphs: [
          "Access matters as much as the berth. Navigational restrictions, closed or contested approaches, suspended traffic-separation schemes and the availability of a safe route to and from the port all bear on whether the call could be made without exposing the vessel to danger.",
          "Where the only available route ran through a contested area, the safety of the port and the safety of the approach cannot be separated. The evidence has to address the whole voyage to the berth, not the berth alone.",
        ],
      },
      {
        heading: "Threat geography and attack history",
        paragraphs: [
          "The security dimension turns on the threat geography around the port and its approaches: the history of attacks or interference, the reach of the credible threat, and how the specific area sat within it. Proximity to targeted infrastructure — terminals, anchorages, chokepoints — can expose a vessel independently of any targeting of the ship itself.",
          "As with any war-risk assessment, the general reputation of a region is not the same as the exposure of a particular call. The analysis has to locate the specific port and route within the threat picture, at the relevant date.",
        ],
      },
      {
        heading: "Official warnings and military activity",
        paragraphs: [
          "Contemporaneous official material carries particular evidential weight: government and flag-state advisories, notices to mariners, and guidance from recognised maritime-security reporting bodies. Observable military or naval activity in the area at the time is a further, independent indicator of how the environment was understood.",
          "These sources are valuable precisely because they are contemporaneous and external. They record how the risk was assessed at the time, rather than how it looks in retrospect.",
        ],
      },
      {
        heading: "Traffic behaviour and insurance pricing",
        paragraphs: [
          "The behaviour of the wider fleet is evidence in its own right. AIS-derived traffic — whether vessels continued to call, avoided the area, or changed routeing — shows how the market actually responded, and suppressed or diverted traffic can corroborate a genuinely elevated environment.",
          "Insurance pricing points the same way. The treatment of an area by war-risk underwriters, the level of additional premium and the terms on which cover was written are a market signal about perceived danger at the time. None of these is decisive on its own; together they build a picture that a tribunal can weigh. How that picture is reasoned to a particular vessel is the subject of [real danger in a maritime war risk dispute](/insights/what-is-real-danger-in-a-maritime-war-risk-dispute).",
        ],
      },
    ],
  },

  {
    slug: "red-sea-war-risk-evidence-in-charterparty-disputes",
    path: "/insights/red-sea-war-risk-evidence-in-charterparty-disputes",
    category: "War Risk Analysis",
    title: "Red Sea War Risk: Evidence in Charterparty Disputes",
    metaTitle:
      "Red Sea War Risk: Evidence in Charterparty Disputes | Trident",
    standfirst:
      "Red Sea risk is not geographically uniform. Why the threat to a particular vessel can differ materially from the headline regional threat — and what that means for evidence.",
    metaDescription:
      "Why Red Sea war risk cannot be treated as uniform — Bab el-Mandeb, the southern Red Sea, Saudi Red Sea ports, vessel affiliation and routeing — and how the threat to a particular vessel differs from the regional threat.",
    dateLabel: "9 July 2026",
    publishedAt: "2026-07-09T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Security", "Maritime Intelligence", "Legal & Evidence"],
    region: "Red Sea / Gulf of Aden",
    image: "/insight-red-sea-war-risk.webp",
    imageAlt: "A merchant vessel under way on open water",
    ogImage: "/insight-red-sea-war-risk-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A merchant vessel under way on open water",
    relatedServiceIds: ["le-expert-witness", "ms-high-risk-area-transit-planning", "mi-vessel-affiliation-checks"],
    keyJudgement:
      "In the Red Sea, exposure is defined more by sub-region, direction and affiliation than by the word “Red Sea” itself. The threat to a particular vessel can differ sharply from the headline regional threat.",
    sections: [
      {
        heading: "Why Red Sea risk is not uniform",
        paragraphs: [
          "It is tempting to treat “the Red Sea” as a single risk zone. For assessment purposes that is too coarse. Exposure varies substantially by sub-region, by the direction of transit, by the vessel's affiliation and by the specific ports involved — and an opinion that averages across the whole corridor will misstate the risk to most individual voyages.",
          "Trident's published [Red Sea Maritime Threat Assessment](/insights/red-sea-maritime-threat-assessment) sets out the threat picture in detail. For a charterparty dispute, the task is to locate the particular vessel and voyage within that picture, applying the discipline of [maritime-security expert evidence](/legal-evidence/expert-witness) to the specific facts.",
        ],
      },
      {
        heading: "Bab el-Mandeb and the southern Red Sea",
        paragraphs: [
          "The southern approaches and the Bab el-Mandeb strait have carried the most acute exposure in recent operating conditions. The chokepoint concentrates traffic, shortens reaction time and sits within reach of shore-based threats, so a transit of the southern Red Sea is a materially different proposition from a passage further north.",
          "Direction of travel matters here too. A northbound and a southbound transit encounter the highest-exposure waters at different points in the voyage, and the sequence can affect the options realistically available to the master.",
        ],
      },
      {
        heading: "Central, northern and the Saudi Red Sea ports",
        paragraphs: [
          "Exposure does not stop at the strait. The central and northern Red Sea, and the approaches to Saudi Red Sea ports, have their own threat characteristics, and infrastructure around export terminals can draw exposure to vessels in the vicinity independently of any targeting of the ship itself.",
          "Locating a call or transit within this sub-regional pattern — rather than treating the whole sea as equally exposed — is central to a defensible assessment.",
        ],
      },
      {
        heading: "Affiliation and targeting criteria",
        paragraphs: [
          "In the Red Sea, affiliation has repeatedly proven a stronger discriminator of exposure than vessel type. How a vessel and its associations are likely to be perceived — flag, ownership and management, recent trading pattern, and any historic or apparent links — can move its exposure far more than its cargo or class.",
          "This is why [vessel affiliation checks](/maritime-security/vessel-affiliation-checks) are so material to the evidence. A vessel that matches a threat actor's declared or observed target set is exposed very differently from one that does not, even on the same water on the same day.",
        ],
      },
      {
        heading: "Routeing, naval presence and premiums",
        paragraphs: [
          "Routeing decisions, the presence of naval or coalition forces, and the treatment of the corridor by war-risk underwriters all bear on the residual risk a vessel actually faced. War-risk premiums and the terms on which cover was written are a contemporaneous market signal, and traffic behaviour — whether vessels continued to transit, avoided the corridor or diverted around the Cape — corroborates how the environment was understood at the time.",
          "None of these is decisive alone. Together they help distinguish a genuinely elevated environment from a reputationally elevated one.",
        ],
      },
      {
        heading: "The vessel, not the headline",
        paragraphs: [
          "The recurring theme is that the threat to a particular vessel can differ materially from the headline regional threat. A defensible Red Sea opinion reasons from sub-region, direction, affiliation and the operational record to the exposure of the specific voyage — the same method applied to the threshold question of [real danger](/insights/what-is-real-danger-in-a-maritime-war-risk-dispute), and to live decisions through [high-risk area transit planning](/maritime-security/high-risk-area-transit-planning).",
        ],
      },
    ],
  },

  {
    slug: "black-sea-war-risk-assessing-danger-to-merchant-shipping",
    path: "/insights/black-sea-war-risk-assessing-danger-to-merchant-shipping",
    category: "War Risk Analysis",
    title: "Black Sea War Risk: Assessing Danger to Merchant Shipping",
    metaTitle:
      "Black Sea War Risk: Assessing Danger to Merchant Shipping | Trident",
    standfirst:
      "Position, activity, time exposed and the trade served proved more informative than flag or ownership. Findings from Trident's July 2026 Black Sea assessment, and what they mean for evidence.",
    metaDescription:
      "Trident's July 2026 Black Sea assessment: the target set widened to mainstream export tonnage, registry and ownership did not confer immunity, and position, activity and time exposed were more informative than flag.",
    dateLabel: "27 July 2026",
    publishedAt: "2026-07-27T10:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Security", "Maritime Intelligence", "Legal & Evidence"],
    region: "Black Sea / Sea of Azov",
    image: "/insight-black-sea-war-risk.webp",
    imageAlt: "A bulk and product carrier under way, viewed toward the accommodation",
    ogImage: "/insight-black-sea-war-risk-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A bulk and product carrier under way, viewed toward the accommodation",
    relatedServiceIds: ["le-expert-witness", "mi-vessel-affiliation-checks", "ms-high-risk-area-transit-planning"],
    keyJudgement:
      "In the observed Black Sea record, where a vessel was, what it was doing, how long it was exposed and the trade it served were more informative than its flag or ownership. Registry and sanctions status did not demonstrate immunity.",
    sections: [
      {
        heading: "The shift of mid-July 2026",
        paragraphs: [
          "This analysis draws on Trident's assessment Merchant Shipping in the Russian Black Sea Region (TRD-MA-2026-07-BSEA), covering the period 15–27 July 2026, and is presented as Trident analysis of that record. The published editorial adaptation is available as [Merchant Shipping in the Russian Black Sea Region](/insights/merchant-shipping-russian-black-sea-region).",
          "The assessment found that a declared Ukrainian maritime campaign extended into the Black Sea on 15 July 2026, and that from that point the observed target set widened from Crimea-facing logistics to mainstream export tonnage lifting cargo for international markets. That widening — not any single strike — is the commercially significant change.",
        ],
      },
      {
        heading: "What the observed record showed",
        paragraphs: [
          "Within the observation window, approximately one tanker in eleven entering the assessed region was struck, and bulk carriers entered the target set for the first time in the period. Tanker presence in the region fell substantially over the same window — itself evidence of how operators were reading the risk.",
          "The characteristic consequence profile was disabling damage rather than sinking. Most struck vessels remained afloat, but with damage to hull, machinery or steering — operationally significant even where it did not produce total loss, because of the immobilisation, towage, salvage and port-of-refuge consequences that follow.",
        ],
      },
      {
        heading: "What did not confer immunity",
        paragraphs: [
          "The record does not support the assumptions operators sometimes rely on. Registry did not demonstrate meaningful protection; casualties were distributed across multiple flags. Sanctions status, ownership quality and vessel age likewise did not demonstrate immunity within the observed set.",
          "For evidence, the implication is important: an argument that a vessel was safe because of its flag, its mainstream ownership or its modern tonnage is not supported by the observed pattern. Exposure has to be reasoned from other factors.",
        ],
      },
      {
        heading: "Where exposure concentrated",
        paragraphs: [
          "Exposure was concentrated around the eastern loading terminals and their approaches and anchorages, but it was not confined there — it extended into open-sea transit corridors serving the region. Time spent stationary, at terminals or at anchor, materially increased exposure, because a static and predictable vessel is a more tractable target than one under way.",
          "Loading delays, terminal suspensions and waiting at anchor therefore did more than cost time; they increased the period a vessel spent in the highest-exposure posture.",
        ],
      },
      {
        heading: "Position, activity, time and trade",
        paragraphs: [
          "Read together, the record points to a location-and-activity model of exposure. Where a vessel was, what it was doing, how long it was exposed and the trade it served were more informative than simplistic assumptions based on flag or ownership.",
          "That is a more demanding basis for an opinion, but a sounder one. It reasons from the vessel's actual movements and posture within the threat geography, using the same vessel-specific discipline as [vessel affiliation checks](/maritime-security/vessel-affiliation-checks) and [independent expert opinion on the threat environment](/legal-evidence/expert-witness).",
        ],
      },
      {
        heading: "Methodology, limits and evidence",
        paragraphs: [
          "The assessment covers a short observation window and a limited casualty population, and its findings should be read as indicative of what was observed within that record rather than as universal rules. The sample should not be overstated, and the detailed casualty identities and tables are held in the underlying report.",
          "Used carefully and with its limits stated, the record is a strong evidential foundation for Black Sea war-risk questions — and a caution against reasoning from flag or ownership alone. The threshold question of whether that exposure amounted to [real danger](/insights/what-is-real-danger-in-a-maritime-war-risk-dispute) remains one for the tribunal.",
        ],
      },
    ],
  },

  {
    slug: "strait-of-hormuz-war-risk-safe-passage-and-charterparty-disputes",
    path: "/insights/strait-of-hormuz-war-risk-safe-passage-and-charterparty-disputes",
    category: "War Risk Analysis",
    title: "Strait of Hormuz: War Risk, Safe Passage and Charterparty Disputes",
    metaTitle:
      "Strait of Hormuz: War Risk, Safe Passage and Charterparty Disputes | Trident",
    standfirst:
      "Route selection, transit arrangements, detention and kinetic threat — and why a retrospective assessment must separate regional tension from the actual risk to the vessel on the ordered voyage.",
    metaDescription:
      "Strait of Hormuz war risk in charterparty disputes — safe passage, route selection, Iranian and Omani waters, detention and interference — and separating regional tension from risk to the particular vessel.",
    dateLabel: "6 August 2026",
    publishedAt: "2026-08-06T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Security", "Maritime Intelligence", "Legal & Evidence"],
    region: "Middle East / Strait of Hormuz",
    image: "/insight-hormuz-war-risk.webp",
    imageAlt: "A merchant tanker in the approaches to the Strait of Hormuz",
    ogImage: "/insight-hormuz-war-risk-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A merchant tanker in the approaches to the Strait of Hormuz",
    relatedServiceIds: ["le-expert-witness", "ms-high-risk-area-transit-planning", "ms-bridge-response-officer"],
    keyJudgement:
      "Regional tension around the Strait of Hormuz is not the same as the risk to a particular vessel on the ordered voyage at the relevant date. Route, direction, profile and transit arrangements often matter more than the headlines.",
    sections: [
      {
        heading: "The Hormuz operating picture",
        paragraphs: [
          "The Strait of Hormuz concentrates a large share of seaborne energy trade into a narrow, politically contested passage between Iranian and Omani waters. That makes it acutely sensitive to escalation, and periods of tension can change the operating picture quickly — through detention and interference, changes to transit arrangements, and the threat of kinetic action.",
          "For a dispute, the task is to establish what that picture actually was on the relevant voyage and date, and how it bore on the specific vessel — the discipline of [maritime expert evidence](/legal-evidence/expert-witness) applied to one of the world's most scrutinised chokepoints.",
        ],
      },
      {
        heading: "Safe passage and route selection",
        paragraphs: [
          "Transit of the strait is not a single option. Route selection between the northern and southern approaches, the use of Omani territorial waters, and the status of the traffic-separation scheme all shape a vessel's exposure, and the choices realistically available can change with conditions.",
          "A retrospective assessment has to reconstruct the options as they stood at the time: which routes were open, what guidance applied, and what a competent operator could reasonably have selected — the same planning discipline Trident applies through [high-risk area transit planning](/maritime-security/high-risk-area-transit-planning).",
        ],
      },
      {
        heading: "Vessel direction and profile",
        paragraphs: [
          "Direction and profile matter in the strait as much as anywhere. Inbound and outbound transits encounter the sensitive waters differently, and a vessel's flag, ownership, apparent affiliation and recent trading pattern can affect how it is likely to be perceived by the authorities and forces controlling the passage.",
          "Two vessels transiting on the same day can therefore face materially different risk of detention or interference, which is why the assessment has to be vessel-specific rather than generic to the strait.",
        ],
      },
      {
        heading: "Guidance, detention and kinetic threat",
        paragraphs: [
          "The evidential picture draws on contemporaneous government and naval guidance, the record of detentions and interference with commercial shipping, and any credible kinetic threat at the time. These sources record how the risk was understood and acted upon as events unfolded, rather than in retrospect.",
          "Where a vessel is boarded, detained or delayed, the operational and security dimensions can also engage onboard response and shore liaison — the role of a [Bridge Response Officer](/maritime-security/bridge-response-officer) — which may itself be relevant to what was reasonable at the time.",
        ],
      },
      {
        heading: "Commercial behaviour as evidence",
        paragraphs: [
          "How the fleet behaved is evidence in itself. AIS-derived traffic through the strait — whether transits continued, slowed, or shifted between routes — shows how operators were reading the risk, and suppressed or re-routed traffic can corroborate a genuinely elevated environment.",
          "Read alongside war-risk pricing and official guidance, traffic behaviour helps separate a genuinely dangerous period from a merely tense one.",
        ],
      },
      {
        heading: "Regional tension is not risk to the vessel",
        paragraphs: [
          "The central discipline is to distinguish regional geopolitical tension from the actual risk to the vessel on the ordered voyage at the relevant date. Headlines describe the region; the evidence has to describe the ship. Where the dispute also involves payment for passage, the sanctions dimension is addressed separately in [paying Iran for Strait of Hormuz passage](/insights/paying-iran-for-strait-of-hormuz-passage-sanctions-and-shipping-risk).",
        ],
      },
    ],
  },

  {
    slug: "paying-iran-for-strait-of-hormuz-passage-sanctions-and-shipping-risk",
    path: "/insights/paying-iran-for-strait-of-hormuz-passage-sanctions-and-shipping-risk",
    category: "Sanctions Analysis",
    title: "Paying Iran for Strait of Hormuz Passage: Sanctions and Shipping Risk",
    metaTitle:
      "Paying Iran for Strait of Hormuz Passage: Sanctions and Shipping Risk | Trident",
    standfirst:
      "Pay, refuse or divert — and the sanctions, detention, delay, charterparty and insurance exposure that each choice carries. This is situational analysis, not legal advice.",
    metaDescription:
      "The sanctions and shipping-risk dilemma of paying Iran for Strait of Hormuz passage — U.S. primary prohibition, secondary-sanctions exposure and EU listed-entity analysis — and the pay, refuse or divert decision.",
    dateLabel: "18 August 2026",
    publishedAt: "2026-08-18T09:00:00Z",
    author: "Trident Risk & Advisory",
    expertise: ["Maritime Intelligence", "Legal & Evidence"],
    region: "Middle East / Strait of Hormuz",
    image: "/insight-hormuz-transit-fees.webp",
    imageAlt: "A commercial tanker in the Gulf near the Strait of Hormuz",
    ogImage: "/insight-hormuz-transit-fees-og.webp",
    ogImageType: "image/webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: "A commercial tanker in the Gulf near the Strait of Hormuz",
    relatedServiceIds: ["le-expert-witness", "ms-high-risk-area-transit-planning", "mi-sanctions-exposure-analysis"],
    keyJudgement:
      "A demand for a Hormuz transit fee is a sanctions event before it is a commercial one. Pay, refuse and divert each carry distinct sanctions, detention, delay, charterparty and insurance consequences, and the analysis is recipient-specific.",
    sections: [
      {
        heading: "The operational dilemma",
        paragraphs: [
          "Where passage through the Strait of Hormuz is made conditional on a payment or guarantee to Iranian actors, an operator faces three broad choices — pay, refuse and attempt passage, or divert or postpone — and none is cost-free. This analysis sets out the exposure attached to each; it is situational analysis, not legal or sanctions advice, and any specific decision needs transaction-specific legal review.",
          "The starting point is that a demand for a Hormuz transit fee should be treated as a sanctions event requiring recipient-level screening before it is treated as an ordinary port or navigation charge. Trident's detailed treatment is published as [Strait of Hormuz Transit Fees & Sanctions Exposure](/insights/strait-of-hormuz-transit-fees-sanctions-exposure).",
        ],
      },
      {
        heading: "U.S. persons",
        paragraphs: [
          "For U.S. persons — including U.S. companies, U.S. financial institutions and U.S.-owned or -controlled foreign entities — payments to, or guarantees from, the Government of Iran or the IRGC for safe passage are not authorised absent an applicable OFAC authorisation. OFAC guidance has been explicit that this extends to receiving safe-passage services even where no payment is made.",
          "The risk is also payment-method neutral: fiat, digital assets, offsets, in-kind consideration and nominally charitable donations may all create exposure where they are mechanisms for obtaining Iranian safe passage. For a U.S. person, the baseline is prohibition unless a licence applies.",
        ],
      },
      {
        heading: "Non-U.S. persons",
        paragraphs: [
          "Non-U.S. persons are not subject to the same comprehensive U.S. primary prohibition merely because they are foreign. The exposure is different in character: secondary sanctions. OFAC has warned that safe-passage payments create significant secondary-sanctions exposure, and dealings with designated or blocked Iranian actors can carry consequences for foreign persons and financial institutions.",
          "Whether a given transaction is “significant” is assessed on the totality of circumstances — size, frequency, nature, management awareness, nexus to blocked persons and any deceptive practices. A small payment is not automatically safe, and indirect or disguised routing can increase, not reduce, the risk.",
        ],
      },
      {
        heading: "EU exposure",
        paragraphs: [
          "The EU position is structurally different again. The EU does not impose a blanket embargo on all dealings with Iran; the critical question is whether funds or economic resources are made available, directly or indirectly, to or for the benefit of a listed person or entity, or whether another restriction applies.",
          "Where a toll is paid to a listed entity — or through an intermediary where the funds are for its benefit — an EU person can face a direct asset-freeze prohibition absent an authorised derogation. It does not follow that every Iran-related payment is prohibited; a payment to an unlisted recipient requires separate analysis of the legal and beneficial recipient, the intermediary and the bank.",
        ],
      },
      {
        heading: "Non-U.S./non-EU operators",
        paragraphs: [
          "A UAE, Asian or other non-U.S./non-EU operator is not automatically bound by U.S. or EU primary sanctions simply because those regimes exist. But practical exposure remains, and it should not be assumed away: U.S. dollar clearing, a U.S. or EU bank, insurer, P&I club, parent or listed counterparty can all bring a transaction within reach, and U.S. secondary sanctions can target foreign persons without primary jurisdiction over the underlying deal.",
          "For a shipowner, flag and place of incorporation are therefore insufficient answers. Ownership and control, payment currency, correspondent banks, insurers, charterparty parties and the identity of the Iranian recipient all bear on the exposure.",
        ],
      },
      {
        heading: "The consequences of each choice, and where evidence fits",
        paragraphs: [
          "Each option carries a different profile. Paying risks sanctions and enforcement exposure and may not remove the underlying risk. Refusing and attempting passage risks detention, interference or a kinetic security exposure. Diverting or postponing may reduce sanctions exposure but creates delay, deviation cost and charterparty, cargo and insurance consequences. Using an intermediary does not remove sanctions risk where the payment is indirectly for a blocked person, and concealment can aggravate it.",
          "Because those consequences reach into charterparty performance and insurance, they frequently become matters of dispute. Trident provides [expert evidence on the operational risk picture](/legal-evidence/expert-witness) — the threat and operating environment, and the reasonableness of the decisions taken — alongside, and distinct from, the legal and sanctions advice that others provide. The war-risk dimension of the same voyage is addressed in [Strait of Hormuz: war risk, safe passage and charterparty disputes](/insights/strait-of-hormuz-war-risk-safe-passage-and-charterparty-disputes).",
        ],
      },
    ],
  },

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
