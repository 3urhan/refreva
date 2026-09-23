"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HeartPulse, 
  ChevronDown, 
  Menu, 
  X, 
  Calendar
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Close mobile menu on page transition
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const isHome = pathname === "/";

  // Detect scroll to adjust floating pill elevation
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "sticky top-3 sm:top-4 z-50 w-full bg-transparent border-none pointer-events-none px-3 sm:px-6 lg:px-8 transition-all duration-300",
        isHome ? "-mb-[74px] sm:-mb-[84px]" : "mb-2 sm:mb-4"
      )}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Floating Pill Container (Inspired by Reference Design) */}
        <div 
          className={cn(
            "pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#E6E1D9]/90 px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-300",
            isScrolled 
              ? "py-2 sm:py-2.5 shadow-xl shadow-black/10 border-white/80" 
              : "py-2.5 sm:py-3 shadow-lg shadow-black/[0.04]"
          )}
        >
          
          {/* Left: Brand Icon + Name & Subtitle */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#264640] rounded-full p-1 shrink-0"
          >
            <div className="h-9 w-9 rounded-full bg-[#EBF1EC] text-[#264640] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-[#DCE5DE]">
              <HeartPulse className="h-5 w-5 text-[#264640]" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#264640] group-hover:text-[#1b332e] transition-colors leading-none">
                  {SITE_CONFIG.practiceName}
                </span>
                <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#DCE5DE] text-[#264640]">
                  VA
                </span>
              </div>
              <span className="text-[10px] text-[#53625E] font-medium tracking-wide uppercase mt-0.5">
                Therapy & Counseling
              </span>
            </div>
          </Link>

          {/* Center: Clean Horizontal Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#264640]",
                pathname === "/"
                  ? "text-[#264640] font-semibold"
                  : "text-[#53625E]"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#264640]",
                pathname === "/about"
                  ? "text-[#264640] font-semibold"
                  : "text-[#53625E]"
              )}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#264640] flex items-center gap-1",
                pathname.startsWith("/services") && pathname !== "/services/telehealth"
                  ? "text-[#264640] font-semibold"
                  : "text-[#53625E]"
              )}
            >
              <span>Services</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </Link>

            <Link
              href="/services/telehealth"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#264640]",
                pathname === "/services/telehealth"
                  ? "text-[#264640] font-semibold"
                  : "text-[#53625E]"
              )}
            >
              Telehealth in VA
            </Link>

            <Link
              href="/faq"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#264640]",
                pathname === "/faq"
                  ? "text-[#264640] font-semibold"
                  : "text-[#53625E]"
              )}
            >
              FAQs
            </Link>
          </nav>

          {/* Right: Two Pill Action Buttons (matching reference image) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Outline Pill Button */}
            <Link
              href="/contact"
              className="rounded-full border border-[#264640] text-[#264640] hover:bg-[#264640]/5 font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Contact Us
            </Link>

            {/* Solid Pill Button */}
            <Link
              href="/schedule"
              className="rounded-full bg-[#264640] hover:bg-[#1b332e] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Request Appointment</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Schedule Mini Pill + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/schedule"
              className="rounded-full bg-[#264640] text-white text-xs font-semibold px-3 py-1.5 sm:hidden"
            >
              Schedule
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#264640] hover:bg-[#F3EFEA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#264640]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Flowing from the Floating Pill Island) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-3 top-20 z-50 pointer-events-auto bg-white/98 backdrop-blur-xl border border-[#E6E1D9] rounded-3xl p-6 shadow-2xl lg:hidden flex flex-col space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wider text-[#53625E] uppercase mb-2">
              Practice Navigation
            </p>
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-2xl text-base font-medium transition-colors flex items-center justify-between",
                  pathname === "/"
                    ? "bg-[#264640] text-white"
                    : "text-[#1F2E2B] hover:bg-[#F3EFEA]"
                )}
              >
                <span>Home</span>
                {pathname === "/" && <span className="h-2 w-2 rounded-full bg-[#DCE5DE]" />}
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-2xl text-base font-medium transition-colors flex items-center justify-between",
                  pathname === "/about"
                    ? "bg-[#264640] text-white"
                    : "text-[#1F2E2B] hover:bg-[#F3EFEA]"
                )}
              >
                <span>About Us</span>
                {pathname === "/about" && <span className="h-2 w-2 rounded-full bg-[#DCE5DE]" />}
              </Link>

              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-2xl text-base font-medium transition-colors flex items-center justify-between",
                  pathname.startsWith("/services") && pathname !== "/services/telehealth"
                    ? "bg-[#264640] text-white"
                    : "text-[#1F2E2B] hover:bg-[#F3EFEA]"
                )}
              >
                <span>Services</span>
                {pathname.startsWith("/services") && pathname !== "/services/telehealth" && (
                  <span className="h-2 w-2 rounded-full bg-[#DCE5DE]" />
                )}
              </Link>

              <Link
                href="/services/telehealth"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-2xl text-base font-medium transition-colors flex items-center justify-between",
                  pathname === "/services/telehealth"
                    ? "bg-[#264640] text-white"
                    : "text-[#1F2E2B] hover:bg-[#F3EFEA]"
                )}
              >
                <span>Telehealth in VA</span>
                {pathname === "/services/telehealth" && (
                  <span className="h-2 w-2 rounded-full bg-[#DCE5DE]" />
                )}
              </Link>

              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-2xl text-base font-medium transition-colors flex items-center justify-between",
                  pathname === "/faq"
                    ? "bg-[#264640] text-white"
                    : "text-[#1F2E2B] hover:bg-[#F3EFEA]"
                )}
              >
                <span>FAQs</span>
                {pathname === "/faq" && <span className="h-2 w-2 rounded-full bg-[#DCE5DE]" />}
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-[#E6E1D9] space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-full border border-[#264640] text-[#264640] text-center font-semibold py-3 text-sm flex items-center justify-center hover:bg-[#264640]/5"
            >
              Contact Us
            </Link>

            <Link
              href="/schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-full bg-[#264640] text-white text-center font-semibold py-3 text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-[#1b332e]"
            >
              <Calendar className="h-4 w-4" />
              <span>Request an Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
