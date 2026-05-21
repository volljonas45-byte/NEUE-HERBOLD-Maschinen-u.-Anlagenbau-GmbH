# Neue Herbold — Website Relaunch Master Plan
**Projekt-Start:** Morgen (MacBook, Claude Code) — Multi-Device-Workflow
**Ziel:** Premium B2B-Website auf Marktführer-Niveau, voll responsiv, ohne Content-Verlust

**Repo:** https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH
**Live:** https://volljonas45-byte.github.io/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH/

**Workflow:** Multi-Device — siehe `WORKFLOW.md`
**Status-Tracking:** `PROGRESS.md` (Single Source of Truth)

---

## 0. Vision & Positionierung

**Was wir bauen:** Eine Website die wirkt wie **Trumpf, KraussMaffei oder Coperion** — dunkle Hero-Sections mit Maschinen-Videos, weiße Produktseiten mit perfekter Typografie, klare Hierarchie, mobile-first responsive von 320 px bis 4K Ultrawide.

**Vergleichs-Referenzen (zum Anschauen für Design-Inspiration):**
- https://www.trumpf.com (Dark Mode + Video Hero + Cards)
- https://www.kraussmaffei.com (Industrieller Look, starke Bilder)
- https://www.coperion.com (B2B-Maschinen, klare Struktur)
- https://www.festo.com (Saubere Navigation, technische Datenblätter)
- https://www.engelglobal.com (Hero-Videos, Produkt-Konfiguratoren)

**Was die Konkurrenz NICHT hat und wir bauen werden:**
- Echte Video-Hero auf jeder Kategorie
- Interaktive Prozess-Diagramme (Waschanlagen-Workflow)
- Maschinenspezifikations-Filter (nach Material, Durchsatz, Größe)
- Anfrage-Konfigurator (geführter Fragebogen)

---

## 1. Tech-Stack

| Bereich | Entscheidung | Warum |
|---|---|---|
| **Framework** | **Next.js 15 (App Router) mit Static Export** | SSG für GitHub Pages, Bilder-Optimierung, modern |
| **Build-Mode** | **`output: 'export'`** | Erzeugt rein statisches HTML/CSS/JS für GitHub Pages |
| **Sprache** | **TypeScript** | Type Safety bei dem Datenumfang Pflicht |
| **Styling** | **Tailwind CSS v4** | Schnell, konsistent, mit Design Tokens |
| **UI-Komponenten** | **shadcn/ui** | Copy-paste, voll customizable, keine Dependency-Hölle |
| **Animationen** | **Framer Motion** | Industrie-Standard für sanfte Übergänge |
| **Icons** | **Lucide React** | Konsistent, modern, kostenlos |
| **Fonts** | **Inter** (Body & Display) | Modern, premium, performant |
| **Bilder** | **next/image** mit `unoptimized: true` | Static Export erlaubt keine Image-Optimization-Server |
| **Videos** | **Direkter MP4-Embed** mit Custom Player | YouTube wirkt billig für Premium-Brand |
| **Forms** | **React Hook Form** + **Formspree** (oder Web3Forms) | Validierung + Form-Backend ohne Server (GitHub Pages-kompatibel) |
| **Content** | **MDX** (für News) + **TS-Datenfiles** (Produkte) | Schnell, versionierbar in Git |
| **CMS (später)** | Sanity / Payload | Optional Phase 2 |
| **i18n** | **Phase 1: nur DE** — Struktur aber vorbereiten | next-intl-Setup kommt später bei EN/FR/ES |
| **Hosting** | **GitHub Pages** | Kostenlos, einfach, via GitHub Actions deployen |
| **Domain** | `<username>.github.io/neue-herbold` (custom später) | Custom Domain via DNS-CNAME später möglich |
| **Analytics** | **Plausible** (GDPR) oder erstmal weglassen | Datenschutzkonform, ohne Cookie-Banner |
| **SEO** | Meta-Tags + Schema.org JSON-LD | Strukturierte Daten für Produkte |

---

## 2. Design-System

### 2.1 Farbpalette — "Refined Brand DNA"

Wir behalten die **Markenfarben der alten Website** (tiefes Markenblau + Cyan-Akzent) und veredeln sie. Wiedererkennungswert bleibt, Premium-Look kommt durch korrekte Anwendung, weiße Produktseiten und saubere Neutrals.

**Markenfarben (übernommen von altem Logo):**
```css
--brand-blue: #0A1745          /* Tiefes Markenblau — Headlines, Dark Sections */
--brand-deep: #050B2E          /* Sehr dunkles Navy — Hero-Background */
--brand-steel: #1A2B6B         /* Mittleres Blau — Hover/Borders in Dark */
--brand-cyan: #00C8FF          /* Akzent-Cyan — wie "NEUE" Schriftzug */
--brand-cyan-bright: #22DBFF   /* Glow-Variante für Hover/Focus */
--brand-cyan-dark: #0090D4     /* Dunkles Cyan für aktive States */
```

