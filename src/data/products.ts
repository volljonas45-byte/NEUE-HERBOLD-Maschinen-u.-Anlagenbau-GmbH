export type ModelSpec = {
  type?: string;
  [key: string]: string | number | undefined;
};

export type ProductVideo = {
  ytId: string;
  title: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  usps: string[];
  applications: string[];
  videos: ProductVideo[];
  specHeaders: string[];
  models: ModelSpec[];
  relatedSlugs: string[];
};

export type Category = {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  products: Product[];
};

/* ─── Vorzerkleinerung ────────────────────────────────────────────── */

const einwellenschredder: Product = {
  slug: "einwellenschredder",
  name: "Einwellenschredder HZR",
  shortName: "HZR",
  category: "vorzerkleinerung",
  tagline: "Leistungsstarke Vorzerkleinerung für Ballenwaren und massive Klumpen",
  description:
    "Der Einwellenschredder HZR übernimmt die grobe Vorzerkleinerung von Ballenwaren, massiven Kunststoffklumpen, DSD-Abfällen und Ersatzbrennstoffen. Hydraulisch gesteuerter Schieber, Hydro-Kupplung und automatische Reversierung sorgen für störungsfreien Dauerbetrieb.",
  usps: [
    "Hydraulisch gesteuerter Beschickungsschieber",
    "Hydro-Kupplung schützt vor Überlast",
    "Automatische Reversierung",
    "Auswechselbare Messerhalter",
  ],
  applications: [
    "Ballenwaren",
    "Massive Kunststoffklumpen",
    "DSD-Abfälle",
    "Ersatzbrennstoffe",
    "Spritzguss-Angüsse",
  ],
  videos: [],
  specHeaders: ["Typ", "Rotordurchmesser (mm)", "Arbeitsbreite (mm)"],
  models: [
    { type: "HZR 800", "Rotordurchmesser (mm)": 400, "Arbeitsbreite (mm)": 800 },
    { type: "HZR 1300", "Rotordurchmesser (mm)": 400, "Arbeitsbreite (mm)": 1300 },
    { type: "HZR 1600", "Rotordurchmesser (mm)": 600, "Arbeitsbreite (mm)": 1600 },
  ],
  relatedSlugs: ["zweiwellenschredder", "schneckenbrecher"],
};

const zweiwellenschredder: Product = {
  slug: "zweiwellenschredder",
  name: "Zweiwellenschredder ZRM",
  shortName: "ZRM",
  category: "vorzerkleinerung",
  tagline: "Für sperrige Materialien, Folien, Autoreifen und Fässer",
  description:
    "Der Zweiwellenschredder ZRM zerkleinert sperrige Materialien durch langsam laufende Reißwellen. Elektrischer oder hydraulischer Antrieb, optionaler Anpressstempel und automatische Reversierung machen ihn zur ersten Wahl für schwierige Materialien.",
  usps: [
    "Langsam laufende Reißwellen — wenig Lärm",
    "Elektrischer oder hydraulischer Antrieb",
    "Optionaler hydraulischer Anpressstempel",
    "Automatische Reversierung",
  ],
  applications: ["Folien", "Autoreifen", "Fässer", "Sperrige Hohlkörper", "Ballenware"],
  videos: [],
  specHeaders: ["Typ", "Querschnitt im Mahlraum (mm)"],
  models: [
    { type: "ZRM 1100/2 (Zweiwellen)", "Querschnitt im Mahlraum (mm)": "1030 × 800" },
    { type: "ZRM 1100/4 (Vierwellen)", "Querschnitt im Mahlraum (mm)": "1030 × 1550" },
  ],
  relatedSlugs: ["einwellenschredder", "guillotinescheren"],
};

