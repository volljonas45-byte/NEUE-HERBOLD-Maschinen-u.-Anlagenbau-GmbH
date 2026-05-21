import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ─── Machine Frame ─────────────────────────────────────────────── */

function MachineFrame({
  label,
  tag,
  className,
}: {
  label: string;
  tag?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#080e2a] to-[#0d1a48]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <span className="absolute top-4 left-4 block w-5 h-5 border-t border-l border-white/20" />
      <span className="absolute top-4 right-4 block w-5 h-5 border-t border-r border-white/20" />
      <span className="absolute bottom-4 left-4 block w-5 h-5 border-b border-l border-white/20" />
      <span className="absolute bottom-4 right-4 block w-5 h-5 border-b border-r border-white/20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="absolute w-full h-px bg-white/5" />
        <span className="absolute h-full w-px bg-white/5" />
        <span className="size-5 border border-white/15 rotate-45" />
      </div>
      {tag && (
        <span className="absolute top-5 left-5 text-[0.6rem] tracking-[0.2em] uppercase text-white/30 font-medium">
          {tag}
        </span>
      )}
      <span
        className="absolute bottom-5 left-5 font-bold text-white/[0.07] leading-none uppercase select-none"
        style={{ fontSize: "clamp(1rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Section labels ────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-4">
      <span className="block h-px w-5 bg-brand-cyan shrink-0" />
      {children}
    </p>
  );
}

function DarkLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/35 mb-4">
      <span className="block h-px w-5 bg-brand-cyan shrink-0" />
      {children}
    </p>
  );
}

/* ─── Data ──────────────────────────────────────────────────────── */

const categories = [
  {
    n: "01",
    title: "Schneidmühlen",
    subtitle: "LM · SM · SMV · SX · SR",
    href: "/maschinen/schneidmuehlen",
    tag: "Nachzerkleinerung",
    label: "SM 800",
    featured: true,
  },
  {
    n: "02",
    title: "Vorzerkleinerung",
    subtitle: "HZR · ZRM · RL · SB · GS",
    href: "/maschinen/vorzerkleinerung",
    tag: "Vorzerkleinerung",
    label: "HZR 1300",
  },
  {
    n: "03",
    title: "Waschanlagen",
    subtitle: "ES · FW · IW · TM · TB",
    href: "/maschinen/waschanlagen",
    tag: "Waschen & Trennen",
    label: "FW 800",
  },
  {
    n: "04",
    title: "Feinmühlen",
    subtitle: "ZM-Baureihe · Pulver < 1 mm",
    href: "/maschinen/feinmuehlen",
    tag: "Feinmahlung",
    label: "ZM 500",
  },
  {
    n: "05",
    title: "Hammermühlen",
    subtitle: "HM-Baureihe · Holz & Elektroschrott",
    href: "/maschinen/hammermuehlen",
    tag: "Hammermühlen",
    label: "HM 650",
  },
  {
    n: "06",
    title: "Gebrauchtmaschinen",
    subtitle: "Schnell verfügbar",
    href: "/gebrauchtmaschinen",
    tag: "Gebraucht",
    label: "GEBRAUCHT",
  },
];

const branchen = [
  {
    n: "01",
    title: "PET-Flaschen",
    category: "Kunststoffrecycling",
    steps: 14,
    throughput: "ca. 500 kg/h",
    machines: "LM 450/1000 · IW · TM · TT",
    href: "/branchen/kunststoffrecycling",
  },
  {
    n: "02",
    title: "Folienabfälle PE/PP",
    category: "Kunststoffrecycling",
    steps: 13,
    throughput: "bis 2.000 kg/h",
    machines: "ZRM · ES · IW · TM · TT",
    href: "/branchen/kunststoffrecycling",
  },
  {
    n: "03",
    title: "Getränkekästen",
    category: "Kunststoffrecycling",
    steps: 14,
    throughput: "bis 1.500 kg/h",
    machines: "HZR 1300 · SM · TM · TSM",
    href: "/branchen/kunststoffrecycling",
  },
];

