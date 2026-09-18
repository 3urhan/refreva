import * as React from "react";
import Link from "next/link";
import { MapPin, Video, Building2, Clock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export function VirginiaPresence() {
  const regionsServed = [
    {
      region: "Northern Virginia (NOVA)",
      examples: "Arlington, Alexandria, Fairfax, Loudoun, Prince William",
    },
    {
      region: "Richmond Metro & Central Virginia",
      examples: "Richmond, Henrico, Chesterfield, Charlottesville",
    },
    {
      region: "Hampton Roads & Coastal Virginia",
      examples: "Virginia Beach, Norfolk, Chesapeake, Newport News",
    },
    {
      region: "Shenandoah Valley & Western Virginia",
      examples: "Roanoke, Harrisonburg, Lynchburg, Blacksburg",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] border-b border-[#E6E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeader
            badge="Virginia Practice Scope"
            title="Care accessible across the Commonwealth of Virginia."
            description="Whether you prefer virtual therapy from your home or in-person sessions, our licensed practitioners are authorized to treat clients residing throughout the state."
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Telehealth Statewide Card */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal delay={100} duration={700}>
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6E1D9] card-ambient-shadow hover:shadow-lg transition-all duration-300 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#DCE5DE]/70 flex items-center justify-center text-[#264640] transition-transform duration-300 hover:scale-105">
                    <Video className="h-6 w-6" />
                  </div>
                  <Badge variant="sage">Statewide Telehealth</Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-semibold text-[#1F2E2B]">
                    Virtual Counseling Across All Virginia Communities
                  </h3>
                  <p className="text-sm text-[#53625E] leading-relaxed">
                    Our clinicians hold active licenses under the Virginia Board of Counseling. Through HIPAA-compliant, encrypted video technology, you can engage in meaningful psychotherapy without stressful traffic or commute times.
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#966F33] mb-3 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                    Virginia Regions We Regularly Serve:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {regionsServed.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6E1D9]/70 space-y-1 hover:bg-[#F8F3EA]/60 hover:border-[#966F33]/30 transition-all duration-200"
                      >
                        <span className="font-medium text-[#1F2E2B] block">
                          {item.region}
                        </span>
                        <span className="text-[#53625E] block leading-tight">
                          {item.examples}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F3EFEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-[#53625E]">
                    <ShieldCheck className="h-4 w-4 text-[#264640]" />
                    <span>Licensed by the Virginia Dept. of Health Professions</span>
                  </div>
                  <Link
                    href="/services/telehealth"
                    className="text-[#264640] font-semibold hover:text-[#1b332e] hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn about Telehealth in VA</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Practice Office & Location Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <MotionReveal delay={250} duration={700}>
              <div className="bg-[#F3EFEA] rounded-3xl p-6 sm:p-10 border border-[#E6E1D9] card-ambient-shadow hover:shadow-lg transition-all duration-300 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#264640]/10 flex items-center justify-center text-[#264640]">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <Badge variant="neutral">Clinic Information</Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-semibold text-[#1F2E2B]">
                    Office & Contact
                  </h3>
                  <p className="text-xs text-[#53625E]">
                    Serving clients in-person and virtually by scheduled appointment.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-[#53625E] pt-2">
                  <div className="flex items-start gap-3 bg-white/80 p-4 rounded-2xl border border-[#E6E1D9] hover:bg-white transition-colors">
                    <MapPin className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#1F2E2B] font-semibold block">Practice Location:</strong>
                      <p className="text-[#53625E]">{SITE_CONFIG.officeLocation.addressLine1}</p>
                      <p className="text-[#53625E]">
                        {SITE_CONFIG.officeLocation.city}, {SITE_CONFIG.officeLocation.state} {SITE_CONFIG.officeLocation.zip}
                      </p>
                      <p className="text-[11px] text-[#966F33] italic pt-1">
                        In-person visits strictly by confirmed advance appointment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/80 p-4 rounded-2xl border border-[#E6E1D9] hover:bg-white transition-colors">
                    <Clock className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#1F2E2B] font-semibold block">Clinical Hours:</strong>
                      <p className="text-[#53625E]">{SITE_CONFIG.officeLocation.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/80 p-4 rounded-2xl border border-[#E6E1D9] hover:bg-white transition-colors">
                    <Mail className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <strong className="text-[#1F2E2B] font-semibold block">Inquiries & Intake:</strong>
                      <a
                        href={`mailto:${SITE_CONFIG.officeLocation.email}`}
                        className="text-[#264640] font-semibold hover:text-[#1b332e] hover:underline"
                      >
                        {SITE_CONFIG.officeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="outline" size="md" className="justify-center">
                    <span>View Full Contact Details</span>
                    <ArrowRight className="h-4 w-4" />
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
