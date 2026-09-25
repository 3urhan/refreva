export interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  slug: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  audience: string;
  description: string;
  benefits: string[];
  sessionFormat: string[];
  isOffered: boolean;
}

export interface Clinician {
  id: string;
  name: string;
  title: string;
  credentials: string;
  licenseJurisdiction: string;
  bio: string;
  specialties: string[];
  approach: string;
  sessionType: string[];
  acceptingNewClients: boolean;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "getting-started" | "telehealth" | "fees-insurance" | "sessions";
}

export const SITE_CONFIG = {
  practiceName: "Refreva",
  tagline: "Whole-person psychiatric care, tailored to your needs.",
  shortDescription:
    "Grounded, compassionate mental health and psychiatric practice serving individuals across the Commonwealth of Virginia.",
  jurisdiction: "Virginia, USA",
  officeLocation: {
    addressLine1: "[CLIENT TO PROVIDE: Physical Suite Address]",
    city: "[CLIENT TO PROVIDE: City]",
    state: "Virginia",
    zip: "[CLIENT TO PROVIDE: Zip Code]",
    phone: "[CLIENT TO PROVIDE: Phone Number, e.g. (804) 555-0199]",
    email: "contact@refreva.com",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM (By Appointment)",
    telehealthCoverage: "Available statewide across all Virginia cities and counties",
    isPhysicalOfficeConfirmed: false,
  },
  crisisNotice: {
    headline: "Immediate Crisis Support",
    text: "Refreva is an outpatient mental health practice and is not equipped to provide emergency crisis interventions. If you are experiencing thoughts of self-harm, suicide, or an acute mental health emergency, please call or text the Suicide & Crisis Lifeline at 988 (available 24/7, free and confidential), call 911, or go to your nearest emergency department.",
    crisisNumber: "988",
    emergencyNumber: "911",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Telehealth in VA", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      id: "psychiatric-evaluations",
      number: "01",
      tag: "A THOUGHTFUL PLACE TO BEGIN",
      slug: "psychiatric-evaluations",
      title: "Psychiatric evaluations",
      shortDescription:
        "A comprehensive, compassionate conversation to better understand what you have been carrying and what support may help.",
      bullets: [
        "Time to share what has felt difficult and what you hope may change.",
        "A respectful review of relevant health, mental-health, and medication history.",
      ],
      audience:
        "Individuals experiencing new or persistent emotional difficulties, seeking clinical clarity, or desiring a thorough, unhurried diagnostic evaluation.",
      description:
        "A psychiatric evaluation is an exploratory, respectful dialogue rather than a checklist. We review your personal history, emotional patterns, physical well-being, and current challenges to create a clear, personalized diagnostic picture and roadmap for care.",
      benefits: [
        "Accurate, evidence-based diagnostic clarity",
        "A safe, unhurried space to discuss what you have been experiencing",
        "Collaborative evaluation of both medical and therapeutic pathways",
        "Clear, written recommendations tailored to your goals",
      ],
      sessionFormat: ["In-Person (Virginia)", "Secure Telehealth (Statewide)"],
      isOffered: true,
    },
    {
      id: "medication-management",
      number: "02",
      tag: "CARE THAT EVOLVES WITH YOU",
      slug: "medication-management",
      title: "Medication management",
      shortDescription:
        "Thoughtful, evidence-based medication care centered on safety, clarity, and regular conversations about how you are feeling.",
      bullets: [
        "Clear conversations about potential benefits, risks, and questions.",
        "Regular follow-up appointments to notice progress and address concerns.",
      ],
      audience:
        "Patients considering psychiatric medication for the first time, seeking careful ongoing management, or looking to adjust or taper existing regimens.",
      description:
        "Medication should support your life, not complicate it. We approach pharmacotherapy with precision, conservative prescribing principles, and transparent discussions regarding how medications work, possible side effects, and ongoing efficacy.",
      benefits: [
        "Evidence-informed medication choices tailored to your neurochemistry",
        "Attentive side-effect monitoring and conservative dosing",
        "Collaborative decisions where your lived comfort is prioritized",
        "Ongoing follow-up to calibrate care as your life evolves",
      ],
      sessionFormat: ["In-Person (Virginia)", "Secure Telehealth (Statewide)"],
      isOffered: true,
    },
    {
      id: "supportive-counseling",
      number: "03",
      tag: "PRACTICAL SUPPORT FOR REAL LIFE",
      slug: "supportive-counseling",
      title: "Supportive counseling",
      shortDescription:
        "Guidance, education, and compassionate coping support to help you better understand your mental health and care options.",
      bullets: [
        "Straightforward education about your care plan and treatment options.",
        "Practical support for stress, change, and day-to-day challenges.",
      ],
      audience:
        "Adults and adolescents seeking emotional grounding, stress reduction strategies, cognitive tools, and compassionate therapeutic guidance.",
      description:
        "Supportive counseling provides an intentional sanctuary to untangle life transitions, establish healthy boundaries, and build cognitive and somatic resilience. We pair psychoeducation with genuine human empathy.",
      benefits: [
        "Practical tools for emotional regulation and daily stress management",
        "Clarity surrounding interpersonal relationships and communication",
        "Non-judgmental processing of life adjustments and burnout",
        "Integration of behavioral strategies with your ongoing care plan",
      ],
      sessionFormat: ["In-Person (Virginia)", "Secure Telehealth (Statewide)"],
      isOffered: true,
    },
    {
      id: "telehealth-psychiatry",
      number: "04",
      tag: "CARE FROM A PLACE THAT FEELS COMFORTABLE",
      slug: "telehealth",
      title: "Telehealth psychiatry",
      shortDescription:
        "Confidential psychiatric care through secure virtual appointments for eligible patients throughout Virginia.",
      bullets: [
        "Virtual appointments designed for privacy, comfort, and convenience.",
        "Care for adolescents (16+) and adults across the Commonwealth of Virginia.",
      ],
      audience:
        "Virginia residents seeking high-quality mental health care without commute burdens, rigid scheduling constraints, or travel barriers.",
      description:
        "Our telehealth services bring comprehensive psychiatric evaluations, medication follow-ups, and supportive counseling directly to your private space anywhere in Virginia via an encrypted, one-click video portal.",
      benefits: [
        "Statewide access across Northern Virginia, Richmond, Hampton Roads & beyond",
        "Zero travel time, parking friction, or waiting room fatigue",
        "Encrypted, HIPAA-compliant video technology",
        "Continuity of care from the comfort and privacy of your home",
      ],
      sessionFormat: ["Secure Encrypted Video Platform"],
      isOffered: true,
    },
  ] as ServiceItem[],
  clinicians: [
    {
      id: "refreva-clinical-director",
      name: "[CLIENT TO PROVIDE: Clinician Name]",
      title: "Psychiatric Clinician / Counselor",
      credentials: "PMHNP-BC / LPC (Virginia License # [CLIENT TO PROVIDE])",
      licenseJurisdiction: "Commonwealth of Virginia",
      bio: "Our clinicians hold active Virginia licenses and bring dedicated clinical experience grounded in evidence-informed psychiatric care and compassionate therapy. We prioritize collaborative, respectful partnerships where your lived experiences guide each step of treatment.",
      specialties: [
        "Comprehensive Psychiatric Evaluations",
        "Evidence-Based Medication Management",
        "Anxiety, Depression & Mood Disorders",
        "Stress & Life Transitions",
      ],
      approach:
        "Thoughtful, conservative, and client-centered. We integrate biological, psychological, and social understanding to help you feel heard, supported, and confident.",
      sessionType: ["Psychiatric Evaluation", "Medication Management", "Counseling", "Telehealth"],
      acceptingNewClients: true,
      avatarUrl: "/images/clinician-placeholder.webp",
    },
  ] as Clinician[],
  faqs: [
    {
      id: "how-to-start",
      question: "How do I know which service is right for me to begin with?",
      answer:
        "Most new patients begin with a comprehensive Psychiatric Evaluation. This provides dedicated time to share what you have been experiencing, review your medical and mental health history, and collaboratively determine whether medication management, supportive counseling, or a combination of approaches is the right fit.",
      category: "getting-started",
    },
    {
      id: "medication-questions",
      question: "Do I have to take medication if I schedule an evaluation?",
      answer:
        "Not at all. An evaluation is an open clinical conversation. We explore all therapeutic options, explain the potential benefits and limitations of medication, and respect your autonomy in deciding what treatment path feels comfortable for you.",
    },
    {
      id: "telehealth-rules",
      question: "Who can receive telehealth care through Refreva?",
      answer:
        "Because our practitioners are licensed in the Commonwealth of Virginia, you must be physically located within the state of Virginia at the time of your virtual appointment. Sessions take place through a private, encrypted video platform.",
      category: "telehealth",
    },
    {
      id: "first-session",
      question: "What happens during the initial appointment?",
      answer:
        "The first session is an unhurried, collaborative conversation. We discuss what prompted you to reach out, your personal history and current symptoms, and what you hope to achieve. You will have ample time to ask questions and discuss care options.",
      category: "sessions",
    },
    {
      id: "fees-insurance",
      question: "Do you accept insurance or provide superbills?",
      answer:
        "[CLIENT TO CONFIRM EXACT IN-NETWORK OR OUT-OF-NETWORK STATUS] Refreva operates primarily as an out-of-network practice. We provide itemized Superbills that you may submit to your insurance carrier for potential out-of-network reimbursement. We encourage you to verify your out-of-network mental health benefits with your insurer.",
      category: "fees-insurance",
    },
    {
      id: "confidentiality",
      question: "Is what we discuss kept confidential?",
      answer:
        "Yes, absolutely. Confidentiality is legally and ethically protected under Virginia healthcare regulations. What you share stays strictly between you and your clinician, with very narrow, legally mandated exceptions involving imminent harm or vulnerable abuse reporting.",
      category: "getting-started",
    },
  ] as FaqItem[],
  processSteps: [
    {
      step: "01",
      title: "Reach Out",
      description:
        "Complete our calm, brief appointment request form or call our practice. Share your general preferences without needing to disclose private medical details.",
    },
    {
      step: "02",
      title: "Initial Consultation",
      description:
        "We connect for a brief, no-pressure conversation to discuss your scheduling needs, answer questions, and confirm clinical fit.",
    },
    {
      step: "03",
      title: "Comprehensive Evaluation",
      description:
        "Meet with your licensed Virginia clinician virtually or in person to map your history, symptoms, and care goals at your pace.",
    },
    {
      step: "04",
      title: "Personalized Care",
      description:
        "Engage in collaborative follow-ups, medication management, or supportive counseling that adjusts as your well-being evolves.",
    },
  ],
};
