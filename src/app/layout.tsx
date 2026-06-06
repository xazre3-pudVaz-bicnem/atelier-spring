import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-spring.com"),
  title: {
    default: "調布・国領のセレクトショップ｜Atelier♡Spring",
    template: "%s｜Atelier♡Spring",
  },
  description:
    "東京都調布市国領町のAtelier♡Springは、フランスから届くアンティークやヴィンテージの食器・雑貨と手作りアクセサリーを扱うセレクトショップです。彫金技術を習得した店主が制作する一点物アクセサリーも取り揃えています。",
  keywords: ["調布", "アンティーク", "セレクトショップ", "アンティーク食器", "手作りアクセサリー", "国領", "ヴィンテージ", "アトリエスプリング"],
  authors: [{ name: "Atelier♡Spring" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://atelier-spring.com",
    siteName: "Atelier♡Spring｜調布・国領のセレクトショップ",
    title: "調布・国領のセレクトショップ｜Atelier♡Spring",
    description:
      "東京都調布市国領町のAtelier♡Springは、フランスから届くアンティークやヴィンテージの食器・雑貨と手作りアクセサリーを扱うセレクトショップです。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atelier♡Spring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "調布・国領のセレクトショップ｜Atelier♡Spring",
    description:
      "東京都調布市国領町のAtelier♡Springは、フランスから届くアンティークやヴィンテージの食器・雑貨と手作りアクセサリーを扱うセレクトショップです。",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://atelier-spring.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Atelier♡Spring（アトリエ♡スプリング）",
  description:
    "フランスから届くアンティークやヴィンテージの食器・雑貨と手作りアクセサリーを扱うセレクトショップ",
  url: "https://atelier-spring.com",
  image: "https://atelier-spring.com/images/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "国領町4-7-23",
    addressLocality: "調布市",
    addressRegion: "東京都",
    postalCode: "182-0022",
    addressCountry: "JP",
  },
  sameAs: [
    "https://www.instagram.com/atelierspring_izumi/",
    "https://springwater.base.shop/",
  ],
  priceRange: "¥¥",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
