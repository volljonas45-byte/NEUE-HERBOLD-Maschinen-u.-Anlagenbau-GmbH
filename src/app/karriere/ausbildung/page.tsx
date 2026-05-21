import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Ausbildung | Karriere | NEUE HERBOLD",
  description:
    "Ausbildung bei NEUE HERBOLD in Sinsheim — Industriekaufmann, Konstruktionsmechaniker, Zerspanungsmechaniker, Betriebselektriker.",
};

const apprenticeships = [
  {
    title: "Industriekaufmann (m/w/d)",
    duration: "3 Jahre",
    desc: "Kaufmännische Ausbildung mit Einblicken in Vertrieb, Einkauf, Buchhaltung und Personalwesen in einem internationalen Maschinenbauunternehmen.",
    skills: ["Auftragsabwicklung", "Einkauf & Beschaffung", "Buchhaltung Grundlagen", "Kundenkorrespondenz"],
  },
  {
    title: "Konstruktionsmechaniker (m/w/d)",
    duration: "3,5 Jahre",
    desc: "Metallverarbeitende Ausbildung: Zuschneiden, Formen, Fügen und Montieren von Maschinenkomponenten nach technischen Zeichnungen.",
    skills: ["Schweißen MIG/MAG/WIG", "Metallbearbeitung", "Technisches Zeichnen", "Montage"],
  },
  {
    title: "Zerspanungsmechaniker (m/w/d)",
    duration: "3,5 Jahre",
    desc: "CNC-Bearbeitung von Präzisionsteilen für Schneidmühlen und Shredder — Drehen, Fräsen, Bohren auf modernen CNC-Maschinen.",
    skills: ["CNC-Drehen", "CNC-Fräsen", "CAD/CAM Grundlagen", "Qualitätskontrolle"],
  },
  {
    title: "Betriebselektriker (m/w/d)",
    duration: "3,5 Jahre",
    desc: "Elektrische Installation und Instandhaltung von Maschinen und Steuerungsanlagen — von der Schaltschrankplanung bis zur Inbetriebnahme.",
    skills: ["Schaltschrankbau", "SPS-Grundlagen", "Pneumatik/Hydraulik", "Messtechnik"],
  },
];

export default function AusbildungPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Karriere / Ausbildung
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ausbildung bei
              <br />
              <span className="text-brand-cyan">NEUE HERBOLD</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              4 IHK-anerkannte Ausbildungsberufe in einem internationalen
              Maschinenbauunternehmen — praxisnah und zukunftssicher.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {apprenticeships.map((a) => (
              <div key={a.title} className="border border-graphite-200 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-brand-blue">{a.title}</h3>
                  <span className="shrink-0 text-xs text-graphite-400 font-mono bg-graphite-100 px-2 py-1 rounded">
                    {a.duration}
                  </span>
                </div>
                <p className="text-graphite-600 text-sm leading-relaxed mb-4">{a.desc}</p>
                <div className="space-y-1.5">
                  {a.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-sm text-graphite-600">
                      <CheckCircle2 className="size-3.5 text-brand-cyan shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Ausbildungsplatz bewerben</h2>
            <p className="mt-3 text-white/60">
              Bewerbungsunterlagen per E-Mail — wir freuen uns auf Ihre Bewerbung!
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:bewerbung@neue-herbold.de"
                className="block text-brand-cyan font-mono hover:text-brand-cyan-bright transition-colors"
              >
                bewerbung@neue-herbold.de
              </a>
              <p className="text-white/40 text-sm">Ansprechpartner: Peter Abraham, Geschäftsführung</p>
            </div>
            <Link
              href="/karriere"
              className="mt-6 inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/5 px-5 py-2.5 rounded-full transition-colors text-sm font-medium"
            >
              Alle Stellen ansehen
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
