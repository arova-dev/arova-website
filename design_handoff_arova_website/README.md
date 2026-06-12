# Handoff: AROVA Website

> **Excellence in Construction.** A simple, bold, confident marketing site for Arova Ltd. — a high-end residential builder rooted in North Devon, working across all of Devon & Cornwall.

---

## Overview

This is a small marketing site whose entire job is **confidence**. It is the backdrop for an in-person consultation with architects: a builder walks an architect through it on a laptop or tablet, then breaks off to show real project assets and tell stories. So the site is deliberately **sparse, large-scale and typographic** — it states who Arova is in as few words as possible and leaves room for the conversation. The brief, verbatim from the client:

> "Simple. Bold. Confident. It should shout that we really know what we are doing — almost a 'who do these guys think they are' type confidence."

It is **not** a content-heavy brochure site. Resist the urge to add sections, filler copy, stock imagery, testimonials sliders, or decorative gradients. Every element must earn its place. When in doubt, remove.

### This is a multi-page site — five separate, routed pages

The deliverable is **five distinct pages with real navigation between them** — NOT a single-page scroll, NOT a hash/tab router. The client explicitly chose page-by-page over a long-scroll single file. Build five routes:

| Route | Page | Job |
|---|---|---|
| `/` | **Home** | Full-viewport statement: the wordmark `AROVA.` (cyan stop), tagline, and a 4-panel navigation "flow". No top bar — it is its own screen. |
| `/who-we-are` | **Who we are** | Three pillars (Craft / Communication / Certainty) + a 4-up proof-stat row. |
| `/what-we-do` | **What we do** | Three service lines + one shared eight-phase process. |
| `/where-we-do-it` | **Where we do it** | A short reach statement + coverage chips + **three photo-led case studies** (the editable bit — see its own section). |
| `/contact` | **Contact** | A large cyan email CTA + studio details. |

Every inner page shares a sticky top bar (with `Arova.` home link, three nav links, and a cyan Contact button) and a slim footer. Navigation is plain `<a href>` between pages. Each page is a normal document — fine to scroll within a page, but the four sections are **separate pages**, not anchors on one page.

---

## About the design files

The files in `reference/` are **design references created in HTML/CSS** — working prototypes showing the intended look, type, spacing, motion and behaviour. **They are not production code to ship as-is**, but they are high-fidelity and final in look & copy.

Recreate these designs in a real, maintainable codebase using its established patterns. If there is no existing codebase, **Next.js (App Router) + plain CSS (or CSS Modules), static export, is the recommended choice** — the design is static, content-light, and SEO matters for a marketing site (Astro is an equally good fit). Avoid a heavy UI kit; this design is hand-tuned and token-driven, and a component library would fight it.

| File | What it is |
|---|---|
| `reference/index.html` | Home (statement) page |
| `reference/who-we-are.html` | Who we are |
| `reference/what-we-do.html` | What we do |
| `reference/where-we-do-it.html` | Where we do it (with the three case studies + photography) |
| `reference/contact.html` | Contact |
| `reference/assets/arova-tokens.css` | **The design-system tokens.** Copy verbatim — colors, type scale, spacing, radii, shadows, motion. Do not invent values. |
| `reference/assets/arova-site.css` | All shared chrome + component styles (top bar, page hero, pillars/services, phase list, case-study rows, status chips, contact, footer). |
| `reference/assets/projects/*.jpg` | The six real project photos already in use (see Photography). |

There is **no combined single-file / hash-router reference** — that approach was tried and explicitly rejected in favour of separate pages. Ignore any mention of one in older notes.

---

## Fidelity

**High-fidelity.** Final colors, typography, spacing, motion and copy are all decided and present in the reference files. Recreate pixel-faithfully. Pull exact values from `arova-tokens.css` and `arova-site.css` rather than eyeballing. All page copy in the reference files is approved — **reuse it verbatim** unless told otherwise.

---

## Brand & spirit — the rules that matter most

