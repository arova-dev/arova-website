import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Eyebrow from "@/components/Eyebrow";
import { projects } from "@/content/projects";
import { regions } from "@/content/regions";

export const metadata: Metadata = {
  title: "Where we do it",
  description:
    "Rooted in North Devon and building across all of Devon and Cornwall — local trades, local knowledge, and a team on site within the hour.",
};

// Spread the row entrance animation: first two rows use d3, the rest d4.
function rowDelay(i: number) {
  return `d${Math.min(4, 3 + Math.floor(i / 2))}`;
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
        Rooted in <strong>North Devon</strong> and building across{" "}
        <strong>all of Devon and Cornwall</strong> — local trades, local
        knowledge, and a team on site within the hour.
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

      {/* The count is derived from the project list, not typed by hand */}
      <div className="subhead anim d3">
        <div className="subhead__t">Selected work</div>
        <div className="subhead__n">{projects.length} projects</div>
      </div>

      {/* Case studies — photo-led rows, built from content/projects.ts */}
      <div className="case-rows">
        {projects.map((project, i) => (
          <article key={project.slug} className={`case-row anim ${rowDelay(i)}`}>
            <div className={`case-row__media case-row__media--${project.layout}`}>
              {project.layout === "stack"
                ? project.images.map((img) => (
                    <figure className="shot" key={img.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} loading="lazy" />
                      {img.caption && (
                        <figcaption className="shot__cap">
                          <b>{img.caption.label}</b> · {img.caption.meta}
                        </figcaption>
                      )}
                    </figure>
                  ))
                : project.images.map((img) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                  ))}
            </div>
            <div className="case-row__body">
              <div className={`case__status status status--${project.status}`}>
                <span className="status__dot" />
                {project.statusLabel}
              </div>
              <div className="case__loc">
                {project.postcode} · {project.place}
              </div>
              <h3 className="case__name">{project.name}</h3>
              <div className="case__meta">
                <span>{project.area}</span>
                <span>{project.duration}</span>
              </div>
              <p className="case__desc">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