**Neutralfarben (Light Mode Sections — Produktseiten):**
```css
--bone: #FAFAFA                /* Page Background */
--paper: #FFFFFF               /* Card Background */
--graphite-900: #0A1745        /* Headlines — identisch mit brand-blue */
--graphite-600: #475569        /* Body Text */
--graphite-400: #94A3B8        /* Muted Text */
--graphite-200: #E2E8F0        /* Borders */
--line: #E2E8F0                /* Standard Border */
```

**Semantik:**
```css
--success: #16A34A
--warning: #EAB308
--danger:  #DC2626
--info:    #0EA5E9
```

**Anwendung:**
- **Hero / Footer:** `--brand-deep` Background, weiße Typo, Cyan-Akzente für Highlights und CTAs
- **Produktseiten:** weißer Background, `--brand-blue` für Headlines, `--graphite-600` für Body, Cyan nur für Buttons & Links
- **CTAs:** Solid Cyan auf Dark / Solid Brand-Blue auf Light, beide mit Cyan-Glow auf Hover
- **Tabellen / Cards:** weißer BG, `--line` Borders, `--brand-blue` für wichtige Werte

### 2.2 Typografie

```
Display:  Inter (700, 800, 900) — Headlines, Hero-Text
Body:     Inter (400, 500, 600) — Fließtext, Tabellen
Mono:     JetBrains Mono — Technische Daten, Specs
```

**Skala (rem-basiert für perfekte Responsiveness):**
```
text-xs:    0.75rem  (12px)  — Captions, Labels
text-sm:    0.875rem (14px)  — Tabellen, Meta
text-base:  1rem     (16px)  — Body
text-lg:    1.125rem (18px)  — Lead Paragraphs
text-xl:    1.25rem  (20px)  — Subtitles
text-2xl:   1.5rem   (24px)  — H3
text-3xl:   1.875rem (30px)  — H2
text-4xl:   2.25rem  (36px)  — Section Titles
text-5xl:   3rem     (48px)  — Page Titles
text-6xl:   3.75rem  (60px)  — Hero Mobile
text-7xl:   4.5rem   (72px)  — Hero Tablet
text-8xl:   6rem     (96px)  — Hero Desktop
text-9xl:   8rem     (128px) — Hero Ultrawide
```

### 2.3 Spacing & Layout

```
Container Max-Widths:
  sm:  640px
  md:  768px
  lg:  1024px
  xl:  1280px
  2xl: 1536px
  3xl: 1920px   ← für Ultrawide (custom)
```

**Grid-Padding (responsive):**
- Mobile (`<640px`): `px-4` (16 px)
- Tablet (`640-1024px`): `px-8` (32 px)
- Desktop (`1024-1536px`): `px-12` (48 px)
- Ultrawide (`>1920px`): `px-24` (96 px) + Max-Container

### 2.4 Komponenten-Stil

- **Border-Radius:** `rounded-lg` (8 px) für Cards, `rounded-full` für Buttons, `rounded-sm` für Inputs
- **Shadows:** Subtil, nicht über `shadow-lg` hinaus
- **Borders:** `1px solid var(--line)` für Light, transparent in Dark
- **Buttons:** Solid (Primary), Outline (Secondary), Ghost (Tertiary)
- **Animations:** 200–400 ms ease-out, niemals länger als 600 ms

### 2.5 Breakpoints (Mobile-First)

```
default:  <640px   — Smartphones
sm:       ≥640px   — Große Phones, kleine Tablets
md:       ≥768px   — Tablets
lg:       ≥1024px  — Desktops klein
xl:       ≥1280px  — Desktops mittel
2xl:      ≥1536px  — Desktops groß
3xl:      ≥1920px  — Ultrawide (custom)
4xl:      ≥2560px  — 4K Ultrawide (custom)
```

---

## 3. Rebranding

### 3.1 Logo — Phase 1: Einfache Wortmarke

**Phase 1 (jetzt):** Reine Text-Wortmarke als Platzhalter — wird später durch echtes Logo ersetzt.

```
NEUE HERBOLD
Maschinen & Anlagenbau
```

- Font: Inter 800 (NEUE HERBOLD), Inter 400 (Subline)
- Auf dunklem Background: weißer Haupt-Text + Cyan-Akzent für "NEUE" (subtile Anlehnung an altes Logo)
- Auf hellem Background: `brand-blue` für Haupt-Text + Cyan für "NEUE"
- Implementiert als React-Komponente `<Logo />` mit Prop `variant="light" | "dark"`
- Skaliert via CSS — kein Image, alles Text/SVG

**Phase 2 (später):** Echtes Logo wird einfach in der Komponente ausgetauscht — alles andere bleibt.

### 3.2 Bildsprache

**Was wir vermeiden:**
- Stock-Fotos
- Grünliche Recycling-Bilder (wirkt billig)
- Blueprint-Zeichnungen als Hauptbild
- Tiefblaue Cybertron-Hintergründe

