import { AboutSection } from './about-section/AboutSection';
import { HeroSection } from './hero-section/HeroSection';
import { OptInSection } from './opt-in-section/OptInSection';
import { ProcessSection } from './process-section/ProcessSection';
import { ServicesSection } from './services-section/ServicesSection';
import { TechSection } from './tech-section/TechSection';

interface IHome {}

export function Home({}: IHome) {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			{/*
      <TechSection />
      <ProcessSection />
      <OptInSection />
*/}
		</div>
	);
}
