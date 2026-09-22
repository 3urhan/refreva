import * as React from "react";
import { Head } from "@inertiajs/react";
import { AppLayout } from "@/Layouts/AppLayout";
import { ShieldCheck, Calendar, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Team() {
  return (
    <AppLayout>
      <Head title="Our Therapists & Clinical Team" />
      <div className="bg-[#FAF8F5]">
        {/* Header */}
        <section className="py-16 md:py-24 border-b border-[#E6E1D9] bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <MotionReveal delay={0}>
              <Badge variant="sage">Our Clinical Team</Badge>
            </MotionReveal>
            <MotionReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
                Compassionate guides for your therapeutic journey.
              </h1>
            </MotionReveal>
            <MotionReveal delay={200}>
              <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed max-w-2xl mx-auto">
                Our clinicians are licensed in Virginia and committed to creating a secure, collaborative space where you feel genuinely supported.
              </p>
            </MotionReveal>
          </div>
        </section>

        {/* Clinician Roster */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {SITE_CONFIG.clinicians.map((clinician, index) => (
              <MotionReveal key={clinician.id} delay={index * 150} duration={700}>
                <div
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E1D9] card-ambient-shadow hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                  {/* Clinician Portrait / Placeholder Box */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F3EFEA] border border-[#E6E1D9] flex flex-col items-center justify-center p-6 text-center space-y-3">
                      <div className="h-16 w-16 rounded-full bg-[#DCE5DE] flex items-center justify-center text-[#264640] transition-transform duration-300 hover:scale-105">
                        <UserCheck className="h-8 w-8" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#966F33]">
                          Licensed Clinician
                        </span>
                        <p className="text-xs text-[#53625E]">
                          Professional portrait provided upon clinical verification.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E6E1D9] space-y-2 text-xs">
                      <div className="flex items-center gap-1.5 text-[#264640] font-semibold">
                        <ShieldCheck className="h-4 w-4" />
                        <span>State of Virginia Licensed</span>
                      </div>
                      <p className="text-[#53625E]">
                        {clinician.licenseJurisdiction}
                      </p>
                      <p className="text-[11px] text-[#264640] font-semibold pt-1">
                        Status: Currently Accepting New Clients
                      </p>
                    </div>
                  </div>

                  {/* Clinician Bio & Details */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-serif text-3xl text-[#1F2E2B]">
                          {clinician.name}
                        </h2>
                        <Badge variant="sage" className="text-xs">
                          {clinician.title}
                        </Badge>
                      </div>
                      <p className="text-xs font-medium text-[#53625E]">
                        Credentials: {clinician.credentials}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm text-[#53625E] leading-relaxed">
                      <p>{clinician.bio}</p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#966F33] block">
                        Therapeutic Approach
                      </span>
                      <p className="text-sm text-[#53625E] leading-relaxed">
                        {clinician.approach}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#966F33] block">
                        Areas of Clinical Focus
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {clinician.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs bg-[#FAF8F5] text-[#1F2E2B] border border-[#E6E1D9] hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-[#53625E]">
                        Format: {clinician.sessionType.join(" • ")}
                      </div>
                      <Button href="/schedule" variant="primary" size="md">
                        <Calendar className="h-4 w-4" />
                        <span>Request an Appointment</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}

            {/* Ethics Note */}
            <MotionReveal delay={200}>
              <div className="p-6 rounded-2xl bg-[#F3EFEA] border border-[#E6E1D9] text-xs text-[#53625E] space-y-1 card-ambient-shadow">
                <strong className="text-[#1F2E2B] block">Commitment to Clinical Integrity:</strong>
                <p>
                  Refreva strictly lists verified, fully credentialed clinicians licensed to practice psychotherapy in the Commonwealth of Virginia. We never fabricate therapist credentials, degrees, or licensing numbers.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
