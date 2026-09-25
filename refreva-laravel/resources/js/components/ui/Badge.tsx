import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "sage" | "warming" | "ochre" | "teal" | "neutral" | "outline";
}

export function Badge({
  className,
  variant = "sage",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    sage: "bg-[#DCE5DE] text-[#264640] border border-[#cfdbd2]",
    warming: "bg-[#F8F3EA] text-[#966F33] border border-[#E8DECA]",
    ochre: "bg-[#F8F3EA] text-[#966F33] border border-[#E8DECA]",
    teal: "bg-[#EAF3F2] text-[#1C544E] border border-[#CFE4E1]",
    neutral: "bg-[#F3EFEA] text-[#53625E] border border-[#E6E1D9]",
    outline: "border border-[#264640]/30 text-[#264640] bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
