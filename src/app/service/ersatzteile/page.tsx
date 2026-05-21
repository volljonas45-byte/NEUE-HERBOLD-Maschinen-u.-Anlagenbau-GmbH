import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Truck, Package } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Ersatzteile | Service | NEUE HERBOLD",
  description:
    "Rotormesser, Siebe, Kugellager und mehr — Ersatzteile von NEUE HERBOLD noch am Bestelltag per Express geliefert.",
};

const parts = [
  "Rotormesser", "Statormesser", "Messerdruckleisten",
  "Siebe & Siebeinlagen", "Keilriemen", "Kugellager",
  "Mahlscheiben", "Zahnringe", "Schlaghämmer",
  "Messerhalter", "Trichterauskleidungen", "Schwingsiebmatrizen",
];

export default function ErsatzteilePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Service / Ersatzteile
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ersatzteile auf Lager —
              <br />
              <span className="text-brand-cyan">noch am Bestelltag</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              Alle wichtigen Verschleiß- und Ersatzteile sind ständig auf Lager. Lieferung per
              Express, Luftfracht oder desk-to-desk weltweit.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Lagerteile (Auswahl)</h2>
              <div className="grid grid-cols-2 gap-2">
                {parts.map((p) => (
                  <div key={p} className="flex items-center gap-2.5 py-2 border-b border-graphite-200 text-sm text-graphite-700">
                    <Package className="size-3.5 text-brand-cyan shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-graphite-400">
                Weitere Teile auf Anfrage — auch für ältere Maschinen.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-graphite-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="size-5 text-brand-cyan" />
                  <h3 className="font-bold text-brand-blue">Versandoptionen</h3>
                </div>
                <ul className="space-y-2 text-sm text-graphite-600">
                  <li>• Express-Lieferung innerhalb Deutschlands</li>
                  <li>• Luftfracht weltweit</li>
                  <li>• Desk-to-desk (Werks-zu-Werks)</li>
                </ul>
              </div>
              <div className="bg-graphite-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="size-5 text-brand-cyan" />
                  <h3 className="font-bold text-brand-blue">Bestellung & Lieferzeit</h3>
                </div>
                <p className="text-sm text-graphite-600">
                  Lagerwaren: Versand noch am Bestelltag.
                  <br />
                  Nicht-Lagerwaren: Lieferzeit auf Anfrage.
                </p>
              </div>

              <div className="bg-brand-blue rounded-xl p-6">
                <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                  Ansprechpartner Ersatzteile
                </p>
                <p className="text-white font-bold">Jochen Fuchs</p>
                <p className="text-white/50 text-sm mt-0.5">Service/Ersatzteile/Reparatur</p>
                <a href="tel:+497261924853" className="text-white/70 hover:text-brand-cyan text-sm mt-2 block transition-colors">
                  +49 7261 / 9248-53
                </a>
                <Link
                  href="/kontakt/ersatzteil-anfrage"
                  className="mt-4 inline-flex items-center gap-2 bg-brand-cyan text-brand-deep text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-cyan-bright transition-colors"
                >
                  Ersatzteil anfragen
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