- **Two colors + neutrals.** Arova Navy is the surface; Arova Cyan is an **accent only** (CTAs, the full stop, key numbers, active states, hover lines, status dots). If cyan covers more than ~10% of any view, it's too much.
- **The full stop is the logo.** `AROVA.` always renders with a **cyan** full stop on a white wordmark. No icon, no mark, no trefoil above it — just the wordmark and its cyan stop. Reuse the same `Arova.` lockup (white text, cyan `.`) in the top bar and footer. On the **What we do** title the motif is repeated — every sentence stop is cyan ("We build**.** We restore**.** We convert**.**").
- **Type is the design.** Huge condensed display type (Barlow Condensed) carries every screen. Body is Inter Tight; numbers/labels/codes/postcodes are JetBrains Mono.
- **Sentence case everywhere**, except the wordmark `AROVA`, the tagline `EXCELLENCE IN CONSTRUCTION`, eyebrows, status chips and button labels, which are uppercase with wide tracking.
- **Specifics over adjectives.** Numbers, durations, m², postcodes, phase names — these carry the tone. Never "amazing homes"; always "700 m², 24 weeks".
- **No emoji. No exclamation marks** in body copy. No drop shadows on the logo. No warm UI colors, no pastels, no gradient-for-gradient's-sake.
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
--arova-cyan-400: #2FBFF5;   /* default cyan — the full stop, hairlines, numbers, pins/dots */
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
Load from Google Fonts (Barlow Condensed, Inter Tight, JetBrains Mono) — the `@import` is at the top of `arova-tokens.css`. In Next, prefer `next/font/google` for the same three families.

Type scale (rem): 12·13·14·15·16·18·20·24·30·36·48·60·72·96 → `--fs-12 … --fs-96`.
Line heights: `--lh-tight:1.05 · --lh-snug:1.2 · --lh-normal:1.5 · --lh-relaxed:1.7`.
Tracking: `--tracking-tagline:0.22em · --tracking-eyebrow:0.14em · --tracking-button:0.06em · --tracking-tight:-0.02em`.
**Only ever track uppercase text.** Never letter-space sentence-case body copy.

### Spacing — 4px base
`--sp-1:4 · 2:8 · 3:12 · 4:16 · 5:20 · 6:24 · 8:32 · 10:40 · 12:48 · 16:64 · 20:80 · 24:96 · 32:128`. Snap to these. No odd values.

### Radius
`--r-1:2 · r-2:4 (inputs/buttons) · r-4:10 (cards & images) · r-5:14 · r-full:999 (chips only)`. Data tables/chrome use 0.

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
- Background on inner pages: a fixed full-viewport navy gradient (`--arova-navy-900 → 800 → 900`, 180° only) with a **very faint blueprint grid** overlay (48px cells, `rgba(255,255,255,0.03)` lines), radially masked so it fades out. See `.bp-grid`. Subtle — texture, not decoration.
- A **3px solid cyan hairline** runs across the very top of every page (top border of the bar / the home stage).

### Top bar (inner pages) — `.bar`
- Sticky, 64px tall, `rgba(14,18,38,0.72)` + `backdrop-filter: blur(10px)`, 1px navy bottom border, 3px cyan top border.
- Left: `Arova.` brand lockup (Barlow Condensed 800, `--fs-24`, white with cyan stop) → links home.
- Right: three text links (`Who we are`, `What we do`, `Where we do it`) + a **solid cyan Contact button**. Links are Barlow Condensed 600 uppercase, `--fg-on-navy-2`, with a cyan underline that wipes in on hover (`scaleX(0→1)`, origin left). The current page's link is full-white with the underline shown (`aria-current="page"`).
- **Home has no top bar** — it is its own full-screen statement.
- Below 760px the three text links hide (leave brand + Contact button). **A production build must add a real mobile menu** (drawer or full-screen) — the prototype only hides them.

### Footer — `.foot`
Slim, 1px navy top border. Left: `Arova.` wordmark. Center: the four nav links (uppercase, hover→cyan). Right: a mono meta line (`Barnstaple · North Devon` on most pages; `© 2026 Arova Ltd · 12847291` on Contact). Hidden links collapse below 760px.

