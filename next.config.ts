import type { NextConfig } from "next";

/**
 * GitHub Pages serves this project at /maryland-blue-crab-company/.
 * Local `next dev` uses the same basePath so links match production.
 * Drop or empty PAGES_BASE_PATH when moving to a custom domain root.
 */
const basePath =
  process.env.PAGES_BASE_PATH ?? "/maryland-blue-crab-company";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
