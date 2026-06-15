// =====================================================================
//  SITE DETAILS  —  contact info, address, and navigation
// =====================================================================
//
//  HOW TO EDIT: change the text in "quotes". These values are used across
//  the whole site (top bar, footer, contact page), so editing here updates
//  every page at once.
//
//  ⚠  Confirm email and phone with the team before launch — they were
//     carried over from old marketing material. The address and company
//     number below are the confirmed current details.
// =====================================================================

export const site = {
  // The legal company line shown in the Contact-page footer.
  companyName: "Arova Ltd",
  companyNumber: "16728635",
  copyrightYear: "2026",

  // How to reach the studio.
  email: "hello@arova.net",

  // The team's phone numbers, shown on the Contact page in this order.
  //   display = how the number looks on the page (spaces/dashes are fine)
  //   href    = the SAME number with digits only (no spaces, dashes or brackets),
  //             used for the tap-to-call link
  //   name    = whose phone it is
  phones: [
    { name: "Alan", display: "+44 (0)7802-373796", href: "+447802373796" },
    { name: "Neil", display: "+44 (0)7590-383938", href: "+447590383938" },
    { name: "Ollie", display: "+44 (0)7429-205202", href: "+447429205202" },
  ],

  // The studio address (each line shown on its own row on the Contact page).
  address: {
    label: "Barnstaple, North Devon",
    lines: ["Unit 1a, Onyx Business Park,", "Enterprise Road, Barnstaple,", "EX31 3ZD"],
  },

  // The short location line shown in the footer of most pages.
  footerMeta: "Barnstaple · North Devon",

  // Opening hours, shown on the Contact page.
  hours: {
    value: "Mon–Fri",
    sub: "Site visits by arrangement, across the region.",
  },
};

// The four inner pages, in nav order. Used by the top bar, footer, and the
// home-page "flow" panels — edit a label here and it changes everywhere.
export type NavItem = {
  href: string; // the page address
  label: string; // the words shown
  key: "who" | "what" | "where" | "contact"; // internal id for highlighting the active page
};

export const nav: NavItem[] = [
  { href: "/who-we-are", label: "Who we are", key: "who" },
  { href: "/what-we-do", label: "What we do", key: "what" },
  { href: "/where-we-do-it", label: "Where we do it", key: "where" },
  { href: "/contact", label: "Contact", key: "contact" },
];