const news = [
  {
    date: "2024",
    tag: "Produkt",
    title: "Pulvermühle ZM 800 überarbeitet",
    body: "Strömungsoptimiertes Gehäuse, höherer Durchsatz bei gleichem Energieeinsatz, kompakteres Design und staubdichte Steuereinheit.",
    href: "/aktuelles/news",
  },
  {
    date: "2024",
    tag: "Innovation",
    title: "Schneidmühlen mit Zwangsbeschickung",
    body: "Vertikale Förderschnecken im Einlauftrichter steigern den Durchsatz um bis zu 30 % bei reduzierten Lärm- und Stromspitzen.",
    href: "/aktuelles/news",
  },
  {
    date: "2024",
    tag: "Sortiment",
    title: "Erweiterung Baureihe SM",
    body: "Neue Größe SM 1000/… mit 1.000 mm Rotordurchmesser — für schwerste Zerkleinerungsaufgaben. Made in Germany, Sinsheim.",
    href: "/aktuelles/news",
  },
];

const process = [
  { n: "01", title: "Vorzerkleinerung", desc: "Schredder auf 10–50 mm" },
  { n: "02", title: "Siebung & Metall", desc: "Metallabscheidung" },
  { n: "03", title: "Waschen", desc: "Friktions- & Intensivwäscher" },
  { n: "04", title: "Trennen", desc: "Schwimm-Sink / Dichte" },
  { n: "05", title: "Trocknen", desc: "Mechanisch + thermisch" },
  { n: "06", title: "Feinmahlung", desc: "Pulver < 1 mm" },
];

