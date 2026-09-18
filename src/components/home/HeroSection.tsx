import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1F2E2B] text-white min-h-[500px] lg:min-h-[580px] flex items-center">
      {/* Background Photography with Deep Evergreen Atmosphere Overlay (inspired by Image 1) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-community.jpg"
          alt="Diverse people in supportive, peaceful conversation outdoors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right opacity-45"
        />
        {/* Multilayered Gradient Wash for Perfect Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E2B] via-[#264640]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E2B] via-transparent to-[#1F2E2B]/50 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-20 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow Badge */}
          <MotionReveal delay={0}>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#DCE5DE] backdrop-blur-md border border-white/15">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Licensed Psychiatric Care & Therapy in Virginia
              </span>
            </div>
          </MotionReveal>

          {/* Headline */}
          <MotionReveal delay={120} duration={700}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight leading-[1.12]">
              Psychiatric Care,{" "}
              <span className="italic font-normal text-[#DCE5DE] block sm:inline">
                Personalized to Your Needs.
              </span>
            </h1>
          </MotionReveal>

          {/* Subtitle */}
          <MotionReveal delay={240} duration={700}>
            <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl">
              Refreva provides warm, evidence-informed psychiatric evaluations, thoughtful medication management, and supportive psychotherapy for individuals seeking healing, clarity, and steady ground.
            </p>
          </MotionReveal>

          {/* Action Buttons (High Contrast on Dark Hero) */}
          <MotionReveal delay={360} duration={700}>
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button 
                href="/schedule" 
                variant="primary" 
                size="md" 
                className="bg-white text-[#264640] hover:bg-[#FAF8F5] font-semibold group shadow-xl"
              >
                <Calendar className="h-4 w-4" />
                <span>Request an Appointment</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                href="/services" 
                variant="outline" 
                size="md"
                className="bg-transparent border-white/40 text-white hover:bg-white hover:text-[#264640] transition-colors"
              >
                <span>Explore Our Services</span>
              </Button>
            </div>
          </MotionReveal>

          {/* Micro Trust Indicators Bar */}
          <MotionReveal delay={480} duration={700}>
            <div className="pt-8 mt-4 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#DCE5DE]" />
                <span>Serving All of Virginia</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-[#DCE5DE]" />
                <span>In-Person & Statewide Telehealth</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#DCE5DE]" />
                <span>100% Confidential & HIPAA Secure</span>
              </div>
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
}
