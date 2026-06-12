import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Atelier♡Spring（調布のセレクトショップ）へのお問い合わせ。商品のご質問、オーダーのご相談はInstagramのDMまたは下記フォームよりお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 lg:pt-44 pb-16 lg:pb-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-4">Contact</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl text-[#3A3028] font-light leading-tight mb-6">
            お問い合わせ
          </h1>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mb-8" />
          <p className="text-[13px] text-[#5C4A3A] font-light leading-loose max-w-lg mx-auto">
            商品のご質問、オーダーのご相談、取材・掲載のご依頼など、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="pb-20 lg:pb-32 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Instagram DM */}
            <a
              href="https://www.instagram.com/atelierspring_izumi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#E8E0D6] p-8 lg:p-10 hover:border-[#C9A96E] transition-all duration-300"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-4">Recommended</p>
              <h2 className="font-cormorant text-2xl text-[#3A3028] font-light mb-3">Instagram DM</h2>
              <p className="text-[12px] text-[#8A7A6A] font-light leading-loose mb-6">
                最も確実にご連絡いただける方法です。お気軽にDMをお送りください。通常1〜3日以内にご返信いたします。
              </p>
              <span className="text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                @atelierspring_izumi
                <span className="block w-6 h-px bg-[#C9A96E]" />
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:lavender.izumi@ezweb.ne.jp"
              className="group border border-[#E8E0D6] p-8 lg:p-10 hover:border-[#C9A96E] transition-all duration-300"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#8A7A6A] uppercase mb-4">Email</p>
              <h2 className="font-cormorant text-2xl text-[#3A3028] font-light mb-3">メール</h2>
              <p className="text-[12px] text-[#8A7A6A] font-light leading-loose mb-6">
                メールでのお問い合わせも承っております。件名にお問い合わせ内容をご記入ください。
              </p>
              <span className="text-[11px] tracking-[0.15em] text-[#C9A96E] flex items-center gap-2 group-hover:gap-4 transition-all duration-300 break-all">
                lavender.izumi@ezweb.ne.jp
                <span className="block w-6 h-px bg-[#C9A96E] flex-shrink-0" />
              </span>
            </a>

            {/* BASE */}
            <a
              href="https://springwater.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#E8E0D6] p-8 lg:p-10 hover:border-[#C9A96E] transition-all duration-300"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#8A7A6A] uppercase mb-4">Online Shop</p>
              <h2 className="font-cormorant text-2xl text-[#3A3028] font-light mb-3">BASEショップ</h2>
              <p className="text-[12px] text-[#8A7A6A] font-light leading-loose mb-6">
                アクセサリーはBASEオンラインショップからもご購入いただけます。
              </p>
              <span className="text-[11px] tracking-[0.2em] text-[#C9A96E] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                springwater.base.shop
                <span className="block w-6 h-px bg-[#C9A96E]" />
              </span>
            </a>
          </div>

          {/* Contact form */}
          <div className="border-t border-[#E8E0D6] pt-16">
            <p className="text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-6 text-center">Contact Form</p>
            <h2 className="font-cormorant text-3xl text-[#3A3028] font-light text-center mb-10">お問い合わせフォーム</h2>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] tracking-[0.2em] text-[#5C4A3A] uppercase mb-2"
                  >
                    お名前 <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border border-[#D8D0C8] px-4 py-3 text-[13px] text-[#3A3028] placeholder:text-[#BDB0A4] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
                    placeholder="山田 花子"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] tracking-[0.2em] text-[#5C4A3A] uppercase mb-2"
                  >
                    メールアドレス <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border border-[#D8D0C8] px-4 py-3 text-[13px] text-[#3A3028] placeholder:text-[#BDB0A4] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[10px] tracking-[0.2em] text-[#5C4A3A] uppercase mb-2"
                >
                  お問い合わせ種別
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full bg-[#FAF8F5] border border-[#D8D0C8] px-4 py-3 text-[13px] text-[#3A3028] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
                >
                  <option value="">選択してください</option>
                  <option value="product">商品について</option>
                  <option value="order">オーダー・カスタムについて</option>
                  <option value="shop">店舗・訪問について</option>
                  <option value="media">取材・掲載について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.2em] text-[#5C4A3A] uppercase mb-2"
                >
                  メッセージ <span className="text-[#C9A96E]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border border-[#D8D0C8] px-4 py-3 text-[13px] text-[#3A3028] placeholder:text-[#BDB0A4] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300 resize-none"
                  placeholder="お問い合わせ内容をご記入ください。"
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-12 py-4 bg-[#3A3028] text-[#FAF8F5] text-[11px] tracking-[0.3em] uppercase hover:bg-[#5C4A3A] transition-colors duration-300"
                >
                  送信する
                </button>
              </div>

              <p className="text-center text-[11px] text-[#8A7A6A] font-light">
                ※ ご返信には数日お時間をいただく場合があります。<br />
                お急ぎの場合は Instagram DM をご利用ください。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Back link */}
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
