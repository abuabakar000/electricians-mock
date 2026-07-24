import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { LeadData, getLeadData } from "@/data/leads";

export default function Hero({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  const heading = leadData.heroHeading;
  const highlightWord = leadData.highlightWord;
  const subtext = leadData.heroSubtext;
  const words = heading.split(" ");
  
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Background */}
        <Image
          src="/hero-bg.webp"
          alt={leadData.title}
          fill
          priority
          className="hidden md:block object-cover object-center opacity-60 mix-blend-overlay"
        />
        {/* Mobile Background */}
        <Image
          src="/hero-mb.webp"
          alt={leadData.title}
          fill
          priority
          className="block md:hidden object-cover object-center opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/20 to-zinc-950/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center pt-24 pb-20">
        <div className="w-full md:w-2/3 max-w-3xl text-left">


          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-light text-white tracking-tighter leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {words.map((word, i) => (
              <React.Fragment key={i}>
                {word.toLowerCase() === highlightWord?.toLowerCase() ? (
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
                    {word}
                  </span>
                ) : (
                  word
                )}
                {i < words.length - 1 && " "}
                {i === 0 && <br className="hidden md:block" />}
                {i === 2 && <br className="hidden md:block" />}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-white mb-10 max-w-xl font-light leading-relaxed">
            {subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start w-full sm:w-auto">
            <Link
              href={leadData.slug === "default" ? "/schedule" : `/${leadData.slug}/schedule`}
              style={{ 
                backgroundColor: leadData.primaryColor,
                boxShadow: `0 10px 20px -5px ${leadData.primaryColor}33`
              }}
              className="px-8 py-4 text-zinc-950 text-base font-semibold rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              <span>Schedule Now</span>
              <Calendar className="w-5 h-5 stroke-[2]" />
            </Link>
            <Link
              href={leadData.slug === "default" ? "/services" : `/${leadData.slug}/services`}
              className="px-8 py-4 bg-zinc-900/60 border border-zinc-800 text-white hover:bg-zinc-850 hover:border-zinc-700 text-base font-semibold rounded-2xl transition-all duration-300 ease-out transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              <span>Explore</span>
              <ArrowRight className="w-5 h-5 stroke-[2]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
