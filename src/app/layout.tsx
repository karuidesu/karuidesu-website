import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karuidesu — Portfolio",
  description: "Portfolio de Kekeli Diane ADONSOU — Software Engineer, Business Systems Analyst et Web Developer basée à Lomé, Togo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} bg-slate-950 text-slate-100 font-body antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white relative`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
