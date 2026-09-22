"use client";

import * as React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SITE_CONFIG } from "@/lib/site-config";

export function HomeContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    serviceNeeded: "psychiatric-evaluation",
    preferredFormat: "telehealth",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-12 md:py-16 bg-[#F3EFEA] relative overflow-hidden border-t border-[#E6E1D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Information (matching Image 1) */}
          <div className="lg:col-span-5 space-y-6">
            <MotionReveal delay={0}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#966F33]" />
                  Direct Intake Support
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
                  Contact Refreva Psychiatric Care
                </h2>
              </div>
            </MotionReveal>

            <MotionReveal delay={120}>
              <p className="text-base text-[#53625E] leading-relaxed">
                Have questions before beginning? Reach out directly to our intake team. We provide unhurried guidance on clinician matching, insurance verification, and appointment availability.
              </p>
            </MotionReveal>

            {/* Contact Channels */}
            <MotionReveal delay={240}>
              <div className="space-y-3.5 pt-2 text-sm text-[#53625E]">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6E1D9]">
                  <Phone className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2E2B] font-semibold block">Intake Telephone:</strong>
                    <a href={`tel:${SITE_CONFIG.officeLocation.phone}`} className="hover:text-[#264640] transition-colors">
                      {SITE_CONFIG.officeLocation.phone}
                    </a>
                    <span className="text-[11px] text-[#53625E] block pt-0.5">Mon–Fri, 9:00 AM – 5:00 PM EST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6E1D9]">
                  <Mail className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2E2B] font-semibold block">Confidential Email:</strong>
                    <a href={`mailto:${SITE_CONFIG.officeLocation.email}`} className="text-[#264640] font-semibold hover:underline">
                      {SITE_CONFIG.officeLocation.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6E1D9]">
                  <MapPin className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2E2B] font-semibold block">Virginia Practice Location:</strong>
                    <p>{SITE_CONFIG.officeLocation.addressLine1}</p>
                    <p>{SITE_CONFIG.officeLocation.city}, {SITE_CONFIG.officeLocation.state} {SITE_CONFIG.officeLocation.zip}</p>
                    <span className="text-[11px] text-[#966F33] italic block pt-0.5">In-person by confirmed appointment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6E1D9]">
                  <Video className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2E2B] font-semibold block">Statewide Telehealth:</strong>
                    <p className="text-xs">Secure video care for clients physically located anywhere in the Commonwealth of Virginia.</p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Interactive Quick Intake Form (matching Image 1) */}
          <div className="lg:col-span-7">
            <MotionReveal delay={150} duration={750} distance={30}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E1D9] shadow-xl card-ambient-shadow relative overflow-hidden">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-[#EBF1EC] text-[#264640] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#1F2E2B]">
                        Inquiry Received
                      </h3>
                      <p className="text-sm text-[#53625E] max-w-md mx-auto">
                        Thank you for reaching out to Refreva. Our intake coordinator will review your preferences and contact you within <strong>24 to 48 business hours</strong>.
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSubmitted(false)}
                      className="mt-4"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 mb-6">
                      <h3 className="font-serif text-2xl font-bold text-[#1F2E2B]">
                        Request an Appointment or Consultation
                      </h3>
                      <p className="text-xs text-[#53625E]">
                        Complete this brief request and our staff will get in touch with available scheduling times.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1F2E2B] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E1D9] text-sm focus:border-[#264640] focus:ring-1 focus:ring-[#264640] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1F2E2B] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(804) 555-0199"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E1D9] text-sm focus:border-[#264640] focus:ring-1 focus:ring-[#264640] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1F2E2B] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E1D9] text-sm focus:border-[#264640] focus:ring-1 focus:ring-[#264640] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1F2E2B] mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={formData.serviceNeeded}
                          onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E1D9] text-sm focus:border-[#264640] focus:ring-1 focus:ring-[#264640] outline-none bg-white"
                        >
                          <option value="psychiatric-evaluation">Psychiatric Evaluation</option>
                          <option value="medication-management">Medication Management</option>
                          <option value="supportive-counseling">Supportive Psychotherapy</option>
                          <option value="telehealth">Telehealth Psychiatry</option>
                          <option value="not-sure">Not Sure / Needs Guidance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1F2E2B] mb-1">
                          Preferred Care Format
                        </label>
                        <select
                          value={formData.preferredFormat}
                          onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E1D9] text-sm focus:border-[#264640] focus:ring-1 focus:ring-[#264640] outline-none bg-white"
                        >
                          <option value="telehealth">Virtual Telehealth (Anywhere in VA)</option>
                          <option value="in-person">In-Person (Richmond Clinic)</option>
                          <option value="hybrid">Flexible / Either Format</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1F2E2B] mb-1">
                        Brief Note or Questions (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your general scheduling preferences or questions (please do not submit sensitive medical records)."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6E1D9] text-sm focus:border-[#264640] focus:ring-1 focus:ring-[#264640] outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        variant="primary"
                        size="md"
                        disabled={loading}
                        className="w-full sm:w-auto px-6 justify-center group font-medium"
                      >
                        <Send className="h-4 w-4" />
                        <span>{loading ? "Sending Request..." : "Submit Appointment Inquiry"}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#53625E]">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#264640]" />
                      <span>Confidential & HIPAA Secure • No Clinical Obligation</span>
                    </div>
                  </form>
                )}

              </div>
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
