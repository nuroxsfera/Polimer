import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101412",
};

export const metadata: Metadata = {
  title: "ПолимерКолор — Порошковая окраска металла · Новосибирск",
  description:
    "Полимерно-порошковое окрашивание металла в Новосибирске. Печь ППО до 12 м, 3×3 м, до 1,5 т. Длинномер и крупногабарит целиком, без разборки. Сроки от 2 дней.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
