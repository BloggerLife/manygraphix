"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];
export default function Header() {
  const pathname = usePathname();
  const [inHero, setInHero] = useState(pathname === "/");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    const updateHeroState = () => {
      const bounds = hero?.getBoundingClientRect();
      setInHero(Boolean(bounds && bounds.top < 82 && bounds.bottom > 0));
    };
    updateHeroState();
    window.addEventListener("scroll", updateHeroState, { passive: true });
    window.addEventListener("resize", updateHeroState);
    return () => {
      window.removeEventListener("scroll", updateHeroState);
      window.removeEventListener("resize", updateHeroState);
    };
  }, [pathname]);
  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-500 ${inHero ? "bg-white/10 backdrop-blur-xl border-b border-white/20" : "bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(9,39,65,.08)]"}`}
    >
      <div className="container flex h-[82px] items-center justify-between">
        <Link
          href="/#home"
          className="flex shrink-0 items-center rounded-lg bg-white px-2 py-1"
          aria-label="ManyGraphix home"
        >
          <Image
            src="/manygraphix-logo.png"
            alt="ManyGraphix — networks, systems, support"
            width={260}
            height={98}
            priority
            className="h-auto w-[188px] sm:w-[220px]"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${inHero ? "text-white/85 hover:text-blue-200" : "text-slate-700 hover:text-[var(--brand)]"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary !py-3 !px-5">
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`md:hidden relative z-20 grid h-11 w-11 place-items-center rounded-xl ${inHero ? "text-white bg-white/10" : "text-[var(--ink)] bg-slate-100"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl"
          >
            <div className="container flex flex-col py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block border-b border-slate-100 py-4 font-semibold text-slate-700"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                onClick={() => setOpen(false)}
                href="/#contact"
                className="btn-primary mt-4"
              >
                Let's talk <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
