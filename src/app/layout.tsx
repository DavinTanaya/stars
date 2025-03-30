import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JasaCoding.id - Solusi Jasa Coding Profesional",
  description:
    "JasaCoding.id menyediakan layanan pengembangan website, aplikasi, dan solusi IT terbaik. Dapatkan hasil berkualitas dengan tim ahli kami!",
  keywords:
    "jasa coding, pengembangan website, jasa IT, solusi IT, jasa aplikasi, pengembangan software",
  authors: { name: "JasaCoding.id Team" },
  robots: "index, follow",
  openGraph: {
    title: "JasaCoding.id - Solusi Jasa Coding Profesional",
    description:
      "JasaCoding.id menyediakan layanan pengembangan website, aplikasi, dan solusi IT terbaik. Dapatkan hasil berkualitas dengan tim ahli kami!",
    url: "https://jasacoding.id",
    type: "website",
    images: [
      {
        url: "https://jasacoding.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "JasaCoding.id Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
