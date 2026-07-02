"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function InteractiveBlob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1] flex items-center justify-center">
      {/* A static center blob to act as the base */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full mix-blend-difference blur-[80px] opacity-50"
        style={{
          background: "radial-gradient(circle, var(--foreground) 0%, transparent 70%)"
        }}
      />
      
      {/* The moving blob that follows the cursor */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full mix-blend-difference blur-[100px] opacity-70"
        style={{
          x,
          y,
          background: "radial-gradient(circle, var(--foreground) 0%, transparent 60%)"
        }}
      />
    </div>
  );
}