### Buttons
- **`.btn-cyan`** — solid `--arova-cyan-500` fill, white uppercase Barlow Condensed 700, `--tracking-button`, radius `--r-2` (4px), arrow icon. Hover → `--arova-cyan-400` + cyan glow. Active → `--arova-cyan-600` + translateY(1px). A `.lg` modifier scales it up for the Contact hero CTA.
- **`.btn-ghost`** — transparent, 1px navy border, white text; hover border→cyan + navy-700 fill.

### Icons
Lucide, 1.75px stroke, rounded joins, 24px grid, inline SVG. Two icons in use: **arrow-right** (`M5 12h14M13 6l6 6-6 6`) and the **image** glyph (in the "photography to come" placeholder). Keep inline/tree-shaken; no icon font.

### Entrance animation (important — get this right)
Content slides up on load: `@keyframes rise { from { transform: translateY(26px) } to { transform: none } }`, `700ms var(--ease-out)`, staggered via delay classes (`.d1 60ms · .d2 180ms · .d3 300ms · .d4 420ms · .d5 540ms`) on `.anim` elements.
**Animate `transform` only — never opacity. Opacity must always be 1.** This is deliberate: a transform-only entrance still shows all content if the animation never advances (background tab, screenshot, print/PDF, JS disabled). Do not reintroduce an opacity fade that depends on JS or a transition completing — it leaves the page blank in those contexts. Gate everything behind `@media (prefers-reduced-motion: no-preference)`.

---

## Pages

### 1 — Home (`/`)
**Purpose:** the opening statement; one look should communicate confidence and competence.
- Full viewport (`min-height: 100svh`), flex column. Hero centered; flow nav pinned to the bottom.
- **Background:** navy gradient + blueprint grid (radially masked, ~42% centre) + 3px cyan top hairline.
- **Wordmark:** `Arova.` — Barlow Condensed **800**, uppercase, `clamp(5.5rem, 27vw, 23rem)`, `line-height: 0.84`, `letter-spacing: -0.015em`, white with the `.` in cyan. Centered, almost too big.
- **Tagline:** `Excellence in Construction` — Barlow Condensed 500, uppercase, `clamp(0.62rem, 1.9vw, 1.35rem)`, `letter-spacing: 0.22em`, white, centered under the wordmark (`text-indent: 0.22em` keeps it optically centered).
- **Flow nav:** a full-width row of **4 equal panels** on `rgba(14,18,38,0.35)` + blur, 1px navy dividers. Each panel: mono number (`01`–`04`, cyan), Barlow Condensed 600 uppercase label, right-aligned arrow. Labels: `Who we are`, `What we do`, `Where we do it`, `Contact`. Hover (01–03): navy-700 fill + a 3px cyan line wipes in along the bottom, arrow slides right + turns cyan. **Panel 04 (Contact) is a solid cyan panel** (the one clear CTA). Each panel links to its page. Below 720px panels stack full-width.

### 2 — Who we are (`/who-we-are`)
- **Eyebrow:** `01 · Who we are` — mono cyan number + muted label, then a 1px navy rule filling the remaining width (flex + `::after`). This eyebrow repeats on every inner page.
- **Title:** "A young company.<br>Not young builders**.**" — Barlow Condensed 800 uppercase, `clamp(3rem, 8.5vw, 7.5rem)`, cyan full stop, `text-wrap: balance`.
- **Lead:** Inter Tight `clamp(18px, 2.1vw, 30px)`, muted, max 60ch; "over six decades of combined experience" in white `<strong>`.
- **Pillars:** 3-col grid (1 col < 860px). Each: 2px cyan top border, mono number, big Barlow Condensed uppercase keyword (`Craft` / `Communication` / `Certainty`), a bold one-line claim, a muted paragraph. Reuse copy verbatim. (Certainty reads: "Fixed price or cost-plus. Dates and numbers you can plan around.")
- **Stat row:** 4-up grid (2-up < 760px), 1px navy gridlines. Each cell: huge Barlow Condensed 800 number with the unit in cyan + a muted label. Values: `60+` Years of combined experience · `12–24mo` Typical build duration · `£1–8m` Project value range · `100%` Costs priced and tracked, line by line. **The numbers must not wrap** (`.stat__num { white-space: nowrap }`).

