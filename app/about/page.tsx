import Link from "next/link";
import { ArrowRight, Eye, Handshake, ShieldCheck, Target } from "lucide-react";
export const metadata = {
  title: "About ManyGraphix | IT Solutions",
  description:
    "Learn about ManyGraphix and our approach to computer networking, systems and IT support.",
};
const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We value dependable solutions that help your technology perform consistently.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We listen, communicate clearly and work alongside you to understand your needs.",
  },
  {
    icon: Target,
    title: "Practical thinking",
    text: "We focus on useful, right-sized solutions rather than complexity for its own sake.",
  },
];
export default function About() {
  return (
    <main className="pt-[82px]">
      <section className="bg-[#082f78] py-24 text-white">
        <div className="container">
          <span className="eyebrow !text-blue-300">Who we are</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Technology support with a{" "}
            <span className="text-blue-300">human approach.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We're ManyGraphix — focused on helping businesses and individuals
            get more from their technology through networking, computer systems
            and IT support.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">About ManyGraphix</span>
            <h2 className="section-title">
              Helping you stay connected and productive.
            </h2>
            <p className="section-copy">
              Technology is an essential part of how modern organisations
              communicate, serve customers and get work done. When it isn't set
              up properly or stops working, everything can feel harder.
            </p>
            <p className="section-copy mt-4">
              ManyGraphix focuses on the foundations that keep your technology
              running: well-planned computer networks, dependable computer
              systems and responsive IT support. Our aim is to make technology
              less stressful and more useful, with clear communication at every
              step.
            </p>
            <Link href="/#contact" className="btn-primary mt-8">
              Talk to ManyGraphix <ArrowRight size={17} />
            </Link>
          </div>
          <div className="about-image min-h-[430px] rounded-2xl" />
        </div>
      </section>
      <section className="section-pad bg-[var(--surface)]">
        <div className="container">
          <span className="eyebrow">What guides us</span>
          <h2 className="section-title">Our mission, vision & values.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#082f78] p-8 text-white">
              <Target className="text-blue-300" size={30} />
              <h3 className="mt-5 text-2xl font-extrabold">Our mission</h3>
              <p className="mt-3 leading-7 text-slate-300">
                To provide accessible, practical and dependable IT solutions
                that help businesses and individuals work with confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <Eye className="text-[var(--brand)]" size={30} />
              <h3 className="mt-5 text-2xl font-extrabold">Our vision</h3>
              <p className="mt-3 leading-7 text-slate-500">
                To be a trusted technology partner known for making reliable IT
                support and solutions easier to access.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="service-card">
                <div className="icon-tile">
                  <v.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{v.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container rounded-3xl bg-[#e9f5fa] px-7 py-12 text-center md:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Need a technology partner?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
            Let's talk about your network, computer systems or IT support
            requirements.
          </p>
          <Link href="/#contact" className="btn-primary mt-7">
            Contact us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
