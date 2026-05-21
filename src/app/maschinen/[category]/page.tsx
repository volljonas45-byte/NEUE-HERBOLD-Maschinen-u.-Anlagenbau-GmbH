import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { categories, getCategoryBySlug } from "@/data/products";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} | Maschinen | NEUE HERBOLD`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Maschinen / {cat.name}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {cat.name}
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">{cat.description}</p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-brand-blue">
              {cat.products.length}{" "}
              {cat.products.length === 1 ? "Baureihe" : "Baureihen"}
            </h2>
            <p className="mt-1 text-graphite-600 text-sm">{cat.shortDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {cat.products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/maschinen/${cat.slug}/${product.slug}`}
                className="group border border-graphite-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300 bg-white"
              >
                {/* Placeholder image area */}
                <div className="h-44 bg-gradient-to-br from-brand-blue to-brand-deep flex items-center justify-center relative overflow-hidden">
                  <span className="font-mono text-7xl font-bold text-white/5 select-none absolute">
                    {product.shortName}
                  </span>
                  <div className="relative text-center">
                    <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-white text-2xl font-bold">{product.shortName}</p>
                  </div>
                  {product.videos.length > 0 && (
                    <div className="absolute bottom-3 right-3 bg-brand-cyan/20 text-brand-cyan text-xs px-2 py-1 rounded-full font-mono">
                      {product.videos.length} Video{product.videos.length > 1 ? "s" : ""}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-graphite-600 line-clamp-2">{product.tagline}</p>

                  {/* Applications */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="text-xs text-graphite-500 bg-graphite-100 px-2 py-0.5 rounded"
                      >
                        {app}
                      </span>
                    ))}
                    {product.applications.length > 3 && (
                      <span className="text-xs text-graphite-400">
                        +{product.applications.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Model count */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-graphite-400 font-mono">
                      {product.models.length} Baugröße
                      {product.models.length !== 1 ? "n" : ""}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-brand-blue group-hover:text-brand-cyan transition-colors">
                      Details
                      <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-deep py-16 border-t border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Passende Maschine nicht gefunden?</h2>
              <p className="mt-2 text-white/50">
                Wir beraten Sie kostenlos und erstellen ein individuelles Angebot.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                Anfrage stellen
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
