import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";
import FAQList from "@/components/FAQList";

export const metadata: Metadata = {
  title: "調布・国領のアンティーク雑貨店｜Atelier♡Spring",
  description:
    "東京都調布市国領町にある南フランスアンティーク食器・雑貨と手作りアクセサリーのお店。調布・国領でアンティークをお探しなら、ジュエリーデザイナーが営むAtelier♡Springへ。フランスから直輸入した一点物を取り揃えています。",
};

const categories = [
  { en: "Antique Tableware",       ja: "南フランスアンティーク食器",  desc: "プロヴァンスや南仏各地の骨董市から厳選。皿・カップ・プレートなど、毎日の食卓に物語を添える一点物。" },
  { en: "Antique Goods",           ja: "アンティーク雑貨",            desc: "フランスの日常に息づいた小物や装飾品。長い時間が育んだ経年美を、暮らしの中へ。" },
  { en: "Ceramic Accessories",     ja: "陶器アクセサリー",            desc: "南フランスのアンティーク磁器・陶器の欠片から生まれた一点物。世界にひとつだけのアクセサリー。" },
  { en: "Necklace",                ja: "ネックレス",                  desc: "磁器の欠片とシルバー・天然石を組み合わせた繊細なネックレス。南フランスの記憶を纏う作品。" },
  { en: "Pierced / Clip Earrings", ja: "ピアス・イヤリング",          desc: "揺れるたびに光を纏う、フランス磁器から生まれたピアス・イヤリング。" },
  { en: "Gift",                    ja: "ギフト",                      desc: "大切な方への贈り物に。一点物だからこそ伝わる、世界でひとつの気持ちを添えて。" },
];

const faqs = [
  { q: "調布でアンティーク雑貨を購入できますか？",   a: "はい。東京都調布市国領町4-7-23のAtelier♡Springにて、南フランスアンティーク食器・雑貨・アクセサリーをご覧いただけます。また、BASEオンラインショップ（springwater.base.shop）からもご購入いただけます。" },
  { q: "南フランスアンティークの商品はありますか？",  a: "はい。店主が南フランスの骨董市や蚤の市から直接買い付けたアンティーク食器・雑貨を取り揃えています。プロヴァンスをはじめ、南仏各地の一点物です。" },
  { q: "アクセサリーは一点物ですか？",               a: "すべて一点物です。フランスアンティークの陶器・磁器の欠片を、ジュエリーデザイナーである店主が一つひとつ丁寧に仕上げています。同じ作品は二つとありません。" },
  { q: "オンラインで購入できますか？",               a: "BASEオンラインショップ（springwater.base.shop）にてお買い求めいただけます。全国発送対応しています。" },
  { q: "店舗はどこにありますか？",                   a: "〒182-0022 東京都調布市国領町4-7-23にございます。京王線「国領駅」より徒歩圏内です。営業日・時間は不定期のため、最新情報はInstagram（@atelierspring_izumi）でご確認ください。" },
];

