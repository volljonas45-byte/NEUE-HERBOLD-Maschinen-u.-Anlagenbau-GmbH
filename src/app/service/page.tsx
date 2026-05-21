import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Package, Wrench, Settings, FlaskConical } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service | NEUE HERBOLD",
  description:
    "Ersatzteile noch am Bestelltag, Reparaturen auch für Fremdprodukte, Zubehör und kostenloses Technikum in Sinsheim.",
};

const services = [
  {
    icon: Package,
    title: "Ersatzteile",
    shortDesc: "Noch am Bestelltag geliefert",
    desc: "Rotormesser, Statormesser, Messerdruckleisten, Siebe, Keilriemen, Kugellager, Mahlscheiben, Zahnringe und Schlaghämmer — immer auf Lager.",
    href: "/service/ersatzteile",
    items: ["Rotormesser", "Statormesser", "Siebe & Siebeinlagen", "Keilriemen", "Kugellager", "Mahlscheiben"],
  },
  {
    icon: Wrench,
    title: "Reparaturen",
    shortDesc: "Auch für Fremdprodukte",
    desc: "NEUE HERBOLD repariert nicht nur eigene Maschinen — auch Maschinen von Alpine, Condux, Dreher, Falzoni, Getecha, Herbold, Pallmann, Rapid, Tria und Zerma.",
    href: "/service/reparaturen",
    items: ["Alpine", "Condux", "Dreher", "Getecha", "Herbold", "Pallmann", "Rapid", "Zerma"],
  },
  {
    icon: Settings,
    title: "Zubehör",
    shortDesc: "Systemzubehör für optimalen Betrieb",
    desc: "Ergänzungskomponenten, Nachrüstoptionen und Zubehör für alle Maschinen-Baureihen von NEUE HERBOLD.",
    href: "/service/zubehoer",
    items: ["Siebeinlagen", "Messerhalter", "Trichter", "Förderbänder", "Steuerungen"],
  },
  {
    icon: FlaskConical,
    title: "Technikum",
    shortDesc: "Kostenlose Probemahlung in Sinsheim",
    desc: "Testen Sie Ihr Material kostenlos im Technikum in Sinsheim. Wir ermitteln die optimale Maschine und Einstellung für Ihre Aufgabe.",
    href: "/service/technikum",
    items: ["Probemahlung", "Materialanalyse", "Maschinenempfehlung", "Prozessberatung"],
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Service
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Service & Support
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              Ersatzteile noch am Bestelltag, Reparaturen auch für Fremdprodukte und kostenlose
              Probemahlung im Technikum.
            </p>
            <div className="mt-6">
              <a
                href="tel:+4972619248-19"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-cyan transition-colors"
              >
                Service-Hotline: 07261 / 9248-19
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group border border-graphite-200 rounded-xl p-7 hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-brand-blue group-hover:text-brand-cyan transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-cyan transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-brand-cyan/80 font-medium mt-0.5">{svc.shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-graphite-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {svc.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-graphite-500 bg-graphite-100 px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:text-brand-cyan transition-colors">
                    Mehr erfahren
                    <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact row */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                Ersatzteile & Service
              </p>
              <p className="text-white font-semibold">Jochen Fuchs</p>
              <p className="text-white/50 text-sm mt-0.5">Service/Ersatzteile/Reparatur</p>
              <a
                href="tel:+497261924853"
                className="text-white/70 hover:text-brand-cyan transition-colors text-sm mt-1 block"
              >
                +49 7261 / 9248-53
              </a>
            </div>
            <div>
              <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                Service
              </p>
              <p className="text-white font-semibold">Natalia Zelinski</p>
              <p className="text-white/50 text-sm mt-0.5">Service</p>
              <a
                href="tel:+497261924832"
                className="text-white/70 hover:text-brand-cyan transition-colors text-sm mt-1 block"
              >
                +49 7261 / 9248-32
              </a>
            </div>
            <div>
              <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                Versand
              </p>
              <p className="text-white font-semibold">Meike Hufnagel</p>
              <p className="text-white/50 text-sm mt-0.5">Versand</p>
              <a
                href="tel:+497261924814"
                className="text-white/70 hover:text-brand-cyan transition-colors text-sm mt-1 block"
              >
                +49 7261 / 9248-14
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
