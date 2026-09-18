import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function PhilosophySection() {
  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Editorial Heading (matching Image 1) */}
          <div className="lg:col-span-5 space-y-4">
            <MotionReveal delay={0}>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                Our Clinical Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-[1.18]">
                Caring for minds, supporting lives, building healthier communities.
              </h2>
            </MotionReveal>
            
            <MotionReveal delay={120}>
              <p className="text-sm sm:text-base text-[#53625E] leading-relaxed pt-2">
                At Refreva, seeking psychiatric care is treated not as a crisis of weakness, but as an act of courageous self-preservation. We offer an unhurried, destigmatizing practice where you are met with respect, clinical depth, and total confidentiality.
              </p>
            </MotionReveal>

            <MotionReveal delay={200}>
              <div className="pt-2">
                <Button href="/about" variant="outline" size="md" className="group font-medium">
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: 3 Editorial Clinical Principles */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal delay={100} duration={650}>
              <div className="p-6 rounded-3xl bg-white border border-[#E6E1D9] shadow-sm hover:shadow-md hover:border-[#264640]/30 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2.5 text-[#264640] font-semibold text-sm">
                  <div className="h-7 w-7 rounded-xl bg-[#EBF1EC] flex items-center justify-center">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1F2E2B]">
                    Destigmatizing & Empathetic Psychiatric Care
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#53625E] leading-relaxed pl-9">
                  We demystify psychiatric diagnoses and medication. You are treated as the ultimate authority on your lived experience, with decisions made collaboratively and transparently.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={200} duration={650}>
              <div className="p-6 rounded-3xl bg-white border border-[#E6E1D9] shadow-sm hover:shadow-md hover:border-[#264640]/30 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2.5 text-[#264640] font-semibold text-sm">
                  <div className="h-7 w-7 rounded-xl bg-[#EBF1EC] flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1F2E2B]">
                    Evidence-Based, Conservative Medication Approach
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#53625E] leading-relaxed pl-9">
                  Medication is a supportive bridge, not an automatic reflex. We prioritize lowest effective dosages, regular monitoring, and holistic lifestyle integration.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={300} duration={650}>
              <div className="p-6 rounded-3xl bg-white border border-[#E6E1D9] shadow-sm hover:shadow-md hover:border-[#264640]/30 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2.5 text-[#264640] font-semibold text-sm">
                  <div className="h-7 w-7 rounded-xl bg-[#EBF1EC] flex items-center justify-center">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#1F2E2B]">
                    Holistic Sanctuary for Mind & Nervous System
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#53625E] leading-relaxed pl-9">
                  We look at the whole person—sleep patterns, physical symptoms, nervous system regulation, and relational dynamics—rather than isolated symptoms.
                </p>
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
