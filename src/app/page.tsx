import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ─── Machine Frame: designed placeholder until real photos arrive ───────── */

function MachineFrame({
  label,
  sub,
  className,
}: {
  label: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-brand-deep border border-white/10 group", className)}>
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,.8) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Center diamond + crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-full h-px bg-brand-cyan/10" />
        <div className="absolute h-full w-px bg-brand-cyan/10" />
        <div className="size-8 border border-brand-cyan/25 rotate-45 flex items-center justify-center">
          <div className="size-1.5 bg-brand-cyan/30 rotate-45" />
        </div>
      </div>
      {/* Corner ticks */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-cyan/25" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-cyan/25" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-cyan/25" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-cyan/25" />
      {/* Labels */}
      {sub && (
        <div className="absolute top-5 left-5">
          <span className="text-[0.6rem] font-mono tracking-[0.25em] uppercase text-brand-cyan/40">
            {sub}
          </span>
        </div>
      )}
      <div className="absolute bottom-5 left-5 right-5">
        <span
          className="font-black text-white/[0.06] leading-none select-none uppercase"
          style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)", letterSpacing: "-0.03em" }}
        >
          {label}
        </span>
      </div>
      {/* Hover state: gentle cyan glow */}
      <div className="absolute inset-0 bg-brand-cyan/0 group-hover:bg-brand-cyan/[0.03] transition-colors duration-500" />
    </div>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────── */

const machines = [
  { n: "01", title: "Schneidmühlen", spec: "LM · SM · SMV · SX · SR · LP", href: "/maschinen/schneidmuehlen" },
  { n: "02", title: "Vorzerkleinerung", spec: "HZR · ZRM · GS · RL · SB", href: "/maschinen/vorzerkleinerung" },
  { n: "03", title: "Feinmühlen", spec: "ZM 400 · ZM 600 · ZM 800", href: "/maschinen/feinmuehlen" },
  { n: "04", title: "Waschanlagen", spec: "ES · FW · IW · TM · TB", href: "/maschinen/waschanlagen" },
  { n: "05", title: "Hammermühlen", spec: "HM-Baureihe", href: "/maschinen/hammermuehlen" },
  { n: "06", title: "Peripherie", spec: "ZS · HS · MFT · Absaugung", href: "/maschinen/peripherie" },
];

const processSteps = [
  { n: "01", step: "Anlieferung", desc: "Ballen, Container, loses Material" },
  { n: "02", step: "Vorzerkleinerung", desc: "Schredder auf 10–50 mm" },
  { n: "03", step: "Siebung & Metall", desc: "Metallabscheidung, Siebung" },
  { n: "04", step: "Waschen", desc: "Friktions- und Intensivwäscher" },
  { n: "05", step: "Trennen", desc: "Schwimm-Sink, Dichtesortierung" },
  { n: "06", step: "Trocknen", desc: "Mechanisch + thermisch" },
  { n: "07", step: "Feinmahlung", desc: "Pulver < 1 mm (optional)" },
  { n: "08", step: "Qualität", desc: "Sauberes Regranulat / Flake" },
];

const jobs = [
  "Konstrukteur / Technischer Zeichner",
  "CNC-Zerspaner / Dreher",
  "Vertriebsingenieur (m/w/d)",
  "Elektrokonstrukteur",
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO — Asymmetrisch: Text links unten, Maschinen-Frame rechts
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col lg:grid lg:grid-cols-[55%_45%] min-h-screen bg-brand-deep overflow-hidden">

        {/* Faint huge watermark word */}
        <div
          className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <span
            className="font-black text-white/[0.018] leading-none whitespace-nowrap block"
            style={{ fontSize: "28vw", letterSpacing: "-0.04em", marginLeft: "-2vw" }}
          >
            RECYCLING
          </span>
        </div>

        {/* LEFT: content, anchored bottom */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen lg:min-h-0">
          <Container className="pt-36 pb-0">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-brand-cyan shrink-0" />
              <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-brand-cyan/75">
                Maschinen &amp; Anlagenbau seit 1995
              </span>
            </div>

            <h1
              className="font-black text-white leading-[0.85] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7rem)" }}
            >
              Zerkleinern,
              <br />
              Waschen,
              <br />
              <span className="text-brand-cyan">Recyceln.</span>
            </h1>

            <p className="mt-8 text-white/45 text-base leading-relaxed max-w-[28rem]">
              Hochleistungsmaschinen und schlüsselfertige Komplettanlagen
              für die Recyclingbranche — entwickelt und gebaut in Sinsheim.
            </p>

            <div className="mt-10 pb-14 flex flex-wrap items-center gap-6">
              <Link
                href="/maschinen"
                className="inline-flex items-center gap-2 h-12 px-8 bg-brand-cyan text-brand-blue font-bold text-sm tracking-wide hover:bg-brand-cyan-bright transition-colors"
              >
                Maschinen entdecken
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors"
              >
                Anfrage stellen <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Container>

          {/* Stats strip */}
          <div className="border-t border-white/8 bg-black/25">
            <Container className="py-3.5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-1.5">
                {[["1995","Gegründet"],["70+","Mitarbeiter"],["40+","Länder"],["30+","Maschinentypen"]].map(([v,l]) => (
                  <div key={l} className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-white">{v}</span>
                    <span className="text-[0.7rem] text-white/30 tracking-wide">{l}</span>
                  </div>
                ))}
                <div className="ml-auto hidden xl:flex items-center gap-3 text-[0.65rem] text-white/20 font-mono tracking-widest">
                  <span>VDMA</span><span>·</span><span>PRE</span><span>·</span><span>PREVENT</span>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* RIGHT: full-height machine frame */}
        <div className="hidden lg:block border-l border-white/8 relative">
          <MachineFrame
            label="Schneidmühle SM"
            sub="NH · Nachzerkleinerung"
            className="absolute inset-0"
          />
          {/* Reference ID decoration */}
          <div className="absolute top-6 right-6 font-mono text-[0.6rem] text-brand-cyan/25 tracking-widest">
            NH-SM-800
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MASCHINENPORTFOLIO — Liste + 2×2 Frame-Grid
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bone">
        <Container className="py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-brand-cyan" />
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-graphite-400 font-semibold">
                  Produktportfolio
                </p>
              </div>
              <h2
                className="font-black text-brand-blue leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                30+ Maschinentypen.
                <br />
                Eine Anlaufstelle.
              </h2>
              <p className="mt-4 text-graphite-600 leading-relaxed text-sm max-w-sm">
                Von der einzelnen Schneidmühle bis zur schlüsselfertigen
                Komplettanlage — alles entwickelt und gefertigt in Sinsheim.
              </p>

              {/* Machine rows */}
              <div className="mt-10 border-t border-graphite-200">
                {machines.map((m) => (
                  <Link
                    key={m.n}
                    href={m.href}
                    className="group flex items-center gap-5 py-4 border-b border-graphite-200 hover:bg-graphite-100/50 -mx-2 px-2 transition-colors"
                  >
                    <span className="font-mono text-[0.65rem] text-graphite-400 w-5 shrink-0">{m.n}</span>
                    <div className="flex-1 min-w-0">
                      <span className="block font-semibold text-sm text-brand-blue group-hover:text-brand-cyan transition-colors">
                        {m.title}
                      </span>
                      <span className="text-[0.7rem] font-mono text-graphite-400 tracking-wide">{m.spec}</span>
                    </div>
                    <ChevronRight className="size-3.5 text-graphite-300 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>

              <Link
                href="/maschinen"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-brand-cyan font-semibold hover:gap-2.5 transition-all"
              >
                Vollständige Maschinenübersicht <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Right: 2×2 machine frames */}
            <div className="grid grid-cols-2 gap-3">
              <MachineFrame label="SM 800" sub="Schneidmühle" className="aspect-[3/4]" />
              <MachineFrame label="HZR 1200" sub="Schredder" className="aspect-[3/4] mt-10" />
              <MachineFrame label="ZM 600" sub="Feinmühle" className="aspect-[3/4]" />
              <MachineFrame label="FW 800" sub="Friktionswäscher" className="aspect-[3/4] mt-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ZAHLEN — Vier Metriken, groß
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-blue">
        <Container className="py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              ["1995","Gegründet in\nSinsheim"],
              ["70+","Mitarbeiter\nweltweit"],
              ["40+","Länder mit\nVertretungen"],
              ["30+","Maschinen-\ntypen"],
            ].map(([val, label]) => (
              <div key={val} className="px-6 xl:px-10 first:pl-0 last:pr-0 py-4">
                <div
                  className="font-black text-brand-cyan leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
                >
                  {val}
                </div>
                <div className="mt-2 text-xs text-white/40 leading-relaxed whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          VIDEO — YouTube-Kanal-Link mit Placeholder
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-deep relative overflow-hidden">
        <div className="relative" style={{ aspectRatio: "16/6" }}>
          {/* Styled background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-steel/30 to-brand-deep">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,200,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,.6) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-4">
            <a
              href="http://www.youtube.com/user/NeueHerbold"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center size-20 border border-white/25 hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300"
              aria-label="YouTube"
            >
              <Play
                className="size-8 text-white/70 group-hover:text-brand-cyan transition-colors ml-1"
                fill="currentColor"
              />
            </a>
            <div>
              <p className="font-bold text-white text-xl tracking-tight">Maschinen in Aktion</p>
              <p className="text-white/35 text-sm mt-1.5 font-mono tracking-wide">
                youtube.com/user/NeueHerbold
              </p>
            </div>
          </div>

          {/* Corner monospace labels */}
          <div className="absolute top-5 left-5 font-mono text-[0.6rem] text-white/15 tracking-[0.3em] uppercase">
            NEUE HERBOLD · Video
          </div>
          <div className="absolute bottom-5 right-5 font-mono text-[0.6rem] text-white/15 tracking-[0.3em] uppercase">
            14 Produktvideos verfügbar
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PROZESS — Horizontal, scrollbar auf Mobile
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bone py-24 overflow-hidden">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-brand-cyan" />
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-graphite-400 font-semibold">
                  Recyclingprozess
                </p>
              </div>
              <h2 className="text-3xl font-black text-brand-blue tracking-tight">
                Vom Abfall zum Werkstoff.
              </h2>
            </div>
            <Link
              href="/branchen/kunststoffrecycling/pet-flaschen"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-graphite-500 hover:text-brand-blue transition-colors pb-1"
            >
              PET-Prozess ansehen <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-0 min-w-max lg:min-w-0 lg:grid lg:grid-cols-8">
              {processSteps.map((s, i) => (
                <div key={s.n} className="relative flex flex-col w-40 lg:w-auto pr-0">
                  {/* Connector */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-6 left-12 right-0 h-px bg-graphite-200 z-0 hidden lg:block" />
                  )}
                  <div className="relative z-10 pr-4">
                    <div className="size-12 border border-graphite-200 bg-paper flex items-center justify-center mb-3">
                      <span className="font-mono text-[0.65rem] text-brand-cyan">{s.n}</span>
                    </div>
                    <p className="text-xs font-bold text-brand-blue leading-snug">{s.step}</p>
                    <p className="text-[0.7rem] text-graphite-500 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TECHNIKUM — Unique selling point: Probemahlung
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-deep relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,200,255,.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="py-24 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-brand-cyan/30 px-3 py-1.5 mb-8">
                <span className="size-1.5 bg-brand-cyan animate-pulse" />
                <span className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-brand-cyan/80">
                  Technikum · Sinsheim
                </span>
              </div>
              <h2
                className="font-black text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Testen Sie Ihr
                <br />
                Material — kostenlos.
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                Unser Technikum in Sinsheim steht Ihnen für Probemahlungen
                offen. Bringen Sie Ihr Material mit — wir zeigen Ihnen live,
                welche Anlage optimal passt und welchen Durchsatz Sie
                erwarten können.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-white/45">
                {[
                  "Maschinen in Originalgröße vor Ort",
                  "Technische Auswertung inklusive",
                  "Keine Verbindlichkeit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="size-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt/anfrage"
                className="mt-10 inline-flex items-center gap-2 h-12 px-8 bg-brand-cyan text-brand-blue font-bold text-sm hover:bg-brand-cyan-bright transition-colors"
              >
                Probemahlung anfragen
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="relative">
              <MachineFrame
                label="Technikum"
                sub="NEUE HERBOLD · Sinsheim"
                className="aspect-[4/3]"
              />
              <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-brand-cyan px-4 py-2.5">
                <span className="text-brand-blue text-xs font-bold tracking-wide block">
                  Kostenlose Probemahlung
                </span>
                <span className="text-brand-blue/70 text-[0.65rem]">Sinsheim-Reihen</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ÜBER UNS — Editorial Split
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-blue overflow-hidden">
        <Container className="py-24">
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: decorative year */}
            <div
              className="font-black text-white/[0.06] leading-none select-none hidden lg:block"
              style={{ fontSize: "clamp(6rem, 12vw, 11rem)", letterSpacing: "-0.05em", lineHeight: 0.85, writingMode: "vertical-lr", transform: "rotate(180deg)" }}
              aria-hidden="true"
            >
              1995
            </div>

            {/* Right: split content */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-6 bg-brand-cyan" />
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-brand-cyan/60 font-semibold">
                    Das Unternehmen
                  </p>
                </div>
                <h2
                  className="font-black text-white leading-tight tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  Präzision
                  <br />
                  made in
                  <br />
                  Sinsheim.
                </h2>
                <p className="mt-6 text-white/50 leading-relaxed text-sm">
                  Seit 1995 entwickelt und fertigt NEUE HERBOLD Maschinen
                  und Anlagen für die Recycling- und Zerkleinerungs&shy;industrie.
                  Über 70 Mitarbeiter in Sinsheim-Reihen.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/unternehmen/ueber-uns"
                    className="inline-flex items-center gap-2 h-10 px-6 bg-brand-cyan text-brand-blue font-semibold text-sm hover:bg-brand-cyan-bright transition-colors"
                  >
                    Über uns <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  ["70+", "Mitarbeiter in Sinsheim"],
                  ["40+", "Länder weltweit"],
                  ["30+", "Maschinentypen"],
                  ["3", "Verbandsmitgliedschaften"],
                ].map(([v, l]) => (
                  <div key={l} className="flex items-baseline gap-3 border-b border-white/8 pb-5 last:border-0 last:pb-0">
                    <span className="text-3xl font-black text-brand-cyan tracking-tight">{v}</span>
                    <span className="text-sm text-white/40 leading-snug">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          KARRIERE — Targeting engineers
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bone py-24">
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-brand-cyan" />
                <p className="text-[0.65rem] tracking-[0.25em] uppercase text-graphite-400 font-semibold">
                  Karriere
                </p>
              </div>
              <h2
                className="font-black text-brand-blue leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Bauen Sie mit,
                <br />
                was die Welt
                <br />
                sauberer macht.
              </h2>
              <p className="mt-5 text-graphite-600 leading-relaxed text-sm">
                Wir suchen Konstrukteure, Zerspaner, Vertriebsingenieure und
                Elektriker, die Lust haben, echte Maschinen zu bauen — keine
                virtuellen Produkte, sondern Stahl und Präzision, die täglich
                Tausende Tonnen Kunststoff recyceln.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/karriere"
                  className="inline-flex items-center gap-2 h-10 px-6 border border-brand-blue text-brand-blue font-semibold text-sm hover:bg-brand-blue hover:text-white transition-colors"
                >
                  Alle Stellen <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/karriere/ausbildung"
                  className="inline-flex items-center gap-1.5 h-10 px-6 text-sm text-graphite-600 hover:text-brand-blue transition-colors"
                >
                  Ausbildung →
                </Link>
              </div>
            </div>

            {/* Job list */}
            <div className="border border-graphite-200">
              {jobs.map((job, i) => (
                <Link
                  key={job}
                  href="/karriere/stellenangebote"
                  className={cn(
                    "group flex items-center justify-between px-5 py-4 hover:bg-graphite-100/60 transition-colors",
                    i < jobs.length - 1 && "border-b border-graphite-200",
                  )}
                >
                  <span className="text-sm text-brand-blue font-medium">{job}</span>
                  <span className="text-brand-cyan text-xs group-hover:translate-x-0.5 transition-transform shrink-0 ml-4">
                    →
                  </span>
                </Link>
              ))}
              <div className="px-5 py-3.5 bg-graphite-100/40 border-t border-graphite-200 flex items-center justify-between">
                <span className="text-[0.7rem] text-graphite-500">
                  Auch Initiativbewerbungen willkommen
                </span>
                <Link
                  href="/karriere/initiativbewerbung"
                  className="text-[0.7rem] text-brand-cyan hover:text-brand-cyan-bright transition-colors"
                >
                  Bewerben →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-brand-deep py-24">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div>
              <span className="block h-px w-12 bg-brand-cyan mb-8" />
              <h2
                className="font-black text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Bereit für
                <br />
                Ihr Projekt?
              </h2>
              <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
                Sprechen Sie mit unseren Ingenieuren oder besuchen Sie
                uns in Sinsheim für eine Probemahlung.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end shrink-0">
              <Link
                href="/kontakt/anfrage"
                className="inline-flex items-center gap-2 h-12 px-9 bg-brand-cyan text-brand-blue font-bold text-sm tracking-wide hover:bg-brand-cyan-bright transition-colors"
              >
                Anfrage stellen
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:+49726192480"
                className="text-sm text-white/30 hover:text-white/60 transition-colors tracking-wide"
              >
                +49 (0) 7261 / 9248-0
              </a>
              <a
                href="mailto:info@neue-herbold.de"
                className="text-sm text-white/25 hover:text-white/50 transition-colors"
              >
                info@neue-herbold.de
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
