import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper, CalendarDays } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aktuelles | NEUE HERBOLD",
  description:
    "Neuigkeiten, Messen und Events von NEUE HERBOLD — immer auf dem neuesten Stand aus Sinsheim.",
};

const sections = [
  {
    icon: Newspaper,
    title: "News & Neuigkeiten",
    desc: "Aktuelle Informationen zu neuen Maschinen, Innovationen, Produkterweiterungen und Entwicklungen aus unserem Unternehmen.",
    href: "/aktuelles/news",
    cta: "Alle News",
    items: [
      { tag: "Produkt", title: "Pulvermühle ZM 800 überarbeitet", date: "2024" },
      { tag: "Innovation", title: "Schneidmühlen mit Zwangsbeschickung", date: "2024" },
      { tag: "Sortiment", title: "Erweiterung Baureihe SM", date: "2024" },
    ],
  },
  {
    icon: CalendarDays,
    title: "Messen & Events",
    desc: "Treffen Sie unser Team auf internationalen Fachmessen. Sehen Sie unsere Maschinen live und sprechen Sie mit unseren Experten.",
    href: "/aktuelles/messen",
    cta: "Alle Termine",
    items: [
      { tag: "Leitveranstaltung", title: "K-Messe Düsseldorf 2025", date: "Okt 2025" },
      { tag: "International", title: "PRS Middle East & Africa, Dubai", date: "Sep 2025" },
      { tag: "International", title: "PRS Europe 2025, Amsterdam", date: "2025" },
    ],
  },
];

export default function AktuellesPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Aktuelles
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Neuigkeiten &<br />
              <span className="text-brand-cyan">Veranstaltungen.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Bleiben Sie informiert — über neue Maschinen, Innovationen und
              internationale Messetermine von NEUE HERBOLD.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Sections Grid ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="size-10 bg-brand-blue/8 flex items-center justify-center">
                        <Icon className="size-5 text-brand-blue" />
                      </div>
                      <h2 className="text-xl font-bold text-brand-blue">{s.title}</h2>
                    </div>
                    <p className="text-sm text-graphite-600 leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    <div className="space-y-3 mb-6">
                      {s.items.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-4 border-l-2 border-brand-cyan/25 pl-4"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-graphite-400">
                              {item.tag}
                            </span>
                            <p className="text-sm font-medium text-brand-blue mt-0.5 leading-tight">
                              {item.title}
                            </p>
                          </div>
                          <span className="text-[0.65rem] font-mono text-graphite-400 shrink-0 mt-0.5">
                            {item.date}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 h-10 px-5 bg-brand-blue text-white text-sm font-semibold rounded-sm hover:bg-brand-steel transition-colors"
                    >
                      {s.cta} <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Newsletter CTA ─────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Immer auf dem neuesten Stand
              </h2>
              <p className="mt-2 text-white/50 text-sm">
                Für aktuelle Informationen sprechen Sie uns an oder besuchen Sie uns auf einer Messe.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm shrink-0"
            >
              Kontakt aufnehmen <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
