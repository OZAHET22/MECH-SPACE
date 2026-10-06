import { ScrollReveal } from "@/components/ScrollReveal";
import { HomeShowcase } from "@/components/HomeShowcase";
import { ProcessSection } from "@/components/ProcessSection";
import { TrustedLeadersSection } from "@/components/TrustedLeadersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HeroSection } from "@/components/HeroSection";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection />

      {/* SHOWCASE: SPECIALITY + SOLUTIONS + WHY CHOOSE US */}
      <HomeShowcase />

      {/* TESTIMONIALS — after Why Choose Us */}
      <TestimonialsSection />

      {/* OUR PROCESS */}
      <ProcessSection />

      {/* TRUSTED LEADERS */}
      <TrustedLeadersSection />
    </main>
  );
}
