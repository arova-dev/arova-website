import type { MetadataRoute } from "next";

// Required for static export (`output: 'export'`): emit a static file.
export const dynamic = "force-static";

// Generates /sitemap.xml at build time — a simple list of the site's pages
// that search engines use to discover and crawl everything. Add a line here
// if you ever add a new page.
const base = "https://arova.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/who-we-are/", "/what-we-do/", "/where-we-do-it/", "/contact/"];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
