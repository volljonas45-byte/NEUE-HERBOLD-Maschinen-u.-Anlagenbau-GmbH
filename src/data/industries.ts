export type ProcessStep = {
  n: number;
  title: string;
  machine?: string;
  detail?: string;
};

export type Industry = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  throughput: string;
  steps: ProcessStep[];
  machines: string[];
  relatedIndustrySlugs: string[];
};

export type IndustryCategory = {
  slug: string;
  name: string;
  shortDesc: string;
  industries: Industry[];
};

/* ─── Kunststoffrecycling ─────────────────────────────────────────── */

const petFlaschen: Industry = {
  slug: "pet-flaschen",
  name: "PET-Flaschen Recycling",
  category: "Kunststoffrecycling",
  categorySlug: "kunststoffrecycling",
  tagline: "Aus gebrauchten PET-Flaschen wird hochwertiges Rezyklat — 14-stufiger Prozess",
  description:
    "Das PET-Flaschen-Recycling ist einer der wichtigsten Kunststoff-Recyclingprozesse weltweit. NEUE HERBOLD liefert den kompletten 14-stufigen Aufbereitungsprozess aus einer Hand: von der Schneidmühle über Waschanlagen bis zum fertigen PET-Flake. Durchsatz ca. 500 kg/h.",
  throughput: "ca. 500 kg/h",
  steps: [
    { n: 1, title: "Sortierband (manuell)", detail: "Manuelle Vorsortierung und Fremdstoffentfernung" },
    { n: 2, title: "Schrägförderband", detail: "Transport zum Zerkleinerungsaggregat" },
    { n: 3, title: "Metallsuchbrücke", detail: "NE-Metallortung — Schutz der nachfolgenden Maschinen" },
    { n: 4, title: "Schneidmühle LM 450/1000", machine: "LM 450/1000", detail: "Zerkleinerung auf 10–15 mm, Trockenzerkleinerung" },
    { n: 5, title: "Absauganlage", detail: "Entstaubung, Etikettenentfernung" },
    { n: 6, title: "Feingutabscheider HS", machine: "HS", detail: "Aufkleber und Feinstoffe entfernen" },
    { n: 7, title: "Puffersilo FS", machine: "FS", detail: "Pufferung vor dem Nassbereich" },
    { n: 8, title: "Intensivwäscher IW", machine: "IW", detail: "Intensive Oberflächenreinigung" },
    { n: 9, title: "Weiche (optional)", detail: "Materialweiche für Sortierlinie" },
    { n: 10, title: "Trennbehälter TB", machine: "TB", detail: "Schwimm-Sink-Trennung: PET >1 g/cm³ vs. PE/PP <1 g/cm³" },
    { n: 11, title: "Mechanischer Trockner TM", machine: "TM", detail: "Mechanische Entwässerung auf < 5 % Restfeuchte" },
    { n: 12, title: "Absauganlage", detail: "Endstaubreinigung" },
    { n: 13, title: "Thermischer Trockner TT", machine: "TT", detail: "Restfeuchte < 1 % — für Food-Grade-Qualität" },
    { n: 14, title: "Feingutabscheider HS", machine: "HS", detail: "Finale Reinigung des PET-Flakes" },
  ],
  machines: ["LM 450/1000", "Feingutabscheider HS", "Puffersilo FS", "Intensivwäscher IW", "Trennbehälter TB", "Mechanischer Trockner TM", "Thermischer Trockner TT"],
  relatedIndustrySlugs: ["folienabfaelle", "getraenkekaesten"],
};

const folienabfaelle: Industry = {
  slug: "folienabfaelle",
  name: "Folienabfälle PE/PP",
  category: "Kunststoffrecycling",
  categorySlug: "kunststoffrecycling",
  tagline: "Ballenware bis 2.000 kg/h aufbereiten — 13-stufiger Prozess",
  description:
    "Folienabfälle aus Industrie, Landwirtschaft und Haushalten werden in diesem 13-stufigen Prozess zu sauberem PE/PP-Rezyklat aufbereitet. NEUE HERBOLD liefert die komplette Anlage: Zweiwellenschredder zur Vorzerkleinerung, mehrstufige Wäsche und thermische Trocknung.",
  throughput: "bis 2.000 kg/h",
  steps: [
    { n: 1, title: "1- oder 2-Wellenschredder", machine: "ZRM / HZR", detail: "Vorzerkleinerung der Ballenware" },
    { n: 2, title: "Austragsband", detail: "Transport zum Nassbereich" },
    { n: 3, title: "Feingutabscheider HS", machine: "HS", detail: "Feinstoffe und Stäube entfernen" },
    { n: 4, title: "Foliensilo FS", machine: "FS", detail: "Pufferung vor der Waschstrecke" },
    { n: 5, title: "Einweichschnecke ES", machine: "ES", detail: "Vorweichen und Auflockerung im Wasserbed" },
    { n: 6, title: "Intensivwäscher IW", machine: "IW", detail: "Intensivreinigung der Folienflakes" },
    { n: 7, title: "Absauganlage", detail: "Entstaubung nach dem Wäscher" },
    { n: 8, title: "Schneidmühle", machine: "SM / LM", detail: "Feinzerkleinerung auf ~10 mm Körnung" },
    { n: 9, title: "Absauganlage", detail: "Endstaubreinigung" },
    { n: 10, title: "Trennbehälter TB", machine: "TB", detail: "Schwimm-Sink-Trennung nach Dichte" },
    { n: 11, title: "Verteilerschnecke", detail: "Gleichmäßige Verteilung auf Trocknungsaggregate" },
    { n: 12, title: "Mechanischer Trockner TM", machine: "TM", detail: "Zentrifugale Entwässerung" },
    { n: 13, title: "Thermischer Trockner TT", machine: "TT", detail: "Restfeuchte < 1 Gew.-%" },
  ],
  machines: ["Zweiwellenschredder ZRM", "Feingutabscheider HS", "Einweichschnecke ES", "Intensivwäscher IW", "Schneidmühle SM", "Trennbehälter TB", "Mechanischer Trockner TM", "Thermischer Trockner TT"],
  relatedIndustrySlugs: ["pet-flaschen", "getraenkekaesten"],
};

