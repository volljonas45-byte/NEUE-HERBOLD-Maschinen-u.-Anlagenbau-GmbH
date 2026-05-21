"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout/Container";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { cn } from "@/lib/utils";

/* ─── Navigation Data ──────────────────────────────────────────── */

type NavChild = { label: string; href: string; desc?: string };
type MegaSection = { title: string; items: NavChild[] };
type NavItem = {
  label: string;
  href: string;
  mega?: MegaSection[];
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Maschinen",
    href: "/maschinen",
    mega: [
      {
        title: "Vorzerkleinerung",
        items: [
          { label: "Einwellenschredder HZR", href: "/maschinen/vorzerkleinerung", desc: "Ballenwaren, massive Klumpen" },
          { label: "Zweiwellenschredder ZRM", href: "/maschinen/vorzerkleinerung", desc: "Folien, Autoreifen, Fässer" },
          { label: "Schneckenbrecher SB", href: "/maschinen/vorzerkleinerung", desc: "Holzpaletten, Kabeltrommeln" },
          { label: "Guillotinescheren GS", href: "/maschinen/vorzerkleinerung", desc: "Faserballen, Kautschukballen" },
        ],
      },
      {
        title: "Nachzerkleinerung",
        items: [
          { label: "Schneidmühlen LM / SM / SMV", href: "/maschinen/schneidmuehlen", desc: "Universell, Doppelschrägschnitt" },
          { label: "Hochleistungsmühlen SX", href: "/maschinen/schneidmuehlen", desc: "Bis 15 t/h Durchsatz" },
          { label: "Rohrmühlen SR / Profilmühlen LP", href: "/maschinen/schneidmuehlen", desc: "Rohrabfälle bis 1.600 mm" },
          { label: "Hammermühlen HM", href: "/maschinen/hammermuehlen", desc: "Holz, Elektroschrott, Wolle" },
        ],
      },
      {
        title: "Feinmahlung & Waschen",
        items: [
          { label: "Feinmühlen ZM", href: "/maschinen/feinmuehlen", desc: "Pulverisierung bis < 1 mm" },
          { label: "Waschanlagen", href: "/maschinen/waschanlagen", desc: "PE/PP 250 – 2.000 kg/h" },
          { label: "Peripherie & Zubehör", href: "/maschinen/peripherie", desc: "ZS · HS · MFT · Silos" },
          { label: "Gebrauchtmaschinen", href: "/gebrauchtmaschinen", desc: "Schnell verfügbar" },
        ],
      },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen",
    children: [
      { label: "Kunststoffrecycling", href: "/branchen/kunststoffrecycling", desc: "PET, PE/PP, Folien, Kästen" },
      { label: "Autoreifen", href: "/branchen/autoreifen", desc: "Gummigranulat & -mehl" },
      { label: "Kabel & Altkabel", href: "/branchen/kabel-altkabel", desc: "Cu / Al-Rückgewinnung" },
      { label: "Holz", href: "/branchen/holz", desc: "Hackschnitzel, Biomasse" },
      { label: "Kautschuk", href: "/branchen/kautschuk", desc: "Temperaturschonende Aufbereitung" },
    ],
  },
  { label: "Service", href: "/service" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Karriere", href: "/karriere" },
];

/* ─── Component ─────────────────────────────────────────────────── */

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const cancelClose = (name?: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (name !== undefined) setActiveDropdown(name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 80) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(y < lastScrollY.current);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const activeMegaItem = activeDropdown
    ? navItems.find((n) => n.label === activeDropdown && n.mega)
    : null;

  return (
    <>
      {/* ── Main header ─────────────────────────────────────────────── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          headerVisible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "bg-brand-deep/97 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent",
        )}
        onMouseLeave={scheduleClose}
        onMouseEnter={() => cancelClose()}
      >
        <Container
          className={cn(
            "flex items-center justify-between gap-6 transition-all duration-300",
            scrolled ? "py-3" : "py-5",
          )}
        >
          <Logo variant="dark" size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => cancelClose(item.label)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 px-3.5 py-2 text-sm transition-colors",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {item.label}
                  {(item.mega || item.children) && (
                    <ChevronDown
                      className={cn(
                        "size-3 transition-transform duration-200",
                        isActive(item.href) ? "text-white/50" : "text-white/30",
                        activeDropdown === item.label && "rotate-180",
                      )}
                    />
                  )}
                  {/* Active underline */}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-brand-cyan" />
                  )}
                </Link>

                {/* Simple dropdown (Branchen etc.) */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 pt-2 min-w-60 z-50"
                    onMouseEnter={() => cancelClose(item.label)}
                  >
                    <div className="bg-brand-deep border border-white/12 shadow-2xl shadow-black/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className={cn(
                            "flex flex-col px-4 py-3 border-b border-white/5 last:border-0 transition-colors",
                            isActive(child.href)
                              ? "bg-white/8 text-white"
                              : "text-white/60 hover:text-white hover:bg-white/8",
                          )}
                        >
                          <span className="text-sm">{child.label}</span>
                          {child.desc && (
                            <span className="text-[0.65rem] text-white/30 mt-0.5">
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center p-2 text-white/40 hover:text-white/70 transition-colors"
              aria-label="Suche öffnen (⌘K)"
            >
              <Search className="size-4" />
            </button>

            <Link
              href="/kontakt"
              className="hidden lg:inline-flex items-center gap-1.5 h-8 px-5 text-xs font-semibold bg-brand-cyan text-brand-blue hover:bg-brand-cyan-bright transition-colors"
            >
              Kontakt
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 text-white/60 hover:text-white transition-colors"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>

        {/* ── Mega menu panel ─────────────────────────────────────────── */}
        {activeMegaItem && (
          <div
            className="absolute left-0 right-0 top-full bg-brand-deep/98 backdrop-blur-xl border-t border-white/8 border-b border-white/8 shadow-2xl shadow-black/60"
            onMouseEnter={() => cancelClose(activeMegaItem.label)}
          >
            <Container className="py-8">
              <div className="grid grid-cols-3 gap-10">
                {activeMegaItem.mega!.map((section) => (
                  <div key={section.title}>
                    <p className="text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-white/25 mb-4">
                      {section.title}
                    </p>
                    <div className="space-y-0.5">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className={cn(
                            "group flex flex-col px-3 py-2.5 -mx-3 transition-colors",
                            isActive(item.href)
                              ? "bg-white/[0.06]"
                              : "hover:bg-white/[0.06]",
                          )}
                        >
                          <span
                            className={cn(
                              "text-sm transition-colors",
                              isActive(item.href)
                                ? "text-brand-cyan"
                                : "text-white/70 group-hover:text-white",
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="text-[0.65rem] text-white/30 mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                <Link
                  href={activeMegaItem.href}
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:text-brand-cyan-bright transition-colors"
                >
                  Alle Maschinen ansehen <ArrowRight className="size-3.5" />
                </Link>
                <span className="text-[0.65rem] text-white/20 font-mono tracking-wider">
                  30+ Maschinentypen · Made in Sinsheim
                </span>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-brand-deep lg:hidden overflow-y-auto">
          <Container className="pt-24 pb-10 flex flex-col">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between border-b border-white/8">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex-1 py-4 text-xl font-semibold",
                      isActive(item.href) ? "text-brand-cyan" : "text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                  {(item.mega || item.children) && (
                    <button
                      onClick={() =>
                        setOpenMobileItem(
                          openMobileItem === item.label ? null : item.label,
                        )
                      }
                      className="p-4 text-white/40 hover:text-white/70 transition-colors"
                      aria-label="Untermenü umschalten"
                    >
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          openMobileItem === item.label && "rotate-180",
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Accordion content */}
                {openMobileItem === item.label && (
                  <div className="py-3 mb-2 border-b border-white/8">
                    {item.mega?.map((section) => (
                      <div key={section.title} className="mb-4 last:mb-0">
                        <p className="text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-white/25 pl-4 py-1.5">
                          {section.title}
                        </p>
                        {section.items.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block py-2 pl-6 text-sm transition-colors",
                              isActive(child.href)
                                ? "text-brand-cyan"
                                : "text-white/50 hover:text-brand-cyan",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-2.5 pl-4 pr-2 text-sm transition-colors border-b border-white/5 last:border-0",
                          isActive(child.href)
                            ? "text-brand-cyan"
                            : "text-white/50 hover:text-brand-cyan",
                        )}
                      >
                        <span>{child.label}</span>
                        {child.desc && (
                          <span className="text-[0.65rem] text-white/25 font-mono">
                            {child.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8">
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-12 bg-brand-cyan text-brand-blue font-semibold text-sm"
              >
                Kontakt aufnehmen
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-white/8">
              <a href="tel:+49726192480" className="block text-sm text-white/35">
                +49 (0) 7261 / 9248-0
              </a>
              <a
                href="mailto:info@neue-herbold.de"
                className="block text-sm text-white/35 mt-1"
              >
                info@neue-herbold.de
              </a>
            </div>
          </Container>
        </div>
      )}

      {/* ── Search overlay ──────────────────────────────────────────── */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
