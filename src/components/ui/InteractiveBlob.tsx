"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveBlob() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const x = useSpring(mousePosition.x - 200, springConfig);
  const y = useSpring(mousePosition.y - 200, springConfig);

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
