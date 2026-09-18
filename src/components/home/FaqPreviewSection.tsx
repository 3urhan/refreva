import * as React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export function FaqPreviewSection() {
  const featuredFaqs = SITE_CONFIG.faqs.slice(0, 5);

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E6E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Reassurance, and Direct Contact (matching Image 1) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <MotionReveal delay={0}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
                  Common questions about beginning care.
                </h2>
              </div>
            </MotionReveal>

            <MotionReveal delay={120}>
              <p className="text-base text-[#53625E] leading-relaxed">
                Beginning psychiatric care or therapy often brings questions. We believe in total transparency regarding how our evaluations work, scheduling flexibility, and treatment options.
              </p>
            </MotionReveal>

            <MotionReveal delay={240}>
              <div className="p-5 rounded-2xl bg-[#F3EFEA] border border-[#E6E1D9] space-y-3">
                <div className="flex items-center gap-2 text-[#264640] font-semibold text-sm">
                  <HelpCircle className="h-4 w-4" />
                  <span>Have a question not listed here?</span>
                </div>
                <p className="text-xs text-[#53625E] leading-relaxed">
                  Our intake team is available Monday through Friday to address specific clinical or billing inquiries.
                </p>
                <div className="pt-1">
                  <Button href="/contact" variant="primary" size="sm" className="font-medium group">
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Contact Intake Team</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <MotionReveal delay={150} duration={700}>
              <div className="space-y-4">
                <Accordion items={featuredFaqs} />

                <div className="pt-4 flex items-center justify-between text-xs text-[#53625E]">
                  <span>Showing {featuredFaqs.length} of {SITE_CONFIG.faqs.length} common inquiries</span>
                  <Link
                    href="/faq"
                    className="text-[#264640] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View All FAQs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
