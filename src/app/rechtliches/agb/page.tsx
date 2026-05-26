import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "AGB | Rechtliches | NEUE HERBOLD",
  description:
    "Allgemeine Geschäftsbedingungen der NEUE HERBOLD Maschinen- und Anlagenbau GmbH.",
};

export default function AGBPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Rechtliches
            </p>
            <h1 className="text-4xl font-bold text-white">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="mt-3 text-white/50 text-sm">
              NEUE HERBOLD Maschinen- und Anlagenbau GmbH, Sinsheim
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Inhalt ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl prose prose-sm text-graphite-700">

            <h2 className="text-xl font-bold text-brand-blue mt-0">§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und Leistungen
              der NEUE HERBOLD Maschinen- und Anlagenbau GmbH (nachfolgend „Lieferant") an
              Unternehmer (§ 14 BGB).
            </p>
            <p>
              (2) Entgegenstehende oder von diesen AGB abweichende Bedingungen des Käufers erkennt
              der Lieferant nicht an, es sei denn, der Lieferant hat deren Geltung ausdrücklich
              schriftlich zugestimmt.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 2 Angebot und Vertragsschluss</h2>
            <p>
              (1) Alle Angebote des Lieferanten sind freibleibend und unverbindlich, soweit sie nicht
              ausdrücklich als verbindlich gekennzeichnet sind.
            </p>
            <p>
              (2) Bestellungen des Käufers sind als Antrag zum Abschluss eines Kaufvertrages zu
              verstehen. Der Vertrag kommt erst zustande, wenn der Lieferant die Bestellung
              schriftlich bestätigt oder die bestellte Ware liefert.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 3 Preise und Zahlung</h2>
            <p>
              (1) Die Preise verstehen sich ab Werk Sinsheim, zuzüglich der gesetzlichen
              Mehrwertsteuer sowie Verpackungs- und Versandkosten, soweit nichts anderes
              schriftlich vereinbart wurde.
            </p>
            <p>
              (2) Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zu
              bezahlen, sofern keine anderen Zahlungsbedingungen schriftlich vereinbart wurden.
            </p>
            <p>
              (3) Bei Zahlungsverzug ist der Lieferant berechtigt, Verzugszinsen in Höhe von
              9 Prozentpunkten über dem Basiszinssatz zu berechnen.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 4 Lieferung und Gefahrübergang</h2>
            <p>
              (1) Liefertermine und -fristen sind nur dann verbindlich, wenn sie vom Lieferanten
              ausdrücklich schriftlich als verbindlich bestätigt werden.
            </p>
            <p>
              (2) Die Gefahr geht auf den Käufer über, sobald die Ware dem Spediteur, Frachtführer
              oder einer sonstigen zur Ausführung der Versendung bestimmten Person übergeben worden ist
              (Versendungskauf).
            </p>
            <p>
              (3) Höhere Gewalt, Arbeitskämpfe, Naturkatastrophen sowie andere unvorhersehbare,
              schwerwiegende Ereignisse befreien den Lieferanten für die Dauer des Hindernisses
              von der Lieferpflicht.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 5 Eigentumsvorbehalt</h2>
            <p>
              (1) Der Lieferant behält sich das Eigentum an allen gelieferten Waren bis zur
              vollständigen Bezahlung aller Forderungen aus der Geschäftsverbindung vor.
            </p>
            <p>
              (2) Der Käufer ist berechtigt, die Vorbehaltsware im ordentlichen Geschäftsgang
              weiterzuverarbeiten oder zu veräußern. Er tritt bereits jetzt alle Forderungen,
              die ihm aus der Weiterveräußerung entstehen, an den Lieferanten ab.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 6 Gewährleistung</h2>
            <p>
              (1) Der Lieferant gewährleistet, dass die gelieferten Waren bei Gefahrübergang
              die vereinbarte Beschaffenheit aufweisen und keine wesentlichen Mängel aufweisen.
            </p>
            <p>
              (2) Die Gewährleistungsfrist beträgt 12 Monate ab Lieferdatum, sofern nicht
              gesetzliche Mindestfristen entgegenstehen.
            </p>
            <p>
              (3) Mängel sind vom Käufer unverzüglich nach Entdeckung schriftlich zu rügen.
              Bei offensichtlichen Mängeln hat die Rüge innerhalb von 14 Tagen nach Lieferung
              zu erfolgen.
            </p>
            <p>
              (4) Bei berechtigten Mängelrügen hat der Lieferant das Recht zur Nachbesserung
              oder Ersatzlieferung. Schlägt die Nacherfüllung fehl, kann der Käufer nach
              Maßgabe der gesetzlichen Bestimmungen Minderung oder Rücktritt verlangen.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 7 Haftung</h2>
            <p>
              (1) Der Lieferant haftet unbeschränkt für Schäden aus der Verletzung des Lebens,
              des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
            </p>
            <p>
              (2) Im Übrigen ist die Haftung des Lieferanten auf den vertragstypischen,
              vorhersehbaren Schaden begrenzt. Eine Haftung für entgangenen Gewinn,
              mittelbare Schäden und Folgeschäden ist ausgeschlossen.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 8 Gerichtsstand und anwendbares Recht</h2>
            <p>
              (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p>
              (2) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag
              ist Heidelberg, sofern der Käufer Kaufmann im Sinne des HGB ist.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 9 Schlussbestimmungen</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt
              die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
            </p>

            <p className="text-xs text-graphite-400 mt-10 pt-6 border-t border-graphite-200">
              Stand: 2024 | NEUE HERBOLD Maschinen- und Anlagenbau GmbH, Wiesenstraße 44,
              74889 Sinsheim-Reihen
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
