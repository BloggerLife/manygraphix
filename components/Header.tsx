"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{label:"Home",href:"/#home"},{label:"Services",href:"/#services"},{label:"About",href:"/about"},{label:"Contact",href:"/#contact"}];
export default function Header(){
  const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>window.innerHeight*.72);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <header className={`fixed z-50 top-0 left-0 w-full transition-all duration-500 ${scrolled?"bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(9,39,65,.08)]":"bg-transparent"}`}>
    <div className="container flex h-[82px] items-center justify-between">
      <Link href="/#home" className="flex shrink-0 items-center rounded-lg bg-white px-2 py-1 shadow-sm" aria-label="ManyGraphix home"><Image src="/manygraphix-logo.png" alt="ManyGraphix — networks, systems, support" width={260} height={98} priority className="h-auto w-[188px] sm:w-[220px]" /></Link>
      <nav className="hidden md:flex items-center gap-9">{links.map(l=><Link key={l.label} href={l.href} className={`text-sm font-semibold transition-colors ${scrolled?"text-slate-700 hover:text-[var(--brand)]":"text-white/85 hover:text-blue-200"}`}>{l.label}</Link>)}<Link href="/#contact" className="btn-primary !py-3 !px-5">Let's talk <ArrowUpRight size={16}/></Link></nav>
      <button onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open} className={`md:hidden relative z-20 grid h-11 w-11 place-items-center rounded-xl ${scrolled?"text-[var(--ink)] bg-slate-100":"text-white bg-white/10"}`}>{open?<X/>:<Menu/>}</button>
    </div>
    <AnimatePresence>{open&&<motion.nav initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.25}} className="md:hidden overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl"><div className="container flex flex-col py-4">{links.map((l,i)=><motion.div key={l.label} initial={{x:-12,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*.04}}><Link onClick={()=>setOpen(false)} href={l.href} className="block border-b border-slate-100 py-4 font-semibold text-slate-700">{l.label}</Link></motion.div>)}<Link onClick={()=>setOpen(false)} href="/#contact" className="btn-primary mt-4">Let's talk <ArrowUpRight size={16}/></Link></div></motion.nav>}</AnimatePresence>
  </header>
}
