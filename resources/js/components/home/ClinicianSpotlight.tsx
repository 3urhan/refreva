import { Link } from "@inertiajs/react";
import { ShieldCheck, Award, ArrowRight, Calendar, UserCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ClinicianSpotlight() {
  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Arch-framed Clinician Portrait (inspired by Image 1) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <MotionReveal delay={100} duration={750} distance={30}>
              <div className="relative">
                {/* Arch-Framed Image Container */}
                <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/clinician-portrait.jpg"
                    alt="Dr. Sarah Jenkins, Board-Certified Psychiatric Clinician at Refreva"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#264640]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Credential Badge Pill */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E6E1D9] flex items-center gap-3 max-w-[220px]">
                  <div className="h-10 w-10 rounded-xl bg-[#EBF1EC] text-[#264640] flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#966F33] block">
                      Licensed In
                    </span>
                    <span className="text-xs font-bold text-[#1F2E2B] block">
                      Commonwealth of VA
                    </span>
                  </div>
                </div>

                {/* Floating Experience Chip */}
                <div className="absolute top-12 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-[#E6E1D9] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[#1F2E2B]">
                    Accepting New Clients
                  </span>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Clinician Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal delay={0}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                  Meet Your Clinician
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
                  Dr. Sarah Jenkins, DNP, APRN, PMHNP-BC
                </h2>
                <p className="text-sm font-semibold text-[#264640]">
                  Doctor of Nursing Practice • Board-Certified Psychiatric Mental Health Clinician
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={120}>
              <div className="space-y-4 text-sm sm:text-base text-[#53625E] leading-relaxed">
                <p>
                  “I believe true psychiatric healing begins with feeling seen, unhurried, and genuinely understood. Rather than jumping straight to standardized prescriptions, my role is to help you untangle what your mind and body have been carrying.”
                </p>
                <p>
                  Specializing in adult and adolescent psychiatric evaluations, anxiety disorders, depression, neurodivergent focus support (ADHD), and compassionate medication management across Virginia.
                </p>
              </div>
            </MotionReveal>

            {/* Credential Highlights */}
            <MotionReveal delay={240}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3">
                  <Award className="h-5 w-5 text-[#264640] shrink-0" />
                  <span className="text-xs text-[#1F2E2B] font-medium">
                    Doctor of Nursing Practice (DNP), Psychiatry
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#264640] shrink-0" />
                  <span className="text-xs text-[#1F2E2B] font-medium">
                    Virginia Board of Nursing & Medicine Licensed
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3">
                  <UserCheck className="h-5 w-5 text-[#264640] shrink-0" />
                  <span className="text-xs text-[#1F2E2B] font-medium">
                    Evidence-Informed, Collaborative Approach
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D9] flex items-center gap-3">
                  <Stethoscope className="h-5 w-5 text-[#264640] shrink-0" />
                  <span className="text-xs text-[#1F2E2B] font-medium">
                    Telehealth & In-Person Appointments
                  </span>
                </div>
              </div>
            </MotionReveal>

            {/* Actions */}
            <MotionReveal delay={360}>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/schedule" variant="primary" size="lg" className="group font-medium">
                  <Calendar className="h-4 w-4" />
                  <span>Request an Appointment</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link
                  href="/team"
                  className="text-xs font-semibold text-[#264640] hover:text-[#1B332E] underline underline-offset-4 transition-colors text-center sm:text-left"
                >
                  Learn more about our practice team →
                </Link>
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
