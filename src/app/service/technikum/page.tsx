import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FlaskConical, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Technikum & Probemahlung | Service | NEUE HERBOLD",
  description:
    "Kostenlose Probemahlung Ihres Materials im Technikum in Sinsheim-Reihen. Wir ermitteln die optimale Maschine für Ihre Aufgabe.",
};

const steps = [
  { n: 1, title: "Material einsenden", desc: "Senden Sie uns eine Materialprobe (ca. 5–10 kg) — wir stimmen alles vorab telefonisch oder per E-Mail ab." },
  { n: 2, title: "Analyse & Testmahlung", desc: "Unser Technikum-Team führt die Probemahlung durch und analysiert das Ergebnis (Korngröße, Durchsatz, Energiebedarf)." },
  { n: 3, title: "Auswertung & Empfehlung", desc: "Sie erhalten einen Bericht mit Maschinenempfehlung, Einstellungsparametern und Kostenschätzung." },
  { n: 4, title: "Angebot & Bestellung", desc: "Auf Basis der Ergebnisse erstellen wir ein konkretes Angebot — ohne Kaufzwang." },
];

export default function TechnikumPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
                Technikum
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Probemahlung —
                <br />
                <span className="text-brand-cyan">kostenlos & unverbindlich</span>
              </h1>
              <p className="mt-4 text-white/60 text-lg max-w-xl">
                Sie wissen nicht genau, welche Maschine für Ihr Material die richtige ist? Wir testen
                es in unserem Technikum in Sinsheim — kostenlos.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kontakt/anfrage"
                  className="inline-flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Probemahlung anfragen
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: FlaskConical, label: "Vollständig ausgestattetes Technikum" },
                { icon: CheckCircle2, label: "Kostenlose Materialanalyse" },
                { icon: MapPin, label: "Sinsheim-Reihen, Deutschland" },
                { icon: Clock, label: "Ergebnis in wenigen Werktagen" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-white/70">
                  <Icon className="size-4 text-brand-cyan shrink-0" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process steps */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue mb-10">
            So funktioniert die Probemahlung
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                {step.n < steps.length && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+0.5rem)] right-[-0.5rem] h-0.5 bg-graphite-200" />
                )}
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                  <span className="text-brand-cyan font-bold text-sm font-mono">{step.n}</span>
                </div>
                <h3 className="font-bold text-brand-blue mb-2">{step.title}</h3>
                <p className="text-sm text-graphite-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Available machines */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">
                Technikum-Ausstattung
              </h2>
              <p className="text-graphite-600 mb-6">
                Im Technikum stehen Vertreter aller wichtigen Baureihen bereit — von der
                Schneidmühle bis zur Feinmühle.
              </p>
              <div className="space-y-2">
                {[
                  "Schneidmühlen LM, SM, SMV",
                  "Hochleistungsschneidmühlen SX",
                  "Feinmühlen ZM",
                  "Hammermühlen HM",
                  "Waschanlagen-Komponenten",
                  "Verschiedene Rotorvarianten",
                ].map((machine) => (
                  <div key={machine} className="flex items-center gap-2.5 text-sm text-graphite-700">
                    <CheckCircle2 className="size-4 text-brand-cyan shrink-0" />
                    {machine}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-deep rounded-2xl p-8">
              <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
                Standort
              </p>
              <p className="text-white font-bold text-lg">NEUE HERBOLD GmbH</p>
              <p className="text-white/60 mt-1">Wiesenstraße 44</p>
              <p className="text-white/60">74889 Sinsheim-Reihen</p>
              <p className="text-white/60 mt-3">
                GPS: N 49°13&apos;27.742&quot; E 8°55&apos;02.638&quot;
              </p>
              <Link
                href="/kontakt/anfahrt"
                className="mt-5 inline-flex items-center gap-2 text-brand-cyan text-sm hover:text-brand-cyan-bright transition-colors"
              >
                Anfahrt ansehen
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Jetzt Probemahlung anfragen</h2>
            <p className="mt-3 text-white/60">
              Senden Sie uns eine kurze Beschreibung Ihres Materials und Ihrer Aufgabe. Wir
              melden uns innerhalb eines Werktages.
            </p>
            <Link
              href="/kontakt/anfrage"
              className="mt-6 inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-6 py-3 rounded-full transition-colors"
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
