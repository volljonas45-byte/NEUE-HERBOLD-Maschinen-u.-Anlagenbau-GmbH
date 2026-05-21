import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Stellenangebote | Karriere | NEUE HERBOLD",
  description:
    "Offene Stellen bei NEUE HERBOLD in Sinsheim — Konstrukteure, CNC-Zerspaner, Vertriebsingenieure und mehr.",
};

const stellen = [
  {
    id: "S-001",
    titel: "Konstrukteur / Technischer Zeichner (m/w/d)",
    bereich: "Konstruktion & Entwicklung",
    ort: "Sinsheim",
    art: "Vollzeit",
    beschreibung:
      "Sie entwickeln und konstruieren Maschinen und Anlagen für das Kunststoffrecycling. Mit CAD-Software (SolidWorks) erstellen Sie Fertigungszeichnungen und Stücklisten, betreuen Projekte von der Konzeption bis zur Serienreife.",
    aufgaben: [
      "3D-Konstruktion mit SolidWorks",
      "Erstellung von Fertigungszeichnungen und Stücklisten",
      "Projektbegleitung von Konzept bis Serienfertigung",
      "Zusammenarbeit mit Fertigung und Service",
    ],
    profil: [
      "Abgeschlossene technische Ausbildung oder Studium (Maschinenbau o.ä.)",
      "Kenntnisse in SolidWorks oder vergleichbarem CAD-System",
      "Erfahrung in der Konstruktion von Maschinen oder Sondermaschinen",
      "Teamfähigkeit und strukturierte Arbeitsweise",
    ],
  },
  {
    id: "S-002",
    titel: "CNC-Zerspaner / Dreher (m/w/d)",
    bereich: "Fertigung & Produktion",
    ort: "Sinsheim",
    art: "Vollzeit",
    beschreibung:
      "In unserer modernen Fertigung in Sinsheim programmieren und bedienen Sie CNC-Dreh- und Fräsmaschinen zur Herstellung von Maschinenteilen. Qualitätsprüfung und Wartung gehören ebenfalls zu Ihrem Aufgabenbereich.",
    aufgaben: [
      "Programmierung und Bedienung von CNC-Dreh- und Fräsmaschinen",
      "Herstellung von Präzisionsteilen nach technischen Zeichnungen",
      "Qualitätsprüfung mit Messmitteln",
      "Wartung und Pflege der Maschinen",
    ],
    profil: [
      "Abgeschlossene Ausbildung als Zerspanungsmechaniker oder ähnlich",
      "Erfahrung mit CNC-Steuerungen (Siemens, Fanuc)",
      "Qualitätsbewusstsein und Genauigkeit",
      "Schichtbereitschaft von Vorteil",
    ],
  },
  {
    id: "S-003",
    titel: "Vertriebsingenieur (m/w/d)",
    bereich: "Vertrieb & Anwendungsberatung",
    ort: "Sinsheim / Reisebereit",
    art: "Vollzeit",
    beschreibung:
      "Als Vertriebsingenieur betreuen Sie Kunden in Deutschland und international. Sie beraten technisch kompetent, erstellen Angebote und begleiten Projekte — vom ersten Kontakt bis zur Inbetriebnahme.",
    aufgaben: [
      "Technische Kundenberatung national und international",
      "Angebotserstellung und Auftragsverhandlung",
      "Messebetreuung (K-Messe, PRS Europe u.a.)",
      "Marktbeobachtung und Neukundengewinnung",
    ],
    profil: [
      "Technisches Studium (Maschinenbau, Verfahrenstechnik o.ä.)",
      "Berufserfahrung im technischen Vertrieb",
      "Verhandlungssichere Deutsch- und Englischkenntnisse",
      "Reisebereitschaft (ca. 30–40 %)",
    ],
  },
  {
    id: "S-004",
    titel: "Elektrokonstrukteur (m/w/d)",
    bereich: "Elektrotechnik & Steuerungstechnik",
    ort: "Sinsheim",
    art: "Vollzeit",
    beschreibung:
      "Sie planen und konstruieren Schaltschränke und Steuerungsanlagen für unsere Recyclingmaschinen. Die Projektierung mit EPLAN Electric P8 und die Zusammenarbeit mit dem Konstruktionsteam stehen im Mittelpunkt.",
    aufgaben: [
      "Elektrotechnische Konstruktion mit EPLAN Electric P8",
      "Planung und Auslegung von Schaltschränken und Steuerkabinetten",
      "SPS-Programmierung (Siemens SIMATIC S7/TIA Portal)",
      "Inbetriebnahme und Fehlersuche vor Ort beim Kunden",
    ],
    profil: [
      "Abschluss in Elektrotechnik, Automatisierungstechnik oder ähnlich",
      "Erfahrung mit EPLAN Electric P8",
      "Kenntnisse in SPS-Programmierung (Siemens S7 / TIA Portal)",
      "Reisebereitschaft für Inbetriebnahmen",
    ],
  },
];

