import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コンセプト｜調布・国領のセレクトショップ Atelier♡Spring",
  description:
    "Atelier♡Springのコンセプト。「ときめき」を大切に——必要か必要ではないかの判断ではなく、心がときめくものとの出逢いを。調布市国領町のセレクトショップが大切にしていること。",
};

export default function ConceptPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 h-[50vh] lg:h-[60vh] min-h-[360px] flex items-end pb-14 overflow-hidden">
        <Image
          src="/images/shop/interior-chandelier.jpg"
          alt="Atelier♡Spring 店内"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A3028]/75 via-[#3A3028]/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Concept</p>
          <h1 className="font-cormorant text-4xl lg:text-6xl text-white font-light italic">
            ときめきと出会う場所
          </h1>
        </div>
      </section>

      {/* ときめきのコンセプト */}
      <section className="py-24 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Our Story</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                「必要か必要ではないか」の判断ではなく、<br />
                <span className="italic">心がときめくものと出逢う。</span>
              </h2>
              <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                <p>
                  アトリエ♡スプリングがご提供させていただくのは「ときめき」です。
                </p>
                <p>
                  「必要か必要ではないか」の判断ではなく、「使うことで生活が楽しくなったり、心が潤うか？」——どうぞお手に取ってお選びください。
                </p>
                <p>
                  フランス在住の仕入れ担当がアルビの蚤の市やブロカントで見つけたアンティークやヴィンテージの品々に加え、店主がお客様にときめきを届けるためにセレクトした雑貨も取り揃えています。
                </p>
                <p>
                  調布・国領の大人可愛い小さなショップで、あなただけの「ときめく一点」との出会いをお待ちしています。
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shop/antique-window.jpg"
                  alt="フランスから届く一点物"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-[#C9A96E]/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 店内写真 3枚 */}
      <section className="bg-[#EDE8E1]">
        <div className="grid grid-cols-3">
          {[
            { src: "/images/shop/antique-shelf.jpg",    alt: "フランス食器棚" },
            { src: "/images/shop/antique-pitcher2.jpg", alt: "アンティーク水差し" },
            { src: "/images/shop/antique-plates2.jpg",  alt: "フランス食器" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* フランスのセレクト */}
      <section className="py-24 lg:py-36 bg-[#EDE8E1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shop/accessories-tray.jpg"
                  alt="手しごとのアクセサリー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#C9A96E]/20 -z-10" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Handmade &amp; Craft</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                彫金技術で生まれる、<br />
                <span className="italic">世界に一つの作品。</span>
              </h2>
              <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                <p>
                  店主は彫金技術を習得し、シルバー925や天然石を使ったアクセサリーを制作しています。薔薇のモチーフや天然石を使った作品のほか、割れてしまったアンティーク陶磁器を使ったリメイクアクセサリーも手がけており、ほとんどが一点物です。
                </p>
                <p>
                  お客様の宝物になるように、そんな願いを込めて一点一点丁寧に制作しています。本格的なシルバー925のアクセサリーから、遊び心を活かして制作した気軽なアクセサリーまで。どうぞごゆっくりご覧ください。
                </p>
                <p>
                  調布のセレクトショップから生まれる、世界にひとつだけのアクセサリー。それがAtelier♡Springのもうひとつの顔です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセサリー写真 2枚 */}
      <section className="bg-[#FAF8F5]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/shop/accessories-chains.jpg" alt="ゴールドチェーンネックレス" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/shop/accessories-display.jpg" alt="アクセサリーディスプレイ" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Our Values</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light mb-16">
            Atelier♡Springが大切にすること
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "ときめきの一点物",
                body: "「必要か必要ではないか」の判断ではなく、心が潤うか——そのときめきを基準に、フランスから一点一点セレクトしています。",
              },
              {
                num: "02",
                title: "手しごとのぬくもり",
                body: "彫金技術を学んだ店主が一つひとつ手がけるアクセサリー。量産品にはない、手仕事だからこそ宿る温もりがあります。",
              },
              {
                num: "03",
                title: "物語のある品",
                body: "フランスの暮らしから生まれた食器・雑貨には、長い時間と人の記憶が宿っています。その物語ごとお届けします。",
              },
            ].map((v) => (
              <div key={v.num} className="flex flex-col items-center">
                <span className="font-cormorant text-5xl text-[#C9A96E]/40 font-light mb-4">{v.num}</span>
                <h3 className="font-cormorant text-xl text-[#3A3028] font-medium mb-3">{v.title}</h3>
                <p className="text-[12px] text-[#8A7A6A] leading-loose font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 店内写真フル */}
      <section className="bg-[#EDE8E1]">
        <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image src="/images/shop/interior-overview.jpg" alt="Atelier♡Spring 店内全体" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#3A3028]/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-cormorant text-2xl lg:text-4xl text-white font-light italic tracking-wide text-center px-6">
              ときめきを、暮らしの中へ。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3A3028]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-cormorant text-3xl lg:text-4xl text-[#EDE8E1] font-light italic mb-8">
            どうぞお手に取ってお選びください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/access"
              className="inline-flex items-center px-8 py-4 border border-[#EDE8E1] text-[#EDE8E1] text-[11px] tracking-[0.25em] uppercase hover:bg-[#EDE8E1] hover:text-[#3A3028] transition-all duration-300"
            >
              店舗へのアクセス
            </Link>
            <a
              href="https://springwater.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#C9A96E] text-white text-[11px] tracking-[0.25em] uppercase hover:bg-[#B8915A] transition-colors duration-300"
            >
              Online Shopを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
