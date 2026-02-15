import "./styles/theme.css";
import "./styles/layout.css";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PricingSection } from "./components/sections/PricingSection";
import { SiteHeader } from "./components/sections/SiteHeader";
import { WorkflowsSection } from "./components/sections/WorkflowsSection";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowsSection />
        <PricingSection />
      </main>
    </>
  );
}
