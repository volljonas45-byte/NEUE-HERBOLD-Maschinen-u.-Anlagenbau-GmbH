"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Maschinen",
    href: "/maschinen",
    children: [
      { label: "Vorzerkleinerung", href: "/maschinen/vorzerkleinerung" },
      { label: "Schneidmühlen", href: "/maschinen/schneidmuehlen" },
      { label: "Hammermühlen", href: "/maschinen/hammermuehlen" },
      { label: "Feinmühlen", href: "/maschinen/feinmuehlen" },
      { label: "Waschanlagen", href: "/maschinen/waschanlagen" },
      { label: "Peripherie", href: "/maschinen/peripherie" },
      { label: "Gebrauchtmaschinen", href: "/gebrauchtmaschinen" },
    ],
  },
  {
    label: "Branchen",
    href: "/branchen",
    children: [
      { label: "Kunststoffrecycling", href: "/branchen/kunststoffrecycling" },
      { label: "Autoreifen", href: "/branchen/autoreifen" },
      { label: "Kabel & Altkabel", href: "/branchen/kabel-altkabel" },
      { label: "Holz", href: "/branchen/holz" },
      { label: "Kautschuk", href: "/branchen/kautschuk" },
    ],
  },
  { label: "Service", href: "/service" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Karriere", href: "/karriere" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Utility bar ─────────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-deep/95 border-b border-white/8">
        <Container className="flex items-center justify-between h-8">
          <a
            href="tel:+49726192480"
            className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/60 transition-colors"
          >
            <Phone className="size-2.5" />
            +49 (0) 7261 / 9248-0
          </a>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <a href="mailto:info@neue-herbold.de" className="hover:text-white/50 transition-colors">
              info@neue-herbold.de
            </a>
            <span className="h-3 w-px bg-white/15" />
            <span>Sinsheim-Reihen, Germany</span>
          </div>
        </Container>
      </div>

      {/* ── Main header ─────────────────────────────────────────────────── */}
      <header
        className={cn(
          "fixed top-8 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-brand-deep/97 backdrop-blur-xl border-b border-white/8 py-3"
            : "bg-transparent py-5",
        )}
      >
        <Container className="flex items-center justify-between gap-6">
          <Logo variant="dark" size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 text-sm text-white/65 hover:text-white transition-colors",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "size-3 transition-transform duration-200 text-white/35",
                        activeDropdown === item.label && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-3 min-w-52">
                    <div className="bg-brand-deep border border-white/12 shadow-2xl shadow-black/40 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-white/55 hover:text-white hover:bg-white/8 transition-colors border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
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
      </header>

      {/* ── Mobile menu ─────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-brand-deep lg:hidden overflow-y-auto">
          <Container className="pt-28 pb-10 flex flex-col gap-0">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 text-xl font-semibold text-white border-b border-white/8"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="py-2 mb-2 border-b border-white/8">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-4 text-sm text-white/45 hover:text-brand-cyan transition-colors"
                      >
                        {child.label}
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
              <a href="mailto:info@neue-herbold.de" className="block text-sm text-white/35 mt-1">
                info@neue-herbold.de
              </a>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
