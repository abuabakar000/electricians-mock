import React from "react";
import Image from "next/image";
import MapSection from "@/components/MapSection";
import CtaSection from "@/components/CtaSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLeadData } from "@/data/leads";
import { MapPin, Navigation, Building2, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  return {
    title: `Locations | ${leadData.name}`,
    description: `View the service areas and locations covered by ${leadData.name}.`,
    icons: {
      icon: leadData.logoUrl || "/logo.png",
    }
  };
}

const locations = [
  {
    name: "Metropolis Downtown",
    desc: "24/7 rapid response for high-rise commercial and luxury residential properties in the downtown core.",
    icon: <Building2 strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Commercial Plumbing", "High-Rise Specialists", "Emergency Response"]
  },
  {
    name: "North Hills Estates",
    desc: "Complete plumbing installations, architectural pipe routing, and premium fixture upgrades.",
    icon: <Home strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Luxury Fixtures", "Custom Remodels", "Water Filtration"]
  },
  {
    name: "Westside Valley",
    desc: "Expert leak detection, tankless water heater installations, and comprehensive home diagnostics.",
    icon: <Navigation strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Leak Detection", "Tankless Systems", "Routine Maintenance"]
  },
  {
    name: "Southpoint County",
    desc: "Advanced sewer line diagnostics, trenchless pipe repair, and reliable local plumbing solutions.",
    icon: <MapPin strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Sewer Diagnostics", "Trenchless Repair", "Sump Pumps"]
  }
];

export default async function LocationsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);

  // Use lead color for icons in the locations list
  const dynamicLocations = locations.map(loc => ({
    ...loc,
    icon: React.cloneElement(loc.icon as React.ReactElement<any>, { 
      style: { color: leadData.slug === "default" ? "" : leadData.primaryColor },
      className: `w-6 h-6 ${leadData.slug === "default" ? "text-amber-500" : ""}`
    })
  }));

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/locations-hero.png"
            fill
            alt="Cityscape Service Areas"
            className="object-cover object-center opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
            <span 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`text-[11px] uppercase tracking-[0.4em] ${leadData.slug === "default" ? "text-amber-500" : ""} font-bold`}
            >
              Our Locations
            </span>
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
            Expert Service. <br className="hidden md:block" />
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
              Local Presence.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            We bring our high-end, master plumbing services directly to your doorstep across the entire metropolitan region and surrounding counties.
          </p>
        </div>
      </section>

      {/* ── COVERAGE AREAS GRID ── */}
      <section className="py-24 relative z-10 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {dynamicLocations.map((loc, idx) => (
              <div 
                key={idx} 
                style={{ 
                  "--hover-border": leadData.slug === "default" ? "" : `${leadData.primaryColor}4d`,
                  "--hover-shadow": leadData.slug === "default" ? "" : `0 20px 40px -15px ${leadData.primaryColor}26`
                } as any}
                className={`group relative bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-8 hover:bg-[#0f1116] hover:-translate-y-2 ${leadData.slug === "default" ? "hover:border-amber-500/30 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]" : "hover:border-[var(--hover-border)] hover:shadow-[var(--hover-shadow)]"} transition-all duration-500 ease-out flex flex-col h-full overflow-hidden`}
              >
                {/* Ambient Hover Glow */}
                <div 
                  style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`absolute top-0 right-0 w-48 h-48 ${leadData.slug === "default" ? "bg-amber-500/10" : "opacity-[0.1]"} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} 
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-5 mb-6">
                    <div 
                      style={{ 
                        borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}66`,
                        backgroundColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}0d`
                      }}
                      className={`shrink-0 w-14 h-14 rounded-full border border-zinc-700/50 flex items-center justify-center bg-zinc-900/50 ${leadData.slug === "default" ? "group-hover:border-amber-500/40 group-hover:bg-amber-500/5" : ""} transition-colors duration-500`}
                    >
                      {loc.icon}
                    </div>
                    <div>
                      <h3 
                        style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                        className={`text-white text-xl font-light tracking-wide ${leadData.slug === "default" ? "group-hover:text-amber-500" : "group-hover:text-[var(--hover-color)]"} transition-colors duration-300`}
                      >
                        {loc.name}
                      </h3>
                      <div 
                        style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`w-8 h-[2px] ${leadData.slug === "default" ? "bg-amber-500" : ""} mt-2 group-hover:w-12 transition-all duration-500`} 
                      />
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-[15px] font-light leading-relaxed mb-8">
                    {loc.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-zinc-800/50">
                    <div className="flex flex-wrap gap-2">
                      {loc.features.map((feature, fIdx) => (
                        <span 
                          key={fIdx} 
                          style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                          className={`px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] font-bold tracking-widest uppercase text-zinc-400 ${leadData.slug === "default" ? "group-hover:border-amber-500/20 group-hover:text-zinc-300" : "group-hover:border-[var(--hover-color)] group-hover:text-zinc-200"} transition-colors duration-300`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <MapSection leadData={leadData} />

      {/* ── CTA SECTION ── */}
      <CtaSection leadData={leadData} />

    </main>
      <Footer leadData={leadData} />
    </>
  );
}
