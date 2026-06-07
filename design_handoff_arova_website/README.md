# Handoff: AROVA Website

> **Excellence in Construction.** A simple, bold, confident marketing site for Arova Ltd. — a high-end residential construction company in North Devon, working across Devon & Cornwall.

---

## Overview

This is a small marketing site whose entire job is **confidence**. It is the backdrop for an in-person consultation with architects: a builder walks an architect through it on a laptop or tablet, then breaks off to show real project assets and tell stories. So the site is deliberately **sparse, large-scale and typographic** — it states who Arova is in as few words as possible and leaves room for the conversation. The brief, verbatim from the client:

> "Simple. Bold. Confident. It should shout that we really know what we are doing — almost a 'who do these guys think they are' type confidence."

It is **not** a content-heavy brochure site. Resist the urge to add sections, filler copy, stock imagery, testimonials sliders, or decorative gradients. Every element must earn its place. When in doubt, remove.

There are **5 views**:

1. **Home** — a full-viewport statement: the wordmark `AROVA.` with a cyan full stop, the tagline, and a 4-panel navigation "flow".
2. **Who we are** — three pillars + proof stats.
3. **What we do** — the eight-phase build process.
4. **Where we do it** — region coverage + an **editable list of project case studies** (see the dedicated section below — this is the one piece of real CMS work in the build).
5. **Contact** — a bold cyan email CTA + studio details.

---

## About the design files

The files in `reference/` are **design references created in HTML/CSS** — prototypes showing the intended look, type, spacing, motion and behaviour. **They are not production code to ship as-is.**

Your task is to **recreate these designs in a real, maintainable codebase**, using its established patterns. If there is no existing codebase, **Next.js (App Router) + plain CSS (or CSS Modules) is the recommended choice** — the design is static, content-light, and SEO matters for a marketing site, so a static-export Next or Astro site is ideal. Avoid pulling in a heavy UI kit; this design is hand-tuned and token-driven, and a component library would fight it.

Reference files:

| File | What it is |
|---|---|
| `reference/index.html` | Home (statement) view — standalone |
| `reference/who-we-are.html` | Who we are — standalone |
| `reference/what-we-do.html` | What we do — standalone |
| `reference/where-we-do-it.html` | Where we do it — standalone |
| `reference/contact.html` | Contact — standalone |
| `reference/arova-website.html` | **All 5 views combined into one file** with hash-based client navigation. This is the closest reference to the final multi-page site — read it first. |
| `reference/assets/arova-tokens.css` | **The design system tokens.** Copy these verbatim — colors, type scale, spacing, radii, shadows, motion. Do not invent values. |
| `reference/assets/arova-site.css` | All shared chrome + component styles (top bar, page hero, stats, pillars, phase list, project list, contact, footer). |

In the combined reference, the home view is a separate full-screen "stage"; the four inner views share a sticky top bar + footer. In the real build these become **routed pages** (`/`, `/who-we-are`, `/what-we-do`, `/where-we-do-it`, `/contact`), not hash views — the hash router was only so the prototype could ship as one file.

---

## Fidelity

**High-fidelity.** Final colors, typography, spacing, motion and copy are all decided and present in the reference files. Recreate pixel-faithfully. Pull the exact values from `arova-tokens.css` and `arova-site.css` rather than eyeballing.

---

## Brand & spirit — the rules that matter most

