"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function FadeIn({ children, className, delay = 0, y = 24 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : y }}
      transition={{ duration: 0.75, delay: shouldReduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