const rohrschredder: Product = {
  slug: "rohrschredder",
  name: "Rohrschredder HZR",
  shortName: "HZR Rohr",
  category: "vorzerkleinerung",
  tagline: "Dickwandige Rohre bis 1.200 mm Ø — 20–50 % weniger Energie",
  description:
    "Der Rohrschredder HZR ist spezialisiert auf die Zerkleinerung dickwandiger, schlagzäher Rohre bis 1.200 mm Durchmesser und Anfahrklumpen. Das automatische lastabhängige Beschicksystem und die Siemens SIMATIC S7 Steuerung reduzieren den Energieverbrauch gegenüber einstufiger Zerkleinerung um 20–50 %.",
  usps: [
    "20–50 % weniger Energie vs. einstufige Zerkleinerung",
    "Automatisches lastabhängiges Beschicksystem",
    "Siemens SIMATIC S7 mit Touch-Screen",
    "Rohre bis 1.200 mm Ø ohne Vorsägen",
  ],
  applications: ["Dickwandige Rohre", "Schlagzähe Kunststoffe", "Anfahrklumpen"],
  videos: [{ ytId: "ssMCAo14qYk", title: "Rohrschredder HZR in Betrieb" }],
  specHeaders: ["Typ", "Arbeitsbreite", "Wellendurchmesser", "Antrieb", "Querschnitt"],
  models: [
    {
      type: "HZR 1300/2",
      Arbeitsbreite: "1300 mm",
      Wellendurchmesser: "370 mm",
      Antrieb: "2 × 30 kW",
      Querschnitt: "650 × 1300 mm",
    },
    {
      type: "HZR 1300/4",
      Arbeitsbreite: "1300 mm",
      Wellendurchmesser: "370 mm",
      Antrieb: "4 × 30 kW",
      Querschnitt: "1300 × 1350 mm",
    },
  ],
  relatedSlugs: ["einwellenschredder", "schneckenbrecher"],
};

const styroporshredder: Product = {
  slug: "styroporshredder",
  name: "Styroporshredder RL",
  shortName: "RL",
  category: "vorzerkleinerung",
  tagline: "Schonende Zerkleinerung von EPS und PUR-Schäumen",
  description:
    "Der Styroporshredder RL zerkleinert EPS- und PUR-Schäume mit einem messerlosen Schlagkreuzrotor. Korngröße und Sieblochung sind stufenlos einstellbar — ideal für die Schaumstoff-Aufbereitung in der Dämmstoff- und Verpackungsbranche.",
  usps: [
    "Messerloser Schlagkreuzrotor",
    "Einstellbare Korngröße über Kammabstände",
    "Einstellbare Sieblochung",
    "Schonende Aufbereitung empfindlicher Schäume",
  ],
  applications: ["EPS-Schäume", "PUR-Schäume", "Verpackungsmaterial", "Dämmplatten"],
  videos: [],
  specHeaders: ["Typ"],
  models: [{ type: "RL (diverse Ausführungen — auf Anfrage)" }],
  relatedSlugs: ["zweiwellenschredder", "schneckenbrecher"],
};

const schneckenbrecher: Product = {
  slug: "schneckenbrecher",
  name: "Schneckenbrecher SB",
  shortName: "SB",
  category: "vorzerkleinerung",
  tagline: "Holzpaletten, Kabeltrommeln, Porenbetonsteine — zuverlässig zerkleinert",
  description:
    "Der Schneckenbrecher SB verarbeitet ein breites Materialspektrum: Holzpaletten, Kabeltrommeln, Dämmstoffplatten, Porenbetonsteine, Kalksandsteine und Ballen. Paarweise schneckenförmige Reißwellen im trogförmigen Gehäuse ermöglichen optionalen Siebboden für definierte Ausgangsgröße.",
  usps: [
    "Schneckenförmige Reißwellen — kontrollierter Zerkleinerungsprozess",
    "Trogförmiges Gehäuse mit optionalem Siebboden",
    "Extrem breites Materialspektrum",
    "Robuste Bauweise für harte Materialien",
  ],
  applications: [
    "Holzpaletten",
    "Kabeltrommeln",
    "Dämmstoffplatten",
    "Porenbetonsteine",
    "Kalksandsteine",
    "Ballenauflösung",
  ],
  videos: [
    { ytId: "5g7265pXYgw", title: "SB 560/2 – Ballenauflösung" },
    { ytId: "PWBjv18xMKE", title: "SB 560/2 – Holzpalettenzerkleinerung" },
    { ytId: "VU13SomD7hI", title: "SB 560/2 – Kalksandsteinzerkleinerung" },
    { ytId: "c67ISqz_1Ek", title: "SB 560/2 – Ytongsteinzerkleinerung" },
  ],
  specHeaders: ["Typ", "Eingabequerschnitt (mm)", "Schneckenwellen", "Antrieb (kW)", "Gewicht (kg)"],
  models: [
    {
      type: "SB 560/2",
      "Eingabequerschnitt (mm)": "1600 × 1600",
      Schneckenwellen: 2,
      "Antrieb (kW)": "2 × 15",
      "Gewicht (kg)": 6000,
    },
    {
      type: "SB 560/4",
      "Eingabequerschnitt (mm)": "1600 × 2800",
      Schneckenwellen: 4,
      "Antrieb (kW)": "4 × 15",
      "Gewicht (kg)": 10000,
    },
  ],
  relatedSlugs: ["einwellenschredder", "guillotinescheren"],
};