### 3 — What we do (`/what-we-do`)
**Purpose:** three service lines, held to one standard.
- Eyebrow `02 · What we do`. Title "We build**.** We restore**.**<br>We convert**.**" — **all three full stops are cyan** (each wrapped in `<span class="stop">`). Lead: "Bespoke homes, heritage restoration and barn conversions — **three service lines, one standard of delivery**, run on the same eight phases, every time."
- **Services:** a 3-col grid reusing the pillar component (`.pillars.pillars--svc`; the `--svc` modifier just tones the keyword size down for the longer labels). Three services — number, keyword, one-line claim, supporting paragraph (reuse verbatim):
  1. **High-end homes** — "Delivered to the brief." — Bespoke new-build family homes, designed and built to the last detail — a year or more, start to finish.
  2. **Restoration & refurbishment** — "Care, diligence, an eye for detail." — Period and heritage property brought back to life with specialist trades who respect the original fabric.
  3. **Demolition & barn conversions** — "We take them down as carefully as we put them up." — Safe, clean demolition and sensitive barn conversions — old structures given new purpose.
- **Shared process:** a `.subhead` ("How we work" + mono "8 phases, every job") then the **eight-phase list** (`.phases`). Each phase is a `88px | 1fr | auto` grid (`56px | 1fr` < 760px, duration drops below): big cyan Barlow Condensed number, phase name (Barlow Condensed 700 uppercase) + muted description, right-aligned mono duration; 1px navy separators, row hover tints `rgba(47,191,245,0.04)`. The eight phases (name · description · duration) are in `what-we-do.html` — reuse verbatim: Brief & feasibility · Architecture & design · Planning & pre-construction · Enabling works & shell · First & second fix · Finishes & commissioning · Snagging & handover · Aftercare. This single process applies to **all three** services — do not duplicate it per service.

### 4 — Where we do it (`/where-we-do-it`) — **the case studies (the editable bit)**
**Purpose:** state the reach, then prove it with real work.
- Eyebrow `03 · Where we do it`. Title "Devon &<br>Cornwall**.**". Lead: "Rooted in **North Devon** and building across **all of Devon and Cornwall** — local trades, local knowledge, and a team on site within the hour."
- **Coverage strip (`.coverage`):** mono `Areas we build` label over a wrapped row of pill **chips** (`--r-full`, 1px navy border, Barlow Condensed 600 uppercase). First chip (`North Devon`) uses the `--base` modifier (cyan border + cyan-300 text). Chips: North Devon · Exmoor · Mid & South Devon · North Cornwall · The Cornish coast. (Derive these from the project data / a small config rather than hard-coding, so coverage stays in sync.)
- **Subhead:** "Selected work" + mono "3 projects".
- **Case studies (`.case-rows`):** three **editorial rows**, photography-led, alternating image side (`:nth-child(even) .case-row__media { order: 2 }`). Each row is a 2-col grid (`minmax(0,1.12fr) media | minmax(0,0.88fr) body`, `align-items:center`; 1 col < 900px). Body block: a **status chip**, mono `postcode · place`, big Barlow Condensed `name` (`clamp(36px, 4.2vw, 60px)`), mono `area · duration` meta, and a one-line description.

> **NOTE — there is no map.** An interactive map was prototyped and explicitly removed. Do not reintroduce one. The reach is communicated by the lead + coverage chips; the proof is the three case studies.

**Status taxonomy** (`.status` chip = mono uppercase label + a 9px dot; reused as the marker style):
- **Completed** → `status--done` — solid cyan dot.
- **In progress** → `status--live` — solid cyan dot with a slow cyan pulse ring (`@keyframes statuspulse`, reduced-motion-gated).
- **Preconstruction** → `status--pre` — hollow cyan ring dot.

