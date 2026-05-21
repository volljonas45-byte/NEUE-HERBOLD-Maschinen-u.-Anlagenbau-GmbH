import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Impressum | NEUE HERBOLD",
  description: "Impressum der NEUE HERBOLD Maschinen- und Anlagenbau GmbH, Sinsheim.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-white">Impressum</h1>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="max-w-2xl prose prose-sm prose-graphite">
            <h2 className="text-xl font-bold text-brand-blue mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-graphite-600 space-y-1 mb-8">
              <p className="font-semibold text-brand-blue">NEUE HERBOLD Maschinen- und Anlagenbau GmbH</p>
              <p>Wiesenstraße 44</p>
              <p>74889 Sinsheim-Reihen</p>
              <p>Deutschland</p>
            </div>

            <h3 className="text-lg font-bold text-brand-blue mb-2">Kontakt</h3>
            <div className="text-graphite-600 space-y-1 mb-8">
              <p>Telefon: +49 (0) 7261 / 9248-0</p>
              <p>Fax: +49 (0) 7261 / 9248-99</p>
              <p>E-Mail: info@neue-herbold.de</p>
            </div>

            <h3 className="text-lg font-bold text-brand-blue mb-2">Geschäftsführung</h3>
            <div className="text-graphite-600 mb-8">
              <p>Peter Abraham</p>
            </div>

            <h3 className="text-lg font-bold text-brand-blue mb-2">Handelsregister</h3>
            <div className="text-graphite-600 space-y-1 mb-8">
              <p>Registergericht: Amtsgericht Mannheim</p>
              <p className="text-sm text-graphite-400">
                (Handelsregisternummer auf Anfrage erhältlich)
              </p>
            </div>

            <h3 className="text-lg font-bold text-brand-blue mb-2">Umsatzsteuer-ID</h3>
            <div className="text-graphite-600 mb-8">
              <p className="text-sm text-graphite-400">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz — auf Anfrage erhältlich.
              </p>
            </div>

            <h3 className="text-lg font-bold text-brand-blue mb-2">Verantwortlich für den Inhalt</h3>
            <div className="text-graphite-600 mb-8">
              <p>Peter Abraham</p>
              <p>Wiesenstraße 44, 74889 Sinsheim-Reihen</p>
            </div>

            <div className="border-t border-graphite-200 pt-6 text-xs text-graphite-400">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
