import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "News & Neuigkeiten | NEUE HERBOLD",
  description:
    "Aktuelle Neuigkeiten von NEUE HERBOLD — neue Maschinen, Innovationen und Produkterweiterungen.",
};

const news = [
  {
    date: "2024",
    tag: "Produkt",
    tagColor: "bg-brand-cyan/10 text-brand-cyan",
    title: "Pulvermühle ZM 800 überarbeitet",
    body: "Strömungsoptimiertes Gehäuse für höheren Durchsatz bei gleichem Energieeinsatz. Kompakteres Design, staubdichte Steuereinheit für Wassereindüsung. Die überarbeitete ZM 800 bietet bei unverändertem Stellflächen-Footprint messbar höheren Durchsatz.",
    machines: ["ZM 800"],
  },
  {
    date: "2024",
    tag: "Innovation",
    tagColor: "bg-purple-100 text-purple-700",
    title: "Schneidmühlen mit Zwangsbeschickung",
    body: "Vertikale Förderschnecken im Einlauftrichter sorgen für bis zu 30 % mehr Durchsatz. Reduzierte Schall- und Stromspitzen durch kontinuierlichere Materialbeschickung. Verfügbar als Aufrüstung für bestehende SM- und LM-Baureihen.",
    machines: ["SM", "LM"],
  },
  {
    date: "2024",
    tag: "Sortiment",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Erweiterung Baureihe SM",
    body: "Neue Größe SM 1000 mit Rotordurchmesser 1.000 mm — für extreme Durchsatzanforderungen bei massiven Kunststoffen. Produziert am Stammsitz in Sinsheim nach dem bewährten Made in Germany-Standard.",
    machines: ["SM 1000"],
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Aktuelles
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">News & Neuigkeiten</h1>
            <p className="mt-4 text-white/60 text-lg">
              Aktuelle Informationen zu neuen Maschinen, Innovationen und Produkterweiterungen.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl space-y-8">
            {news.map((item, i) => (
              <article
                key={i}
                className="border border-graphite-200 rounded-xl p-7 hover:border-brand-cyan/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-graphite-400 font-mono">
                    <Calendar className="size-3" />
                    {item.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h2>
                <p className="text-graphite-600 leading-relaxed text-sm">{item.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.machines.map((m) => (
                    <span key={m} className="text-xs text-graphite-500 bg-graphite-100 px-2 py-0.5 rounded font-mono">
                      {m}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Immer auf dem neuesten Stand</h2>
              <p className="mt-2 text-white/50">Für aktuelle Informationen — sprechen Sie uns an.</p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-full transition-colors text-sm shrink-0"
            >
              Kontakt
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
