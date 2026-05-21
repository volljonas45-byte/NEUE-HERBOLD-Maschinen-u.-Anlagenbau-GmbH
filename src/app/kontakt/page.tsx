import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kontakt | NEUE HERBOLD",
  description:
    "Kontakt zu NEUE HERBOLD in Sinsheim — Telefon, E-Mail, Anfrage-Formulare und alle Ansprechpartner.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Kontakt
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Sprechen Sie uns an
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl">
              Unser Team berät Sie gerne — von der Maschinenauswahl über Ersatzteile bis hin
              zu Reparaturen.
            </p>
          </div>
        </Container>
      </section>

      {/* Split layout: contact info + quick forms */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Kontaktdaten</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 py-4 border-b border-graphite-200">
                  <Phone className="size-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-graphite-400 font-mono uppercase tracking-wide mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+49726192480"
                      className="text-brand-blue font-semibold hover:text-brand-cyan transition-colors"
                    >
                      +49 (0) 7261 / 9248-0
                    </a>
                    <p className="text-sm text-graphite-500 mt-0.5">
                      Fax: +49 (0) 7261 / 9248-99
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4 border-b border-graphite-200">
                  <Mail className="size-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-graphite-400 font-mono uppercase tracking-wide mb-1">
                      E-Mail
                    </p>
                    <a
                      href="mailto:info@neue-herbold.de"
                      className="text-brand-blue font-semibold hover:text-brand-cyan transition-colors"
                    >
                      info@neue-herbold.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4 border-b border-graphite-200">
                  <MapPin className="size-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-graphite-400 font-mono uppercase tracking-wide mb-1">
                      Adresse
                    </p>
                    <p className="text-brand-blue font-semibold">
                      NEUE HERBOLD GmbH
                    </p>
                    <p className="text-graphite-600 text-sm mt-0.5">
                      Wiesenstraße 44<br />
                      74889 Sinsheim-Reihen<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <Clock className="size-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-graphite-400 font-mono uppercase tracking-wide mb-1">
                      Öffnungszeiten
                    </p>
                    <p className="text-graphite-600 text-sm">
                      Montag – Freitag: 08:00 – 17:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Hotline highlight */}
              <div className="mt-6 bg-brand-blue rounded-xl p-5">
                <p className="text-brand-cyan text-xs font-mono tracking-widest uppercase mb-2">
                  Service-Hotline
                </p>
                <a
                  href="tel:+4972619248-19"
                  className="text-white font-bold text-xl hover:text-brand-cyan transition-colors"
                >
                  07261 / 9248-19
                </a>
                <p className="text-white/50 text-sm mt-1">Egon Kaiser — Vertrieb / Service</p>
              </div>
            </div>

            {/* Right: Quick action cards */}
            <div>
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Anfragen</h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Technische Anfrage",
                    desc: "Maschinen, Anlagen, Probemahlung",
                    href: "/kontakt/anfrage",
                    badge: "Empfohlen",
                  },
                  {
                    title: "Ersatzteil-Anfrage",
                    desc: "Rotormesser, Siebe, Lager, Keilriemen",
                    href: "/kontakt/ersatzteil-anfrage",
                    badge: null,
                  },
                  {
                    title: "Reparatur-Anfrage",
                    desc: "Auch für Fremdprodukte",
                    href: "/service/reparaturen",
                    badge: null,
                  },
                  {
                    title: "Bewerbung",
                    desc: "Offene Stellen & Ausbildung",
                    href: "/karriere",
                    badge: null,
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between border border-graphite-200 rounded-xl p-5 hover:border-brand-cyan/30 hover:shadow-sm transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors">
                          {item.title}
                        </p>
                        {item.badge && (
                          <span className="text-xs bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded-full font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-graphite-600 mt-0.5">{item.desc}</p>
                    </div>
                    <ChevronRight className="size-4 text-graphite-400 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>

              {/* All contacts */}
              <Link
                href="/kontakt/ansprechpartner"
                className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-cyan transition-colors"
              >
                Alle Ansprechpartner ansehen
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
