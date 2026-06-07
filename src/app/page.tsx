import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "調布・国領のセレクトショップ｜Atelier♡Spring",
  description:
    "東京都調布市国領町にあるアンティークやヴィンテージ雑貨と手作りアクセサリーのセレクトショップ。フランス在住の仕入れ担当から届くアンティーク食器・ヴィンテージ雑貨と、彫金技術を習得した店主が制作する一点物アクセサリー。調布・国領でときめく品をお探しなら、Atelier♡Springへ。",
};

const categories = [
  {
    en: "Antique & Vintage",
    ja: "アンティークやヴィンテージの食器・雑貨",
    desc: "アルビの蚤の市などからフランス在住の仕入れ担当が見つけたアンティークやヴィンテージの食器・雑貨。大量生産品にはない経年美と個性が魅力の一点物。",
    showBase: false,
  },
  {
    en: "Selected Goods",
    ja: "店主がセレクトした雑貨",
    desc: "お客様に「ときめき」をお届けするために、店主がひとつひとつ厳選した雑貨。フランスの暮らしから生まれた、置くだけで空間が変わる品々。心ときめく物との出逢いを大切に。店主がひとつひとつ選びました。",
    showBase: false,
  },
  {
    en: "Handmade Accessories",
    ja: "手仕事のアクセサリー",
    desc: "彫金技術を習得した店主がシルバー925や天然石を使って制作する一点物アクセサリー。薔薇のモチーフや、アンティーク陶磁器を使ったリメイク作品など。",
    showBase: true,
  },
];

const faqs = [
  {
    q: "調布でヴィンテージ雑貨・セレクト雑貨を購入できますか？",
    a: "はい。東京都調布市国領町4-7-23のAtelier♡Springにて、フランスから届くアンティークやヴィンテージの食器や雑貨、手作りアクセサリーをご覧いただけます。アクセサリーのみBASEオンラインショップ（springwater.base.shop）でもご購入いただけます。",
  },
  {
    q: "フランスのアンティーク食器や雑貨はありますか？",
    a: "はい。フランス在住の仕入れ担当がアルビの蚤の市などで見つけたアンティークやヴィンテージの食器・雑貨を取り揃えています。量産品にはない経年美が魅力の一点物です。",
  },
  {
    q: "アクセサリーはどのような作品ですか？",
    a: "彫金技術を習得した店主がシルバー925や天然石を使って制作する一点物アクセサリーです。薔薇のモチーフや天然石を使った作品のほか、割れてしまったアンティーク陶磁器を使ったリメイクアクセサリーはほとんどが一点物です。",
  },
  {
    q: "オンラインで購入できますか？",
    a: "BASEオンラインショップ（springwater.base.shop）にてお買い求めいただけます。全国発送対応しています。",
  },
  {
    q: "店舗はどこにありますか？",
    a: "〒182-0022 東京都調布市国領町4-7-23にございます。京王線「国領駅」より徒歩約3分です。営業時間は11:00〜18:00、定休日は毎週月曜日・第1火曜日・第3火曜日です。最新情報はInstagram（@atelierspring_izumi）でご確認ください。",
  },
];

