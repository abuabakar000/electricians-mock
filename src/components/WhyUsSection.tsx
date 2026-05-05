import React from "react";
import Link from "next/link";

const features = [
  {
    title: "24/7 Emergency Service",
    desc: "Plumbing problems don't wait. We're available 24/7 to handle your emergencies fast.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" className="stroke-amber-500" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    desc: "We are fully licensed and insured professionals, so you can have peace of mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" className="stroke-amber-500" />
      </svg>
    ),
  },
  {
    title: "Upfront Pricing",
    desc: "No hidden fees. No surprises. We provide clear, upfront pricing before any work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10m-2.5-7.5h3.5a1.5 1.5 0 010 3H9.5a1.5 1.5 0 000 3h5" className="stroke-amber-500" />
      </svg>
    ),
  },
  {
    title: "Quality Workmanship",
    desc: "We take pride in our work and use high-quality parts and proven techniques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8zm-8 9c0-3.314 3.582-6 8-6 1.436 0 2.784.321 3.938.88" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13l1 3 3 .5-2.5 2 .5 3-2.5-1.5-2.5 1.5.5-3-2.5-2 3-.5z" className="stroke-amber-500" />
      </svg>
    ),
  },
  {
    title: "Fast Response Time",
    desc: "We value your time. Our team arrives quickly and gets the job done right the first time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zm-4-4H8m-2 0H3m14 0h1v-4h-4m0 0V7H6v8m11-4h3l1.5 3H17" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h3m-4 4h3" className="stroke-amber-500 stroke-2" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    desc: "Your satisfaction is our priority. If you're not happy, we'll make it right—guaranteed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 22H4a2 2 0 01-2-2v-8a2 2 0 012-2h3" className="stroke-amber-500" />
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#0b0c10] relative overflow-hidden">
      {/* ── Main two-column row ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-28 flex flex-col lg:flex-row items-stretch gap-16 lg:gap-20">

        {/* LEFT COLUMN - Vertically Centered */}
        <div className="lg:w-[35%] flex flex-col justify-center text-center lg:text-left">
          {/* eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-amber-500 uppercase">
              Why Choose Us
            </span>
            <div className="w-10 h-px bg-amber-500/40" />
          </div>

          {/* heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-8">
            Real Plumbers.<br />
            Real Solutions.<br />
            <span className="text-amber-500 font-medium">Real Results.</span>
          </h2>

          {/* body */}
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
            We combine decades of experience, master craftsmanship, and unwavering reliability to deliver plumbing services you can count on—every single time.
          </p>
        </div>

        {/* RIGHT COLUMN — feature grid */}
        <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-16 self-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="mb-6">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center mb-4 shadow-xl group-hover:border-amber-500/30 group-hover:bg-amber-500/5 transition-all duration-300">
                    <div className="scale-75 origin-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="w-8 h-[2px] bg-amber-500/40 group-hover:w-12 transition-all duration-500" />
                </div>
                <h3 className="text-white font-bold tracking-[0.1em] text-[13px] uppercase mb-3 leading-snug group-hover:text-amber-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-[13px] font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Banner ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 relative z-20">
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-2xl px-6 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left relative z-10">
            {/* phone icon circle */}
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-amber-500/20 flex items-center justify-center bg-amber-500/5 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-amber-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-light tracking-tight mb-2">
                Need a plumber you can trust?
              </h3>
              <p className="text-zinc-500 text-base md:text-lg font-light max-w-md">
                Experience reliable service and total peace of mind with metropolis master technicians.
              </p>
            </div>
          </div>

          <Link 
            href="/contact"
            className="w-full lg:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-md text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(245,158,11,0.3)] relative z-10"
          >
            Schedule Service
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}
