import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Peripherie & Zubehör | Maschinen | NEUE HERBOLD",
  description:
    "Periphere Komponenten für Recyclinganlagen von NEUE HERBOLD — Absauganlagen, Sichter, Metalldetektoren, Silos und mehr.",
};

const aggregate = [
  {
    kuerzel: "MFT",
    name: "Absauganlagen MFT",
    desc: "Mobilfiltertechnik für die Entstaubung von Schneid- und Feinmühlen. Pneumatische Rückreinigung, staubdichtes Gehäuse.",
    anwendung: "Entstaubung nach LM/SM/HM/ZM",
    ytId: "fqJ4G8xg-Q4",
  },
  {
    kuerzel: "HS",
    name: "Feingutabscheider HS",
    desc: "Entfernt Aufkleber, Papieranhaftungen und Feinstaub aus dem Mahlgut. Einsatz vor und nach Waschanlagen.",
    anwendung: "PET-Aufbereitung, Folienrecycling",
    ytId: null,
  },
  {
    kuerzel: "ZS",
    name: "Zick-Zack-Sichter ZS",
    desc: "Trennt Leichtstoffanteile (Etiketten, Folienreste, Stäube) vom schweren Granulat durch Gegenstromluft.",
    anwendung: "Hinter Schneidmühlen und Waschanlagen",
    ytId: null,
  },
  {
    kuerzel: "TSM",
    name: "Taumelsiebmaschine TSM",
    desc: "Siebung von Granulaten und Entfernung von Schwebeteilen aus dem Abwasser. Verschiedene Maschenweiten.",
    anwendung: "Granulat-Klassierung, Abwasserbehandlung",
    ytId: null,
  },
  {
    kuerzel: "MD",
    name: "Metalldetektoren",
    desc: "Inline-Metalldetektion zum Schutz nachfolgender Maschinen. NE-Metalle und Eisenmetalle.",
    anwendung: "Schutz vor Metallverunreinigungen",
    ytId: null,
  },
  {
    kuerzel: "FS",
    name: "Puffersilo FS / Rundsilos",
    desc: "Runde oder eckige Vorratsbehälter aus Stahl für Mahlgut, Granulat und Flakes. Volumina auf Anfrage.",
    anwendung: "Pufferung zwischen Anlagenstufen",
    ytId: null,
  },
];

export default function PeripheriePage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Maschinen
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Peripherie & Zubehör —<br />
              <span className="text-brand-cyan">die komplette Anlage.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Absauganlagen, Sichter, Metalldetektoren, Silos und weitere periphere
              Komponenten für schlüsselfertige Recyclinganlagen.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Aggregate ──────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-3">
              Periphere Komponenten
            </p>
            <h2 className="text-3xl font-bold text-brand-blue">
              Komplettanlagen aus einer Hand
            </h2>
            <p className="mt-3 text-graphite-600 text-sm max-w-2xl leading-relaxed">
              NEUE HERBOLD liefert nicht nur Maschinen — sondern schlüsselfertige Anlagen
              inklusive aller peripheren Komponenten, Steuerung und Inbetriebnahme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aggregate.map((ag) => (
              <div
                key={ag.kuerzel}
                className="border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-md transition-all p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center size-10 bg-brand-blue/8 text-brand-blue font-bold text-sm font-mono">
                    {ag.kuerzel}
                  </span>
                  <h3 className="font-bold text-brand-blue text-base leading-tight">
                    {ag.name}
                  </h3>
                </div>
                <p className="text-sm text-graphite-600 leading-relaxed mb-4">
                  {ag.desc}
                </p>
                <div className="pt-3 border-t border-graphite-200">
                  <p className="text-[0.6rem] uppercase tracking-widest text-graphite-400 mb-1">
                    Typische Anwendung
                  </p>
                  <p className="text-xs font-medium text-brand-blue">{ag.anwendung}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Waschanlagen Verweis ────────────────────────────────────── */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-graphite-200 p-7">
              <h3 className="text-lg font-bold text-brand-blue mb-2">
                Waschanlagen-Aggregate
              </h3>
              <p className="text-sm text-graphite-600 leading-relaxed mb-4">
                Einweichschnecke ES, Friktionswäscher FW/FA, Intensivwäscher IW,
                Mechanischer Trockner TM, Thermischer Trockner TT und mehr —
                alle Waschanlagen-Komponenten finden Sie auf der Waschanlagen-Seite.
              </p>
              <Link
                href="/maschinen/waschanlagen"
                className="inline-flex items-center gap-2 text-sm text-brand-cyan font-semibold hover:gap-3 transition-all"
              >
                Zu den Waschanlagen <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="bg-brand-deep p-7">
              <h3 className="text-lg font-bold text-white mb-2">
                Komplettanlage planen?
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                Schildern Sie uns Ihre Aufgabenstellung — wir planen die
                passende Anlage inklusive aller peripheren Komponenten.
              </p>
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-2 h-9 px-5 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Anfrage stellen <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Alle Maschinen im Überblick
              </h2>
              <p className="mt-2 text-white/50 text-sm">
                Schneidmühlen, Schredder, Feinmühlen und Waschanlagen.
              </p>
            </div>
            <Link
              href="/maschinen"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
            >
              Alle Maschinen <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
