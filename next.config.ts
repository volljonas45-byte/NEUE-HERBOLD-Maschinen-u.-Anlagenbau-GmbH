import type { NextConfig } from "next";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  // Expose basePath to client components so NHImage can prepend it to src paths.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