const galleryImages = [
  { src: "/images/shop/interior-fireplace.jpg", alt: "店内・暖炉とシャンデリア" },
  { src: "/images/shop/antique-bookshelf.jpg",  alt: "食器棚" },
  { src: "/images/shop/accessories-display.jpg", alt: "アクセサリーディスプレイ" },
  { src: "/images/shop/exterior-1.jpg",          alt: "Atelier♡Spring 外観" },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <HeroSection />

      {/* ─── Quote strip ─── */}
      <section className="bg-[#3A3028] py-12 lg:py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-cormorant text-2xl lg:text-3xl text-[#EDE8E1] font-light italic tracking-wide">
              &ldquo; 心がときめくものと出逢う場所。 &rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[11px] tracking-[0.25em] text-[#C9A96E] mt-4">
              — 調布・国領のセレクトショップ Atelier♡Spring
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── About ─── */}
      <section className="py-24 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">About</p></FadeIn>
              <FadeIn delay={0.12}>
                <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                  調布・国領にある<br /><span className="italic">小さなセレクトショップ</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                  <p>Atelier♡Spring（アトリエ♡スプリング）は、東京都調布市国領町にある小さなセレクトショップです。フランス在住の仕入れ担当から届くアンティークやヴィンテージの食器や雑貨と、彫金技術を習得した店主が手がける一点物のアクセサリーを取り揃えています。</p>
                  <p>「必要か必要ではないか」の判断ではなく、「手に取ったときに心が動く」もの——。暮らしが少し楽しくなるもの、心が潤うものとの出会いを大切に、お客様にときめきをお届けするための品々をご用意しています。</p>
                  <p>食器・雑貨の一点物から、彫金技術を活かした手しごとのアクセサリーまで。自分へのご褒美にも、大切な方へのギフトにも。</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.32}>
                <div className="mt-10">
                  <Link href="/concept" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#C9A96E] uppercase group">
                    コンセプトを詳しく見る
                    <span className="block w-8 h-px bg-[#C9A96E] group-hover:w-14 transition-all duration-500" />
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/shop/exterior-2.jpg" alt="Atelier♡Spring 外観" fill className="object-cover object-top scale-[1.03] hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#C9A96E]/25 -z-10" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="bg-[#EDE8E1]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.07}>
              <div className="relative aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover scale-[1.04] hover:scale-100 transition-transform duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── Category Cards ─── */}
      <section className="py-24 lg:py-32 bg-[#F0EBE3]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Items</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light">取り扱いカテゴリー</h2>
            </FadeIn>
            <FadeIn delay={0.18}><div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" /></FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <FadeIn key={cat.ja} delay={i * 0.1}>
                {cat.showBase ? (
                  <a href="https://springwater.base.shop/" target="_blank" rel="noopener noreferrer"
                    className="group block bg-[#FAF8F5] p-7 border border-[#E8E0D6] hover:border-[#C9A96E] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(58,48,40,0.08)] transition-all duration-400">
                    <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-3">{cat.en}</p>
                    <h3 className="font-cormorant text-xl text-[#3A3028] font-light mb-3">{cat.ja}</h3>
                    <p className="text-[12px] text-[#8A7A6A] leading-loose font-light">{cat.desc}</p>
                    <span className="inline-flex items-center gap-2 mt-5 text-[10px] tracking-[0.2em] text-[#C9A96E] uppercase group-hover:gap-4 transition-all duration-400">
                      BASEで見る <span className="block w-5 h-px bg-[#C9A96E]" />
                    </span>
                  </a>
                ) : (
                  <div className="bg-[#FAF8F5] p-7 border border-[#E8E0D6]">
                    <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-3">{cat.en}</p>
                    <h3 className="font-cormorant text-xl text-[#3A3028] font-light mb-3">{cat.ja}</h3>
                    <p className="text-[12px] text-[#8A7A6A] leading-loose font-light">{cat.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── アンティークやヴィンテージの魅力 ─── */}
      <section className="py-24 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn delay={0.1} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/shop/antique-bookshelf.jpg" alt="アンティークやヴィンテージの食器・雑貨" fill className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-[#C9A96E]/25 -z-10" />
            </FadeIn>
            <div>
              <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Antique &amp; Vintage</p></FadeIn>
              <FadeIn delay={0.12}>
                <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                  アンティークやヴィンテージとの、<br /><span className="italic">ときめく出会い。</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                  <p>アルビの蚤の市などでフランス在住の仕入れ担当が見つけたアンティークやヴィンテージの食器には、大量生産品にはない経年の美しさがあります。使い込まれた貫入（かんにゅう）のひび、金彩のわずかな退色、手描きの絵付け——それぞれが、フランスの暮らしの中で積み重なった日常の美しさです。</p>
                  <p>フランスの蚤の市やブロカントを巡る仕入れ担当が見つけた、本当に心を動かされる一点物だけをお届けしています。量産品では決して出せない経年の味わいと個性を、調布・国領から。</p>
                  <p>テーブルに一つ置くだけで、食事の時間が少しだけ豊かになる——それが、ときめきの一点物との出会いです。</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 手仕事アクセサリー ─── */}
      <section className="py-24 lg:py-36 bg-[#EDE8E1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Handmade Accessories</p></FadeIn>
              <FadeIn delay={0.12}>
                <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                  手しごとで生まれる、<br /><span className="italic">ひとつだけの輝き。</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                  <p>Atelier♡Springのアクセサリーはすべて、彫金技術を習得した店主の手しごとによるものです。シルバー925や天然石を素材に、薔薇のモチーフなど心ときめくアクセサリーを一つひとつ丁寧に制作しています。</p>
                  <p>割れてしまったアンティーク陶磁器を使ったリメイクアクセサリーもほとんどが一点物。陶器だけではなく、彫金技術を活かしたさまざまな作品を作成しております。</p>
                  <p>お客様の宝物になるように、そんな願いを込めて一点一点丁寧に制作しています。本格的なシルバー925のアクセサリーから、遊び心を活かして制作した気軽なアクセサリーまで。どうぞごゆっくりご覧ください。</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.32}>
                <div className="mt-10">
                  <Link href="/accessories" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#C9A96E] uppercase group">
                    アクセサリーについて詳しく見る
                    <span className="block w-8 h-px bg-[#C9A96E] group-hover:w-14 transition-all duration-500" />
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/shop/accessories-display.jpg" alt="手しごとのアクセサリー" fill className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#C9A96E]/25 -z-10" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 店内紹介 ─── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Our Atelier</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light">店内のご紹介</h2></FadeIn>
            <FadeIn delay={0.18}><div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" /></FadeIn>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeIn delay={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/shop/interior-chandelier.jpg" alt="店内シャンデリア" fill className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700" />
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-6">
              {[
                { src: "/images/shop/antique-shelf.jpg",    alt: "食器棚" },
                { src: "/images/shop/accessories-tray.jpg", alt: "アクセサリートレイ" },
                { src: "/images/shop/antique-plates2.jpg",  alt: "フランス食器" },
                { src: "/images/shop/flower-rose-white.jpg", alt: "白いバラ" },
              ].map((img, i) => (
                <FadeIn key={img.src} delay={0.1 + i * 0.07}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={img.src} alt={img.alt} fill className="object-cover scale-[1.04] hover:scale-100 transition-transform duration-700" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Online Shop CTA ─── */}
      <section className="py-20 lg:py-28 bg-[#3A3028]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Online Shop</p></FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-[#EDE8E1] font-light italic mb-6">
              最新のアクセサリーはBASEで<br />ご覧いただけます。
            </h2>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="text-[13px] text-[#BDB0A4] font-light leading-loose mb-10 max-w-xl mx-auto">
              アトリエ♡スプリングでは、アクセサリーのみBASEオンラインショップからもご購入いただけます。<br className="hidden sm:block" />新商品は店舗と同じタイミングでアップしております。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="https://springwater.base.shop/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.3em] uppercase hover:bg-[#C9A96E] hover:text-white hover:gap-6 transition-all duration-400">
              BASE公式ショップはこちら
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── 調布・国領でセレクトショップをお探しの方へ ─── */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">For Local Visitors</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light">調布・国領でセレクトショップをお探しの方へ</h2></FadeIn>
            <FadeIn delay={0.18}><div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" /></FadeIn>
          </div>
          <FadeIn delay={0.22}>
            <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light max-w-2xl mx-auto">
              <p>フランス在住の仕入れ担当から届くアンティークやヴィンテージの食器・雑貨と、彫金技術を習得した店主が制作する手しごとのアクセサリーを扱うセレクトショップです。お客様に「ときめき」をお届けするための品々をご用意しています。</p>
              <p>食器や雑貨のほか、シルバー925や天然石を使った手作りアクセサリーも取り扱っています。自分へのご褒美に、大切な方へのギフトに。世界でひとつの品との出会いをお楽しみください。</p>
              <p>なお、BASEオンラインショップではアクセサリーのみ販売しています。食器・雑貨は店舗でのみお求めいただけます。</p>
              <p>営業時間：11:00〜18:00　定休日：毎週月曜日・第1・第3火曜日<br />最新情報はInstagram（@atelierspring_izumi）でご確認ください。</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="text-center mt-12">
              <Link href="/access" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#5C4A3A] uppercase group">
                店舗情報・アクセスを見る
                <span className="block w-8 h-px bg-[#5C4A3A] group-hover:w-14 transition-all duration-500" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Instagram CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#EDE8E1]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Follow Us</p></FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light italic mb-6">
              日々の入荷情報は<br />Instagramで。
            </h2>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="text-[13px] text-[#5C4A3A] font-light leading-loose mb-10">
              新入荷のアンティークやヴィンテージ雑貨や新作アクセサリーは、Instagramで先行公開しています。<br className="hidden sm:block" />
              ときめく品々との出会いを、日常の中でお楽しみください。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a href="https://www.instagram.com/atelierspring_izumi/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-4 bg-[#3A3028] text-[#FAF8F5] text-[11px] tracking-[0.25em] uppercase hover:bg-[#5C4A3A] hover:gap-6 transition-all duration-400">
              @atelierspring_izumi を見る
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 lg:py-32 bg-[#F0EBE3]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">FAQ</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light">よくある質問</h2></FadeIn>
            <FadeIn delay={0.18}><div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" /></FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <FAQList items={faqs} />
          </FadeIn>
        </div>
      </section>

      {/* ─── 店舗情報 ─── */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E8E0D6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Shop Info</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light">店舗情報</h2></FadeIn>
            <FadeIn delay={0.18}><div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" /></FadeIn>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/shop/entrance.jpg" alt="Atelier♡Spring 入口" fill className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700" />
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
              <FadeIn delay={0.15}>
                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Location</p>
                  <p className="font-cormorant text-xl text-[#3A3028] font-light mb-2">調布市 国領町</p>
                  <address className="not-italic text-[12px] text-[#8A7A6A] leading-loose">〒182-0022<br />東京都調布市国領町4-7-23<br />京王線「国領駅」より徒歩約3分</address>
                  <a href="https://www.google.com/maps/search/?api=1&query=東京都調布市国領町4-7-23" target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase hover:underline">Googleマップで見る →</a>
                </div>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Hours</p>
                  <p className="font-cormorant text-xl text-[#3A3028] font-light mb-2">営業時間</p>
                  <p className="text-[12px] text-[#8A7A6A] leading-loose">
                    11:00〜18:00<br />
                    定休日：毎週月曜日・第1・第3火曜日<br />
                    最新情報はInstagramをご確認ください
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.29}>
                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Online &amp; Contact</p>
                  <p className="font-cormorant text-xl text-[#3A3028] font-light mb-2">オンライン / お問い合わせ</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://springwater.base.shop/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#C9A96E] hover:underline">BASE Online Shop</a>
                    <a href="https://www.instagram.com/atelierspring_izumi/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#C9A96E] hover:underline">@atelierspring_izumi</a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={0.2}>
            <div className="text-center mt-12">
              <Link href="/access" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#5C4A3A] uppercase group">
                アクセス詳細を見る
                <span className="block w-8 h-px bg-[#5C4A3A] group-hover:w-14 transition-all duration-500" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
