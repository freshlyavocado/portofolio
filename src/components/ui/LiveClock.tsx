"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function LiveClock() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Calculate GMT+7
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const gmt7Date = new Date(utc + (3600000 * 7));
      
      let hours = gmt7Date.getHours();
      let minutes = gmt7Date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // '0' should be '12'
      const strMinutes = minutes < 10 ? '0' + minutes : minutes;
      
      setTime(`${hours}:${strMinutes} ${ampm}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
    >
      <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/10 bg-background/50 backdrop-blur shadow-sm transition-all">
        {/* Pulsing indicator */}
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </div>
        
        <p className="text-xs font-bold text-foreground/70 uppercase tracking-[0.2em] pt-[2px]">
          Yogyakarta &bull; {time}
        </p>
      </div>
    </motion.div>
  );
}
