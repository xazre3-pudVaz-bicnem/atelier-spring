import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQList from "@/components/FAQList";
import AccessSteps from "@/components/AccessSteps";

export const metadata: Metadata = {
  title: "アクセス・ご来店案内｜調布・国領のセレクトショップ Atelier♡Spring",
  description:
    "調布市国領町のセレクトショップ・Atelier♡Spring（アトリエ♡スプリング）へのアクセスご案内。京王線「国領駅」から写真付き道順でご案内します。調布・国領でヴィンテージ雑貨・アクセサリーをお探しの方はぜひご来店ください。",
  keywords: [
    "調布 セレクトショップ",
    "国領 セレクトショップ",
    "調布 雑貨店",
    "調布 アクセサリー",
    "国領 雑貨",
    "調布 ヴィンテージ雑貨",
    "国領駅 アクセス",
  ],
  openGraph: {
    title: "アクセス・ご来店案内｜Atelier♡Spring",
    description:
      "京王線「国領駅」から写真付き道順でご案内。調布市国領町の南フランスアンティーク・雑貨・アクセサリーショップ。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://atelier-spring.com/access" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atelier♡Spring",
  alternateName: "アトリエ♡スプリング",
  description:
    "調布市国領町の南フランスアンティーク食器・雑貨とハンドメイドアクセサリーのお店。",
  image: "https://atelier-spring.com/og-image.jpg",
  url: "https://atelier-spring.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "国領町4-7-23",
    addressLocality: "調布市",
    addressRegion: "東京都",
    postalCode: "182-0022",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6465,
    longitude: 139.5565,
  },
  sameAs: [
    "https://www.instagram.com/atelierspring_izumi/",
    "https://springwater.base.shop/",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "国領駅から何分ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "京王線「国領駅」より徒歩約3分です。このページの「お店までの道のり」で写真付き道順をご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "駐車場はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "専用駐車場はございません。近隣のコインパーキングをご利用ください。",
      },
    },
    {
      "@type": "Question",
      name: "初めてでも入りやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろんです。小さなアトリエですが、ぜひお気軽にお越しください。",
      },
    },
    {
      "@type": "Question",
      name: "オンラインショップはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、BASEオンラインショップ（springwater.base.shop）にてご購入いただけます。全国発送対応しています。",
      },
    },
  ],
};

const steps = [
  {
    step: "01",
    title: "国領駅の改札を出ます",
    description:
      "京王線「国領駅」に到着したら改札を出てください。国領駅の改札は一ヶ所です。",
    image: "/images/access/access-01.jpg",
    imageAlt: "京王線 国領駅 外観",
  },
  {
    step: "02",
    title: "プラザパレットを目指します",
    description:
      "改札を出ると正面に大きなガラスのビル「プラザパレット」が見えます。目の前にロータリーがあるので、右回りか左回りでプラザパレット前の横断歩道までお進みください。",
    image: "/images/access/access-02.jpg",
    imageAlt: "プラザパレット 外観",
  },
  {
    step: "03",
    title: "松屋の前の交差点を直進します",
    description:
      "松屋が見える交差点に出ます。そのまま直進してください。",
    image: "/images/access/access-03.jpg",
    imageAlt: "松屋前の交差点",
  },
  {
    step: "04",
    title: "プラザパレットの入口を通ります",
    description:
      "「Plaza Palette」の看板が目印です。入口を通り抜けて進みます。",
    image: "/images/access/access-04.jpg",
    imageAlt: "プラザパレット 入口サイン",
  },
  {
    step: "05",
    title: "国領集会場を右手に直進します",
    description:
      "右手に「国領集会場」が見えたら、そのまま矢印の方向へ直進してください。",
    image: "/images/access/access-05.jpg",
    imageAlt: "国領集会場 方向案内",
  },
  {
    step: "06",
    title: "PIZZERIA ASTROの角を進みます",
    description:
      "左手に「PIZZERIA ASTRO」というお店が見えたら、そのまま矢印の方向へ進んでください。",
    image: "/images/access/access-06.jpg",
    imageAlt: "PIZZERIA ASTRO前 進行方向",
  },
  {
    step: "07",
    title: "Bamboo Boxを通り過ぎます",
    description:
      "「Bamboo Box」の前を通り過ぎてください。正面に「焼肉仙牛」の看板が見えます。仙牛を目指して真っ直ぐにお進みください。",
    image: "/images/access/access-07.jpg",
    imageAlt: "Bamboo Box 外観",
  },
  {
    step: "08",
    title: "レンガ造りの建物が見えます",
    description:
      "丸みのある特徴的なレンガ造りの建物が見えてきます。この素敵な家の横を通り過ぎます。そのまま真っ直ぐお進みください。",
    image: "/images/access/access-08.jpg",
    imageAlt: "レンガ造りの建物",
  },
  {
    step: "09",
    title: "英会話の看板の路地を進みます",
    description:
      "「TME英会話」の看板がある細い路地を真っ直ぐ進んでください。",
    image: "/images/access/access-09.jpg",
    imageAlt: "英会話看板のある路地",
  },
  {
    step: "10",
    title: "コインランドリーが見えたらすぐです",
    description:
      "コインランドリーが右手に見えたら、アトリエはもうすぐそこです。",
    image: "/images/access/access-10.jpg",
    imageAlt: "コインランドリー 目印",
  },
  {
    step: "11",
    title: "Atelier♡Spring に到着！",
    description:
      "アンティーク調の木製の扉と「Atelier♡Spring」の看板が目印です。調布・国領にあるセレクトショップへようこそ。",
    image: "/images/access/access-11.jpg",
    imageAlt: "Atelier♡Spring 入口扉 到着",
  },
];