**Was wir wollen:**
- Maschinen-Closeups (hohe Auflösung)
- Maschinen im Einsatz (Action-Shots)
- Sterile Studio-Shots auf weißem Background für Produktdetail
- Echte Mitarbeiter, echte Werkshalle für "Über uns"
- Hochwertige Industrie-Fotografie (Vorbild: Bühler, KraussMaffei)

### 3.3 Tonalität / Voice

- **Klar, technisch, präzise** — wie ein Ingenieur, nicht wie Marketing
- Kein "innovativ, dynamisch, zukunftsweisend"-Geschwurbel
- Zahlen und Fakten zuerst (Durchsatz, kW, Maße)
- B2B-Sprache, aber lesbar — kein Fachchinesisch ohne Erklärung

---

## 4. Site-Struktur (neu)

```
neue-herbold.com/
│
├─ /                                    HOME
├─ /maschinen/                          PRODUKTE (Kategorie-Hub)
│   ├─ /maschinen/vorzerkleinerung/
│   │   ├─ /einwellenschredder
│   │   ├─ /zweiwellenschredder
│   │   ├─ /rohrschredder
│   │   ├─ /styroporshredder
│   │   ├─ /schneckenbrecher
│   │   └─ /guillotinescheren
│   ├─ /maschinen/schneidmuehlen/
│   │   ├─ /lm                          (Schneidmühle LM)
│   │   ├─ /sm                          (Schneidmühle SM)
│   │   ├─ /smv                         (Schneidmühle SMV)
│   │   ├─ /sx                          (Schneidmühlen SX Hochleistung)
│   │   ├─ /sr                          (Rohrmühlen SR)
│   │   ├─ /lp                          (Profilmühle LP)
│   │   └─ /rotorvarianten              (Übersicht aller Rotor-Typen)
│   ├─ /maschinen/hammermuehlen/
│   ├─ /maschinen/feinmuehlen/
│   ├─ /maschinen/waschanlagen/
│   │   ├─ /einweichschnecke
│   │   ├─ /waschtrommel
│   │   ├─ /friktionswaescher
│   │   ├─ /intensivwaescher
│   │   ├─ /trockner
│   │   ├─ /trennbehaelter
│   │   ├─ /silos
│   │   └─ /materialtrennung
│   ├─ /maschinen/peripherie/
│   │   ├─ /absauganlagen
│   │   ├─ /feingutabscheider
│   │   ├─ /zick-zack-sichter
│   │   ├─ /metalldetektoren
│   │   └─ /taumelsiebmaschine
│   └─ /maschinen/mobile-anlagen/
│
├─ /branchen/                           ANWENDUNGEN (Customer-Journey)
│   ├─ /branchen/kunststoffrecycling/
│   │   ├─ /pet-flaschen                (mit Prozessdiagramm)
│   │   ├─ /folienabfaelle              (mit Prozessdiagramm)
│   │   └─ /getraenkekaesten            (mit Prozessdiagramm)
│   ├─ /branchen/autoreifen/
│   ├─ /branchen/kabel-altkabel/
│   ├─ /branchen/holz/
│   ├─ /branchen/kautschuk/
│   └─ /branchen/daemmstoffe/
│
├─ /gebrauchtmaschinen/                 GEBRAUCHTMASCHINEN
├─ /service/                            SERVICE-HUB
│   ├─ /service/ersatzteile/
│   ├─ /service/reparaturen/
│   ├─ /service/zubehoer/
│   └─ /service/technikum/              (Probemahlungen, neue Seite!)
│
├─ /unternehmen/                        ÜBER UNS HUB
│   ├─ /unternehmen/ueber-uns/
│   ├─ /unternehmen/historie/           (neu — 1995–heute)
│   ├─ /unternehmen/standort/
│   ├─ /unternehmen/mitgliedschaften/   (VDMA, PRE, PREVENT)
│   └─ /unternehmen/nachhaltigkeit/     (neu — Recycling-Story)
│
├─ /karriere/                           KARRIERE-HUB
│   ├─ /karriere/stellenangebote/
│   ├─ /karriere/ausbildung/
│   └─ /karriere/initiativbewerbung/
│
├─ /aktuelles/                          NEWS + MESSEN
│   ├─ /aktuelles/news/
│   └─ /aktuelles/messen/
│
├─ /downloads/                          DOWNLOADS-CENTER (mit Filter)
│
├─ /kontakt/                            KONTAKT
│   ├─ /kontakt/anfrage/                (technischer Fragebogen)
│   ├─ /kontakt/ersatzteil-anfrage/
│   ├─ /kontakt/ansprechpartner/
│   └─ /kontakt/anfahrt/
│
└─ /rechtliches/
    ├─ /impressum
    ├─ /datenschutz
    ├─ /agb
    └─ /einkaufsbedingungen
```

