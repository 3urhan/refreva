import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { MotionReveal } from "@/components/ui/MotionReveal";

export const metadata: Metadata = {
  title: "Individual Therapy for Adults in Virginia",
  description:
    "Grounded one-on-one psychotherapy supporting adults navigating anxiety, life transitions, burnout, and emotional well-being across Virginia.",
};

export default function IndividualTherapyPage() {
  const therapyThemes = [
    {
      title: "Anxiety & Chronic Stress",
      description:
        "Therapy may help individuals recognize patterns of worry, quiet racing thoughts, and build somatic and cognitive tools to restore a sense of calm.",
    },
    {
      title: "Life Transitions & Identity",
      description:
        "Navigating career changes, relocation, relationship evolutions, or parenthood can unseat your foundation. We provide a steady sounding board as you recalibrate.",
    },
    {
      title: "Burnout & Overextension",
      description:
        "When high-functioning demands deplete your energy, therapy creates space to unpack people-pleasing, establish boundaries, and reconnect with personal vitality.",
    },
    {
      title: "Depressive Feelings & Low Energy",
      description:
        "Supportive, non-judgmental exploration of persistent sadness, numbness, or isolation, helping you gently uncover meaning and supportive daily rhythms.",
    },
  ];

  const serviceFaqs = [
    {
      id: "how-often",
      question: "How often will we meet for individual therapy?",
      answer:
        "Most clients begin with weekly sessions. This consistent cadence helps build rapport, develop momentum, and create a reliable space for reflection. Over time, as you meet your goals, sessions can be spaced to bi-weekly or monthly maintenance.",
    },
    {
      id: "do-i-need-diagnosis",
      question: "Do I need a formal medical diagnosis to start therapy?",
      answer:
        "No. You do not need a clinical diagnosis to benefit from psychotherapy. Many people seek counseling simply because they want support processing a life adjustment, improving relationship boundaries, or understanding recurring stress patterns.",
    },
    {
      id: "in-person-vs-virtual",
      question: "Can I do individual therapy virtually?",
      answer:
        "Yes. We offer both secure telehealth sessions across Virginia and in-person sessions (by appointment). Many clients find virtual therapy equally impactful and significantly more convenient.",
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
            <Badge variant="sage">One-on-One Psychotherapy</Badge>
          </MotionReveal>
          <MotionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              Individual Therapy in Virginia
            </h1>
          </MotionReveal>
          <MotionReveal delay={200}>
            <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed">
              One-on-one support designed around your experiences, goals, and needs. A dedicated space to process life’s weight and cultivate steady, lasting resilience.
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

      {/* Narrative & Focus Areas */}
      <section className="py-16 border-t border-[#E6E1D9] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MotionReveal delay={0}>
            <div className="space-y-4 text-base md:text-lg text-[#53625E] leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1F2E2B]">
                Our Approach to One-on-One Counseling
              </h2>
              <p>
                In individual therapy, we treat you as the expert of your lived experience. We do not apply pre-packaged formulas or expect you to fit into clinical boxes. Instead, we listen deeply to what brought you to this moment and partner with you to navigate what lies ahead.
              </p>
              <p>
                Sessions are collaborative, conversational, and tailored to your comfort level. Whether you are processing long-standing patterns or coping with a recent life shock, our therapists provide an environment characterized by unconditional positive regard, patience, and clinical expertise.
              </p>
            </div>
          </MotionReveal>

          {/* Focus Area Cards */}
          <div className="space-y-6 pt-4">
            <MotionReveal delay={100}>
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                Common Challenges We Support
              </h3>
            </MotionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {therapyThemes.map((theme, idx) => (
                <MotionReveal key={idx} delay={idx * 100}>
                  <div
                    className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] space-y-2 card-ambient-shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <h4 className="font-serif text-lg font-semibold text-[#1F2E2B]">
                      {theme.title}
                    </h4>
                    <p className="text-xs text-[#53625E] leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          {/* What a Session Looks Like */}
          <MotionReveal delay={150}>
            <div className="p-8 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] space-y-4 card-ambient-shadow">
              <h3 className="text-xl font-serif text-[#1F2E2B]">
                What to Expect in Session
              </h3>
              <div className="space-y-3 text-sm text-[#53625E] leading-relaxed">
                <p>
                  A standard individual session is <strong>50 minutes</strong>. We begin with a brief check-in to see how your week unfolded and what feels most present for you. From there, we explore current emotions, identify underlying patterns, and reflect on grounded strategies you can test between sessions.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#264640]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>50-Minute Sessions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Confidential & Private</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    <span>Client-Paced Goals</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Service FAQ */}
          <MotionReveal delay={200}>
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Questions About Individual Therapy
              </h3>
              <Accordion items={serviceFaqs} />
            </div>
          </MotionReveal>

          {/* Call to Action */}
          <MotionReveal delay={250}>
            <div className="pt-8 border-t border-[#E6E1D9] text-center space-y-4">
              <h3 className="text-2xl font-serif text-[#1F2E2B]">
                Ready to take the first step?
              </h3>
              <p className="text-sm text-[#53625E] max-w-md mx-auto">
                Reach out today to request your initial consultation with a licensed Virginia therapist.
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
