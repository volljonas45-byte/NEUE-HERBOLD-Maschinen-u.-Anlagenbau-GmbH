import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AnfrageForm } from "./AnfrageForm";

export const metadata: Metadata = {
  title: "Technische Anfrage | Kontakt | NEUE HERBOLD",
  description:
    "Technische Anfrage an NEUE HERBOLD — Maschinen, Anlagen, Probemahlung und Komplettanlagen.",
};

export default function AnfragePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-16">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-2xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Technische Anfrage
            </p>
            <h1 className="text-4xl font-bold text-white">Anfrage stellen</h1>
            <p className="mt-3 text-white/60">
              Füllen Sie das Formular aus — wir melden uns innerhalb eines Werktages.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="max-w-2xl">
            <AnfrageForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