- **Two colors + neutrals.** Arova Navy is the surface; Arova Cyan is an **accent only** (CTAs, the full stop, key numbers, active states, hover lines). If cyan covers more than ~10% of any view, it's too much.
- **The full stop is the logo.** `AROVA.` always renders with a **cyan** full stop on a white wordmark. No icon, no mark, no trefoil above it — just the wordmark and its cyan stop. Reuse the same `Arova.` lockup (white text, cyan `.`) in the top bar and footer.
- **Type is the design.** Huge condensed display type (Barlow Condensed) carries every screen. Body is Inter Tight; numbers/labels/codes are JetBrains Mono.
- **Sentence case everywhere**, except the wordmark `AROVA`, the tagline `EXCELLENCE IN CONSTRUCTION`, eyebrows and button labels, which are uppercase with wide tracking.
- **Specifics over adjectives.** Numbers, durations, m², postcodes, phase names — these carry the tone. Never "amazing homes"; always "486 m², 18 months".
- **No emoji. No exclamation marks** in body copy. No drop shadows on the logo. No warm colors, no pastels, no gradient-for-gradient's-sake.
- **Motion is precise, never playful.** Short durations, no bounce, no overshoot — "a well-oiled drawer, not a game".

---

## Design tokens

Copy `reference/assets/arova-tokens.css` directly. Key values reproduced here for convenience.

### Color
```
/* Navy — primary surface */
--arova-navy-900: #151B3D;   /* deepest — primary background */
--arova-navy-800: #1E2650;   /* header/footer surfaces, hero depth */
--arova-navy-700: #2A3468;   /* elevated / hover surfaces */
--arova-navy-600: #3A4682;   /* borders on navy  (a.k.a. --border-navy) */

/* Cyan — ACCENT ONLY */
--arova-cyan-600: #0891D1;   /* pressed */
--arova-cyan-500: #16A6E8;   /* primary accent / CTA fill */
--arova-cyan-400: #2FBFF5;   /* default cyan — the full stop, hairlines, numbers */
--arova-cyan-300: #5FD2FF;   /* hover highlight */

/* Neutrals (cool, slightly blue) */
--arova-ink-900: #0E1226; --arova-ink-700: #3B4160; --arova-ink-500: #7B83A6;
--arova-ink-300: #CCD0DF; --arova-ink-200: #E3E6EF; --arova-ink-100: #F1F3F8;
--arova-white: #FFFFFF;

/* Text on navy */
--fg-on-navy:   #FFFFFF;
--fg-on-navy-2: rgba(255,255,255,0.72);
--fg-on-navy-3: rgba(255,255,255,0.50);

/* Semantic (muted, not neon) */
--arova-success:#1F8A5A; --arova-warning:#C68A0E; --arova-danger:#C0392B;
```

### Typography
```
--font-display: 'Barlow Condensed', 'Oswald', 'Impact', sans-serif;  /* wght 400–800 */
--font-body:    'Inter Tight', system-ui, sans-serif;                 /* wght 400–700 */
--font-mono:    'JetBrains Mono', 'SF Mono', Menlo, monospace;        /* wght 400–600 */
```
Load from Google Fonts (families: Barlow Condensed, Inter Tight, JetBrains Mono) — the `@import` is at the top of `arova-tokens.css`. In Next, prefer `next/font/google` for the same three families.

Type scale (rem): 12·13·14·15·16·18·20·24·30·36·48·60·72·96 → `--fs-12 … --fs-96`.
Line heights: `--lh-tight:1.05 · --lh-snug:1.2 · --lh-normal:1.5 · --lh-relaxed:1.7`.
Tracking: `--tracking-tagline:0.22em · --tracking-eyebrow:0.14em · --tracking-button:0.06em · --tracking-tight:-0.02em`.
**Only ever track uppercase text.** Never letter-space sentence-case body copy.

### Spacing — 4px base
`--sp-1:4 · 2:8 · 3:12 · 4:16 · 5:20 · 6:24 · 8:32 · 10:40 · 12:48 · 16:64 · 20:80 · 24:96 · 32:128`. Snap to these. No odd values.

### Radius
`--r-1:2 · r-2:4 (inputs/buttons) · r-4:10 (cards) · r-5:14 · r-full:999 (chips only)`. Data tables/chrome use 0.

### Shadows (cool, navy-based, never black)
`--shadow-sm/md/lg/xl` and `--shadow-glow-cyan: 0 0 0 4px rgba(47,191,245,0.18)` (focus rings only).

