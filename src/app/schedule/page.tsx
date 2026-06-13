import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchedulerWidget from "@/components/SchedulerWidget";
import { getLeadData } from "@/data/leads";

export const metadata = {
  title: "Schedule Service | ProElectric",
  description: "Schedule your professional electrical service online. Select a convenient date and time slot for our master technicians to visit your property.",
};

export default function SchedulePage() {
  const leadData = getLeadData();
  const primaryColor = leadData.slug === "default" ? "#f59e0b" : leadData.primaryColor;

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src="/contact-hero-v3.webp"
              fill
              alt="Schedule Electrical Service"
              className="object-cover object-center opacity-20 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div 
                style={{ backgroundColor: primaryColor }}
                className="w-12 h-[1px] opacity-50" 
              />
              <span 
                style={{ color: primaryColor }}
                className="text-[11px] uppercase tracking-[0.4em] font-bold"
              >
                Get In Touch
              </span>
              <div 
                style={{ backgroundColor: primaryColor }}
                className="w-12 h-[1px] opacity-50" 
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
              Schedule <br className="hidden md:block" />
              <span 
                style={{
                  background: "linear-gradient(to right, #fef3c7, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                className="font-medium text-transparent bg-clip-text"
              >
                Professional Service.
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Ready to experience the {leadData.title} difference? Contact us today to secure your priority appointment with our master technicians.
            </p>
          </div>
        </section>

        {/* ── SCHEDULER WIDGET ── */}
        <SchedulerWidget leadData={leadData} />
      </main>
      <Footer leadData={leadData} />
    </>
  );
}
