import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const categories = [
  {
    n: "01",
    title: "Vorzerkleinerung",
    sub: "Einwellen- und Zweiwellenschredder, Guillotinescheren, Rohrschredder",
    href: "/maschinen/vorzerkleinerung",
  },
  {
    n: "02",
    title: "Schneidmühlen",
    sub: "Baureihen LM, SM, SMV, SX — für PVC, PE/PP, Kautschuk und mehr",
    href: "/maschinen/schneidmuehlen",
  },
  {
    n: "03",
    title: "Hammermühlen",
    sub: "HM-Baureihe für spröde Materialien und Gummiabfälle",
    href: "/maschinen/hammermuehlen",
  },
  {
    n: "04",
    title: "Feinmühlen",
    sub: "ZM-Baureihe — Pulverisierung bis unter 1 mm Korngröße",
    href: "/maschinen/feinmuehlen",
  },
  {
    n: "05",
    title: "Waschanlagen",
    sub: "Friktionswäscher, Waschtrommel, Intensivwäscher, Trockner",
    href: "/maschinen/waschanlagen",
  },
  {
    n: "06",
    title: "Peripherie & Mobile Anlagen",
    sub: "Zick-Zack-Sichter, Feingutabscheider, Metalldetektoren, MFT",
    href: "/maschinen/peripherie",
  },
];

