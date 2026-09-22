import * as React from "react";
import { Link } from "@inertiajs/react";
import { ShieldCheck, Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#264640] text-white pt-16 pb-12 border-t border-[#1b332e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Practice Brand */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                {SITE_CONFIG.practiceName}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#DCE5DE]">
                Therapy & Counseling
              </p>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {SITE_CONFIG.shortDescription}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#DCE5DE]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#DCE5DE]" />
              <span>Licensed in the Commonwealth of Virginia</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>About Our Practice</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Therapy Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Individual Therapy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/telehealth"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Telehealth Across Virginia</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              Practice Information
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#DCE5DE] mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Location</span>
                  <span>{SITE_CONFIG.officeLocation.addressLine1}</span>
                  <span className="block text-xs text-white/70">
                    {SITE_CONFIG.officeLocation.city}, {SITE_CONFIG.officeLocation.state}
                  </span>
                  <span className="block text-xs text-[#DCE5DE] mt-0.5">
                    {SITE_CONFIG.officeLocation.telehealthCoverage}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#DCE5DE] mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Hours</span>
                  <span className="text-xs">{SITE_CONFIG.officeLocation.hours}</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#DCE5DE]" />
                <a
                  href={`mailto:${SITE_CONFIG.officeLocation.email}`}
                  className="hover:text-white text-xs underline"
                >
                  {SITE_CONFIG.officeLocation.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Crisis & Safety Notice */}
          <div className="space-y-4 bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-rose-300">
              <Heart className="h-4 w-4" />
              <h3 className="font-serif text-base font-semibold text-white">
                Crisis Resources
              </h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              If you or someone you care for is experiencing an immediate life-threatening mental health crisis:
            </p>
            <div className="space-y-2 pt-1">
              <div className="bg-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <span className="text-xs font-medium">Suicide & Crisis Lifeline:</span>
                <a
                  href="tel:988"
                  className="font-bold text-[#DCE5DE] hover:text-white text-sm"
                >
                  Call or Text 988
                </a>
              </div>
              <div className="bg-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <span className="text-xs font-medium">Emergency Services:</span>
                <a
                  href="tel:911"
                  className="font-bold text-[#DCE5DE] hover:text-white text-sm"
                >
                  Call 911
                </a>
              </div>
            </div>
            <p className="text-[11px] text-white/60 pt-1">
              Free, confidential, available 24/7.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.practiceName}. All rights reserved.
              Licensed to practice psychotherapy in the Commonwealth of Virginia.
            </p>
            <p className="text-[11px] text-white/50 mt-1">
              Medical Disclaimer: Information on this website is for educational and informational purposes only and does not establish a clinical therapist-client relationship.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Disclaimer
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