**Sprach-Routing:**
- **Phase 1: nur Deutsch** — alle Routen direkt unter `/`, ohne `/de`-Präfix
- Phase 2 (später): `/en/`, `/fr/`, `/es/` mit next-intl nachrüsten
- Struktur trotzdem so anlegen, dass i18n später ohne Bruch ergänzbar ist (Texte aus zentralen Dateien beziehen, keine inline-Strings in Komponenten verstreuen)

---

## 5. Page-Templates (was zu bauen ist)

### Template 1: Homepage
- **Hero:** Vollbild-Video (Maschine im Einsatz, Slow-Motion) + großes Statement
- **Trust Bar:** Logos VDMA, PRE, PREVENT + "Seit 1995" + "70 Mitarbeiter" + "40 Länder"
- **6 Produktkategorien:** Bento-Grid Layout, jede Card = Bild + Titel + Subtitel
- **3 Branchenlösungen:** Featured Application Cards (PET, Folien, Getränkekästen)
- **Prozess-Animation:** "So funktioniert eine Waschanlage" — interaktive Stages
- **News-Section:** 3 letzte Aktualisierungen (Schneidmühlen Zwangsbeschickung etc.)
- **Messen-CTA:** Großer Block "Treffen Sie uns auf der K-Messe 2025"
- **Footer-CTA:** "Probemahlung anfragen" oder "Datenblatt herunterladen"

### Template 2: Produkt-Kategorie-Seite (z.B. /maschinen/schneidmuehlen/)
- **Hero:** Statisches Hero-Bild + Kategorie-Headline + 1 Satz Beschreibung
- **Filter-Sidebar:** Material, Durchsatz, Rotordurchmesser
- **Product Cards Grid:** Bild + Typenname + Kernspecs + Link zum Detail
- **Anwendungsbereiche:** Material-Tags (PET, PVC, PE/PP etc.)
- **Vergleichstabelle:** Alle Modelle nebeneinander

### Template 3: Produkt-Detail-Seite (z.B. /maschinen/schneidmuehlen/sm)
- **Hero:** Großes Produktbild + Typenname + 2-3 Kern-USPs
- **Sticky CTA-Bar:** "Anfrage stellen" + "Datenblatt PDF" + "Video ansehen"
- **Beschreibung:** Lead-Paragraph + Detail
- **Video-Section:** Eingebettete Videos (alle für dieses Produkt)
- **Technische Daten:** Modern gestaltete Tabelle (alle Modellgrößen)
- **Rotorvarianten:** Visualisierte Auswahlmöglichkeiten
- **Anwendungsbereiche:** Material-Liste mit Icons
- **Verwandte Produkte:** Cross-Sell
- **CTA-Footer:** Anfrage / Datenblatt

### Template 4: Branchen-Seite (z.B. /branchen/kunststoffrecycling/pet-flaschen)
- **Hero:** Video oder großes Bild der Endanwendung
- **Problem-Lösung:** "Aus PET-Flaschen wird X"
- **Prozess-Diagramm:** Interaktiv, 14 Stufen klickbar → jede Stage zeigt verwendete Maschine
- **Maschinen-Liste:** Alle in diesem Prozess verwendeten Maschinen als Cards
- **Case Study:** Optional Kundenreferenz
- **CTA:** "Komplettanlage anfragen"

### Template 5: Standard Content (Über uns, Service)
- Hero mit Header-Bild
- Content-Spalten (max. 65–75 ch Breite)
- Inline-Bilder, Quotes, Lists
- CTA-Footer

### Template 6: Kontakt
- Split-Layout: Form links, Ansprechpartner-Liste rechts
- Map embed (statisch, keine Google-Maps-Tracking)
- Anfahrt
- Sticky-Floating-Telefon-Button auf Mobile

### Template 7: News-Artikel
- Großes Hero-Bild
- Datum + Kategorie-Badge
- Schmale Content-Column (max. 720 px)
- Author-Info am Ende
- "Verwandte Artikel"

### Template 8: Karriere-Stelle
- Job-Headline + Standort + Typ-Tags
- Aufgaben/Anforderungen/Wir bieten Listen
- Bewerbung-Form direkt auf Seite
- CTA: "Jetzt bewerben"

---

## 6. Komponenten-Bibliothek

### Layout
- `<SiteHeader />` — Sticky, mit Mega-Menu auf Desktop, Hamburger auf Mobile
- `<MegaMenu />` — Animiertes Dropdown mit Bildern
- `<MobileMenu />` — Vollbild-Overlay mit Akkordeon
- `<SiteFooter />` — 4-Column, Newsletter, Social, Rechtliches
- `<LanguageSwitcher />` — Dropdown mit Flags
- `<Container />` — Responsive Max-Width Wrapper
- `<Section />` — Mit Top/Bottom Padding-Varianten

### Hero & Headers
- `<VideoHero />` — Vollbild-Video, Overlay, CTA
- `<ImageHero />` — Static Hero mit BG-Image
- `<PageHeader />` — Kompakt für Innenseiten

