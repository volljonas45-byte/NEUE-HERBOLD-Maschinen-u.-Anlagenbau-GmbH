import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ─── Machine Frame ─────────────────────────────────────────────────────── */

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
      {/* Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080e2a] to-[#0d1a48]" />

      {/* Subtle grid — white, not cyan */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Corner marks */}
      <span className="absolute top-4 left-4 block w-5 h-5 border-t border-l border-white/20" />
      <span className="absolute top-4 right-4 block w-5 h-5 border-t border-r border-white/20" />
      <span className="absolute bottom-4 left-4 block w-5 h-5 border-b border-l border-white/20" />
      <span className="absolute bottom-4 right-4 block w-5 h-5 border-b border-r border-white/20" />

      {/* Center cross */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="absolute w-full h-px bg-white/5" />
        <span className="absolute h-full w-px bg-white/5" />
        <span className="size-5 border border-white/15 rotate-45" />
      </div>

      {/* Labels */}
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

/* ─── Shared section label ──────────────────────────────────────────────── */

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

/* ─── Data ─────────────────────────────────────────────────────────────── */

const machines = [
  { n: "01", title: "Schneidmühlen",      spec: "LM · SM · SMV · SX · SR",   href: "/maschinen/schneidmuehlen" },
  { n: "02", title: "Vorzerkleinerung",   spec: "HZR · ZRM · GS · RL · SB",  href: "/maschinen/vorzerkleinerung" },
  { n: "03", title: "Feinmühlen",         spec: "ZM-Baureihe",               href: "/maschinen/feinmuehlen" },
  { n: "04", title: "Waschanlagen",       spec: "ES · FW · IW · TM · TB",    href: "/maschinen/waschanlagen" },
  { n: "05", title: "Hammermühlen",       spec: "HM-Baureihe",               href: "/maschinen/hammermuehlen" },
  { n: "06", title: "Peripherie",         spec: "ZS · HS · MFT",             href: "/maschinen/peripherie" },
];

const process = [
  { n: "01", title: "Vorzerkleinerung",  desc: "Schredder auf 10–50 mm" },
  { n: "02", title: "Siebung & Metall",  desc: "Metallabscheidung" },
  { n: "03", title: "Waschen",           desc: "Friktions- & Intensivwäscher" },
  { n: "04", title: "Trennen",           desc: "Schwimm-Sink / Dichte" },
  { n: "05", title: "Trocknen",          desc: "Mechanisch + thermisch" },
  { n: "06", title: "Feinmahlung",       desc: "Pulver < 1 mm" },
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
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-brand-deep grid lg:grid-cols-[55%_45%] overflow-hidden">

        {/* Left — content */}
        <div className="flex flex-col justify-end">
          <Container className="pt-40 pb-0">
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

          {/* Stats */}
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

        {/* Right — machine frame */}
        <div className="hidden lg:block border-l border-white/8">
          <MachineFrame label="Schneidmühle SM" tag="Nachzerkleinerung" className="h-full" />
        </div>
      </section>

      {/* ─── MASCHINEN ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-graphite-200">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <Label>Produktportfolio</Label>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold text-brand-blue leading-tight">
                30+ Maschinentypen.<br />Eine Anlaufstelle.
              </h2>
              <p className="mt-4 text-graphite-600 text-sm leading-[1.75] max-w-sm">
                Von der einzelnen Schneidmühle bis zur schlüsselfertigen
                Komplettanlage — alles entwickelt und gebaut in Sinsheim.
              </p>

              <div className="mt-10 divide-y divide-graphite-200 border-t border-graphite-200">
                {machines.map((m) => (
                  <Link
                    key={m.n}
                    href={m.href}
                    className="group flex items-center gap-5 py-3.5 hover:bg-graphite-100/50 -mx-2 px-2 transition-colors"
                  >
                    <span className="text-[0.65rem] font-mono text-graphite-400 w-5 shrink-0">{m.n}</span>
                    <div className="flex-1">
                      <span className="block text-sm font-semibold text-brand-blue group-hover:text-brand-cyan transition-colors">{m.title}</span>
                      <span className="text-[0.7rem] font-mono text-graphite-400">{m.spec}</span>
                    </div>
                    <ArrowRight className="size-3.5 text-graphite-300 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>

              <Link href="/maschinen" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:gap-2.5 transition-all">
                Vollständige Übersicht <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Right — offset 2×2 grid */}
            <div className="grid grid-cols-2 gap-3">
              <MachineFrame label="SM 800"    tag="Schneidmühle"   className="aspect-[3/4]" />
              <MachineFrame label="HZR 1200"  tag="Schredder"      className="aspect-[3/4] mt-10" />
              <MachineFrame label="ZM 600"    tag="Feinmühle"      className="aspect-[3/4]" />
              <MachineFrame label="FW 800"    tag="Wäscher"        className="aspect-[3/4] mt-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* ─── ZAHLEN ───────────────────────────────────────────────────── */}
      <section className="bg-brand-blue">
        <Container className="py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              ["1995", "Gegründet"],
              ["70+",  "Mitarbeiter"],
              ["40+",  "Länder"],
              ["30+",  "Maschinentypen"],
            ].map(([v, l]) => (
              <div key={l} className="px-6 xl:px-10 first:pl-0 last:pr-0 py-4">
                <div className="text-[clamp(2.5rem,4.5vw,4rem)] font-bold text-brand-cyan leading-none tracking-tight">{v}</div>
                <div className="mt-1.5 text-xs text-white/40">{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── VIDEO ────────────────────────────────────────────────────── */}
      <section className="bg-brand-deep">
        <div className="relative" style={{ aspectRatio: "21/7" }}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-[#0d1a48] to-brand-deep" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
            <a
              href="http://www.youtube.com/user/NeueHerbold"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group flex items-center justify-center size-16 border border-white/20 hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-200 rounded-sm"
            >
              <Play className="size-6 text-white/60 group-hover:text-brand-cyan transition-colors ml-0.5" fill="currentColor" />
            </a>
            <div>
              <p className="text-white font-semibold text-lg tracking-tight">Maschinen in Aktion</p>
              <p className="text-white/30 text-sm mt-1 font-mono">youtube.com/user/NeueHerbold</p>
            </div>
          </div>

          {/* Monospace corner labels */}
          <span className="absolute top-5 left-5 text-[0.6rem] font-mono text-white/15 tracking-[0.25em] uppercase">
            NH · Video
          </span>
          <span className="absolute bottom-5 right-5 text-[0.6rem] font-mono text-white/15 tracking-[0.25em] uppercase">
            14 Videos verfügbar
          </span>
        </div>
      </section>

      {/* ─── PROZESS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-graphite-200">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <Label>Recyclingprozess</Label>
              <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold text-brand-blue tracking-tight">
                Vom Abfall zum Werkstoff.
              </h2>
            </div>
            <Link href="/branchen/kunststoffrecycling/pet-flaschen" className="hidden md:inline-flex items-center gap-1.5 text-sm text-graphite-500 hover:text-brand-blue transition-colors">
              Vollprozess ansehen <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-0 min-w-max lg:min-w-0 lg:grid lg:grid-cols-6">
              {process.map((s, i) => (
                <div key={s.n} className="relative w-44 lg:w-auto pr-6">
                  {i < process.length - 1 && (
                    <div className="absolute top-5 left-10 right-0 h-px bg-graphite-200 hidden lg:block" />
                  )}
                  <div className="size-10 border border-graphite-200 flex items-center justify-center bg-white mb-3 relative z-10">
                    <span className="text-[0.65rem] font-mono text-brand-cyan">{s.n}</span>
                  </div>
                  <p className="text-xs font-semibold text-brand-blue">{s.title}</p>
                  <p className="text-[0.7rem] text-graphite-500 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TECHNIKUM ────────────────────────────────────────────────── */}
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

      {/* ─── UNTERNEHMEN ──────────────────────────────────────────────── */}
      <section className="bg-brand-blue py-24">
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

      {/* ─── KARRIERE ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Karriere</Label>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-brand-blue leading-tight">
                Bauen Sie mit,<br />was die Welt<br />sauberer macht.
              </h2>
              <p className="mt-5 text-graphite-600 text-sm leading-[1.75]">
                Wir suchen Konstrukteure, Zerspaner, Vertriebsingenieure
                und Elektriker. Echte Maschinen, echte Wirkung.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/karriere" className="inline-flex items-center gap-2 h-10 px-6 border border-brand-blue text-brand-blue text-sm font-semibold rounded-sm hover:bg-brand-blue hover:text-white transition-colors">
                  Alle Stellen <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="border border-graphite-200 divide-y divide-graphite-200">
              {jobs.map((job) => (
                <Link key={job} href="/karriere/stellenangebote" className="group flex items-center justify-between px-5 py-4 hover:bg-graphite-100/50 transition-colors">
                  <span className="text-sm font-medium text-brand-blue">{job}</span>
                  <ArrowRight className="size-3.5 text-graphite-300 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
              <div className="px-5 py-3 bg-graphite-100/40 flex items-center justify-between">
                <span className="text-[0.7rem] text-graphite-500">Initiativbewerbungen willkommen</span>
                <Link href="/karriere/initiativbewerbung" className="text-[0.7rem] text-brand-cyan hover:text-brand-cyan-bright">Bewerben →</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
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
