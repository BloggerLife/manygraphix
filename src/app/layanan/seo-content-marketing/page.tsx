"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";

export default function SEOPage() {
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "3 million",
      duration: "/month",
      target: "New businesses beginning to focus on SEO",
      features: ["10 keywords target", "AI keyword research", "On-page optimization", "Technical SEO audit", "Google Search Console setup", "Monthly reports", "Basic competitor analysis", "Email support"],
    },
    {
      name: "Growth",
      price: "6 million",
      duration: "/month",
      popular: true,
      target: "Businesses seeking significant organic growth",
      features: ["25 target keywords", "Full on-page & off-page optimization", "4 articles/month + AI enhancement", "10 quality backlinks/month", "Biweekly reports & dashboard", "Detailed competitor analysis", "Priority WhatsApp support"],
    },
    {
      name: "Scale",
      price: "12 million",
      duration: "/month",
      target: "Aggressive goals in a competitive market",
      features: ["Unlimited target keywords", "Complete technical SEO", "10 articles/month + AI optimization", "25 quality backlinks/month", "Local SEO & schema markup", "Weekly dashboard & strategy calls", "Dedicated SEO specialist", "Monthly strategy review"],
    },
  ];

  const faqs = [
    { q: "How long does SEO take to show results?", a: "Initial results usually appear within 1–2 months. Significant improvement typically takes 3–6 months, depending on keyword competition and your website's current state." },
    { q: "How is AI keyword research different from standard tools?", a: "Our AI analyzes search intent, semantic keywords, and overlooked opportunities. The result is twice the topic coverage of traditional SEO tools." },
    { q: "Do you guarantee a #1 ranking?", a: "No one can guarantee a #1 ranking. We focus on best practices and continuous improvement, which have delivered results for 95% of our clients." },
    { q: "Are articles included?", a: "Yes. Growth includes 4 articles/month, and Scale includes 10 articles/month. All are written by professional writers and optimized with AI." },
    { q: "Can I pause or cancel the service?", a: "Yes, with two weeks' notice. There is a three-month minimum commitment to give SEO enough time to show results." },
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
                  AI-POWERED
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SEO & Content Marketing Services
            </h1>

            {/* Subtitle */}
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6"
              style={{ textShadow: "0 0 20px rgba(37, 99, 235, 0.8), 0 0 40px rgba(37, 99, 235, 0.4)" }}
            >
              Starting at Rp 3 million/month
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Improve your Google rankings with an AI-powered SEO strategy — automated keyword research, content optimization, and quality link building for sustainable organic growth
            </p>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Choose Your SEO Package</h2>
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
            <p className="text-xs text-white/50 text-center mt-6">All prices exclude 11% VAT. Three-month minimum commitment.</p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">AI-Powered Keyword Discovery</h2>
              <p className="text-sm text-white/60 leading-relaxed">Our AI identifies keyword opportunities your competitors miss, analyzes search intent, and delivers <strong className="text-white">twice the topic coverage</strong> of traditional SEO tools.</p>
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
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Services We Provide
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "AI Keyword Research", desc: "Uncover hidden keyword opportunities with AI, including long-tail and semantic keywords" },
                { title: "Content Creation & AI Optimization", desc: "Articles written by professional writers and optimized with AI for relevance, readability, and SEO" },
                { title: "Quality Link Building", desc: "Relevant, high-quality backlinks to strengthen your domain authority" },
                { title: "Technical SEO Audit", desc: "Comprehensive audit of site speed, crawlability, mobile-friendliness, and structured data" },
                { title: "Transparent Reporting", desc: "Real-time dashboard with ranking and traffic metrics plus actionable insights" },
                { title: "Competitor Analysis", desc: "Analyze competitor strategies to identify gaps and opportunities" },
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
                Our Process
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "Audit", desc: "Analyze your website, competitors, and keywords" },
                { step: "Strategy", desc: "Build an SEO roadmap and prioritize targets" },
                { step: "Execute", desc: "Implement the strategy and create content" },
                { step: "Optimize", desc: "Monitor performance and continuously improve" },
              ].map((s, i) => (
                <div key={s.step} className="text-center border border-white/10 bg-white/[0.02] rounded-xl p-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full font-bold mx-auto mb-3 shadow-[0_4px_15px_rgba(37,99,235,0.3)]">{i + 1}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{s.step}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
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
              Ready to Rank #1 on Google?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Get a free SEO audit for your website. We'll show you opportunities you can optimize right away.
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
