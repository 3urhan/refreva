import * as React from "react";
import Link from "next/link";
import { ShieldCheck, CreditCard, CheckCircle2, HelpCircle, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function InsurancePricingSection() {
  const insuranceNetworks = [
    { name: "Anthem Blue Cross", type: "In-Network" },
    { name: "Aetna Health", type: "In-Network" },
    { name: "Cigna / Evernorth", type: "In-Network" },
    { name: "Optum / UnitedHealthcare", type: "In-Network" },
    { name: "Medicare Part B", type: "In-Network" },
    { name: "HSA & FSA Eligible", type: "Accepted" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E6E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative on Affordability */}
          <div className="lg:col-span-6 space-y-6">
            <MotionReveal delay={0}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                  Transparent Pricing & Coverage
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
                  Quality mental health care that fits your budget.
                </h2>
              </div>
            </MotionReveal>

            <MotionReveal delay={120}>
              <p className="text-base sm:text-lg text-[#53625E] leading-relaxed">
                Financial ambiguity should never stand between you and compassionate care. Refreva partners with leading Virginia insurance networks and provides upfront, predictable pricing before your first appointment.
              </p>
            </MotionReveal>

            {/* Benefit Checkpoints */}
            <MotionReveal delay={240}>
              <div className="space-y-3.5 pt-2 text-sm text-[#1F2E2B]">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#EBF1EC] text-[#264640] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block font-semibold">In-Network Insurance Billing:</strong>
                    <span className="text-xs text-[#53625E]">We submit claims directly to your provider so you only pay your verified copay.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#EBF1EC] text-[#264640] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block font-semibold">Transparent Self-Pay Rates:</strong>
                    <span className="text-xs text-[#53625E]">Clear, flat fees for clients choosing not to utilize insurance, with superbills provided for out-of-network reimbursement.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#EBF1EC] text-[#264640] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block font-semibold">HSA & FSA Eligible:</strong>
                    <span className="text-xs text-[#53625E]">Use your Health Savings Account or Flexible Spending Account for all consultations and sessions.</span>
                  </div>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={360}>
              <div className="pt-2">
                <Button href="/schedule" variant="primary" size="md" className="group font-medium">
                  <span>Verify Your Benefits With Us</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Insurance Network Verification Card (matching Image 1) */}
          <div className="lg:col-span-6">
            <MotionReveal delay={200} duration={750} distance={30}>
              <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E6E1D9] shadow-xl card-ambient-shadow space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-[#EBF1EC] text-[#264640] flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#1F2E2B]">
                        Accepted Insurance in Virginia
                      </h3>
                      <p className="text-xs text-[#53625E]">
                        Direct in-network claim processing
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F8F3EA] text-[#966F33] border border-[#E8DECA]">
                    Active In-Network
                  </span>
                </div>

                {/* Insurance Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                  {insuranceNetworks.map((net, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E6E1D9] text-center space-y-0.5 hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors"
                    >
                      <span className="text-xs font-bold text-[#1F2E2B] block leading-tight">
                        {net.name}
                      </span>
                      <span className="text-[10px] text-[#264640] font-medium block">
                        {net.type}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Estimate Callout Box */}
                <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#E6E1D9] text-xs text-[#53625E] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#1F2E2B] font-semibold">
                    <CreditCard className="h-4 w-4 text-[#264640]" />
                    <span>Typical Copay Range</span>
                  </div>
                  <p>
                    Most clients with commercial Virginia insurance pay an estimated <strong>$20 to $40 per session</strong> depending on individual plan deductibles.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F3EFEA] flex items-center justify-between text-xs text-[#53625E]">
                  <span>Unsure about your coverage?</span>
                  <Link
                    href="/contact"
                    className="text-[#264640] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Contact Billing Support</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