const guillotinescheren: Product = {
  slug: "guillotinescheren",
  name: "Guillotinescheren GS",
  shortName: "GS",
  category: "vorzerkleinerung",
  tagline: "Präziser Schnitt für Faserballen, Kautschuk und Fischereitaue",
  description:
    "Die Guillotineschere GS trennt Faserballen, Bändchen, Folienwickel, Kautschukballen und Fischereitaue mit präzise einstellbaren Spaltmessern und zwei Hydraulikzylindern. Präzise einstellbare Anschläge garantieren reproduzierbare Ausgangsstücke.",
  usps: [
    "Spaltmesser mit 2 Hydraulikzylindern",
    "Schnittkraft bis 40 t",
    "Präzise einstellbare Anschläge",
    "Reproduzierbare Ausgangsstücke",
  ],
  applications: ["Faserballen", "Bändchenwickel", "Folienklumpen", "Kautschukballen", "Fischereitaue"],
  videos: [{ ytId: "mBMmbgb4gkk", title: "GS – Zerkleinerung von Fischereitauen" }],
  specHeaders: ["Typ", "Hubhöhe (mm)", "Arbeitsbreite (mm)", "Antrieb (kW)", "Schnittkraft (t)", "Gewicht (kg)"],
  models: [
    {
      type: "GS 1500/1000",
      "Hubhöhe (mm)": 1000,
      "Arbeitsbreite (mm)": 1500,
      "Antrieb (kW)": "22–37",
      "Schnittkraft (t)": "bis 20",
      "Gewicht (kg)": 4500,
    },
    {
      type: "GS 1500/1200",
      "Hubhöhe (mm)": 1200,
      "Arbeitsbreite (mm)": 1500,
      "Antrieb (kW)": "22–37",
      "Schnittkraft (t)": "bis 20",
      "Gewicht (kg)": 5500,
    },
    {
      type: "GS 2000/1500",
      "Hubhöhe (mm)": 1500,
      "Arbeitsbreite (mm)": 2000,
      "Antrieb (kW)": "37–45",
      "Schnittkraft (t)": "bis 40",
      "Gewicht (kg)": 7000,
    },
  ],
  relatedSlugs: ["zweiwellenschredder", "schneckenbrecher"],
};

/* ─── Schneidmühlen ───────────────────────────────────────────────── */

