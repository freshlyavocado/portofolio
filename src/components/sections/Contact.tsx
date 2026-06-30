"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter mb-8"
          >
            Let's talk <br /> about your <br /> next project.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 mt-16"
          >
            <div className="flex items-center gap-6 group">
              <Mail size={24} className="text-foreground/50 group-hover:text-foreground transition-colors" />
              <a href="mailto:hello@example.com" className="text-xl font-medium link-hover">athayaafatih@gmail.com</a>
            </div>
            <div className="flex items-center gap-6 group">
              <Phone size={24} className="text-foreground/50 group-hover:text-foreground transition-colors" />
              <a href="tel:+6281234567890" className="text-xl font-medium link-hover">+62 882 2957 5918</a>
            </div>
            <div className="flex items-center gap-6 group">
              <MapPin size={24} className="text-foreground/50 group-hover:text-foreground transition-colors" />
              <span className="text-xl font-medium text-foreground/80">Yogyakarta, Indonesia</span>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex items-center">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full space-y-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <input
                type="text"
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl focus:outline-none focus:border-foreground transition-colors peer"
                placeholder="What's your name?"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl focus:outline-none focus:border-foreground transition-colors peer"
                placeholder="What's your email?"
                required
              />
            </div>
            <div className="relative">
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl focus:outline-none focus:border-foreground transition-colors resize-none peer"
                placeholder="Tell me about your project"
                required
              ></textarea>
            </div>

            <button className="text-xl font-bold tracking-tight uppercase border-b-2 border-foreground pb-1 hover:text-foreground/60 hover:border-foreground/60 transition-all">
              Send Message
            </button>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
