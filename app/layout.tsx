import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter_Tight, JetBrains_Mono } from "next/font/google";

// Global styles: design tokens first, then shared chrome, then home styles.
import "@/styles/arova-tokens.css";
import "@/styles/arova-site.css";
import "@/styles/home.css";

// Fonts are self-hosted by next/font (no external request at runtime, no
// layout shift). Each exposes a CSS variable that the token file reads.

// Barlow Condensed — the display/wordmark face (static weights).
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

// Inter Tight — body text (variable font, full weight range).
const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

// JetBrains Mono — numbers, labels, codes (variable font).
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arova — Excellence in Construction",
    template: "%s — Arova",
  },
  description:
    "Arova Ltd — high-end residential construction in North Devon, building bespoke family homes across Devon and Cornwall.",
  metadataBase: new URL("https://arova.net"),
  openGraph: {
    title: "Arova — Excellence in Construction",
    description:
      "High-end residential construction in North Devon, building across Devon and Cornwall.",
    siteName: "Arova",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#151B3D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
