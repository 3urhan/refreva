"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  id,
  title,
  children,
  isOpen = false,
  onToggle,
}: AccordionItemProps) {
  const headingId = `accordion-heading-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className="border-b border-[#E6E1D9] last:border-none">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between py-5 text-left font-serif text-lg md:text-xl font-medium text-[#1F2E2B] transition-colors hover:text-[#264640] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#264640] focus-visible:ring-offset-2 rounded-lg px-2"
        >
          <span className="pr-4">{title}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-[#53625E] transition-transform duration-200",
              isOpen && "rotate-180 text-[#264640]"
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
        className={cn(
          "overflow-hidden transition-all px-2 pb-6 pt-1 text-sm md:text-base text-[#53625E] leading-relaxed",
          isOpen ? "block animate-fadeIn" : "hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = React.useState<string[]>([items[0]?.id || ""]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-[#E6E1D9] bg-white rounded-2xl border border-[#E6E1D9] p-4 md:p-6 card-ambient-shadow", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        >
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
