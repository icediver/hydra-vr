import { HeroSection } from "./hero-section/HeroSection";

interface IHome {}

export function Home({}: IHome) {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
