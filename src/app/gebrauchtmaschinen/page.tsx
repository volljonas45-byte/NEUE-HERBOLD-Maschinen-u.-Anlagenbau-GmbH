import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gebrauchtmaschinen | NEUE HERBOLD",
  description:
    "Gebrauchte NEUE HERBOLD Maschinen — schnell verfügbar, geprüft und überholt. Schneidmühlen, Schredder und Waschanlagen mit kurzen Lieferzeiten.",
};

const maschinen = [
  {
    id: "GM-001",
    name: "Schneidmühle SM 500/800",
    category: "Schneidmühle",
    zustand: "Überholt",
    baujahr: "2018",
    rotordurchmesser: "500 mm",
    arbeitsbreite: "800 mm",
    antrieb: "55 kW",
    beschreibung:
      "Überholt, neue Messer, Sieb und Lager. Bereit für Soforteinsatz. Ideal für Folien, Spritzguss und Profile.",
    verfuegbar: true,
  },
  {
    id: "GM-002",
    name: "Einwellenschredder HZR 1300",
    category: "Einwellenschredder",
    zustand: "Gebraucht",
    baujahr: "2017",
    rotordurchmesser: "400 mm",
    arbeitsbreite: "1300 mm",
    antrieb: "30 kW",
    beschreibung:
      "Sehr guter Zustand. Hydraulisch gesteuert, automatische Reversierung. Für Ballenwaren und Klumpen.",
    verfuegbar: true,
  },
  {
    id: "GM-003",
    name: "Feinmühle ZM 500",
    category: "Feinmühle",
    zustand: "Überholt",
    baujahr: "2016",
    rotordurchmesser: "500 mm",
    arbeitsbreite: "–",
    antrieb: "30 kW",
    beschreibung:
      "Vollständig überholt. Prallscheibenmühle für Pulverisierung auf < 1 mm. Siebloser Betrieb.",
    verfuegbar: true,
  },
];

const zustandBadge = (zustand: string) => {
  if (zustand === "Überholt")
    return "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30";
  return "bg-graphite-200 text-graphite-600 border border-graphite-300";
};

