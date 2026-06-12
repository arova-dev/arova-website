import type { MetadataRoute } from "next";

// Generates /robots.txt at build time — tells search engines they're welcome
// to crawl the whole site, and points them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://arova.net/sitemap.xml",
    host: "https://arova.net",
  };
}
