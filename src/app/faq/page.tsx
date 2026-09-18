import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Phone, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find clear answers to questions about starting therapy, virtual sessions in Virginia, session rates, insurance superbills, and confidentiality at Refreva.",
};

export default function FaqPage() {
  // FAQ Schema for Google Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#E6E1D9] bg-gradient-to-b from-[#F3EFEA] to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="sage">Frequently Asked Questions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
            Clear, transparent answers for your peace of mind.
          </h1>
          <p className="text-lg sm:text-xl text-[#53625E] leading-relaxed max-w-2xl mx-auto">
            Starting therapy can feel unfamiliar. Here is everything you need to know about our practice, fees, virtual sessions, and what to expect.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Accordion items={SITE_CONFIG.faqs} />

          {/* Still Have Questions Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F3EFEA] border border-[#E6E1D9] text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-[#DCE5DE] mx-auto flex items-center justify-center text-[#264640]">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-serif text-[#1F2E2B]">
              Have a specific question not listed here?
            </h3>
            <p className="text-sm text-[#53625E] max-w-md mx-auto">
              Our team is happy to answer any questions about our clinicians, scheduling, or therapeutic fit.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="outline" size="md">
                <span>Contact Our Office</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/schedule" variant="primary" size="md">
                <Calendar className="h-4 w-4" />
                <span>Request Appointment</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
