import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Users, GraduationCap, Briefcase } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Karriere | NEUE HERBOLD",
  description:
    "Offene Stellen bei NEUE HERBOLD in Sinsheim — Schweißer, Mechaniker und mehr. Ausbildungsberufe und Initiativbewerbung.",
};

const jobs = [
  {
    title: "Schweißer (m/w/d)",
    type: "Vollzeit",
    desc: "MIG/MAG-Schweißen von Maschinenkomponenten und Rahmenstrukturen in der Produktion.",
    requirements: ["MIG/MAG-Kenntnisse", "Erfahrung im Maschinenbau von Vorteil"],
  },
  {
    title: "Service-Mechaniker (m/w/d)",
    type: "Vollzeit",
    desc: "Montage, Inbetriebnahme und Reparatur von Recyclingmaschinen beim Kunden weltweit.",
    requirements: ["Englischkenntnisse erforderlich", "Reisebereitschaft", "Pneumatik/Hydraulik"],
  },
  {
    title: "Industriemechaniker / Schlosser (m/w/d)",
    type: "Vollzeit",
    desc: "Fertigung und Montage von Maschinen und Baugruppen in der Produktion in Sinsheim.",
    requirements: ["MIG/MAG/WIG-Schweißen", "Pneumatik- und Hydraulik-Kenntnisse"],
  },
];

const apprenticeships = [
  { title: "Industriekaufmann (m/w/d)", duration: "3 Jahre" },
  { title: "Konstruktionsmechaniker (m/w/d)", duration: "3,5 Jahre" },
  { title: "Zerspanungsmechaniker (m/w/d)", duration: "3,5 Jahre" },
  { title: "Betriebselektriker (m/w/d)", duration: "3,5 Jahre" },
];

export default function KarrierePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Karriere
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Werden Sie Teil
              <br />
              <span className="text-brand-cyan">unseres Teams</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              Wir suchen engagierte Fachkräfte für unseren Standort in Sinsheim-Reihen.
              Stabiler Arbeitsplatz, attraktive Vergütung, interessante Aufgaben.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 border-b border-graphite-200">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: "Standort Sinsheim", desc: "Sicherer Arbeitsplatz in der Metropolregion Rhein-Neckar" },
              { icon: Users, title: "~70 Mitarbeiter", desc: "Familiäres Betriebsklima mit flachen Hierarchien" },
              { icon: Briefcase, title: "Seit 1995", desc: "Inhabergeführtes Unternehmen mit stabiler Basis" },
              { icon: GraduationCap, title: "Ausbildung", desc: "4 IHK-anerkannte Ausbildungsberufe" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mx-auto mb-3">
                  <Icon className="size-5 text-brand-blue" />
                </div>
                <p className="font-semibold text-brand-blue">{title}</p>
                <p className="text-sm text-graphite-600 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open positions */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-brand-blue">Offene Stellen</h2>
            <p className="mt-1 text-graphite-600 text-sm">
              Alle Stellen sind am Standort Sinsheim-Reihen.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white border border-graphite-200 rounded-xl p-6 hover:border-brand-cyan/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-brand-blue">{job.title}</h3>
                      <span className="text-xs bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-graphite-600 text-sm mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((r) => (
                        <span key={r} className="text-xs text-graphite-500 bg-graphite-100 px-2 py-0.5 rounded">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/karriere/stellenangebote"
                    className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan hover:text-brand-cyan-bright transition-colors"
                  >
                    Details
                    <ChevronRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/karriere/stellenangebote"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-cyan font-medium text-sm transition-colors"
            >
              Alle Stellen ansehen
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Ausbildung */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Ausbildung bei NEUE HERBOLD</h2>
              <p className="text-graphite-600 mb-6">
                Wir bilden in 4 IHK-anerkannten Berufen aus. Starten Sie Ihre Karriere in einem
                internationalen Maschinenbauunternehmen.
              </p>
              <div className="space-y-3">
                {apprenticeships.map((a) => (
                  <div key={a.title} className="flex items-center justify-between border border-graphite-200 rounded-lg px-4 py-3">
                    <p className="font-medium text-brand-blue text-sm">{a.title}</p>
                    <span className="text-xs text-graphite-400 font-mono">{a.duration}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/karriere/ausbildung"
                className="mt-5 inline-flex items-center gap-2 text-brand-blue hover:text-brand-cyan font-medium text-sm transition-colors"
              >
                Mehr zur Ausbildung
                <ChevronRight className="size-4" />
              </Link>
            </div>

            {/* Application box */}
            <div className="bg-brand-blue rounded-2xl p-8">
              <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
                Bewerbung
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">Jetzt bewerben</h3>
              <p className="text-white/60 text-sm mb-6">
                Bewerbungsunterlagen (Lebenslauf, Zeugnisse) per E-Mail an:
              </p>
              <a
                href="mailto:bewerbung@neue-herbold.com"
                className="block text-brand-cyan font-mono text-sm mb-6 hover:text-brand-cyan-bright transition-colors"
              >
                bewerbung@neue-herbold.com
              </a>
              <p className="text-white/40 text-xs mb-1">Ansprechpartner</p>
              <p className="text-white font-semibold">Peter Abraham</p>
              <p className="text-white/50 text-sm">Geschäftsführung</p>
              <Link
                href="/karriere/initiativbewerbung"
                className="mt-6 inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/5 px-4 py-2 rounded-full transition-colors text-sm"
              >
                Initiativbewerbung
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
