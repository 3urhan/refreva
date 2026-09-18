import type { Metadata } from "next";
import { MapPin, Mail, Clock, ShieldCheck, Heart, Video, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Virginia Locations",
  description:
    "Get in touch with Refreva. Practice location, clinical hours, telehealth coverage throughout Virginia, and direct contact options.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#E6E1D9] bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <MotionReveal delay={0}>
            <Badge variant="sage">Get in Touch</Badge>
          </MotionReveal>
          <MotionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              We are here to answer your questions.
            </h1>
          </MotionReveal>
          <MotionReveal delay={200}>
            <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed max-w-2xl mx-auto">
              Whether you are ready to begin therapy or simply want to learn more about our Virginia practice, please feel free to reach out.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Channels */}
            <div className="lg:col-span-6 space-y-6">
              <MotionReveal delay={100} duration={700}>
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E1D9] card-ambient-shadow hover:shadow-lg transition-all duration-300 space-y-6">
                  <h2 className="font-serif text-2xl font-semibold text-[#1F2E2B]">
                    Practice Contact Channels
                  </h2>

                  <div className="space-y-4 text-sm text-[#53625E]">
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">
                      <MapPin className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1F2E2B] font-semibold block">
                          Virginia Practice Location
                        </strong>
                        <p>{SITE_CONFIG.officeLocation.addressLine1}</p>
                        <p>
                          {SITE_CONFIG.officeLocation.city}, {SITE_CONFIG.officeLocation.state} {SITE_CONFIG.officeLocation.zip}
                        </p>
                        <span className="text-[11px] text-[#966F33] font-medium block pt-1">
                          In-person sessions held strictly by confirmed advance appointment.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">
                      <Video className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1F2E2B] font-semibold block">
                          Statewide Telehealth
                        </strong>
                        <p>
                          Virtual appointments provided to clients located anywhere in the Commonwealth of Virginia.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">
                      <Clock className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1F2E2B] font-semibold block">
                          Office Hours
                        </strong>
                        <p>{SITE_CONFIG.officeLocation.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">
                      <Mail className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1F2E2B] font-semibold block">
                          Administrative Email
                        </strong>
                        <a
                          href={`mailto:${SITE_CONFIG.officeLocation.email}`}
                          className="text-[#264640] font-semibold hover:text-[#1b332e] hover:underline"
                        >
                          {SITE_CONFIG.officeLocation.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-6 space-y-6">
              <MotionReveal delay={250} duration={700}>
                <div className="bg-[#F3EFEA] rounded-3xl p-8 sm:p-10 border border-[#E6E1D9] card-ambient-shadow hover:shadow-lg transition-all duration-300 space-y-6">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#966F33]">
                    Appointment Inquiries
                  </span>
                  <h3 className="font-serif text-2xl text-[#1F2E2B]">
                    Ready to request your appointment?
                  </h3>
                  <p className="text-sm text-[#53625E] leading-relaxed">
                    The quickest way to initiate care with Refreva is through our secure scheduling form. You can choose your preferred time of day, whether you prefer virtual or in-person care, and share any general questions.
                  </p>

                  <div className="pt-2">
                    <Button href="/schedule" variant="primary" size="lg" className="w-full justify-center group">
                      <Calendar className="h-4 w-4" />
                      <span>Go to Appointment Request Form</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-[#E6E1D9] text-xs text-[#53625E] space-y-2">
                    <div className="flex items-center gap-2 text-[#264640] font-medium">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Confidential & Private Communication</span>
                    </div>
                    <p>
                      Please remember that standard web forms and emails are not intended for transmitting sensitive protected health records.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Crisis Reminder Card */}
              <MotionReveal delay={350}>
                <div className="p-6 rounded-3xl bg-white border border-[#E6E1D9] card-ambient-shadow space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 text-xs font-semibold">
                    <Heart className="h-4 w-4" />
                    <span>Emergency Protocol</span>
                  </div>
                  <p className="text-xs text-[#53625E] leading-relaxed">
                    If you are experiencing an acute mental health crisis, please call or text <strong>988</strong> (Suicide & Crisis Lifeline) or call <strong>911</strong> immediately. Refreva does not provide immediate 24/7 crisis response.
                  </p>
                </div>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
