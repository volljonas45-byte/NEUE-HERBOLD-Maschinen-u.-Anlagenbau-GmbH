import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { industryCategories } from "@/data/industries";

export const metadata: Metadata = {
  title: "Branchen & Anwendungen | NEUE HERBOLD",
  description:
    "Maßgeschneiderte Recyclinganlagen für Kunststoff, Autoreifen, Kabel, Holz, Kautschuk und Dämmstoffe.",
};

const categoryColors: Record<string, string> = {
  kunststoffrecycling: "from-brand-blue to-brand-deep",
  autoreifen: "from-[#1a3a1a] to-[#0a1f0a]",
  "kabel-altkabel": "from-[#3a1a00] to-[#1f0e00]",
  holz: "from-[#3a2a00] to-[#1f1600]",
  kautschuk: "from-[#1a003a] to-[#0e001f]",
  daemmstoffe: "from-[#003a3a] to-[#001f1f]",
};

const categoryAccents: Record<string, string> = {
  kunststoffrecycling: "text-brand-cyan",
  autoreifen: "text-green-400",
  "kabel-altkabel": "text-orange-400",
  holz: "text-yellow-400",
  kautschuk: "text-purple-400",
  daemmstoffe: "text-teal-400",
};

export default function BranchenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Branchen & Anwendungen
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Lösungen für jede
              <br />
              <span className="text-brand-cyan">Recycling-Aufgabe</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              Von der Einzelmaschine bis zur Komplettanlage — NEUE HERBOLD kennt die Prozesse
              für alle relevanten Branchen und Materialien.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue">Branchen-Übersicht</h2>
            <p className="mt-2 text-graphite-600">
              Klicken Sie auf eine Branche für Prozessbeschreibungen und die passenden Maschinen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {industryCategories.map((cat, i) => {
              const gradient = categoryColors[cat.slug] ?? "from-brand-blue to-brand-deep";
              const accent = categoryAccents[cat.slug] ?? "text-brand-cyan";
              const hasDetail = cat.industries.length > 0;

              return (
                <div
                  key={cat.slug}
                  className={`rounded-xl overflow-hidden border border-graphite-200 ${hasDetail ? "hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300" : "opacity-70"}`}
                >
                  {/* Gradient top */}
                  <div className={`h-32 bg-gradient-to-br ${gradient} flex items-end p-5`}>
                    <div>
                      <p className={`font-mono text-xs ${accent} tracking-widest uppercase mb-1`}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                    </div>
                  </div>

                  <div className="p-5 bg-white">
                    <p className="text-sm text-graphite-600 mb-4">{cat.shortDesc}</p>

                    {hasDetail ? (
                      <div className="space-y-1.5">
                        {cat.industries.map((ind) => (
                          <Link
                            key={ind.slug}
                            href={`/branchen/${cat.slug}/${ind.slug}`}
                            className="group flex items-center justify-between py-1.5 text-sm text-brand-blue hover:text-brand-cyan transition-colors"
                          >
                            <span>{ind.name}</span>
                            <ArrowRight className="size-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-graphite-400 italic">Detailseite in Kürze</p>
                    )}

                    {hasDetail && (
                      <Link
                        href={`/branchen/${cat.slug}`}
                        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-cyan transition-colors"
                      >
                        Alle {cat.name}-Prozesse
                        <ChevronRight className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process teaser */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Vom Material zum Rezyklat
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue">
              Komplette Prozessketten aus einer Hand
            </h2>
            <p className="mt-4 text-graphite-600 text-lg">
              NEUE HERBOLD liefert nicht nur Einzelmaschinen — wir planen und liefern komplette
              Aufbereitungsanlagen. Kostenlose Beratung und Probemahlung im Technikum in Sinsheim.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-steel text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Anlage anfragen
                <ChevronRight className="size-4" />
              </Link>
              <Link
                href="/service/technikum"
                className="inline-flex items-center justify-center gap-2 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/5 px-6 py-3 rounded-full transition-colors font-medium"
              >
                Technikum / Probemahlung
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
