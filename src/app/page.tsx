import Link from "next/link";
import { ArrowRight, Recycle, Cog, Droplets, Zap, Package, Wrench } from "lucide-react";
import { Container } from "@/components/layout/Container";

const categories = [
  {
    icon: Zap,
    title: "Vorzerkleinerung",
    subtitle: "Schredder & Brecher",
    description:
      "Einwellen- und Zweiwellenschredder, Guillotinescheren, Rohrschredder",
    href: "/maschinen/vorzerkleinerung",
  },
  {
    icon: Cog,
    title: "Schneidmühlen",
    subtitle: "Nachzerkleinerung",
    description: "LM, SM, SMV, SX — für PVC, PE/PP, Kautschuk und mehr",
    href: "/maschinen/schneidmuehlen",
  },
  {
    icon: Package,
    title: "Feinmühlen",
    subtitle: "Feinmahlung ZM-Baureihe",
    description:
      "Pulverisierung für PVC, PE, PP, ABS — Korngrößen bis unter 1 mm",
    href: "/maschinen/feinmuehlen",
  },
  {
    icon: Droplets,
    title: "Waschanlagen",
    subtitle: "Waschen & Trennen",
    description:
      "Friktionswäscher, Waschtrommel, Intensivwäscher, Trockner",
    href: "/maschinen/waschanlagen",
  },
  {
    icon: Recycle,
    title: "Peripherie",
    subtitle: "Absaugung & Sichtung",
    description:
      "Zick-Zack-Sichter, Feingutabscheider, Metalldetektoren, MFT",
    href: "/maschinen/peripherie",
  },
  {
    icon: Wrench,
    title: "Gebrauchtmaschinen",
    subtitle: "Geprüfte Occasion",
    description:
      "Qualitätsgeprüfte Maschinen aus erster Hand — sofort verfügbar",
    href: "/gebrauchtmaschinen",
  },
];

