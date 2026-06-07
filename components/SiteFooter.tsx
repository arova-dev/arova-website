import Link from "next/link";
import { nav, site } from "@/content/site";
import Wordmark from "./Wordmark";

// The slim shared footer. Most pages show the location meta line; the
// Contact page shows the legal company line instead (pass `meta`).
type Props = {
  meta?: string;
};

export default function SiteFooter({ meta }: Props) {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <Wordmark className="foot__brand" />
        <nav className="foot__links" aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.key} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="foot__meta">{meta ?? site.footerMeta}</span>
      </div>
    </footer>
  );
}
