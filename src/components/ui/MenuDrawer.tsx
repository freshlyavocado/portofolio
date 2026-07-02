"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "B-Side", href: "/side-b" },
  { name: "Contact", href: "/contact" },
];

export function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 left-8 z-40 p-2 rounded-full border border-foreground/10 bg-background/50 backdrop-blur hover:bg-foreground/5 transition-colors"
        aria-label="Open Menu"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-background z-50 p-12 border-r border-foreground/10 flex flex-col justify-center"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>

              <nav className="flex flex-col gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-bold tracking-tighter hover:pl-4 transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-12"
              >
                <p className="text-xs font-medium text-foreground/30 uppercase tracking-widest">
                  © {new Date().getFullYear()} Fatih
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
