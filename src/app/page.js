import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import JobSection from "@/components/JobSection";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <div className="flex flex-col w-6xl mx-auto">
      <Hero/>
      <StatsSection/>
      <JobSection/>
      <PricingSection/>
      <FeaturesSection/>
    </div>
  );
}