**Media layouts** (per project, driven by the photos available):
- `case-row__media--duo` — two images side by side (`1fr 1fr`), each `aspect-ratio: 4/5` object-fit cover. Used for **portrait** pairs (Riversvale: exterior + stairwell; Mansard: roofed garage block + shingle detail).
- `case-row__media--stack` — images stacked full-width, each `aspect-ratio: 3/2`, **with captions**. Each image is a `<figure class="shot">` + `<figcaption class="shot__cap">` (mono, the lead word in cyan via `<b>`). Used for **landscape** pairs and before/after storytelling (Marisco: "Site cleared · Mar 2026" → "The approved design · CGI").
- **Placeholder** `.media-ph` — a blueprint-grid empty state with the Lucide image glyph + mono "Photography to come". Use this for any project without photos yet.

The three current projects (reuse verbatim; **all figures client-supplied — keep them exact**):

| Status | Postcode · Place | Name | Area | Duration | Description | Media |
|---|---|---|---|---|---|---|
| Completed | EX31 · Barnstaple | Riversvale Villa | 700 m² | 24 weeks | Heritage renovation of an old villa into six bright, airy apartments. | duo: `riversvale-exterior.jpg`, `riversvale-stairwell.jpg` |
| In progress | EX33 · Putsborough | Mansard | 100 m² | 12 weeks | Renovation of an apartment above the garages — cedar shingle roof, leadwork and a full internal refit. | duo: `mansard-external.jpg`, `mansard-roof.jpg` |
| Preconstruction | EX33 · Saunton | Marisco | 980 m² | 83 weeks | A magnificent cliff-top family home. Demolition complete; preconstruction under way. | stack: `marisco-demolished.jpg` (cap "Site cleared · Mar 2026"), `marisco-cgi.jpg` (cap "The approved design · CGI") |

### 5 — Contact (`/contact`)
- Eyebrow `04 · Contact`. Title "Send us the brief**.**". Lead with "we reply within two working days" in `<strong>`.
- **Two-column grid** (`1.1fr | 0.9fr`, 1 col < 900px):
  - Left: a **large cyan `Email the studio` button** (`.btn-cyan.lg`) — a real `mailto:hello@arova.net` with a prefilled subject & body. Below it two `.contact-card`s (2px cyan top border): **Email** → `hello@arova.net`, **Call** → `+44 (0)7802 373 796` (Barlow Condensed 700 links, hover→cyan).
  - Right: **Studio** card (Barnstaple, North Devon — Unit 1a, Onyx Business Park, Enterprise Road, Barnstaple, Devon EX31 3ZD) and **Hours** card (Mon–Fri · site visits by arrangement).
- No contact form — the action is email. (If a form is added later keep it minimal: name, email, phone, site/area, brief — and match the calm tone.)

---

## ⭐ Editable case studies — build spec

The team wants to add/edit project case studies themselves over time, without a developer. Model the three projects (and future ones) as **structured content**, not hard-coded markup.

### Data model
```ts
type ProjectStatus = 'completed' | 'in-progress' | 'preconstruction';

type ProjectImage = {
  src: string;
  alt: string;        // always required — real, descriptive alt text
  caption?: string;   // shown only in the stacked/figure layout (e.g. "Site cleared · Mar 2026")
};

type Project = {
  slug: string;            // "riversvale-villa"
  status: ProjectStatus;   // drives the status chip + dot style
  postcode: string;        // "EX31"        → cyan mono
  place: string;           // "Barnstaple"  → mono, after a middot
  name: string;            // "Riversvale Villa" → big Barlow Condensed title
  area: string;            // "700 m²"      → mono meta
  duration: string;        // "24 weeks"    → mono meta
  region: string;          // "North Devon" → ties a project to a coverage chip
  description: string;     // one line, Arova voice (specifics, no fluff)
  media: ProjectImage[];   // 0 = placeholder, 1–2 = shown. Portrait pair → duo; landscape/before-after → stack (use captions)
  mediaLayout?: 'duo' | 'stack'; // optional override; otherwise infer from orientation/captions
};
```
Render the list from this data: pick `--duo` vs `--stack` (duo for portrait pairs, stack for landscape/before-after with captions), render `.media-ph` when `media` is empty, and map `status` → chip label + `status--*` class. Drive the **coverage chips** and the **"N projects" count** from the same data so nothing drifts.

