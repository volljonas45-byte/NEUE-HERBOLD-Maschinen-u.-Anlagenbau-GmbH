import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Download } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Downloads | NEUE HERBOLD",
  description:
    "Downloads von NEUE HERBOLD — Produktdatenblätter, Broschüren, technische Unterlagen und mehr.",
};

const kategorien = [
  {
    name: "Produktbroschüren",
    desc: "Technische Broschüren zu allen Maschinenbaureihen",
    downloads: [
      { name: "Schneidmühlen LM/SM/SMV/SX — Gesamtbroschüre", format: "PDF", verfuegbar: false },
      { name: "Vorzerkleinerung HZR/ZRM/SB/GS — Gesamtbroschüre", format: "PDF", verfuegbar: false },
      { name: "Feinmühlen ZM — Datenblatt", format: "PDF", verfuegbar: false },
      { name: "Hammermühlen HM — Datenblatt", format: "PDF", verfuegbar: false },
      { name: "Waschanlagen — Modulübersicht", format: "PDF", verfuegbar: false },
    ],
  },
  {
    name: "Technische Datenblätter",
    desc: "Detaillierte Spezifikationen einzelner Maschinen",
    downloads: [
      { name: "LM 300 — Technisches Datenblatt", format: "PDF", verfuegbar: false },
      { name: "SM 500 — Technisches Datenblatt", format: "PDF", verfuegbar: false },
      { name: "ZM 800 — Technisches Datenblatt", format: "PDF", verfuegbar: false },
      { name: "HZR 1300 — Technisches Datenblatt", format: "PDF", verfuegbar: false },
    ],
  },
  {
    name: "Unternehmensunterlagen",
    desc: "Informationen über NEUE HERBOLD als Unternehmen",
    downloads: [
      { name: "Unternehmensbroschüre NEUE HERBOLD", format: "PDF", verfuegbar: false },
      { name: "Allgemeine Geschäftsbedingungen (AGB)", format: "PDF", verfuegbar: false },
      { name: "Allgemeine Einkaufsbedingungen", format: "PDF", verfuegbar: false },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Downloads
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Technische Unterlagen &<br />
              <span className="text-brand-cyan">Broschüren.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Produktdatenblätter, Broschüren und technische Unterlagen zu allen
              NEUE HERBOLD Maschinen und Anlagen.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Info Banner ────────────────────────────────────────────── */}
      <section className="bg-brand-blue/50 border-b border-white/10">
        <Container className="py-4">
          <p className="text-sm text-white/60 text-center">
            PDFs werden in Kürze verfügbar sein. Für Unterlagen sprechen Sie uns gerne direkt an —{" "}
            <Link href="/kontakt" className="text-brand-cyan hover:underline">
              info@neue-herbold.de
            </Link>
          </p>
        </Container>
      </section>

      {/* ─── Download-Kategorien ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="space-y-14">
            {kategorien.map((kat) => (
              <div key={kat.name}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="block h-px w-5 bg-brand-cyan shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-brand-blue">{kat.name}</h2>
                    <p className="text-sm text-graphite-500 mt-0.5">{kat.desc}</p>
                  </div>
                </div>

                <div className="border border-graphite-200 divide-y divide-graphite-200">
                  {kat.downloads.map((dl) => (
                    <div
                      key={dl.name}
                      className="flex items-center justify-between px-5 py-4 hover:bg-graphite-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="size-8 bg-graphite-100 flex items-center justify-center shrink-0">
                          <FileText className="size-4 text-graphite-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-brand-blue truncate">
                            {dl.name}
                          </p>
                          <p className="text-xs text-graphite-400 font-mono">{dl.format}</p>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        {dl.verfuegbar ? (
                          <button className="inline-flex items-center gap-1.5 h-8 px-4 bg-brand-cyan text-brand-blue text-xs font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors">
                            <Download className="size-3" />
                            Download
                          </button>
                        ) : (
                          <span className="text-xs text-graphite-400 bg-graphite-100 px-3 py-1 rounded-sm">
                            Auf Anfrage
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Anfrage Box ────────────────────────────────────────────── */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <div className="bg-brand-deep p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="text-brand-cyan text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                Unterlagen anfragen
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">
                Benötigen Sie spezifische Unterlagen?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Technische Datenblätter, CAD-Daten oder spezielle Dokumentation —
                unser Team stellt Ihnen die benötigten Unterlagen gerne zur Verfügung.
              </p>
            </div>
            <Link
              href="/kontakt/anfrage"
              className="inline-flex items-center gap-2 h-11 px-6 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors shrink-0"
            >
              Unterlagen anfragen <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
