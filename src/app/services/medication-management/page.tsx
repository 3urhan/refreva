import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Psychiatric Medication Management in Virginia",
  description:
    "Thoughtful, evidence-based medication care centered on safety, clarity, conservative prescribing, and regular clinical conversations.",
};

export default function MedicationManagementPage() {
  const service = SITE_CONFIG.services.find((s) => s.id === "medication-management")!;

  const medFaqs = [
    {
      id: "how-often-followups",
      question: "How often do we meet for medication management follow-ups?",
      answer:
        "When initiating or adjusting a medication, follow-up appointments typically occur every 2 to 4 weeks to monitor safety, tolerability, and clinical benefits. Once stable, appointments are usually spaced every 2 to 3 months for ongoing maintenance.",
    },
    {
      id: "collaborative-approach",
      question: "What if I experience side effects or don't feel comfortable with a medication?",
      answer:
        "Your comfort is paramount. We encourage open communication about side effects. If a medication does not feel right, we collaboratively explore adjustments, alternative medications, or tapering options safely under medical guidance.",
    },
    {
      id: "can-i-combine-therapy",
      question: "Can I do supportive counseling and medication management together?",
      answer:
        "Yes. Combining evidence-based pharmacotherapy with supportive psychotherapy often produces the most robust and sustainable clinical outcomes.",
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
              <span className="font-serif text-3xl font-light text-[#B67A38]/80">02</span>
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
                Care That Evolves With You
              </h2>
              <p>{service.description}</p>
              <p>
                Our philosophy centers on conservative, intentional prescribing. We believe medications should be a clear, supportive tool—never a mystery or an overwhelming burden. Every decision is made transparently with your informed consent.
              </p>
            </div>
          </MotionReveal>

          {/* Key Pillars */}
          <div className="space-y-6 pt-4">
            <MotionReveal delay={100}>
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                Our Clinical Principles for Medication Care
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
                Follow-Up Logistics
              </h3>
              <div className="space-y-3 text-sm text-[#53625E] leading-relaxed">
                <p>
                  Follow-up visits are typically 25 to 30 minutes, allowing dedicated time to review laboratory results, assess improvements, and fine-tune care.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#264640]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>25–30 Minute Follow-Ups</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Strict Safety & Side-Effect Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* FAQs */}
          <MotionReveal delay={200}>
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Frequently Asked Questions
              </h3>
              <Accordion items={medFaqs} />
            </div>
          </MotionReveal>

          {/* Bottom CTA */}
          <MotionReveal delay={250}>
            <div className="pt-8 border-t border-[#E6E1D9] text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Begin Thoughtful Medication Care
              </h3>
              <p className="text-sm text-[#53625E] max-w-md mx-auto">
                Schedule a consultation to explore medication options with a licensed Virginia psychiatric clinician.
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
