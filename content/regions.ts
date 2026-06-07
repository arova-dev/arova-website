// =====================================================================
//  COVERAGE REGIONS  —  the "Areas we build" chips on "Where we do it"
// =====================================================================
//
//  HOW TO EDIT:
//   • Change a region's name by editing the text in "quotes".
//   • Add one by copying a { ... } line and editing it (keep the comma).
//   • Remove one by deleting its line.
//   • Set "home: true" on exactly ONE region — that's your base (it gets
//     the cyan highlight). All the others should be "home: false".
//
//  These chips appear in the order listed here.
// =====================================================================

export type Region = {
  name: string; // shown on the chip, e.g. "North Devon"
  home?: boolean; // true = your home region (cyan highlighted). Use on one only.
};

export const regions: Region[] = [
  { name: "North Devon", home: true },
  { name: "Exmoor" },
  { name: "Mid & South Devon" },
  { name: "North Cornwall" },
  { name: "The Cornish coast" },
];
