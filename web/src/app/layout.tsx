import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Rajdhani } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { ChatWidget } from "@/components/ChatWidget";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: {
    default: "Mech Space Automation | Custom Assembly Automation",
    template: "%s | Mech Space Automation",
  },
  description: "High-ticket, custom-engineered equipment including gantry automation, robotic solutions, conveyors, and SPMs for life sciences, aerosol, and consumer goods.",
  keywords: ["Industrial Automation", "Gantry Robot", "Conveyor Systems", "SPM Manufacturer", "Custom Assembly Equipment", "Robotic Palletizing"],
  authors: [{ name: "Mech Space Automation" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mechspaceautomation.com",
    title: "Mech Space Automation | Industrial Solutions",
    description: "High-ticket, custom-engineered equipment and robotic solutions.",
    siteName: "Mech Space Automation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mech Space Automation",
    description: "Custom-engineered equipment and robotic solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${rajdhani.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-barlow text-dark-text bg-soft-white">
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  );
}