### Cards
- `<ProductCard />` — Mit Bild, Titel, Specs, Link
- `<CategoryCard />` — Größer für Homepage
- `<NewsCard />` — Für Blog/News-Listings
- `<FeatureCard />` — Icon + Text für Features

### Content
- `<SpecTable />` — Responsive Tabelle mit Sticky-Header auf Scroll
- `<ProcessDiagram />` — Interaktive Stufen-Visualisierung
- `<VideoPlayer />` — Custom Player mit Thumbnail-Preview
- `<ImageGallery />` — Lightbox mit Keyboard-Nav
- `<DownloadButton />` — Mit Datei-Icon, Größe, Format
- `<CodeBlock />` — Für technische Specs (Mono-Font)

### Forms
- `<ContactForm />` — Standard Anfrage
- `<TechnicalQuestionnaire />` — Geführter Multi-Step Form
- `<SparePartsForm />` — Ersatzteil-Anfrage
- `<JobApplicationForm />` — Karriere

### Interactive
- `<Accordion />` — FAQs, Detailbereiche
- `<Tabs />` — Produkt-Tabs (Specs, Video, Downloads)
- `<Modal />` — Für Video-Fullscreen, Forms
- `<Tooltip />` — Für Spec-Erklärungen
- `<Carousel />` — Für Produktbilder, Testimonials

### Utility
- `<Breadcrumbs />`
- `<Badge />` — Material-Tags, Status
- `<Button />` — Primary, Secondary, Ghost, Link
- `<Link />` — Mit Hover-Underline-Animation

---

## 7. Implementation Roadmap

### **Phase 0 — Setup (Tag 1, ~1 Stunde)**

Repo existiert bereits, GitHub Pages ist auf "GitHub Actions" gesetzt. Wir verbinden lokales Setup mit dem Remote-Repo.

```bash
# Auf dem MacBook:
cd ~/Code   # oder dein Projekte-Verzeichnis

# Next.js in temporärem Ordner erstellen
npx create-next-app@latest neue-herbold --typescript --tailwind --app --src-dir \
  --import-alias "@/*" --no-eslint --turbopack --yes
cd neue-herbold

# Dependencies
npm install framer-motion lucide-react @hookform/resolvers react-hook-form zod
npm install -D prettier prettier-plugin-tailwindcss

# shadcn/ui
npx shadcn@latest init -d
npx shadcn@latest add button card dialog input textarea label select tabs accordion sheet

# Mit bestehendem Repo verbinden
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/volljonas45-byte/NEUE-HERBOLD-Maschinen-u.-Anlagenbau-GmbH.git
git branch -M main
git pull origin main --allow-unrelated-histories --no-edit || true
```

**Next.js Static Export konfigurieren** in `next.config.ts`:

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

`basePath` ist nur in Production aktiv → lokal läuft alles auf `localhost:3000` ohne Pfad-Prefix, in Production stimmen die Asset-Pfade automatisch.

**Setup Tasks:**
- [ ] Next.js Projekt erstellt
- [ ] Dependencies installiert
- [ ] `next.config.ts` mit Static Export + `basePath` konfiguriert
- [ ] Tailwind v4 mit Markenfarben konfiguriert (siehe Phase 1)
- [ ] shadcn/ui initialisiert
- [ ] Font Inter via `next/font/google` eingebunden
- [ ] `src/data/` Struktur für Produkt-Daten angelegt
- [ ] `.github/workflows/deploy.yml` angelegt (siehe Sektion 15)
- [ ] PLAN.md, PROGRESS.md, WORKFLOW.md, CONTENT.md, CLAUDE-START-PROMPT.md ins Repo kopiert
- [ ] Mit Remote verbunden, erster Push erfolgreich
- [ ] GitHub Action durchgelaufen
- [ ] Live-URL erreichbar
- [ ] PROGRESS.md aktualisiert

**Sobald das steht:** jeder Push auf `main` deployed automatisch live. Du kannst auf jedem Gerät den aktuellen Stand sehen.

### **Phase 1 — Design System (Tag 1, Rest des Tages)**

- [ ] Color Tokens in `globals.css` definieren (Light + Dark Modes)
- [ ] Typography-Skala in Tailwind Config
- [ ] Container-Komponente mit Breakpoints (inkl. 3xl, 4xl)
- [ ] Button-Komponente (alle Varianten)
- [ ] Logo-Komponente (SVG)
- [ ] Layout-Wrapper mit Header + Footer
- [ ] Theme Provider (Light Default, Dark optional)

### **Phase 2 — Header & Navigation (Tag 2, vormittag)**

- [ ] `SiteHeader` mit Sticky-Verhalten + Scroll-Hide
- [ ] Mega-Menu für 5 Hauptkategorien
- [ ] Mobile-Menu (Vollbild-Overlay)
- [ ] Language-Switcher
- [ ] Search-Funktion (lokal, ohne Backend)
- [ ] Breadcrumbs

