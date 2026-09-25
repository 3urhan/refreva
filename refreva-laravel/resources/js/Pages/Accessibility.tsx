import * as React from "react";
import { Head, Link } from "@inertiajs/react";
import { AppLayout } from "@/Layouts/AppLayout";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Accessibility() {
  const standards = [
    {
      title: "Keyboard Operability",
      description: "All interactive controls, forms, and navigation menus can be operated fully via standard keyboard keys without requiring a mouse.",
    },
    {
      title: "Visible Focus Indicators",
      description: "High-contrast visual focus rings highlight active interactive elements for keyboard and switch device navigators.",
    },
    {
      title: "WCAG 2.2 AA Color Contrast",
      description: "Text and interactive controls meet or exceed minimum contrast requirements against background tones to ensure readability for low-vision visitors.",
    },
    {
      title: "Reduced Motion Support",
      description: "Our stylesheets honor the prefers-reduced-motion media query, disabling unnecessary visual animations and transitions.",
    },
    {
      title: "Semantic HTML & ARIA",
      description: "Pages utilize standard semantic heading hierarchies (h1–h3), clear landmark regions, and appropriate WAI-ARIA states on interactive accordions.",
    },
  ];

  return (
    <AppLayout>
      <Head title="Accessibility Statement" />
      <div className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#53625E] hover:text-[#264640] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
            <Badge variant="neutral">Accessibility Commitment</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight">
              Digital Accessibility Statement
            </h1>
            <p className="text-xs text-[#53625E]">
              Target Standard: Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm md:text-base text-[#53625E] leading-relaxed space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E6E1D9] card-ambient-shadow">
            <section className="space-y-3">
              <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
                Our Commitment
              </h2>
              <p>
                At {SITE_CONFIG.practiceName}, we believe that access to mental health information is a fundamental right. We are dedicated to ensuring our digital experiences are welcoming, inclusive, and accessible to everyone, including visitors using assistive technologies such as screen readers, magnifiers, and voice recognition software.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
                Accessibility Measures Implemented
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {standards.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] space-y-1">
                    <div className="flex items-center gap-2 text-[#264640] font-semibold text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>{s.title}</span>
                    </div>
                    <p className="text-xs text-[#53625E] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
                Feedback & Assistance
              </h2>
              <p>
                We welcome your feedback on the accessibility of the Refreva website. If you encounter any barrier, have difficulty reading content, or need assistance requesting an appointment in an alternate format, please reach out to us directly:
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E1D9] text-xs space-y-1 not-prose">
                <span className="font-semibold text-[#1F2E2B] block">Refreva Accessibility Support</span>
                <span>Email: {SITE_CONFIG.officeLocation.email}</span>
                <p className="text-[11px] text-[#53625E] pt-1">
                  We strive to respond to accessibility feedback within 2 business days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
