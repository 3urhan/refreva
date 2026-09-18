import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ServicePathway } from "@/components/home/ServicePathway";
import { SpecialtiesMatrix } from "@/components/home/SpecialtiesMatrix";
import { TelehealthSpotlight } from "@/components/home/TelehealthSpotlight";
import { InsurancePricingSection } from "@/components/home/InsurancePricingSection";
import { VirginiaPresence } from "@/components/home/VirginiaPresence";
import { FaqPreviewSection } from "@/components/home/FaqPreviewSection";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PhilosophySection />
      <ServicePathway />
      <SpecialtiesMatrix />
      <TelehealthSpotlight />
      <InsurancePricingSection />
      <VirginiaPresence />
      <FaqPreviewSection />
      <HomeContactForm />
      <CtaBanner />
    </>
  );
}
