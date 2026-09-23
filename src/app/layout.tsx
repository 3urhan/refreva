import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CrisisBanner } from "@/components/layout/CrisisBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://refreva.com"),
  title: {
    default: "Refreva — Therapy & Counseling Practice in Virginia",
    template: "%s | Refreva Therapy Virginia",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Grounded, compassionate psychotherapy and counseling services for adults across Virginia. Offering thoughtful in-person care and statewide secure telehealth appointments.",
  keywords: [
    "therapy in Virginia",
    "Virginia licensed therapist",
    "counseling Virginia",
    "individual therapy Virginia",
    "anxiety counseling Virginia",
    "telehealth therapy Virginia",
    "psychotherapy Virginia",
  ],
  authors: [{ name: "Refreva Therapy Clinic" }],
  creator: "Refreva",
  publisher: "Refreva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://refreva.com",
    siteName: "Refreva Therapy",
    title: "Refreva — Grounded Psychotherapy & Counseling in Virginia",
    description:
      "Support for where you are, and where you're going. Compassionate, licensed therapy in-person and via telehealth across Virginia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refreva — Therapy & Counseling in Virginia",
    description:
      "Compassionate, licensed psychotherapy in-person and via secure telehealth across the Commonwealth of Virginia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-VA",
    "geo.placename": "Virginia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org MedicalBusiness / LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_CONFIG.practiceName,
    description: SITE_CONFIG.shortDescription,
    url: "https://refreva.com",
    medicalSpecialty: "Psychotherapy",
    areaServed: {
      "@type": "State",
      name: "Virginia",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Commonwealth of Virginia",
    },
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Individual Psychotherapy",
        description:
          "Individual outpatient counseling tailored around personal goals, anxiety, life transitions, and emotional well-being.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Telehealth Psychotherapy",
        description:
          "Secure virtual therapy sessions for residents throughout the state of Virginia.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-[#DCE5DE] selection:text-[#264640]">
        <CrisisBanner />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
