"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Palette, Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (
    mode: "light" | "dark" | "color",
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const applyTheme = () => {
      if (mode === "color") {
        // 40% chance to revert to grayscale (black/white)
        const isGrayscale = Math.random() > 0.6;
        
        // Background (Light by default)
        const bgH = isGrayscale ? 0 : Math.floor(Math.random() * 360);
        const bgS = isGrayscale ? 0 : Math.floor(Math.random() * 60) + 40; // 40-100%
        const bgL = isGrayscale ? 96 : Math.floor(Math.random() * 10) + 85; // 85-95% (light)

        // Foreground (Dark by default)
        const fgH = isGrayscale ? 0 : Math.floor(Math.random() * 360);
        const fgS = isGrayscale ? 0 : Math.floor(Math.random() * 60) + 40; // 40-100%
        const fgL = isGrayscale ? 10 : Math.floor(Math.random() * 20) + 10; // 10-30% (dark)
        
        document.documentElement.style.setProperty("--bg-h", bgH.toString());
        document.documentElement.style.setProperty("--bg-s", `${bgS}%`);
        document.documentElement.style.setProperty("--bg-l", `${bgL}%`);

        document.documentElement.style.setProperty("--fg-h", fgH.toString());
        document.documentElement.style.setProperty("--fg-s", `${fgS}%`);
        document.documentElement.style.setProperty("--fg-l", `${fgL}%`);
      } else {
        setTheme(mode);
      }
    };

    if (!document.startViewTransition) {
      applyTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div className="fixed top-8 right-8 z-50 flex items-center gap-1 p-1 rounded-full border border-foreground/10 bg-background/50 backdrop-blur text-foreground">
      <button
        onClick={(e) => handleThemeChange(theme === "dark" ? "light" : "dark", e)}
        className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
        title="Toggle Light/Dark"
      >
        {theme === "dark" ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
      </button>
      <div className="w-[1px] h-4 bg-foreground/20" />
      <button
        onClick={(e) => handleThemeChange("color", e)}
        className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
        title="Change Color"
      >
        <Palette size={18} strokeWidth={2} />
      </button>
    </div>
  );
}