### **Phase 3 — Homepage (Tag 2, nachmittag + Tag 3)**

- [ ] Hero mit Video-BG (Placeholder erstmal)
- [ ] Trust-Bar (VDMA, PRE, etc.)
- [ ] Produktkategorien-Grid (Bento-Style)
- [ ] Branchen-Highlights
- [ ] Prozess-Animation (Waschanlage)
- [ ] News-Section
- [ ] Messen-Banner (K-Messe 2025)
- [ ] Footer mit Newsletter

### **Phase 4 — Produktseiten (Tag 4–5)**

- [ ] Kategorie-Hub-Template (`/maschinen/[category]/page.tsx`)
- [ ] Produkt-Detail-Template (`/maschinen/[category]/[slug]/page.tsx`)
- [ ] Daten-Migration aus `neue-herbold-website-analyse.md` in TypeScript-Files
- [ ] SpecTable-Komponente bauen
- [ ] VideoPlayer-Komponente
- [ ] Verwandte-Produkte-Logik

### **Phase 5 — Branchen-Seiten (Tag 6)**

- [ ] Branchen-Template
- [ ] Prozess-Diagramm-Komponente (interaktiv, animiert)
- [ ] 3 Detail-Seiten: PET, Folien, Getränkekästen
- [ ] Material-Tag-System

### **Phase 6 — Service / Karriere / Über uns (Tag 7)**

- [ ] Standard Content-Template
- [ ] Karriere-Job-Template
- [ ] Bewerbungsformular
- [ ] Über-uns mit Team/Werkshalle-Bildern

### **Phase 7 — Kontakt & Formulare (Tag 8)**

- [ ] Kontakt-Seite Split-Layout
- [ ] Technischer Fragebogen (Multi-Step Form, client-side State)
- [ ] Ersatzteil-Anfrage-Form
- [ ] Formspree (oder Web3Forms) als Form-Backend einbinden — Static-Export-kompatibel
- [ ] Anti-Spam: Honeypot-Feld + Formspree-internes Captcha
- [ ] Erfolg/Fehler-States client-seitig handeln

### **Phase 8 — News / Messen / Downloads (Tag 9)**

- [ ] News-Listing + Article Template (MDX)
- [ ] Messen-Timeline-Komponente
- [ ] Downloads-Center mit Filter

### **Phase 9 — SEO + Performance (Tag 10)**

- [ ] Sitemap.xml + robots.txt (statisch generiert)
- [ ] OpenGraph Tags + Twitter Cards für jede Seite
- [ ] Schema.org JSON-LD für Produkte
- [ ] Meta-Descriptions pro Seite
- [ ] Lighthouse-Audit → 95+ in allen Kategorien
- [ ] Bilder vorab optimieren (Sharp/Squoosh) da `unoptimized: true`
- [ ] Texte aus zentralen Files beziehen (vorbereitung für späteren i18n-Switch)

### **Phase 10 — Launch-Vorbereitung (Tag 11–12)**

Deployment läuft seit Tag 1 — hier geht es um die finale Politur.

- [ ] Inhalts-QA (alles vom alten Site übertragen?)
- [ ] Cross-Browser-Test (Safari, Chrome, Firefox, Edge)
- [ ] Device-Test (375px → 4K Ultrawide)
- [ ] Cookie-Banner (GDPR-konform) — falls Analytics aktiv
- [ ] Impressum + Datenschutz + AGB einpflegen
- [ ] Final Lighthouse + Bundle-Size-Check
- [ ] Live-URL final geprüft + alle internen Links funktionieren
- [ ] OG-Tags + Social-Sharing-Test
- [ ] (optional) Custom Domain via DNS-CNAME
- [ ] Kunden-Demo / Übergabe

---

## 8. Asset-Strategie

### 8.1 Bilder
**Quellen-Plan:**
1. **Existierende Bilder von der Site** — viele sind brauchbar als Übergangslösung, einige Maschinen-Closeups sind okay
2. **Anfrage an Neue Herbold:** professionelle Studio-Shots der Maschinen
3. **Werkshallen-Fotos** für "Über uns" — entweder Neue Herbold liefert oder Foto-Shooting beauftragen
4. **Mockups + Placeholder:** Während Entwicklung Premium-Stock (Unsplash Industrial-Set)

**Format-Strategie:**
- Hero-Images: 2560×1440 (für Ultrawide), 1920×1080 (Standard), 768×1024 (Mobile)
- Produkt-Cards: 800×600 (16:9 oder 4:3)
- Thumbnails: 400×400
- Alle in AVIF/WebP via next/image

### 8.2 Videos
**Strategie:**
- 14 YouTube-Videos aus der Liste herunterladen (yt-dlp)
- Selbst hosten als MP4/WebM auf Vercel Blob Storage oder CDN
- Custom Player ohne YouTube-Branding
- Auto-Loop für Hero-Videos (ohne Audio)
- Mit-Audio-Optionen für Produktdemos

