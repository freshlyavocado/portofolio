"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<"default" | "link" | "text">("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setHoverState("link");
      } else if (
        target.tagName.toLowerCase() === "h1" ||
        target.tagName.toLowerCase() === "h2"
      ) {
        setHoverState("text");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

    const variants = {
      default: {
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: 1,
        opacity: 1,
        backgroundColor: "#ffffff",
      },
      link: {
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: 2.5,
        opacity: 1,
        backgroundColor: "#ffffff",
      },
      text: {
        x: mousePosition.x - 40,
        y: mousePosition.y - 40,
        scale: 4,
        opacity: 0.1,
        backgroundColor: "#ffffff",
      }
    };

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      animate={hoverState}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
