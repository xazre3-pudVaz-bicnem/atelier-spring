"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["0%", "-14%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], shouldReduce ? ["0%", "0%"] : ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], shouldReduce ? [1, 1] : [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-0"
          initial={shouldReduce ? {} : { scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero-spring.jpg"
            alt="Atelier♡Spring アトリエ"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      />

      {/* Text */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={shouldReduce ? {} : { y: contentY, opacity: contentOpacity }}
      >
        <motion.h1
          className="font-cormorant font-light italic text-white text-5xl sm:text-6xl lg:text-8xl tracking-wide leading-none mb-4"
          initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Atelier♡Spring
        </motion.h1>

        <motion.p
          className="font-cormorant text-sm sm:text-base tracking-[0.4em] text-white/75 font-light mb-10"
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          アトリエ♡スプリング
        </motion.p>

        <motion.div
          className="w-12 h-px bg-white/35 mx-auto mb-10"
          initial={shouldReduce ? {} : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center" }}
        />

        <motion.p
          className="font-cormorant text-base sm:text-lg lg:text-xl text-white/80 font-light leading-relaxed tracking-wide"
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          アンティークやヴィンテージ雑貨と<br />オリジナルアクセサリー
        </motion.p>

        <motion.p
          className="text-[10px] tracking-[0.45em] text-white/55 mt-6 uppercase font-light"
          initial={shouldReduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          調布・国領
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-light">Scroll</span>
        <motion.span
          className="block w-px h-6 bg-white/35 origin-top"
          animate={shouldReduce ? {} : { scaleY: [1, 2.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
