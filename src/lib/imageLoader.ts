/**
 * Custom Next.js image loader for static export (GitHub Pages).
 *
 * When basePath is set (e.g. /NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH),
 * next/image does NOT automatically prepend it to the src in the static export.
 * This loader fixes that by prepending NEXT_PUBLIC_BASE_PATH at build time.
 */
export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (base && src.startsWith("/") && !src.startsWith(base)) {
    return `${base}${src}`;
  }
  return src;
}