export default function GebrauchtmaschinenPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Gebrauchtmaschinen
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              NEUE HERBOLD Gebrauchtmaschinen —<br />
              <span className="text-brand-cyan">schnell verfügbar.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Geprüfte und überholte Maschinen aus eigenem Bestand. Kürzere Lieferzeiten,
              bewährte Qualität — Made in Germany.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Geprüft", label: "Qualität gesichert" },
              { value: "Überholt", label: "Neue Verschleißteile" },
              { value: "Schnell", label: "Kurze Lieferzeiten" },
              { value: "Service", label: "Mit Garantie" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-sm text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Info Banner ────────────────────────────────────────────── */}
      <section className="bg-brand-blue/80 border-b border-white/10">
        <Container className="py-5">
          <p className="text-sm text-white/60 text-center">
            Aktuell verfügbare Gebrauchtmaschinen werden auf Anfrage mitgeteilt —
            unser Bestand ändert sich regelmäßig.{" "}
            <Link href="/kontakt/anfrage" className="text-brand-cyan hover:underline">
              Anfrage stellen →
            </Link>
          </p>
        </Container>
      </section>

      {/* ─── Maschinenübersicht ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-3">
                Aktueller Bestand (Beispiele)
              </p>
              <h2 className="text-3xl font-bold text-brand-blue">
                Verfügbare Maschinen
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {maschinen.map((m) => (
              <div
                key={m.id}
                className="border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-md transition-all"
              >
                <div className="p-6 grid md:grid-cols-[1fr_auto] gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[0.6rem] font-mono text-graphite-400 bg-graphite-100 px-2 py-0.5">
                        {m.id}
                      </span>
                      <span
                        className={`text-[0.65rem] font-semibold px-2 py-0.5 uppercase tracking-wider ${zustandBadge(m.zustand)}`}
                      >
                        {m.zustand}
                      </span>
                      <span className="text-[0.65rem] font-mono text-graphite-400">
                        Bj. {m.baujahr}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue">{m.name}</h3>
                    <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
                      {m.beschreibung}
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {m.rotordurchmesser !== "–" && (
                        <div>
                          <p className="text-[0.6rem] uppercase tracking-widest text-graphite-400">Rotordurchm.</p>
                          <p className="text-sm font-semibold text-brand-blue font-mono mt-0.5">{m.rotordurchmesser}</p>
                        </div>
                      )}
                      {m.arbeitsbreite !== "–" && (
                        <div>
                          <p className="text-[0.6rem] uppercase tracking-widest text-graphite-400">Arbeitsbreite</p>
                          <p className="text-sm font-semibold text-brand-blue font-mono mt-0.5">{m.arbeitsbreite}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-widest text-graphite-400">Antrieb</p>
                        <p className="text-sm font-semibold text-brand-blue font-mono mt-0.5">{m.antrieb}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-start md:items-end justify-between md:justify-between gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-brand-cyan shrink-0" />
                      <span className="text-xs text-brand-cyan font-semibold">Verfügbar</span>
                    </div>
                    <Link
                      href="/kontakt/anfrage"
                      className="inline-flex items-center gap-2 h-9 px-5 bg-brand-blue text-white text-xs font-semibold hover:bg-brand-steel transition-colors rounded-sm"
                    >
                      Anfragen <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-graphite-100 border border-graphite-200 p-6">
            <p className="text-sm text-graphite-600">
              <strong className="text-brand-blue">Hinweis:</strong> Der Bestand ändert sich
              fortlaufend. Wenn Sie eine bestimmte Maschine suchen, die hier nicht aufgeführt ist,
              kontaktieren Sie uns — wir helfen Ihnen weiter.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Warum Gebrauchtmaschinen ────────────────────────────────── */}
      <section className="bg-graphite-100 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-3">
                Ihre Vorteile
              </p>
              <h2 className="text-3xl font-bold text-brand-blue mb-8">
                Warum Gebrauchtmaschinen von NEUE HERBOLD?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Geprüfte Qualität",
                    desc: "Alle Maschinen werden von unserem Service-Team vollständig geprüft und bei Bedarf überholt.",
                  },
                  {
                    title: "Kurze Lieferzeiten",
                    desc: "Lagerverfügbare Maschinen können deutlich schneller geliefert werden als Neumaschinen.",
                  },
                  {
                    title: "Original-Ersatzteile",
                    desc: "Als Hersteller verfügen wir über alle Ersatzteile — auch für ältere Baureihen.",
                  },
                  {
                    title: "Service & Support",
                    desc: "Voller Support durch unser Serviceteam — Installation, Schulung und Wartung inklusive.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1.5 size-1.5 rounded-full bg-brand-cyan shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-blue">{item.title}</p>
                      <p className="text-sm text-graphite-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-brand-deep text-white p-7">
                <p className="text-brand-cyan text-sm font-semibold mb-4">
                  Suchen Sie eine bestimmte Maschine?
                </p>
                <h3 className="text-xl font-bold mb-3">
                  Sprechen Sie uns direkt an.
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Unser Vertriebsteam kennt den aktuellen Bestand und kann Ihnen
                  schnell mitteilen, ob die gewünschte Maschine verfügbar ist.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+49726192480"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="size-4 text-brand-cyan shrink-0" />
                    +49 (0) 7261 / 9248-0
                  </a>
                  <a
                    href="mailto:info@neue-herbold.de"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail className="size-4 text-brand-cyan shrink-0" />
                    info@neue-herbold.de
                  </a>
                </div>
                <Link
                  href="/kontakt/anfrage"
                  className="mt-6 inline-flex items-center gap-2 h-10 px-6 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
                >
                  Anfrage stellen <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="bg-white border border-graphite-200 p-6">
                <p className="text-sm font-semibold text-brand-blue mb-1">
                  Neue Maschine bevorzugt?
                </p>
                <p className="text-xs text-graphite-500 mb-3">
                  Alle Neumaschinen mit aktuellen Specs und kurzen Lieferzeiten.
                </p>
                <Link
                  href="/maschinen"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold hover:gap-2.5 transition-all"
                >
                  Neumaschinen entdecken <ChevronRight className="size-4" />
                </Link>
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
              <h2 className="text-2xl font-bold text-white">Gebrauchtmaschinen anfragen</h2>
              <p className="mt-2 text-white/50 text-sm">
                Unser Team antwortet innerhalb von 24 Stunden.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
              >
                Anfrage stellen
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
