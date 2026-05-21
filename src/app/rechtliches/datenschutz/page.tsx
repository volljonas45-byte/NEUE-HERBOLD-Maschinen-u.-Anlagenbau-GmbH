import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutz | NEUE HERBOLD",
  description: "Datenschutzerklärung der NEUE HERBOLD Maschinen- und Anlagenbau GmbH.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6">
            <h1 className="text-4xl font-bold text-white">Datenschutzerklärung</h1>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="max-w-2xl space-y-8 text-sm text-graphite-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-blue mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-semibold text-brand-blue mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue mb-3">2. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="mt-3 pl-4 border-l-2 border-graphite-200">
                <p className="font-semibold text-brand-blue">NEUE HERBOLD Maschinen- und Anlagenbau GmbH</p>
                <p>Wiesenstraße 44, 74889 Sinsheim-Reihen</p>
                <p>E-Mail: info@neue-herbold.de</p>
                <p>Telefon: +49 (0) 7261 / 9248-0</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-semibold text-brand-blue mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue mb-3">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Verarbeitung</li>
              </ul>
              <p className="mt-3">
                Für Anfragen zu Ihren Datenschutzrechten wenden Sie sich bitte an:
                info@neue-herbold.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-blue mb-3">5. Hosting</h2>
              <p>
                Diese Website wird als statische Website auf GitHub Pages gehostet (GitHub, Inc.,
                88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). GitHub erhebt möglicherweise
                Server-Logs. Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub.
              </p>
            </div>

            <div className="border-t border-graphite-200 pt-6 text-xs text-graphite-400">
              <p>Stand: Mai 2026 — Diese Datenschutzerklärung wird bei Bedarf aktualisiert.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
