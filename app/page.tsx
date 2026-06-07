import Link from "next/link";
import { nav } from "@/content/site";
import Wordmark from "@/components/Wordmark";
import ArrowRight from "@/components/ArrowRight";

// Home ("/") — the opening statement. No top bar by design: the wordmark
// fills the viewport, and the four "flow" panels are the navigation.
export default function HomePage() {
  return (
    <main className="stage">
      <section className="hero">
        <h1 className="wordmark">
          <Wordmark />
        </h1>
        <p className="tagline">Excellence in Construction</p>
      </section>

      <nav className="flow" aria-label="Primary">
        {nav.map((item, i) => {
          const isCta = item.key === "contact";
          return (
            <Link
              key={item.key}
              className={`flow__item${isCta ? " flow__item--cta" : ""}`}
              href={item.href}
            >
              <span className="flow__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="flow__label">{item.label}</span>
              <span className="flow__arrow">
                <ArrowRight size={22} />
              </span>
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
