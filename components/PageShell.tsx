import { ReactNode } from "react";
import SiteBar from "./SiteBar";
import SiteFooter from "./SiteFooter";

// The shared chrome for every inner page: the fixed blueprint-grid
// background, the sticky top bar, the page content, and the footer.
// Pages pass their content as children and (optionally) a custom footer
// meta line — the Contact page uses the legal company line there.
type Props = {
  children: ReactNode;
  footerMeta?: string;
};

export default function PageShell({ children, footerMeta }: Props) {
  return (
    <>
      <div className="bp-grid" aria-hidden="true" />
      <SiteBar />
      <div className="shell">
        <main className="page wrap">{children}</main>
        <SiteFooter meta={footerMeta} />
      </div>
    </>
  );
}