const faqs = [
  {
    q: "国領駅から何分ですか？",
    a: "京王線「国領駅」より徒歩約3分です。このページの「お店までの道のり」で写真付きの道順をご確認いただけますので、初めての方でも安心してお越しいただけます。",
  },
  {
    q: "駐車場はありますか？",
    a: "専用駐車場はございません。お車でお越しの場合は、近隣のコインパーキングをご利用ください。",
  },
  {
    q: "定休日・営業時間を教えてください。",
    a: "定休日は毎週月曜日・第1火曜日・第3火曜日です。営業日・営業時間の最新情報はご来店前にInstagram（@atelierspring_izumi）でご確認ください。",
  },
  {
    q: "初めてでも入りやすいですか？",
    a: "もちろんです。ぜひお気軽にお越しください。ゆっくりとご覧いただけます。",
  },
  {
    q: "オンラインショップはありますか？",
    a: "はい、BASEオンラインショップ（springwater.base.shop）にてご購入いただけます。遠方の方や、ご来店が難しい方もぜひご利用ください。全国発送対応しています。",
  },
  {
    q: "調布駅からどうやって行けばいいですか？",
    a: "調布駅から京王線で一駅の「国領駅」でお降りください。バスや自転車でのアクセスも可能です。Googleマップでのルート検索もご活用ください。",
  },
];