export default function StellenangebotePage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Karriere
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Offene Stellen bei<br />
              <span className="text-brand-cyan">NEUE HERBOLD.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Verstärken Sie unser Team in Sinsheim — in Konstruktion, Fertigung,
              Vertrieb oder Elektrotechnik.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand-cyan" />
            <span className="text-brand-cyan font-semibold">
              {stellen.length} offene Stellen
            </span>
            <span className="text-white/30 text-sm ml-2">
              · Sinsheim, Baden-Württemberg
            </span>
          </div>
        </Container>
      </section>

      {/* ─── Stellenliste ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="space-y-6">
            {stellen.map((stelle) => (
              <div
                key={stelle.id}
                className="border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-md transition-all"
              >
                <div className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-graphite-400 bg-graphite-100 px-2 py-0.5">
                          {stelle.bereich}
                        </span>
                        <span className="text-[0.6rem] font-mono text-graphite-400">
                          {stelle.id}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-brand-blue">
                        {stelle.titel}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-graphite-500">
                          <MapPin className="size-3.5" />
                          {stelle.ort}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-graphite-500">
                          <Clock className="size-3.5" />
                          {stelle.art}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/kontakt/anfrage"
                      className="inline-flex items-center gap-2 h-9 px-5 bg-brand-cyan text-brand-blue text-xs font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors shrink-0"
                    >
                      Jetzt bewerben <ArrowRight className="size-3" />
                    </Link>
                  </div>

                  <p className="text-sm text-graphite-600 leading-relaxed mb-5">
                    {stelle.beschreibung}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-3">
                        Ihre Aufgaben
                      </p>
                      <ul className="space-y-1.5">
                        {stelle.aufgaben.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm text-graphite-600"
                          >
                            <span className="mt-2 size-1 rounded-full bg-brand-cyan shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-3">
                        Ihr Profil
                      </p>
                      <ul className="space-y-1.5">
                        {stelle.profil.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-sm text-graphite-600"
                          >
                            <span className="mt-2 size-1 rounded-full bg-brand-cyan shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Initiativbewerbung ─────────────────────────────────────── */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-graphite-200 p-7">
              <h3 className="text-lg font-bold text-brand-blue mb-3">
                Nichts Passendes gefunden?
              </h3>
              <p className="text-sm text-graphite-600 leading-relaxed mb-5">
                Wir freuen uns immer über motivierte Bewerberinnen und Bewerber —
                auch wenn gerade keine passende Stelle ausgeschrieben ist.
                Senden Sie uns Ihre Initiativbewerbung.
              </p>
              <Link
                href="/karriere/initiativbewerbung"
                className="inline-flex items-center gap-2 h-9 px-5 bg-brand-blue text-white text-sm font-semibold rounded-sm hover:bg-brand-steel transition-colors"
              >
                Initiativbewerbung <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="bg-brand-deep p-7">
              <h3 className="text-lg font-bold text-white mb-3">
                Ausbildung bei NEUE HERBOLD
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                Wir bilden aus! Industriemechaniker, Zerspanungsmechaniker,
                technische Produktdesigner und Industriekaufleute (m/w/d).
              </p>
              <Link
                href="/karriere/ausbildung"
                className="inline-flex items-center gap-2 text-sm text-brand-cyan font-semibold hover:gap-3 transition-all"
              >
                Zu den Ausbildungsplätzen <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Fragen zur Bewerbung?</h2>
              <p className="mt-2 text-white/50 text-sm">
                Unser HR-Team hilft Ihnen gerne weiter.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
            >
              Kontakt aufnehmen <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
