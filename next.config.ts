import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath:
    process.env.NODE_ENV === "production"
      ? "/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH"
      : "",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
