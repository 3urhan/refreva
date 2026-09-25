import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant="sage">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1F2E2B] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#53625E] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