**Befehle für Tag 1:**
```bash
brew install yt-dlp
mkdir -p assets/videos
# Beispiel:
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" \
  -o "assets/videos/%(title)s.%(ext)s" \
  https://www.youtube.com/watch?v=ssMCAo14qYk
# Für alle 13 Videos aus PLAN.md durchgehen
```

### 8.3 Logos & Icons
- Logo als SVG (vektoriell, scaliert verlustfrei)
- Favicon-Set (favicon.ico, apple-touch-icon, manifest-icons)
- VDMA / PRE / PREVENT Logos (offizielle Sources downloaden)
- Lucide Icons für UI

---

## 9. Content-Migration

Aus `neue-herbold-website-analyse.md` (im selben Ordner) extrahieren:

### Datei-Struktur für Content:
```
src/data/
├─ products/
│   ├─ vorzerkleinerung/
│   │   ├─ einwellenschredder-hzr.ts
│   │   ├─ zweiwellenschredder-zrm.ts
│   │   ├─ rohrschredder-hzr.ts
│   │   ├─ styroporshredder-rl.ts
│   │   ├─ schneckenbrecher-sb.ts
│   │   └─ guillotinescheren-gs.ts
│   ├─ schneidmuehlen/
│   │   ├─ lm.ts
│   │   ├─ sm.ts
│   │   ├─ smv.ts
│   │   ├─ sx.ts
│   │   ├─ sr.ts
│   │   └─ lp.ts
│   ├─ hammermuehlen/hm.ts
│   ├─ feinmuehlen/zm.ts
│   └─ waschanlagen/...
├─ industries/
│   ├─ pet-flaschen.ts          (mit 14-Stufen-Prozess)
│   ├─ folienabfaelle.ts        (13-Stufen)
│   └─ getraenkekaesten.ts      (14-Stufen)
├─ news/
│   ├─ zm800-ueberarbeitet.mdx
│   ├─ zwangsbeschickung.mdx
│   └─ sm-erweiterung.mdx
├─ tradeshows.ts                (alle Messen 2024/2025)
├─ team.ts                      (alle Ansprechpartner)
└─ jobs.ts                      (Stellenangebote)
```

### Beispiel-Schema für Produkt:
```typescript
export const schneidmuehleSM: Product = {
  slug: "sm",
  name: "Schneidmühle SM",
  category: "schneidmuehlen",
  hero: {
    image: "/products/sm-hero.jpg",
    video: "/videos/sm800-pvc.mp4",
    tagline: "Robust und vielseitig — für massive Klumpen und voluminöse Hohlkörper"
  },
  description: "...",
  usps: ["Doppelschrägschnitt", "Außen gelagerte Welle", "Nassausführung verfügbar"],
  applications: ["PVC", "PA-Fasern", "Kautschuk", "Getränkekästen", ...],
  videos: [
    { url: "/videos/sm800-pvc.mp4", title: "SM 800 mit PVC Profilen" },
    { url: "/videos/sm-pe-pp.mp4", title: "SM mit PE/PP Rohren" }
  ],
  models: [
    { type: "SM 300/300", a: 920, b: 1720, c: 290, d: 1130, e: 500 },
    // ... alle 16 Modelle aus der Analyse
  ],
  rotorVariants: ["L3", "S5", "H7", "N9", "G3"],
  downloads: [
    { name: "Datenblatt SM-Serie", file: "/downloads/sm-datasheet.pdf", size: "2.4 MB" }
  ],
  relatedProducts: ["lm", "smv"]
};
```

---

## 10. SEO-Strategie

### URL-Slugs (sprechend, kurz)
- ✅ `/maschinen/schneidmuehlen/sm`
- ❌ `/de/category/nachzerkleinerung/schneidmuehle-sm/`

### Meta-Tags pro Seite
```typescript
export const metadata: Metadata = {
  title: "Schneidmühle SM | Robust für massive Kunststoffe | Neue Herbold",
  description: "Die SM-Serie...",
  openGraph: {
    images: ["/og/sm-product.jpg"],
    // ...
  }
};
```

### Schema.org JSON-LD
Pro Produkt: `Product` + `Manufacturer` + `Offer`
Pro Standort: `LocalBusiness` + `Organization`

### Sitemap automatisch generiert
`/sitemap.xml` via Next.js `sitemap.ts`

---

## 11. Performance-Targets

| Metrik | Ziel |
|---|---|
| Lighthouse Performance | ≥95 |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| LCP | <1.5s |
| CLS | <0.1 |
| FID/INP | <100ms |
| Bundle Size First Load | <100kb JS |

**Maßnahmen:**
- next/image überall
- Lazy-Loading unter dem Fold
- Font-Subset für Latin
- CSS-in-JS vermeiden (nur Tailwind)
- Server Components als Default, Client nur wo nötig
- Videos nur als Poster bis Click

---

## 12. Checkliste für Morgen (Quickstart)

