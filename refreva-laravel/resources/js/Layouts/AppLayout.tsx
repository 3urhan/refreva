import * as React from "react";
import { CrisisBanner } from "@/components/layout/CrisisBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2E2B]">
      <CrisisBanner />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
