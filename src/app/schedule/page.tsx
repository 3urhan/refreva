import type { Metadata } from "next";
import { ShieldCheck, Clock, CheckCircle2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { AppointmentRequestForm } from "@/components/forms/AppointmentRequestForm";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Schedule an initial therapy consultation or request an appointment with a licensed counselor at Refreva in Virginia.",
};

export default function SchedulePage() {
  return (
    <div className="bg-[#FAF8F5] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <MotionReveal delay={0}>
            <Badge variant="sage">Appointment Request</Badge>
          </MotionReveal>
          <MotionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              Take the first step at your own pace.
            </h1>
          </MotionReveal>
          <MotionReveal delay={200}>
            <p className="text-base sm:text-lg text-[#53625E] leading-relaxed">
              Please share your general scheduling preferences below. A member of our clinical team will follow up within 24 to 48 business hours to discuss next steps.
            </p>
          </MotionReveal>
        </div>

        {/* Expectations Card */}
        <MotionReveal delay={250}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3 card-ambient-shadow hover:-translate-y-0.5 transition-transform">
              <Clock className="h-5 w-5 text-[#264640] shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-[#1F2E2B] block">24–48 Hr Response</span>
                <span className="text-[#53625E]">Quick administrative reply</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3 card-ambient-shadow hover:-translate-y-0.5 transition-transform">
              <ShieldCheck className="h-5 w-5 text-[#264640] shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-[#1F2E2B] block">Strictly Confidential</span>
                <span className="text-[#53625E]">Protected contact info</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3 card-ambient-shadow hover:-translate-y-0.5 transition-transform">
              <CheckCircle2 className="h-5 w-5 text-[#264640] shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-[#1F2E2B] block">No Obligation</span>
                <span className="text-[#53625E]">Explore fit comfortably</span>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Form Component */}
        <MotionReveal delay={300}>
          <AppointmentRequestForm />
        </MotionReveal>

        {/* Emergency Notice */}
        <MotionReveal delay={350}>
          <div className="p-6 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] text-center space-y-2 card-ambient-shadow">
            <div className="flex items-center justify-center gap-2 text-rose-800 text-xs font-semibold">
              <Heart className="h-4 w-4" />
              <span>Crisis & Emergency Notice</span>
            </div>
            <p className="text-xs text-[#53625E] max-w-xl mx-auto leading-relaxed">
              This appointment request form is for routine, outpatient scheduling inquiries only. If you are experiencing thoughts of self-harm, a life-threatening crisis, or require immediate psychiatric assistance, please call or text <strong>988</strong> (24/7 Lifeline) or call <strong>911</strong> immediately.
            </p>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
