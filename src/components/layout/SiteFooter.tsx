import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/layout/Container";

const footerColumns = [
  {
    title: "Maschinen",
    links: [
      { label: "Vorzerkleinerung", href: "/maschinen/vorzerkleinerung" },
      { label: "Schneidmühlen", href: "/maschinen/schneidmuehlen" },
      { label: "Hammermühlen", href: "/maschinen/hammermuehlen" },
      { label: "Feinmühlen", href: "/maschinen/feinmuehlen" },
      { label: "Waschanlagen", href: "/maschinen/waschanlagen" },
      { label: "Gebrauchtmaschinen", href: "/gebrauchtmaschinen" },
    ],
  },
  {
    title: "Branchen",
    links: [
      { label: "Kunststoffrecycling", href: "/branchen/kunststoffrecycling" },
      { label: "Autoreifen", href: "/branchen/autoreifen" },
      { label: "Kabel & Altkabel", href: "/branchen/kabel-altkabel" },
      { label: "Holz", href: "/branchen/holz" },
      { label: "Kautschuk", href: "/branchen/kautschuk" },
      { label: "Dämmstoffe", href: "/branchen/daemmstoffe" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/unternehmen/ueber-uns" },
      { label: "Service", href: "/service" },
      { label: "Karriere", href: "/karriere" },
      { label: "Aktuelles", href: "/aktuelles" },
      { label: "Downloads", href: "/downloads" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white/80">
      {/* Main footer columns */}
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="dark" size="md" asLink={false} />
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Hersteller von Recycling- und Zerkleinerungsmaschinen.
              Seit 1995 in Sinsheim.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href="tel:+49726192480"
                className="flex items-center gap-2.5 text-white/60 hover:text-brand-cyan transition-colors"
              >
                <Phone className="size-3.5 shrink-0" />
                +49 (0) 7261 / 9248-0
              </a>
              <a
                href="mailto:info@neue-herbold.de"
                className="flex items-center gap-2.5 text-white/60 hover:text-brand-cyan transition-colors"
              >
                <Mail className="size-3.5 shrink-0" />
                info@neue-herbold.de
              </a>
              <div className="flex items-start gap-2.5 text-white/60">
                <MapPin className="size-3.5 shrink-0 mt-0.5" />
                <span>
                  Wiesenstraße 44
                  <br />
                  74889 Sinsheim-Reihen
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="http://www.youtube.com/user/NeueHerbold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan text-white/50 transition-colors"
              >
                {/* YouTube icon (inline SVG — not in lucide-react v1) */}
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-brand-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} NEUE HERBOLD Maschinen- und Anlagenbau GmbH
          </p>
          <div className="flex items-center gap-4">
            <Link href="/rechtliches/impressum" className="hover:text-white/70 transition-colors">
              Impressum
            </Link>
            <Link href="/rechtliches/datenschutz" className="hover:text-white/70 transition-colors">
              Datenschutz
            </Link>
            <Link href="/rechtliches/agb" className="hover:text-white/70 transition-colors">
              AGB
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
