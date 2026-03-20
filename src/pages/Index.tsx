import Navbar from "@/components/kirma/Navbar";
import Hero from "@/components/kirma/Hero";
import ProblemSection from "@/components/kirma/ProblemSection";
import SolutionSection from "@/components/kirma/SolutionSection";
import HowItWorks from "@/components/kirma/HowItWorks";
import NichosSection from "@/components/kirma/NichosSection";
import DemoSection from "@/components/kirma/DemoSection";
import PricingSection from "@/components/kirma/PricingSection";
import CTASection from "@/components/kirma/CTASection";
import Footer from "@/components/kirma/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <NichosSection />
      <DemoSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