const schneidmuehle_lm: Product = {
  slug: "lm",
  name: "Schneidmühle LM",
  shortName: "LM",
  category: "schneidmuehlen",
  tagline: "Die universelle Schneidmühle für Folien, Rohre und Spritzguss",
  description:
    "Die Schneidmühle LM ist das Universalwerkzeug für Folien (in-line), Kanister, PVC-/PE-/PP-Rohre, Profile, Stoßstangen, Spritzguss- und Tiefziehteile. Doppelschrägschnitt, außen gelagerte Rotorwelle und extern einstellbare Messereinstelllehre zeichnen sie aus.",
  usps: [
    "Doppelschrägschnitt — leises Laufen",
    "Außen gelagerte Rotorwelle",
    "Messereinstelllehre extern",
    "In-line-fähig für Folienanlagen",
  ],
  applications: ["Folien", "Kanister", "PVC-Rohre", "PE-Rohre", "PP-Rohre", "Profile", "Stoßstangen", "Spritzguss"],
  videos: [],
  specHeaders: ["Typ", "A (mm)", "B (mm)", "C (mm)", "D (mm)", "E (mm)"],
  models: [
    { type: "LM 300/300", "A (mm)": 810, "B (mm)": 1340, "C (mm)": 290, "D (mm)": 1110, "E (mm)": 500 },
    { type: "LM 300/500", "A (mm)": 810, "B (mm)": 1340, "C (mm)": 490, "D (mm)": 1310, "E (mm)": 500 },
    { type: "LM 300/800", "A (mm)": 810, "B (mm)": 1340, "C (mm)": 790, "D (mm)": 1610, "E (mm)": 500 },
    { type: "LM 300/1000", "A (mm)": 785, "B (mm)": 1760, "C (mm)": 980, "D (mm)": 1650, "E (mm)": 500 },
    { type: "LM 300/1500", "A (mm)": 785, "B (mm)": 1720, "C (mm)": 1430, "D (mm)": 2040, "E (mm)": 500 },
    { type: "LM 450/600", "A (mm)": 921, "B (mm)": 2150, "C (mm)": 578, "D (mm)": 1500, "E (mm)": 600 },
    { type: "LM 450/1000", "A (mm)": 921, "B (mm)": 2230, "C (mm)": 980, "D (mm)": 1900, "E (mm)": 600 },
    { type: "LM 450/1200", "A (mm)": 928, "B (mm)": 2260, "C (mm)": 1154, "D (mm)": 2074, "E (mm)": 600 },
    { type: "LM 600/1000", "A (mm)": 1180, "B (mm)": 2670, "C (mm)": 980, "D (mm)": 2055, "E (mm)": 710 },
    { type: "LM 600/1200", "A (mm)": 1180, "B (mm)": 2670, "C (mm)": 1154, "D (mm)": 2074, "E (mm)": 710 },
  ],
  relatedSlugs: ["sm", "smv"],
};

const schneidmuehle_sm: Product = {
  slug: "sm",
  name: "Schneidmühle SM",
  shortName: "SM",
  category: "schneidmuehlen",
  tagline: "Robust und vielseitig — für massive Klumpen und voluminöse Hohlkörper",
  description:
    "Die Schneidmühle SM verarbeitet massive Klumpen, PA-Fasern, Kautschuk, Anfahrbrocken, Hohlkörper und Getränkekästen. Doppelschrägschnitt, robuste Bauweise und die optionale Nassausführung als Waschmühle machen sie zur meistgefragten Baureihe von NEUE HERBOLD.",
  usps: [
    "Doppelschrägschnitt — niedriger Lärmpegel",
    "Auch als Nassschneidmühle / Waschmühle",
    "16 Baugrössen — SM 300 bis SM 1000",
    "Made in Germany — Sinsheim",
  ],
  applications: ["Massive Klumpen", "PA-Fasern", "Kautschuk", "Anfahrbrocken", "Hohlkörper", "Getränkekästen"],
  videos: [
    { ytId: "fqJ4G8xg-Q4", title: "SM 800 – PVC Profilabfälle" },
    { ytId: "4_mWQKqTOa4", title: "SM – PE/PP Rohrabfälle" },
  ],
  specHeaders: ["Typ", "A (mm)", "B (mm)", "C (mm)", "D (mm)", "E (mm)"],
  models: [
    { type: "SM 300/300", "A (mm)": 920, "B (mm)": 1720, "C (mm)": 290, "D (mm)": 1130, "E (mm)": 500 },
    { type: "SM 300/500", "A (mm)": 903, "B (mm)": 1720, "C (mm)": 490, "D (mm)": 1330, "E (mm)": 500 },
    { type: "SM 300/800", "A (mm)": 903, "B (mm)": 1720, "C (mm)": 790, "D (mm)": 1630, "E (mm)": 500 },
    { type: "SM 450/600", "A (mm)": 1195, "B (mm)": 2190, "C (mm)": 580, "D (mm)": 1560, "E (mm)": 600 },
    { type: "SM 450/800", "A (mm)": 1268, "B (mm)": 2150, "C (mm)": 780, "D (mm)": 1875, "E (mm)": 600 },
    { type: "SM 450/1000", "A (mm)": 1167, "B (mm)": 2256, "C (mm)": 980, "D (mm)": 2075, "E (mm)": 600 },
    { type: "SM 450/1600", "A (mm)": 1380, "B (mm)": 2250, "C (mm)": 1580, "D (mm)": 2675, "E (mm)": 600 },
    { type: "SM 600/600", "A (mm)": 1440, "B (mm)": 2580, "C (mm)": 584, "D (mm)": 1650, "E (mm)": 720 },
    { type: "SM 600/800", "A (mm)": 1300, "B (mm)": 2580, "C (mm)": 780, "D (mm)": 1884, "E (mm)": 720 },
    { type: "SM 600/1000", "A (mm)": 1440, "B (mm)": 2580, "C (mm)": 990, "D (mm)": 2055, "E (mm)": 705 },
    { type: "SM 800/1000", "A (mm)": 1652, "B (mm)": 2890, "C (mm)": 980, "D (mm)": 2207, "E (mm)": 940 },
    { type: "SM 800/1200", "A (mm)": 1960, "B (mm)": 2680, "C (mm)": 1150, "D (mm)": 2250, "E (mm)": 940 },
    { type: "SM 800/1600", "A (mm)": 2051, "B (mm)": 2800, "C (mm)": 1560, "D (mm)": 2840, "E (mm)": 940 },
    { type: "SM 800/2000", "A (mm)": 1858, "B (mm)": 3264, "C (mm)": 1970, "D (mm)": 3266, "E (mm)": 940 },
    { type: "SM 800/2400", "A (mm)": 2160, "B (mm)": 2800, "C (mm)": 2330, "D (mm)": 3400, "E (mm)": 940 },
    { type: "SM 1000/1200", "A (mm)": 2160, "B (mm)": 2680, "C (mm)": 1150, "D (mm)": 2250, "E (mm)": 1140 },
  ],
  relatedSlugs: ["lm", "smv", "sx"],
};

