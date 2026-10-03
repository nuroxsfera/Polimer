import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101412",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://polimer-six.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ПолимерКолор — Полимерно-порошковое покрытие крупногабаритных изделий · Новосибирск",
    template: "%s · ПолимерКолор",
  },
  description:
    "Полимерно-порошковое покрытие крупногабаритных изделий в Новосибирске. Камера ППП 12×3×3 м, до 3,5 т. Изделия длиной до 12 м без разборки и резки.",
  keywords: [
    "порошковая окраска",
    "полимерное покрытие",
    "Новосибирск",
    "крупногабарит",
    "длинномер",
    "полимерная камера",
    "ПолимерКолор",
  ],
  authors: [{ name: "ПолимерКолор" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "ПолимерКолор",
    title: "ПолимерКолор — полимерно-порошковое покрытие крупногабарита",
    description:
      "Камера ППП 12×3×3 м, до 3,5 т. Изделия до 12 м без разборки и резки. Новосибирск, Переездная 1.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ПолимерКолор · Новосибирск",
    description: "Полимерно-порошковое покрытие крупногабаритных изделий. Камера 12×3×3 м, до 3,5 т.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  alternates: {
    canonical: siteUrl,
  },
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
