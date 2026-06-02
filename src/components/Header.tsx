"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/concept", label: "Concept" },
  { href: "/shop", label: "Online Shop" },
  { href: "/accessories", label: "Accessories" },
  { href: "/access", label: "Access" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-sm shadow-[0_1px_20px_rgba(58,48,40,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-cormorant text-xl lg:text-2xl tracking-widest text-[#3A3028] font-light">
              Atelier♡Spring
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.25em] text-[#C9A96E] font-light mt-0.5">
              アトリエ♡スプリング
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.2em] text-[#5C4A3A] hover:text-[#C9A96E] transition-colors duration-300 font-light uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/atelierspring_izumi/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-[11px] tracking-[0.2em] text-[#C9A96E] border border-[#C9A96E] px-4 py-2 hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
            >
              Instagram
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニューを開く"
          >
            <span
              className={`block w-6 h-px bg-[#3A3028] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#3A3028] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#3A3028] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#FAF8F5]/98 backdrop-blur-sm`}
      >
        <nav className="flex flex-col px-6 pb-8 pt-4 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[12px] tracking-[0.3em] text-[#5C4A3A] uppercase font-light border-b border-[#E8E0D6] pb-4"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.instagram.com/atelierspring_izumi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] tracking-[0.2em] text-[#C9A96E] border border-[#C9A96E] py-3 uppercase"
            >
              Instagram
            </a>
            <a
              href="https://springwater.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] tracking-[0.2em] text-white bg-[#C9A96E] py-3 uppercase"
            >
              Online Shop
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