const applications = [
  {
    title: "PET-Flaschen",
    description:
      "Komplettanlagen für das Recycling von PET-Flaschen — 14-stufiger Prozess von der Vorzerkleinerung bis zur sauberen Flocke.",
    href: "/branchen/kunststoffrecycling/pet-flaschen",
    tag: "Kunststoffrecycling",
  },
  {
    title: "Folienabfälle PE/PP",
    description:
      "Schneidmühlen und Waschanlagen für PE/PP-Folien — sauber, effizient, mit minimalem Energieeinsatz.",
    href: "/branchen/kunststoffrecycling/folienabfaelle",
    tag: "Kunststoffrecycling",
  },
  {
    title: "Getränkekästen",
    description:
      "Robuste Schredder und Schneidmühlen für massive Hohlkörper aus PE/PP — auch für Großmengen ausgelegt.",
    href: "/branchen/kunststoffrecycling/getraenkekaesten",
    tag: "Kunststoffrecycling",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-brand-deep overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-steel/40 blur-[100px] pointer-events-none" />

        <Container className="relative z-10 pt-32 pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
              <span className="size-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
                Seit 1995 · Sinsheim · 40+ Länder
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
              Zerkleinerungs&shy;technik
              <br />
              <span className="text-brand-cyan">aus Sinsheim.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
              NEUE HERBOLD entwickelt und fertigt Hochleistungsmaschinen für
              die Kunststoff- und Recyclingbranche — von der einzelnen
              Schneidmühle bis zur schlüsselfertigen Komplettanlage.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/maschinen"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-brand-cyan text-brand-blue font-semibold text-base hover:bg-brand-cyan-bright hover:shadow-[0_0_24px_rgba(0,200,255,0.45)] transition-all duration-200"
              >
                Maschinen entdecken
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-2 h-14 px-8 rounded-xl border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                Anfrage stellen
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
      </section>

      {/* ── Trust bar ────────────────────────────────────────────────────── */}
      <section className="bg-bone border-y border-graphite-200 py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { value: "1995", label: "Gegründet" },
              { value: "70+", label: "Mitarbeiter" },
              { value: "40+", label: "Länder" },
              { value: "30+", label: "Maschinentypen" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand-blue">{value}</span>
                <span className="text-sm text-graphite-600">{label}</span>
              </div>
            ))}
            <div className="hidden lg:flex items-center gap-3 border-l border-graphite-200 pl-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-graphite-400">
                Mitglied bei
              </span>
              {["VDMA", "PRE", "PREVENT"].map((org, i) => (
                <span key={org} className="flex items-center gap-3">
                  {i > 0 && <span className="text-graphite-200">·</span>}
                  <span className="text-sm font-semibold text-brand-blue">{org}</span>
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Produktkategorien ─────────────────────────────────────────────── */}
      <section className="py-24 bg-bone">
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-cyan mb-3">
              Produktportfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-blue leading-tight">
              Maschinen für jeden
              <br />
              Recyclingprozess.
            </h2>
            <p className="mt-4 text-graphite-600 text-lg max-w-2xl">
              Von der groben Vorzerkleinerung bis zur feinen Pulverisierung —
              alle Maschinen werden in Sinsheim entwickelt und gefertigt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-paper border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-brand-blue/5 group-hover:bg-brand-cyan/10 transition-colors">
                      <Icon className="size-5 text-brand-blue group-hover:text-brand-cyan transition-colors" />
                    </div>
                    <ArrowRight className="size-4 text-graphite-400 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-graphite-400 mb-1">
                      {cat.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-brand-blue">{cat.title}</h3>
                    <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/maschinen"
              className="inline-flex items-center gap-2 text-brand-cyan font-semibold hover:gap-3 transition-all"
            >
              Alle Maschinentypen ansehen
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Über uns Teaser ───────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-blue">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-cyan mb-4">
                Das Unternehmen
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Präzision made
                <br />
                in Sinsheim.
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed">
                Seit 1995 entwickelt und fertigt NEUE HERBOLD Maschinen und
                Anlagen für die Recycling- und Zerkleinerungsindustrie. Über 70
                Mitarbeiter arbeiten täglich daran, dass Ihre Produktionslinie
                zuverlässig läuft.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/unternehmen/ueber-uns"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-brand-cyan text-brand-blue font-semibold text-sm hover:bg-brand-cyan-bright transition-colors"
                >
                  Über uns
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/service/technikum"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Technikum & Probemahlung
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Gegründet", value: "1995" },
                { label: "Mitarbeiter", value: "70+" },
                { label: "Länder", value: "40+" },
                { label: "Maschinentypen", value: "30+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-4xl font-black text-brand-cyan">{s.value}</div>
                  <div className="mt-1 text-sm text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Branchen-Anwendungen ──────────────────────────────────────────── */}
      <section className="py-24 bg-bone">
        <Container>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-cyan mb-3">
              Anwendungen
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-blue leading-tight">
              Komplette Prozess&shy;lösungen.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Link
                key={app.title}
                href={app.href}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-graphite-200 bg-paper hover:border-brand-cyan/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex px-2.5 py-1 rounded-full bg-brand-blue/5 text-brand-blue text-xs font-semibold w-fit">
                  {app.tag}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-blue">{app.title}</h3>
                  <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1.5 text-brand-cyan text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Prozess ansehen
                  <ArrowRight className="size-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-deep">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Bereit für Ihr Projekt?
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Sprechen Sie mit unseren Experten — oder fordern Sie eine
            Probemahlung in unserem Technikum in Sinsheim an.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontakt/anfrage"
              className="inline-flex items-center gap-2 h-14 px-10 rounded-xl bg-brand-cyan text-brand-blue font-semibold text-base hover:bg-brand-cyan-bright hover:shadow-[0_0_24px_rgba(0,200,255,0.45)] transition-all duration-200"
            >
              Anfrage stellen
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+49726192480"
              className="inline-flex items-center gap-2 h-14 px-10 rounded-xl border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
            >
              +49 (0) 7261 / 9248-0
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
