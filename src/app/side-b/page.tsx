import type { Metadata } from "next";
import SideBContent from "./SideBContent";

export const metadata: Metadata = {
  title: "Side-B",
  description: "Personal practice, homelab experiments, and raw system configurations by Fatih Aziz.",
};

export default function SideBPage() {
  return <SideBContent />;
}
