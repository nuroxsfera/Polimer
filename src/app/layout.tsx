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
  title: "ПолимерКолор — Полимерно-порошковое покрытие крупногабаритных изделий · Новосибирск",
  description:
    "Полимерно-порошковое покрытие крупногабаритных изделий в Новосибирске. Камера ППП 12×3×3 м, до 3,5 т. Изделия длиной до 12 м без разборки и резки.",
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
