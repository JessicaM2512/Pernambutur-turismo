import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ToursSection } from "@/components/ToursSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { UrgencySection } from "@/components/UrgencySection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ToursSection />
        <BenefitsSection />
        <TestimonialsSection />
        <HowItWorks />
        <UrgencySection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
