import * as React from "react";
import { MessageSquare, UserCheck, Heart, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export function ProcessSection() {
  const stepIcons = [MessageSquare, UserCheck, Heart, Sparkles];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] inline-block">
              Clear & Transparent Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              How It Works — Your Path to Beginning Care
            </h2>
            <p className="text-sm sm:text-base text-[#53625E] leading-relaxed max-w-2xl mx-auto">
              We eliminate administrative hurdles and clinical intimidation. Here is exactly what to expect from your first inquiry to ongoing sessions.
            </p>
          </div>
        </MotionReveal>

        {/* Alternating Step Pathway (inspired by Section 6 of reference image) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Central Connecting Line */}
          <div
            className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-[#E6E1D9]"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {SITE_CONFIG.processSteps.map((step, index) => {
              const Icon = stepIcons[index] || Sparkles;
              const isEven = index % 2 === 1; // index 1, 3 are on the left; index 0, 2 are on the right

              return (
                <div
                  key={step.step}
                  className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8"
                >
                  {/* Central Node Indicator */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border-4 border-[#264640] items-center justify-center shadow-md z-20"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#966F33]" />
                  </div>

                  {/* Left Column Container */}
                  <div className={`md:col-span-6 ${isEven ? "md:order-1" : "md:order-1 md:invisible md:pointer-events-none"}`}>
                    {isEven && (
                      <MotionReveal delay={index * 100} duration={600} distance={20}>
                        <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-[#E6E1D9] shadow-lg card-ambient-shadow overflow-hidden group hover:-translate-y-1 hover:border-[#264640]/40 transition-all duration-300">
                          
                          {/* Large Faint Watermark Number */}
                          <span
                            aria-hidden="true"
                            className="absolute -bottom-4 -left-2 font-serif text-8xl font-bold text-[#264640]/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                          >
                            {step.step}
                          </span>

                          <div className="relative z-10 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="h-11 w-11 rounded-2xl bg-[#F8F3EA] text-[#966F33] flex items-center justify-center font-serif text-lg font-bold border border-[#E8DECA]">
                                <Icon className="h-5 w-5" />
                              </div>
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#264640] border border-[#E6E1D9]">
                                Step {step.step}
                              </span>
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-[#1F2E2B]">
                              {step.title}
                            </h3>

                            <p className="text-sm text-[#53625E] leading-relaxed">
                              {step.description}
                            </p>

                            <div className="pt-3 border-t border-[#F3EFEA] flex items-center gap-2 text-xs font-medium text-[#264640]">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#264640]" />
                              <span>
                                {index === 1 && "No clinical obligation • Transparent matching"}
                                {index === 3 && "Continuous feedback • Dedicated patient portal"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </MotionReveal>
                    )}
                  </div>

                  {/* Right Column Container */}
                  <div className={`md:col-span-6 ${!isEven ? "md:order-2" : "md:order-2 md:invisible md:pointer-events-none"}`}>
                    {!isEven && (
                      <MotionReveal delay={index * 100} duration={600} distance={20}>
                        <div className="relative bg-white rounded-3xl p-7 sm:p-8 border border-[#E6E1D9] shadow-lg card-ambient-shadow overflow-hidden group hover:-translate-y-1 hover:border-[#264640]/40 transition-all duration-300">
                          
                          {/* Large Faint Watermark Number */}
                          <span
                            aria-hidden="true"
                            className="absolute -bottom-4 -right-2 font-serif text-8xl font-bold text-[#264640]/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                          >
                            {step.step}
                          </span>

                          <div className="relative z-10 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="h-11 w-11 rounded-2xl bg-[#F8F3EA] text-[#966F33] flex items-center justify-center font-serif text-lg font-bold border border-[#E8DECA]">
                                <Icon className="h-5 w-5" />
                              </div>
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#264640] border border-[#E6E1D9]">
                                Step {step.step}
                              </span>
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-[#1F2E2B]">
                              {step.title}
                            </h3>

                            <p className="text-sm text-[#53625E] leading-relaxed">
                              {step.description}
                            </p>

                            <div className="pt-3 border-t border-[#F3EFEA] flex items-center gap-2 text-xs font-medium text-[#264640]">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#264640]" />
                              <span>
                                {index === 0 && "Takes under 2 minutes • 100% confidential"}
                                {index === 2 && "Unhurried pace • Collaborative care plan"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </MotionReveal>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action Callout */}
        <MotionReveal delay={350}>
          <div className="mt-16 p-8 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] flex flex-col sm:flex-row items-center justify-between gap-6 card-ambient-shadow max-w-4xl mx-auto">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-xl font-bold text-[#1F2E2B]">
                Ready to begin with Step 1?
              </h4>
              <p className="text-sm text-[#53625E]">
                Fill out our brief scheduling form and our team will be in touch within 24 to 48 business hours.
              </p>
            </div>
            <Button href="/schedule" variant="primary" size="md" className="shrink-0 group font-medium">
              <span>Request an Appointment</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
