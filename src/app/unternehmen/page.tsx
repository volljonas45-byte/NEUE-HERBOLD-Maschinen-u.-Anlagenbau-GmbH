import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Users, Globe, Award } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Unternehmen | NEUE HERBOLD",
  description:
    "NEUE HERBOLD Maschinen- und Anlagenbau GmbH — seit 1995 in Sinsheim. 70 Mitarbeiter, 40+ Länder, VDMA-Mitglied.",
};

const bereiche = [
  {
    icon: Building2,
    title: "Über uns",
    desc: "Geschichte, Philosophie und das Team hinter NEUE HERBOLD — seit 1995 aus Sinsheim.",
    href: "/unternehmen/ueber-uns",
    cta: "Mehr erfahren",
  },
  {
    icon: Users,
    title: "Karriere",
    desc: "Werden Sie Teil eines innovativen Teams — offene Stellen, Ausbildung und Initiativbewerbung.",
    href: "/karriere",
    cta: "Zu den Stellen",
  },
  {
    icon: Globe,
    title: "Kontakt & Ansprechpartner",
    desc: "Finden Sie den richtigen Ansprechpartner für Ihre Anfrage — Vertrieb, Service und mehr.",
    href: "/kontakt/ansprechpartner",
    cta: "Zu den Kontakten",
  },
  {
    icon: Award,
    title: "Mitgliedschaften",
    desc: "NEUE HERBOLD ist Mitglied bei VDMA, Plastics Recyclers Europe und der PREVENT Abfall Allianz.",
    href: "/unternehmen/ueber-uns",
    cta: "Mehr erfahren",
  },
];

export default function UnternehmenPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Unternehmen
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Präzision made<br />
              <span className="text-brand-cyan">in Sinsheim.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Seit 1995 entwickeln und produzieren wir Hochleistungsmaschinen für
              die Recyclingbranche — mit rund 70 Mitarbeitern am Standort Sinsheim.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1995", label: "Gegründet" },
              { value: "70+", label: "Mitarbeiter" },
              { value: "40+", label: "Länder weltweit" },
              { value: "30+", label: "Maschinenbaureihen" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Bereiche ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-3">
            Unternehmensbereiche
          </p>
          <h2 className="text-3xl font-bold text-brand-blue mb-10">
            Das Unternehmen im Überblick
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {bereiche.map((b) => {
              const Icon = b.icon;
              return (
                <Link
                  key={b.title}
                  href={b.href}
                  className="group border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all p-7 flex flex-col"
                >
                  <div className="size-11 bg-brand-blue/8 flex items-center justify-center mb-5">
                    <Icon className="size-5 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-2 group-hover:text-brand-cyan transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-graphite-600 leading-relaxed flex-1 mb-5">
                    {b.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold group-hover:gap-2.5 transition-all">
                    {b.cta} <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Kurz-Portrait ──────────────────────────────────────────── */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Wer wir sind</h2>
              <div className="space-y-4 text-graphite-600 leading-relaxed text-sm">
                <p>
                  Die NEUE HERBOLD Maschinen- und Anlagenbau GmbH wurde 1995 in Sinsheim-Reihen
                  gegründet und hat sich seither zu einem der führenden Hersteller von Maschinen
                  und Anlagen für das Kunststoffrecycling entwickelt.
                </p>
                <p>
                  Mit rund 70 Mitarbeitern am Standort Sinsheim und Vertretungen in über 40
                  Ländern weltweit decken wir alle Stufen der Kunststoffaufbereitung ab — von
                  der Vorzerkleinerung über Schneid- und Feinmühlen bis hin zu kompletten
                  Waschanlagen und Prozessketten.
                </p>
                <p>
                  Alle Maschinen werden am Standort Sinsheim gefertigt. Qualität, Präzision
                  und Langlebigkeit sind dabei keine Versprechen — sondern gelebte Realität
                  seit fast 30 Jahren.
                </p>
              </div>
              <Link
                href="/unternehmen/ueber-uns"
                className="mt-7 inline-flex items-center gap-2 h-10 px-6 bg-brand-blue text-white text-sm font-semibold rounded-sm hover:bg-brand-steel transition-colors"
              >
                Vollständiges Firmenprofil <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-blue">Mitgliedschaften</h3>
              {[
                {
                  name: "VDMA",
                  desc: "Verband Deutscher Maschinen- und Anlagenbau",
                },
                {
                  name: "Plastics Recyclers Europe (PRE)",
                  desc: "Europäischer Verband der Kunststoffrecycler",
                },
                {
                  name: "PREVENT Abfall Allianz",
                  desc: "Allianz für Abfallvermeidung und Recycling",
                },
              ].map((m) => (
                <div key={m.name} className="bg-white border border-graphite-200 p-4">
                  <p className="font-semibold text-brand-blue text-sm">{m.name}</p>
                  <p className="text-xs text-graphite-500 mt-0.5">{m.desc}</p>
                </div>
              ))}

              <div className="bg-brand-deep text-white p-5 mt-6">
                <p className="text-brand-cyan text-xs font-semibold mb-2">Hauptsitz</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  NEUE HERBOLD Maschinen- und Anlagenbau GmbH
                  <br />
                  Wiesenstraße 44<br />
                  74889 Sinsheim-Reihen
                </p>
                <p className="text-sm text-white/60 mt-3">
                  Tel: +49 (0) 7261 / 9248-0<br />
                  info@neue-herbold.de
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Sprechen Sie uns an</h2>
              <p className="mt-2 text-white/50 text-sm">
                Unser Team ist für Sie da — Montag bis Freitag.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
            >
              Zum Kontakt <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
