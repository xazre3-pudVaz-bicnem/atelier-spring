import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "手仕事のアクセサリー｜調布・国領のセレクトショップ Atelier♡Spring",
  description:
    "調布のAtelier♡Springの手作りアクセサリー。彫金技術を習得した店主がシルバー925や天然石を使って制作する一点物アクセサリー。薔薇のモチーフや天然石を使った作品のほか、アンティーク陶磁器を使ったリメイクアクセサリーも制作。調布・国領のセレクトショップ。",
};

export default function AccessoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-44 pb-0 overflow-hidden relative">
        <div className="relative h-[40vh] lg:h-[55vh]">
          <Image
            src="/images/accessories-hero.jpg"
            alt="Atelier♡Springの手仕事のアクセサリー"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-transparent to-[#3A3028]/50" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Handmade Accessories</p>
          <h1 className="font-cormorant text-4xl lg:text-6xl text-white font-light">
            作家の手しごとで生まれる、<br className="hidden sm:block" />
            <span className="italic">ひとつだけの輝き</span>
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">About</p>
          <h2 className="font-cormorant text-3xl lg:text-4xl text-[#3A3028] font-light mb-8">
            心ときめく、世界にひとつのアクセサリー
          </h2>
          <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light text-left max-w-2xl mx-auto">
            <p>
              Atelier♡Springのアクセサリーはすべて、彫金技術を習得した店主の手しごとによるものです。シルバー925や天然石を素材に、薔薇のモチーフなど心ときめくアクセサリーを一つひとつ丁寧に制作しています。
            </p>
            <p>
              割れてしまったアンティーク陶磁器を使ったリメイクアクセサリーはほとんどが一点物。陶器の欠片だけではなく、彫金技術を活かしたさまざまな作品を作成しております。お客様の宝物になるように、そんな願いを込めて一点一点丁寧に制作しています。
            </p>
            <p>
              ネックレス、ピアス・イヤリング、ブローチなど、同じ作品は二つとありません。あなただけの、世界にひとつのアクセサリーをお選びください。
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-[#EDE8E1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Process</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl text-[#3A3028] font-light">制作について</h2>
            <div className="mt-6 w-12 h-px bg-[#C9A96E] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "Step 01",
                title: "素材との出会い",
                desc: "シルバー925、天然石、割れてしまった陶磁器の欠片——心ときめく素材との出会いから制作が始まります。",
              },
              {
                step: "Step 02",
                title: "彫金技術で形にする",
                desc: "彫金教室で学んだ技術を活かし、素材の個性を引き出しながら一点一点丁寧に仕上げていきます。",
              },
              {
                step: "Step 03",
                title: "世界にひとつの作品へ",
                desc: "身に付けるたびにお出掛けが楽しくなる、ときめきのアクセサリーが生まれます。",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <span className="font-cormorant text-4xl text-[#C9A96E]/50 font-light mb-3">{s.step}</span>
                <h3 className="font-cormorant text-lg text-[#3A3028] font-medium mb-3">{s.title}</h3>
                <p className="text-[12px] text-[#8A7A6A] leading-loose font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story image */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shop/accessories-display.jpg"
                  alt="手しごとのアクセサリー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#C9A96E]/25 -z-10" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Tokimeki</p>
              <h2 className="font-cormorant text-3xl lg:text-4xl text-[#3A3028] font-light leading-snug mb-6">
                「ときめき」を纏う、<br />
                <span className="italic">毎日のアクセサリー。</span>
              </h2>
              <div className="space-y-4 text-[13px] leading-loose text-[#5C4A3A] font-light">
                <p>
                  彫金技術を習得した店主がシルバー925や天然石を使って制作する一点物アクセサリー。薔薇のモチーフや、割れてしまったアンティーク陶磁器を使ったリメイクアクセサリーはほとんどが一点物です。
                </p>
                <p>
                  本格的なシルバー925のアクセサリーから、遊び心を活かして制作した気軽なアクセサリーまで。どうぞごゆっくりご覧ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BASE CTA */}
      <section className="py-20 bg-[#3A3028]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Online Shop</p>
          <h2 className="font-cormorant text-3xl lg:text-4xl text-[#EDE8E1] font-light italic mb-6">
            作品はBASEオンラインショップで<br />ご購入いただけます。
          </h2>
          <p className="text-[12px] text-[#BDB0A4] font-light leading-loose mb-8">
            最新の作品はBASEにて販売中。一点物のため、お早めにご確認ください。<br />
            オーダーのご相談はInstagramのDMにてどうぞ。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://springwater.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
            >
              BASEで全作品を見る
            </a>
            <a
              href="https://www.instagram.com/atelierspring_izumi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-[#EDE8E1]/40 text-[#EDE8E1] text-[11px] tracking-[0.25em] uppercase hover:border-[#EDE8E1] transition-all duration-300"
            >
              Instagramでお問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-12 bg-[#EDE8E1] border-t border-[#E8E0D6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] text-[#5C4A3A] uppercase group"
          >
            <span className="block w-8 h-px bg-[#5C4A3A] group-hover:w-14 transition-all duration-300" />
            トップページへ戻る
          </Link>
        </div>
      </section>
    </>
  );
}
