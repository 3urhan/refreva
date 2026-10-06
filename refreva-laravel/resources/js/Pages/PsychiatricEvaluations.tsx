import * as React from "react";
import { Head, Link } from "@inertiajs/react";
import { AppLayout } from "@/Layouts/AppLayout";
import { ArrowRight, CheckCircle2, AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export default function PsychiatricEvaluations() {
  return (
    <AppLayout>
      <Head title="Psychiatric Evaluations" />
      
      {/* 1. HERO SECTION */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-20 bg-[#F5F6F4] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E8EDE9] to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionReveal delay={0}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-xs text-[#53625E] font-medium tracking-wide">
                <li>
                  <Link href="/" className="hover:text-[#264640] transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/services" className="hover:text-[#264640] transition-colors">Services</Link>
                </li>
                <li>/</li>
                <li className="text-[#264640]">Psychiatric evaluations</li>
              </ol>
            </nav>
          </MotionReveal>

          <MotionReveal delay={80}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-6 bg-[#264640]" />
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#264640]">
                A thoughtful place to begin
              </span>
            </div>
          </MotionReveal>

          <MotionReveal delay={150}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-[1.1] max-w-3xl">
              Psychiatric evaluations
            </h1>
          </MotionReveal>

          <MotionReveal delay={250}>
            <p className="mt-6 text-base sm:text-lg text-[#53625E] leading-relaxed max-w-2xl">
              A comprehensive clinical conversation designed to help your provider understand your unique story, health history, and goals before charting a path forward together.
            </p>
          </MotionReveal>

          <MotionReveal delay={350}>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/schedule" variant="primary" size="lg" className="group">
                <span>Schedule an Appointment</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="bg-white border-[#DCE5DE] hover:border-[#264640] hover:bg-white text-[#264640]"
              >
                <Phone className="h-4 w-4 mr-2 text-[#264640]" />
                <span>Request a Call Back</span>
              </Button> */}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* What this service involves */}
              <MotionReveal delay={100}>
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1F2E2B] tracking-tight">
                    What this service involves
                  </h2>
                  <p className="text-base sm:text-lg text-[#53625E] leading-relaxed max-w-2xl">
                    A compassionate, unhurried dialogue to thoroughly understand the challenges you have been carrying and to explore what tailored support could look like.
                  </p>
                  
                  <div className="pt-2 space-y-5">
                    {[
                      "Dedicated time to share what feels difficult and envision what you hope will change.",
                      "A respectful, judgment-free review of your relevant health, mental-health, and medication history.",
                      "A clear, collaborative discussion addressing your questions and outlining possible care options."
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-[#264640] shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-base text-[#1F2E2B] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionReveal>

              {/* Who this may help */}
              <MotionReveal delay={200}>
                <div className="space-y-4 pt-10 border-t border-[#F0EBE1]">
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1F2E2B] tracking-tight">
                    Who this may help
                  </h2>
                  <p className="text-base sm:text-lg text-[#53625E] leading-relaxed max-w-2xl">
                    This evaluation is ideal for patients ages 16 and older who are ready to explore dedicated support for ongoing mental-health concerns, or who are seeking a fresh, expert perspective on their well-being.
                  </p>
                </div>
              </MotionReveal>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 relative">
              <MotionReveal delay={300} distance={40}>
                <div className="sticky top-32 bg-[#EAF0EC] p-8 rounded-2xl border border-[#DCE5DE] shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#264640] mb-4 block">
                    We are here to help
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1F2E2B] mb-4 leading-tight">
                    You do not have to know exactly where to start.
                  </h3>
                  <p className="text-[#53625E] text-sm sm:text-base leading-relaxed mb-8">
                    Call or email our team with any practical questions about telehealth, insurance verification, or simply taking the very first step toward an appointment.
                  </p>
                  
                  <div className="space-y-5">
                    <Button href="/contact" variant="primary" size="lg" className="w-full justify-center shadow-md">
                      <Phone className="h-4 w-4 mr-2 shrink-0" />
                      <span className="font-medium">Call our office</span>
                    </Button>
                    {/* <Link 
                      href="/contact" 
                      className="flex items-center justify-center gap-1.5 text-sm font-semibold text-[#264640] hover:text-[#B67A38] transition-colors group"
                    >
                      <span>Request a call back</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link> */}
                  </div>
                </div>
              </MotionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ & IMPORTANT INFO */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#F0EBE1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <MotionReveal delay={100}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#B67A38]" />
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#B67A38]">
                  Questions you may have
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight max-w-2xl">
                Helpful information about psychiatric evaluations.
              </h2>
            </div>
          </MotionReveal>

          {/* FAQ Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-[#E6E1D9] shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h4 className="font-serif text-2xl text-[#1F2E2B] mb-4">
                  What should I bring to an evaluation?
                </h4>
                <p className="text-[#53625E] leading-relaxed text-base sm:text-lg">
                  If available, please have your medication list, relevant health history, insurance information, and any questions you would like to discuss. Our care team will ensure the practical steps feel seamless before your visit.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={300}>
              <div className="bg-white p-8 rounded-2xl border border-[#E6E1D9] shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h4 className="font-serif text-2xl text-[#1F2E2B] mb-4">
                  Will I receive a diagnosis during the first visit?
                </h4>
                <p className="text-[#53625E] leading-relaxed text-base sm:text-lg">
                  Your provider will talk through what is appropriate for your individual needs. Often, a complete and nuanced understanding develops over more than one conversation.
                </p>
              </div>
            </MotionReveal>
          </div>

          {/* Important Medical Info Box */}
          <MotionReveal delay={400}>
            <div className="mt-8 p-6 sm:p-8 rounded-xl bg-[#FFF9F2] border border-[#F5DFB5] shadow-sm flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-[#F5DFB5]/50 p-2 rounded-lg shrink-0">
                <AlertTriangle className="h-6 w-6 text-[#B67A38]" strokeWidth={2} />
              </div>
              <div className="space-y-2 mt-0.5">
                <h3 className="font-bold text-[#1F2E2B] tracking-wide">
                  Important medical information
                </h3>
                <p className="text-sm text-[#53625E] leading-relaxed">
                  Please do not include urgent concerns, highly sensitive medical details, or protected health information in website messages or forms. {SITE_CONFIG.practiceName}&apos;s website and communication tools are not emergency services. If you are in immediate danger or experiencing a mental-health emergency, call <strong>911</strong>, go to the nearest emergency room, or call/text <strong>988</strong> in the United States.
                </p>
              </div>
            </div>
          </MotionReveal>

        </div>
      </section>
    </AppLayout>
  );
}
