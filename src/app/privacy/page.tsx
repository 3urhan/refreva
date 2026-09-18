import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Website privacy practices and data minimization principles for Refreva Therapy in Virginia.",
};

export default function PrivacyPage() {
  return (
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
          <Badge variant="neutral">Privacy & Compliance</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight">
            Website Privacy Policy
          </h1>
          <p className="text-xs text-[#53625E]">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose prose-stone max-w-none text-sm md:text-base text-[#53625E] leading-relaxed space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E6E1D9] card-ambient-shadow">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              At {SITE_CONFIG.practiceName}, we hold personal privacy and confidentiality to the highest ethical and legal standards. This Privacy Policy describes how we handle information collected through our public website (refreva.com).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              2. Data Minimization & Non-Clinical Scope of Web Forms
            </h2>
            <p>
              Our public website is designed with a strict <strong>data minimization policy</strong>. The appointment request form on this site collects only basic administrative contact details needed to initiate contact with you (such as your name, email address, phone number, and preferred times).
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] text-xs text-[#1F2E2B] font-medium">
              Important: Our public website forms are not intended for transmitting sensitive protected health information (PHI), clinical diagnoses, prescription histories, or trauma narratives. Please reserve clinical details for your private consultation with a licensed therapist.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              3. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Voluntary Inquiries:</strong> When you complete an inquiry or appointment form, we collect your name, email, phone number, and general scheduling preferences.
              </li>
              <li>
                <strong>Technical Logs:</strong> Our web hosting servers record standard connection metadata (such as IP address, browser type, and timestamps) strictly for security monitoring, rate limiting, and spam defense. We do not correlate technical logs with personal identities.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              4. Cookies & Analytics
            </h2>
            <p>
              We maintain minimal, privacy-conscious analytics to understand website performance and improve user accessibility. We do not sell, rent, or monetize any visitor data to third-party advertising brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              5. Clinical Confidentiality & Legal Boundaries
            </h2>
            <p>
              Once you enter into a clinical relationship with a licensed Refreva practitioner, your communications are protected under Virginia healthcare confidentiality statutes and federal healthcare privacy regulations. Any established client health records are maintained exclusively in secure, encrypted electronic health records (EHR) systems—never on our public website server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              6. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to review the administrative information you submitted, please contact us at:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E1D9] text-xs space-y-1">
              <span className="font-semibold text-[#1F2E2B] block">{SITE_CONFIG.practiceName}</span>
              <span>Email: {SITE_CONFIG.officeLocation.email}</span>
              <span className="block">Location: {SITE_CONFIG.officeLocation.state}, USA</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
