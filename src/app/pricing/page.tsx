"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Squares from "@/components/Squares";

const categories = [
  {
    id: "website",
    label: "Website",
    title: "Website & Company Profile",
    desc: "Professional website with an AI chatbot included",
    link: "/layanan/website-company-profile",
    tiers: [
      {
        name: "Starter",
        price: "2.5 million",
        duration: "One-time",
        target: "New businesses that need an online presence",
        features: ["1–5 mobile-responsive pages", "Basic SEO & contact forms", "WhatsApp integration", "1-month AI chatbot trial", "SSL certificate", "1 revision included", "1 year of hosting & domain"],
      },
      {
        name: "Professional",
        price: "5 million",
        duration: "One-time",
        popular: true,
        target: "Businesses that need a complete, professional website",
        features: ["6–10 pages with custom branding", "Full SEO optimization", "CMS included (manage it yourself)", "3 months of AI chatbot access", "Analytics & tracking setup", "Blog and portfolio galleries", "3 revisions and training included"],
      },
      {
        name: "Enterprise",
        price: "12 million+",
        duration: "One-time",
        target: "Large businesses with custom requirements",
        features: ["Unlimited pages", "Premium custom design", "1 year of AI chatbot access", "E-commerce & payment gateway", "Multilingual support", "Custom API integrations", "Unlimited revisions and priority support", "Monthly maintenance included"],
      },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    title: "SEO & Content Marketing",
    desc: "Improve your Google rankings with AI-powered SEO",
    link: "/layanan/seo-content-marketing",
    tiers: [
      {
        name: "Starter",
        price: "3 million",
        duration: "/month",
        target: "New businesses beginning to focus on SEO",
        features: ["10 target keywords", "AI keyword research", "On-page optimization", "Technical SEO audit", "Google Search Console setup", "Monthly reports", "Basic competitor analysis", "Email support"],
      },
      {
        name: "Growth",
        price: "6 million",
        duration: "/month",
        popular: true,
        target: "Businesses seeking significant organic growth",
        features: ["25 target keywords", "Full optimization", "4 articles/month + AI enhancement", "10 quality backlinks", "Biweekly reports", "Detailed competitor analysis", "Priority WhatsApp support"],
      },
      {
        name: "Scale",
        price: "12 million",
        duration: "/month",
        target: "Aggressive goals in a competitive market",
        features: ["Unlimited keywords", "Complete technical SEO", "10 articles/month", "25 quality backlinks", "Local SEO & schema markup", "Weekly dashboard", "Dedicated specialist", "Monthly strategy calls"],
      },
    ],
  },
  {
    id: "socmed",
    label: "Social Media",
    title: "Social Media & Digital Ads",
    desc: "Manage social media with AI audience optimization",
    link: "/layanan/social-media-digital-ads",
    tiers: [
      {
        name: "Starter",
        price: "3 million",
        duration: "/month",
        target: "Businesses just getting started on social media",
        features: ["2 platforms (Instagram + 1)", "12 post designs/month", "Content calendar & copywriting", "Basic ads management", "AI creative suggestions", "Monthly reports", "Email support"],
      },
      {
        name: "Professional",
        price: "7 million",
        duration: "/month",
        popular: true,
        target: "Businesses seeking significant growth",
        features: ["3 platforms of your choice", "20 post designs/month", "4 Reels/TikTok videos", "Meta Ads + Google Ads management", "AI audience optimization & A/B testing", "Biweekly reports", "Competitor monitoring", "Priority WhatsApp support"],
      },
      {
        name: "Scale",
        price: "15 million",
        duration: "/month",
        target: "Businesses with ambitious goals",
        features: ["All platforms", "Unlimited post designs", "10 videos/month", "Management across all ad platforms", "AI campaign optimization", "Influencer outreach", "Real-time monitoring & weekly dashboard", "Dedicated account manager"],
      },
    ],
  },
];

const faqs = [
  { q: "Do prices include tax?", a: "Prices exclude 11% VAT, which will be added to your invoice." },
  { q: "What is the minimum contract term?", a: "Monthly services require a minimum three-month commitment. Website projects are one-time engagements." },
  { q: "What payment methods do you accept?", a: "Bank transfer. Websites: 50% upfront and 50% on completion. Monthly services: payment is due in advance each month." },
  { q: "Can I get a custom package?", a: "Yes. Contact us for a custom package tailored to your business needs and budget." },
  { q: "Do you offer a guarantee?", a: "Websites include a one-month bug-fix warranty. Recurring services include an execution guarantee based on agreed deliverables." },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("website");
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const currentTier = currentCategory.tiers[activeTier];

  return (
    <>
      <Navbar />
      <main className="pb-16">
        {/* Header */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          {/* Squares Background */}
          <div className="absolute inset-0">
            <Squares
              color="#2563EB"
              size={60}
              speed={0.5}
              direction="diagonal"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          <div className="relative z-10 text-center px-6 md:px-16 pt-20 pointer-events-none">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-8">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              A Measurable Investment
            </h1>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6"
              style={{ textShadow: "0 0 20px rgba(37, 99, 235, 0.8), 0 0 40px rgba(37, 99, 235, 0.4)" }}
            >
              Transparent Pricing, No Hidden Fees
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Every service includes AI enhancements. Choose the package that fits your business needs.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="flex justify-center mb-12">
              <div className="inline-flex border border-white/10 bg-white/[0.02] rounded-xl p-1.5 gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setActiveTier(1); }}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">{currentCategory.title}</h2>
              <p className="text-sm text-white/60">{currentCategory.desc}</p>
            </div>

            {/* Tier Selector + Detail View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Tier Cards (Left) */}
              <div className="lg:col-span-4 space-y-3">
                {currentCategory.tiers.map((tier, i) => (
                  <button
                    key={tier.name}
                    onClick={() => setActiveTier(i)}
                    className={`w-full text-left p-5 rounded-xl transition-all border ${
                      activeTier === i
                        ? "bg-gradient-to-r from-primary/15 to-transparent border-primary shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                        : "border-white/10 bg-white/[0.02] hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold">{tier.name}</h3>
                        {tier.popular && (
                          <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        activeTier === i ? "border-primary" : "border-white/20"
                      }`}>
                        {activeTier === i && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white">
                      Rp {tier.price}
                      <span className="text-sm font-normal text-white/50 ml-1">{tier.duration}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail Panel (Right) */}
              <div className="lg:col-span-8">
                <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{currentTier.name}</h3>
                        {currentTier.popular && (
                          <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">Recommended</span>
                        )}
                      </div>
                      <p className="text-sm text-white/60">{currentTier.target}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">Rp {currentTier.price}</div>
                      <p className="text-sm text-white/50">{currentTier.duration}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">What You Get</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentTier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary shrink-0 mt-0.5">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/6285280452688"
                      target="_blank"
                      className="flex-1 text-center px-6 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
                    >
                      Choose {currentTier.name}
                    </a>
                    <a
                      href={currentCategory.link}
                      className="flex-1 text-center px-6 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all"
                    >
                      View Service Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: "✓", label: "AI Enhancement Included" },
                { icon: "✓", label: "No Hidden Fees" },
                { icon: "✓", label: "Free Consultation" },
                { icon: "✓", label: "Ongoing Support" },
              ].map((b) => (
                <div key={b.label} className="flex items-center justify-center gap-2 py-3">
                  <span className="w-5 h-5 bg-primary/20 text-primary text-xs rounded-full flex items-center justify-center font-bold">{b.icon}</span>
                  <span className="text-sm text-white/70">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[720px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-medium text-sm hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-4 h-4 text-white/50 shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[200px]" : "max-h-0"}`}>
                    <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[600px] mx-auto px-6 md:px-16 text-center relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Need a Custom Quote?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Working with a limited budget? We'll help find the right solution for you.
            </p>
            <a
              href="https://wa.me/6285280452688"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
            >
              Chat via WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
