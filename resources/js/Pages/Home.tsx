import * as React from "react";
import { Head } from "@inertiajs/react";
import { AppLayout } from "@/Layouts/AppLayout";
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

export default function Home() {
  return (
    <AppLayout>
      <Head title="Grounded Psychotherapy & Counseling in Virginia" />
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
    </AppLayout>
  );
}