export default function AccessPage() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=東京都調布市国領町4-7-23";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] lg:h-[70vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="/images/shop/exterior-1.jpg"
          alt="Atelier♡Spring 外観 調布・国領のセレクトショップ"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2018]/80 via-[#2A2018]/30 to-[#2A2018]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A2018]/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full pt-20">
          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] text-[#C9A96E] uppercase mb-5">
              Access
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-cormorant text-5xl lg:text-7xl text-white font-light leading-none mb-6">
              ご来店案内
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="w-12 h-px bg-[#C9A96E] mb-6" />
            <p className="text-[13px] text-white/75 font-light leading-[2] max-w-sm">
              調布・国領の小さなアトリエへ。<br />
              初めての方でも安心してお越しいただけるよう、<br />
              駅からの道順をご案内いたします。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Shop Info ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3 text-center">
              Shop Information
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light text-center mb-4">
              店舗情報
            </h2>
            <div className="flex justify-center mb-14">
              <div className="w-12 h-px bg-[#C9A96E]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            {/* Info card */}
            <FadeIn delay={0.1}>
              <div className="space-y-0 border border-[#E8E0D6]">
                {/* Row */}
                {[
                  {
                    label: "店舗名",
                    content: (
                      <>
                        <p className="font-cormorant text-xl text-[#3A3028] font-light">
                          Atelier♡Spring
                        </p>
                        <p className="text-[11px] text-[#8A7A6A] mt-0.5">
                          アトリエ♡スプリング
                        </p>
                      </>
                    ),
                  },
                  {
                    label: "住所",
                    content: (
                      <>
                        <address className="not-italic text-[14px] text-[#3A3028] font-light leading-loose">
                          〒182-0022<br />
                          東京都調布市国領町4-7-23
                        </address>
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase group/link"
                        >
                          Googleマップで見る
                          <span className="block w-5 h-px bg-[#C9A96E] group-hover/link:w-9 transition-all duration-300" />
                        </a>
                      </>
                    ),
                  },
                  {
                    label: "最寄駅",
                    content: (
                      <p className="text-[14px] text-[#3A3028] font-light">
                        京王線 国領駅<br />
                        <span className="text-[12px] text-[#8A7A6A]">（徒歩約3分）</span>
                      </p>
                    ),
                  },
                  {
                    label: "営業情報",
                    content: (
                      <div className="text-[13px] text-[#5C4A3A] font-light leading-loose">
                        <p className="mb-2">
                          <span className="text-[10px] tracking-[0.15em] text-[#C9A96E] uppercase">定休日</span><br />
                          毎週月曜日<br />
                          第1火曜日・第3火曜日
                        </p>
                        <p className="text-[12px] text-[#8A7A6A]">
                          営業日・営業時間の最新情報は<br />
                          <a
                            href="https://www.instagram.com/atelierspring_izumi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C9A96E] hover:underline"
                          >
                            Instagram @atelierspring_izumi
                          </a>
                          をご確認ください。
                        </p>
                      </div>
                    ),
                  },
                ].map(({ label, content }, i) => (
                  <div
                    key={label}
                    className={`flex gap-6 px-6 py-5 ${
                      i < 3 ? "border-b border-[#E8E0D6]" : ""
                    }`}
                  >
                    <p className="text-[10px] tracking-[0.2em] text-[#C9A96E] uppercase pt-0.5 w-16 flex-shrink-0">
                      {label}
                    </p>
                    <div>{content}</div>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="mt-8">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#3A3028] text-[#FAF8F5] text-[11px] tracking-[0.3em] uppercase hover:bg-[#5C4A3A] transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  Googleマップでルートを確認
                </a>
              </div>
            </FadeIn>

            {/* Map embed */}
            <FadeIn delay={0.2}>
              <div className="overflow-hidden border border-[#E8E0D6]">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1!2d139.5565!3d35.6465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4b0e0000001%3A0x1!2z5p2x5Lqs6YO95rWc5biC5Zu95aCC55S677yU5LiB55uu77yX4oiS77yy77yT!5e0!3m2!1sja!2sjp!4v1699999999999"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Atelier♡Spring 地図 東京都調布市国領町4-7-23"
                    className="grayscale contrast-[1.1] saturate-50"
                  />
                </div>
                <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#E8E0D6]">
                  <p className="text-[11px] text-[#8A7A6A] font-light text-center tracking-wide">
                    〒182-0022 東京都調布市国領町4-7-23
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Steps: How to get there ── */}
      <section className="py-20 lg:py-28 bg-[#EDE8E1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3 text-center">
              How to Get There
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light text-center mb-4">
              お店までの道のり
            </h2>
            <div className="flex justify-center mb-5">
              <div className="w-12 h-px bg-[#C9A96E]" />
            </div>
            <p className="text-[13px] text-[#5C4A3A] font-light text-center leading-loose mb-14 max-w-md mx-auto">
              京王線「国領駅」から写真付きでご案内します。<br />
              初めてのお客様でも迷わずお越しいただけます。
            </p>
          </FadeIn>
        </div>

        <AccessSteps steps={steps} />
      </section>

      {/* ── Full-width map ── */}
      <section className="h-[400px] lg:h-[480px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1!2d139.5565!3d35.6465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4b0e0000001%3A0x1!2z5p2x5Lqs6YO95rWc5biC5Zu95aCC55S677yU5LiB55uu77yX4oiS77yy77yT!5e0!3m2!1sja!2sjp!4v1699999999999"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Atelier♡Spring アクセスマップ"
          className="grayscale contrast-[1.1] saturate-50"
        />
        {/* Subtle overlay badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-[#3A3028]/90 backdrop-blur-sm px-6 py-3 text-center pointer-events-none">
          <p className="font-cormorant text-lg text-[#FAF8F5] font-light">Atelier♡Spring</p>
          <p className="text-[10px] tracking-[0.2em] text-[#C9A96E] mt-0.5">
            東京都調布市国領町4-7-23
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3 text-center">
              FAQ
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light text-center mb-4">
              よくある質問
            </h2>
            <div className="flex justify-center mb-14">
              <div className="w-12 h-px bg-[#C9A96E]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <FAQList items={faqs} />
          </FadeIn>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-20 lg:py-28 bg-[#3A3028]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-5">
              Before Your Visit
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl text-[#EDE8E1] font-light mb-5 leading-snug">
              ご来店前にご不明点がありましたら<br />
              お気軽にお問い合わせください。
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] mx-auto mb-10" />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/atelierspring_izumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.3em] uppercase hover:bg-[#C9A96E] hover:text-[#3A3028] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>

              <a
                href="https://springwater.base.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 border border-[#EDE8E1]/30 text-[#EDE8E1] text-[11px] tracking-[0.3em] uppercase hover:bg-[#EDE8E1]/10 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                Online Shop (BASE)
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#3A3028] text-[11px] tracking-[0.3em] uppercase hover:bg-[#DEC08A] transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                お問い合わせ
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
