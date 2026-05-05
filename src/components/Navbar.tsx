"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Immediately close the menu and restore scroll whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close handler that restores scroll immediately, not waiting for React's effect cycle
  const closeMenu = useCallback(() => {
    document.body.style.overflow = "unset";
    setIsMobileMenuOpen(false);
  }, []);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#06070a]/95 backdrop-blur-md border-zinc-800/50 py-4"
            : "bg-transparent border-transparent py-5 lg:py-8"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-white text-2xl font-bold tracking-wider drop-shadow-md">
              LOGO <span className="text-amber-500">HERE</span>
            </span>
          </Link>

          {/* Mobile Header Actions */}
          <div className="flex md:hidden items-center gap-5">
            {/* Mobile Call Button */}
            <Link
              href="tel:+18005550199"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all duration-300 group"
              aria-label="Call Now"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* Hamburger Button */}
            <button
              className="flex flex-col justify-center items-center w-10 h-10 group gap-[6px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-[8px] bg-amber-500" : "group-hover:bg-amber-500"}`} />
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "opacity-0" : "opacity-100 group-hover:bg-amber-500"}`} />
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px] bg-amber-500" : "group-hover:bg-amber-500"}`} />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-10 text-[12px] font-bold tracking-[0.25em] uppercase text-white drop-shadow-md mr-4">
              <Link href="/services" className="group relative py-2 transition-colors duration-300 hover:text-white">
                Services
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
              <Link href="/locations" className="group relative py-2 transition-colors duration-300 hover:text-white">
                Locations
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
              <Link href="/contact" className="group relative py-2 transition-colors duration-300 hover:text-white">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500/40 rounded-md blur-md animate-pulse opacity-75"></div>
              <Link
                href="tel:+18005550199"
                className="relative px-6 py-3 bg-amber-500 hover:bg-amber-400 text-[#06070a] border border-amber-500 rounded-sm text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transform hover:-translate-y-[1px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                (800) 555-0199
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/*
       * ── MOBILE MENU OVERLAY ──
       * KEY FIX: This is a SIBLING of <header>, not a child.
       * Placing it inside the header caused it to inherit the header's
       * scroll-driven padding/bg transitions, causing the glitch.
       * Now it's fully independent at z-[45], below the header's z-[50].
       */}
      <div
        className={`fixed inset-0 bg-[#06070a] z-[45] flex flex-col justify-between md:hidden overflow-hidden transition-opacity duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Gradient blobs */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] transition-transform duration-1000 ${isMobileMenuOpen ? "translate-x-0 translate-y-0" : "translate-x-full -translate-y-full"}`}></div>
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] transition-transform duration-1000 delay-300 ${isMobileMenuOpen ? "translate-x-0 translate-y-0" : "-translate-x-full translate-y-full"}`}></div>

        {/* Top spacer to clear the fixed header bar */}
        <div className="h-24"></div>

        {/* Main Nav Links */}
        <nav className="flex flex-col items-start px-8 gap-8 relative z-10 w-full mt-4">
          {[
            { name: "Services", href: "/services", num: "01" },
            { name: "Locations", href: "/locations", num: "02" },
            { name: "Contact", href: "/contact", num: "03" },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-6 transition-all duration-700 ease-out w-full ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={closeMenu}
            >
              <span className="text-amber-500/50 text-sm font-mono tracking-widest group-hover:text-amber-500 transition-colors w-8">{item.num}</span>
              <span className="text-3xl sm:text-4xl font-bold tracking-[0.2em] uppercase text-white/90 group-hover:text-amber-500 transition-colors duration-300 relative">
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom Info */}
        <div
          className={`px-8 pb-12 relative z-10 transition-all duration-700 delay-500 ease-out flex flex-col gap-6 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="w-full h-px bg-gradient-to-r from-amber-500/30 to-transparent mb-2"></div>
          <div>
            <p className="text-xs text-white/40 tracking-[0.2em] uppercase mb-3">24/7 Service</p>
            <Link href="tel:+18005550199" className="text-xl sm:text-2xl font-light tracking-widest text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              (800) 555-0199
            </Link>
          </div>
          <div>
            <Link href="mailto:service@proplumb.com" className="text-sm font-light tracking-wider text-white/60 hover:text-amber-500 transition-colors">
              service@proplumb.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
