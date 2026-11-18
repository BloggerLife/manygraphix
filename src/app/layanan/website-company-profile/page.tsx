"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";

export default function WebsitePage() {
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "2.5 million",
      duration: "One-time",
      target: "New businesses that need a professional online presence",
      features: ["1–5 mobile-responsive pages", "Basic SEO & contact forms", "WhatsApp integration", "1-month AI chatbot trial", "SSL certificate", "1 revision included", "1 year of hosting & domain"],
      timeline: "5–7 business days",
    },
    {
      name: "Professional",
      price: "5 million",
      duration: "One-time",
      popular: true,
      target: "Businesses that need a complete website with advanced features",
      features: ["6–10 pages with custom branding", "Full SEO optimization", "CMS included (manage your own content)", "3 months of AI chatbot access", "Google Analytics & tracking setup", "Blog and portfolio galleries", "3 revisions and training included"],
      timeline: "10–14 business days",
    },
    {
      name: "Enterprise",
      price: "12 million+",
      duration: "One-time",
      target: "Large businesses with complex, custom requirements",
      features: ["Unlimited pages", "Premium custom design", "1 year of AI chatbot access", "E-commerce & payment gateway", "Multilingual support", "Custom API integrations", "Unlimited revisions and priority support", "Monthly maintenance included"],
      timeline: "3–4 weeks",
    },
  ];

  const faqs = [
    { q: "How long does it take to build a website?", a: "Starter: 5–7 business days; Professional: 10–14 business days; Enterprise: 3–4 weeks. The timeline starts once all content and references are ready." },
    { q: "Can I update the content myself?", a: "Yes. Professional and Enterprise include a CMS so you can update content yourself. We also provide training." },
    { q: "Is there a monthly maintenance fee?", a: "Hosting and domain are free for the first year. Renewal starts at Rp 500K/year. Optional maintenance starts at Rp 500K/month." },
    { q: "Can I request custom features?", a: "Yes. Custom features are available with every package. Pricing depends on the complexity of the requested features. Contact us to discuss your needs." },
    { q: "How does the AI chatbot work?", a: "We train the AI chatbot on your business information so it can automatically answer visitor questions 24/7, increasing engagement and conversions." },
  ];

  const currentTier = tiers[activeTier];

  return (
    <>
      <Navbar />
      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* FaultyTerminal Background */}
          <div className="absolute inset-0">
            <FaultyTerminal
              tint="#2563EB"
              scale={2.5}
              gridMul={[2, 1]}
              digitSize={1.5}
              timeScale={0.4}
              scanlineIntensity={0.4}
              glitchAmount={1.2}
              flickerAmount={1}
              noiseAmp={1.2}
              chromaticAberration={0}
              curvature={0.1}
              mouseReact={true}
              mouseStrength={0.4}
              pageLoadAnimation={true}
              brightness={1.3}
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

          {/* Main Content - Centered */}
          <div className="relative z-10 text-center px-6 md:px-16 pt-20 pointer-events-none">
            {/* Badge */}
            <div className="mb-8">
              <span className="relative inline-flex rounded-full overflow-hidden">
                <div className="absolute inset-0">
                  <GlassSurface
                    width="100%"
                    height="100%"
                    borderRadius={50}
                    borderWidth={1}
                    brightness={40}
                    opacity={0.9}
                    blur={4}
                    displace={0}
                    distortionScale={-300}
                    redOffset={-50}
                    greenOffset={-50}
                    blueOffset={-50}
                    className="!w-full !h-full"
                  />
                </div>
                <span className="relative z-10 px-4 py-1.5 text-white text-xs tracking-wider font-medium">
                  AI-ENHANCED
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Website Design & Development<br />
              Website & Company Profile
            </h1>

            {/* Subtitle */}
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6"
              style={{ textShadow: "0 0 20px rgba(37, 99, 235, 0.8), 0 0 40px rgba(37, 99, 235, 0.4)" }}
            >
              Starting at Rp 2.5 million
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Build business credibility with a modern website featuring an AI chatbot for better engagement
            </p>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Choose the Right Package</h2>
              <p className="text-sm text-white/60">Select a package to view all the details</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Tier Selector */}
              <div className="lg:col-span-4 space-y-3">
                {tiers.map((tier, i) => (
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
                          <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full">POPULAR</span>
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

              {/* Detail Panel */}
              <div className="lg:col-span-8">
                <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-white">{currentTier.name}</h3>
                        {currentTier.popular && (
                          <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">Recommended</span>
                        )}
                      </div>
                      <p className="text-sm text-white/60">{currentTier.target}</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-3xl font-bold text-white">Rp {currentTier.price}</div>
                      <p className="text-sm text-white/50">{currentTier.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6 px-3 py-2 bg-primary/10 rounded-lg w-fit border border-primary/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-sm text-primary font-medium">Estimated timeline: {currentTier.timeline}</span>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8 flex-1">
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
                    <a href="https://wa.me/6285280452688" target="_blank" className="flex-1 text-center px-6 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">
                      Choose {currentTier.name}
                    </a>
                    <a href="/pricing" className="flex-1 text-center px-6 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all">
                      Compare All Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/50 text-center mt-6">All prices exclude 11% VAT. Hosting & domain are included for the first year.</p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Every Website Includes a Free AI Chatbot</h2>
              <p className="text-sm text-white/60 leading-relaxed">The AI chatbot answers visitor questions 24/7, increasing engagement by <strong className="text-white">40%</strong> and reducing bounce rates. No other agency includes this as standard.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Features Included
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "AI Chatbot 24/7", desc: "An intelligent chatbot trained on your business information to answer visitor questions automatically" },
                { title: "Mobile Responsive", desc: "Looks great on every device — desktop, tablet, and smartphone" },
                { title: "SEO Optimized", desc: "Structure and content optimized to help customers find you on Google" },
                { title: "Fast Loading", desc: "Loading times under 3 seconds for a better user experience and higher rankings" },
                { title: "SSL & Security", desc: "Free SSL certificate, 99.9% uptime guarantee, and protection from common attacks" },
                { title: "Support & Training", desc: "CMS training and technical support via WhatsApp" },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300 group">
                  <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Project Timeline
              </h2>
            </div>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Consultation", desc: "Discuss requirements, target audience, design references, and the content needed" },
                { day: "Days 2–3", title: "Design Mockup", desc: "Create a design mockup for approval before development begins" },
                { day: "Days 4–6", title: "Development", desc: "Build the website, test responsiveness, and integrate the AI chatbot and other features" },
                { day: "Day 7", title: "Launch & Training", desc: "Final review, hosting and domain setup, CMS training, and handover" },
              ].map((s) => (
                <div key={s.day} className="flex gap-4 items-start border border-white/10 bg-white/[0.02] rounded-xl p-5">
                  <span className="px-3 py-1.5 bg-primary/15 text-primary text-xs font-semibold rounded-full shrink-0 mt-0.5 border border-primary/20">{s.day}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{s.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  </div>
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 text-white/50 shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`}>
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

          <div className="max-w-[550px] mx-auto px-6 md:px-16 text-center relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Ready for a Professional Website?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Get a free, no-obligation consultation. We'll help you choose the right package for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="https://wa.me/6285280452688" target="_blank" className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">Chat via WhatsApp</a>
              <a href="mailto:contact@ashari.tech" className="px-8 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all">Email Us</a>
            </div>
            <p className="text-xs text-white/50 mt-6">Serving all of Indonesia — Jakarta, Surabaya, Bandung, Medan, Semarang</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
