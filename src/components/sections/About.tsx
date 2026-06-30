"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-16 items-stretch">

        {/* TOP ROW - ABOUT TITLE (Desktop only) */}
        <div className="hidden lg:block lg:col-span-3 mb-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-6xl font-medium tracking-tighter"
          >
            Info
          </motion.h2>
        </div>
        <div className="hidden lg:block lg:col-span-9 mb-4"></div>

        {/* LEFT PANEL */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:hidden text-4xl md:text-5xl font-medium tracking-tighter mb-4"
            >
              About
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="relative aspect-[3/4] w-full overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&q=80"
                  alt="Profile Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="space-y-4 pt-2 text-sm"
          >
            <div className="flex justify-between items-end border-b border-foreground/10 pb-2 gap-2">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-foreground/40">Based in</span>
              <span className="text-sm md:text-base font-medium text-right">Yogyakarta, Indonesia</span>
            </div>
            <div className="flex justify-between items-end border-b border-foreground/10 pb-2 gap-2">
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-foreground/40">Status</span>
              <span className="text-sm md:text-base font-medium text-right">Looking for an apprenticeship</span>
            </div>

            <div className="pt-8">
              <a href="mailto:athayaafatih@gmail.com" className="text-base font-bold tracking-tight hover:text-foreground/70 transition-colors">
                athayaafatih@gmail.com
              </a>
            </div>
          </motion.div>
        </div>


        {/* RIGHT PANEL */}
        <div className="lg:col-span-9 lg:pl-8 flex flex-col pt-8 lg:pt-0">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.9] mb-8">
                Fatih Aziz.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl leading-snug font-medium space-y-6 text-foreground"
            >
              <p>
                Junior DevOps Engineer & Computer Science student, specialized in automation and cloud infrastructure.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-foreground/70">
                I build robust, scalable systems that blend automated deployment pipelines with secure environments. Passionate about reliability, security and <span className="italic text-foreground">detail</span>, I always seek the symbiosis between efficient operations and clean code.
              </p>
            </motion.div>
          </div>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pt-6 mt-6 border-t border-foreground/10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-4 text-foreground/40">OS & Scripting</h3>
              <ul className="space-y-3 text-sm md:text-base font-medium">
                <li>Linux • Bash</li>
                <li>Python</li>
                <li>Go</li>
                <li>TypeScript</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-4 text-foreground/40">Containers</h3>
              <ul className="space-y-3 text-sm md:text-base font-medium">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Helm</li>
                <li>Docker Compose</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-4 text-foreground/40">CI/CD & IAC</h3>
              <ul className="space-y-3 text-sm md:text-base font-medium">
                <li>GitHub Actions</li>
                <li>Jenkins</li>
                <li>Terraform</li>
                <li>Ansible</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold mb-4 text-foreground/40">Cloud & Tools</h3>
              <ul className="space-y-3 text-sm md:text-base font-medium">
                <li>AWS • GCP</li>
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>Git • Nmap</li>
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
