import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Psychiatric Evaluations in Virginia",
  description:
    "Comprehensive, compassionate psychiatric evaluations to better understand your emotional well-being and identify personalized treatment options.",
};

export default function PsychiatricEvaluationsPage() {
  const service = SITE_CONFIG.services.find((s) => s.id === "psychiatric-evaluations")!;

  const evaluationFaqs = [
    {
      id: "what-to-expect",
      question: "What should I expect during a psychiatric evaluation?",
      answer:
        "An evaluation is an unhurried, collaborative discussion. Your clinician will ask about your current symptoms, personal background, medical history, family history, and what has felt most difficult. We will also discuss your personal values and goals for care.",
    },
    {
      id: "will-i-be-prescribed",
      question: "Will I definitely be prescribed medication during my evaluation?",
      answer:
        "Not necessarily. An evaluation is an exploration of all care pathways. If medication is indicated, we will discuss the options, benefits, and considerations thoroughly. If therapy, supportive counseling, or lifestyle adjustments are more suitable, we support that direction.",
    },
    {
      id: "how-long",
      question: "How long does the evaluation take?",
      answer:
        "An initial psychiatric evaluation typically takes 60 to 90 minutes. This provides plenty of time to explore your concerns without feeling rushed.",
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
              <span className="font-serif text-3xl font-light text-[#B67A38]/80">01</span>
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
                <span>Request an Evaluation</span>
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
                A Respectful, Whole-Person Dialogue
              </h2>
              <p>{service.description}</p>
              <p>
                We recognize that emotional well-being is closely intertwined with physical health, sleep quality, daily stressors, and personal relationships. Our evaluations look at the full picture of your life rather than isolated symptoms.
              </p>
            </div>
          </MotionReveal>

          {/* Key Pillars */}
          <div className="space-y-6 pt-4">
            <MotionReveal delay={100}>
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                What We Explore Together
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

          {/* Session Overview Box */}
          <MotionReveal delay={150}>
            <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] space-y-4 card-ambient-shadow">
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                Evaluation Logistics
              </h3>
              <div className="space-y-3 text-sm text-[#53625E] leading-relaxed">
                <p>
                  Evaluations are offered both in-person and via secure virtual telehealth across all of Virginia.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#264640]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>60–90 Minute Unhurried Session</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Confidential & Private</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* FAQs */}
          <MotionReveal delay={200}>
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Questions About Evaluations
              </h3>
              <Accordion items={evaluationFaqs} />
            </div>
          </MotionReveal>

          {/* Bottom CTA */}
          <MotionReveal delay={250}>
            <div className="pt-8 border-t border-[#E6E1D9] text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Ready to take the first step?
              </h3>
              <p className="text-sm text-[#53625E] max-w-md mx-auto">
                Reach out today to schedule your comprehensive psychiatric evaluation.
              </p>
              <div className="pt-2">
                <Button href="/schedule" variant="primary" size="lg" className="group">
                  <span>Request an Evaluation</span>
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
