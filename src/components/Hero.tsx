import Image from "next/image";
import Link from "next/link";
import { LeadData, getLeadData } from "@/data/leads";

export default function Hero({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-bg.webp"
          alt={leadData.name || "Premium Plumbing Services"}
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/20 to-zinc-950/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center pt-24 pb-20">
        <div className="w-full md:w-2/3 max-w-3xl text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-2 h-2 rounded-full ${leadData.slug === "default" ? "bg-amber-500" : ""} shadow-[0_0_10px_rgba(245,158,11,0.5)]`}
            />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
              {leadData.hero?.badge || "Family-Owned Master Plumbers"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[105px] font-light text-white tracking-tighter leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Honest <br className="hidden md:block" />
            <span 
              style={{ 
                color: leadData.slug === "default" ? "" : "transparent",
                backgroundImage: leadData.slug === "default" ? "" : `linear-gradient(to right, white, ${leadData.primaryColor})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: leadData.slug === "default" ? "" : "transparent"
              }}
              className={`${leadData.slug === "default" ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500" : ""} font-medium`}
            >
              {leadData.hero?.headline?.split(" ").slice(-1)[0] || "Craftsmanship"}
            </span> for <br className="hidden md:block" />
            Your Home.
          </h1>

          <p className="text-lg md:text-xl text-white mb-10 max-w-xl font-light leading-relaxed">
            {leadData.hero?.subheadline || "Reliable, high-end service with a personal touch. We treat every home as if it were our own, delivering master-level plumbing with unwavering integrity."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/contact"
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`px-8 py-4 ${leadData.slug === "default" ? "bg-amber-500 hover:bg-amber-400" : "hover:brightness-110"} text-zinc-950 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ease-out transform hover:-translate-y-1 flex items-center justify-center gap-2`}
            >
              Request Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-transparent border border-zinc-600 text-white hover:border-white hover:bg-white/5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ease-out flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
