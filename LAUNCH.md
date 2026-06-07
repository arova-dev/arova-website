# Launch-day runbook — Arova website

A plain-English, in-order checklist for taking the site from internal preview
to publicly live at **arova.net**. Written for a non-developer. Claude does the
code bits; you do the account bits (GitHub, Google, GoDaddy logins).

## The setup, in one paragraph

The website code lives on **GitHub** (`arova-dev/arova-website`) and is hosted
by **Vercel** (auto-redeploys whenever the code changes). The domain
**arova.net** is registered at **GoDaddy** (that's where DNS lives). Email for
arova.net is **Google Workspace** (`alan@`, `ollie@`, `neil@`). Going public
means: finish the content, let search engines in, and point arova.net at Vercel
— *without* disturbing the Google email.

---

## Part A — Prep (do these before launch day; no rush)

- [ ] **1. Finalise the project case studies.** Send Claude the real projects
      (name, postcode, town, floor area m², build duration, region). Claude
      updates `content/projects.ts`; the live preview refreshes within a minute.
- [ ] **2. Confirm contact details.** `hello@arova.net` and the phone number on
      the Contact page — confirm both are correct (address + company number are
      already confirmed).
- [ ] **3. Set up `hello@arova.net`.** This is done in **Google Admin**
      (admin.google.com), NOT GoDaddy. Pick one:
      - *Alias* — add `hello@` as an alias on `alan@` (free; lands in Alan's inbox), or
      - *Group / shared inbox* — create `hello@` as a Google Group so Alan, Ollie
        and Neil all see enquiries (free; recommended for "contact the studio").
      - Test it: send an email to hello@arova.net and check it arrives.
- [ ] **4. Find the right GoDaddy login.** Last attempt failed because it was the
      wrong account — the domain IS in GoDaddy. Track down which login owns
      arova.net (try other email addresses, use GoDaddy "Forgot username", ask
      whoever set up the domain/Google email). You'll need this on launch day to
      add two DNS records.
- [ ] **5. Decide the main web address.** Usually the bare **arova.net** (with
      www.arova.net redirecting to it). Confirm your preference.

---

## Part B — Launch day (in order)

### Step 1 — Remove the "hide from Google" tag  *(Claude does this)*
Claude deletes the `robots` block in `app/layout.tsx` and pushes. Only do this
once the real content is in — you don't want placeholders indexed.

### Step 2 — Add the domain in Vercel  *(you, ~2 min)*
1. Vercel → the `arova-website` project → **Settings → Domains**.
2. Type `arova.net` and click **Add**.
3. Vercel shows the DNS records to create. **Use the exact values Vercel shows**
   (they're usually the ones below). Do NOT choose any "change your nameservers
   to Vercel" option — that would break your Google email.

### Step 3 — Add the two records in GoDaddy  *(you, ~5 min)*
In GoDaddy → the arova.net domain → **DNS / Manage DNS**, add:

| Type | Name / Host | Value / Points to | Notes |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | The root domain. *(Use whatever IP Vercel shows.)* |
| `CNAME` | `www` | `cname.vercel-dns.com` | Makes www.arova.net work too. |

Leave **every other record alone** — especially the `MX` records (that's your
Google email) and the nameservers. We are only adding two records, not changing
existing ones.

### Step 4 — Wait, then verify  *(you + Claude)*
- DNS usually updates within minutes (can take a few hours).
- Vercel will flip the domain to "Valid" and **auto-issue the HTTPS padlock** —
  nothing to do for security; it's automatic.
- Visit **https://arova.net** — you should see the site with a padlock.
- Claude does a final check that all pages load and email/phone links work.

---

## Part C — After launch

- [ ] Tell **Google** the site exists (optional): add arova.net to Google Search
      Console so it gets indexed faster.
- [ ] Decide if you want a **password gate** removed/added (Vercel Pro feature) —
      not needed once it's a normal public marketing site.
- [ ] Keep adding real case studies anytime — send Claude the details, or (later)
      use the optional Keystatic form-based editor if we add it.

---

## If something looks wrong

- **Site doesn't load at arova.net after a few hours** → double-check the two
  records in GoDaddy match exactly what Vercel asked for (a common slip is
  putting the whole `arova.net` in the "Name" field instead of just `@`).
- **Email stops working** → it shouldn't, because we never touched the MX records
  or nameservers. If it did, revert any record you changed that wasn't the two
  above. Email is Google Workspace via the `aspmx.l.google.com` MX records.
- **Nothing is urgent or irreversible** — DNS changes can always be undone, and
  the Vercel preview link keeps working throughout.

---

## Who needs access to what

| Thing | Where | Who holds it |
|---|---|---|
| Website code | GitHub `arova-dev/arova-website` | You (Arova) |
| Hosting | Vercel (signed in with GitHub) | You (Arova) |
| Domain + DNS | GoDaddy | The (to-be-found) GoDaddy account |
| Email | Google Workspace (admin.google.com) | Your Workspace admin |
