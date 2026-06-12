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
//     on the left (slug, status, postcode, ...), only change the values.
//
//  The "Where we do it" page builds itself from this list:
//   • the case studies you see are these projects, in this order;
//   • the "N projects" counter counts how many are listed here.
//   So adding or removing a block is all it takes — no layout editing.
//
//  PHOTOS: each project shows two photos. Put image files in the
//  `public/projects/` folder, then reference them as "/projects/your-file.jpg".
//  Keep photos roughly portrait (taller than wide) for the side-by-side
//  "duo" layout, or use the "stack" layout for captioned before/after shots.
// =====================================================================

// A project is one of three states. This sets the little status chip:
//   "done" → Completed       (solid dot)
//   "live" → In progress     (pulsing dot)
//   "pre"  → Preconstruction (hollow dot)
export type ProjectStatus = "done" | "live" | "pre";

// One photo. `caption` is only used by the "stack" layout (before/after shots).
export type ProjectImage = {
  src: string; // e.g. "/projects/riversvale-exterior.jpg"
  alt: string; // a plain description of the photo, for accessibility
  caption?: { label: string; meta: string }; // e.g. { label: "Site cleared", meta: "Mar 2026" }
};

export type Project = {
  slug: string; // short url-friendly id, e.g. "riversvale-villa"
  status: ProjectStatus; // "done" | "live" | "pre" (see above)
  statusLabel: string; // the words on the status chip, e.g. "Completed"
  postcode: string; // e.g. "EX31"  (shown in cyan)
  place: string; // e.g. "Barnstaple"
  name: string; // the project name, shown big
  area: string; // floor area, e.g. "700 m²"
  duration: string; // build time, e.g. "24 weeks"
  description: string; // a one-line summary in Arova's voice
  layout: "duo" | "stack"; // "duo" = two photos side by side; "stack" = two captioned photos stacked
  images: ProjectImage[]; // exactly two photos
};

export const projects: Project[] = [
  {
    slug: "riversvale-villa",
    status: "done",
    statusLabel: "Completed",
    postcode: "EX31",
    place: "Barnstaple",
    name: "Riversvale Villa",
    area: "700 m²",
    duration: "24 weeks",
    description:
      "Heritage renovation of an old villa into six bright, airy apartments.",
    layout: "duo",
    images: [
      {
        src: "/projects/riversvale-exterior.jpg",
        alt: "Riversvale Villa — restored villa exterior with wrought-iron balconies under a blue sky",
      },
      {
        src: "/projects/riversvale-stairwell.jpg",
        alt: "Riversvale Villa — ornate plasterwork stairwell with a stained-glass window and runner",
      },
    ],
  },
  {
    slug: "mansard",
    status: "live",
    statusLabel: "In progress",
    postcode: "EX33",
    place: "Putsborough",
    name: "Mansard",
    area: "100 m²",
    duration: "12 weeks",
    description:
      "Renovation of an apartment above the garages — cedar shingle roof, leadwork and a full internal refit.",
    layout: "duo",
    images: [
      {
        src: "/projects/mansard-external.jpg",
        alt: "Mansard — garage block with a new hand-laid cedar shingle mansard roof",
      },
      {
        src: "/projects/mansard-roof.jpg",
        alt: "Mansard — close detail of the cedar shingle roofing and ridge",
      },
    ],
  },
  {
    slug: "marisco",
    status: "pre",
    statusLabel: "Preconstruction",
    postcode: "EX33",
    place: "Saunton",
    name: "Marisco",
    area: "980 m²",
    duration: "83 weeks",
    description:
      "A magnificent cliff-top family home. Demolition complete; preconstruction under way.",
    layout: "stack",
    images: [
      {
        src: "/projects/marisco-demolished.jpg",
        alt: "Marisco — cliff-top site cleared above the beach at Saunton, ready for construction",
        caption: { label: "Site cleared", meta: "Mar 2026" },
      },
      {
        src: "/projects/marisco-cgi.jpg",
        alt: "Marisco — CGI of the approved contemporary timber-and-stone house stepped into the hillside",
        caption: { label: "The approved design", meta: "CGI" },
      },
    ],
  },
];
