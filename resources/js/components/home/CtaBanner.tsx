import * as React from "react";
import { ShieldCheck, Calendar, MessageSquare, ArrowRight, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function CtaBanner() {
  return (
    <section className="py-10 md:py-14 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elevated Rounded Banner Card (inspired by Section 8 in reference) */}
        <MotionReveal duration={700}>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#264640] via-[#203a35] to-[#1B332E] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-[#264640]/30 overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div
              className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#DCE5DE]/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#966F33]/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DCE5DE] inline-block">
                Take the First Step
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                Ready to Begin Your Care with Refreva?
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
                Whether you need a diagnostic psychiatric evaluation, thoughtful medication management, or supportive counseling, our licensed Virginia practitioners are here to support your healing.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  href="/schedule"
                  variant="primary"
                  size="md"
                  className="bg-white text-[#264640] hover:bg-[#FAF8F5] font-semibold group shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Request an Appointment</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="bg-transparent border-white/40 text-white hover:bg-white hover:text-[#264640] transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Contact Our Practice</span>
                </Button>
              </div>

              {/* Quick Trust Pillars at Bottom of Card */}
              <div className="pt-8 mt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/80">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#DCE5DE]" />
                  <span>100% Confidential & HIPAA Secure</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4 text-[#DCE5DE]" />
                  <span>24–48h Intake Response Time</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Video className="h-4 w-4 text-[#DCE5DE]" />
                  <span>Serving Clients Across Virginia</span>
                </div>
              </div>

            </div>

          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