const jobs = [
  "Konstrukteur / Technischer Zeichner",
  "CNC-Zerspaner / Dreher",
  "Vertriebsingenieur (m/w/d)",
  "Elektrokonstrukteur",
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-brand-deep grid lg:grid-cols-[55%_45%] overflow-hidden">
        <div className="flex flex-col justify-end">
          <Container className="pt-32 pb-0">
            <DarkLabel>Maschinen &amp; Anlagenbau seit 1995</DarkLabel>

            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold text-white leading-[1] tracking-[-0.04em]">
              Zerkleinern,<br />
              Waschen,<br />
              <span className="text-brand-cyan">Recyceln.</span>
            </h1>

            <p className="mt-7 text-white/45 text-base leading-[1.7] max-w-[26rem]">
              Hochleistungsmaschinen und schlüsselfertige Komplettanlagen
              für die Recyclingbranche — seit 1995 aus Sinsheim.
            </p>

            <div className="mt-9 pb-14 flex flex-wrap items-center gap-5">
              <Link
                href="/maschinen"
                className="inline-flex items-center gap-2 h-11 px-7 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Maschinen entdecken
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                Anfrage stellen <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Container>

          <div className="border-t border-white/8">
            <Container className="py-4">
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {[["1995","Gegründet"],["70+","Mitarbeiter"],["40+","Länder"],["30+","Maschinentypen"]].map(([v,l]) => (
                  <div key={l} className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-white">{v}</span>
                    <span className="text-[0.7rem] text-white/30">{l}</span>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>

        <div className="hidden lg:block border-l border-white/8">
          <MachineFrame label="Schneidmühle SM" tag="Nachzerkleinerung" className="h-full" />
        </div>
      </section>

      {/* ─── TRUST-BAR ────────────────────────────────────────────── */}
      <section className="bg-brand-blue/30 border-b border-white/8" style={{ background: "linear-gradient(to right, #0a1745, #050b2e)" }}>
        <Container className="py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {[
                { abbr: "VDMA", name: "Verband Deutscher Maschinen- und Anlagenbau" },
                { abbr: "PRE", name: "Plastics Recyclers Europe" },
                { abbr: "PREVENT", name: "PREVENT Abfall Allianz" },
              ].map((org) => (
                <div key={org.abbr} className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center h-6 px-2 border border-white/20 text-[0.6rem] font-bold text-white/60 tracking-wider">
                    {org.abbr}
                  </span>
                  <span className="text-[0.65rem] text-white/30 hidden sm:block">{org.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 text-xs text-white/30">
              <span><strong className="text-white/60">Seit 1995</strong> Sinsheim-Reihen</span>
              <span className="h-3 w-px bg-white/15" />
              <span><strong className="text-white/60">70+</strong> Mitarbeiter</span>
              <span className="h-3 w-px bg-white/15" />
              <span><strong className="text-white/60">40+</strong> Länder weltweit</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── PRODUKTKATEGORIEN BENTO-GRID ─────────────────────────── */}
      <section className="bg-white py-24 border-b border-graphite-200">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <Label>Produktportfolio</Label>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold text-brand-blue leading-tight">
                30+ Maschinentypen.<br />Eine Anlaufstelle.
              </h2>
            </div>
            <Link href="/maschinen" className="hidden md:inline-flex items-center gap-1.5 text-sm text-graphite-500 hover:text-brand-blue transition-colors">
              Vollständige Übersicht <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px]">
            {categories.map((cat, i) => (
              <Link
                key={cat.n}
                href={cat.href}
                className={cn(
                  "group relative overflow-hidden",
                  i === 0 && "lg:col-span-2 lg:row-span-2",
                )}
              >
                <MachineFrame label={cat.label} tag={cat.tag} className="h-full" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent group-hover:from-brand-deep/95 transition-all duration-300" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-brand-cyan/70 group-hover:text-brand-cyan transition-colors">
                    {cat.tag}
                  </span>
                  <h3
                    className={cn(
                      "font-bold text-white leading-tight mt-0.5",
                      i === 0 ? "text-2xl lg:text-3xl" : "text-base lg:text-lg",
                    )}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-[0.65rem] font-mono text-white/40 mt-1 group-hover:text-white/60 transition-colors">
                    {cat.subtitle}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-white/30 group-hover:text-brand-cyan group-hover:gap-2 transition-all">
                    Mehr erfahren <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── ZAHLEN ───────────────────────────────────────────────── */}
      <section className="bg-brand-blue">
        <Container className="py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              ["1995","Gegründet"],
              ["70+","Mitarbeiter"],
              ["40+","Länder"],
              ["30+","Maschinentypen"],
            ].map(([v, l]) => (
              <div key={l} className="px-6 xl:px-10 first:pl-0 last:pr-0 py-4">
                <div className="text-[clamp(2.5rem,4.5vw,4rem)] font-bold text-brand-cyan leading-none tracking-tight">{v}</div>
                <div className="mt-1.5 text-xs text-white/40">{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── BRANCHEN-HIGHLIGHTS ──────────────────────────────────── */}
      <section className="bg-graphite-100 py-24">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <Label>Anwendungen</Label>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold text-brand-blue leading-tight">
                Komplettlösungen<br />für jede Branche.
              </h2>
            </div>
            <Link href="/branchen" className="hidden md:inline-flex items-center gap-1.5 text-sm text-graphite-500 hover:text-brand-blue transition-colors">
              Alle Branchen <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {branchen.map((b) => (
              <Link
                key={b.n}
                href={b.href}
                className="group bg-white border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all duration-300 flex flex-col"
              >
                {/* Frame */}
                <div className="relative h-44 overflow-hidden">
                  <MachineFrame label={`PROZESS ${b.n}`} tag={b.category} className="h-full" />
                  <div className="absolute top-4 right-4 bg-brand-cyan text-brand-blue text-[0.65rem] font-bold px-2 py-0.5">
                    {b.steps} Stufen
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400">
                    {b.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-blue mt-1 leading-tight">
                    {b.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-graphite-200 space-y-2 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-graphite-500">Durchsatz</span>
                      <span className="font-semibold text-brand-blue">{b.throughput}</span>
                    </div>
                    <div className="flex items-start justify-between text-xs gap-4">
                      <span className="text-graphite-500 shrink-0">Maschinen</span>
                      <span className="font-mono text-graphite-600 text-right">{b.machines}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-cyan font-semibold group-hover:gap-2.5 transition-all">
                    Prozesskette ansehen <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── VIDEO ────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-16">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <DarkLabel>Maschinen in Aktion</DarkLabel>
              <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white tracking-tight">
                Unsere Maschinen live erleben.
              </h2>
            </div>
            <a
              href="http://www.youtube.com/user/NeueHerbold"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-brand-cyan transition-colors"
            >
              Alle Videos <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/kpg_TcSce9E?rel=0&modestbranding=1&color=white"
              title="NEUE HERBOLD Imagefilm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </Container>
      </section>

      {/* ─── PROZESS ──────────────────────────────────────────────── */}
      <section className="bg-graphite-100 py-24">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <Label>Recyclingprozess</Label>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold text-brand-blue tracking-tight">
                Vom Abfall zum Werkstoff.
              </h2>
            </div>
            <Link href="/branchen/kunststoffrecycling" className="hidden md:inline-flex items-center gap-1.5 text-sm text-graphite-500 hover:text-brand-blue transition-colors">
              Vollprozess ansehen <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {process.map((s) => (
              <div key={s.n} className="relative bg-white border-t-2 border-brand-cyan/50 pt-5 pb-5 px-4">
                <span className="block text-[2.8rem] font-black text-graphite-200 leading-none select-none mb-3 tracking-tighter">
                  {s.n}
                </span>
                <p className="text-sm font-semibold text-brand-blue leading-tight">{s.title}</p>
                <p className="text-[0.68rem] text-graphite-500 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── TECHNIKUM ────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-brand-cyan/25 px-3 py-1 mb-8 rounded-sm">
                <span className="size-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-cyan/80">
                  Technikum · Sinsheim
                </span>
              </div>

              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-tight">
                Testen Sie Ihr Material.<br />
                <span className="text-brand-cyan">Kostenlos.</span>
              </h2>

              <p className="mt-5 text-white/45 text-sm leading-[1.75]">
                Unser Technikum steht Ihnen offen. Bringen Sie Ihr Material
                mit — wir zeigen Ihnen, welche Maschine passt, welchen
                Durchsatz Sie erwarten können und wie das Ergebnis aussieht.
              </p>

              <ul className="mt-6 space-y-2.5">
                {["Maschinen in Originalgröße","Technische Auswertung inklusive","Keine Verbindlichkeit"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/40">
                    <span className="size-1 rounded-full bg-brand-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt/anfrage"
                className="mt-9 inline-flex items-center gap-2 h-11 px-7 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Probemahlung anfragen <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="relative">
              <MachineFrame label="Technikum" tag="NH · Sinsheim" className="aspect-[4/3]" />
              <div className="absolute -bottom-3 -right-3 bg-brand-cyan px-4 py-2 rounded-sm">
                <span className="text-brand-blue text-xs font-bold">Kostenlose Probemahlung</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── NEWS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-graphite-200">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <Label>Neuigkeiten</Label>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold text-brand-blue tracking-tight">
                Aktuelles aus Sinsheim.
              </h2>
            </div>
            <Link href="/aktuelles/news" className="hidden md:inline-flex items-center gap-1.5 text-sm text-graphite-500 hover:text-brand-blue transition-colors">
              Alle Neuigkeiten <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <Link
                key={n.title}
                href={n.href}
                className="group border border-graphite-200 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-2 py-0.5 bg-brand-blue/8 text-brand-blue">
                      {n.tag}
                    </span>
                    <span className="text-[0.65rem] text-graphite-400 font-mono">{n.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-brand-blue leading-tight group-hover:text-brand-cyan transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm text-graphite-600 leading-relaxed flex-1">
                    {n.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-graphite-200 flex items-center gap-1.5 text-xs text-brand-cyan font-semibold group-hover:gap-2.5 transition-all">
                    Weiterlesen <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── MESSEN-BANNER ────────────────────────────────────────── */}
      <section className="bg-brand-blue py-20">
        <Container>
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <DarkLabel>Messen & Events 2025</DarkLabel>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight tracking-tight">
                Treffen Sie uns auf<br />
                der <span className="text-brand-cyan">K-Messe 2025</span>.
              </h2>
              <p className="mt-5 text-white/50 text-sm leading-[1.75] max-w-lg">
                Erleben Sie unsere neuesten Maschinen live in Düsseldorf.
                Schneidmühlen, Waschanlagen und komplette Recyclinglösungen —
                bereit für Ihre Anfragen.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { label: "Datum", value: "8.–15. Oktober 2025" },
                  { label: "Ort", value: "Düsseldorf" },
                  { label: "Stand", value: "Halle 9 / D19" },
                ].map(({ label, value }) => (
                  <div key={label} className="border-l-2 border-brand-cyan/30 pl-3">
                    <div className="text-[0.6rem] text-white/30 uppercase tracking-widest">{label}</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{value}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/aktuelles/messen"
                className="mt-9 inline-flex items-center gap-2 h-11 px-7 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Termin vereinbaren <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Other fairs */}
            <div className="lg:min-w-64 space-y-3">
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/25 mb-4">
                Weitere Termine
              </p>
              {[
                { name: "PRS Middle East & Africa", ort: "Dubai", datum: "Sep 2025", stand: "P465" },
                { name: "PRS Europe 2025", ort: "Amsterdam", datum: "2025", stand: "D46" },
              ].map((m) => (
                <div key={m.name} className="border border-white/10 px-4 py-3">
                  <p className="text-sm font-medium text-white/70">{m.name}</p>
                  <p className="text-[0.65rem] text-white/35 mt-0.5 font-mono">
                    {m.ort} · {m.datum} · {m.stand}
                  </p>
                </div>
              ))}
              <Link href="/aktuelles/messen" className="block text-[0.7rem] text-white/30 hover:text-brand-cyan transition-colors pt-1">
                Alle Messetermine →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── UNTERNEHMEN ──────────────────────────────────────────── */}
      <section className="bg-brand-deep py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <DarkLabel>Das Unternehmen</DarkLabel>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white leading-tight">
                Präzision made<br />in Sinsheim.
              </h2>
              <p className="mt-5 text-white/45 text-sm leading-[1.75]">
                Seit 1995 entwickelt und fertigt NEUE HERBOLD Maschinen für
                die Recyclingbranche. Über 70 Mitarbeiter in Sinsheim-Reihen.
                Vertretungen in über 40 Ländern. Mitglied bei VDMA, PRE und PREVENT.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/unternehmen/ueber-uns" className="inline-flex items-center gap-2 h-10 px-6 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors">
                  Über uns <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[["70+","Mitarbeiter"],["40+","Länder"],["30+","Maschinentypen"],["1995","Gegründet"]].map(([v,l]) => (
                <div key={l} className="border-l-2 border-brand-cyan/30 pl-4">
                  <div className="text-3xl font-bold text-brand-cyan tracking-tight">{v}</div>
                  <div className="text-xs text-white/40 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── KARRIERE ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-graphite-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Karriere & Bewerbung</Label>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-brand-blue leading-tight">
                Wir suchen Sie.<br />Starten Sie jetzt.
              </h2>
              <p className="mt-5 text-graphite-600 text-sm leading-[1.75]">
                Werden Sie Teil eines Teams, das täglich daran arbeitet,
                Recycling effizienter zu machen. Echte Maschinen, echter
                Impact — in Sinsheim gefertigt.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-cyan shrink-0" />
                <span className="text-brand-cyan text-sm font-semibold">{jobs.length} offene Stellen</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/karriere"
                  className="inline-flex items-center gap-2 h-11 px-7 bg-brand-blue text-white text-sm font-semibold rounded-sm hover:bg-brand-steel transition-colors"
                >
                  Jetzt bewerben <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/karriere/initiativbewerbung"
                  className="inline-flex items-center gap-2 h-11 px-6 border border-brand-cyan text-brand-cyan text-sm font-semibold rounded-sm hover:bg-brand-cyan/10 transition-colors"
                >
                  Initiativbewerbung
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-graphite-400 mb-3">
                Aktuell gesucht
              </p>
              <div className="border border-graphite-200 divide-y divide-graphite-200">
                {jobs.map((job) => (
                  <Link
                    key={job}
                    href="/karriere/stellenangebote"
                    className="group flex items-center justify-between px-5 py-4 hover:bg-brand-blue transition-all"
                  >
                    <span className="text-sm font-medium text-brand-blue group-hover:text-white transition-colors">{job}</span>
                    <ArrowRight className="size-3.5 text-graphite-300 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
              <div className="mt-3 bg-graphite-100 border border-graphite-200 px-5 py-4">
                <p className="text-sm font-semibold text-brand-blue">Nichts Passendes dabei?</p>
                <p className="text-[0.72rem] text-graphite-500 mt-0.5">
                  Initiativbewerbungen sind herzlich willkommen.
                </p>
                <Link
                  href="/karriere/initiativbewerbung"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold hover:gap-2.5 transition-all"
                >
                  Initiativ bewerben <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-brand-deep py-24">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div>
              <span className="block h-px w-10 bg-brand-cyan mb-8" />
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-tight tracking-tight">
                Bereit für<br />Ihr Projekt?
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <Link href="/kontakt/anfrage" className="inline-flex items-center gap-2 h-11 px-8 bg-brand-cyan text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-cyan-bright transition-colors">
                Anfrage stellen <ArrowRight className="size-3.5" />
              </Link>
              <a href="tel:+49726192480" className="text-sm text-white/30 hover:text-white/60 transition-colors">+49 (0) 7261 / 9248-0</a>
              <a href="mailto:info@neue-herbold.de" className="text-xs text-white/20 hover:text-white/50 transition-colors">info@neue-herbold.de</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
