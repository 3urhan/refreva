import * as React from "react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "crisis";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-2.5 py-1 gap-1.5",
      md: "text-xs sm:text-sm px-3.5 py-1.5 gap-1.5",
      lg: "text-xs sm:text-sm px-4 py-2 gap-2 shadow-sm hover:shadow",
    };

    const variantStyles = {
      primary:
        "bg-[#264640] hover:bg-[#1b332e] text-white focus-visible:outline-[#264640] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
      secondary:
        "bg-[#1C544E] hover:bg-[#143E3A] text-white focus-visible:outline-[#1C544E] shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200",
      outline:
        "border border-[#264640] text-[#264640] hover:bg-[#264640]/5 focus-visible:outline-[#264640] hover:-translate-y-0.5 transition-all duration-200",
      ghost:
        "text-[#264640] hover:bg-[#264640]/10 focus-visible:outline-[#264640]",
      crisis:
        "bg-rose-700 hover:bg-rose-800 text-white font-semibold focus-visible:outline-rose-700",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
