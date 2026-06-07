"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import Wordmark from "./Wordmark";
import ArrowRight from "./ArrowRight";

// The sticky top bar shown on every inner page (the home page has no bar).
// On wide screens: brand + three text links + a cyan Contact button.
// On narrow screens (<=760px): brand + Contact button + a menu toggle that
// opens a calm full-screen overlay — the production mobile nav.
export default function SiteBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Treat a route as active if the path starts with its href.
  const isActive = (href: string) =>
    pathname === href || pathname === href + "/";

  // Close the menu whenever the route changes (after a link tap).
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Let the Escape key close the overlay, and lock body scroll while open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const contact = nav.find((n) => n.key === "contact")!;
  const textLinks = nav.filter((n) => n.key !== "contact");

  return (
    <header className="bar">
      <div className="bar__inner">
        <Link className="bar__brand" href="/" aria-label="Arova — home">
          <Wordmark />
        </Link>

        <nav className="bar__nav" aria-label="Primary">
          {textLinks.map((item) => (
            <Link
              key={item.key}
              className="bar__link"
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <Link
            className="btn-cyan"
            href={contact.href}
            aria-current={isActive(contact.href) ? "page" : undefined}
          >
            {contact.label}
            <ArrowRight size={18} />
          </Link>

          <button
            type="button"
            className="bar__toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu__head">
            <Link className="bar__brand" href="/" aria-label="Arova — home">
              <Wordmark />
            </Link>
            <button
              type="button"
              className="bar__toggle"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu__links" aria-label="Primary">
            {nav.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