const schneidmuehle_smv: Product = {
  slug: "smv",
  name: "Schneidmühle SMV",
  shortName: "SMV",
  category: "schneidmuehlen",
  tagline: "Speziell für Kästen, Hohlkörper und Dünnfolien",
  description:
    "Die Schneidmühle SMV ist für Kästen, Hohlkörper, Dünnfolien (BOPP/BOPET/PP), Bändchengewöll und PP-Big Bags optimiert. Ihre spezielle Rotorkonfiguration sorgt für hohen Durchsatz bei voluminösen, leichten Materialien.",
  usps: [
    "Optimiert für Dünnfolien (BOPP/BOPET/PP)",
    "Hohes Durchsatzverhältnis bei leichten Materialien",
    "Big-Bag-geeignet",
    "6 Baugrößen verfügbar",
  ],
  applications: ["Kästen", "Hohlkörper", "BOPP-Folien", "BOPET-Folien", "PP-Folien", "Bändchengewöll", "Big Bags"],
  videos: [],
  specHeaders: ["Typ", "A (mm)", "B (mm)", "C (mm)", "D (mm)", "E (mm)"],
  models: [
    { type: "SMV 450/600", "A (mm)": 1233, "B (mm)": 2150, "C (mm)": 578, "D (mm)": 1500, "E (mm)": 600 },
    { type: "SMV 450/1000", "A (mm)": 1385, "B (mm)": 2150, "C (mm)": 990, "D (mm)": 2055, "E (mm)": 600 },
    { type: "SMV 600/1000", "A (mm)": 1440, "B (mm)": 2580, "C (mm)": 990, "D (mm)": 2055, "E (mm)": 720 },
    { type: "SMV 800/1200", "A (mm)": 1960, "B (mm)": 2680, "C (mm)": 1150, "D (mm)": 2250, "E (mm)": 940 },
    { type: "SMV 800/1600", "A (mm)": 2051, "B (mm)": 2800, "C (mm)": 1560, "D (mm)": 2840, "E (mm)": 940 },
    { type: "SMV 800/2000", "A (mm)": 1858, "B (mm)": 3264, "C (mm)": 1970, "D (mm)": 3266, "E (mm)": 940 },
  ],
  relatedSlugs: ["sm", "lm", "sx"],
};

