"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springOpacity = useSpring(opacity, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        scale.set(2.5);
        opacity.set(1);
      } else if (
        target.tagName.toLowerCase() === "h1" ||
        target.tagName.toLowerCase() === "h2"
      ) {
        scale.set(4);
        opacity.set(0.1);
      } else {
        scale.set(1);
        opacity.set(1);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, scale, opacity]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{
        x,
        y,
        scale: springScale,
        opacity: springOpacity,
        backgroundColor: "#ffffff",
      }}
    />
  );
}
