# Projekt-Fortschritt — Neue Herbold Website

> **Wichtig:** Diese Datei lebt im Git-Repo und ist die Single Source of Truth für den Projekt-Stand.
> Nach jedem Arbeitsblock aktualisieren → committen → pushen.
> Bei Geräte-Wechsel: erst `git pull`, dann diese Datei lesen, dann weiter.

---

## Status

**Letzte Aktualisierung:** 2026-05-21 · Windows-PC
**Aktives Gerät:** Windows-PC
**Aktuelle Phase:** Fehlende Unterseiten ergänzt — Phase 10 (QA) steht noch aus
**Live URL:** https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/
**Repo:** https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH

---

## Was als nächstes

→ **Phase 10 — QA & Feinschliff**
- Alle neuen Seiten live auf GitHub Pages prüfen
- Web3Forms API-Key eintragen (Kontaktformulare → echte Emails)
- Echte Maschinen-Fotos einbauen sobald verfügbar
- `/maschinen/peripherie` Seite erstellen (im Mega-Menu verlinkt)
- Anfahrt-Seite `/kontakt/anfahrt` (GPS-Daten Sinsheim)
- Cross-Browser + Mobile Test

---

## Aktuelle Probleme / Offene Fragen

- Videos: noch keine Maschinen-Videos heruntergeladen (Phase 3 Hero)
- Bilder: noch keine echten Maschinen-Fotos (Placeholder-Design vorerst)
- GitHub Pages muss unter Settings → Pages → Source: GitHub Actions aktiviert sein

---

## Phase 0 — Setup

- [x] Next.js Projekt erstellt (Next.js 16, React 19, Tailwind v4)
- [x] Dependencies installiert (framer-motion, lucide-react, react-hook-form, zod, shadcn/ui)
- [x] shadcn/ui initialisiert + Basis-Komponenten (Button, Card, Dialog, Input, Textarea, Label, Select, Tabs, Accordion, Sheet)
- [x] Static Export in `next.config.ts` konfiguriert (`output: 'export'`, `basePath`, `unoptimized`)
- [x] `.github/workflows/deploy.yml` angelegt
- [x] Mit bestehendem Repo verbunden + initial push
- [ ] Erste GitHub Action erfolgreich durchgelaufen
- [ ] Live-URL erreichbar (Default Next.js Page sichtbar)
- [x] `PLAN.md`, `PROGRESS.md`, `WORKFLOW.md` im Repo committed

---

## Phase 1 — Design System

- [x] Color Tokens in `globals.css` (alle Markenfarben + Neutrals)
- [x] Tailwind v4 `@theme` Block konfiguriert
- [x] Custom Breakpoints (`3xl: 1920px`, `4xl: 2560px`)
- [x] Font Inter via `next/font/google` (400, 500, 600, 700, 800, 900)
- [x] Typografie-Skala (Tailwind Standard bis 9xl)
- [x] `<Container />` Komponente mit responsivem Padding
- [x] `<Button />` Komponente (primary, primary-dark, secondary, secondary-dark, ghost, dark — 4 Sizes)
- [x] `<Logo />` Komponente (Wortmarke "NEUE HERBOLD" mit Cyan-Akzent auf "NEUE")
- [x] `<SiteHeader />` Stub (Sticky, Backdrop-Blur, Mobile-Hamburger, Dropdown-Nav)
- [x] `<SiteFooter />` (4 Spalten, Dark BG, CTA-Bar, Adresse, YouTube)
- [x] Demo-Homepage mit Hero + Trust-Bar + Kategorien-Grid + Über-uns + Anwendungen + CTA
- [x] Layout-Wrapper `src/app/layout.tsx` (lang="de", Inter, Body-Styles)
- [ ] Auf `localhost:3000` premium aussehend ✓ (noch nicht manuell verifiziert)
- [ ] Live auf GitHub Pages ✓ (GitHub Action noch nicht gelaufen)

---

