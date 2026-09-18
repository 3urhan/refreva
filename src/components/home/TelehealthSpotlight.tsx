import * as React from "react";
import Link from "next/link";
import { Video, ShieldCheck, Clock, MapPin, ArrowRight, Laptop, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function TelehealthSpotlight() {
  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] inline-block">
              Statewide Virtual Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              Advance Your Mental Well-Being from Anywhere in Virginia
            </h2>
            <p className="text-sm sm:text-base text-[#53625E] leading-relaxed">
              Clinical excellence without geographical constraints. Receive confidential psychiatric evaluations, medication management, and therapy from the comfort and privacy of your home.
            </p>
          </div>
        </MotionReveal>

        {/* Highlight Split Card (inspired by Section 4 in reference) */}
        <MotionReveal delay={150} duration={750}>
          <div className="bg-white rounded-3xl border border-[#E6E1D9] shadow-xl card-ambient-shadow overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Visual / Graphic Treatment Scene */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#264640] to-[#1B332E] text-white p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden">
              <div
                className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#DCE5DE]/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#966F33]/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#DCE5DE] border border-white/10 backdrop-blur-sm">
                  <Laptop className="h-3.5 w-3.5" />
                  <span>HIPAA-Compliant Virtual Room</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                  Quality care that fits into your actual life.
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  No rushing through Northern Virginia traffic or taking half a day off work. Connect securely on your computer, tablet, or smartphone.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#DCE5DE]" />
                  <span>Licensed under Virginia Board regulations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-[#DCE5DE]" />
                  <span>E-prescriptions delivered directly to your pharmacy</span>
                </div>
              </div>
            </div>

            {/* Right Column: Card Details & Metric Boxes */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-xl bg-[#EBF1EC] flex items-center justify-center text-[#264640]">
                      <Video className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#966F33] block">
                        Direct Clinician Access
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#1F2E2B]">
                        Telehealth Psychiatry & Therapy
                      </h4>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] text-[#264640] border border-[#E6E1D9]">
                    Statewide VA
                  </span>
                </div>

                <p className="text-sm text-[#53625E] leading-relaxed">
                  Under Virginia professional licensing statutes, therapy and psychiatric consultations are available as long as you are physically within Virginia at the time of your appointment.
                </p>

                {/* 2 Metric Highlight Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] space-y-1">
                    <div className="flex items-center gap-2 text-[#264640] font-semibold text-xs">
                      <Clock className="h-4 w-4" />
                      <span>Zero Commute Needed</span>
                    </div>
                    <p className="text-xs text-[#53625E]">
                      Attend appointments from your home, private office, or quiet space.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] space-y-1">
                    <div className="flex items-center gap-2 text-[#264640] font-semibold text-xs">
                      <ShieldCheck className="h-4 w-4" />
                      <span>100% HIPAA-Encrypted</span>
                    </div>
                    <p className="text-xs text-[#53625E]">
                      High-definition audio and video with enterprise-grade encryption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#53625E]">
                  <span>Serving NOVA, Richmond, Hampton Roads & All 95 Counties</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  <Button href="/services/telehealth" variant="outline" size="md">
                    <span>Telehealth FAQs</span>
                  </Button>
                  <Button href="/schedule" variant="primary" size="md" className="group">
                    <span>Book Telehealth</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
