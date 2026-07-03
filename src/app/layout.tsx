import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fourcrossesvets.co.uk"),
  title: {
    default: "Four Crosses Veterinary Centre | Independent Mixed Animal Practice — Powys & Shropshire",
    template: "%s | Four Crosses Veterinary Centre",
  },
  description:
    "Independent mixed animal practice serving Powys and Shropshire for over 50 years. Small animals, farm and equine. Two locations — Four Crosses and Llanfyllin. 24-hour emergency service.",
  keywords: ["vet", "Powys", "Shropshire", "Four Crosses", "Llanfyllin", "farm vet", "small animal vet", "equine vet", "mixed practice"],
  openGraph: {
    siteName: "Four Crosses Veterinary Centre",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C3150",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
