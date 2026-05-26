/**
 * NHImage — drop-in replacement for next/image that prepends NEXT_PUBLIC_BASE_PATH
 * to all absolute src paths at render time.
 *
 * next/image in static-export mode does not automatically apply basePath to
 * image src attributes. This wrapper fixes that for GitHub Pages deployments
 * where the site lives under a sub-path (e.g. /NEUE-HERBOLD-…).
 */
import NextImage, { type ImageProps } from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NHImage({ src, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/") && BASE
      ? `${BASE}${src}`
      : src;
  return <NextImage src={resolved} {...props} />;
}
