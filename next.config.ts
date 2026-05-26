import type { NextConfig } from "next";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Custom loader prepends basePath to image paths for GitHub Pages static export.
    // next/image does not do this automatically in static export mode.
    loaderFile: "./src/lib/imageLoader.ts",
  },
  trailingSlash: true,
  basePath,
  // Make basePath available at build time so the image loader can use it.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
