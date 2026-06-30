"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const text = "CI/CD PIPELINES ✦ CLOUD INFRASTRUCTURE ✦ AUTOMATION ✦ SITE RELIABILITY ✦ ";
  
  return (
    <div className="relative py-24 overflow-hidden flex items-center">
      {/* The rotated wrapper */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] -rotate-3 bg-foreground text-background py-6 flex whitespace-nowrap z-10 shadow-xl">
        <motion.div
          className="flex gap-8 text-4xl md:text-5xl font-bold tracking-widest uppercase"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </div>
    </div>
  );
}
