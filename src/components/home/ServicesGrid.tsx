import * as React from "react";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Pill, HeartHandshake, Video, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export function ServicesGrid() {
  const serviceIcons: Record<string, React.ElementType> = {
    "psychiatric-evaluations": ClipboardCheck,
    "medication-management": Pill,
    "supportive-counseling": HeartHandshake,
    "telehealth-psychiatry": Video,
  };

  return (
    <section className="py-24 md:py-32 bg-[#264640] text-white relative overflow-hidden border-b border-[#1B332E]">
      {/* Subtle organic ambient glow */}
      <div
        className="absolute top-10 left-1/4 h-96 w-96 rounded-full bg-[#DCE5DE]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#966F33]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DCE5DE] inline-block">
              Comprehensive Support Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
              Four Pillars of Comprehensive Mental Health Care
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              From thorough diagnostic psychiatric evaluations and careful medication management to evidence-based psychotherapy and statewide telehealth.
            </p>
          </div>
        </MotionReveal>

        {/* 4 Cards Grid with Watermark Numbers (matching Section 3 in inspiration) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[service.id] || ClipboardCheck;

            return (
              <MotionReveal key={service.id} delay={index * 120} duration={650}>
                <div className="relative bg-white text-[#1F2E2B] rounded-3xl p-7 border border-[#E6E1D9] shadow-lg flex flex-col justify-between h-full overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                  
                  {/* Large Faint Watermark Number in Background (Design Inspiration) */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-4 -right-2 font-serif text-8xl font-bold text-[#264640]/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-[#966F33]/10"
                  >
                    {service.number}
                  </span>

                  <div className="relative z-10 space-y-4">
                    {/* Top Row: Icon and Tag */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-[#EBF1EC] text-[#264640] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#F8F3EA] text-[#966F33] border border-[#E8DECA]">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl font-bold text-[#1F2E2B] capitalize group-hover:text-[#264640] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#53625E] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Bullets */}
                    <div className="pt-2 space-y-2 border-t border-[#F3EFEA]">
                      {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-[#53625E]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#264640] shrink-0 mt-0.5" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Link */}
                  <div className="relative z-10 pt-6 mt-4 border-t border-[#F3EFEA]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#264640] hover:text-[#966F33] transition-colors"
                    >
                      <span>Explore this service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Bottom CTA Center Action */}
        <MotionReveal delay={300}>
          <div className="mt-14 text-center">
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="bg-transparent border-white/40 text-white hover:bg-white hover:text-[#264640] transition-all shadow-sm"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
