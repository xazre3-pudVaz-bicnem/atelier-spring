import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コンセプト",
  description:
    "調布市国領町のアンティークショップAtelier♡Springのコンセプト。南フランスアンティーク食器と、ジュエリーデザイナーが生み出す手作りアクセサリーの物語。",
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
            アトリエの物語
          </h1>
        </div>
      </section>

      {/* South of France */}
      <section className="py-24 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">South of France</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                陽光降り注ぐ<br />
                <span className="italic">南フランスから。</span>
              </h2>
              <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                <p>
                  プロヴァンスの青い空の下、何十年もの時を経た食器たちはそれぞれ異なる表情を持っています。使い込まれた貫入（かんにゅう）の細かなひびが描く模様、金彩のわずかな退色——その一つひとつが、フランスの家庭で積み重なった日常の美しさです。
                </p>
                <p>
                  Atelier♡Springは、そんな南フランスのアンティーク食器を調布から届けることを大切にしています。買い付けの旅では、地域の骨董市や老舗の蚤の市を巡り、本当に心を動かされた一点だけを選び抜いています。
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shop/antique-window.jpg"
                  alt="南フランスのアンティーク食器"
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
            { src: "/images/shop/antique-shelf.jpg",    alt: "アンティーク食器棚" },
            { src: "/images/shop/antique-pitcher2.jpg", alt: "アンティーク水差し" },
            { src: "/images/shop/antique-plates2.jpg",  alt: "アンティーク皿" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Upcycle story */}
      <section className="py-24 lg:py-36 bg-[#EDE8E1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/shop/accessories-tray.jpg"
                  alt="アンティーク陶器から生まれたアクセサリー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#C9A96E]/20 -z-10" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6">Upcycle &amp; Craft</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-[#3A3028] font-light leading-snug mb-8">
                割れた欠片は、<br />
                <span className="italic">美しい宝石になる。</span>
              </h2>
              <div className="space-y-5 text-[13px] lg:text-[14px] leading-loose text-[#5C4A3A] font-light">
                <p>
                  フランスから食器を輸送する長い旅路の中で、どうしても傷ついてしまうものが出てきます。以前であれば、そうした欠片は惜しまれながら廃棄されていました。
                </p>
                <p>
                  でも、ジュエリーデザイナーである店主の目には、それは「まだ生きている」ものに映りました。リモージュの磁器片、プロヴァンスの陶器の断片——一つひとつの形と色彩を活かしながら、シルバーや天然石を組み合わせて丁寧に仕上げたアクセサリーは、壊れる前とはまた別の光を放ちます。
                </p>
                <p>
                  調布のアンティークショップから生まれる、廃棄ゼロへの小さな試み。それがAtelier♡Springのもうひとつの顔です。
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
              { num: "01", title: "本物の一点物",     body: "大量生産品は置きません。フランスの時間を経た、代わりのない一点物だけを扱います。" },
              { num: "02", title: "物語のある品",     body: "どの食器にも、どのアクセサリーにも、旅と人の歴史が宿っています。その物語ごとお届けします。" },
              { num: "03", title: "サステナブルな美", body: "割れてしまった陶器も、捨てません。新しい形に生まれ変わらせることで、美しさを次の世代へ。" },
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
              調布・国領から、南フランスの美を。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3A3028]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-cormorant text-3xl lg:text-4xl text-[#EDE8E1] font-light italic mb-8">
            実際に手に取って、感じてください。
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
