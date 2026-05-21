"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";

/* ─── Static search index ──────────────────────────────────────── */

type SearchItem = {
  title: string;
  desc: string;
  href: string;
  cat: string;
};

const searchItems: SearchItem[] = [
  // Maschinen
  { title: "Schneidmühlen", desc: "LM · SM · SMV · SX · SR", href: "/maschinen/schneidmuehlen", cat: "Maschinen" },
  { title: "Vorzerkleinerung", desc: "Einwellenschredder, Schredder, Guillotine", href: "/maschinen/vorzerkleinerung", cat: "Maschinen" },
  { title: "Hammermühlen", desc: "HM-Baureihe · Holz, Elektroschrott", href: "/maschinen/hammermuehlen", cat: "Maschinen" },
  { title: "Feinmühlen", desc: "ZM-Baureihe · Pulverisierung bis < 1 mm", href: "/maschinen/feinmuehlen", cat: "Maschinen" },
  { title: "Waschanlagen", desc: "ES · FW · IW · TM · TB · PE/PP 250–2.000 kg/h", href: "/maschinen/waschanlagen", cat: "Maschinen" },
  { title: "Peripherie", desc: "ZS · HS · MFT · Absauganlagen · Silos", href: "/maschinen/peripherie", cat: "Maschinen" },
  { title: "Gebrauchtmaschinen", desc: "Schnell verfügbar · Fremdprodukte", href: "/gebrauchtmaschinen", cat: "Maschinen" },
  { title: "Einwellenschredder HZR", desc: "Ballenwaren, massive Klumpen", href: "/maschinen/vorzerkleinerung", cat: "Maschinen" },
  { title: "Zweiwellenschredder ZRM", desc: "Folien, Autoreifen, Fässer", href: "/maschinen/vorzerkleinerung", cat: "Maschinen" },
  { title: "Schneckenbrecher SB", desc: "Holzpaletten, Kabeltrommeln, Dämmstoffplatten", href: "/maschinen/vorzerkleinerung", cat: "Maschinen" },
  { title: "Guillotinescheren GS", desc: "Faserballen, Kautschukballen, Fischereitaue", href: "/maschinen/vorzerkleinerung", cat: "Maschinen" },
  { title: "Hochleistungsmühlen SX", desc: "Bis 15 t/h Durchsatz · Folien, Big Bags", href: "/maschinen/schneidmuehlen", cat: "Maschinen" },
  { title: "Rohrmühlen SR / Profilmühlen LP", desc: "Rohrabfälle bis 1.600 mm", href: "/maschinen/schneidmuehlen", cat: "Maschinen" },
  // Branchen
  { title: "Kunststoffrecycling", desc: "PET, PE/PP, Folien, Getränkekästen", href: "/branchen/kunststoffrecycling", cat: "Branchen" },
  { title: "Autoreifen", desc: "Gummigranulat & -mehl · Devulkanisierung", href: "/branchen/autoreifen", cat: "Branchen" },
  { title: "Kabel & Altkabel", desc: "Cu / Al-Rückgewinnung", href: "/branchen/kabel-altkabel", cat: "Branchen" },
  { title: "Holz", desc: "Hackschnitzel, Biomasse, Paletten", href: "/branchen/holz", cat: "Branchen" },
  { title: "Kautschuk", desc: "Temperaturschonende Aufbereitung", href: "/branchen/kautschuk", cat: "Branchen" },
  { title: "PET-Flaschen Recycling", desc: "14-stufiger Prozess · LM + Waschanlage", href: "/branchen/kunststoffrecycling", cat: "Branchen" },
  // Service & Seiten
  { title: "Service", desc: "Ersatzteile, Reparaturen, Zubehör, Technikum", href: "/service", cat: "Seiten" },
  { title: "Ersatzteile", desc: "Rotormesser, Siebe, Lager — noch am Bestelltag", href: "/service", cat: "Seiten" },
  { title: "Probemahlung / Technikum", desc: "Kostenlose Materialprüfung in Sinsheim", href: "/service", cat: "Seiten" },
  { title: "Über uns", desc: "NEUE HERBOLD seit 1995 · 70 Mitarbeiter", href: "/unternehmen/ueber-uns", cat: "Seiten" },
  { title: "Karriere", desc: "Offene Stellen & Ausbildungsberufe", href: "/karriere", cat: "Seiten" },
  { title: "Kontakt", desc: "Anfrage stellen · Ansprechpartner", href: "/kontakt", cat: "Seiten" },
  { title: "Anfrage stellen", desc: "Technischer Fragebogen", href: "/kontakt/anfrage", cat: "Seiten" },
  { title: "Stellenangebote", desc: "Schweißer, Mechaniker, Konstrukteur", href: "/karriere/stellenangebote", cat: "Seiten" },
];

/* ─── Component ─────────────────────────────────────────────────── */

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const q = query.trim().toLowerCase();
  const results =
    q.length >= 2
      ? searchItems.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q) ||
            item.cat.toLowerCase().includes(q),
        )
      : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-deep/96 backdrop-blur-md flex flex-col"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Input bar */}
      <div className="border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <Search className="size-5 text-white/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Maschine, Branche oder Seite suchen…"
            className="flex-1 bg-transparent text-white placeholder-white/30 text-base outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-white/40 hover:text-white/70 transition-colors"
            aria-label="Suche schließen"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-4">
          {q.length < 2 ? (
            <div className="mt-12 text-center">
              <p className="text-white/25 text-sm">Mindestens 2 Zeichen eingeben</p>
              <p className="text-white/15 text-xs mt-2 font-mono">⌘K öffnet die Suche überall</p>
            </div>
          ) : results.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm">Keine Ergebnisse für &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            <div className="space-y-0.5">
              {results.map((item) => (
                <Link
                  key={`${item.href}-${item.title}`}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-4 px-4 py-3.5 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-white/30 mt-0.5 truncate">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[0.6rem] text-white/20 font-mono uppercase tracking-widest hidden sm:block">
                      {item.cat}
                    </span>
                    <ArrowRight className="size-3.5 text-white/20 group-hover:text-brand-cyan transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
