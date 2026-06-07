import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "We design and build bespoke new-build family homes, run on the same eight phases every time — from brief and feasibility through to aftercare.",
};

// The eight build phases. Copy reused verbatim from the design reference.
// The `delay` class spreads the entrance animation across the rows.
const phases = [
  {
    num: "01",
    name: "Brief & feasibility",
    desc: "Weeks spent listening to you, walking the site, and pressure-testing the ambition against planning, budget and programme.",
    dur: "6–8 wks",
    delay: "d2",
  },
  {
    num: "02",
    name: "Architecture & design",
    desc: "Architect-led concept through technical design. Every junction drawn. Material samples on the table before decisions are made.",
    dur: "4–6 mo",
    delay: "d2",
  },
  {
    num: "03",
    name: "Planning & pre-construction",
    desc: "Planning submission, neighbour consultation, party wall, building control. Long-lead items ordered the week contracts are signed.",
    dur: "3–5 mo",
    delay: "d3",
  },
  {
    num: "04",
    name: "Enabling works & shell",
    desc: "Demolition, dig, foundations, frame, envelope. Weatherproof and watertight before winter, always.",
    dur: "4–6 mo",
    delay: "d3",
  },
  {
    num: "05",
    name: "First & second fix",
    desc: "Services, plaster, joinery, stone, tiling. This is where the brief becomes the house. Weekly walkthrough, daily photo log.",
    dur: "5–7 mo",
    delay: "d3",
  },
  {
    num: "06",
    name: "Finishes & commissioning",
    desc: "Decoration, landscaping, final furnishings. Every system tested, every setting dialled in before you see it.",
    dur: "6–8 wks",
    delay: "d4",
  },
  {
    num: "07",
    name: "Snagging & handover",
    desc: "Your punch list, not ours. We stay until every item is closed or explicitly waived. Keys, manuals, walkthrough.",
    dur: "2–4 wks",
    delay: "d4",
  },
  {
    num: "08",
    name: "Aftercare",
    desc: "Twenty-four-month defects liability. A direct line to the site manager who built the house — not a call centre.",
    dur: "24 mo",
    delay: "d4",
  },
];

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <Eyebrow num="02" label="What we do" />
      <h1 className="page-title anim d1">
        High-end homes.
        <br />
        Delivered to the brief<span className="stop">.</span>
      </h1>
      <p className="lead anim d2">
        We design and build bespoke new-build family homes.{" "}
        <strong>A year or more, start to finish</strong> — run on the same eight
        phases, every time. The calm comes from the repetition.
      </p>

      <div className="phases">
        {phases.map((phase) => (
          <div key={phase.num} className={`phase anim ${phase.delay}`}>
            <div className="phase__num">{phase.num}</div>
            <div>
              <div className="phase__name">{phase.name}</div>
              <div className="phase__desc">{phase.desc}</div>
            </div>
            <div className="phase__dur">{phase.dur}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
