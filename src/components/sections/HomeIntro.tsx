"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeIntro() {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <p className="text-2xl md:text-4xl leading-tight font-medium mb-8">
            Specializing in automating pipelines, building robust cloud infrastructure, and bridging the gap between development and operations.
          </p>
          <Link href="/about" className="group inline-flex items-center gap-4 text-lg font-semibold uppercase tracking-widest link-hover">
            <span>Discover More</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/3 space-y-6 text-foreground/50 text-lg"
        >
          <p>
            Based in Yogyakarta, Indonesia. Available for freelance opportunities and full-time roles worldwide.
          </p>
          <p>
            Currently open for new projects. Let's create something extraordinary together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