const galleryImages = [
  { src: "/images/shop/interior-fireplace.jpg", alt: "店内・暖炉とシャンデリア" },
  { src: "/images/shop/antique-bookshelf.jpg",  alt: "アンティーク食器棚" },
  { src: "/images/shop/accessories-display.jpg",alt: "アクセサリーディスプレイ" },
  { src: "/images/shop/exterior-1.jpg",         alt: "Atelier♡Spring 外観" },
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
              &ldquo; From the sun-drenched fields of southern France to your everyday life. &rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[11px] tracking-[0.25em] text-[#C9A96E] mt-4">
              — 調布・国領の南フランスアンティークショップ Atelier♡Spring
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
                  調布・国領にある<br /><span className="italic">南フランスアンティークショップ</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                  <p>Atelier♡Spring（アトリエ♡スプリング）は、東京都調布市国領町にある小さなアンティークショップです。南フランスから直接買い付けたアンティーク食器・雑貨と、ジュエリーデザイナーである店主が手がける一点物のアクセサリーを取り揃えています。</p>
                  <p>「調布でアンティークを気軽に楽しめるお店を」という思いのもと、プロヴァンスをはじめとする南仏各地の骨董市・蚤の市を巡り、本当に心を動かされた品々だけをセレクト。量産品にはない一点物の美しさと、南フランスの空気を調布・国領からお届けします。</p>
                  <p>アンティーク食器・陶器雑貨の一点物から、フランス磁器の欠片を再生した手作りアクセサリーまで。自分へのご褒美にも、大切な方へのギフトにも。</p>
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
            <FadeIn delay={0.24}><p className="mt-6 text-[12px] text-[#8A7A6A] font-light">すべて一点物。ご購入はBASEオンラインショップにて。</p></FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <FadeIn key={cat.ja} delay={i * 0.07}>
                <a href="https://springwater.base.shop/" target="_blank" rel="noopener noreferrer"
                  className="group block bg-[#FAF8F5] p-7 border border-[#E8E0D6] hover:border-[#C9A96E] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(58,48,40,0.08)] transition-all duration-400">
                  <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-3">{cat.en}</p>
                  <h3 className="font-cormorant text-xl text-[#3A3028] font-light mb-3">{cat.ja}</h3>
                  <p className="text-[12px] text-[#8A7A6A] leading-loose font-light">{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[10px] tracking-[0.2em] text-[#C9A96E] uppercase group-hover:gap-4 transition-all duration-400">
                    BASEで見る <span className="block w-5 h-px bg-[#C9A96E]" />
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 南フランスアンティークの魅力 ─── */}
      <section className="py-24 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn delay={0.1} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/shop/antique-bookshelf.jpg" alt="南フランスアンティーク食器の魅力" fill className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-[#C9A96E]/25 -z-10" />
            </FadeIn>
            <div>
              <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">South of France</p></FadeIn>
              <FadeIn delay={0.12}>
                <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                  南フランスアンティークの<br /><span className="italic">唯一無二の魅力</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                  <p>南フランスのアンティーク食器には、大量生産品にはない「時間の美しさ」が宿っています。使い込まれた貫入（かんにゅう）のひび、金彩のわずかな退色、手描きの絵付け——それぞれがフランスの家庭で積み重なった日常の記憶です。</p>
                  <p>プロヴァンスの青い空の下、何十年もの時を経たアンティーク食器は、量産品では決して出せない経年美を持っています。テーブルに一つ置くだけで、食事の時間がぐっと豊かになる——それがアンティーク食器の醍醐味です。</p>
                  <p>Atelier♡Springでは、南仏の骨董商・蚤の市・アンティーク市場を丁寧に巡り、本当に心を動かされた一点物だけを日本にお届けしています。</p>
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
                  割れた陶器が、<br /><span className="italic">手仕事で生まれ変わる。</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                  <p>フランスから食器を輸送する長い旅路の中で、どうしても傷ついてしまうものが出てきます。以前であれば惜しまれながら廃棄されていたそれらを、ジュエリーデザイナーである店主は「まだ生きている」と感じました。</p>
                  <p>リモージュの白磁、プロヴァンスの色付き陶器——その美しい欠片を一つひとつ磨き、シルバーや天然石と組み合わせて仕上げた手作りアクセサリーは、壊れる前とはまた別の輝きを放ちます。</p>
                  <p>陶器アクセサリー、ネックレス、ピアス・イヤリングなど、すべて一点物。南フランスの記憶を身に纏う、世界にひとつだけの作品です。</p>
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
                <Image src="/images/shop/accessories-display.jpg" alt="アンティーク陶器から生まれた手作りアクセサリー" fill className="object-cover scale-[1.03] hover:scale-100 transition-transform duration-700" />
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
                { src: "/images/shop/antique-shelf.jpg",   alt: "アンティーク食器棚" },
                { src: "/images/shop/accessories-tray.jpg", alt: "アクセサリートレイ" },
                { src: "/images/shop/antique-plates2.jpg",  alt: "アンティーク皿" },
                { src: "/images/shop/flower-rose-white.jpg",alt: "白いバラ" },
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
              最新の商品はBASEで<br />ご覧いただけます。
            </h2>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="text-[13px] text-[#BDB0A4] font-light leading-loose mb-10 max-w-xl mx-auto">
              南フランスアンティーク食器・雑貨、陶器アクセサリー、ネックレス、ピアスなど、最新入荷商品をBASEオンラインショップでご覧ください。全国発送対応。
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

      {/* ─── 調布でアンティークをお探しの方へ ─── */}
      <section className="py-24 lg:py-32 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <FadeIn><p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">For Local Visitors</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light">調布でアンティークをお探しの方へ</h2></FadeIn>
            <FadeIn delay={0.18}><div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" /></FadeIn>
          </div>
          <FadeIn delay={0.22}>
            <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light max-w-2xl mx-auto">
              <p>「調布でアンティークショップを探している」「国領周辺でアンティーク雑貨が買えるお店はないか」——そのような方に、Atelier♡Springをおすすめします。</p>
              <p>京王線の国領駅からほど近い場所に位置する当店は、南フランスアンティーク専門の小さなアトリエショップです。量産品にはない一点物の美しさ、経年による味わい、そして南フランスの空気感を、調布・国領からお届けしています。</p>
              <p>アンティーク食器や陶器雑貨のほか、フランス磁器の欠片から生まれた手作りアクセサリーも取り扱っています。自分へのご褒美に、大切な方へのギフトに。世界でひとつの品との出会いをお楽しみください。</p>
              <p>店舗は不定期営業のため、訪問前にInstagram（@atelierspring_izumi）にて営業日をご確認ください。BASEオンラインショップでは常時お買い求めいただけます。</p>
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
              新入荷のアンティーク食器や新作アクセサリーは、Instagramで先行公開しています。<br className="hidden sm:block" />
              南フランスの空気をまとった品々を、日常の中でお楽しみください。
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
                  <address className="not-italic text-[12px] text-[#8A7A6A] leading-loose">〒182-0022<br />東京都調布市国領町4-7-23<br />京王線「国領駅」より徒歩圏内</address>
                  <a href="https://www.google.com/maps/search/?api=1&query=東京都調布市国領町4-7-23" target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase hover:underline">Googleマップで見る →</a>
                </div>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div>
                  <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Hours</p>
                  <p className="font-cormorant text-xl text-[#3A3028] font-light mb-2">営業時間</p>
                  <p className="text-[12px] text-[#8A7A6A] leading-loose">不定期営業<br />最新情報はInstagramをご確認ください</p>
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
