import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Zubehör | Service | NEUE HERBOLD",
  description:
    "Originalzubehör für NEUE HERBOLD Maschinen — Messer, Siebe, Schneidplatten, Schlauchverbindungen und mehr.",
};

const kategorien = [
  {
    name: "Messer & Schneidwerkzeuge",
    desc: "Original NEUE HERBOLD Messer für alle Schneidmühlen-Baureihen. Präzisionsgeschliffen, langlebig, sofort montierfertig.",
    items: [
      "Rotormesser für LM-Baureihe",
      "Rotormesser für SM-Baureihe",
      "Rotormesser für SMV/SX/SR",
      "Gegenmesser (Festmesser) für alle Baureihen",
      "Messereinstelllehren",
      "Messerhalter & Befestigungsmaterial",
    ],
    maschinen: ["LM", "SM", "SMV", "SX", "SR"],
  },
  {
    name: "Siebe & Perforationswerkzeuge",
    desc: "Lochsiebe, Schlitzsiebe und Spaltsiebe in allen gängigen Lochweiten — für definierte Korngrößen.",
    items: [
      "Lochsiebe 4–30 mm (Standardsorten auf Lager)",
      "Schlitzsiebe für Folien-Anwendungen",
      "Spaltsiebe für spröde Materialien",
      "Siebringe und Siebrahmen",
    ],
    maschinen: ["LM", "SM", "SMV", "SX", "HM"],
  },
  {
    name: "Verschleißteile Schredder",
    desc: "Reiß-, Schlitz- und Stanzmesser sowie Verschleißplatten für alle Schredder-Baureihen.",
    items: [
      "Reißmesser für HZR-Baureihe",
      "Gegenmesser und Abstreifer",
      "Verschleißplatten Gehäuse",
      "Messerhalter und Klemmteile",
    ],
    maschinen: ["HZR", "ZRM", "SB", "GS"],
  },
  {
    name: "Lager & Antriebselemente",
    desc: "Rollenlager, Riemenscheiben, Keilriemen und Kupplungselemente — Original-Qualität für langen Lauf.",
    items: [
      "Rollenlager (Typenreihe auf Anfrage)",
      "Keilriemen und Zahnriemen",
      "Riemenscheiben",
      "Kupplungselemente (Hydro-Kupplung)",
      "Wellendichtringe",
    ],
    maschinen: ["Alle Baureihen"],
  },
  {
    name: "Steuerungstechnik & Elektrik",
    desc: "Ersatzteile für Steuerungen, Frequenzumrichter und Sensoren — kompatibel mit Siemens SIMATIC S7.",
    items: [
      "Siemens SIMATIC S7 Module",
      "Frequenzumrichter",
      "Endschalter und Sensoren",
      "Touch-Screen-Einheiten",
      "Kabelschutzschläuche und Verbindungen",
    ],
    maschinen: ["Alle Baureihen"],
  },
];

export default function ZubehoerPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Service
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Original-Zubehör &<br />
              <span className="text-brand-cyan">Verschleißteile.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Als Hersteller liefern wir alle Verschleißteile und Zubehör in
              Original-Qualität — für maximale Standzeiten und Maschinenleistung.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Original", label: "Qualität" },
              { value: "Lager", label: "Schnelle Lieferung" },
              { value: "Alle", label: "Baureihen" },
              { value: "24h", label: "Antwortzeit" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Zubehör-Kategorien ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-3">
              Zubehör-Sortiment
            </p>
            <h2 className="text-3xl font-bold text-brand-blue">
              Was wir liefern
            </h2>
          </div>

          <div className="space-y-4">
            {kategorien.map((kat) => (
              <div
                key={kat.name}
                className="border border-graphite-200 hover:border-brand-cyan/30 transition-all"
              >
                <div className="p-6 grid md:grid-cols-[2fr_1fr] gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2">
                      {kat.name}
                    </h3>
                    <p className="text-sm text-graphite-600 leading-relaxed mb-4">
                      {kat.desc}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {kat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-graphite-600"
                        >
                          <span className="mt-2 size-1 rounded-full bg-brand-cyan shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-widest text-graphite-400 mb-2">
                      Kompatible Baureihen
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {kat.maschinen.map((m) => (
                        <span
                          key={m}
                          className="text-xs font-mono text-brand-blue bg-brand-blue/8 px-2 py-0.5"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/kontakt/ersatzteil-anfrage"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold hover:gap-2.5 transition-all"
                    >
                      Anfragen <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Anfrage-Box ────────────────────────────────────────────── */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-deep p-8">
              <p className="text-brand-cyan text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                Ersatzteil-Anfrage
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">
                Schnell zum richtigen Ersatzteil.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Geben Sie Maschinentyp, Seriennummer und benötigtes Teil an —
                wir melden uns innerhalb von 24 Stunden mit Verfügbarkeit und Preis.
              </p>
              <Link
                href="/kontakt/ersatzteil-anfrage"
                className="inline-flex items-center gap-2 h-10 px-6 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Ersatzteil anfragen <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="bg-white border border-graphite-200 p-8">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-graphite-400 mb-4">
                Hinweis
              </p>
              <h3 className="text-xl font-bold text-brand-blue mb-3">
                Original-Teile schützen Ihre Maschine
              </h3>
              <p className="text-sm text-graphite-600 leading-relaxed">
                Nur Original NEUE HERBOLD Teile sind für die jeweilige Baureihe
                konstruiert und geprüft. Nachbauten können zu Maschinenausfall,
                erhöhtem Verschleiß und dem Erlöschen der Gewährleistung führen.
              </p>
              <div className="mt-5 pt-5 border-t border-graphite-200 space-y-2">
                <a
                  href="tel:+49726192485"
                  className="flex items-center gap-2.5 text-sm text-graphite-600 hover:text-brand-blue transition-colors"
                >
                  <span className="text-brand-cyan text-xs">TEL</span>
                  +49 (0) 7261 / 9248-53 (J. Fuchs, Ersatzteile)
                </a>
                <a
                  href="mailto:info@neue-herbold.de"
                  className="flex items-center gap-2.5 text-sm text-graphite-600 hover:text-brand-blue transition-colors"
                >
                  <span className="text-brand-cyan text-xs">E-MAIL</span>
                  info@neue-herbold.de
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Ersatzteil nicht gefunden?</h2>
              <p className="mt-2 text-white/50 text-sm">
                Kontaktieren Sie uns direkt — wir haben alle Teile für alle Baureihen.
              </p>
            </div>
            <Link
              href="/kontakt/ersatzteil-anfrage"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
            >
              Ersatzteil anfragen <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
