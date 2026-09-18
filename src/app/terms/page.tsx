import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use & Clinical Disclaimer",
  description:
    "Website terms of use, clinical disclaimer, emergency protocol, and Virginia jurisdiction information for Refreva.",
};

export default function TermsPage() {
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
          <Badge variant="neutral">Legal & Medical Disclaimer</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight">
            Terms of Use & Clinical Disclaimer
          </h1>
          <p className="text-xs text-[#53625E]">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose prose-stone max-w-none text-sm md:text-base text-[#53625E] leading-relaxed space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E6E1D9] card-ambient-shadow">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              1. Non-Medical & Non-Clinical Advice Disclaimer
            </h2>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
              <strong>Clinical Relationship Notice:</strong> The materials, text, and resources contained on this website are provided strictly for educational and informational purposes. Accessing this website, submitting an appointment request, or contacting {SITE_CONFIG.practiceName} does <strong>not</strong> establish a formal therapist-client relationship. A therapeutic relationship begins only after a formal intake assessment, signed informed consent, and mutual agreement between you and a licensed clinician.
            </div>
            <p>
              Information on this website should not be used as a substitute for professional mental health diagnosis, medical advice, or psychiatric treatment. Always seek the advice of a qualified healthcare professional regarding any medical or mental health condition.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              2. Emergency & Crisis Situations
            </h2>
            <p>
              This website and its associated communication channels (forms, email) are monitored during regular business hours only and are <strong>not equipped for psychiatric emergencies</strong>.
            </p>
            <p>
              If you are experiencing thoughts of harming yourself or others, or are facing an acute crisis:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Call or text <strong>988</strong> to connect with the 24/7 Suicide & Crisis Lifeline.</li>
              <li>Text <strong>HOME</strong> to <strong>741741</strong> to connect with the Crisis Text Line.</li>
              <li>Call <strong>911</strong> or visit your nearest hospital emergency department immediately.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              3. Treatment Outcomes & Clinical Estimates
            </h2>
            <p>
              {SITE_CONFIG.practiceName} does not guarantee specific therapeutic outcomes. Psychotherapy is an inherently collaborative and individualized process; progress depends upon numerous factors including personal commitment, the nature of the challenges explored, and external life events.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#1F2E2B] font-semibold">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the <strong>Commonwealth of Virginia</strong>, without regard to its conflict of law principles. Any legal proceedings related to this website shall be brought exclusively in the courts situated within the Commonwealth of Virginia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
