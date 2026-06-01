import { DM_Sans, Host_Grotesk, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-display",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  title: "Data Design — AI Advisory & Implementation Agency",
  description: "Senior-led, GenAI-native full-stack data & AI partner. From strategy to production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${hostGrotesk.variable} ${dmSerifDisplay.variable}`}>
      <body
        className={dmSans.className}
        style={{ margin: 0, background: "#ffffff" }}
      >
        <div style={{ background: "#ffffff", color: "#000000", minHeight: "100vh" }}>
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
