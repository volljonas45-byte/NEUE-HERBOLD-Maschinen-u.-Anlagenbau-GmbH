import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NEUE HERBOLD — Maschinen & Anlagenbau",
    template: "%s | NEUE HERBOLD",
  },
  description:
    "NEUE HERBOLD GmbH — Hersteller von Recycling- und Zerkleinerungsmaschinen aus Sinsheim. Schneidmühlen, Schredder, Waschanlagen und mehr seit 1995.",
  keywords: [
    "Schneidmühlen",
    "Schredder",
    "Recyclingmaschinen",
    "Zerkleinerungsmaschinen",
    "Waschanlagen",
    "Sinsheim",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "NEUE HERBOLD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bone text-graphite-900 antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
