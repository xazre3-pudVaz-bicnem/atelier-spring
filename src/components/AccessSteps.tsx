"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type Step = {
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

function StepImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#EDE8E1] gap-2">
        <span className="font-cormorant text-2xl text-[#C9A96E] font-light">✦</span>
        <p className="text-[10px] tracking-[0.2em] text-[#8A7A6A] uppercase">Photo</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
    />
  );
}

function StepCard({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-6% 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: shouldReduce ? 0 : (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] bg-[#EDE8E1] overflow-hidden">
        <StepImage src={step.image} alt={step.imageAlt} />

        {/* Step badge */}
        <motion.div
          initial={{ opacity: shouldReduce ? 1 : 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: shouldReduce ? 0 : (index % 2) * 0.1 + 0.25 }}
          className="absolute top-0 left-0 bg-[#3A3028]/80 backdrop-blur-sm px-3 py-2"
        >
          <p className="font-cormorant text-[11px] text-[#C9A96E] tracking-[0.3em] leading-none">
            STEP
          </p>
          <p className="font-cormorant text-2xl text-white font-light leading-tight">
            {step.step}
          </p>
        </motion.div>

        {/* Arrival marker */}
        {isLast && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#C9A96E]/90 backdrop-blur-sm py-2 px-4 text-center">
            <p className="text-[10px] tracking-[0.4em] text-white uppercase font-light">
              Arrival ✦
            </p>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className={`flex-1 px-5 py-5 border-x border-b border-[#E8E0D6] ${isLast ? "bg-[#FAF8F5] border-[#C9A96E]/40" : "bg-[#FAF8F5]"}`}>
        <p className="text-[10px] tracking-[0.3em] text-[#C9A96E] uppercase mb-2">Step {step.step}</p>
        <h3 className={`font-cormorant text-xl font-light leading-snug mb-3 ${isLast ? "text-[#C9A96E]" : "text-[#3A3028]"}`}>
          {step.title}
        </h3>
        <div className="w-6 h-px bg-[#E8E0D6] mb-3" />
        <p className="text-[12px] text-[#5C4A3A] font-light leading-[1.9]">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function AccessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      {/* Connecting line decoration */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-[#E8E0D6]" />
        <span className="font-cormorant text-[#C9A96E] text-sm tracking-[0.3em] font-light">
          国領駅 → Atelier♡Spring
        </span>
        <div className="flex-1 h-px bg-[#E8E0D6]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E0D6] border border-[#E8E0D6]">
        {steps.map((step, i) => (
          <div key={step.step} className="bg-[#FAF8F5]">
            <StepCard step={step} index={i} isLast={i === steps.length - 1} />
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center">
        <p className="text-[11px] text-[#8A7A6A] font-light leading-loose">
          ※ 道に迷われた場合はInstagramのDMまたはお電話でお気軽にお問い合わせください。
        </p>
      </div>
    </div>
  );
}
