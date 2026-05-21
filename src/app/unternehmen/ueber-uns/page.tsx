import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Über uns | Unternehmen | NEUE HERBOLD",
  description:
    "NEUE HERBOLD Maschinen- und Anlagenbau GmbH — seit 1995 in Sinsheim. 70 Mitarbeiter, 40+ Länder, VDMA-Mitglied.",
};

const team = [
  { name: "Peter Abraham", role: "Geschäftsführung", contact: "p.abraham@neue-herbold.com" },
  { name: "Peter Bäuchle", role: "Vertrieb", contact: "+49 7261 / 9248-34" },
  { name: "Helall Firouzie", role: "Vertrieb", contact: "+49 7261 / 9248-41" },
  { name: "Leonhard Heinrichsmeier", role: "Vertrieb", contact: "+49 7261 / 9248-35" },
  { name: "Egon Kaiser", role: "Vertrieb / Service", contact: "+49 7261 / 9248-19" },
  { name: "Andreas Möller", role: "Vertrieb", contact: "+49 7261 / 9248-38" },
  { name: "Ulrich Maier-Borst", role: "Vertrieb", contact: "+49 7261 / 9248-54" },
  { name: "Jochen Fuchs", role: "Service / Ersatzteile", contact: "+49 7261 / 9248-53" },
  { name: "Natalia Zelinski", role: "Service", contact: "+49 7261 / 9248-32" },
  { name: "Ronald Arbogast", role: "Service", contact: "+49 7261 / 9248-55" },
  { name: "Lusine Avetisyan", role: "Service", contact: "+49 7261 / 9248-56" },
  { name: "Meike Hufnagel", role: "Versand", contact: "+49 7261 / 9248-14" },
  { name: "Marc Leibenguth", role: "Einkauf", contact: "+49 7261 / 9248-13" },
  { name: "Manuel Höglinger", role: "Prokurist / Finanzen / Personal", contact: "–" },
];

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Unternehmen
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Über NEUE HERBOLD
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              Seit 1995 entwickeln und produzieren wir Maschinen und Anlagen für das
              Kunststoffrecycling — Made in Germany, Sinsheim.
            </p>
          </div>

          {/* Key figures */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* About text */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-5">Wer wir sind</h2>
              <div className="space-y-4 text-graphite-600 leading-relaxed">
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
                  Als Mitglied des VDMA, Plastics Recyclers Europe (PRE) und der PREVENT
                  Abfall Allianz sind wir aktiv an der Entwicklung und Etablierung von
                  Recyclingstandards beteiligt.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-5">Mitgliedschaften</h2>
              <div className="space-y-3">
                {[
                  { name: "VDMA", desc: "Verband Deutscher Maschinen- und Anlagenbau" },
                  { name: "Plastics Recyclers Europe (PRE)", desc: "Europäischer Verband der Kunststoffrecycler" },
                  { name: "PREVENT Abfall Allianz", desc: "Allianz für Abfallvermeidung und Recycling" },
                ].map((m) => (
                  <div key={m.name} className="border border-graphite-200 rounded-lg p-4">
                    <p className="font-semibold text-brand-blue">{m.name}</p>
                    <p className="text-sm text-graphite-600 mt-0.5">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-graphite-100 rounded-xl p-5">
                <p className="font-semibold text-brand-blue mb-1">Adresse</p>
                <p className="text-sm text-graphite-600">
                  NEUE HERBOLD Maschinen- und Anlagenbau GmbH
                  <br />
                  Wiesenstraße 44
                  <br />
                  74889 Sinsheim-Reihen
                  <br />
                  Deutschland
                </p>
                <p className="text-sm text-graphite-600 mt-3">
                  Tel: +49 (0) 7261 / 9248-0
                  <br />
                  info@neue-herbold.de
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-blue mb-8">Ansprechpartner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-graphite-200 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-3">
                  <span className="text-brand-blue font-bold text-sm">
                    {person.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <p className="font-semibold text-brand-blue text-sm">{person.name}</p>
                <p className="text-xs text-graphite-500 mt-0.5">{person.role}</p>
                <p className="text-xs text-graphite-400 mt-2 font-mono">{person.contact}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Sprechen Sie uns an</h2>
              <p className="mt-2 text-white/50">
                Unser Team ist für Sie da — Montag bis Freitag.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                Kontakt
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