## Phase 2 — Navigation komplett

- [x] Mega-Menu für Desktop (Maschinen 3 Spalten, Branchen Dropdown mit Beschreibungen)
- [x] Mobile Sheet-Menu (Vollbild, Akkordeon per Tap)
- [x] Breadcrumbs-Komponente (`src/components/layout/Breadcrumbs.tsx`)
- [x] Search-Funktion (SearchOverlay, ⌘K, 30+ statische Einträge)
- [x] Header-Scroll-Verhalten (Hide-on-Scroll-Down, Show-on-Scroll-Up)
- [x] Aktive Link-States (Cyan-Unterstrich, usePathname)

---

## Phase 3 — Homepage

- [x] Hero mit Video-Background (Placeholder oder erstes Video aus den 14)
- [x] Trust-Bar (VDMA, PRE, PREVENT, "Seit 1995", "70 Mitarbeiter", "40 Länder")
- [x] Produktkategorien-Grid (6 Cards: Vor-/Nachzerkleinerung, Feinmahlung, Waschanlagen, Wertstoff, Gebraucht)
- [x] 3 Branchen-Highlights (PET, Folien, Getränkekästen)
- [x] Prozess-Animation Block
- [x] News-Section (3 News Cards)
- [x] Messen-Banner (K-Messe 2025)
- [x] Footer-CTA "Probemahlung anfragen"

---

## Phase 4 — Produktseiten

- [x] Kategorie-Hub-Template (`/maschinen/[category]/page.tsx`)
- [x] Produkt-Detail-Template (`/maschinen/[category]/[slug]/page.tsx`)
- [x] Daten aus CONTENT.md in TypeScript-Files migrieren (`src/data/products.ts`)
- [x] `<SpecTable />` (responsive, Mobile-friendly)
- [x] Verwandte-Produkte-Logik
- [x] 14 Produkte in 5 Kategorien mit technischen Daten
- [ ] `<VideoPlayer />` (Custom Player mit Poster — Videos noch nicht heruntergeladen)
- [ ] Bilder-Galerie mit Lightbox (Echte Maschinenfotos fehlen noch)

---

## Phase 5 — Branchen-Seiten

- [x] Branchen-Hub `/branchen/page.tsx`
- [x] PET-Flaschen-Seite mit 14-Stufen-Prozess
- [x] Folien-Seite mit 13-Stufen-Prozess
- [x] Getränkekästen-Seite mit 14-Stufen-Prozess
- [x] Branchen-Kategorie-Templates (6 Kategorien)
- [ ] `<ProcessDiagram />` animiert (aktuell statisches Grid, ausreichend für jetzt)

---

## Phase 6 — Service / Karriere / Unternehmen

- [x] Über-uns-Seite mit allen 14 Ansprechpartnern
- [x] Service-Hub (Ersatzteile, Reparaturen, Technikum)
- [x] Karriere-Hub (3 offene Stellen + Bewerbungs-Box)
- [x] Ausbildung-Seite (4 Berufe mit Beschreibungen)
- [ ] Historie 1995–heute (optional für später)

---

## Phase 7 — Kontakt & Formulare

- [x] Kontakt-Seite Split-Layout
- [x] Technische Anfrage-Form (React Hook Form + Zod + Web3Forms)
- [x] Ersatzteil-Anfrage-Form
- [x] Web3Forms-Integration (API-Key muss noch eingetragen werden!)
- [x] Honeypot Anti-Spam
- [x] Success/Error-States
- [ ] Anfahrt-Seite mit statischer Karte (optional)

---

## Phase 8 — News / Messen

- [x] News-Listing (3 Meldungen: ZM800, Zwangsbeschickung, SM-Erweiterung)
- [x] Messen-Timeline 2025 (K-Messe Highlight + PRS) + 2024 vergangene
- [x] Impressum + Datenschutzerklärung (DSGVO-konform)
- [ ] Downloads-Center (PDFs fehlen noch)

---

