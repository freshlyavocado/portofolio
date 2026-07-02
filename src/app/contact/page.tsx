import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fatih Aziz for DevOps projects, freelance opportunities, or collaboration. Based in Yogyakarta, Indonesia.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-12 selection:bg-foreground selection:text-background">
      <Contact />
    </main>
  );
}
