import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categories } from "@/data/products";

export const metadata: Metadata = {
  title: "Maschinen & Anlagen | NEUE HERBOLD",
  description:
    "Alle Maschinen-Baureihen von NEUE HERBOLD: Vorzerkleinerung, Schneidmühlen, Hammermühlen, Feinmühlen, Waschanlagen und Peripherie.",
};

const categoryIcons: Record<string, string> = {
  vorzerkleinerung: "01",
  schneidmuehlen: "02",
  hammermuehlen: "03",
  feinmuehlen: "04",
  waschanlagen: "05",
};

const categoryColors: Record<string, string> = {
  vorzerkleinerung: "from-brand-blue to-brand-deep",
  schneidmuehlen: "from-brand-steel to-brand-blue",
  hammermuehlen: "from-brand-deep to-brand-steel",
  feinmuehlen: "from-[#0d1f5c] to-brand-deep",
  waschanlagen: "from-brand-blue to-[#0d2b6b]",
};

export default function MaschinenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Maschinen & Anlagen
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Technik für das
              <br />
              <span className="text-brand-cyan">Kunststoffrecycling</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              Über 30 Maschinenbaureihen — von der ersten Zerkleinerung bis zum fertigen Rezyklat.
              Alle Maschinen Made in Germany, Sinsheim.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "30+", label: "Maschinenbaureihen" },
              { value: "5", label: "Produktkategorien" },
              { value: "1995", label: "Gegründet" },
              { value: "40+", label: "Länder weltweit" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Category Grid */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue">
              Alle Kategorien
            </h2>
            <p className="mt-2 text-graphite-600">
              Wählen Sie eine Kategorie für die vollständige Übersicht aller Baureihen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const num = categoryIcons[cat.slug] ?? "—";
              const gradient = categoryColors[cat.slug] ?? "from-brand-blue to-brand-deep";
              return (
                <Link
                  key={cat.slug}
                  href={`/maschinen/${cat.slug}`}
                  className="group bg-white rounded-xl border border-graphite-200 overflow-hidden hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300"
                >
                  {/* Gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-mono text-xs text-graphite-400 tracking-widest">
                        {num}
                      </span>
                      <span className="text-xs font-medium text-graphite-400 bg-graphite-100 px-2 py-0.5 rounded-full">
                        {cat.products.length}{" "}
                        {cat.products.length === 1 ? "Baureihe" : "Baureihen"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-cyan/80 font-medium">
                      {cat.shortDesc}
                    </p>
                    <p className="mt-3 text-sm text-graphite-600 line-clamp-2">
                      {cat.description}
                    </p>

                    {/* Product list preview */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cat.products.slice(0, 4).map((p) => (
                        <span
                          key={p.slug}
                          className="text-xs text-graphite-500 bg-graphite-100 px-2 py-0.5 rounded"
                        >
                          {p.shortName}
                        </span>
                      ))}
                      {cat.products.length > 4 && (
                        <span className="text-xs text-graphite-400 px-2 py-0.5">
                          +{cat.products.length - 4} weitere
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:text-brand-cyan transition-colors">
                      Alle Maschinen ansehen
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Gebrauchtmaschinen card */}
            <Link
              href="/gebrauchtmaschinen"
              className="group bg-white rounded-xl border border-graphite-200 overflow-hidden hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300"
            >
              <div className="h-1.5 bg-gradient-to-r from-graphite-400 to-graphite-600" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-graphite-400 tracking-widest">06</span>
                  <span className="text-xs font-medium text-graphite-400 bg-graphite-100 px-2 py-0.5 rounded-full">
                    Schnell verfügbar
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                  Gebrauchtmaschinen
                </h3>
                <p className="mt-1 text-sm text-brand-cyan/80 font-medium">
                  Neue Herbold & Fremdprodukte
                </p>
                <p className="mt-3 text-sm text-graphite-600">
                  Sofort lieferbare Gebrauchtmaschinen — auch Fremdprodukte von Alpine, Condux, Herbold, Pallmann u.a.
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:text-brand-cyan transition-colors">
                  Gebrauchtmaschinen ansehen
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-deep py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Beratung
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Die richtige Maschine für Ihre Aufgabe
            </h2>
            <p className="mt-4 text-white/60 text-lg">
              Unser Vertriebsteam hilft Ihnen bei der Maschinenauswahl — kostenlos und unverbindlich.
              Probemahlung im Technikum möglich.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Anfrage stellen
                <ChevronRight className="size-4" />
              </Link>
              <Link
                href="/service/technikum"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 font-medium px-6 py-3 rounded-full transition-colors"
              >
                Probemahlung anfragen
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
