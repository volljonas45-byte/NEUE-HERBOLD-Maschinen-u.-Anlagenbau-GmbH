import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ansprechpartner | Kontakt | NEUE HERBOLD",
  description:
    "Alle Ansprechpartner bei NEUE HERBOLD — Vertrieb, Service, Ersatzteile, Finanzen und mehr.",
};

const ansprechpartner = [
  {
    name: "Peter Abraham",
    rolle: "Geschäftsführung",
    bereich: "Geschäftsführung",
    telefon: "+49 7261 / 9248-0",
    email: "p.abraham@neue-herbold.com",
  },
  {
    name: "Manuel Höglinger",
    rolle: "Prokurist / Finanzen / Personal",
    bereich: "Geschäftsführung",
    telefon: "+49 7261 / 9248-0",
    email: "info@neue-herbold.de",
  },
  {
    name: "Peter Bäuchle",
    rolle: "Vertrieb",
    bereich: "Vertrieb",
    telefon: "+49 7261 / 9248-34",
    email: "p.baeuchle@neue-herbold.com",
  },
  {
    name: "Helall Firouzie",
    rolle: "Vertrieb",
    bereich: "Vertrieb",
    telefon: "+49 7261 / 9248-41",
    email: "h.firouzie@neue-herbold.com",
  },
  {
    name: "Leonhard Heinrichsmeier",
    rolle: "Vertrieb",
    bereich: "Vertrieb",
    telefon: "+49 7261 / 9248-35",
    email: "l.heinrichsmeier@neue-herbold.com",
  },
  {
    name: "Andreas Möller",
    rolle: "Vertrieb",
    bereich: "Vertrieb",
    telefon: "+49 7261 / 9248-38",
    email: "a.moeller@neue-herbold.com",
  },
  {
    name: "Ulrich Maier-Borst",
    rolle: "Vertrieb",
    bereich: "Vertrieb",
    telefon: "+49 7261 / 9248-54",
    email: "u.maier-borst@neue-herbold.com",
  },
  {
    name: "Egon Kaiser",
    rolle: "Vertrieb / Service",
    bereich: "Vertrieb & Service",
    telefon: "+49 7261 / 9248-19",
    email: "e.kaiser@neue-herbold.com",
  },
  {
    name: "Jochen Fuchs",
    rolle: "Service / Ersatzteile",
    bereich: "Service",
    telefon: "+49 7261 / 9248-53",
    email: "j.fuchs@neue-herbold.com",
  },
  {
    name: "Natalia Zelinski",
    rolle: "Service",
    bereich: "Service",
    telefon: "+49 7261 / 9248-32",
    email: "n.zelinski@neue-herbold.com",
  },
  {
    name: "Ronald Arbogast",
    rolle: "Service",
    bereich: "Service",
    telefon: "+49 7261 / 9248-55",
    email: "r.arbogast@neue-herbold.com",
  },
  {
    name: "Lusine Avetisyan",
    rolle: "Service",
    bereich: "Service",
    telefon: "+49 7261 / 9248-56",
    email: "l.avetisyan@neue-herbold.com",
  },
  {
    name: "Meike Hufnagel",
    rolle: "Versand",
    bereich: "Logistik",
    telefon: "+49 7261 / 9248-14",
    email: "m.hufnagel@neue-herbold.com",
  },
  {
    name: "Marc Leibenguth",
    rolle: "Einkauf",
    bereich: "Einkauf",
    telefon: "+49 7261 / 9248-13",
    email: "m.leibenguth@neue-herbold.com",
  },
];

const bereiche = Array.from(new Set(ansprechpartner.map((p) => p.bereich)));

