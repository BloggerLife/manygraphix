import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import Particles from "@/components/Particles";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  "ashari-tech-enterprise-software-development-comparison": {
    slug: "ashari-tech-enterprise-software-development-comparison",
    title: "Enterprise-Grade AI Solutions for Indonesian Businesses: The Ashari Tech Advantage",
    description: "Discover how growing Indonesian businesses can access enterprise-quality AI and software development without enterprise pricing.",
    category: "Business Strategy",
    readTime: "12 min read",
    date: "January 18, 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          Choosing a software development partner is a critical business decision. This article explores
          three options available to Indonesian businesses and why specialized AI firms are a practical
          choice for many companies.
        </p>

        <h2>The Enterprise Software Development Landscape</h2>
        <p>
          Indonesian businesses currently have several options for their software development needs:
        </p>

        <h3>1. Global IT Service Giants</h3>
        <p>
          Companies such as Accenture, Deloitte, IBM, and TCS offer comprehensive services backed by
          a global track record. However, their budgets are often beyond the reach of Indonesian SMEs.
        </p>

        <h3>2. Platform-Specific Development Services</h3>
        <p>
          Official Azure, Salesforce, or AWS partners focus on specific ecosystems. They are a good fit
          if you are already committed to one platform, but may be less flexible for custom requirements.
        </p>

        <h3>3. Specialized AI Development Firms</h3>
        <p>
          Companies like Ashari Tech fall into this category, offering enterprise-grade technical
          capabilities with startup agility and more accessible pricing.
        </p>

        <h2>Why Ashari Tech: Six Core Advantages</h2>

        <h3>Enterprise-Grade Technical Capabilities, Startup-Level Agility</h3>
        <p>
          We combine the technical expertise of an enterprise consultancy with the speed and flexibility
          of a startup. There is no unnecessary bureaucracy — you speak directly with the engineers
          working on your project.
        </p>

        <h3>Production-Ready AI Systems</h3>
        <p>
          Brainy Buddy is one example of our production AI systems, serving thousands of users every day.
          It is not a prototype or demo — it is a proven system running in a real-world environment.
        </p>

        <h3>Transparent, Flexible Pricing</h3>
        <p>
          Our typical price ranges:
        </p>
        <ul>
          <li><strong>MVP Development:</strong> Rp 15–50 million</li>
          <li><strong>Production v1.0:</strong> Rp 50–200 million</li>
        </ul>
        <p>
          Clients typically save 20–30% compared with global consultancies, with faster delivery times.
        </p>

        <h3>Understanding Indonesian Business Requirements</h3>
        <p>
          We understand the local business context — from integrations with Indonesian banking systems
          and compliance requirements to how Indonesian users prefer to interact with AI.
        </p>

        <h3>Scalable Architecture Design</h3>
        <p>
          Case study: We designed an e-commerce client's system for 5,000 orders/day. During a major
          campaign, it handled 15,000 orders — with no downtime or emergency scaling.
        </p>

        <h3>Integration Expertise</h3>
        <p>
          We have experience integrating AI solutions with a wide range of systems, from legacy
          ERP platforms to modern cloud infrastructure.
        </p>

        <h2>Selection Framework</h2>
        <p>
          Use this weighted scorecard to evaluate a development partner:
        </p>
        <ul>
          <li><strong>Technical Capabilities (30%):</strong> Stack expertise, AI/ML track record</li>
          <li><strong>Business Alignment (25%):</strong> Industry experience, size fit</li>
          <li><strong>Communication & Process (20%):</strong> Responsiveness, project management</li>
          <li><strong>Support & Longevity (15%):</strong> Post-launch support, company stability</li>
          <li><strong>Innovation & Future-Proofing (10%):</strong> Tech adoption, scalability</li>
        </ul>

        <h2>When Ashari Tech is NOT the Right Choice</h2>
        <p>
          We believe in honest assessments. Ashari Tech may not be the right choice if:
        </p>
        <ul>
          <li>You need a vendor with a presence in multiple countries for compliance</li>
          <li>Your project requires 50+ developers at the same time</li>
          <li>You are heavily invested in one platform and need a certified partner</li>
          <li>Your budget is unlimited and you prefer the brand recognition of a Big Four consultancy</li>
        </ul>

        <h2>Ready to Discuss Your Project?</h2>
        <p>
          We offer a free 60-minute strategy consultation — no sales pressure, just a technical discussion
          to understand your needs. Even if you ultimately choose another vendor, you will leave
          with valuable insights.
        </p>
      </>
    ),
  },
  "5-proses-bisnis-otomasi-ai": {
    slug: "5-proses-bisnis-otomasi-ai",
    title: "5 Business Processes You Can Automate with AI (Without a Big Budget)",
    description: "Discover five operational processes that are ideal for AI automation without requiring a major investment.",
    category: "AI Automation",
    readTime: "8 min read",
    date: "January 10, 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          AI automation does not have to be expensive. Here are five business processes you can
          automate with a reasonable investment and a fast return.
        </p>

        <h2>1. Customer Service with an AI Chatbot</h2>
        <p>
          Modern AI chatbots can handle 60–80% of routine customer questions — product inquiries,
          order status, and FAQs. Your customer service team can focus on cases that truly need a human touch.
        </p>

        <h2>2. Document Processing</h2>
        <p>
          OCR and AI can accurately extract data from invoices, receipts, and forms. No more
          time-consuming, error-prone manual data entry.
        </p>

        <h2>3. Lead Qualification</h2>
        <p>
          AI can score and qualify leads based on behavior, engagement, and fit with your ideal
          customer profile. Your sales team can focus on the leads most likely to convert.
        </p>

        <h2>4. Inventory Forecasting</h2>
        <p>
          Machine learning can predict demand based on historical data, seasonal patterns,
          and external factors, helping reduce stockouts and overstock.
        </p>

        <h2>5. Content Categorization</h2>
        <p>
          AI can automatically categorize, tag, and organize content — from email triage to
          document management. Spend less time searching and organizing.
        </p>

        <h2>Getting Started</h2>
        <p>
          Start with the process that causes the most pain. Prove its value, then scale to other
          processes. Contact us for a free assessment.
        </p>
      </>
    ),
  },
  "roi-realistis-implementasi-ai": {
    slug: "roi-realistis-implementasi-ai",
    title: "Realistic ROI from AI Implementation for SMEs",
    description: "How long does it take to break even on AI automation? Real-world implementation data from businesses.",
    category: "Business Strategy",
    readTime: "10 min read",
    date: "January 9, 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          Many AI vendors promise fantastic ROI. Let's look at realistic data from actual
          implementations at Indonesian SMEs.
        </p>

        <h2>Typical ROI Timeline</h2>
        <p>
          Based on our experience:
        </p>
        <ul>
          <li><strong>AI Chatbot:</strong> Break-even in 3–6 months</li>
          <li><strong>Document Processing:</strong> Break-even in 4–8 months</li>
          <li><strong>Predictive Analytics:</strong> Break-even in 6–12 months</li>
        </ul>

        <h2>Factors That Affect ROI</h2>
        <p>
          ROI depends on transaction volume, current manual effort, and how well-defined the process is.
          The more repetitive and high-volume the work, the faster the return.
        </p>

        <h2>Hidden Costs to Consider</h2>
        <p>
          Do not overlook training time, change management, and ongoing maintenance. Realistic
          planning is better than optimistic projections.
        </p>
      </>
    ),
  },
  "chatbot-ai-vs-chatbot-biasa": {
    slug: "chatbot-ai-vs-chatbot-biasa",
    title: "AI Chatbots vs. Traditional Chatbots: What's the Difference?",
    description: "A clear, accessible explanation of the differences between rule-based and AI-powered chatbots.",
    category: "AI Technology",
    readTime: "5 min read",
    date: "January 8, 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          Not all chatbots are the same. Let's explore the fundamental differences between
          rule-based and AI-powered chatbots.
        </p>

        <h2>Rule-Based Chatbot</h2>
        <p>
          These use predefined decision trees, so users must follow a specific flow.
          They work well for simple use cases with clear paths.
        </p>

        <h2>AI-Powered Chatbot</h2>
        <p>
          These use NLP (Natural Language Processing) to understand user intent. They can handle
          more varied questions and complex context.
        </p>

        <h2>Which Is Right for Your Business?</h2>
        <p>
          Rule-based: limited budget, simple use cases, predictable flows.
          <br />
          AI-powered: high volume, varied questions, need for natural conversations.
        </p>
      </>
    ),
  },
};

const categoryColors: Record<string, string> = {
  "Business Strategy": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Automation": "bg-green-500/10 text-green-400 border-green-500/20",
  "AI Technology": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="bg-black min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0">
          <Particles
            color="#2563EB"
            particleCount={100}
            speed={0.5}
            connectDistance={150}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-16 pointer-events-none">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors pointer-events-auto"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full border text-xs ${categoryColors[post.category]}`}
            >
              {post.category}
            </span>
            <span className="text-white/40 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 relative">
        <div className="max-w-[800px] mx-auto px-6 md:px-16">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-white/70 prose-ul:my-6 prose-li:my-2 prose-strong:text-white">
            {post.content}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-[800px] mx-auto px-6 md:px-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need AI Consulting for Your Business?
            </h2>
            <p className="text-white/60 mb-8">
              Discuss your specific business needs with our expert team. Free, with no commitment.
            </p>
            <a
              href="https://wa.me/6285280452688"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
            >
              Free Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
