import type { Metadata } from "next";
import { Works } from "@/components/sections/Works";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected DevOps projects by Fatih Aziz — Kubernetes clusters, CI/CD pipelines, monitoring stacks, and serverless deployments.",
};

export default function WorksPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-12 selection:bg-foreground selection:text-background bg-foreground/5">
      <Works />
    </main>
  );
}