const schneidmuehlen_sx: Product = {
  slug: "sx",
  name: "Schneidmühlen SX",
  shortName: "SX",
  category: "schneidmuehlen",
  tagline: "Hochleistung: 2–15 t/h — für Folien, Big Bags und PET-Flaschen",
  description:
    "Die Hochleistungsschneidmühlen SX erreichen Durchsätze von 2 bis 15 t/h und sind für anspruchsvolle Aufgaben konzipiert: Dünnfolien (BOPP/BOPET/PP), Big Bags, Flaschenkästen und PET-Flaschen. Antriebe bis 315 kW, bis 20 % Energieeinsparung gegenüber konventionellen Mühlen.",
  usps: [
    "Durchsatz 2–15 t/h",
    "Antrieb 90–315 kW",
    "Bis 20 % Energieeinsparung",
    "Für Dünnfolien und PET-Flaschen",
  ],
  applications: [
    "BOPP-Folien",
    "BOPET-Folien",
    "PP-Folien",
    "Big Bags",
    "Flaschenkästen",
    "PET-Flaschen",
  ],
  videos: [],
  specHeaders: ["Typ", "A (mm)", "B (mm)", "C (mm)", "D (mm)", "E (mm)"],
  models: [
    { type: "SX 800/1200", "A (mm)": 1645, "B (mm)": 2790, "C (mm)": 1304, "D (mm)": 2584, "E (mm)": 940 },
    { type: "SX 800/1600", "A (mm)": 2063, "B (mm)": 2700, "C (mm)": 1584, "D (mm)": 2819, "E (mm)": 940 },
    { type: "SX 800/2000", "A (mm)": 2000, "B (mm)": 2730, "C (mm)": 2104, "D (mm)": 3384, "E (mm)": 940 },
  ],
  relatedSlugs: ["smv", "sm", "lm"],
};

const rohrmühlen_sr: Product = {
  slug: "sr",
  name: "Rohrmühlen SR",
  shortName: "SR",
  category: "schneidmuehlen",
  tagline: "Rohrabfälle bis 1.600 mm Länge — ohne Vorsägen",
  description:
    "Die Rohrmühle SR verarbeitet Rohrabfälle bis 1.600 mm Länge horizontal beschickt — kein Vorsägen nötig. Die Profilmühle LP ergänzt das Sortiment für PVC-Fensterprofile bis 6.000 mm Länge.",
  usps: [
    "Horizontale Beschickung — kein Vorsägen",
    "Rohre bis 1.600 mm Länge",
    "Verschiedene Typen SR 450 bis SR 1600",
    "Typen LP für PVC-Fensterprofile bis 6.000 mm",
  ],
  applications: ["Rohrabfälle", "PE-Rohre", "PVC-Rohre", "Profile"],
  videos: [{ ytId: "WnOvJc_qeB0", title: "Profilmühle LP – Zerkleinerung von Profilen" }],
  specHeaders: ["Verfügbare Typen"],
  models: [
    { "Verfügbare Typen": "SR 450/600, SR 600/600, SR 600/800, SR 800/600, SR 1200/800, SR 1600/1200" },
    { "Verfügbare Typen": "LP 450/600, LP 450/1000" },
  ],
  relatedSlugs: ["lm", "sm"],
};

/* ─── Hammermühlen ────────────────────────────────────────────────── */

const hammermuehle_hm: Product = {
  slug: "hm",
  name: "Hammermühlen HM",
  shortName: "HM",
  category: "hammermuehlen",
  tagline: "Für Holzabfall, Elektroschrott, Glaswolle und spröde Kunststoffe",
  description:
    "Die Hammermühlen HM zerkleinern schlagspröde Materialien wie Holzabfall, Elektroschrott, Glaswolle, Steinwolle und spröde Kunststoffe. Der Hammerotor erzeugt hohe Schlagenergie für effiziente Zerkleinerung auch bei schwierigen Materialien.",
  usps: [
    "Hohe Schlagenergie durch Hammerotor",
    "Breites Materialspektrum",
    "7 Baugrößen verfügbar",
    "Für schlagspröde Materialien optimiert",
  ],
  applications: [
    "Holzabfall",
    "Schlagspröde Kunststoffe",
    "Elektroschrott",
    "Glaswolle",
    "Steinwolle",
  ],
  videos: [],
  specHeaders: ["Typ", "Rotordurchmesser (mm)", "Arbeitsbreite (mm)"],
  models: [
    { type: "HM 450/300", "Rotordurchmesser (mm)": 450, "Arbeitsbreite (mm)": 300 },
    { type: "HM 450/600", "Rotordurchmesser (mm)": 450, "Arbeitsbreite (mm)": 600 },
    { type: "HM 650/250", "Rotordurchmesser (mm)": 650, "Arbeitsbreite (mm)": 250 },
    { type: "HM 650/500", "Rotordurchmesser (mm)": 650, "Arbeitsbreite (mm)": 500 },
    { type: "HM 650/750", "Rotordurchmesser (mm)": 650, "Arbeitsbreite (mm)": 750 },
    { type: "HM 800/1000", "Rotordurchmesser (mm)": 800, "Arbeitsbreite (mm)": 1000 },
    { type: "HM 1000/1600", "Rotordurchmesser (mm)": 1000, "Arbeitsbreite (mm)": 1600 },
  ],
  relatedSlugs: ["einwellenschredder", "zm"],
};

