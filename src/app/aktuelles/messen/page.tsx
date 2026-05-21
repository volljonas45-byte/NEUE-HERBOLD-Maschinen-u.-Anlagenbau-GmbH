import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Messen & Events | NEUE HERBOLD",
  description:
    "NEUE HERBOLD auf Messen 2024 und 2025 — K-Messe Düsseldorf, PRS Europe Amsterdam und mehr.",
};

const upcomingFairs = [
  {
    name: "K-Messe 2025",
    location: "Düsseldorf",
    date: "8.–15. Oktober 2025",
    stand: "Halle 9 / Stand D19",
    highlight: true,
    desc: "Die weltgrößte Fachmesse für Kunststoff und Kautschuk. NEUE HERBOLD präsentiert neueste Maschinen und Anlagenlösungen.",
  },
  {
    name: "PRS Middle East & Africa 2025",
    location: "Dubai",
    date: "15.–17. September 2025",
    stand: "Stand P465",
    highlight: false,
    desc: "Plastic Recycling Show Middle East — die führende Recycling-Fachmesse für die MENA-Region.",
  },
  {
    name: "PRS Plastic Recycling Show Europe 2025",
    location: "Amsterdam",
    date: "2025",
    stand: "Stand D46",
    highlight: false,
    desc: "Europas größte Kunststoff-Recycling-Fachmesse in Amsterdam.",
  },
];

const pastFairs = [
  { name: "PRS Europe 2024", location: "Amsterdam", date: "19.–20. Jun 2024", stand: "J50" },
  { name: "Recycling Technik 2024", location: "Dortmund", date: "9.–10. Okt 2024", stand: "7-S31" },
  { name: "FAKUMA 2024", location: "Friedrichshafen", date: "15.–19. Okt 2024", stand: "A6-6201" },
  { name: "PRS Indien 2024", location: "Mumbai", date: "4.–6. Dez 2024", stand: "P612" },
];

export default function MessenPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-deep pt-32 pb-20">
        <Container>
          <Breadcrumbs variant="dark" inContainer={false} />
          <div className="mt-6 max-w-3xl">
            <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Messen & Events
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Treffen Sie uns persönlich
            </h1>
            <p className="mt-4 text-white/60 text-lg">
              NEUE HERBOLD ist auf allen wichtigen Recycling-Fachmessen vertreten. Vereinbaren
              Sie vorab einen Gesprächstermin.
            </p>
          </div>
        </Container>
      </section>

      {/* Upcoming */}
      <section className="bg-white py-20">
        <Container>
          <h2 className="text-2xl font-bold text-brand-blue mb-8">Kommende Messen 2025</h2>
          <div className="space-y-5">
            {upcomingFairs.map((fair) => (
              <div
                key={fair.name}
                className={`rounded-xl border p-6 ${
                  fair.highlight
                    ? "border-brand-cyan/30 bg-brand-blue/[0.02] shadow-sm"
                    : "border-graphite-200"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-brand-blue">{fair.name}</h3>
                      {fair.highlight && (
                        <span className="text-xs bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded-full font-medium">
                          Highlight
                        </span>
                      )}
                    </div>
                    <p className="text-graphite-600 text-sm mb-3">{fair.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-graphite-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {fair.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {fair.location}
                      </span>
                      <span className="font-mono text-brand-cyan text-xs">{fair.stand}</span>
                    </div>
                  </div>
                  <Link
                    href="/kontakt/anfrage"
                    className="shrink-0 inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-steel text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    Gesprächstermin
                    <ChevronRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Past fairs */}
      <section className="bg-graphite-100 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-brand-blue mb-6">Vergangene Messen 2024</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {pastFairs.map((fair) => (
              <div
                key={fair.name}
                className="bg-white border border-graphite-200 rounded-lg px-5 py-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-brand-blue text-sm">{fair.name}</p>
                  <div className="flex gap-3 mt-1 text-xs text-graphite-400">
                    <span>{fair.date}</span>
                    <span>{fair.location}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-graphite-400">{fair.stand}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
