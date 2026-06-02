"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type FAQItem = { q: string; a: string };

export default function FAQList({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-[#FAF8F5] border border-[#E8E0D6] transition-colors duration-300 hover:border-[#C9A96E]/40">
          <button
            className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[13px] text-[#3A3028] font-light pr-6 leading-relaxed">{item.q}</span>
            <motion.span
              className="text-[#C9A96E] text-xl font-light flex-shrink-0 leading-none select-none"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: shouldReduce ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-3 border-t border-[#E8E0D6]">
                  <p className="text-[12px] text-[#5C4A3A] leading-loose font-light">{item.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
