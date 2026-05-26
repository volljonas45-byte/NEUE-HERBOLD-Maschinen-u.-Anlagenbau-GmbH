import type { Metadata } from "next";
import Image from "@/components/ui/NHImage";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categories, type Category } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Maschinen & Anlagen | NEUE HERBOLD",
  description:
    "Alle Maschinen-Baureihen von NEUE HERBOLD: Vorzerkleinerung, Schneidmühlen, Hammermühlen, Feinmühlen, Waschanlagen und Peripherie.",
};

const categoryMeta: Record<
  string,
  { num: string; imageSrc: string; label: string }
> = {
  vorzerkleinerung: {
    num: "01",
    imageSrc: "/images/products/schredder/einwellenschredder-HZR.jpg",
    label: "Schredder & Scheren",
  },
  schneidmuehlen: {
    num: "02",
    imageSrc: "/images/products/schneidmuehlen-teaser.jpg",
    label: "Nachzerkleinerung",
  },
  hammermuehlen: {
    num: "03",
    imageSrc: "/images/products/hammermuehlen-teaser.jpg",
    label: "Prallzerkleinerung",
  },
  feinmuehlen: {
    num: "04",
    imageSrc: "/images/products/feinmuehlen-teaser.jpg",
    label: "Pulverisierung",
  },
  waschanlagen: {
    num: "05",
    imageSrc: "/images/products/waschanlagen-teaser.jpg",
    label: "Reinigung & Aufbereitung",
  },
};

function CategoryCard({
  cat,
  className,
  imageClassName,
}: {
  cat: Category;
  className?: string;
  imageClassName?: string;
}) {
  const meta = categoryMeta[cat.slug];
  return (
    <Link
      href={`/maschinen/${cat.slug}`}
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-graphite-100 transition-all duration-300 flex flex-col",
        className
      )}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", imageClassName ?? "aspect-[16/9]")}>
        <Image
          src={meta?.imageSrc ?? "/images/products/schneidmuehlen-teaser.jpg"}
          alt={cat.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Baureihen badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            {cat.products.length}{" "}
            {cat.products.length === 1 ? "Baureihe" : "Baureihen"}
          </span>
        </div>
      </div>

      {/* Cyan accent line */}
      <div className="h-[3px] bg-gradient-to-r from-brand-cyan via-brand-cyan/60 to-transparent" />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest">
            {meta?.num ?? "—"}
          </span>
          <span className="text-graphite-300">·</span>
          <span className="text-xs text-graphite-400 font-medium uppercase tracking-wide">
            {meta?.label}
          </span>
        </div>

        {/* Category name */}
        <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-cyan transition-colors duration-200 leading-tight">
          {cat.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-graphite-600 leading-relaxed line-clamp-2 flex-1">
          {cat.description}
        </p>

        {/* Product shortName badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {cat.products.slice(0, 5).map((p) => (
            <span
              key={p.slug}
              className="text-xs font-mono text-graphite-600 bg-graphite-100 border border-graphite-200 px-2.5 py-0.5 rounded"
            >
              {p.shortName}
            </span>
          ))}
          {cat.products.length > 5 && (
            <span className="text-xs text-graphite-400 self-center px-1">
              +{cat.products.length - 5}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5 pt-4 border-t border-graphite-100 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors">
            Alle Maschinen ansehen
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span className="text-xs text-graphite-400 font-mono">
            {cat.products.reduce((acc, p) => acc + p.models.length, 0)} Baugrößen
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function MaschinenPage() {
  const [cat1, cat2, cat3, cat4, cat5] = categories;

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
              Über 30 Maschinenbaureihen — von der ersten Zerkleinerung bis zum
              fertigen Rezyklat. Alle Maschinen Made in Germany, Sinsheim.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">
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
      <section className="bg-[#f4f7fa] py-20">
        <Container>
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                Produktportfolio
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue">
                Alle Maschinenkategorien
              </h2>
            </div>
            <p className="text-sm text-graphite-400 md:text-right">
              30+ Baureihen · Made in Germany · Sinsheim
            </p>
          </div>

          {/* Row 1: Featured large (2/3) + Schneidmühlen (1/3) */}
          <div className="grid lg:grid-cols-3 gap-5 mb-5">
            {cat1 && (
              <CategoryCard
                cat={cat1}
                className="lg:col-span-2"
                imageClassName="aspect-[16/9] lg:aspect-[21/9]"
              />
            )}
            {cat2 && (
              <CategoryCard
                cat={cat2}
                imageClassName="aspect-[16/9]"
              />
            )}
          </div>

          {/* Row 2: Three equal cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {cat3 && <CategoryCard cat={cat3} imageClassName="aspect-video" />}
            {cat4 && <CategoryCard cat={cat4} imageClassName="aspect-video" />}
            {cat5 && <CategoryCard cat={cat5} imageClassName="aspect-video" />}
          </div>

          {/* Row 3: Gebrauchtmaschinen – horizontal full-width */}
          <Link
            href="/gebrauchtmaschinen"
            className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-graphite-100 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative sm:w-2/5 h-56 sm:h-auto overflow-hidden">
              <Image
                src="/images/products/gebrauchtmaschinen-teaser.jpg"
                alt="Gebrauchtmaschinen"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
            </div>

            {/* Cyan line – visible only on mobile (top) */}
            <div className="h-[3px] sm:hidden bg-gradient-to-r from-brand-cyan via-brand-cyan/60 to-transparent" />

            {/* Cyan line – visible only on desktop (left side) */}
            <div className="hidden sm:block w-[3px] bg-gradient-to-b from-brand-cyan via-brand-cyan/60 to-transparent shrink-0" />

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-cyan tracking-widest">06</span>
                    <span className="text-graphite-300">·</span>
                    <span className="text-xs text-graphite-400 font-medium uppercase tracking-wide">
                      Sofort verfügbar
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full shrink-0">
                    Schnell verfügbar
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-blue group-hover:text-brand-cyan transition-colors duration-200">
                  Gebrauchtmaschinen
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-cyan/80">
                  Neue Herbold & Fremdprodukte
                </p>
                <p className="mt-3 text-sm text-graphite-600 leading-relaxed max-w-lg">
                  Sofort lieferbare Gebrauchtmaschinen aus dem NEUE-HERBOLD-Bestand — auch geprüfte Fremdprodukte von Alpine, Condux, Herbold und Pallmann u. a.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-graphite-100 flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors">
                Gebrauchtmaschinen ansehen
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
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
              Unser Vertriebsteam hilft Ihnen bei der Maschinenauswahl —
              kostenlos und unverbindlich. Probemahlung im Technikum möglich.
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
