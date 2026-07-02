"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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
              <a href="mailto:athayaafatih@gmail.com" className="text-xl font-medium link-hover">athayaafatih@gmail.com</a>
            </div>
            <div className="flex items-center gap-6 group">
              <Phone size={24} className="text-foreground/50 group-hover:text-foreground transition-colors" />
              <a href="tel:+628822957918" className="text-xl font-medium link-hover">+62 882 2957 5918</a>
            </div>
            <div className="flex items-center gap-6 group">
              <MapPin size={24} className="text-foreground/50 group-hover:text-foreground transition-colors" />
              <span className="text-xl font-medium text-foreground/80">Yogyakarta, Indonesia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-6 mt-12"
          >
            <Link href="https://www.linkedin.com/in/athaya-fatih-aziz-756bb7371/" target="_blank" className="text-foreground/50 hover:text-foreground transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href="https://github.com/freshlyavocado" target="_blank" className="text-foreground/50 hover:text-foreground transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
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
              <label htmlFor="contact-name" className="sr-only">Your name</label>
              <input
                id="contact-name"
                type="text"
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl focus:outline-none focus:border-foreground transition-colors peer"
                placeholder="What's your name?"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="contact-email" className="sr-only">Your email</label>
              <input
                id="contact-email"
                type="email"
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl focus:outline-none focus:border-foreground transition-colors peer"
                placeholder="What's your email?"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="contact-message" className="sr-only">Your message</label>
              <textarea
                id="contact-message"
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
