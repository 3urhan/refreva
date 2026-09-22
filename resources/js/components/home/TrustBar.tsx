import * as React from "react";
import { ShieldCheck, Clock, Lock, Video } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function TrustBar() {
  const metrics = [
    {
      icon: ShieldCheck,
      stat: "100%",
      label: "Virginia Licensed",
      badge: "DHP Credentialed",
      description: "Clinicians actively licensed through the Virginia DHP.",
      liveDot: true,
    },
    {
      icon: Clock,
      stat: "24–48h",
      label: "Intake Response",
      badge: "Prompt Support",
      description: "Dedicated consultation from our care coordination team.",
      liveDot: true,
    },
    {
      icon: Lock,
      stat: "HIPAA",
      label: "Confidential & Secure",
      badge: "Encrypted",
      description: "Full medical record privacy & encryption safeguards.",
      liveDot: false,
    },
    {
      icon: Video,
      stat: "Statewide",
      label: "Virtual & In-Person",
      badge: "All 95 Counties",
      description: "Serving Northern VA, Richmond, Coastal & statewide.",
      liveDot: false,
    },
  ];

  return (
    <section className="bg-[#264640] text-white py-8 md:py-10 relative overflow-hidden border-y border-[#1B332E]">
      {/* Subtle Luminous Glows */}
      <div
        className="absolute top-0 right-1/4 h-48 w-48 rounded-full bg-[#DCE5DE]/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-[#966F33]/15 blur-xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact 4 Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={index} delay={index * 80} duration={500}>
                <div className="relative rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-md hover:bg-white/[0.12] hover:border-[#DCE5DE]/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group">
                  
                  {/* Top Row: Mini Icon & Status Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-8 w-8 rounded-xl bg-[#DCE5DE]/20 text-[#DCE5DE] flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-medium text-white/90 border border-white/10">
                      {item.liveDot && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Stat & Label */}
                  <div className="space-y-0.5">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight block">
                      {item.stat}
                    </span>
                    <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#DCE5DE]">
                      {item.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-white/75 leading-relaxed pt-2 mt-2 border-t border-white/10">
                    {item.description}
                  </p>

                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
