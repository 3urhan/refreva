import * as React from "react";
import { Head, Link } from "@inertiajs/react";
import { AppLayout } from "@/Layouts/AppLayout";
import { Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <AppLayout>
      <Head title="Page Not Found" />
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF8F5] px-4 py-20">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="h-16 w-16 bg-[#DCE5DE] rounded-full mx-auto flex items-center justify-center text-[#264640]">
            <Compass className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#966F33]">
              Page Not Found
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1F2E2B]">
              Let’s help you find your way.
            </h1>
            <p className="text-sm text-[#53625E] leading-relaxed">
              The page you are looking for might have been moved or does not exist. Take a breath—here are a few helpful places to continue:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md">
              <Home className="h-4 w-4" />
              <span>Return to Homepage</span>
            </Button>
            <Button href="/services" variant="outline" size="md">
              <span>Explore Services</span>
            </Button>
          </div>

          <div className="pt-6 border-t border-[#E6E1D9] text-xs text-[#53625E]">
            <span>Experiencing an immediate crisis? Dial </span>
            <a href="tel:988" className="font-bold text-rose-800 underline">
              988
            </a>
            <span> or </span>
            <a href="tel:911" className="font-bold text-rose-800 underline">
              911
            </a>
            <span> for 24/7 emergency support.</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
