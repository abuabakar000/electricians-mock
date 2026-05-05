import Image from "next/image";
import Link from "next/link";
import { 
  Waves, 
  Droplets, 
  Flame, 
  Wrench, 
  Bath, 
  ArrowDownToLine 
} from "lucide-react";

const services = [
  {
    title: "Drain Cleaning",
    desc: "Clogged drains don't stand a chance. We clear blockages fast and keep your pipes flowing smoothly.",
    icon: <Waves strokeWidth={1.5} className="w-8 h-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
  },
  {
    title: "Leak Repair",
    desc: "From minor leaks to major issues, we find the source and fix it right the first time.",
    icon: <Droplets strokeWidth={1.5} className="w-8 h-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
  },
  {
    title: "Water Heater Services",
    desc: "Installation, repair, and maintenance for all types of water heaters. Hot water, always.",
    icon: <Flame strokeWidth={1.5} className="w-8 h-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
  },
  {
    title: "Pipe Repair & Replacement",
    desc: "Old, damaged, or corroded pipes? We replace them the right way—built to last.",
    icon: <Wrench strokeWidth={1.5} className="w-8 h-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
  },
  {
    title: "Fixture Installation",
    desc: "Sinks, faucets, toilets, and more—installed with precision and built for performance.",
    icon: <Bath strokeWidth={1.5} className="w-8 h-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
  },
  {
    title: "Sump Pump Services",
    desc: "Protect your home from water damage with reliable sump pump solutions.",
    icon: <ArrowDownToLine strokeWidth={1.5} className="w-8 h-8 text-amber-500 transition-transform duration-500 group-hover:scale-110" />
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#07090c] pt-20 pb-20 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/10 via-[#07090c] to-[#07090c] pointer-events-none z-0"></div>

      {/* Top Right Absolute Image */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-[400px] lg:h-[600px] z-0 pointer-events-none hidden md:block">
        {/* Gradients to blend the image into the background seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090c] via-[#07090c]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090c] via-transparent to-[#07090c] z-10"></div>
        
        <Image 
          src="/services-hero.png" 
          alt="Premium Plumbing Fixtures"
          fill
          className="object-cover object-right grayscale-[15%] contrast-125"
          priority
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Row */}
        <div className="mb-14 max-w-2xl relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-amber-500 uppercase">Our Services</span>
            <div className="w-8 h-px bg-amber-500"></div>
          </div>
          
          <h2 className="text-[38px] md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6">
            Premium Plumbing <br />
            <span className="text-amber-500 font-medium">Services</span> Tailored to You.
          </h2>
          
          <p className="text-zinc-400 text-[15px] font-light leading-relaxed max-w-lg">
            From quick fixes to full installations, we provide reliable, 
            high-quality plumbing solutions with unmatched attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-6 md:p-8 hover:bg-[#0f1116] hover:-translate-y-2 hover:border-amber-500/30 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] transition-all duration-500 ease-out flex flex-col h-full overflow-hidden z-10"
            >
              {/* Ambient Hover Glow inside the tile */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

              {/* Large Faint Watermark Icon */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-700 pointer-events-none group-hover:scale-110 group-hover:-rotate-12">
                <div className="w-48 h-48 text-zinc-400 group-hover:text-amber-500 transition-colors duration-700 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[0.8]">
                  {service.icon}
                </div>
              </div>

              <div className="flex flex-col relative z-10 h-full">
                <div className="shrink-0 w-14 h-14 rounded-full border border-zinc-700/50 flex items-center justify-center bg-zinc-900/50 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-colors duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold tracking-widest text-[13px] uppercase mb-3">
                  {service.title}
                </h3>
                <div className="w-8 h-[2px] bg-amber-500 mb-4 group-hover:w-12 transition-all duration-500"></div>
                <p className="text-zinc-400 text-[15px] font-light leading-relaxed mt-auto">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link 
            href="/services" 
            className="flex items-center gap-4 px-8 py-4 border border-zinc-700/80 rounded hover:border-amber-500 text-white hover:text-amber-500 transition-colors duration-300"
          >
            <div className="grid grid-cols-3 gap-0.5 w-4 h-4 text-amber-500">
               {[...Array(9)].map((_, i) => (
                 <div key={i} className="bg-current w-full h-full rounded-[1px]"></div>
               ))}
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase mt-px">View All Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-500">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