const getraenkekaesten: Industry = {
  slug: "getraenkekaesten",
  name: "Getränkekästen PE/PP",
  category: "Kunststoffrecycling",
  categorySlug: "kunststoffrecycling",
  tagline: "Altgetränkekästen zu PE/PP-Granulat — 14-stufiger Prozess bis 1.500 kg/h",
  description:
    "Gebrauchte Getränkekästen aus PE/PP werden in diesem vollautomatischen 14-stufigen Prozess zu sauberem Granulat aufbereitet. Der Einwellenschredder HZR 1300 übernimmt die grobe Vorzerkleinerung, anschließend folgen Waschung, Trocknung und Abfüllung.",
  throughput: "bis 1.500 kg/h",
  steps: [
    { n: 1, title: "Pufferband", detail: "Zufuhr der Altgetränkekästen" },
    { n: 2, title: "Schrägförderband", detail: "Transport zur Vorzerkleinerung" },
    { n: 3, title: "Einwellenschredder HZR 1300/1", machine: "HZR 1300", detail: "Vorzerkleinerung auf 30–50 mm Stückgröße" },
    { n: 4, title: "Austragsband", detail: "Abtransport des Schredder-Outputs" },
    { n: 5, title: "Puffersilo FS", machine: "FS", detail: "Pufferung vor dem Nassbereich" },
    { n: 6, title: "Vortrenn-/Einweichschnecke", machine: "ES", detail: "Glas, Metall und Steine raus — Vorweichen" },
    { n: 7, title: "Transportschnecke", detail: "Entwässerung und Transport" },
    { n: 8, title: "Schneidmühle", machine: "SM", detail: "Feinzerkleinerung auf ~10 mm Körnung" },
    { n: 9, title: "Absauganlage", detail: "Entstaubung" },
    { n: 10, title: "Mechanischer Trockner TM", machine: "TM", detail: "Zentrifugale Entwässerung" },
    { n: 11, title: "Thermischer Trockner TT", machine: "TT", detail: "Restfeuchte < 1 Gew.-%" },
    { n: 12, title: "Pneumatische Förderung", detail: "Big-Bag-Abfüllstation" },
    { n: 13, title: "Schmutzwasserpumpe", detail: "Abwasserkreislauf" },
    { n: 14, title: "Taumelsiebmaschine TSM", machine: "TSM", detail: "Schwebeteile aus Abwasser entfernen" },
  ],
  machines: ["Einwellenschredder HZR 1300", "Einweichschnecke ES", "Schneidmühle SM", "Mechanischer Trockner TM", "Thermischer Trockner TT", "Taumelsiebmaschine TSM"],
  relatedIndustrySlugs: ["pet-flaschen", "folienabfaelle"],
};

/* ─── Category Registry ───────────────────────────────────────────── */

export const industryCategories: IndustryCategory[] = [
  {
    slug: "kunststoffrecycling",
    name: "Kunststoffrecycling",
    shortDesc: "PET · PE/PP · Folien · Getränkekästen",
    industries: [petFlaschen, folienabfaelle, getraenkekaesten],
  },
  {
    slug: "autoreifen",
    name: "Autoreifen",
    shortDesc: "Gummigranulat & Gummimehl · Devulkanisierung",
    industries: [],
  },
  {
    slug: "kabel-altkabel",
    name: "Kabel & Altkabel",
    shortDesc: "Cu / Al-Rückgewinnung",
    industries: [],
  },
  {
    slug: "holz",
    name: "Holz",
    shortDesc: "Hackschnitzel · Biomasse · Paletten",
    industries: [],
  },
  {
    slug: "kautschuk",
    name: "Kautschuk",
    shortDesc: "Temperaturschonende Aufbereitung",
    industries: [],
  },
  {
    slug: "daemmstoffe",
    name: "Dämmstoffe",
    shortDesc: "EPS · PUR · Mineralwolle",
    industries: [],
  },
];

/* ─── Helpers ─────────────────────────────────────────────────────── */

export function getIndustryCategoryBySlug(slug: string): IndustryCategory | undefined {
  return industryCategories.find((c) => c.slug === slug);
}

export function getIndustryBySlug(catSlug: string, slug: string): Industry | undefined {
  const cat = getIndustryCategoryBySlug(catSlug);
  return cat?.industries.find((i) => i.slug === slug);
}
