# Projekt-Fortschritt — Neue Herbold Website

> **Wichtig:** Diese Datei lebt im Git-Repo und ist die Single Source of Truth für den Projekt-Stand.
> Nach jedem Arbeitsblock aktualisieren → committen → pushen.
> Bei Geräte-Wechsel: erst `git pull`, dann diese Datei lesen, dann weiter.

---

## Status

**Letzte Aktualisierung:** 2026-05-21 · MacBook
**Aktives Gerät:** MacBook
**Aktuelle Phase:** Phase 1 abgeschlossen → Phase 2 (Navigation komplett)
**Live URL:** https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/
**Repo:** https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH

---

## Was als nächstes

→ **Phase 2: Navigation komplett**
- Mega-Menu Desktop (animiertes Dropdown mit Kategorien + Bildern)
- Mobile Sheet-Menu (Vollbild, Akkordeon)
- Header Scroll-Verhalten (hide-on-scroll-down, show-on-scroll-up)
- Breadcrumbs-Komponente
- Aktive Link-States

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

- [ ] Mega-Menu für Desktop (Maschinen, Branchen, Service, Unternehmen, Karriere)
- [ ] Mobile Sheet-Menu (Vollbild, Akkordeon)
- [ ] Breadcrumbs-Komponente
- [ ] Search-Funktion (lokal, ohne Backend)
- [ ] Header-Scroll-Verhalten (Hide-on-Scroll-Down, Show-on-Scroll-Up)
- [ ] Aktive Link-States (current page highlight)

---

## Phase 3 — Homepage

- [ ] Hero mit Video-Background (Placeholder oder erstes Video aus den 14)
- [ ] Trust-Bar (VDMA, PRE, PREVENT, "Seit 1995", "70 Mitarbeiter", "40 Länder")
- [ ] Produktkategorien-Grid (6 Cards: Vor-/Nachzerkleinerung, Feinmahlung, Waschanlagen, Wertstoff, Gebraucht)
- [ ] 3 Branchen-Highlights (PET, Folien, Getränkekästen)
- [ ] Prozess-Animation Block
- [ ] News-Section (3 News Cards)
- [ ] Messen-Banner (K-Messe 2025)
- [ ] Footer-CTA "Probemahlung anfragen"

---

## Phase 4 — Produktseiten

- [ ] Kategorie-Hub-Template (`/maschinen/[category]/page.tsx`)
- [ ] Produkt-Detail-Template (`/maschinen/[category]/[slug]/page.tsx`)
- [ ] Daten aus CONTENT.md in TypeScript-Files migrieren
- [ ] `<SpecTable />` (responsive, Mobile-friendly)
- [ ] `<VideoPlayer />` (Custom Player, kein YouTube-Embed)
- [ ] Bilder-Galerie mit Lightbox
- [ ] Verwandte-Produkte-Logik
- [ ] Alle 30+ Produkte mit ihren Specs

---

## Phase 5 — Branchen-Seiten

- [ ] Branchen-Hub `/branchen/page.tsx`
- [ ] `<ProcessDiagram />` (interaktiv, animiert, 14 Stufen)
- [ ] PET-Flaschen-Seite mit 14-Stufen-Prozess
- [ ] Folien-Seite mit 13-Stufen-Prozess
- [ ] Getränkekästen-Seite mit 14-Stufen-Prozess
- [ ] Material-Tag-System

---

## Phase 6 — Service / Karriere / Unternehmen

- [ ] Über-uns-Seite mit Team/Werkshalle
- [ ] Historie 1995–heute
- [ ] Service-Hub (Ersatzteile, Reparaturen, Zubehör, Technikum)
- [ ] Karriere-Hub
- [ ] 3 Stellenangebote-Detailseiten
- [ ] Ausbildung-Seite (4 Berufe)

---

## Phase 7 — Kontakt & Formulare

- [ ] Kontakt-Seite Split-Layout
- [ ] Technischer Fragebogen (Multi-Step)
- [ ] Ersatzteil-Anfrage-Form
- [ ] Formspree/Web3Forms-Integration
- [ ] Honeypot Anti-Spam
- [ ] Success/Error-States
- [ ] Ansprechpartner-Liste (alle 14 aus CONTENT.md)
- [ ] Anfahrt-Seite mit statischer Karte

---

## Phase 8 — News / Messen / Downloads

- [ ] News-Listing mit MDX
- [ ] 3 News-Artikel migriert (ZM800, Zwangsbeschickung, SM-Erweiterung)
- [ ] Messen-Timeline 2024/2025/2026
- [ ] Downloads-Center mit Filter (kommt später, PDFs fehlen noch)

---

## Phase 9 — SEO + Performance

- [ ] `sitemap.xml` statisch generiert
- [ ] `robots.txt`
- [ ] OpenGraph Tags + Twitter Cards pro Seite
- [ ] Schema.org JSON-LD für Produkte
- [ ] Meta-Descriptions
- [ ] Bilder vorab optimiert (WebP/AVIF)
- [ ] Lighthouse: Performance ≥95
- [ ] Lighthouse: Accessibility = 100
- [ ] Lighthouse: SEO = 100
- [ ] Bundle Size First Load <100kb JS

---

## Phase 10 — Launch-Vorbereitung

- [ ] Inhalts-QA: alles vom alten Site übertragen?
- [ ] Cross-Browser-Test (Safari, Chrome, Firefox, Edge)
- [ ] Device-Test (375px → 4K)
- [ ] Cookie-Banner falls Analytics aktiv
- [ ] Impressum + Datenschutz + AGB
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