/* ─── Feinmühlen ──────────────────────────────────────────────────── */

const feinmuehle_zm: Product = {
  slug: "zm",
  name: "Feinmühlen ZM",
  shortName: "ZM",
  category: "feinmuehlen",
  tagline: "Pulverisierung bis < 1 mm — sieblos, energieeffizient",
  description:
    "Die Prallscheibenmühlen ZM sind auf Feinmahlung und Pulverisierung von PE-, PVC-, PC-Granulat und anderen Kunststoffen spezialisiert. Der sieblose Betrieb, pneumatische Abförderung und ein einziger Antriebsmotor minimieren Aufwand und Betriebskosten. Optionale Temperatursteuerung und Schallschutzkabine verfügbar.",
  usps: [
    "Pulverisierung auf Körnung < 1 mm",
    "Sieblos — keine Verstopfungsgefahr",
    "Nur ein Antriebsmotor",
    "Optionale Temperatursteuerung für wärmeempfindliche Materialien",
    "Optionale Schallschutzkabine",
  ],
  applications: ["PE-Granulat", "PVC-Granulat", "PC-Granulat", "Andere Kunststoff-Granulate"],
  videos: [],
  specHeaders: ["Typ", "A (mm)", "B (mm)", "C (mm)"],
  models: [
    { type: "ZM 300", "A (mm)": 1350, "B (mm)": 1050, "C (mm)": 1045 },
    { type: "ZM 500", "A (mm)": 1685, "B (mm)": 1430, "C (mm)": 1180 },
    { type: "ZM 800", "A (mm)": 2260, "B (mm)": 1140, "C (mm)": 1760 },
  ],
  relatedSlugs: ["sm", "hm"],
};

/* ─── Waschanlagen ────────────────────────────────────────────────── */

const waschanlagen: Product = {
  slug: "waschanlagen",
  name: "Waschanlagen",
  shortName: "WA",
  category: "waschanlagen",
  tagline: "Modular kombinierbar — PE/PP 250–2.000 kg/h, PET 250–1.000 kg/h",
  description:
    "Die Waschanlagen von NEUE HERBOLD verarbeiten Folien (Industrie/Landwirtschaft/Haushalt), PET-Flaschen, HDPE-Behälter, PVC-Profile und Big Bags. Das modulare Baukastensystem aus über 15 Aggregaten ermöglicht maßgeschneiderte Anlagen für jeden Bedarf.",
  usps: [
    "PE/PP-Folien: 250–2.000 kg/h",
    "PET-Flaschen: 250–1.000 kg/h",
    "Modulares Baukastensystem",
    "Über 15 kombinierbare Aggregate",
  ],
  applications: [
    "PE/PP-Folien",
    "PET-Flaschen",
    "HDPE-Behälter",
    "PVC-Profile",
    "Big Bags",
    "Landwirtschaftsfolie",
  ],
  videos: [
    { ytId: "-bs5NEf7veg", title: "Waschanlage – Recycling PE Folienabfall" },
    { ytId: "dqd5KiCyupA", title: "Waschanlage – Aufbereitung PE Flaschen/Behälter" },
    { ytId: "Ikp-6CZ7DqE", title: "Friktionswäscher FW im Einsatz" },
  ],
  specHeaders: ["Aggregat", "Funktion"],
  models: [
    { Aggregat: "Einweichschnecke ES", Funktion: "Vorweichen und Auflockerung" },
    { Aggregat: "Waschtrommel", Funktion: "Grobe Reinigung und Trennung" },
    { Aggregat: "Friktionswäscher FW/FA", Funktion: "Intensivreinigung durch Reibung" },
    { Aggregat: "Intensivwäscher IW", Funktion: "Hochintensive Oberflächenreinigung" },
    { Aggregat: "Entwässerungsschnecke", Funktion: "Mechanische Entwässerung" },
    { Aggregat: "Mechanischer Trockner TM", Funktion: "Zentrifugale Trocknung" },
    { Aggregat: "Thermischer Trockner TT", Funktion: "Restfeuchte < 1 % bei PET" },
    { Aggregat: "Trennbehälter TB", Funktion: "Schwimm-Sink-Trennung (Dichte)" },
    { Aggregat: "Feingutabscheider HS", Funktion: "Etikettenentfernung, Feinstoffabscheidung" },
    { Aggregat: "Zick-Zack-Sichter ZS", Funktion: "Leichtstoffe vom Granulat trennen" },
    { Aggregat: "Taumelsiebmaschine TSM", Funktion: "Siebung, Schwebeteile aus Abwasser" },
  ],
  relatedSlugs: ["sm", "lm", "zm"],
};

