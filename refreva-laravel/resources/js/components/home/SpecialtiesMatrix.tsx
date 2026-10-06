import * as React from "react";
import { Link } from "@inertiajs/react";
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Heart, 
  Moon, 
  Zap, 
  Compass, 
  Feather, 
  Sun, 
  ShieldCheck, 
  Activity, 
  Smile, 
  Layers 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function SpecialtiesMatrix() {
  const track1 = [
    {
      icon: Activity,
      name: "Anxiety & Panic",
      category: "Nervous System",
      desc: "Unhurried support for panic sensations, chronic worry, and somatic tension.",
    },
    {
      icon: Moon,
      name: "Major Depression",
      category: "Mood Support",
      desc: "Gentle, evidence-informed care for emotional numbness, low mood, and fatigue.",
    },
    {
      icon: Zap,
      name: "ADHD & Executive Focus",
      category: "Neurodivergence",
      desc: "Comprehensive diagnostic evaluations and sustainable focusing strategies.",
    },
    {
      icon: ShieldCheck,
      name: "Trauma & PTSD",
      category: "Specialized Care",
      desc: "Paced, trauma-informed therapy honoring your boundaries and nervous system.",
    },
    {
      icon: Layers,
      name: "Bipolar Spectrum",
      category: "Mood Stability",
      desc: "Conservative medication management and grounding psychotherapy for mood cycles.",
    },
    {
      icon: Heart,
      name: "Postpartum & Maternal",
      category: "Women's Health",
      desc: "Empathetic clinical guidance for perinatal anxiety, depression, and identity shifts.",
    },
  ];

  const track2 = [
    {
      icon: Moon,
      name: "Insomnia & Sleep",
      category: "Restorative Health",
      desc: "Targeted psychiatric review of sleep architecture, nighttime racing thoughts, and habits.",
    },
    {
      icon: Feather,
      name: "Grief & Bereavement",
      category: "Healing",
      desc: "A safe, compassionate harbor to process loss, life changes, and complicated grief.",
    },
    {
      icon: Sun,
      name: "Burnout & Overwhelm",
      category: "Life Transition",
      desc: "Restorative care for healthcare workers, professionals, and caregivers facing exhaustion.",
    },
    {
      icon: Brain,
      name: "OCD & Intrusive Thoughts",
      category: "Specialized Care",
      desc: "Structured, evidence-based coping tools to loosen the grip of repetitive thoughts.",
    },
    {
      icon: Compass,
      name: "Emotional Dysregulation",
      category: "Mind-Body",
      desc: "Cultivating steady inner resources to navigate intense feelings without overwhelm.",
    },
    {
      icon: Smile,
      name: "Relationship & Attachment",
      category: "Interpersonal",
      desc: "Understanding relational patterns, boundary work, and attachment healing.",
    },
  ];

  // Duplicate for seamless 50% infinite translation
  const track1Extended = [...track1, ...track1];
  const track2Extended = [...track2, ...track2];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E6E1D9]">
      {/* Background Decorative Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 h-96 w-96 rounded-full bg-[#EBF1EC]/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-8">
        <MotionReveal>
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] inline-block">
              Your Journey to Balance Begins Here
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
              Areas of Clinical Focus & Mental Health Support
            </h2>
            <p className="text-sm sm:text-base text-[#53625E] leading-relaxed max-w-2xl mx-auto">
              Explore the conditions and emotional transitions Refreva clinicians help you navigate. Hover over any card to pause the stream and read.
            </p>
          </div>
        </MotionReveal>
      </div>

      {/* Marquee Wrapper with Pause-on-Hover and Edge Fades */}
      <div className="relative w-full overflow-hidden pause-on-hover py-4 space-y-5">
        
        {/* Left & Right Soft Fade Gradients for Seamless Visual Flow */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-20" 
          aria-hidden="true"
        />
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-20" 
          aria-hidden="true"
        />

        {/* Track 1: Gliding Left */}
        <div className="animate-marquee-left flex gap-5">
          {track1Extended.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href="/services"
                className="w-80 sm:w-88 shrink-0 p-5 rounded-2xl bg-white border border-[#E6E1D9] shadow-sm hover:shadow-xl hover:border-[#264640]/40 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-xl bg-[#EBF1EC] text-[#264640] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F8F3EA] text-[#966F33] border border-[#E8DECA]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1F2E2B] group-hover:text-[#264640] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#53625E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F3EFEA] flex items-center justify-between text-[11px] font-semibold text-[#264640]">
                  <span>Explore specialized care</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Track 2: Gliding Right */}
        <div className="animate-marquee-right flex gap-5">
          {track2Extended.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href="/services"
                className="w-80 sm:w-88 shrink-0 p-5 rounded-2xl bg-white border border-[#E6E1D9] shadow-sm hover:shadow-xl hover:border-[#264640]/40 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-xl bg-[#EBF1EC] text-[#264640] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F8F3EA] text-[#966F33] border border-[#E8DECA]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1F2E2B] group-hover:text-[#264640] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#53625E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F3EFEA] flex items-center justify-between text-[11px] font-semibold text-[#264640]">
                  <span>Explore specialized care</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      {/* Bottom Callout & Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <MotionReveal delay={200}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#F3EFEA] border border-[#E6E1D9]">
            <p className="text-xs text-[#53625E]">
              Experiencing overlapping or unlisted symptoms? Every evaluation begins with an unhurried, whole-person consultation.
            </p>
            <Button href="/schedule" variant="primary" size="sm" className="shrink-0 font-medium">
              <span>Request an Evaluation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </MotionReveal>
      </div>

    </section>
  );
}
