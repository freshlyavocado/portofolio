"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundLines() {
  const { scrollYProgress } = useScroll();

  // Changed initial height to 25vh so it covers a nice portion of the first screen.
  const height = useTransform(scrollYProgress, [0, 1], ["25vh", "100%"]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[0]">
      
      {/* Scroll-controlled container */}
      <motion.div 
        className="absolute top-0 left-[40%] md:left-[55%] w-[80vw] md:w-[60vw]"
        style={{ height }}
      >
        {/* Entrance animation container: grows from 0% to 100% of its parent's height */}
        <motion.div
          className="w-full overflow-hidden"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <svg 
            className="w-full h-[100vh] opacity-90 overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="none" 
          >
            <path 
              stroke="#CCFF00"
              strokeWidth="40"
              vectorEffect="non-scaling-stroke"
              d="M 10 -20 C 40 20, -10 40, 20 60 C 50 80, -20 95, 30 107" 
            />
          </svg>
        </motion.div>
      </motion.div>
      
    </div>
  );
}
