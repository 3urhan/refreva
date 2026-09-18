"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu on page transition
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6E1D9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo & Clinical Location Badge */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#264640] rounded-lg p-1"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#264640] group-hover:text-[#1b332e] transition-colors">
                  {SITE_CONFIG.practiceName}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[#DCE5DE] text-[#264640]">
                  Virginia
                </span>
              </div>
              <span className="text-[11px] text-[#53625E] font-medium tracking-wide">
                Therapy & Counseling
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {SITE_CONFIG.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#264640]",
                    isActive
                      ? "bg-[#264640]/10 text-[#264640] font-semibold"
                      : "text-[#53625E] hover:text-[#1F2E2B] hover:bg-[#F3EFEA]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/schedule"
              variant="primary"
              size="sm"
              className="font-medium"
            >
              <Calendar className="h-4 w-4" />
              <span>Request Appointment</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/schedule"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5 sm:hidden"
            >
              <span>Schedule</span>
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#264640] hover:bg-[#F3EFEA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#264640]"
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 z-50 bg-[#FAF8F5] border-t border-[#E6E1D9] lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-wider text-[#53625E] uppercase mb-4">
              Practice Navigation
            </p>
            <nav className="flex flex-col space-y-1">
              {SITE_CONFIG.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-[#264640] text-white"
                        : "text-[#1F2E2B] hover:bg-[#F3EFEA]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#DCE5DE]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E6E1D9] space-y-4">
            <div className="bg-[#F3EFEA] p-4 rounded-xl space-y-1">
              <p className="text-xs text-[#53625E] font-medium">
                Serving All of Virginia
              </p>
              <p className="text-sm font-serif text-[#1F2E2B]">
                In-person & secure telehealth counseling
              </p>
            </div>
            <Button
              href="/schedule"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              <span>Request an Appointment</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
