import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#061f50] text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/#home" className="text-2xl font-extrabold">
            Many<span className="text-blue-300">Graphix</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Practical technology solutions that keep your people, systems and
            business connected.
          </p>
          <a
            href={
              process.env.NEXT_PUBLIC_FACEBOOK_URL ||
              "https://www.facebook.com/share/1FCqpgn6wW/?mibextid=wwXIfr"
            }
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <i className="fa-brands fa-facebook text-xl" aria-hidden="true" />
          </a>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Explore</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link className="footer-link" href="/#home">
              Home
            </Link>
            <Link className="footer-link" href="/#services">
              Our services
            </Link>
            <Link className="footer-link" href="/about">
              About ManyGraphix
            </Link>
            <Link className="footer-link" href="/#contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Our services</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link className="footer-link" href="/#networking">
              Computer networking
            </Link>
            <Link className="footer-link" href="/#systems">
              Computer systems
            </Link>
            <Link className="footer-link" href="/#support">
              IT support
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Get in touch</h3>
          <div className="flex flex-col gap-4 text-sm text-slate-400">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@manygraphix.com"}`}
              className="flex gap-3 hover:text-white"
            >
              <Mail size={17} className="shrink-0 text-blue-300" />
              {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                "info@manygraphix.com"}
            </a>
            <p className="flex gap-3">
              <Phone size={17} className="shrink-0 text-blue-300" />
              {process.env.NEXT_PUBLIC_COMPANY_PHONE || "+263 77 123 4567"}
            </p>
            <p className="flex gap-3">
              <MapPin size={17} className="shrink-0 text-blue-300" />
              Harare, Zimbabwe
            </p>
          </div>
          <Link
            href="/#contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300"
          >
            Send an enquiry <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} ManyGraphix. All rights reserved.
          </span>
          <span>Technology made dependable.</span>
        </div>
      </div>
    </footer>
  );
}