### Motion
```
--ease-standard: cubic-bezier(0.2, 0.6, 0.2, 1);
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
--dur-fast: 120ms;  --dur-base: 180ms;  --dur-slow: 320ms;
```
Hover: lift shadow one step / darken navy ~8% / brighten cyan ~10% — **never scale**. Press: translateY(1px). Focus: 2px cyan ring + 2px offset, always visible.

---

## Global chrome

### Layout
- Content max-width **1280px**, centered. Page side padding `clamp(24px, 5vw, 80px)` (`.wrap`).
- Background on inner pages: a fixed full-viewport navy gradient (`--arova-navy-900 → 800 → 900`, 180° only) with a **very faint blueprint grid** overlay (48px cells, `rgba(255,255,255,0.03)` lines), radially masked so it fades out. See `.bp-grid` in `arova-site.css`. Subtle — it should read as texture, not decoration.
- A **3px solid cyan hairline** runs across the very top of every page (top border of the bar / the home stage).

### Top bar (inner pages) — `.bar`
- Sticky, 64px tall, `rgba(14,18,38,0.72)` + `backdrop-filter: blur(10px)`, 1px navy bottom border, 3px cyan top border.
- Left: `Arova.` brand lockup (Barlow Condensed 800, `--fs-24`, white with cyan stop) → links home.
- Right: three text links (`Who we are`, `What we do`, `Where we do it`) + a **solid cyan Contact button**. Links are Barlow Condensed 600 uppercase, `--fg-on-navy-2`, with a cyan underline that wipes in on hover (`transform: scaleX(0→1)`, origin left). Active page link is full-white with the underline shown (`aria-current="page"`).
- **Home has no top bar** — it is its own full-screen statement.
- Below 760px the three text links hide (leave brand + Contact button). A production build should add a proper mobile menu (drawer or full-screen) — the prototype just hides them.

### Footer — `.foot`
Slim, 1px navy top border. Left: `Arova.` wordmark. Center: the four nav links (uppercase, hover→cyan). Right: a mono meta line (`Barnstaple · North Devon` on most pages; `© 2026 Arova Ltd · 12847291` on Contact). Hidden links collapse below 760px.

### Buttons
- **`.btn-cyan`** — solid `--arova-cyan-500` fill, white uppercase Barlow Condensed 700, `--tracking-button`, radius `--r-2` (4px), arrow icon. Hover → `--arova-cyan-400` + cyan glow shadow. Active → `--arova-cyan-600` + translateY(1px). A `.lg` modifier scales it up for the Contact page hero CTA.
- **`.btn-ghost`** — transparent, 1px navy border, white text; hover border→cyan + navy-700 fill.

### Icons
Lucide, 1.75px stroke, rounded joins, 24px grid, inline SVG. The only icon used throughout is the **arrow-right** (`M5 12h14M13 6l6 6-6 6`). Keep it inline/tree-shaken; do not add an icon font.

### Entrance animation (important — get this right)
Content slides up on load: `@keyframes rise { from { transform: translateY(26px) } to { transform: none } }`, `700ms var(--ease-out)`, staggered via delays (`.d1 60ms · .d2 180ms · .d3 300ms · .d4 420ms · .d5 540ms`).
**Animate `transform` only — never opacity. Opacity must always be 1.** This is deliberate: a transform-only entrance still shows all content if the animation never advances (background tab, screenshot, print/PDF, JS disabled). An opacity fade-in that depends on JS or a transition completing will leave the page blank in those contexts — do not reintroduce one. Gate the whole thing behind `@media (prefers-reduced-motion: no-preference)`.

---

## Screens / views

