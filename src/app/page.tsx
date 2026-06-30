import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { BackgroundLines } from "@/components/ui/BackgroundLines";

export default function Home() {
  return (
    <main className="relative selection:bg-foreground selection:text-background overflow-hidden">
      <BackgroundLines />
      <Hero />
      <Marquee />
      <HomeIntro />
    </main>
  );
}
