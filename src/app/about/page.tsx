import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Fatih Aziz — Junior DevOps Engineer based in Yogyakarta, Indonesia. Skills in Kubernetes, Docker, Terraform, CI/CD, and cloud infrastructure.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-4 selection:bg-foreground selection:text-background flex items-center">
      <About />
    </main>
  );
}