/* ─── Category Registry ───────────────────────────────────────────── */

export const categories: Category[] = [
  {
    slug: "vorzerkleinerung",
    name: "Vorzerkleinerung",
    shortDesc: "Einwellenschredder · Zweiwellenschredder · Rohrschredder · Schneckenbrecher · Guillotinescheren",
    description:
      "Die Vorzerkleinerungs-Maschinen von NEUE HERBOLD übernehmen die erste Zerkleinerungsstufe — von Ballenwaren über massive Kunststoffklumpen bis hin zu Rohren und Fässern. Alle Maschinen sind für den Dauerbetrieb in anspruchsvollen Recyclinganlagen ausgelegt.",
    products: [
      einwellenschredder,
      zweiwellenschredder,
      rohrschredder,
      styroporshredder,
      schneckenbrecher,
      guillotinescheren,
    ],
  },
  {
    slug: "schneidmuehlen",
    name: "Schneidmühlen",
    shortDesc: "LM · SM · SMV · SX · SR — Nachzerkleinerung auf Endkorngröße",
    description:
      "Die Schneidmühlen-Baureihen von NEUE HERBOLD decken das komplette Spektrum der Nachzerkleinerung ab — von der kompakten In-line-Mühle LM bis zur Hochleistungsmühle SX mit 15 t/h Durchsatz.",
    products: [
      schneidmuehle_lm,
      schneidmuehle_sm,
      schneidmuehle_smv,
      schneidmuehlen_sx,
      rohrmühlen_sr,
    ],
  },
  {
    slug: "hammermuehlen",
    name: "Hammermühlen",
    shortDesc: "HM-Baureihe — Für Holz, Elektroschrott und spröde Materialien",
    description:
      "Die Hammermühlen HM sind für schlagspröde Materialien wie Holzabfall, Elektroschrott, Glaswolle und Steinwolle entwickelt worden. Hohe Schlagenergie durch den Hammerotor sorgt für effiziente Zerkleinerung auch schwieriger Materialien.",
    products: [hammermuehle_hm],
  },
  {
    slug: "feinmuehlen",
    name: "Feinmühlen",
    shortDesc: "ZM-Baureihe — Pulverisierung bis < 1 mm",
    description:
      "Die Prallscheibenmühlen ZM sind auf die Feinmahlung und Pulverisierung von Kunststoff-Granulaten spezialisiert. Siebloser Betrieb, minimaler Energieeinsatz und optionale Temperatursteuerung machen sie zur ersten Wahl für die Pulvererzeugung.",
    products: [feinmuehle_zm],
  },
  {
    slug: "waschanlagen",
    name: "Waschanlagen",
    shortDesc: "Modular · PE/PP bis 2.000 kg/h · PET bis 1.000 kg/h",
    description:
      "Das modulare Waschanlagen-System von NEUE HERBOLD ermöglicht maßgeschneiderte Anlagen für jede Aufgabe — von der einfachen Folienwaschanlage bis zur vollautomatischen PET-Flasche-Aufbereitungsanlage.",
    products: [waschanlagen],
  },
];

/* ─── Helpers ─────────────────────────────────────────────────────── */

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductBySlug(
  categorySlug: string,
  productSlug: string,
): Product | undefined {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.products.find((p) => p.slug === productSlug);
}

export function getRelatedProducts(product: Product): Product[] {
  const cat = getCategoryBySlug(product.category);
  if (!cat) return [];
  return cat.products.filter((p) => product.relatedSlugs.includes(p.slug));
}