export default function AnsprechpartnerPage() {
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
              Ihre Ansprechpartner<br />
              <span className="text-brand-cyan">bei NEUE HERBOLD.</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg leading-relaxed max-w-xl">
              Finden Sie den richtigen Ansprechpartner für Ihre Anfrage —
              in Vertrieb, Service, Ersatzteile und mehr.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <a
                href="tel:+49726192480"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="size-4 text-brand-cyan" />
                <span className="text-sm">+49 (0) 7261 / 9248-0</span>
              </a>
            </div>
            <div>
              <a
                href="mailto:info@neue-herbold.de"
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="size-4 text-brand-cyan" />
                <span className="text-sm">info@neue-herbold.de</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Ansprechpartner nach Bereich ────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          {bereiche.map((bereich) => {
            const personen = ansprechpartner.filter((p) => p.bereich === bereich);
            return (
              <div key={bereich} className="mb-14 last:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="block h-px w-5 bg-brand-cyan shrink-0" />
                  <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-graphite-400">
                    {bereich}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {personen.map((person) => {
                    const initials = person.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("");
                    return (
                      <div
                        key={person.name}
                        className="border border-graphite-200 hover:border-brand-cyan/30 hover:shadow-sm transition-all p-5"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="size-10 bg-brand-blue/8 flex items-center justify-center shrink-0">
                            <span className="text-brand-blue font-bold text-sm">
                              {initials}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-brand-blue text-sm leading-tight">
                              {person.name}
                            </p>
                            <p className="text-xs text-graphite-500 mt-0.5">
                              {person.rolle}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 pt-3 border-t border-graphite-200">
                          <a
                            href={`tel:${person.telefon.replace(/\s/g, "").replace("/", "")}`}
                            className="flex items-center gap-2 text-xs text-graphite-500 hover:text-brand-blue transition-colors"
                          >
                            <Phone className="size-3 shrink-0 text-brand-cyan" />
                            <span className="font-mono">{person.telefon}</span>
                          </a>
                          {person.email !== "info@neue-herbold.de" ? (
                            <a
                              href={`mailto:${person.email}`}
                              className="flex items-center gap-2 text-xs text-graphite-500 hover:text-brand-blue transition-colors truncate"
                            >
                              <Mail className="size-3 shrink-0 text-brand-cyan" />
                              <span className="truncate">{person.email}</span>
                            </a>
                          ) : (
                            <a
                              href="mailto:info@neue-herbold.de"
                              className="flex items-center gap-2 text-xs text-graphite-400 transition-colors"
                            >
                              <Mail className="size-3 shrink-0 text-graphite-300" />
                              <span>info@neue-herbold.de</span>
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* ─── Zentrale Kontaktdaten ───────────────────────────────────── */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-graphite-200 p-6">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-graphite-400 mb-3">
                Telefon Zentrale
              </p>
              <a
                href="tel:+49726192480"
                className="text-xl font-bold text-brand-blue hover:text-brand-cyan transition-colors"
              >
                +49 (0) 7261 / 9248-0
              </a>
              <p className="text-xs text-graphite-500 mt-2">
                Mo–Fr 07:30–17:00 Uhr
              </p>
            </div>
            <div className="bg-white border border-graphite-200 p-6">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-graphite-400 mb-3">
                E-Mail allgemein
              </p>
              <a
                href="mailto:info@neue-herbold.de"
                className="text-lg font-bold text-brand-blue hover:text-brand-cyan transition-colors break-all"
              >
                info@neue-herbold.de
              </a>
              <p className="text-xs text-graphite-500 mt-2">
                Antwort innerhalb 24 h
              </p>
            </div>
            <div className="bg-white border border-graphite-200 p-6">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-graphite-400 mb-3">
                Adresse
              </p>
              <p className="text-sm text-brand-blue font-medium leading-relaxed">
                Wiesenstraße 44<br />
                74889 Sinsheim-Reihen<br />
                Deutschland
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Anfrage stellen
              </h2>
              <p className="mt-2 text-white/50 text-sm">
                Nutzen Sie unser Kontaktformular für technische Anfragen.
              </p>
            </div>
            <Link
              href="/kontakt/anfrage"
              className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-bright text-brand-deep font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
            >
              Zur Anfrage <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
