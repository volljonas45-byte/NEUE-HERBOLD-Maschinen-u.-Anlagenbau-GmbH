import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { industryCategories, getIndustryCategoryBySlug, getIndustryBySlug } from "@/data/industries";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const cat of industryCategories) {
    for (const ind of cat.industries) {
      params.push({ category: cat.slug, slug: ind.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const ind = getIndustryBySlug(category, slug);
  if (!ind) return {};
  return {
    title: `${ind.name} | ${ind.category} | NEUE HERBOLD`,
    description: ind.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const cat = getIndustryCategoryBySlug(catSlug);
  const ind = getIndustryBySlug(catSlug, slug);
  if (!ind || !cat) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              {ind.category}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {ind.name}
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">{ind.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-bold text-white">{ind.steps.length}</p>
                <p className="text-sm text-white/40 mt-0.5">Prozessstufen</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-cyan">{ind.throughput}</p>
                <p className="text-sm text-white/40 mt-0.5">Durchsatz</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{ind.machines.length}</p>
                <p className="text-sm text-white/40 mt-0.5">Maschinen-Aggregate</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="bg-white py-16 border-b border-graphite-200">
        <Container>
          <div className="max-w-3xl">
            <p className="text-graphite-600 leading-relaxed text-lg">{ind.description}</p>
          </div>
        </Container>
      </section>

      {/* Process Diagram */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <div className="mb-10">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-2">
              Prozesskette
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue">
              {ind.steps.length}-stufiger Aufbereitungsprozess
            </h2>
          </div>

          {/* Step grid — 2 columns on desktop */}
          <div className="grid md:grid-cols-2 gap-3">
            {ind.steps.map((step) => (
              <div
                key={step.n}
                className="bg-white rounded-xl border border-graphite-200 p-5 flex gap-4 hover:border-brand-cyan/30 hover:shadow-sm transition-all"
              >
                {/* Step number */}
                <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center">
                  <span className="text-brand-cyan font-bold text-sm font-mono">
                    {String(step.n).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-brand-blue text-sm">{step.title}</p>
                  {step.machine && (
                    <p className="text-xs text-brand-cyan font-mono mt-0.5">{step.machine}</p>
                  )}
                  {step.detail && (
                    <p className="text-xs text-graphite-500 mt-1 leading-relaxed">{step.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Machines used */}
      <section className="bg-white py-16 border-b border-graphite-200">
        <Container>
          <h2 className="text-2xl font-bold text-brand-blue mb-6">
            Eingesetzte Maschinen
          </h2>
          <div className="flex flex-wrap gap-2">
            {ind.machines.map((machine) => (
              <span
                key={machine}
                className="inline-flex items-center gap-1.5 text-sm bg-brand-blue/5 border border-brand-blue/15 text-brand-blue px-3 py-1.5 rounded-full"
              >
                {machine}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/maschinen"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-brand-cyan transition-colors"
            >
              Alle Maschinen im Überblick
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Related industries */}
      {ind.relatedIndustrySlugs.length > 0 && (
        <section className="bg-graphite-100 py-16">
          <Container>
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Ähnliche Prozesse</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.industries
                .filter((i) => ind.relatedIndustrySlugs.includes(i.slug))
                .map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/branchen/${catSlug}/${rel.slug}`}
                    className="group border border-graphite-200 bg-white rounded-xl p-5 hover:border-brand-cyan/30 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-graphite-600 mt-1 line-clamp-2">{rel.tagline}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-graphite-400 font-mono">
                      <span>{rel.steps.length} Stufen</span>
                      <span>{rel.throughput}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-brand-cyan">
                      Prozess ansehen
                      <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">
              Anlage für {ind.name} anfragen
            </h2>
            <p className="mt-3 text-white/60">
              Wir planen und liefern die komplette Anlage — inkl. kostenloser Probemahlung
              Ihres Materials im Technikum in Sinsheim.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Komplettanlage anfragen
                <ChevronRight className="size-4" />
              </Link>
              <Link
                href="/service/technikum"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-full transition-colors font-medium"
              >
                Probemahlung buchen
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
