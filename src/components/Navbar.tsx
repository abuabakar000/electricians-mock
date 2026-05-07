"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 1. Force close on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // 2. Simple but effective scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  // 3. Header background trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#06070a]/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-[110]" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-white text-2xl font-bold tracking-wider">
              PRO<span className="text-amber-500">PLUMB</span>
            </span>
          </Link>

          {/* Mobile Header Actions */}
          <div className="md:hidden flex items-center gap-4 relative z-[110]">
            {/* Mobile Call Button */}
            <Link
              href="tel:+18005550199"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all duration-300"
              aria-label="Call Now"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </Link>

            <button
              className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 transform ${isMobileMenuOpen ? "rotate-45 translate-y-[8px] bg-amber-500" : ""}`} />
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px] bg-amber-500" : ""}`} />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex gap-10 text-[12px] font-bold tracking-[0.25em] uppercase text-white">
              <Link href="/services" className="relative group hover:text-amber-500 transition-colors">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/locations" className="relative group hover:text-amber-500 transition-colors">
                Locations
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="relative group hover:text-amber-500 transition-colors">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <Link
              href="tel:+18005550199"
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 rounded-sm text-sm font-bold tracking-[0.15em] uppercase transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)]"
            >
              (800) 555-0199
            </Link>
          </nav>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 bg-[#06070a] z-[90] md:hidden transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Aesthetic Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

        <div className="flex flex-col justify-center items-center h-full relative z-10 px-8">
          {/* Main Navigation */}
          <nav className="flex flex-col items-center gap-12 w-full mb-20">
            {[
              { name: "Services", href: "/services", num: "01" },
              { name: "Locations", href: "/locations", num: "02" },
              { name: "Contact", href: "/contact", num: "03" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center justify-center transition-all duration-700 delay-[${100 + index * 50}ms] ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute right-full mr-4 text-amber-500/40 text-xs font-mono font-bold tracking-widest group-hover:text-amber-500 transition-colors whitespace-nowrap">
                    [{item.num}]
                  </span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-white group-hover:text-amber-500 transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Contact Details */}
          <div className={`flex flex-col items-center gap-6 w-full transition-all duration-700 delay-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-12 h-[1px] bg-amber-500/40"></div>
            
            <div className="flex flex-col items-center gap-2">
              <Link href="tel:+18005550199" className="text-3xl font-light text-amber-500 tracking-widest hover:text-white transition-colors">
                (800) 555-0199
              </Link>
              <Link href="mailto:contact@proplumb.com" className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase hover:text-amber-500 transition-colors">
                contact@proplumb.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
