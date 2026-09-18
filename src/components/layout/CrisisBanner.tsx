"use client";

import * as React from "react";
import { AlertCircle, Phone, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function CrisisBanner() {
  const [isDismissed, setIsDismissed] = React.useState(false);

  if (isDismissed) {
    return (
      <div className="bg-[#FAF8F5] border-b border-[#E6E1D9] text-[11px] md:text-xs text-[#53625E] py-1 px-4 text-center">
        <span>In an acute crisis? Dial </span>
        <a
          href="tel:988"
          className="font-semibold text-rose-800 underline hover:text-rose-900"
        >
          988 (Lifeline)
        </a>
        <span> or </span>
        <a
          href="tel:911"
          className="font-semibold text-rose-800 underline hover:text-rose-900"
        >
          911
        </a>
      </div>
    );
  }

  return (
    <aside
      aria-label="Crisis and Emergency Notice"
      className="bg-[#F3EFEA] border-b border-[#E6E1D9] text-xs text-[#1F2E2B] py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-[280px]">
          <AlertCircle className="h-4 w-4 text-rose-700 shrink-0" aria-hidden="true" />
          <p className="leading-tight text-xs text-[#53625E]">
            <strong className="font-semibold text-[#1F2E2B]">
              Immediate Support:
            </strong>{" "}
            Refreva is an outpatient practice. If you are experiencing an acute mental health emergency, please call or text{" "}
            <a
              href="tel:988"
              className="font-bold text-rose-800 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-800 rounded px-0.5"
            >
              988
            </a>{" "}
            (24/7 Suicide & Crisis Lifeline) or call{" "}
            <a
              href="tel:911"
              className="font-bold text-rose-800 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-800 rounded px-0.5"
            >
              911
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:988"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 hover:bg-rose-200 text-[11px] font-semibold transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>Call 988</span>
          </a>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="text-[#53625E] hover:text-[#1F2E2B] p-1 rounded hover:bg-[#E6E1D9]/50 transition-colors"
            aria-label="Minimize crisis notification bar"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