### Where the content should live
Pick the lightest option that fits the team:
1. **MDX / Markdown in the repo** (`/content/projects/*.mdx`) with frontmatter for the structured fields + an `images/` folder per project — simplest, version-controlled, edit via GitHub.
2. **A repo-backed CMS** (Keystatic or TinaCMS) over those files — best if non-technical staff need a UI without leaving the repo.
3. A single typed `projects.ts` for an MVP — fastest, but each edit is a code change. Step-one only.

**Recommendation:** MDX-in-repo (optionally Keystatic on top). Adding a case study should be "drop 1–2 photos + fill a few fields", never a layout edit.

### Optional next step — project detail pages (`/projects/[slug]`)
Not built yet, but the model anticipates it. If added: same navy surface, blueprint grid, top bar/footer. Eyebrow (`postcode · place`), huge `name` title with cyan stop, one-line `summary` lead, a lead image, a small mono stat row (area / duration / status), then the story interleaved with the gallery. If you add detail pages, make each case-study row link to its `/projects/[slug]`.

---

## Photography

Real client-supplied project photos live in `reference/assets/projects/` (already optimized — downscaled to ≤1600px, JPEG):

| File | Project | Use |
|---|---|---|
| `riversvale-exterior.jpg` | Riversvale Villa | restored villa exterior (portrait) |
| `riversvale-stairwell.jpg` | Riversvale Villa | plasterwork stairwell + stained glass (portrait) |
| `mansard-external.jpg` | Mansard | garage block with new cedar shingle roof (portrait) |
| `mansard-roof.jpg` | Mansard | close cedar-shingle detail (portrait) |
| `marisco-demolished.jpg` | Marisco | cleared cliff-top site above the beach (landscape) |
| `marisco-cgi.jpg` | Marisco | CGI of the approved house (landscape) |

**Imagery rules:** real architectural photography (and approved CGI for unbuilt work) only — cool grade, slight desaturation, golden-hour or overcast exteriors, natural-light interiors, process shots. Never stock, never illustration, never AI imagery. Optimize on import (resize to display size, serve modern formats — `next/image` or equivalent). The Marisco CGI is from the project's Design & Access Statement; keep it labelled "CGI".

---

## Interactions & behavior

- **Navigation:** real routed pages (`/`, `/who-we-are`, `/what-we-do`, `/where-we-do-it`, `/contact`). Plain links between pages; the current page's top-bar link gets `aria-current="page"`. No hash router, no single-page scroll.
- **Hover:** nav underline wipe (scaleX, origin left); flow-panel bottom-line wipe; arrow translateX(4px)+cyan; card/row tint; image rows have no zoom (never scale). Button color shift + glow.
- **Focus:** visible 2px cyan ring on every interactive element.
- **Entrance:** transform-only staggered slide; respect `prefers-reduced-motion`.
- **Responsive:** content maxes at 1280px; side padding `clamp(24px,5vw,80px)`; grids collapse — flow 720px, pillars/services 860px, stats/phases/bar links 760px, case-study rows + contact 900px. **Add a real mobile nav menu** (prototype only hides links).
- **CTAs are real:** Contact button + email card are `mailto:`; phone is `tel:`.

## State management
Minimal. Only client state is the active route (framework router) and a future mobile-menu boolean. Project data is build-time content (MDX/CMS); no runtime fetching needed for a static export. No global store.

## Assets & logo
- **Fonts:** Google Fonts — Barlow Condensed, Inter Tight, JetBrains Mono.
- **Icons:** Lucide (arrow-right, image), inline SVG.
- **Logo:** there is **no image logo** — the wordmark `Arova.` is live text (white + cyan stop). Keep it as text everywhere (crispness, theming, accessibility).

## ⚠ Verify before launch
Project names, postcodes, areas, durations, the phone number and the studio address came from client-supplied material across this engagement. The three case-study figures were given directly by the client and should be exact — but **confirm every number, postcode and the address with Arova before publishing**, and confirm `hello@arova.net` is the address that should appear publicly.
