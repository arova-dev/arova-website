# Arova website

The Arova Ltd marketing site — "Excellence in Construction". Built with
Next.js (App Router), statically exported, ready to deploy on Vercel.

This guide is written for a non-developer. You don't need to understand the
code to run, edit, or publish the site.

---

## What's here

Five pages:

| Address | Page |
|---|---|
| `/` | Home — the big `AROVA.` statement |
| `/who-we-are` | Who we are |
| `/what-we-do` | What we do |
| `/where-we-do-it` | Where we do it (the project list) |
| `/contact` | Contact |

---

## The bits you'll actually edit

Everything you're likely to change lives in the **`content/`** folder, in
plain text files with step-by-step instructions written inside them:

- **`content/projects.ts`** — the project case studies shown on "Where we do
  it". Add, edit, or remove a project by changing the text. The list of rows
  and the "N of 60+ delivered" counter update themselves from this file.
  > ⚠ The five projects in there now are **fictional placeholders** carried
  > over from old marketing material. Replace them with real case studies
  > before launch, and double-check every figure with the team.
- **`content/regions.ts`** — the "Areas we build" chips.
- **`content/site.ts`** — email, phone, address, company number, and the
  navigation labels. Change something here and it updates across every page.

You can edit these straight on GitHub's website (open the file, click the
pencil icon, change the text, save), or just ask Claude to do it.

---

## Running it on your own computer (optional)

You only need this if you want to preview changes locally. One-time setup:

1. Install [Node.js](https://nodejs.org) (the "LTS" version).
2. Open a terminal in this folder and run: `npm install`

Then, to preview the site at <http://localhost:3000>:

```
npm run dev
```

To build the final, publishable version (creates an `out/` folder):

```
npm run build
```

---

## Publishing (GitHub + Vercel)

1. Push this folder to a GitHub repository.
2. In [Vercel](https://vercel.com), choose "Add New → Project" and pick that
   repository. Vercel detects Next.js automatically — just click Deploy.
3. Every time you save a change on GitHub, Vercel rebuilds and publishes it.

The site is configured for **static export** (`output: 'export'` in
`next.config.mjs`), so it's a plain, fast set of files that any host can serve.

---

## Things noted for later (not built yet)

- **Project detail pages** (`/projects/...`): deferred until there are real
  case studies and photography. The project rows are not clickable for now.
  The data file already has optional fields ready for them.
- **A friendlier editor (Keystatic):** once real case studies start coming in,
  a form-based admin screen can be added on top of the same content files, so
  you can add projects without touching any text files.
- **Verify before launch:** the email and phone were carried over from old
  marketing material — confirm them. (The address and company number 16728635
  are confirmed current.)

---

## For developers

- `app/` — the five pages (App Router). Shared chrome via `components/`.
- `styles/arova-tokens.css` — design tokens, copied verbatim from the handoff
  (only the font loading is swapped to `next/font`).
- `styles/arova-site.css` — shared chrome + components; `styles/home.css` — the
  home statement view.
- Fonts: Barlow Condensed / Inter Tight / JetBrains Mono via `next/font`.
- The original design handoff lives in `design_handoff_arova_website/`.