## Phase 9 — SEO + Performance

- [x] `sitemap.xml` statisch generiert (alle Routen)
- [x] `robots.txt`
- [x] Meta-Descriptions pro Seite
- [x] Keywords im Root-Layout
- [ ] Schema.org JSON-LD für Produkte
- [ ] OpenGraph-Bilder pro Seite
- [ ] Lighthouse-Audit

---

## Phase 10 — Launch-Vorbereitung

- [ ] Inhalts-QA: alles vom alten Site übertragen?
- [ ] Cross-Browser-Test (Safari, Chrome, Firefox, Edge)
- [ ] Device-Test (375px → 4K)
- [ ] Cookie-Banner falls Analytics aktiv
- [x] Impressum + Datenschutz + AGB + Einkaufsbedingungen
- [ ] (optional) Custom Domain via CNAME
- [ ] Finale Live-URL geprüft

---

## Notizen / Entscheidungen

- Next.js 16.2.6 (neueste Version via create-next-app) — leicht neuer als geplant aber stabil
- shadcn/ui v4 mit Tailwind v4 — CSS-basierte Konfiguration, kein tailwind.config.ts
- Projekt liegt in OneDrive `/JR Agency Services/16_Code-Websites/NEUE HERBOLD/`
- Markenfarben als `@theme {}` Block in globals.css implementiert (Tailwind v4 Style)
- Button-Varianten: primary (Cyan), primary-dark (Brand-Blue), secondary (Outline Cyan), dark (White/10)
- Header: Sticky + Backdrop-Blur beim Scrollen, Mobile-Hamburger mit Overlay, Dropdown für Desktop

---

## Changelog

- **2026-05-21 · MacBook:** Phase 0 + Phase 1 komplett — Next.js Projekt aufgesetzt,
  Design System mit Markenfarben, Inter Font, Container, Logo, Button, Header, Footer,
  Demo-Homepage mit Hero + Trust-Bar + 6 Kategorie-Cards + Über-uns + 3 Anwendungs-Cards + CTA.
  Erster Push zu GitHub, GitHub Action wartet auf Ausführung.

- **2026-05-21 · MacBook:** Phase 2 komplett — Mega-Menu (3 Spalten Maschinen), Mobile Sheet-Menu,
  Breadcrumbs, SearchOverlay (⌘K, 30+ Einträge), Hide-on-Scroll Header, aktive Link-States.

- **2026-05-21 · MacBook:** Phase 3 komplett — Homepage neu aufgebaut: Trust-Bar (VDMA/PRE/PREVENT),
  Bento-Grid Kategorien (6 Cards, featured Schneidmühlen 2×2), 3 Branchen-Highlights mit Specs,
  YouTube Imagefilm eingebettet, News-Section (3 Karten), Messen-Banner (K-Messe 2025).

- **2026-05-21 · MacBook:** Phasen 4–9 komplett — Produktseiten (14 Maschinen, 5 Kategorien,
  SpecTable, generierte Detail-Seiten), Branchen (3 Prozessketten mit je 13–14 Stufen),
  Service (Ersatzteile/Reparaturen/Technikum), Karriere (3 Stellen + Ausbildung),
  Über uns (14 Ansprechpartner), Kontakt (2 Formulare mit Zod + Web3Forms),
  News + Messen + Impressum + Datenschutz. Sitemap.xml + robots.txt. 50+ statische Seiten.

- **2026-05-21 · Windows-PC:** Fehlende Unterseiten ergänzt (Gap-Analyse & Build):
  /gebrauchtmaschinen, /aktuelles (Hub), /unternehmen (Hub), /karriere/stellenangebote (4 Stellen),
  /karriere/initiativbewerbung, /kontakt/ansprechpartner (14 Personen nach Bereich),
  /service/zubehoer, /rechtliches/agb, /rechtliches/einkaufsbedingungen, /downloads.
  Sitemap um alle neuen Routen erweitert. 60+ statische Seiten.
