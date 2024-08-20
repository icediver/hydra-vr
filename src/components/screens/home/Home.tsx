import { HeroSection } from "./hero-section/HeroSection";
import { OptInSection } from "./opt-in-section/OptInSection";

interface IHome {}

export function Home({}: IHome) {
  return (
    <div>
      <HeroSection />
      <OptInSection />
    </div>
  );
}
