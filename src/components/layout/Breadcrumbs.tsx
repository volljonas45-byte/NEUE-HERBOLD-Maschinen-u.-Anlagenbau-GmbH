"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const pathLabels: Record<string, string> = {
  maschinen: "Maschinen",
  vorzerkleinerung: "Vorzerkleinerung",
  schneidmuehlen: "Schneidmühlen",
  hammermuehlen: "Hammermühlen",
  feinmuehlen: "Feinmühlen",
  waschanlagen: "Waschanlagen",
  peripherie: "Peripherie",
  branchen: "Branchen",
  kunststoffrecycling: "Kunststoffrecycling",
  autoreifen: "Autoreifen",
  "kabel-altkabel": "Kabel & Altkabel",
  holz: "Holz",
  kautschuk: "Kautschuk",
  daemmstoffe: "Dämmstoffe",
  gebrauchtmaschinen: "Gebrauchtmaschinen",
  service: "Service",
  ersatzteile: "Ersatzteile",
  reparaturen: "Reparaturen",
  zubehoer: "Zubehör",
  technikum: "Technikum",
  unternehmen: "Unternehmen",
  "ueber-uns": "Über uns",
  historie: "Historie",
  standort: "Standort",
  mitgliedschaften: "Mitgliedschaften",
  nachhaltigkeit: "Nachhaltigkeit",
  karriere: "Karriere",
  stellenangebote: "Stellenangebote",
  ausbildung: "Ausbildung",
  initiativbewerbung: "Initiativbewerbung",
  aktuelles: "Aktuelles",
  news: "News",
  messen: "Messen",
  downloads: "Downloads",
  kontakt: "Kontakt",
  anfrage: "Anfrage",
  "ersatzteil-anfrage": "Ersatzteil-Anfrage",
  ansprechpartner: "Ansprechpartner",
  anfahrt: "Anfahrt",
  rechtliches: "Rechtliches",
  impressum: "Impressum",
  datenschutz: "Datenschutz",
  agb: "AGB",
  // Machine sub-pages
  einwellenschredder: "Einwellenschredder HZR",
  zweiwellenschredder: "Zweiwellenschredder ZRM",
  schneckenbrecher: "Schneckenbrecher SB",
  guillotinescheren: "Guillotinescheren GS",
  rohrschredder: "Rohrschredder HZR",
  styroporshredder: "Styroporshredder RL",
  lm: "Schneidmühle LM",
  sm: "Schneidmühle SM",
  smv: "Schneidmühle SMV",
  sx: "Schneidmühlen SX",
  sr: "Rohrmühlen SR",
  lp: "Profilmühle LP",
  zm: "Feinmühlen ZM",
};

function toLabel(segment: string): string {
  if (pathLabels[segment]) return pathLabels[segment];
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

type BreadcrumbsProps = {
  className?: string;
  variant?: "light" | "dark";
  inContainer?: boolean;
};

export function Breadcrumbs({
  className,
  variant = "light",
  inContainer = true,
}: BreadcrumbsProps) {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: toLabel(seg),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));

  const isDark = variant === "dark";

  const nav = (
    <nav aria-label="Breadcrumb" className={cn("py-3", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        <li>
          <Link
            href="/"
            className={cn(
              "flex items-center transition-colors",
              isDark
                ? "text-white/35 hover:text-white/60"
                : "text-graphite-400 hover:text-graphite-600",
            )}
            aria-label="Startseite"
          >
            <Home className="size-3" />
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <ChevronRight
              className={cn(
                "size-3 shrink-0",
                isDark ? "text-white/15" : "text-graphite-300",
              )}
            />
            {i === crumbs.length - 1 ? (
              <span
                className={cn(
                  "font-medium",
                  isDark ? "text-white/70" : "text-graphite-700",
                )}
                aria-current="page"
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className={cn(
                  "transition-colors",
                  isDark
                    ? "text-white/35 hover:text-white/60"
                    : "text-graphite-400 hover:text-graphite-600",
                )}
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );

  if (inContainer) {
    return <Container>{nav}</Container>;
  }

  return nav;
}