const applications = [
  {
    idx: "A",
    material: "PET-Flaschen",
    tag: "Kunststoffrecycling",
    desc: "14-stufiger Gesamtprozess — Vorzerkleinerung, Waschen, Trocknen bis zur sauberen Flocke.",
    href: "/branchen/kunststoffrecycling/pet-flaschen",
  },
  {
    idx: "B",
    material: "Folienabfälle PE/PP",
    tag: "Kunststoffrecycling",
    desc: "Schneidmühlen und Waschanlagen für dünne Folien — effizient, energiesparend.",
    href: "/branchen/kunststoffrecycling/folienabfaelle",
  },
  {
    idx: "C",
    material: "Getränkekästen",
    tag: "Kunststoffrecycling",
    desc: "Robuste Systeme für massive Hohlkörper — auch für große Durchsätze ausgelegt.",
    href: "/branchen/kunststoffrecycling/getraenkekaesten",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col min-h-screen bg-brand-deep">
        {/* Subtle side accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-cyan/40 to-transparent" />

        {/* Main content — anchored to bottom */}
        <div className="flex-1 flex flex-col justify-end">
          <Container className="pt-32 pb-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <span className="block h-px w-8 bg-brand-cyan shrink-0" />
              <span className="text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">
                Maschinen &amp; Anlagenbau seit 1995
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black text-white leading-[0.88] tracking-[-0.03em] text-[clamp(3.5rem,10vw,9rem)]">
              Zerkleinerungs
              <br />
              <span className="text-brand-cyan">technik</span>
              <span className="text-white/20">.</span>
            </h1>

            {/* Lead + CTA row */}
            <div className="mt-10 pb-16 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16 border-b border-white/10">
              <p className="max-w-sm text-white/55 text-base leading-relaxed">
                NEUE HERBOLD entwickelt und fertigt Hochleistungsmaschinen für
                die Kunststoff- und Recyclingbranche — von der einzelnen
                Schneidmühle bis zur schlüsselfertigen Komplettanlage.
              </p>
              <div className="flex items-center gap-6 shrink-0">
                <Link
                  href="/maschinen"
                  className="inline-flex items-center gap-2 h-12 px-7 bg-brand-cyan text-brand-blue font-semibold text-sm hover:bg-brand-cyan-bright transition-colors"
                >
                  Maschinen
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/kontakt/anfrage"
                  className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                >
                  Anfrage stellen
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/* Stats strip */}
        <div className="bg-black/20">
          <Container className="py-4">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {[
                ["1995", "Gegründet"],
                ["70+", "Mitarbeiter"],
                ["40+", "Länder weltweit"],
                ["30+", "Maschinentypen"],
              ].map(([val, label]) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-white">{val}</span>
                  <span className="text-xs text-white/35 tracking-wide">{label}</span>
                </div>
              ))}
              <div className="ml-auto hidden lg:flex items-center gap-4 text-xs text-white/25 tracking-widest">
                <span>VDMA</span>
                <span className="h-3 w-px bg-white/15" />
                <span>PRE</span>
                <span className="h-3 w-px bg-white/15" />
                <span>PREVENT</span>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── Produkte: Nummerierte Liste ──────────────────────────────────── */}
      <section className="bg-bone py-24">
        <Container>
          {/* Section header */}
          <div className="flex items-end justify-between mb-0 pb-6 border-b border-graphite-200">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-graphite-400 mb-2">
                Produktportfolio
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-blue tracking-tight">
                Unsere Maschinen.
              </h2>
            </div>
            <Link
              href="/maschinen"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-graphite-600 hover:text-brand-blue transition-colors pb-1"
            >
              Alle ansehen
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Numbered rows */}
          <div>
            {categories.map((cat) => (
              <Link
                key={cat.n}
                href={cat.href}
                className="group flex items-center gap-6 md:gap-10 py-5 border-b border-graphite-200 hover:bg-graphite-100/60 transition-colors -mx-4 px-4"
              >
                <span className="text-xs font-mono text-graphite-400 w-5 shrink-0 select-none">
                  {cat.n}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-base font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors">
                    {cat.title}
                  </span>
                  <span className="block text-sm text-graphite-600 mt-0.5 leading-snug">
                    {cat.sub}
                  </span>
                </div>
                <ArrowRight className="size-4 text-graphite-300 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/maschinen"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold"
            >
              Alle Maschinentypen
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Über das Unternehmen ─────────────────────────────────────────── */}
      <section className="bg-brand-blue overflow-hidden">
        <Container className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            {/* Left: decorative year */}
            <div className="relative">
              <div
                className="font-black text-white/5 leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(6rem, 18vw, 14rem)", letterSpacing: "-0.05em", lineHeight: 0.85 }}
                aria-hidden="true"
              >
                1995
              </div>
              <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0">
                <p className="text-xs tracking-[0.2em] uppercase text-brand-cyan/60 mb-3">
                  Das Unternehmen
                </p>
                <p className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Präzision
                  <br />
                  made in
                  <br />
                  Sinsheim.
                </p>
              </div>
            </div>

            {/* Right: content */}
            <div className="pt-0 lg:pt-8">
              <p className="text-white/60 text-lg leading-relaxed">
                Seit 1995 entwickelt und fertigt NEUE HERBOLD Maschinen und
                Anlagen für die Recycling- und Zerkleinerungsindustrie. Über
                70 Mitarbeiter in Sinsheim-Reihen sorgen täglich dafür, dass
                Ihre Anlage läuft.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Mit Vertretungen in über 40 Ländern und Mitgliedschaften in
                VDMA, Plastics Recyclers Europe und PREVENT sind wir
                international vernetzt — und trotzdem ein Unternehmen mit
                kurzen Entscheidungswegen.
              </p>

              {/* Inline stats */}
              <div className="mt-10 grid grid-cols-2 gap-y-6">
                {[
                  ["70+", "Mitarbeiter in Sinsheim"],
                  ["40+", "Länder mit NEUE HERBOLD Anlagen"],
                  ["30+", "Maschinentypen im Portfolio"],
                  ["3", "Verbandsmitgliedschaften"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-black text-brand-cyan leading-none tracking-tight">
                      {val}
                    </div>
                    <div className="mt-1 text-sm text-white/45 leading-snug">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/unternehmen/ueber-uns"
                  className="inline-flex items-center gap-2 h-11 px-6 bg-brand-cyan text-brand-blue font-semibold text-sm hover:bg-brand-cyan-bright transition-colors"
                >
                  Über uns
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/service/technikum"
                  className="inline-flex items-center gap-2 h-11 px-6 border border-white/20 text-white font-semibold text-sm hover:bg-white/8 transition-colors"
                >
                  Technikum &amp; Probemahlung
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Anwendungen ───────────────────────────────────────────────────── */}
      <section className="bg-bone py-24">
        <Container>
          <div className="flex items-end justify-between pb-6 border-b border-graphite-200 mb-0">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-graphite-400 mb-2">
                Anwendungen
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-blue tracking-tight">
                Komplette Prozesslösungen.
              </h2>
            </div>
            <Link
              href="/branchen"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-graphite-600 hover:text-brand-blue transition-colors pb-1"
            >
              Alle Branchen
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-graphite-200 border-b border-graphite-200">
            {applications.map((app) => (
              <Link
                key={app.idx}
                href={app.href}
                className="group flex flex-col gap-4 p-6 lg:p-8 hover:bg-graphite-100/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-graphite-400">{app.idx}</span>
                  <ArrowUpRight className="size-4 text-graphite-300 group-hover:text-brand-cyan transition-colors" />
                </div>
                <div>
                  <p className="text-[0.7rem] tracking-[0.15em] uppercase text-graphite-400 mb-1.5">
                    {app.tag}
                  </p>
                  <h3 className="text-xl font-bold text-brand-blue leading-snug">
                    {app.material}
                  </h3>
                  <p className="mt-3 text-sm text-graphite-600 leading-relaxed">
                    {app.desc}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-graphite-200 text-xs font-semibold text-brand-cyan tracking-wide group-hover:tracking-wider transition-all">
                  Prozess ansehen
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Abschluss-CTA ─────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-24">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div>
              <span className="block h-px w-12 bg-brand-cyan mb-8" />
              <h2
                className="font-black text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Bereit für
                <br />
                Ihr Projekt?
              </h2>
            </div>

            <div className="flex flex-col gap-4 lg:items-end shrink-0">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-2 h-12 px-8 bg-brand-cyan text-brand-blue font-semibold text-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Anfrage stellen
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:+49726192480"
                className="text-sm text-white/40 hover:text-white/70 transition-colors text-right"
              >
                +49 (0) 7261 / 9248-0
              </a>
              <p className="text-xs text-white/25 leading-relaxed max-w-xs text-right">
                Oder besuchen Sie unser Technikum in Sinsheim
                für eine Probemahlung Ihrer Materialien.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