### 1 — Home (`/`)
**Purpose:** The opening statement. One look should communicate confidence and competence.
**Layout:** Full viewport (`min-height: 100svh`), flex column. Hero fills the center; the flow nav sits at the bottom.
- **Background:** navy gradient + blueprint grid (radially masked, centered ~42%) + 3px cyan hairline at top.
- **Wordmark:** `Arova.` — Barlow Condensed **800**, uppercase, `font-size: clamp(5.5rem, 27vw, 23rem)`, `line-height: 0.84`, `letter-spacing: -0.015em`, white with the `.` in `--arova-cyan-400`. Centered. It should feel almost too big.
- **Tagline:** `Excellence in Construction` — Barlow Condensed 500, uppercase, `clamp(0.62rem, 1.9vw, 1.35rem)`, `letter-spacing: 0.22em`, white, centered under the wordmark (add `text-indent: 0.22em` so the trailing tracking stays optically centered).
- **Flow nav:** a full-width row of **4 equal panels**, separated by 1px navy borders, sitting on `rgba(14,18,38,0.35)` + blur, with a 1px navy top border.
  - Each panel: a mono number (`01`–`04`, cyan), a Barlow Condensed 600 uppercase label, and a right-aligned arrow. Labels: `Who we are`, `What we do`, `Where we do it`, `Contact`.
  - Hover (panels 01–03): navy-700 fill + a 3px cyan line wipes in along the bottom (`scaleX`), arrow slides right + turns cyan.
  - **Panel 04 (Contact) is a solid cyan panel** (`--arova-cyan-500` fill, white label, white-ish number/arrow) — the one clear call to action. Hover → cyan-400.
  - Panels link to the four routes. Below 720px they stack full-width (borders become top borders).

### 2 — Who we are (`/who-we-are`)
**Purpose:** Establish credibility fast.
- **Eyebrow:** `01 · Who we are` — mono cyan number + `--fg-on-navy-2` label, followed by a 1px navy rule that fills the remaining width (flex + `::after`). This eyebrow pattern repeats on every inner page (`02`, `03`, `04`).
- **Title (`.page-title`):** "A young company.<br>Not young builders**.**" — Barlow Condensed 800, uppercase, `clamp(3rem, 8.5vw, 7.5rem)`, `line-height: 0.92`, cyan full stop, `text-wrap: balance`.
- **Lead (`.lead`):** Inter Tight, `clamp(18px, 2.1vw, 30px)`, `--fg-on-navy-2`, max-width 60ch. Key phrase ("over six decades of combined experience") in white `<strong>`.
- **Pillars:** 3-column grid (collapses to 1 column < 860px). Each pillar has a 2px cyan top border, a mono number (`01`–`03`), a big Barlow Condensed uppercase keyword (`Craft` / `Communication` / `Certainty`), a bold one-line claim, and a muted supporting paragraph. Copy is in `who-we-are.html` — reuse verbatim.
- **Stat row:** 4-up grid (2-up < 760px), 1px navy gridlines. Each cell: a huge Barlow Condensed 800 number with the unit in cyan, and a muted label.
  `60+` Years of combined experience · `12–24mo` Typical build duration · `£1–8m` Project value range · `100%` Fixed-price contracts.

### 3 — What we do (`/what-we-do`)
**Purpose:** Show the rigor of the process.
- Eyebrow `02 · What we do`. Title "High-end homes.<br>Delivered to the brief**.**". Lead with "A year or more, start to finish" in `<strong>`.
- **Phase list (`.phases`):** 8 rows, each a `88px | 1fr | auto` grid (`56px | 1fr` < 760px, with the duration dropping below the text). Columns: a big cyan Barlow Condensed number, the phase name (Barlow Condensed 700 uppercase) + a muted description, and a right-aligned mono duration. 1px navy separators; row hover tints `rgba(47,191,245,0.04)`.
- The eight phases (name + description + duration) are in `what-we-do.html` — reuse verbatim: Brief & feasibility · Architecture & design · Planning & pre-construction · Enabling works & shell · First & second fix · Finishes & commissioning · Snagging & handover · Aftercare.

