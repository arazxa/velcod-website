import { CTASection } from '@/sections/CTASection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { HeroSection } from '@/sections/HeroSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
