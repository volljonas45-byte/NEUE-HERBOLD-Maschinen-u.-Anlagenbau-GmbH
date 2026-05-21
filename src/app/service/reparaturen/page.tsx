import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Wrench } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Reparaturen | Service | NEUE HERBOLD",
  description:
    "Reparaturen von Schneidmühlen und Shreddern — auch Fremdprodukte von Alpine, Herbold, Pallmann und mehr.",
};

const brands = [
  "Alpine", "Condux", "Dreher", "Falzoni",
  "Getecha", "Herbold", "Pallmann", "Rapid",
  "Tria", "Zerma",
];

export default function ReparaturenPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Service / Reparaturen
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Reparaturen —
              <br />
              <span className="text-brand-cyan">auch für Fremdprodukte</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              NEUE HERBOLD repariert Schneidmühlen und Shredder aller namhaften Hersteller.
              Schnelle Diagnose, zuverlässige Ausführung.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">
                Reparatur auch für:
              </h2>
              <p className="text-graphite-600 mb-6 text-sm">
                Unsere erfahrenen Servicetechniker kennen die Maschinen aller führenden Hersteller.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {brands.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center gap-2.5 border border-graphite-200 rounded-lg px-4 py-3 text-sm font-medium text-graphite-700"
                  >
                    <Wrench className="size-4 text-brand-cyan shrink-0" />
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-4">Leistungsumfang</h2>
              <div className="space-y-4">
                {[
                  { title: "Diagnose", desc: "Zustandsanalyse und Fehlerbewertung — auf Wunsch vor Ort." },
                  { title: "Überholuung & Instandsetzung", desc: "Rotor-Überholung, Lageraustausch, Messer-Nachschliff, Sieb-Reparatur." },
                  { title: "Gebrauchtteile", desc: "Günstige Reparatur mit geprüften Gebrauchtteilen möglich." },
                  { title: "Express-Service", desc: "Schnelle Abwicklung bei Stillstand — auf Anfrage." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-brand-cyan pl-4">
                    <p className="font-semibold text-brand-blue">{item.title}</p>
                    <p className="text-sm text-graphite-600 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-brand-blue rounded-xl p-6">
                <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                  Reparatur anfragen
                </p>
                <p className="text-white/70 text-sm mb-4">
                  Beschreiben Sie den Schaden — wir melden uns umgehend.
                </p>
                <Link
                  href="/kontakt/anfrage"
                  className="inline-flex items-center gap-2 bg-brand-cyan text-brand-deep text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-cyan-bright transition-colors"
                >
                  Reparatur anfragen
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
