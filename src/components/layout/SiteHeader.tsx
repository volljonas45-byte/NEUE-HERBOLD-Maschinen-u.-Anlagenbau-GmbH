"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
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
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-deep/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
            : "bg-gradient-to-b from-brand-deep to-transparent py-5",
        )}
      >
        <Container className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Logo variant="dark" size="md" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
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
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 rounded-lg",
                    "hover:text-white hover:bg-white/10 transition-colors duration-200",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-52">
                    <div className="bg-brand-deep border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
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
              className="hidden lg:inline-flex items-center h-9 px-5 text-sm font-semibold rounded-lg bg-brand-cyan text-brand-blue hover:bg-brand-cyan-bright hover:shadow-[0_0_16px_rgba(0,200,255,0.35)] transition-all duration-200"
            >
              Anfrage stellen
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-deep lg:hidden">
          <div className="flex flex-col h-full pt-24 pb-8 overflow-y-auto">
            <Container className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-2 text-lg font-semibold text-white border-b border-white/10"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="size-4 text-white/40" />}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-white/60 hover:text-brand-cyan transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-12 rounded-xl bg-brand-cyan text-brand-blue font-semibold text-base"
                >
                  Anfrage stellen
                </Link>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
