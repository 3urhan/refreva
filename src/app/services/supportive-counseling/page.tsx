import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Supportive Counseling & Therapy in Virginia",
  description:
    "Guidance, psychoeducation, and compassionate coping support to help you navigate stress, life transitions, and mental health challenges.",
};

export default function SupportiveCounselingPage() {
  const service = SITE_CONFIG.services.find((s) => s.id === "supportive-counseling")!;

  const counselingFaqs = [
    {
      id: "how-does-it-differ",
      question: "How does supportive counseling differ from psychiatric evaluation?",
      answer:
        "While an evaluation focuses on comprehensive assessment and diagnostic understanding, supportive counseling is an ongoing therapeutic space dedicated to emotional processing, developing coping mechanisms, problem-solving, and building resilience.",
    },
    {
      id: "session-cadence",
      question: "How frequently do supportive counseling sessions take place?",
      answer:
        "Most clients begin meeting weekly or bi-weekly for 50-minute sessions. This regular cadence builds momentum and provides a reliable anchor as you work through life's stressors.",
    },
    {
      id: "in-person-vs-telehealth",
      question: "Can I receive supportive counseling virtually across Virginia?",
      answer:
        "Yes. We provide secure virtual telehealth counseling for clients located anywhere in the Commonwealth of Virginia, as well as in-person appointments.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#53625E] hover:text-[#264640] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <MotionReveal delay={0}>
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-light text-[#B67A38]/80">03</span>
              <Badge variant="warming">{service.tag}</Badge>
            </div>
          </MotionReveal>
          <MotionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight capitalize">
              {service.title}
            </h1>
          </MotionReveal>
          <MotionReveal delay={200}>
            <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed">
              {service.shortDescription}
            </p>
          </MotionReveal>
          <MotionReveal delay={300}>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/schedule" variant="primary" size="lg" className="group">
                <Calendar className="h-4 w-4" />
                <span>Request an Appointment</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                <span>Ask a Question</span>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-[#E6E1D9] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal delay={0}>
            <div className="space-y-4 text-base md:text-lg text-[#53625E] leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2E2B]">
                Practical, Empathetic Support for Everyday Life
              </h2>
              <p>{service.description}</p>
              <p>
                We collaborate with you on real-world tools for calming the nervous system, managing relationship boundaries, handling workplace burnout, and navigating unpredictable life adjustments.
              </p>
            </div>
          </MotionReveal>

          {/* Pillars */}
          <div className="space-y-6 pt-4">
            <MotionReveal delay={100}>
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                Focus Areas in Supportive Counseling
              </h3>
            </MotionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit, idx) => (
                <MotionReveal key={idx} delay={idx * 100}>
                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] space-y-2 card-ambient-shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="flex items-center gap-2 text-[#264640] font-semibold text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          {/* Session Logistics Box */}
          <MotionReveal delay={150}>
            <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] space-y-4 card-ambient-shadow">
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                Session Logistics
              </h3>
              <div className="space-y-3 text-sm text-[#53625E] leading-relaxed">
                <p>
                  Standard supportive counseling sessions are 50 minutes. We tailor discussions around your ongoing goals and comfort level.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#264640]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>50-Minute Sessions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Private & Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* FAQs */}
          <MotionReveal delay={200}>
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Common Questions
              </h3>
              <Accordion items={counselingFaqs} />
            </div>
          </MotionReveal>

          {/* Bottom CTA */}
          <MotionReveal delay={250}>
            <div className="pt-8 border-t border-[#E6E1D9] text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Begin Your Counseling Journey
              </h3>
              <p className="text-sm text-[#53625E] max-w-md mx-auto">
                Reach out today to connect with a licensed Virginia counselor.
              </p>
              <div className="pt-2">
                <Button href="/schedule" variant="primary" size="lg" className="group">
                  <span>Request an Appointment</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
