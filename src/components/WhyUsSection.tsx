
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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

        {/* LEFT COLUMN - Vertically Centered */}
        <div className="lg:w-[35%] flex flex-col justify-center">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.15em] text-amber-500 uppercase">
              Why Choose Us
            </span>
            <div className="w-8 h-px bg-amber-500" />
          </div>

          {/* heading */}
          <h2 className="text-[38px] md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6">
            Real Plumbers.<br />
            Real Solutions.<br />
            <span className="text-amber-500 font-medium">Real Results.</span>
          </h2>

          {/* body */}
          <p className="text-zinc-400 text-[14px] font-light leading-relaxed max-w-xs">
            We combine experience, quality, and reliability to deliver
            plumbing services you can count on—every time.
          </p>
        </div>

        {/* RIGHT COLUMN — feature grid */}
        <div className="lg:w-[65%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-12 gap-y-10 sm:gap-y-14 self-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-4 sm:mb-6">
                <div className="mb-3 sm:mb-4 scale-90 sm:scale-100 origin-left">{feature.icon}</div>
                <div className="w-5 sm:w-7 h-[1px] bg-zinc-700/80" />
              </div>
              <h3 className="text-white font-bold tracking-[0.05em] sm:tracking-[0.1em] text-xs sm:text-[13px] uppercase mb-2 sm:mb-3 pr-1 sm:pr-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-[14px] font-light leading-relaxed pr-1 sm:pr-4">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Banner ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-14 relative z-20">
        <div className="bg-[#06070a] border border-zinc-800/50 rounded-md px-6 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">

          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* amber accent line */}
            <div className="hidden md:block w-[2px] h-12 bg-amber-600 rounded-full shrink-0" />
            {/* phone icon circle */}
            <div className="shrink-0 w-14 h-14 md:w-12 md:h-12 rounded-full border border-amber-600/30 flex items-center justify-center bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5 text-amber-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg md:text-[16px] font-medium tracking-wide mb-2 md:mb-1">
                Need a plumber you can trust?
              </h3>
              <p className="text-zinc-400 text-sm md:text-[13px] font-light">
                Reliable service. Lasting solutions. Total peace of mind.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="hidden lg:block w-[1px] h-14 bg-zinc-800/60" />
            <button className="w-full md:w-auto shrink-0 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              Schedule Service
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
