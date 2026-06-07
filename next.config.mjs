/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a plain folder of HTML/CSS/JS in `out/`,
  // ready to host on Vercel, GitHub Pages, or any static host.
  output: 'export',

  // Static export can't optimise images on the fly, so serve them as-is.
  // (No <Image> optimisation server at runtime.)
  images: { unoptimized: true },

  // Emit /who-we-are/index.html instead of /who-we-are.html so routes work
  // on any static host without special rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