### 4 — Where we do it (`/where-we-do-it`) — **has editable project case studies**
**Purpose:** Establish geographic reach (Devon & Cornwall) and prove it with real projects.
- Eyebrow `03 · Where we do it`. Title "Devon &<br>Cornwall**.**". Lead about the South West / Cornish coast.
- **Coverage strip (`.coverage`):** a mono `Areas we build` label over a wrapped row of pill **chips** (`border-radius: --r-full`, 1px navy border, Barlow Condensed 600 uppercase). First chip (`North Devon`) uses the `--base` modifier (cyan border + cyan-300 text) to mark the home region. Chips hover → cyan border. Current chips: North Devon · Exmoor · Mid & South Devon · North Cornwall · The Cornish coast. **These should be editable too** (see data model).
- **Subhead:** "Selected homes" + a mono count ("5 of 60+ delivered").
- **Project list (`.locs`)** — see the next section. This is the editable case-study list.

> **This is the most important functional requirement of the build: the projects on this page must be content-editable so the team can drop in cool case studies over time.** See below.

### 5 — Contact (`/contact`)
**Purpose:** One clear action — start a conversation.
- Eyebrow `04 · Contact`. Title "Send us the brief**.**". Lead with "we reply within two working days" in `<strong>`.
- **Two-column grid** (`1.1fr | 0.9fr`, collapses to 1 column < 900px):
  - Left: a **large cyan `Email the studio` button** (`.btn-cyan.lg`) that is a real `mailto:hello@arova.net` with a prefilled subject and body. Below it, two `.contact-card`s (2px cyan top border): **Email** → `hello@arova.net`, **Call** → `+44 (0)7802 373 796`. Card values are Barlow Condensed 700 links that turn cyan on hover.
  - Right: **Studio** card (Barnstaple, North Devon — Unit 1a, Onyx Business Park, Enterprise Road, Barnstaple, Devon EX31 3ZD) and **Hours** card (Mon–Fri · site visits by arrangement).
- No contact form in this design — the action is email. (If a form is wanted later, it must stay minimal: name, email, phone, site/area, brief — match the calm tone.)

---

## ⭐ Editable projects ("Where we do it" case studies) — build spec

The team wants to publish project case studies themselves, without a developer. Model the projects as **structured content**, not hard-coded markup.

### Data model
Each project:
```ts
type Project = {
  slug: string;          // "morte-point-house"
  postcode: string;      // "EX34"            → rendered in cyan mono (.loc__code)
  place: string;         // "Woolacombe"      → muted sub-label (.loc__place)
  name: string;          // "Morte Point House" → big Barlow Condensed title (.loc__name)
  area: string;          // "486 m²"          → mono meta chip
  duration: string;      // "18 mo"           → mono meta chip
  region: string;        // "North Devon"     → ties a project to a coverage chip
  // --- for the richer case study (recommended next step) ---
  summary?: string;      // 1–2 sentence intro, Arova voice (specifics, no fluff)
  year?: string;         // "2024"
  heroImage?: ImageRef;  // golden-hour / overcast exterior; cool grade, slight desat
  gallery?: ImageRef[];  // process + finish shots
  body?: RichText;       // the story: brief, challenge, what was delivered
  stats?: { label: string; value: string }[]; // e.g. { "Bedrooms", "5" }
};
```
The **current list view** (`.locs`) uses `postcode · place · name · area · duration`. Render that row exactly as in `where-we-do-it.html`: a `220px | 1fr | auto` grid (1 column < 820px), 1px navy separators, hover tint, big uppercase `name`. Each row should link to a **project detail page** (`/projects/[slug]`) — in the current prototype these rows point at Contact as a placeholder; wire them to real case-study pages instead.

