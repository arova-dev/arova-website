import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Eyebrow from "@/components/Eyebrow";
import { projects, totalDelivered } from "@/content/projects";
import { regions } from "@/content/regions";

export const metadata: Metadata = {
  title: "Where we do it",
  description:
    "Based in Barnstaple, building the length of the South West — from the North Devon coast and the edge of Exmoor down to the Cornish coast.",
};

// Spread the row entrance animation: rows 1–2 use d2, 3–4 d3, the rest d4.
function rowDelay(i: number) {
  return `d${Math.min(4, 2 + Math.floor(i / 2))}`;
}

export default function WhereWeDoItPage() {
  return (
    <PageShell>
      <Eyebrow num="03" label="Where we do it" />
      <h1 className="page-title anim d1">
        Devon &amp;
        <br />
        Cornwall<span className="stop">.</span>
      </h1>
      <p className="lead anim d2">
        Based in <strong>Barnstaple</strong>, building the length of the South
        West — from the North Devon coast and the edge of Exmoor, down through
        the moors to the Cornish coast. Local trades, local knowledge, every
        site within reach.
      </p>

      {/* Coverage chips — built from content/regions.ts */}
      <div className="coverage anim d2">
        <div className="coverage__k">Areas we build</div>
        <div className="chips">
          {regions.map((region) => (
            <span
              key={region.name}
              className={`chip${region.home ? " chip--base" : ""}`}
            >
              {region.name}
            </span>
          ))}
        </div>
      </div>

      {/* The count on the right is derived from the project list, not typed by hand */}
      <div className="subhead anim d3">
        <div className="subhead__t">Selected homes</div>
        <div className="subhead__n">
          {projects.length} of {totalDelivered} delivered
        </div>
      </div>

      {/* Project rows — built from content/projects.ts. Not clickable yet:
          individual case-study pages are a planned next step. */}
      <div className="locs">
        {projects.map((project, i) => (
          <div key={project.slug} className={`loc anim ${rowDelay(i)}`}>
            <div>
              <div className="loc__code">{project.postcode}</div>
              <div className="loc__place">{project.place}</div>
            </div>
            <div className="loc__name">{project.name}</div>
            <div className="loc__meta">
              <span>{project.area}</span>
              <span>{project.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