**Vorab (heute Abend):**
- [ ] Diesen Plan auf den Mac syncen (OneDrive)
- [ ] Figma-Account oder Sketch bereit für ggf. Logo
- [ ] Akzentfarbe entscheiden: Orange / Cyan / Rot (Empfehlung: Orange)
- [ ] Domain-Strategie: bleibt neue-herbold.com? (Falls Kunde, fragen)

**Schritt 1 — Setup (30 Min):**
```bash
cd ~/Code  # oder wo dein Projekte-Ordner liegt
npx create-next-app@latest neue-herbold --typescript --tailwind --app --src-dir --import-alias "@/*"
cd neue-herbold
git init && git add . && git commit -m "init"
gh repo create neue-herbold --private --source=. --remote=origin --push  # optional
code .  # VS Code öffnen
```

**Schritt 2 — Claude Code starten:**
```bash
claude
```

**Schritt 3 — Erste Prompt an Claude Code:**
> "Lies die Datei PLAN.md und neue-herbold-website-analyse.md aus dem Projekt-Ordner. Wir starten mit Phase 0 + Phase 1 aus dem Plan: Setup vollständig und Design-System implementieren. Akzentfarbe: Industrial Orange (#EA580C). Beginne mit dem Tailwind-Setup, den Color-Tokens und der Container-/Button-Komponente."

**Dann Phase für Phase durch den Plan, jeden Morgen mit Claude Code arbeiten.**

---

## 13. Getroffene Entscheidungen

1. **Farben:** ✅ **Markenfarben übernommen** — tiefes Blau + Cyan, refined (siehe Sektion 2.1)
2. **Sprachen Phase 1:** ✅ **Nur Deutsch** — Struktur für späteren i18n-Switch vorbereitet
3. **CMS:** ✅ **Hardcoded TypeScript/MDX** — kein CMS in Phase 1
4. **Domain:** ✅ **Erstmal GitHub Pages** (`<username>.github.io/neue-herbold`) — Custom Domain später
5. **Logo:** ✅ **Einfache Wortmarke** als Platzhalter — wird später durch echtes Logo ersetzt
6. **Dark/Light Mode:** ✅ Light für Produktseiten, Dark für Hero & Footer (kein User-Toggle nötig)
7. **Hosting:** ✅ **GitHub Pages** via GitHub Actions (Static Export)
8. **Forms:** ✅ **Formspree / Web3Forms** — statt Server Actions (GitHub Pages = statisch)

---

## 14. Risiken & Mitigation

| Risiko | Mitigation |
|---|---|
| Echte Maschinenbilder nicht verfügbar | Stock + Maschinenfotografie-Anfrage parallel |
| Videos zu lang zum Hosten | Mit ffmpeg auf 1080p/30fps komprimieren, max 30s Loops |
| i18n-Texte fehlen | Phase 1 nur DE, andere als TODO |
| Kunde will alte Inhalte 1:1 | Wir behalten 100% Content (siehe Analyse-Datei), nur Struktur+Design neu |
| Performance bei vielen Maschinenseiten | SSG (Static Generation), ISR für News |

---

## 15. GitHub Pages — Deployment-Workflow

**Datei:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - run: npm ci
      - run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

**In `package.json`:**
```json
{
  "scripts": {
    "build": "next build"
  }
}
```

Mit `output: 'export'` baut Next.js automatisch ins `./out/` Verzeichnis.

**Aktivierung in GitHub Settings:**
1. Repository → Settings → Pages
2. Source: **GitHub Actions**
3. Beim ersten Push auf `main` läuft die Action automatisch
4. URL: `https://<username>.github.io/neue-herbold/`

**`basePath` in `next.config.ts`** ist wichtig damit Assets korrekt geladen werden (siehe Phase 0 oben).

---

## 16. Files in diesem Projekt-Ordner

```
OneDrive/NEUE HERBOLD/                       ← Initiale Plan-Ablage
├─ PLAN.md                                    ← Du bist hier (Master-Plan)
├─ PROGRESS.md                                ← Status-Tracking (lebt im Repo)
├─ WORKFLOW.md                                ← Multi-Device-Workflow
├─ QUICKSTART.md                              ← Was tun beim ersten Setup
├─ CLAUDE-START-PROMPT.md                     ← Erst-Prompt für Claude Code
└─ neue-herbold-website-analyse.md           ← Content-Crawl (wird zu CONTENT.md)

Repo/                                         ← Sobald gesetzt
├─ PLAN.md, PROGRESS.md, WORKFLOW.md, CONTENT.md, CLAUDE-START-PROMPT.md
├─ src/                                       ← Code
├─ public/                                    ← Bilder, Videos
└─ .github/workflows/deploy.yml               ← Auto-Deploy
```

**Wichtig:** Sobald das Repo läuft, sind die Files im Repo die Quelle der Wahrheit. OneDrive ist nur die initiale Ablage.

---

**Bist du bereit für morgen? Letzte Fragen heute Abend stellen, dann am Mac aufschlagen und durchstarten.**
