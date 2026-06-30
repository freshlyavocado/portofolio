"use client";

import { motion, Variants } from "framer-motion";
import { InteractiveBlob } from "../ui/InteractiveBlob";
import Link from "next/link";

const containerVars: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const wordContainerVars: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 }
  }
};

const letterVars: Variants = {
  hidden: { opacity: 0, y: 150, rotateX: -90, rotateY: 10, scale: 0.8 },
  show: { opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const textVars: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const splitText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span key={index} variants={letterVars} className="inline-block origin-bottom">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-4 md:px-24 perspective-[1000px]">
      <InteractiveBlob />

      {/* Social Links Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-foreground/50 z-10"
      >
        <Link href="https://www.linkedin.com/in/athaya-fatih-aziz-756bb7371/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS6PyQhAiSL27DuEVF6eqYQ%3D%3D://linkedin.com" target="_blank" className="hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </Link>
        <Link href="https://github.com/freshlyavocado" target="_blank" className="hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </Link>
        <Link href="https://discord.com" target="_blank" className="hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
          </svg>
        </Link>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="text-center md:text-left md:pl-20 relative z-10"
      >
        <motion.p variants={textVars} className="text-xl md:text-2xl text-foreground/70 font-medium mb-4">
          Hi! I'm Fatih, a Junior
        </motion.p>

        <div className="overflow-hidden py-4 -my-4">
          <motion.h1 variants={wordContainerVars} className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] flex style-preserve-3d flex-wrap justify-center md:justify-start">
            {splitText("DEVOPS")}
          </motion.h1>
        </div>
        <div className="overflow-hidden py-4 -my-4">
          <motion.h1 variants={wordContainerVars} className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-foreground/50 flex style-preserve-3d flex-wrap justify-center md:justify-start">
            {splitText("ENGINEER.")}
          </motion.h1>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm font-medium uppercase tracking-widest text-foreground/50"
      >
        Scroll Down
      </motion.div>
    </section>
  );
}
