// =====================================================================
//  PROJECT CASE STUDIES  —  the editable list for "Where we do it"
// =====================================================================
//
//  HOW TO EDIT  (no coding needed — just change the text between quotes):
//
//   • To change a project, edit the words inside the "quotes" below.
//   • To add a project, copy one whole { ... } block, paste it, and edit it.
//     Keep the comma after the closing } .
//   • To remove a project, delete its whole { ... } block (and its comma).
//   • Keep every field that is already filled in — don't delete the labels
//     on the left (slug, postcode, place, ...), only change the text values.
//
//  The "Where we do it" page builds itself from this list:
//   • the rows you see are these projects, in this order;
//   • the "N of 60+ delivered" counter counts how many are listed here;
//   • so adding or removing a block is all it takes — no layout editing.
//
//  ⚠  PLACEHOLDER DATA — the five projects below are FICTIONAL examples
//     carried over from old marketing material. Replace them with real
//     case studies before the site goes live, and confirm every figure
//     (names, postcodes, square-metres, durations) with the team first.
//     Do not publish these as if they were real, completed homes.
//
//  NOTE: project rows are not yet clickable. Individual case-study pages
//  (/projects/...) are a planned next step, to be added once there are
//  real stories and photographs. The optional fields lower down (summary,
//  year, heroImage, ...) are there ready for that — leave them out for now.
// =====================================================================

export type Project = {
  slug: string; // a short url-friendly id, lowercase-with-dashes, e.g. "morte-point-house"
  postcode: string; // shown in cyan, e.g. "EX34"
  place: string; // the town / area, e.g. "Woolacombe"
  name: string; // the project name (shown big), e.g. "Morte Point House"
  area: string; // floor area, e.g. "486 m²"
  duration: string; // build time, e.g. "18 mo"
  region: string; // must match one of the region names in regions.ts

  // --- Optional, for the richer case-study page later (safe to omit) ---
  summary?: string; // a 1–2 sentence intro in Arova's voice
  year?: string; // e.g. "2024"
  heroImage?: string; // path to the main photo once real photography exists
  gallery?: string[]; // paths to more photos
  stats?: { label: string; value: string }[]; // e.g. { label: "Bedrooms", value: "5" }
};

// ⚠ PLACEHOLDER — replace with real case studies.
export const projects: Project[] = [
  {
    slug: "morte-point-house",
    postcode: "EX34",
    place: "Woolacombe",
    name: "Morte Point House",
    area: "486 m²",
    duration: "18 mo",
    region: "North Devon",
  },
  {
    slug: "willow-house",
    postcode: "EX32",
    place: "Barnstaple",
    name: "Willow House",
    area: "312 m²",
    duration: "14 mo",
    region: "North Devon",
  },
  {
    slug: "downend",
    postcode: "EX33",
    place: "Croyde",
    name: "Downend",
    area: "248 m²",
    duration: "16 mo",
    region: "North Devon",
  },
  {
    slug: "fieldgate",
    postcode: "EX31",
    place: "Exmoor edge",
    name: "Fieldgate",
    area: "540 m²",
    duration: "22 mo",
    region: "Exmoor",
  },
  {
    slug: "broadlands",
    postcode: "EX39",
    place: "Bideford",
    name: "Broadlands",
    area: "286 m²",
    duration: "13 mo",
    region: "North Devon",
  },
];

// The total Arova claims to have delivered (the "of 60+ delivered" figure).
// The list above is the "selected homes" we choose to show; this is the
// running total across the whole company. Update it as the real number grows.
export const totalDelivered = "60+";
