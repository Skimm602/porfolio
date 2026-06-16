import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://jethialao.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jethia Lao — Architecture Portfolio",
    template: "%s — Jethia Lao",
  },
  description:
    "Selected works 2025–2026 by Jethia Victoria Lao, BS Architecture graduate of Cebu Institute of Technology – University. Civic, cultural, and residential design from the Philippines.",
  keywords: [
    "Jethia Lao",
    "architecture portfolio",
    "Philippine architecture",
    "Cebu Institute of Technology",
    "Ormoc",
    "civic architecture",
  ],
  authors: [{ name: site.fullName }],
  openGraph: {
    title: "Jethia Lao — Architecture Portfolio",
    description: "Selected works 2025–2026. Civic, cultural, and residential architecture.",
    url: siteUrl,
    siteName: "Jethia Lao — Architecture",
    images: [{ url: "/images/government-centre/hero.jpg", width: 1920, height: 1353, alt: "Ormoc City Government Centre masterplan" }],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jethia Lao — Architecture Portfolio",
    description: "Selected works 2025–2026. Civic, cultural, and residential architecture.",
    images: ["/images/government-centre/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAFA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest2 focus:text-paper"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
