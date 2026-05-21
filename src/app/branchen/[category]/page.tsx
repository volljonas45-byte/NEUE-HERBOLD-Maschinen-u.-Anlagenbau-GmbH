import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { industryCategories, getIndustryCategoryBySlug } from "@/data/industries";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return industryCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getIndustryCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} | Branchen | NEUE HERBOLD`,
    description: `Recyclinglösungen für ${cat.name} — Maschinen und Komplettanlagen von NEUE HERBOLD.`,
  };
}

export default async function IndustryCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const cat = getIndustryCategoryBySlug(slug);
  if (!cat) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Branchen / {cat.name}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {cat.name}
            </h1>
            <p className="mt-4 text-white/60 text-lg">{cat.shortDesc}</p>
          </div>
        </Container>
      </section>

      {/* Industries */}
      {cat.industries.length > 0 ? (
        <section className="bg-white py-20">
          <Container>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-brand-blue">Prozesse & Anwendungen</h2>
              <p className="mt-1 text-graphite-600 text-sm">
                Wählen Sie einen Prozess für die vollständige Beschreibung mit Prozesskette.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/branchen/${cat.slug}/${ind.slug}`}
                  className="group border border-graphite-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <div className="h-28 bg-gradient-to-br from-brand-blue to-brand-deep flex items-end p-5">
                    <p className="text-white font-bold text-lg">{ind.name}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-graphite-600 line-clamp-2">{ind.tagline}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-graphite-400 font-mono">
                      <span>{ind.steps.length} Stufen</span>
                      <span>{ind.throughput}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:text-brand-cyan transition-colors">
                      Prozess ansehen
                      <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className="bg-white py-20">
          <Container>
            <div className="max-w-lg">
              <p className="text-graphite-600 text-lg">
                Detailseiten für diese Branche sind in Kürze verfügbar.
              </p>
              <Link
                href="/kontakt/anfrage"
                className="mt-6 inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-2.5 rounded-full hover:bg-brand-steel transition-colors"
              >
                Jetzt Anfrage stellen
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Komplettanlage für {cat.name} anfragen
              </h2>
              <p className="mt-2 text-white/50">
                Wir beraten Sie kostenlos — von der Maschinenauswahl bis zur Inbetriebnahme.
              </p>
            </div>
            <Link
              href="/kontakt/anfrage"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-full transition-colors text-sm shrink-0"
            >
              Anfrage stellen
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
