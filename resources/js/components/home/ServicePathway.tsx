import * as React from "react";
import { Link } from "@inertiajs/react";
import { ArrowRight, ClipboardCheck, Pill, HeartHandshake, Video } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export function ServicePathway() {
  const serviceIcons: Record<string, React.ElementType> = {
    "psychiatric-evaluations": ClipboardCheck,
    "medication-management": Pill,
    "supportive-counseling": HeartHandshake,
    "telehealth-psychiatry": Video,
  };

  return (
    <section className="py-12 md:py-16 bg-[#EBF1EC] relative overflow-hidden border-y border-[#DCE5DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matching Image 1) */}
        <MotionReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] inline-block">
              Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              Care that begins with understanding your full story.
            </h2>
            <p className="text-sm sm:text-base text-[#53625E] leading-relaxed max-w-2xl mx-auto">
              We offer comprehensive psychiatric evaluations, thoughtful medication management, evidence-based supportive counseling, and statewide telehealth across Virginia.
            </p>
          </div>
        </MotionReveal>

        {/* 4 Compact White Cards in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[service.id] || ClipboardCheck;

            return (
              <MotionReveal key={service.id} delay={index * 100} duration={600}>
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E1D9] shadow-sm hover:shadow-xl hover:border-[#264640]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full group">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-light text-[#966F33]">
                        {service.number}
                      </span>
                      <div className="h-10 w-10 rounded-xl bg-[#FAF8F5] text-[#264640] flex items-center justify-center border border-[#E6E1D9] transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl font-bold text-[#1F2E2B] group-hover:text-[#264640] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#53625E] leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F3EFEA]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#264640] hover:text-[#966F33] transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </MotionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
