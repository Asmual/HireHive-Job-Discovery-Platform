import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import JobSection from "@/components/JobSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto">
      <Hero />
      <StatsSection />
      <JobSection />
      <PricingSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}
