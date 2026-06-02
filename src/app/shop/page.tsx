import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Shop・商品紹介",
  description:
    "調布のアンティークショップAtelier♡Springのオンラインショップ。南フランスアンティーク食器・雑貨と手作りアクセサリーの一点物をBASEにてご購入いただけます。",
};

const categories = [
  {
    en: "Antique Tableware",
    ja: "南フランスアンティーク食器",
    desc: "プロヴァンスや南仏各地の骨董市から厳選した皿・カップ・プレートなど。使い込まれた経年美が魅力の一点物です。",
  },
  {
    en: "Antique Goods",
    ja: "アンティーク雑貨",
    desc: "フランスの日常に息づいた小物や装飾品。長い時間が育んだ味わいを、あなたの暮らしの中へ。",
  },
  {
    en: "Ceramic Accessories",
    ja: "陶器アクセサリー",
    desc: "南フランスのアンティーク磁器・陶器の欠片から生まれた一点物のアクセサリー。",
  },
  {
    en: "Necklace",
    ja: "ネックレス",
    desc: "磁器の欠片とシルバー・天然石を組み合わせた繊細なネックレス。",
  },
  {
    en: "Pierced / Clip Earrings",
    ja: "ピアス・イヤリング",
    desc: "フランス磁器から生まれた揺れるピアス・イヤリング。",
  },
  {
    en: "Gift",
    ja: "ギフト",
    desc: "一点物だからこそ伝わる特別な贈り物。大切な方への南フランスのプレゼントに。",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 lg:pt-44 pb-16 lg:pb-24 bg-[#F0EBE3]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Online Shop</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl text-[#3A3028] font-light leading-tight mb-6">
            商品紹介
          </h1>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mb-8" />
          <p className="text-[13px] text-[#5C4A3A] font-light leading-loose max-w-xl mx-auto">
            南フランスアンティーク食器・雑貨と、アンティーク陶器から生まれた手作りアクセサリーを取り揃えています。<br />
            すべて一点物。ご購入はBASEオンラインショップにて。
          </p>
        </div>
      </section>

      {/* BASE CTA */}
      <section className="py-12 bg-[#3A3028]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-cormorant text-xl text-[#EDE8E1] font-light">最新の商品はBASEオンラインショップでご覧ください</p>
            <p className="text-[11px] text-[#BDB0A4] mt-1 font-light">全国発送対応 · 一点物のため売り切れの場合があります</p>
          </div>
          <a
            href="https://springwater.base.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center px-8 py-4 border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.25em] uppercase hover:bg-[#C9A96E] hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            BASEショップへ →
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28 bg-[#F0EBE3]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Categories</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl text-[#3A3028] font-light">取り扱いカテゴリー</h2>
            <div className="mt-6 w-12 h-px bg-[#C9A96E] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <a
                key={cat.ja}
                href="https://springwater.base.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FAF8F5] p-7 border border-[#E8E0D6] hover:border-[#C9A96E] transition-all duration-300"
              >
                <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-3">{cat.en}</p>
                <h3 className="font-cormorant text-xl text-[#3A3028] font-light mb-3">{cat.ja}</h3>
                <p className="text-[12px] text-[#8A7A6A] leading-loose font-light">{cat.desc}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-[10px] tracking-[0.2em] text-[#C9A96E] uppercase group-hover:gap-4 transition-all duration-300">
                  BASEで見る <span className="block w-5 h-px bg-[#C9A96E]" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About antique */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-cormorant text-3xl lg:text-4xl text-[#3A3028] font-light text-center mb-10">
            南フランスアンティークについて
          </h2>
          <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light max-w-2xl mx-auto">
            <p>
              Atelier♡Springで取り扱う南フランスアンティーク食器は、プロヴァンスをはじめとする南仏各地の骨董市や蚤の市から、店主が直接買い付けた一点物です。
            </p>
            <p>
              リモージュ磁器、プロヴァンス陶器、ヴィンテージの食器類など、大量生産品にはない経年美と個性が魅力。食卓に置くだけで、南フランスの空気感が漂います。
            </p>
            <p>
              在庫・商品ラインナップはBASEオンラインショップにてご確認ください。入荷情報はInstagramでも随時発信しています。
            </p>
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://springwater.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#3A3028] text-[#FAF8F5] text-[11px] tracking-[0.25em] uppercase hover:bg-[#5C4A3A] transition-colors duration-300"
            >
              BASEで最新在庫を確認
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-[#3A3028] text-[#3A3028] text-[11px] tracking-[0.25em] uppercase hover:bg-[#3A3028] hover:text-[#FAF8F5] transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-10 bg-[#EDE8E1] border-t border-[#E8E0D6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[12px] text-[#8A7A6A] font-light leading-loose">
            ※ 掲載商品は在庫状況により変動します。最新の在庫・価格はBASEオンラインショップをご確認ください。<br />
            ※ 商品はすべて一点物のため、売り切れの場合がございます。
          </p>
        </div>
      </section>
    </>
  );
}
