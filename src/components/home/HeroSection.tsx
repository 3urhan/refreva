"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Video, 
  MapPin, 
  Brain, 
  Search 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1F2E2B] via-[#264640] to-[#1C3E38] text-white py-14 lg:py-20 border-b border-[#264640]/40">
      {/* Ambient background glow accents */}
      <div
        className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-[#DCE5DE]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#966F33]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, and CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Badge */}
            <MotionReveal delay={0}>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#DCE5DE] backdrop-blur-md border border-white/15">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Virginia Licensed Psychiatric Care & Therapy
                </span>
              </div>
            </MotionReveal>

            {/* Headline matching requested writing style */}
            <MotionReveal delay={120} duration={700}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-white font-normal tracking-tight leading-[1.12]">
                Compassionate Care,{" "}
                <span className="italic font-normal text-[#DCE5DE] block sm:inline">
                  Close to Home.
                </span>
              </h1>
            </MotionReveal>

            {/* Subtitle matching the requested writing style */}
            <MotionReveal delay={240} duration={700}>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                From comprehensive psychiatric evaluations and thoughtful medication management to supportive psychotherapy, our licensed Virginia clinicians deliver safe, timely, and compassionate care.
              </p>
            </MotionReveal>

            {/* Action Buttons: Light pill + Glass outline pill */}
            <MotionReveal delay={360} duration={700}>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button 
                  href="/schedule" 
                  variant="primary" 
                  size="md" 
                  className="bg-[#DCE5DE] hover:bg-white text-[#1F2E2B] font-semibold group shadow-lg"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  href="/services/telehealth" 
                  variant="outline" 
                  size="md"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-medium"
                >
                  <span>Start Video Consult</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </MotionReveal>

            {/* Micro Trust Indicators Bar */}
            <MotionReveal delay={480} duration={700}>
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#DCE5DE]" />
                  <span>Licensed Virginia Clinicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-[#DCE5DE]" />
                  <span>In-Person & Statewide Telehealth</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#DCE5DE]" />
                  <span>100% Confidential & Secure</span>
                </div>
              </div>
            </MotionReveal>

          </div>

          {/* Right Column: Asset Image with Floating Transparent Glass Cards */}
          <div className="lg:col-span-6 relative pt-4 sm:pt-0">
            <MotionReveal delay={200} duration={800} distance={25}>
              <div className="relative mx-auto max-w-lg lg:max-w-none pb-8 sm:pb-12">
                
                {/* Main Image Frame using our community conversation asset (NOT a single person) */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/hero-community.jpg"
                    alt="Diverse community in supportive, peaceful conversation outdoors"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle darkening gradient at base of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E2B]/85 via-transparent to-black/20" />
                </div>

                {/* Floating Glass Card 1: Top Badge (Serving All of VA) */}
                <div className="hidden sm:flex absolute -top-4 -right-2 sm:-right-4 z-20 bg-white/20 backdrop-blur-md border border-white/35 rounded-2xl p-3 shadow-xl max-w-[220px] items-center gap-2.5 text-white">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="h-7 w-7 rounded-full bg-[#264640] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                      VA
                    </div>
                    <div className="h-7 w-7 rounded-full bg-[#966F33] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                      DHP
                    </div>
                    <div className="h-7 w-7 rounded-full bg-[#1C544E] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                      95+
                    </div>
                  </div>
                  <p className="text-[11px] leading-tight text-white/95 font-medium">
                    Serving all 95 Virginia cities and counties.
                  </p>
                </div>

                {/* Floating Glass Card 2: Mid-Left Pill (Virtual Care Team) */}
                <div className="hidden sm:flex absolute top-1/3 -left-4 sm:-left-6 z-20 bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl p-2.5 shadow-xl items-center gap-2.5 text-white">
                  <div className="h-9 w-9 rounded-xl bg-white text-[#264640] flex items-center justify-center shadow-sm shrink-0">
                    <Video className="h-4 w-4" />
                  </div>
                  <div className="text-left pr-2">
                    <span className="text-[10px] uppercase font-bold text-[#DCE5DE] block leading-none">
                      Statewide Telehealth
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Care Team at Your Service
                    </span>
                  </div>
                </div>

                {/* Floating Glass Card 3: Transparent Search / Quick Intake Card (Bottom Right) */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-2 sm:left-auto z-20 w-full sm:max-w-xs md:max-w-sm rounded-3xl bg-white/25 backdrop-blur-xl border border-white/40 p-4 sm:p-5 shadow-2xl space-y-2.5 text-[#1F2E2B]">
                  
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#DCE5DE]" />
                      <span>Find Your Care Pathway</span>
                    </div>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full text-[#DCE5DE] font-normal">
                      Virginia
                    </span>
                  </div>

                  {/* Input 1: Specialty / Condition */}
                  <Link href="/schedule" className="block relative group">
                    <Brain className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#53625E] group-hover:text-[#264640] transition-colors" />
                    <div className="w-full pl-10 pr-3 py-2.5 rounded-full bg-white text-xs text-[#1F2E2B] shadow-sm flex items-center justify-between group-hover:bg-[#FAF8F5] transition-colors">
                      <span className="text-[#53625E]">Specialty, condition (e.g. Anxiety)</span>
                      <ArrowRight className="h-3 w-3 text-[#53625E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>

                  {/* Input 2: Location */}
                  <Link href="/services/telehealth" className="block relative group">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#53625E] group-hover:text-[#264640] transition-colors" />
                    <div className="w-full pl-10 pr-3 py-2.5 rounded-full bg-white text-xs text-[#1F2E2B] shadow-sm flex items-center justify-between group-hover:bg-[#FAF8F5] transition-colors">
                      <span className="text-[#53625E]">Address, City or Zip code</span>
                      <ArrowRight className="h-3 w-3 text-[#53625E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>

                  {/* Input 3: Insurance Name */}
                  <Link href="/schedule" className="block relative group">
                    <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#53625E] group-hover:text-[#264640] transition-colors" />
                    <div className="w-full pl-10 pr-3 py-2.5 rounded-full bg-white text-xs text-[#1F2E2B] shadow-sm flex items-center justify-between group-hover:bg-[#FAF8F5] transition-colors">
                      <span className="text-[#53625E]">Insurance name or self-pay</span>
                      <ArrowRight className="h-3 w-3 text-[#53625E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>

                  {/* Search Button */}
                  <Button
                    href="/schedule"
                    variant="primary"
                    size="sm"
                    className="w-full justify-center bg-[#1F2E2B] hover:bg-[#14201e] text-white font-semibold py-2.5 shadow-md gap-2 text-xs"
                  >
                    <Search className="h-3.5 w-3.5" />
                    <span>Search Available Care</span>
                  </Button>

                </div>

              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
