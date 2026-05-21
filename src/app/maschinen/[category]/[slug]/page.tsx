import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SpecTable } from "@/components/products/SpecTable";
import {
  categories,
  getCategoryBySlug,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const cat of categories) {
    for (const product of cat.products) {
      params.push({ category: cat.slug, slug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);
  if (!product) return {};
  return {
    title: `${product.name} | ${product.tagline.slice(0, 50)} | NEUE HERBOLD`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const cat = getCategoryBySlug(catSlug);
  const product = getProductBySlug(catSlug, slug);
  if (!product || !cat) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
                {cat.name}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-white/60 text-lg">{product.tagline}</p>

              {/* USPs */}
              <ul className="mt-6 space-y-2">
                {product.usps.map((usp) => (
                  <li key={usp} className="flex items-start gap-2.5 text-sm text-white/70">
                    <CheckCircle2 className="size-4 text-brand-cyan shrink-0 mt-0.5" />
                    {usp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product visual placeholder */}
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-steel to-brand-deep border border-white/10 flex items-center justify-center">
              <span className="font-mono text-[8rem] font-black text-white/5 select-none absolute">
                {product.shortName}
              </span>
              <div className="relative text-center">
                <p className="text-brand-cyan/60 text-xs font-mono tracking-widest uppercase mb-2">
                  {cat.name}
                </p>
                <p className="text-white text-4xl font-black">{product.shortName}</p>
                <p className="text-white/30 text-sm mt-2 font-mono">
                  {product.models.length} Baugröße{product.models.length !== 1 ? "n" : ""}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sticky CTA bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-graphite-200 shadow-sm">
        <Container>
          <div className="flex items-center justify-between py-3 gap-4">
            <p className="text-sm font-medium text-brand-blue hidden sm:block">
              {product.name}
            </p>
            <div className="flex items-center gap-2 ml-auto">
              <Link
                href="/service/technikum"
                className="text-sm text-graphite-600 hover:text-brand-blue transition-colors hidden md:block px-3 py-1.5"
              >
                Probemahlung
              </Link>
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-1.5 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Anfrage stellen
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Description */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Beschreibung</h2>
              <p className="text-graphite-600 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">Einsatzmaterialien</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span
                    key={app}
                    className="text-sm text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-3 py-1 rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Spec Table */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-blue mb-6">Technische Daten</h2>
          <SpecTable headers={product.specHeaders} models={product.models} />
          <p className="mt-3 text-xs text-graphite-400">
            Alle Maße in mm sofern nicht anders angegeben. Änderungen vorbehalten. Auf Anfrage
            auch Sonderausführungen möglich.
          </p>
        </Container>
      </section>

      {/* Videos */}
      {product.videos.length > 0 && (
        <section className="bg-brand-deep py-16">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-6">
              Maschine in Aktion
            </h2>
            <div
              className={
                product.videos.length === 1
                  ? "max-w-3xl"
                  : "grid md:grid-cols-2 gap-6"
              }
            >
              {product.videos.map((v) => (
                <div key={v.ytId} className="overflow-hidden rounded-xl">
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.ytId}?rel=0&modestbranding=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="bg-brand-steel/30 px-4 py-2.5 flex items-center gap-2">
                    <Play className="size-3.5 text-brand-cyan" />
                    <p className="text-sm text-white/70">{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-white py-16 border-t border-graphite-200">
          <Container>
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Verwandte Maschinen</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/maschinen/${rel.category}/${rel.slug}`}
                  className="group border border-graphite-200 rounded-xl p-5 hover:border-brand-cyan/30 hover:shadow-md transition-all"
                >
                  <p className="text-xs text-graphite-400 font-mono mb-1">{rel.shortName}</p>
                  <h3 className="font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-sm text-graphite-600 mt-1 line-clamp-2">{rel.tagline}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-brand-cyan">
                    Mehr erfahren
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">
              Interesse an der {product.name}?
            </h2>
            <p className="mt-3 text-white/60">
              Unser Vertriebsteam berät Sie gerne. Kostenlose Probemahlung im Technikum in
              Sinsheim möglich.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Anfrage stellen
                <ChevronRight className="size-4" />
              </Link>
              <Link
                href="/service/technikum"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-full transition-colors font-medium"
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
