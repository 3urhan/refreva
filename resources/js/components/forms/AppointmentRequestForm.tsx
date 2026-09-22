"use client";

import * as React from "react";
import { Send, CheckCircle, AlertCircle, Shield, Lock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  clientStatus: "new" | "existing";
  sessionPreference: "telehealth" | "in-person" | "either";
  preferredTime: "morning" | "afternoon" | "flexible";
  preferredContactMethod: "email" | "phone";
  generalInquiry: string;
  honeypot: string; // Anti-spam trap
}

export function AppointmentRequestForm() {
  const [formData, setFormData] = React.useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    clientStatus: "new",
    sessionPreference: "telehealth",
    preferredTime: "flexible",
    preferredContactMethod: "email",
    generalInquiry: "",
    honeypot: "",
  });

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap
    if (formData.honeypot) {
      // Silently disregard bot submissions
      setStatus("success");
      return;
    }

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Phone).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          errorData.message || "We encountered an issue submitting your request. Please try calling or emailing us directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again or reach out to us by phone.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6E1D9] card-ambient-shadow text-center space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="h-16 w-16 bg-[#DCE5DE] rounded-full mx-auto flex items-center justify-center text-[#264640]">
          <CheckCircle className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-serif text-[#1F2E2B]">
            Thank you for reaching out.
          </h3>
          <p className="text-sm text-[#53625E] max-w-md mx-auto leading-relaxed">
            Your appointment inquiry has been securely received by Refreva. Our intake team will review your scheduling preferences and contact you within <strong>24 to 48 business hours</strong>.
          </p>
        </div>
        <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E6E1D9] text-xs text-[#53625E] max-w-md mx-auto">
          <span>Need to update something right away? Email us at </span>
          <a
            href="mailto:contact@refreva.com"
            className="text-[#264640] font-semibold underline hover:text-[#1b332e] transition-colors"
          >
            contact@refreva.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6E1D9] card-ambient-shadow space-y-6"
      noValidate
    >
      {/* Privacy Notice Alert */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D9] flex items-start gap-3">
        <Shield className="h-5 w-5 text-[#264640] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs text-[#53625E] space-y-1">
          <strong className="text-[#1F2E2B] font-semibold block">
            Privacy & Non-Clinical Form Notice:
          </strong>
          <p>
            This website form is strictly for administrative scheduling and general inquiries. For your privacy, <strong>please do not include sensitive health details, diagnosis information, or medication histories</strong>.
          </p>
        </div>
      </div>

      {status === "error" && (
        <div
          className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Anti-spam Honeypot (Hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-trap">Leave this empty</label>
        <input
          type="text"
          id="website-trap"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Contact Information Fields */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
          >
            Full Name <span className="text-rose-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g., Alex Morgan"
            className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] placeholder:text-[#53625E]/50 focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
            >
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] placeholder:text-[#53625E]/50 focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
            >
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(804) 555-0123"
              className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] placeholder:text-[#53625E]/50 focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Scheduling Preferences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div>
          <label
            htmlFor="clientStatus"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
          >
            Client Status
          </label>
          <select
            id="clientStatus"
            name="clientStatus"
            value={formData.clientStatus}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
          >
            <option value="new">I am a new prospective client</option>
            <option value="existing">I am an existing client</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sessionPreference"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
          >
            Preferred Format
          </label>
          <select
            id="sessionPreference"
            name="sessionPreference"
            value={formData.sessionPreference}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
          >
            <option value="telehealth">Telehealth (Statewide Virginia)</option>
            <option value="in-person">In-Person (Virginia Office)</option>
            <option value="either">Either format is fine</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="preferredTime"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
          >
            Preferred Time of Day
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
          >
            <option value="flexible">Flexible / Any Time</option>
            <option value="morning">Mornings (9am – 12pm)</option>
            <option value="afternoon">Afternoons (12pm – 5pm)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="preferredContactMethod"
            className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
          >
            Preferred Contact Method
          </label>
          <select
            id="preferredContactMethod"
            name="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
          >
            <option value="email">Email</option>
            <option value="phone">Phone Call</option>
          </select>
        </div>
      </div>

      {/* General Inquiry Notes */}
      <div>
        <label
          htmlFor="generalInquiry"
          className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E2B] mb-1.5"
        >
          General Scheduling Questions or Note (Optional)
        </label>
        <textarea
          id="generalInquiry"
          name="generalInquiry"
          rows={3}
          value={formData.generalInquiry}
          onChange={handleChange}
          placeholder="e.g., Inquiring about weekday availability or general questions about beginning therapy."
          className="w-full px-4 py-3 rounded-xl border border-[#E6E1D9] bg-[#FAF8F5] text-sm text-[#1F2E2B] placeholder:text-[#53625E]/50 focus:bg-white focus:border-[#264640] focus:ring-2 focus:ring-[#264640]/20 focus:outline-none transition-all"
        />
      </div>

      {/* Security Reassurance & Submit Button */}
      <div className="pt-2 space-y-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center text-base"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span>Sending Secure Request...</span>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Submit Appointment Request</span>
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-[#53625E]">
          <Lock className="h-3.5 w-3.5 text-[#264640]" />
          <span>Encrypted transmission • Zero spam • No clinical obligation</span>
        </div>
      </div>
    </form>
  );
}
