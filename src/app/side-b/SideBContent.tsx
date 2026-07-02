"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sideBItems = [
  {
    id: "01",
    title: "Server Rack Setup",
    col: "col-start-1 col-span-12 lg:col-span-7 lg:row-start-1",
    self: "",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
  },
  {
    id: "02",
    title: "Terminal Output",
    col: "col-start-1 col-span-12 lg:col-start-9 lg:col-span-4 lg:row-start-1",
    self: "lg:self-end mt-12 lg:mt-0",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
  },
  {
    id: "03",
    title: "Network Architecture",
    col: "col-start-1 col-span-12 lg:col-start-2 lg:col-span-4 lg:row-start-2",
    self: "mt-12 lg:mt-24",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
  },
  {
    id: "04",
    title: "Data Visualization",
    col: "col-start-1 col-span-12 lg:col-start-7 lg:col-span-3 lg:row-start-2",
    self: "lg:self-start mt-12 lg:mt-24",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    id: "05",
    title: "Hardware Hack",
    col: "col-start-1 col-span-12 lg:col-start-10 lg:col-span-3 lg:row-start-2",
    self: "lg:self-end mt-12 lg:mt-24",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
  {
    id: "06",
    title: "Cloud Deployment",
    col: "col-start-1 col-span-12 lg:col-start-1 lg:col-span-4 lg:row-start-3",
    self: "mt-12 lg:mt-32",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
  },
  {
    id: "07",
    title: "Code Review",
    col: "col-start-1 col-span-12 lg:col-start-6 lg:col-span-7 lg:row-start-3",
    self: "mt-12 lg:mt-32",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
];

export default function SideBContent() {
  return (
    <main className="w-full min-h-screen pt-32 pb-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 relative"
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-4 inline-block relative border-b border-foreground/20 pb-2">
            Side-B
          </h1>
          <p className="text-foreground/60 mt-6 text-sm leading-relaxed max-w-2xl">
            ya here are my personal practice, homelab experiments, and raw system configurations. nothing polished.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-5 lg:gap-y-12">
          {sideBItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
              className={`${item.col} ${item.self} flex flex-col`}
            >
              <span className="text-4xl md:text-6xl font-medium tracking-tighter mb-2 text-foreground">
                {item.id}
              </span>
              <div className="relative w-full bg-foreground/5 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-all duration-700"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.1em] text-foreground/45 mt-3 font-medium">
                {item.title}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
