import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Einkaufsbedingungen | Rechtliches | NEUE HERBOLD",
  description:
    "Allgemeine Einkaufsbedingungen der NEUE HERBOLD Maschinen- und Anlagenbau GmbH.",
};

export default function EinkaufsbedingPage() {
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
              Allgemeine Einkaufsbedingungen
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
              (1) Diese Allgemeinen Einkaufsbedingungen (AEB) gelten für alle Bestellungen und
              Verträge der NEUE HERBOLD Maschinen- und Anlagenbau GmbH (nachfolgend „Käufer")
              über den Kauf von Waren und Dienstleistungen.
            </p>
            <p>
              (2) Allgemeine Geschäftsbedingungen des Lieferanten finden keine Anwendung,
              soweit der Käufer diesen nicht ausdrücklich schriftlich zugestimmt hat.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 2 Bestellung und Vertragsschluss</h2>
            <p>
              (1) Bestellungen des Käufers bedürfen der Schriftform. Mündliche Nebenabreden
              sind unwirksam.
            </p>
            <p>
              (2) Der Lieferant hat Bestellungen unverzüglich, spätestens innerhalb von
              5 Werktagen, schriftlich zu bestätigen. Eine verspätete Bestätigung gilt als
              neues Angebot und bedarf der Annahme durch den Käufer.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 3 Preise und Zahlung</h2>
            <p>
              (1) Der bestellte Preis ist ein Festpreis. Preiserhöhungen bedürfen der
              ausdrücklichen schriftlichen Zustimmung des Käufers.
            </p>
            <p>
              (2) Der Käufer zahlt Rechnungen innerhalb von 14 Tagen mit 2 % Skonto oder
              innerhalb von 30 Tagen netto, sofern nichts anderes vereinbart wurde.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 4 Lieferung</h2>
            <p>
              (1) Der Lieferant ist verpflichtet, die vereinbarten Liefertermine einzuhalten.
              Bei vorhersehbaren Verzögerungen ist der Käufer unverzüglich zu informieren.
            </p>
            <p>
              (2) Die Lieferung erfolgt frei Haus an die in der Bestellung angegebene
              Lieferadresse (DDP gemäß Incoterms), sofern nichts anderes vereinbart wurde.
            </p>
            <p>
              (3) Teillieferungen sind nur mit ausdrücklicher Zustimmung des Käufers zulässig.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 5 Qualität und Prüfung</h2>
            <p>
              (1) Die gelieferten Waren müssen den anerkannten Regeln der Technik,
              den gesetzlichen Vorschriften sowie den vereinbarten Spezifikationen entsprechen.
            </p>
            <p>
              (2) Der Käufer ist berechtigt, Qualitätskontrollen beim Lieferanten
              durchzuführen oder durch beauftragte Dritte durchführen zu lassen.
            </p>
            <p>
              (3) Erkennbare Mängel rügt der Käufer innerhalb von 10 Werktagen nach
              Eingang der Ware, versteckte Mängel innerhalb von 10 Werktagen nach
              deren Entdeckung.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 6 Gewährleistung</h2>
            <p>
              (1) Der Lieferant gewährleistet, dass alle Lieferungen frei von Sach- und
              Rechtsmängeln sind und den vereinbarten Spezifikationen entsprechen.
            </p>
            <p>
              (2) Die Gewährleistungsfrist beträgt 24 Monate ab Eingang der Ware beim Käufer.
            </p>
            <p>
              (3) Bei Mängeln kann der Käufer nach eigener Wahl Nachbesserung, Ersatzlieferung,
              Minderung oder Rücktritt verlangen sowie Schadensersatz geltend machen.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 7 Eigentumsrechte und Vertraulichkeit</h2>
            <p>
              (1) Der Lieferant versichert, dass die gelieferten Waren keine Schutzrechte
              Dritter verletzen. Der Lieferant stellt den Käufer von allen Ansprüchen Dritter
              aus solchen Verletzungen frei.
            </p>
            <p>
              (2) Alle technischen Unterlagen, Zeichnungen, Spezifikationen und sonstige
              Informationen, die der Käufer dem Lieferanten übermittelt, sind vertraulich zu
              behandeln und dürfen Dritten nicht zugänglich gemacht werden.
            </p>

            <h2 className="text-xl font-bold text-brand-blue">§ 8 Gerichtsstand und anwendbares Recht</h2>
            <p>
              (1) Es gilt ausschließlich deutsches Recht. Das UN-Kaufrecht (CISG) ist
              ausgeschlossen.
            </p>
            <p>
              (2) Gerichtsstand für alle Streitigkeiten ist Heidelberg.
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