### Where the content should live
Pick the lightest option that fits the team's comfort:
1. **MDX / Markdown files in the repo** (`/content/projects/*.mdx`) with frontmatter for the structured fields — simplest, version-controlled, great for a small team editing via GitHub.
2. **A headless CMS** (Sanity, Contentful, Keystatic, or TinaCMS) — best if non-technical staff need a UI. **Keystatic or TinaCMS** are good low-friction choices that keep content in the repo.
3. A single typed `projects.ts`/`projects.json` for an MVP — fastest, but editing means a code change. Acceptable only as step one.

**Recommendation:** start with MDX-in-repo (or Keystatic over it) so the list page, the coverage chips, and the detail pages all read from the same source, and adding a case study is "add a file / fill a form", never a layout edit. The **coverage chips and the "N of 60+ delivered" count should derive from the project data**, not be hard-coded.

### Project detail page (`/projects/[slug]`) — design direction
Not prototyped yet, but it must stay in the system: navy surface, blueprint grid, the same top bar/footer. Suggested structure — eyebrow (`postcode · place`), huge `name` title with cyan stop, a one-line `summary` lead, a full-bleed `heroImage`, a small mono stat row (area / duration / year / bedrooms), then the `body` story interleaved with `gallery` images. **Imagery is real architectural photography only** — cool grade, slight desaturation, golden-hour or overcast exteriors, natural-light interiors, process shots. Never illustration, never stock 3D, never AI imagery. Until real photos exist, use clearly-marked placeholders.

---

## Interactions & behavior summary

- **Navigation:** real routed pages in production (`/`, `/who-we-are`, `/what-we-do`, `/where-we-do-it`, `/contact`, `/projects/[slug]`). The prototype's hash router (`#who`, `#what`, …) is a single-file artifact — replace it. Each route scrolls to top on entry; the matching top-bar link gets `aria-current="page"`.
- **Hover states:** nav underline wipe (scaleX, origin left, `--dur-base`); flow panel bottom-line wipe (`--dur-slow`); arrow translateX(4px)+cyan; card/row tint; button color shift + glow. Never scale elements up.
- **Focus:** visible 2px cyan ring (`--shadow-glow-cyan` / inset cyan) on every interactive element.
- **Entrance:** transform-only staggered slide (see above). Respect `prefers-reduced-motion`.
- **Responsive:** content maxes at 1280px; side padding `clamp(24px,5vw,80px)`; grids collapse at the breakpoints noted per view (flow 720px, pillars 860px, stats/phases/bar links 760px, project rows 820px, contact 900px). Add a real mobile nav menu — the prototype only hides links.
- **CTAs are real:** Contact button and email card are `mailto:` links; phone is a `tel:` link.

## State management
Minimal. The only client state is the active route (handled by the framework router) and a future mobile-menu open/closed boolean. Project data is static/build-time content (MDX/CMS) — no runtime fetching required for a static export. No global store needed.

## Assets
- **Fonts:** Google Fonts — Barlow Condensed, Inter Tight, JetBrains Mono.
- **Icons:** Lucide (arrow-right is the only one currently used). Inline SVG.
- **Logo:** there is **no image logo** in this design — the wordmark `Arova.` is rendered as live text (white + cyan full stop). Keep it as text everywhere (better for crispness, theming and accessibility). A standalone navy PNG lockup exists in the broader brand system but is **not** used here.
- **Photography:** none yet. The "Where we do it" case studies need real architectural photography (cool grade, slight desaturation) — flagged as a client to-do.
- ⚠ **Verify the data before launch:** project names, postcodes, square-footage, durations, phone numbers and the studio address in these references were carried over from earlier marketing material. Confirm every figure with the Arova team before publishing.

## Files
- `reference/arova-website.html` — all five views in one file (read first).
- `reference/index.html`, `who-we-are.html`, `what-we-do.html`, `where-we-do-it.html`, `contact.html` — per-view references.
- `reference/assets/arova-tokens.css` — design tokens (copy verbatim).
- `reference/assets/arova-site.css` — shared chrome + component styles.
