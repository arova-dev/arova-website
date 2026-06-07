import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "A young company, not young builders — a founding team with over six decades of combined experience on high-end residential projects, rooted in North Devon.",
};

// The three pillars and four proof stats. Copy is reused verbatim from the
// design reference.
const pillars = [
  {
    num: "01",
    keyword: "Craft",
    claim: "Detail that shows up at handover, and ten years later.",
    detail:
      "Hand-finished joinery, honest materials, no visible compromises. Every junction drawn before it is built.",
  },
  {
    num: "02",
    keyword: "Communication",
    claim: "Weekly walkthroughs. Daily photo log. Reply within hours.",
    detail:
      "You are never more than 24 hours from knowing what we know. Every slip, every change, every choice — flagged as it happens.",
  },
  {
    num: "03",
    keyword: "Certainty",
    claim: "Fixed-price contract. Dates you can plan around.",
    detail:
      "The handover date you sign for is the date we deliver. We price risk properly so you do not have to absorb it later.",
  },
];

const stats = [
  { num: "60", unit: "+", label: "Years of combined experience" },
  { num: "12–24", unit: "mo", label: "Typical build duration" },
  { num: "£1–8", unit: "m", label: "Project value range" },
  { num: "100", unit: "%", label: "Fixed-price contracts" },
];

export default function WhoWeArePage() {
  return (
    <PageShell>
      <Eyebrow num="01" label="Who we are" />
      <h1 className="page-title anim d1">
        A young company.
        <br />
        Not young builders<span className="stop">.</span>
      </h1>
      <p className="lead anim d2">
        The founding team carries{" "}
        <strong>over six decades of combined experience</strong> on high-end
        residential projects — now rooted in North Devon and building with local
        trades we have known for years.
      </p>

      <div className="pillars">
        {pillars.map((p, i) => (
          <div key={p.num} className={`pillar anim d${i + 2}`}>
            <div className="pillar__num">{p.num}</div>
            <div className="pillar__k">{p.keyword}</div>
            <div className="pillar__t">{p.claim}</div>
            <div className="pillar__d">{p.detail}</div>
          </div>
        ))}
      </div>

      <div className="stat-row anim d4">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__num">
              {s.num}
              <span className="u">{s.unit}</span>
            </div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
