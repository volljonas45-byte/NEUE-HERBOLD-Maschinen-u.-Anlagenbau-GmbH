import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Initiativbewerbung | Karriere | NEUE HERBOLD",
  description:
    "Initiativbewerbung bei NEUE HERBOLD in Sinsheim — wir freuen uns auf Ihre Bewerbung.",
};

export default function InitiativbewerbungPage() {
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
              Initiativbewerbung —<br />
              <span className="text-brand-cyan">wir freuen uns auf Sie.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Auch wenn gerade keine passende Stelle ausgeschrieben ist, sind wir
              immer an motivierten Talenten interessiert.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Inhalt ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">
                Warum NEUE HERBOLD?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Sinnvolle Arbeit",
                    desc: "Wir bauen Maschinen, die Kunststoff recyceln und die Umwelt schützen — echte Wertschöpfung mit echtem Impact.",
                  },
                  {
                    title: "Stabiles Familienunternehmen",
                    desc: "Seit 1995 in Sinsheim — ein solider Arbeitgeber mit langfristiger Perspektive und kurzen Entscheidungswegen.",
                  },
                  {
                    title: "Internationales Umfeld",
                    desc: "Kunden in über 40 Ländern — interessante Aufgaben mit internationalem Bezug direkt aus Sinsheim heraus.",
                  },
                  {
                    title: "Weiterentwicklung",
                    desc: "Wir fördern Aus- und Weiterbildung und bieten Ihnen die Möglichkeit, mit dem Unternehmen zu wachsen.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-2 size-1.5 rounded-full bg-brand-cyan shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-blue">{item.title}</p>
                      <p className="text-sm text-graphite-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold text-brand-blue mb-3">
                  Bereiche in denen wir uns freuen:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Maschinenbau / Konstruktion",
                    "Elektrotechnik / Steuerungstechnik",
                    "Fertigung / CNC",
                    "Vertrieb / Anwendungsberatung",
                    "Service / After-Sales",
                    "Kaufmännisch / Einkauf",
                  ].map((b) => (
                    <span
                      key={b}
                      className="text-xs font-medium text-brand-blue bg-brand-blue/8 px-3 py-1.5"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bewerbungs-Box */}
            <div>
              <div className="bg-brand-deep p-8">
                <p className="text-brand-cyan text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                  Bewerbung einschicken
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  So bewerben Sie sich
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Senden Sie Ihre vollständige Bewerbung (Anschreiben, Lebenslauf,
                  Zeugnisse) per E-Mail an:
                </p>

                <div className="bg-white/8 border border-white/15 p-4 mb-6">
                  <p className="text-brand-cyan text-sm font-semibold">bewerbung@neue-herbold.de</p>
                  <p className="text-white/40 text-xs mt-1">
                    Betreff: Initiativbewerbung — Ihr gewünschter Bereich
                  </p>
                </div>

                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex gap-2">
                    <span className="text-brand-cyan shrink-0">01</span>
                    <p>Anschreiben mit gewünschtem Einsatzbereich und Starttermin</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-brand-cyan shrink-0">02</span>
                    <p>Tabellarischer Lebenslauf</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-brand-cyan shrink-0">03</span>
                    <p>Relevante Zeugnisse und Zertifikate (als PDF)</p>
                  </div>
                </div>

                <a
                  href="mailto:bewerbung@neue-herbold.de?subject=Initiativbewerbung"
                  className="mt-7 inline-flex items-center gap-2 h-11 px-6 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors w-full justify-center"
                >
                  Jetzt bewerben <ArrowRight className="size-3.5" />
                </a>
              </div>

              <div className="mt-4 bg-graphite-100 border border-graphite-200 p-6">
                <p className="text-sm font-semibold text-brand-blue mb-1">
                  Haben wir offene Stellen?
                </p>
                <p className="text-xs text-graphite-500 mb-3">
                  Schauen Sie auch unsere aktuellen Stellenangebote durch.
                </p>
                <Link
                  href="/karriere/stellenangebote"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold hover:gap-2.5 transition-all"
                >
                  Zu den Stellenangeboten <ChevronRight className="size-4" />
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
              <h2 className="text-2xl font-bold text-white">Fragen zur Bewerbung?</h2>
              <p className="mt-2 text-white/50 text-sm">
                Kontaktieren Sie uns — wir helfen Ihnen gerne weiter.
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
