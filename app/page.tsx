import { Hero } from "./components/hero";
import { HeroShowcase } from "./components/hero-showcase";
import { IntroOverlay } from "./components/intro-overlay";

export default function Home() {
  return (
    <main className="relative">
      <IntroOverlay />
      <Hero />
      <HeroShowcase />
    </main>
  );
}
