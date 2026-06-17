import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CookieConsent } from "@/components/CookieConsent";
import { HtmlLang } from "@/components/HtmlLang";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.datadesign.fi"
).replace(/\/$/, "");

// Single typeface across the whole site: Host Grotesk.
// The three CSS variables below all resolve to it (see globals.css), so any
// component referencing --font-body / --font-display / --font-serif gets Host Grotesk.
const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  // Absoluuttisten canonical- ja OG-osoitteiden pohja. Tarvitaan, jotta
  // sivukohtaiset suhteelliset polut (esim. "/services") muuttuvat oikein.
  metadataBase: new URL(SITE_URL),
  // Yksittäiset sivut, joilla on oma metadata, sisältävät jo "| Data Design"
  // -loppuosan, joten templatea ei käytetä (välttää tuplaantumisen).
  title: "Data Design | AI Advisory & Implementation Agency",
  description: "Senior-led, GenAI-native full-stack data & AI partner. From strategy to production.",
  // Turvalliset OG-oletukset, jotka periytyvät sivuille. og:url ja canonical
  // jätetään pois tarkoituksella, ettei juuren arvo leviä väärin alasivuille.
  openGraph: {
    siteName: "Data Design",
    type: "website",
    locale: "en_US",
    alternateLocale: "fi_FI",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hostGrotesk.variable}>
      <body
        className={hostGrotesk.className}
        style={{ margin: 0, background: "#ffffff" }}
      >
        <div style={{ background: "#ffffff", color: "#000000", minHeight: "100vh" }}>
          <HtmlLang />
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
