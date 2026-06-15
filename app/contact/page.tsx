import type { Metadata } from "next";
import { Fragment } from "react";
import PageShell from "@/components/PageShell";
import Eyebrow from "@/components/Eyebrow";
import ArrowRight from "@/components/ArrowRight";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send us the brief. We take on a small number of projects each year and reply within two working days.",
};

// Pre-filled "Email the studio" link — opens the visitor's mail app with a
// subject and a gentle prompt already typed in.
const enquirySubject = "New project enquiry";
const enquiryBody =
  "A few lines about the site, the ambition and the timeline:\n\n";
const emailStudioHref = `mailto:${site.email}?subject=${encodeURIComponent(
  enquirySubject
)}&body=${encodeURIComponent(enquiryBody)}`;

export default function ContactPage() {
  const footerMeta = `© ${site.copyrightYear} ${site.companyName} · ${site.companyNumber}`;

  return (
    <PageShell footerMeta={footerMeta}>
      <Eyebrow num="04" label="Contact" />
      <h1 className="page-title anim d1">
        Send us the brief<span className="stop">.</span>
      </h1>
      <p className="lead anim d2">
        We take on a small number of projects each year. Tell us about the site,
        the ambition and the timeline —{" "}
        <strong>we reply within two working days</strong>. If we are not the
        right fit, we will say so, and point you to someone who is.
      </p>

      <div className="contact-grid">
        <div>
          <a className="btn-cyan lg anim d2" href={emailStudioHref}>
            Email the studio
            <ArrowRight size={26} />
          </a>

          <div className="contact-card anim d3">
            <div className="contact-card__k">Email</div>
            <a className="contact-card__v" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <div className="contact-card anim d3">
            <div className="contact-card__k">Call</div>
            <ul className="call-list">
              {site.phones.map((phone) => (
                <li className="call-list__item" key={phone.href}>
                  <a className="contact-card__v" href={`tel:${phone.href}`}>
                    {phone.display}
                  </a>
                  <span className="call-list__name">{phone.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="contact-card anim d4">
            <div className="contact-card__k">Studio</div>
            <div className="contact-card__v">{site.address.label}</div>
            <div className="contact-card__sub">
              {site.address.lines.map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i < site.address.lines.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="contact-card anim d5">
            <div className="contact-card__k">Hours</div>
            <div className="contact-card__v">{site.hours.value}</div>
            <div className="contact-card__sub">{site.hours.sub}</div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
