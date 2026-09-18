import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Heart, Sparkles, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Learn about Refreva's clinical philosophy, licensed Virginia therapists, and commitment to compassionate, evidence-informed mental health care.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Radical Empathy & Respect",
      description:
        "We believe healing begins when you feel genuinely heard without judgment. We honor your personal story, values, and the courage it takes to seek support.",
      icon: Heart,
    },
    {
      title: "Autonomy & Collaboration",
      description:
        "You are in the driver's seat of your life. We do not impose rigid agendas; instead, we partner with you to set meaningful goals at a pace that feels sustainable.",
      icon: Compass,
    },
    {
      title: "Evidence-Informed Care",
      description:
        "Our practice integrates modern psychotherapeutic research, nervous system awareness, and grounded cognitive-behavioral insights tailored to your individuality.",
      icon: Sparkles,
    },
    {
      title: "Uncompromising Privacy",
      description:
        "Your trust is sacred. We maintain the highest standards of confidentiality under Virginia healthcare regulations and ethical guidelines.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-[#E6E1D9] bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <MotionReveal delay={0}>
            <Badge variant="sage">About Refreva</Badge>
          </MotionReveal>
          <MotionReveal delay={120}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              A grounded sanctuary for self-discovery and emotional well-being.
            </h1>
          </MotionReveal>
          <MotionReveal delay={240}>
            <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed max-w-2xl mx-auto">
              Refreva was founded on a simple premise: mental health care should feel warm, accessible, and deeply human—never cold, bureaucratic, or clinical.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Origin & Philosophy Narrative */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#53625E] leading-relaxed">
              <MotionReveal delay={0}>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1F2E2B] tracking-tight">
                  Why Refreva Exists
                </h2>
              </MotionReveal>
              <MotionReveal delay={100}>
                <p>
                  Life rarely unfolds in neat, predictable chapters. Many of us navigate chronic stress, grief, unexpected career pivots, relational distress, or persistent anxieties that feel too heavy to untangle on our own.
                </p>
              </MotionReveal>
              <MotionReveal delay={200}>
                <p>
                  Too often, finding therapy feels sterile and intimidating—filled with opaque portals, institutional jargon, and long waiting lists. Refreva was created in Virginia to provide an intentional alternative: an outpatient counseling space where clients feel seen, validated, and equipped with practical tools.
                </p>
              </MotionReveal>
              <MotionReveal delay={300}>
                <p>
                  Whether meeting virtually from your living room in Richmond or Alexandria, or stepping into an in-person session, our intention remains constant: to offer a grounded, confidential space where you can exhale.
                </p>
              </MotionReveal>
            </div>

            <div className="lg:col-span-5">
              <MotionReveal delay={200} distance={30}>
                <div className="bg-[#F3EFEA] p-8 rounded-3xl border border-[#E6E1D9] card-ambient-shadow space-y-6 hover:shadow-lg transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#966F33] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                    Practice Foundations
                  </span>
                  <h3 className="font-serif text-2xl text-[#1F2E2B]">
                    Licensed in the Commonwealth of Virginia
                  </h3>
                  <p className="text-sm text-[#53625E] leading-relaxed">
                    All clinicians practicing under Refreva hold active professional licenses with the Virginia Department of Health Professions, adhering strictly to state standards of ethics, confidentiality, and ongoing clinical education.
                  </p>
                  <div className="pt-2 border-t border-[#E6E1D9] text-xs text-[#264640] font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Strict adherence to Virginia Healthcare Standards</span>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="pt-12 space-y-8">
            <MotionReveal>
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-serif text-[#1F2E2B]">
                  Our Guiding Principles
                </h2>
                <p className="text-base text-[#53625E]">
                  The values that shape every conversation, intake, and therapy session at Refreva.
                </p>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <MotionReveal key={idx} delay={idx * 120}>
                    <Card className="bg-white border-[#E6E1D9] h-full hover:border-[#264640]/30 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-[#DCE5DE]/70 flex items-center justify-center text-[#264640] shrink-0 transition-transform duration-300 hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-serif text-xl font-semibold text-[#1F2E2B]">
                            {value.title}
                          </h3>
                          <p className="text-sm text-[#53625E] leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </MotionReveal>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Block */}
          <MotionReveal delay={200}>
            <div className="bg-[#264640] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 card-ambient-shadow">
              <h3 className="text-2xl sm:text-3xl font-serif">
                Begin a conversation with Refreva.
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
                You do not have to have everything figured out before reaching out. We are here to answer your questions and guide you through the first step.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/schedule" variant="primary" size="lg" className="group">
                  <span>Request an Initial Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  <span>Explore Services</span>
                </Button>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
