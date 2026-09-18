import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock, ShieldCheck, Laptop, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Telehealth Therapy in Virginia",
  description:
    "Confidential virtual psychotherapy for clients residing anywhere in the Commonwealth of Virginia. Simple, secure, and accessible from your private space.",
};

export default function TelehealthPage() {
  const stepsToConnect = [
    {
      step: "1",
      title: "Schedule Your Session",
      description: "Request an appointment and select 'Telehealth' as your preferred format.",
      icon: Calendar,
    },
    {
      step: "2",
      title: "Receive Your Private Link",
      description: "Prior to session time, you receive a secure, one-click video link via email.",
      icon: Lock,
    },
    {
      step: "3",
      title: "Connect From Your Private Space",
      description: "Click the link from any phone, tablet, or laptop. No complicated app download required.",
      icon: Laptop,
    },
  ];

  const telehealthFaqs = [
    {
      id: "state-requirement",
      question: "Why do I have to be physically in Virginia for telehealth?",
      answer:
        "Therapist licenses are legally granted by individual states. Our clinicians are licensed through the Commonwealth of Virginia Department of Health Professions, which authorizes us to deliver care to clients who are physically situated within Virginia borders during the session.",
    },
    {
      id: "effectiveness",
      question: "Is virtual therapy as effective as in-person therapy?",
      answer:
        "Yes. Substantial clinical research indicates that video-based psychotherapy yields therapeutic outcomes comparable to in-person counseling for conditions such as anxiety, stress, life adjustments, and mild-to-moderate depression.",
    },
    {
      id: "privacy-platform",
      question: "How is my privacy protected during video sessions?",
      answer:
        "Our telehealth video platform utilizes end-to-end encryption compliant with healthcare privacy standards. Video streams are never recorded, and private audio remains exclusively between you and your licensed therapist.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Breadcrumb / Back */}
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
            <Badge variant="sage">Statewide Telehealth in Virginia</Badge>
          </MotionReveal>
          <MotionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              Therapy that fits into your life, wherever you are in Virginia.
            </h1>
          </MotionReveal>
          <MotionReveal delay={200}>
            <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed">
              High-trust, confidential virtual psychotherapy delivered directly to your home, office, or private retreat. Serving clients residing throughout the Commonwealth of Virginia.
            </p>
          </MotionReveal>
          <MotionReveal delay={300}>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/schedule" variant="primary" size="lg" className="group">
                <Calendar className="h-4 w-4" />
                <span>Request a Telehealth Appointment</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/faq" variant="outline" size="lg">
                <span>View Telehealth FAQ</span>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-16 border-t border-[#E6E1D9] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* How It Works */}
          <div className="space-y-6">
            <MotionReveal delay={0}>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2E2B]">
                How Virtual Sessions Work
              </h2>
            </MotionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stepsToConnect.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <MotionReveal key={item.step} delay={idx * 120}>
                    <div
                      className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] space-y-3 card-ambient-shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      <div className="h-10 w-10 rounded-xl bg-[#DCE5DE] flex items-center justify-center text-[#264640] transition-transform duration-300 hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#1F2E2B]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#53625E] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>

          {/* Virginia State Licensing Boundary Notice */}
          <MotionReveal delay={150}>
            <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] space-y-4 card-ambient-shadow">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#264640]" />
                <h3 className="text-xl font-serif text-[#1F2E2B]">
                  Virginia Licensure Scope
                </h3>
              </div>
              <p className="text-sm text-[#53625E] leading-relaxed">
                Under Virginia professional licensing statutes, therapy takes place where the <strong>client is physically located</strong> at the time of the session. Refreva clinicians are authorized to treat clients in:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-medium text-[#1F2E2B]">
                <span className="p-2.5 rounded-xl bg-white border border-[#E6E1D9] text-center hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">Northern Virginia</span>
                <span className="p-2.5 rounded-xl bg-white border border-[#E6E1D9] text-center hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">Richmond Metro</span>
                <span className="p-2.5 rounded-xl bg-white border border-[#E6E1D9] text-center hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">Hampton Roads</span>
                <span className="p-2.5 rounded-xl bg-white border border-[#E6E1D9] text-center hover:bg-[#EBF1EC] hover:border-[#DCE5DE] transition-colors">Charlottesville & Valley</span>
              </div>
              <p className="text-xs text-[#53625E] pt-1">
                As long as you are within Virginia borders on the day of your appointment, you can attend from anywhere with a private space and stable internet.
              </p>
            </div>
          </MotionReveal>

          {/* FAQ */}
          <MotionReveal delay={200}>
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Common Telehealth Questions
              </h3>
              <Accordion items={telehealthFaqs} />
            </div>
          </MotionReveal>

          {/* Bottom CTA */}
          <MotionReveal delay={250}>
            <div className="pt-8 border-t border-[#E6E1D9] text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Ready to schedule your virtual session?
              </h3>
              <p className="text-sm text-[#53625E] max-w-md mx-auto">
                Our scheduling process takes less than two minutes. Let us know what times work best for you.
              </p>
              <div className="pt-2">
                <Button href="/schedule" variant="primary" size="lg" className="group">
                  <span>Request Telehealth Appointment</span>
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
