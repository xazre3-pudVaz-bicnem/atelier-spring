import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3A3028] text-[#EDE8E1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-cormorant text-2xl lg:text-3xl tracking-widest text-[#EDE8E1] font-light mb-2">
              Atelier♡Spring
            </p>
            <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] mb-6">
              アトリエ♡スプリング
            </p>
            <p className="text-[12px] leading-relaxed text-[#BDB0A4] font-light">
              南フランスアンティーク食器と<br />
              手作りアクセサリーのアトリエショップ
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/concept", label: "Concept" },
                { href: "/shop", label: "Online Shop" },
                { href: "/accessories", label: "Accessories" },
                { href: "/access", label: "Access" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] tracking-[0.15em] text-[#BDB0A4] hover:text-[#C9A96E] transition-colors duration-300 uppercase font-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-6">Shop Info</p>
            <address className="not-italic text-[12px] leading-loose text-[#BDB0A4] font-light mb-6">
              〒182-0022<br />
              東京都調布市国領町4-7-23
            </address>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/atelierspring_izumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] text-[#C9A96E] hover:text-[#DEC08A] transition-colors duration-300 uppercase flex items-center gap-2"
              >
                <span className="w-4 h-px bg-[#C9A96E]" />
                Instagram
              </a>
              <a
                href="https://springwater.base.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] text-[#C9A96E] hover:text-[#DEC08A] transition-colors duration-300 uppercase flex items-center gap-2"
              >
                <span className="w-4 h-px bg-[#C9A96E]" />
                Online Shop (BASE)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#5C4A3A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] text-[#7A6A5A]">
            © {new Date().getFullYear()} Atelier♡Spring. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.15em] text-[#7A6A5A]">
            調布市のアンティークショップ
          </p>
        </div>
      </div>
    </footer>
  );
}
