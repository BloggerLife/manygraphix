"use client";

import { createContext, useContext, ReactNode } from "react";

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  // Navbar
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.ai": "AI Solutions",
  "nav.portfolio": "Portfolio",
  "nav.blog": "Blog",
  "nav.pricing": "Pricing",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",

  // Hero
  "hero.label": "AI Solutions Studio",
  "hero.prefix": "We build",
  "hero.description": "Custom AI for Indonesian businesses.\nProduction-ready & measurable",
  "hero.cta": "Let's Talk",
  "hero.portfolio": "Portfolio",

  // About
  "about.label": "About Us",
  "about.title": "AI Solutions for\nDigital Transformation",
  "about.description": "Empowering Indonesian businesses with innovative, affordable AI solutions",
  "about.value1.title": "AI Expertise",
  "about.value1.desc": "Machine learning specialists with experience across industries",
  "about.value2.title": "Cutting-Edge Technology",
  "about.value2.desc": "GPT, computer vision, NLP, and other leading AI technologies",
  "about.value3.title": "SME-Focused",
  "about.value3.desc": "Affordable AI solutions for businesses of every size",
  "about.value4.title": "Built in Indonesia",
  "about.value4.desc": "We understand the needs and challenges of local Indonesian businesses",
  "about.why": "Why Choose Us",
  "about.benefit1.title": "Custom & Scalable",
  "about.benefit1.desc": "Solutions tailored to your business needs and built to grow",
  "about.benefit2.title": "End-to-End Development",
  "about.benefit2.desc": "From consultation through deployment and maintenance",
  "about.benefit3.title": "Affordable for SMEs",
  "about.benefit3.desc": "Transparent, affordable pricing for Indonesian SMEs",
  "about.benefit4.title": "Support & Training",
  "about.benefit4.desc": "Team training and ongoing support after deployment",

  // Services
  "services.label": "Services",
  "services.title": "A Digital Agency Powered\nby AI Technology",
  "services.viewAll": "View All",
  "services.viewDetail": "View Details",
  "services.badge1": "Popular",
  "services.badge2": "Best Value",
  "services.badge3": "Growing",
  "services.service1.title": "Website & Company Profile",
  "services.service1.f1": "Responsive design",
  "services.service1.f2": "SEO optimization",
  "services.service1.f3": "AI chatbot included",
  "services.service1.f4": "Modern UI/UX",
  "services.service2.title": "SEO & Content Marketing",
  "services.service2.f1": "AI keyword research",
  "services.service2.f2": "Content optimization",
  "services.service2.f3": "Monthly reports",
  "services.service2.f4": "Improved rankings",
  "services.service3.title": "Social Media & Digital Ads",
  "services.service3.f1": "AI audience targeting",
  "services.service3.f2": "Multi-platform",
  "services.service3.f3": "Performance dashboard",
  "services.service3.f4": "Monthly optimization",
  "services.process": "Our Process",
  "services.step1.title": "Consultation",
  "services.step1.desc": "Discuss your business needs and goals",
  "services.step2.title": "Proposal",
  "services.step2.desc": "Solution recommendations with transparent pricing",
  "services.step3.title": "Execution",
  "services.step3.desc": "Project delivery with regular progress updates",
  "services.step4.title": "Ongoing Support",
  "services.step4.desc": "Training, maintenance, and continuous optimization",

  // Industries
  "industries.label": "Industries",
  "industries.title": "Industries We Serve",
  "industries.description": "Experience across sectors with measurable AI solutions",
  "industries.stat1": "Projects Completed",
  "industries.stat2": "Happy Clients",
  "industries.stat3": "Satisfaction Rate",
  "industries.ind1": "Retail & E-Commerce",
  "industries.ind2": "Healthcare & MedTech",
  "industries.ind3": "Finance & Fintech",
  "industries.ind4": "Education & EdTech",
  "industries.ind5": "Manufacturing & Logistics",
  "industries.ind6": "Marketing & Advertising",

  // FAQ
  "faq.label": "FAQ",
  "faq.title": "Frequently Asked Questions",
  "faq.q1": "Does a small business need a website?",
  "faq.a1": "Yes. A website is an important investment for a small business. It builds credibility, expands your reach, and lets your business operate 24/7.",
  "faq.q2": "How long does it take to build a website?",
  "faq.a2": "Timelines depend on complexity. A company profile website usually takes 2–4 weeks, while more complex projects may take longer.",
  "faq.q3": "How do your prices compare with competitors?",
  "faq.a3": "We offer competitive pricing with added value, including AI integration, SEO optimization, and ongoing support.",
  "faq.q4": "How do you keep technology up to date?",
  "faq.a4": "We provide regular maintenance and technology updates to keep your website and AI systems current.",
  "faq.q5": "Can I pay in installments?",
  "faq.a5": "Yes. We offer installment options to make our services more accessible to SMEs. Contact us to discuss a payment plan that works for you.",
  "faq.q6": "How do you measure success?",
  "faq.a6": "We provide analytics dashboards and monthly reports with clear metrics such as traffic, conversion rate, and ROI.",
  "faq.q7": "How does migration from another provider work?",
  "faq.a7": "Our experienced team handles the migration. Your data and content are transferred securely with minimal downtime.",
  "faq.q8": "How do I get started?",
  "faq.a8": "Contact us by email or WhatsApp for a free consultation. Our team will assess your needs and recommend the right solution.",

  // Contact
  "contact.label": "Get Started",
  "contact.title": "Ready to Transform\nYour Business?",
  "contact.description": "Get a free, no-obligation consultation. Tell us what your business needs, and we'll help find the right solution.",
  "contact.whatsapp": "Chat on WhatsApp",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
