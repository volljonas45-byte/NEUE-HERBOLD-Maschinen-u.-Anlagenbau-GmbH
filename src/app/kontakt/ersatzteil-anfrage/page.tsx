import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ErsatzteilForm } from "./ErsatzteilForm";

export const metadata: Metadata = {
  title: "Ersatzteil-Anfrage | Kontakt | NEUE HERBOLD",
  description: "Ersatzteil-Anfrage an NEUE HERBOLD — Rotormesser, Siebe, Kugellager und mehr.",
};

export default function ErsatzteilAnfragePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-2xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Ersatzteil-Anfrage
            </p>
            <h1 className="text-4xl font-bold text-white">Ersatzteil anfragen</h1>
            <p className="mt-3 text-white/60">
              Geben Sie die Maschine und das benötigte Ersatzteil an — wir prüfen die
              Verfügbarkeit und melden uns umgehend.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-2xl">
            <ErsatzteilForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
