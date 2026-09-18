"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MotionRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // Milliseconds
  duration?: number; // Milliseconds
  direction?: "up" | "down" | "fade" | "none";
  distance?: number; // Pixels
  threshold?: number;
  className?: string;
}

export function MotionReveal({
  children,
  delay = 0,
  duration = 650,
  direction = "up",
  distance = 24,
  threshold = 0.12,
  className,
  ...props
}: MotionRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getInitialTransform = () => {
    if (direction === "up") return `translateY(${distance}px)`;
    if (direction === "down") return `translateY(-${distance}px)`;
    return "none";
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : getInitialTransform(),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <div ref={ref} style={style} className={cn("will-change-[opacity,transform]", className)} {...props}>
      {children}
    </div>
  );
}
