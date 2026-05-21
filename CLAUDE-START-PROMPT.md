# Erst-Prompt für Claude Code

**So benutzen:** Kopiere den Inhalt zwischen den `---` und schicke ihn als ersten Prompt an Claude Code im Projekt.

---

Wir bauen die komplette Website für **NEUE HERBOLD GmbH** — deutscher Hersteller von Recycling- und Zerkleinerungsmaschinen — neu. Die alte Site (neue-herbold.com) ist visuell aus den 2000ern. Wir machen einen Premium-Relaunch im Stil von Trumpf / KraussMaffei / Coperion, aber mit den **Markenfarben (tiefes Blau + Cyan) der alten Site beibehalten und veredelt**.

**Repo:** https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH
**Live:** https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/

---

## Wichtige Dateien im Projekt-Root — JETZT LESEN

1. **`PROGRESS.md`** — aktueller Stand, was abgehakt ist, was als nächstes ansteht
2. **`PLAN.md`** — Master-Plan mit Tech-Stack, Design-System, Roadmap, Komponenten-Liste
3. **`WORKFLOW.md`** — Multi-Device-Workflow (Stop-/Start-Routine, Commit-Regeln)
4. **`CONTENT.md`** — vollständiger Content-Crawl der alten Site (alle 52 Seiten, Maschinen, Specs, Videos, Ansprechpartner)

**Lies alle vier komplett.** Bestätige dann mit:
1. Aktueller Stand laut PROGRESS.md (Phase, was offen)
2. Vision in einem Satz
3. Tech-Stack-Konstanten
4. Design-Richtung
5. Multi-Device-Workflow verstanden (Push + PROGRESS.md updaten nach jedem Block)

---

## Multi-Device-Regel (WICHTIG)

Der User wechselt zwischen MacBook und einem anderen Gerät. Damit nichts verloren geht:

**Nach JEDEM abgeschlossenen Schritt:**
1. PROGRESS.md aktualisieren:
   - Checkbox `[ ]` → `[x]` für erledigte Aufgabe
   - "Letzte Aktualisierung" → aktuelles Datum + Uhrzeit + "MacBook" (oder welches Gerät auch immer aktiv ist — frag den User wenn unklar)
   - "Was als nächstes" präzise eintragen
   - Falls etwas hängt: "Aktuelle Probleme" eintragen
   - Changelog-Eintrag am Ende der Datei

2. Committen + Pushen:
   ```bash
   git add .
   git commit -m "feat: <was gemacht>"
   git push
   ```

3. GitHub Action prüfen (kurz erwähnen wenn fehlgeschlagen)

**NICHT batchen** — lieber kleinere Commits nach jedem Schritt als ein Riesen-Commit am Ende. So sieht man auf dem anderen Gerät genau wo es weitergeht.

---

## Konstanten (Entscheidungen sind getroffen)

- **Farben:** Markenblau `#0A1745`, Hero-Navy `#050B2E`, Cyan-Akzent `#00C8FF`, Cyan-Glow `#22DBFF`
- **Sprache:** Nur Deutsch (Phase 1) — Struktur i18n-ready aber keine Übersetzungen jetzt
- **Logo:** Text-Wortmarke "NEUE HERBOLD" + Subline, "NEUE" in Cyan
- **Hosting:** GitHub Pages mit Static Export, Auto-Deploy via GitHub Actions
- **basePath:** `'/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH'` nur in Production
- **Forms:** Formspree/Web3Forms (Static-kompatibel)
- **Light** für Produktseiten, **Dark** für Hero/Footer

---

## Deine Aufgabe heute — Phase 0 + Phase 1

Setup ist (durch den User vorab) bereits gemacht: Next.js initialisiert, Dependencies installiert, shadcn/ui ready, mit Remote-Repo verbunden, alle Plan-Files (PLAN.md, PROGRESS.md, WORKFLOW.md, CONTENT.md) im Repo.

### Schritt 1: Static Export + GitHub Action

**`next.config.ts`:**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production'
    ? '/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH'
    : '',
};

export default nextConfig;
```

**`.github/workflows/deploy.yml`** — siehe PLAN.md Sektion 15 (kompletter Workflow ist dort).

Erster Push → GitHub Action sollte laufen → Default Next.js Page sollte live sein. Verifizieren.

### Schritt 2: Color Tokens

Markenfarben aus PLAN.md Sektion 2.1 in `src/app/globals.css` als CSS-Variablen. Tailwind v4 `@theme` Block so dass nutzbar als `bg-brand-blue`, `text-brand-cyan`, `border-brand-cyan`, etc.

### Schritt 3: Typografie + Inter

Inter via `next/font/google` (weights 400, 500, 600, 700, 800, 900). Tailwind Font-Skala bis `text-9xl` (128 px) für Ultrawide.

### Schritt 4: Container-Komponente

`src/components/layout/Container.tsx` mit Responsive-Padding (`px-4` → `px-24`). Custom Breakpoints `3xl: 1920px`, `4xl: 2560px`.

### Schritt 5: Button-Komponente

shadcn Button erweitern: `primary` (Cyan-BG, dunkler Text), `primary-dark` (Brand-Blue BG, weiß), `secondary` (Outline), `ghost`, `dark` (für Dark-Sections). 4 Sizes.

### Schritt 6: Logo-Komponente

`src/components/Logo.tsx`. "NEUE" in `brand-cyan`, "HERBOLD" in `brand-blue` (light) oder weiß (dark). Subline "Maschinen & Anlagenbau" kleiner darunter. Props: `variant`, `size`.

### Schritt 7: Layout-Wrapper

`src/app/layout.tsx` — `html lang="de"`, Inter als Default-Font, Body `bg-bone text-graphite-900 antialiased`.

### Schritt 8: Header-Stub

`<SiteHeader />` — Sticky, Backdrop-Blur beim Scrollen, Logo + 6 Nav-Items + Mobile-Hamburger. Volles Mega-Menu kommt in Phase 2.

### Schritt 9: Footer-Stub

`<SiteFooter />` — 4 Spalten, Dark BG (`bg-brand-deep`), weiße Typo, Cyan-Akzente, Adresse Sinsheim, YouTube-Icon.

### Schritt 10: Demo-Homepage

`src/app/page.tsx`:
- Hero (Dark BG, große Headline "Zerkleinerungstechnik aus Sinsheim", Subline, 2 CTAs)
- 3 Demo-Sections (Kategorien-Grid, About, CTA)

---

## Arbeitsweise (WICHTIG)

- **Erstmal alle 4 MD-Dateien lesen → zusammenfassen → bestätigen → dann coden**
- **Pro Schritt: 1 Commit + Push + PROGRESS.md Update**
- **Mobile-first** (375px denken, dann hoch skalieren bis 4K)
- **Type-safe** — kein `any`
- **Server Components default**, Client nur wo nötig
- **Markenfarben respektieren** — Cyan ist Akzent, keine Flächenfarbe
- **Nach jedem großen Block:** kurze Zusammenfassung was passiert ist + Hinweis ob Live-URL aktualisiert ist

---

## Wenn du fertig mit Phase 1 bist

PROGRESS.md final updaten + committen + pushen. Dann melden:
1. Was implementiert
2. Lokaler Screenshot (Beschreibung)
3. Live-URL aktualisiert? ✓ / ✗
4. Was als nächstes (Phase 2 — Mega-Menu)
5. Offene Probleme

Los geht's. **Erst die 4 MD-Files lesen, dann zusammenfassen, dann starten.**
