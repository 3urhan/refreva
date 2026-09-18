import * as React from "react";
import Link from "next/link";
import { ShieldCheck, UserCheck, Heart, Award, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ClinicalCommitment() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "Board-Certified Standards",
      desc: "Practicing strictly under Virginia Department of Health Professions ethical regulations.",
    },
    {
      icon: Heart,
      title: "Unhurried Clinical Sessions",
      desc: "We dedicate real time to understand your psychological and biological history.",
    },
    {
      icon: Award,
      title: "Integrative Psychiatric Care",
      desc: "Combining medication review, diagnostics, and psychotherapy seamlessly.",
    },
    {
      icon: UserCheck,
      title: "Strict Confidentiality",
      desc: "Encrypted records and uncompromising respect for your dignity and privacy.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E6E1D9]">
      {/* Subtle organic ambient glow */}
      <div
        className="absolute top-0 right-10 h-96 w-96 rounded-full bg-[#DCE5DE]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#EBF1EC]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & 4 Commitment Features */}
          <div className="lg:col-span-7 space-y-8">
            <MotionReveal delay={0}>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] inline-block">
                  Clinical Quality Assurance
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
                  We are committed to providing the highest quality psychiatric and therapy experience.
                </h2>
                <p className="text-sm sm:text-base text-[#53625E] leading-relaxed pt-2">
                  Mental health treatment requires unwavering trust. Refreva is built upon high clinical ethics, continuous professional education, and an empathetic, non-judgmental environment for every patient.
                </p>
              </div>
            </MotionReveal>

            {/* 4 Feature Items Grid with Crisp White Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <MotionReveal key={idx} delay={idx * 80} duration={500}>
                    <div className="p-5 rounded-2xl bg-white border border-[#E6E1D9] shadow-sm hover:shadow-md hover:border-[#264640]/30 transition-all duration-200 space-y-2">
                      <div className="h-10 w-10 rounded-xl bg-[#EBF1EC] text-[#264640] flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif text-base font-semibold text-[#1F2E2B]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#53625E] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

            <MotionReveal delay={300}>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  href="/about"
                  variant="primary"
                  size="md"
                  className="group shadow-md"
                >
                  <span>Learn About Our Care Philosophy</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link
                  href="/about"
                  className="text-xs font-semibold text-[#264640] hover:text-[#1B332E] underline underline-offset-4 transition-colors"
                >
                  Read our full practice credentials →
                </Link>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Clinician Presentation Card with Floating Badges */}
          <div className="lg:col-span-5">
            <MotionReveal delay={200} duration={750} distance={30}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Clinician Feature Card on Light Surface */}
                <div className="rounded-3xl bg-white border border-[#E6E1D9] p-8 sm:p-10 shadow-xl card-ambient-shadow relative overflow-hidden space-y-6">
                  
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-[#DCE5DE] text-[#264640] flex items-center justify-center font-serif text-2xl font-bold shadow-inner">
                      <UserCheck className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#1F2E2B]">
                        Refreva Clinical Care
                      </h3>
                      <p className="text-xs text-[#53625E] font-medium">
                        Psychiatrists & Licensed Therapists
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#53625E] leading-relaxed border-t border-[#F3EFEA] pt-4 italic">
                    “Our goal is to ensure you feel heard, understood, and medically supported through every chapter of your mental health journey.”
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#F3EFEA] text-xs text-[#1F2E2B]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#264640] shrink-0" />
                      <span>Psychiatric Evaluations for Adults & Adolescents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#264640] shrink-0" />
                      <span>Supportive Psychotherapy & Coping Tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#264640] shrink-0" />
                      <span>Conservative, Evidence-Based Medication</span>
                    </div>
                  </div>

                </div>

                {/* Floating Credential Badge Top-Right */}
                <div className="absolute -top-5 -right-4 sm:-right-6 bg-white text-[#1F2E2B] rounded-2xl p-3.5 shadow-xl border border-[#E6E1D9] flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                  <div className="h-8 w-8 rounded-full bg-[#EBF1EC] text-[#264640] flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#966F33] block">
                      Licensed In
                    </span>
                    <span className="text-xs font-serif font-bold text-[#1F2E2B] block">
                      Commonwealth of Virginia
                    </span>
                  </div>
                </div>

                {/* Floating Status Badge Bottom-Left */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-[#1F2E2B] rounded-2xl p-3.5 shadow-xl border border-[#E6E1D9] flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#264640] animate-pulse" />
                  <div>
                    <span className="text-xs font-bold text-[#1F2E2B] block">
                      Accepting New Clients
                    </span>
                    <span className="text-[10px] text-[#53625E] block">
                      In-Person & Telehealth
                    </span>
                  </div>
                </div>

              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
