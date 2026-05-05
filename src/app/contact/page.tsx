import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import MapSection from "@/components/MapSection";

export const metadata = {
  title: "Schedule Service | ProPlumb",
  description: "Contact us today to schedule your premium plumbing service. We offer 24/7 emergency response and expert solutions.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/contact-hero.png"
            fill
            alt="Schedule Plumbing Service"
            className="object-cover object-center opacity-30 mix-blend-screen grayscale-[20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06070a] via-[#06070a]/60 to-zinc-950"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-amber-500/50" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-amber-500 uppercase">
              Get In Touch
            </span>
            <div className="w-8 h-[1px] bg-amber-500/50" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1] mb-6">
            Schedule <span className="font-medium text-amber-500">Service.</span>
          </h1>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="py-20 relative z-10 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Left Side: Contact Details */}
            <div className="lg:col-span-2 flex flex-col">
              <h2 className="text-3xl font-light text-white tracking-tight mb-4">
                We're Here When <br/> You Need Us Most.
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-10 text-[15px]">
                Whether you need immediate emergency assistance or want to schedule a routine installation, our team of master plumbers is ready to deliver flawless results.
              </p>

              <div className="space-y-8 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="pt-1">
                    <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-1">24/7 Emergency Line</p>
                    <a href="tel:+18005550199" className="text-white text-xl font-light tracking-wide hover:text-amber-500 transition-colors">
                      (800) 555-0199
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="pt-1">
                    <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-1">Email Us</p>
                    <a href="mailto:service@proplumb.com" className="text-white text-lg font-light tracking-wide hover:text-amber-500 transition-colors">
                      service@proplumb.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 group-hover:border-amber-500/50 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="pt-1">
                    <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-1">Headquarters</p>
                    <p className="text-white text-lg font-light tracking-wide">
                      1234 Elite Plumbing Way<br />
                      Suite 100, Metropolis
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-6 mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <h3 className="text-white font-bold tracking-widest text-[12px] uppercase">Operating Hours</h3>
                </div>
                <div className="space-y-2 text-sm font-light">
                  <div className="flex justify-between text-zinc-400">
                    <span>Monday - Friday</span>
                    <span className="text-white">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Saturday</span>
                    <span className="text-white">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 pt-2 border-t border-zinc-800/60 mt-2">
                    <span>Emergency Services</span>
                    <span className="text-amber-500 font-medium">Available 24/7</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#0a0c10] border border-zinc-800/60 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Form Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none"></div>

                <form className="relative z-10 flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        placeholder="John Doe"
                        className="bg-[#06070a] border border-zinc-800 text-white rounded-md px-4 py-4 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light text-[15px]"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        placeholder="(555) 000-0000"
                        className="bg-[#06070a] border border-zinc-800 text-white rounded-md px-4 py-4 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light text-[15px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        placeholder="john@example.com"
                        className="bg-[#06070a] border border-zinc-800 text-white rounded-md px-4 py-4 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light text-[15px]"
                      />
                    </div>
                    {/* Service Type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">Service Needed</label>
                      <select 
                        id="service"
                        className="bg-[#06070a] border border-zinc-800 text-white rounded-md px-4 py-4 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light text-[15px] appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="emergency">24/7 Emergency Repair</option>
                        <option value="drain">Drain Cleaning</option>
                        <option value="leak">Leak Repair</option>
                        <option value="water-heater">Water Heater Services</option>
                        <option value="pipes">Pipe Replacement</option>
                        <option value="fixture">Fixture Installation</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[11px] font-bold tracking-widest uppercase text-zinc-400">Project Details or Issue</label>
                    <textarea 
                      id="message"
                      rows={5}
                      placeholder="Please describe what you need help with..."
                      className="bg-[#06070a] border border-zinc-800 text-white rounded-md px-4 py-4 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-light text-[15px] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="button" 
                    className="mt-4 flex items-center justify-center gap-3 w-full py-5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-md text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-zinc-500 text-center text-[12px] font-light mt-2">
                    By submitting this form, you agree to our privacy policy. We typically respond within 15 minutes during business hours.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <MapSection />

    </main>
  );
}
