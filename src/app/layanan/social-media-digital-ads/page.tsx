"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";

export default function SocialMediaPage() {
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "3 million",
      duration: "/month",
      target: "Businesses just starting to build a social media presence",
      features: ["2 platforms (Instagram + 1)", "12 post designs/month", "Content calendar & copywriting", "Basic ads management", "AI creative suggestions", "Monthly performance reports", "Email support"],
    },
    {
      name: "Professional",
      price: "7 million",
      duration: "/month",
      popular: true,
      target: "Businesses seeking significant social media growth",
      features: ["3 platforms of your choice", "20 post designs/month", "4 Reels/TikTok videos", "Meta Ads + Google Ads management", "AI audience optimization & A/B testing", "Biweekly reports & dashboard", "Competitor monitoring", "Priority WhatsApp support"],
    },
    {
      name: "Scale",
      price: "15 million",
      duration: "/month",
      target: "Businesses with ambitious goals and larger ad budgets",
      features: ["All platforms", "Unlimited post designs", "10 videos/month (Reels, TikTok, Shorts)", "Management across all ad platforms", "AI campaign optimization", "Influencer outreach & coordination", "Real-time monitoring & weekly dashboard", "Dedicated account manager & monthly calls"],
    },
  ];

  const faqs = [
    { q: "Are ad costs separate from the management fee?", a: "Yes. The management fee is separate from ad spend, and you control your ad budget directly. We recommend a minimum ad budget of Rp 3–5 million/month." },
    { q: "How does AI audience optimization work?", a: "Our AI analyzes audience data, engagement patterns, and conversions to automatically find audience segments with the lowest cost per acquisition (CPA)." },
    { q: "Who creates the visual content?", a: "Our in-house design team creates all visual content. We follow your brand guidelines and get your approval before anything is posted." },
    { q: "Can I focus on just one platform?", a: "Yes. We can customize a package for a single platform. Contact us for an offer tailored to your needs." },
    { q: "What is the minimum contract term?", a: "There is a three-month minimum commitment to give the strategy enough time to show results. After that, you can cancel with two weeks' notice." },
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
                  AI-OPTIMIZED
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Social Media & Digital Ads Services
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
              Manage social media and digital ads with AI optimization — content creation, community management, and precise ad targeting for maximum ROI
            </p>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Choose Your Social Media Package</h2>
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
            <p className="text-xs text-white/50 text-center mt-6">All prices exclude 11% VAT. Ad spend is separate. Three-month minimum commitment.</p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">AI-Powered Targeting for a More Efficient Budget</h2>
              <p className="text-sm text-white/60 leading-relaxed">Our AI analyzes thousands of data points to find audience segments with the highest conversion rates. On average, clients see a <strong className="text-white">30% improvement in ROAS</strong> after three months of optimization.</p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Platforms
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Platforms We Manage
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
              {[
                { name: "Instagram", desc: "Feed, Stories, Reels" },
                { name: "TikTok", desc: "Video content & ads" },
                { name: "Facebook", desc: "Page management & ads" },
                { name: "LinkedIn", desc: "B2B & professional" },
                { name: "Google Ads", desc: "Search & Display" },
                { name: "YouTube", desc: "Video & Shorts ads" },
              ].map((p) => (
                <div key={p.name} className="border border-white/10 bg-white/[0.02] rounded-xl p-4 text-center hover:border-primary/40 hover:bg-primary/[0.04] transition-all">
                  <h3 className="text-white font-semibold text-sm mb-1">{p.name}</h3>
                  <p className="text-xs text-white/60">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Core Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "AI Audience Targeting", desc: "Precise targeting based on behavior, interests, and lookalike audiences to lower CPA" },
                { title: "Creative Design", desc: "Visual content consistent with your brand identity — feeds, stories, carousels, and video" },
                { title: "Ads Management", desc: "Campaign setup, monitoring, and optimization across Meta, Google, TikTok, and more" },
                { title: "Performance Dashboard", desc: "Real-time metrics for reach, engagement, conversions, ROAS, and cost per result" },
                { title: "Community Management", desc: "Respond to comments, manage DMs, and build relationships with your audience" },
                { title: "Growth Strategy", desc: "Content planning and ad strategy aligned with your business goals" },
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
                { step: "Onboarding", desc: "Goals, brand guidelines, platform access" },
                { step: "Strategy", desc: "Content calendar, ads plan, KPI targets" },
                { step: "Execution", desc: "Content creation, posting, ads & community" },
                { step: "Optimize", desc: "Data analysis, A/B testing, improvement" },
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
              Ready to Grow Your Social Media?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Get a free consultation, social media audit, and strategy recommendations tailored to your business.
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
