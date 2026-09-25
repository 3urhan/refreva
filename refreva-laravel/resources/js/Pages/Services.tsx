import * as React from "react";
import { Head, Link } from "@inertiajs/react";
import { AppLayout } from "@/Layouts/AppLayout";
import { ArrowRight, CheckCircle2, AlertTriangle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Services() {
  return (
    <AppLayout>
      <Head title="Mental Health & Psychiatric Services in Virginia" />
      <div className="bg-[#FAF8F5] min-h-screen">
        {/* Header Section */}
        <section className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E6E1D9] bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <MotionReveal delay={0}>
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center space-x-2 text-xs text-[#53625E]">
                  <li>
                    <Link href="/" className="hover:text-[#264640] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="font-semibold text-[#264640]">Services</li>
                </ol>
              </nav>
            </MotionReveal>

            {/* Section Tag */}
            <MotionReveal delay={80}>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-6 bg-[#264640]" />
                <span className="text-xs uppercase tracking-widest font-bold text-[#264640]">
                  Services
                </span>
              </div>
            </MotionReveal>

            {/* Main Headline */}
            <MotionReveal delay={150}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-[1.15] max-w-3xl">
                Whole-person psychiatric care, tailored to your needs.
              </h1>
            </MotionReveal>

            {/* Supporting Copy */}
            <MotionReveal delay={250}>
              <p className="mt-6 text-lg sm:text-xl text-[#53625E] leading-relaxed max-w-3xl">
                Explore compassionate, evidence-based psychiatric and mental health services for eligible Virginia patients. We are here to help you feel more informed, supported, and hopeful about what comes next.
              </p>
            </MotionReveal>

            {/* Action Buttons */}
            <MotionReveal delay={350}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/schedule" variant="primary" size="lg" className="group">
                  <span>Request an appointment</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-[#264640]/30 hover:bg-[#264640]/5"
                >
                  <Phone className="h-4 w-4 text-[#264640]" />
                  <span>Call {SITE_CONFIG.officeLocation.phone}</span>
                </Button>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* Main Services List */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {SITE_CONFIG.services.map((service, index) => (
              <MotionReveal key={service.id} delay={index * 120} duration={650}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D9] card-ambient-shadow hover:shadow-xl hover:border-[#264640]/40 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                    {/* Left Column: Number */}
                    <div className="md:col-span-2">
                      <span className="font-serif text-4xl sm:text-5xl font-light text-[#B67A38]/80 block">
                        {service.number}
                      </span>
                    </div>

                    {/* Middle Column: Tag, Title, Description, and Bullets */}
                    <div className="md:col-span-7 space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[11px] uppercase tracking-widest font-bold text-[#966F33] block">
                          {service.tag}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2E2B] capitalize">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-sm md:text-base text-[#53625E] leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Bullets with Checkmarks */}
                      <div className="pt-2 space-y-2">
                        {service.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2E2B]/80">
                            <CheckCircle2 className="h-4 w-4 text-[#264640] shrink-0 mt-0.5" />
                            <span className="leading-normal">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: CTA Link */}
                    <div className="md:col-span-3 flex md:justify-end items-center md:items-start pt-2 md:pt-6">
                      <Link
                        href="/schedule"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#264640] hover:text-[#966F33] transition-colors group"
                      >
                        <span className="border-b border-[#264640]/40 group-hover:border-[#966F33]">
                          Request this service
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}

            {/* Important Medical Information Notice Box */}
            <MotionReveal delay={250}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FBF4EC] border border-[#EEDCC7] space-y-2 card-ambient-shadow">
                <div className="flex items-center gap-2.5 text-[#B67A38]">
                  <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-semibold text-sm sm:text-base text-[#1F2E2B]">
                    Important medical information
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#53625E] leading-relaxed pl-7">
                  Please do not include urgent concerns, highly sensitive medical details, or protected health information in website messages or contact forms. {SITE_CONFIG.practiceName}&apos;s website, email, and contact forms are not emergency services. If you are in immediate danger or having a mental-health emergency, call 911, go to the nearest emergency room, or call or text <strong>988</strong> in the United States.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
