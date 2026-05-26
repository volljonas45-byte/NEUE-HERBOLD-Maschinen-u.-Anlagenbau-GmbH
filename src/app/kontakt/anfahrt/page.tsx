import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, Train, Car } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Anfahrt | Kontakt | NEUE HERBOLD",
  description:
    "Anfahrt zu NEUE HERBOLD in Sinsheim-Reihen — mit PKW, Zug oder Flugzeug. GPS: Wiesenstraße 44, 74889 Sinsheim.",
};

export default function AnfahrtPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Kontakt
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              So finden Sie uns —<br />
              <span className="text-brand-cyan">Sinsheim-Reihen.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Unser Werk befindet sich in Sinsheim-Reihen — gut erreichbar
              über die A6 (Ausfahrt Sinsheim-Steinsfurt).
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Adresse + Infos ────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Adresse */}
            <div>
              <div className="bg-brand-deep p-8 mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="size-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-brand-cyan text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      Adresse
                    </p>
                    <p className="text-white font-semibold text-lg">
                      NEUE HERBOLD Maschinen- und Anlagenbau GmbH
                    </p>
                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
                      Wiesenstraße 44<br />
                      74889 Sinsheim-Reihen<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-5 border-t border-white/10">
                  <a
                    href="tel:+49726192480"
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="size-4 text-brand-cyan shrink-0" />
                    +49 (0) 7261 / 9248-0
                  </a>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Clock className="size-4 text-brand-cyan shrink-0" />
                    Mo–Fr 07:30–17:00 Uhr
                  </div>
                </div>
              </div>

              {/* Google Maps Link */}
              <a
                href="https://maps.google.com/?q=Wiesenstraße+44,+74889+Sinsheim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
              >
                In Google Maps öffnen <ArrowRight className="size-3.5" />
              </a>
            </div>

            {/* Anfahrtsbeschreibung */}
            <div className="space-y-6">
              <div className="border border-graphite-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="size-5 text-brand-blue" />
                  <h3 className="text-lg font-bold text-brand-blue">Mit dem PKW</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-graphite-600">
                  <li className="flex gap-2.5">
                    <span className="text-brand-cyan font-bold shrink-0">A6</span>
                    Autobahn A6 (Mannheim–Heilbronn), Ausfahrt Sinsheim-Steinsfurt (Nr. 36)
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-brand-cyan font-bold shrink-0">→</span>
                    Richtung Reihen, Wiesenstraße 44
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-brand-cyan font-bold shrink-0">GPS</span>
                    49.2551° N, 8.9043° E
                  </li>
                </ul>
                <p className="text-xs text-graphite-400 mt-4 font-mono">
                  Fahrzeit Mannheim: ca. 30 min · Heidelberg: ca. 35 min · Stuttgart: ca. 50 min
                </p>
              </div>

              <div className="border border-graphite-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Train className="size-5 text-brand-blue" />
                  <h3 className="text-lg font-bold text-brand-blue">Mit der Bahn</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-graphite-600">
                  <li className="flex gap-2.5">
                    <span className="text-brand-cyan font-bold shrink-0">RE</span>
                    Regional-Express Heidelberg → Sinsheim (ca. 30 Min.)
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-brand-cyan font-bold shrink-0">→</span>
                    Vom Bahnhof Sinsheim mit Taxi oder Bus ca. 10 Min.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-brand-cyan font-bold shrink-0">✓</span>
                    Gerne holen wir Sie bei Bedarf am Bahnhof ab — bitte im Voraus melden
                  </li>
                </ul>
              </div>

              <div className="border border-graphite-200 p-6">
                <h3 className="text-base font-bold text-brand-blue mb-3">Nächste Flughäfen</h3>
                <div className="space-y-2 text-sm text-graphite-600">
                  {[
                    { name: "Frankfurt (FRA)", dist: "ca. 85 km · 60 Min." },
                    { name: "Stuttgart (STR)", dist: "ca. 80 km · 55 Min." },
                    { name: "Mannheim City Airport", dist: "ca. 40 km · 35 Min." },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center justify-between">
                      <span>{f.name}</span>
                      <span className="font-mono text-xs text-graphite-400">{f.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Map Placeholder ────────────────────────────────────────── */}
      <section className="bg-graphite-100 py-0">
        <div
          className="w-full h-64 bg-brand-blue/10 flex items-center justify-center border-y border-graphite-200"
        >
          <div className="text-center">
            <MapPin className="size-10 text-brand-cyan mx-auto mb-3" />
            <p className="text-graphite-600 font-medium">Wiesenstraße 44 · 74889 Sinsheim-Reihen</p>
            <a
              href="https://maps.google.com/?q=Wiesenstraße+44,+74889+Sinsheim"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold hover:gap-2.5 transition-all"
            >
              In Google Maps öffnen <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Termin vereinbaren</h2>
              <p className="mt-2 text-white/50 text-sm">
                Besuchen Sie uns im Werk — Probemahlung, Maschinenvorführung oder Beratungsgespräch.
              </p>
            </div>
            <Link
              href="/kontakt/anfrage"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
            >
              Termin anfragen <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
