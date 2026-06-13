"use client";

import React, { useState } from "react";
import { LeadData } from "@/data/leads";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

interface SchedulerWidgetProps {
  leadData: LeadData;
}

export default function SchedulerWidget({ leadData }: SchedulerWidgetProps) {
  const primaryColor = leadData.slug === "default" ? "#f59e0b" : leadData.primaryColor;

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Date and Time selection states
  const [currentDate, setCurrentDate] = useState(new Date()); // Month/Year currently viewed
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Time Slots
  const timeSlots = [
    "08:00 AM",
    "09:30 AM",
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM"
  ];

  // Calendar logic
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  const getDaysInMonth = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (y: number, m: number) => {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const day = new Date(y, m, 1).getDay();
    // Adjust to Monday = 0, ..., Sunday = 6
    return day === 0 ? 6 : day - 1;
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOffset = getFirstDayOfMonth(year, month);

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() - 1);
      return d;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const d = new Date(prev);
      d.setMonth(d.getMonth() + 1);
      return d;
    });
  };

  const isPastDate = (day: number, m: number, y: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(y, m, day);
    return dateToCheck < today;
  };

  const isToday = (day: number, m: number, y: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === m && today.getFullYear() === y;
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(year, month, day);
    setSelectedDate(selected);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      setErrorMsg("Please select a date and time slot from the calendar.");
      return;
    }
    if (!fullName.trim() || !phone.trim() || !issue.trim()) {
      setErrorMsg("Please fill in all required fields marked with *");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  // Formatting helpers
  const formatStatusDate = (date: Date, slot: string) => {
    const shortMonth = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    return `${shortMonth} ${day} at ${slot}`;
  };

  const formatFullDate = (date: Date, slot: string) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const shortMonth = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const y = date.getFullYear();
    return `${weekday}, ${shortMonth} ${day}, ${y} at ${slot}`;
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-20 relative z-10">
      
      {/* ── INFO ROW ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
        
        {/* Phone */}
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-5 flex items-center gap-4 group hover:border-zinc-800 transition-colors">
          <div 
            style={{ 
              borderColor: leadData.slug === "default" ? "" : `${primaryColor}33`,
              color: primaryColor
            }}
            className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/40 shrink-0 ${
              leadData.slug === "default" ? "text-amber-500 border-amber-500/10" : ""
            }`}
          >
            <Phone className="w-5 h-5" />
          </div>
          <div className="pt-1">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1">24/7 Hotline</p>
            <a href={`tel:${leadData.phone}`} className="text-white text-[15px] font-medium tracking-wide hover:opacity-80 transition-opacity">
              {leadData.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-5 flex items-center gap-4 group hover:border-zinc-800 transition-colors">
          <div 
            style={{ 
              borderColor: leadData.slug === "default" ? "" : `${primaryColor}33`,
              color: primaryColor
            }}
            className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/40 shrink-0 ${
              leadData.slug === "default" ? "text-amber-500 border-amber-500/10" : ""
            }`}
          >
            <Mail className="w-5 h-5" />
          </div>
          <div className="pt-1">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1">Email Support</p>
            <a href={`mailto:${leadData.email}`} className="text-white text-[15px] font-medium tracking-wide hover:opacity-80 transition-opacity truncate block max-w-[180px] sm:max-w-none">
              {leadData.email}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-5 flex items-center gap-4 group hover:border-zinc-800 transition-colors">
          <div 
            style={{ 
              borderColor: leadData.slug === "default" ? "" : `${primaryColor}33`,
              color: primaryColor
            }}
            className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/40 shrink-0 ${
              leadData.slug === "default" ? "text-amber-500 border-amber-500/10" : ""
            }`}
          >
            <MapPin className="w-5 h-5" />
          </div>
          <div className="pt-1">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1">Service Area</p>
            <p className="text-white text-[14px] font-medium leading-tight tracking-wide">
              {leadData.address}
            </p>
          </div>
        </div>

        {/* Emergency / Hours */}
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-xl p-5 flex items-center gap-4 group hover:border-zinc-800 transition-colors">
          <div 
            style={{ 
              borderColor: leadData.slug === "default" ? "" : `${primaryColor}33`,
              color: primaryColor
            }}
            className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/40 shrink-0 ${
              leadData.slug === "default" ? "text-amber-500 border-amber-500/10" : ""
            }`}
          >
            <Clock className="w-5 h-5" />
          </div>
          <div className="pt-1">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1">Emergency Services</p>
            <p className="text-white text-[15px] font-medium tracking-wide" style={{ color: primaryColor }}>
              {leadData.hours.emergency || "Available 24/7"}
            </p>
          </div>
        </div>

      </div>

      {/* ── SCHEDULER SECTION ── */}
      {submitted ? (
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
          {/* Accent Ambient Glow */}
          <div 
            style={{ backgroundColor: `${primaryColor}1a` }}
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
          />
          
          <div 
            style={{ color: primaryColor }}
            className="w-20 h-20 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="w-12 h-12 animate-levitate" />
          </div>

          <h3 className="text-3xl font-light text-white tracking-tight mb-4">Request Submitted Successfully!</h3>
          <p className="text-zinc-400 text-base font-light max-w-xl mx-auto leading-relaxed mb-8">
            Thank you, <span className="text-white font-normal">{fullName}</span>. Your priority service request has been received. 
            We have reserved your preferred slot on <span className="text-white font-normal" style={{ color: primaryColor }}>{selectedDate ? formatFullDate(selectedDate, selectedSlot!) : ""}</span>.
          </p>

          <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-6 mb-8 text-left max-w-md mx-auto space-y-3 font-light text-sm">
            <div className="flex justify-between border-b border-zinc-800/60 pb-2">
              <span className="text-zinc-500">Contact Number:</span>
              <span className="text-white font-medium">{phone}</span>
            </div>
            {email && (
              <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-500">Email Address:</span>
                <span className="text-white font-medium">{email}</span>
              </div>
            )}
            <div className="flex flex-col pt-1">
              <span className="text-zinc-500 mb-1">Requested Service Details:</span>
              <p className="text-white bg-zinc-900/40 p-3 rounded border border-zinc-800/40 text-[13px] italic line-clamp-3">
                &ldquo;{issue}&rdquo;
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedDate(null);
              setSelectedSlot(null);
              setFullName("");
              setPhone("");
              setEmail("");
              setIssue("");
            }}
            style={{ 
              backgroundColor: primaryColor,
              boxShadow: `0 0 20px ${primaryColor}44`
            }}
            className="px-8 py-4 text-zinc-950 rounded text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:brightness-110"
          >
            Schedule Another Appointment
          </button>
          
          <p className="text-zinc-500 text-[11px] mt-6">
            Typically responds within 15 minutes during operational hours.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Date & Time Selector */}
          <div className="lg:col-span-2 flex flex-col bg-[#0c0e12] border border-zinc-800/60 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden h-full">
            {/* Header */}
            <div className="mb-6 flex items-start gap-4">
              <div 
                style={{ 
                  color: primaryColor,
                  borderColor: `${primaryColor}22`
                }}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/40 shrink-0"
              >
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg text-white font-medium tracking-tight">Book a Time</h3>
                <p className="text-zinc-500 text-[12px] font-light">Select your preferred date & time slot</p>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="border-t border-zinc-800/50 pt-6 mb-6">
              
              {/* Month Selector */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                  {months[month]} {year}
                </span>
                
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="w-8 h-8 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="w-8 h-8 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                    aria-label="Next Month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map(d => (
                  <span key={d} className="text-zinc-500 text-[10px] font-bold tracking-widest py-1 block">
                    {d}
                  </span>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Offset cells */}
                {Array.from({ length: firstDayOffset }).map((_, idx) => (
                  <div key={`offset-${idx}`} className="w-10 h-10" />
                ))}

                {/* Day cells */}
                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const day = idx + 1;
                  const isPast = isPastDate(day, month, year);
                  const isSelected = selectedDate !== null && 
                                     selectedDate.getDate() === day && 
                                     selectedDate.getMonth() === month && 
                                     selectedDate.getFullYear() === year;
                  const currentDayIsToday = isToday(day, month, year);

                  return (
                    <button
                      key={`day-${day}`}
                      type="button"
                      disabled={isPast}
                      onClick={() => handleDateSelect(day)}
                      style={{
                        backgroundColor: isSelected ? primaryColor : "",
                        boxShadow: isSelected ? `0 0 15px ${primaryColor}66` : ""
                      }}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg text-xs font-medium transition-all relative ${
                        isPast 
                          ? "text-zinc-700 cursor-not-allowed" 
                          : isSelected 
                            ? "text-zinc-950 font-bold" 
                            : "text-zinc-300 hover:bg-zinc-800/40 hover:text-white"
                      }`}
                    >
                      {day}
                      {currentDayIsToday && !isSelected && (
                        <span 
                          style={{ backgroundColor: primaryColor }}
                          className="absolute bottom-1.5 w-1 h-1 rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Time Slot Picker */}
            <div className="border-t border-zinc-800/50 pt-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-500 text-[10px] font-bold tracking-[0.15em] uppercase">Available Slots</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        borderColor: isSelected ? primaryColor : "",
                        backgroundColor: isSelected ? `${primaryColor}11` : "",
                        boxShadow: isSelected ? `0 0 10px ${primaryColor}22` : ""
                      }}
                      className={`py-3 px-4 rounded-lg border text-center text-xs transition-all tracking-wide ${
                        isSelected 
                          ? "text-white font-medium border-solid" 
                          : "border-zinc-800 text-zinc-400 bg-zinc-900/20 hover:border-zinc-700 hover:text-white"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Indicator */}
            <div className="border-t border-zinc-800/50 pt-6">
              <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    style={{ 
                      borderColor: selectedDate && selectedSlot ? `${primaryColor}34` : "",
                      color: selectedDate && selectedSlot ? primaryColor : ""
                    }}
                    className={`w-8 h-8 rounded-full border border-zinc-800/60 flex items-center justify-center bg-zinc-900/50`}
                  >
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[9px] uppercase tracking-wider block mb-0.5">Selected Appointment</span>
                    <span className="text-white text-xs font-medium">
                      {selectedDate && selectedSlot 
                        ? formatStatusDate(selectedDate, selectedSlot)
                        : "No appointment chosen"
                      }
                    </span>
                  </div>
                </div>

                {selectedDate && selectedSlot ? (
                  <span 
                    style={{ backgroundColor: `${primaryColor}22`, color: primaryColor }}
                    className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-500"
                  >
                    Ready
                  </span>
                ) : (
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded bg-zinc-900 text-zinc-500 border border-zinc-800/60">
                    Pending
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact / Details Form */}
          <div className="lg:col-span-3 flex flex-col bg-[#0c0e12] border border-zinc-800/60 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden h-full">
            {/* Ambient glows inside the form */}
            <div 
              style={{ backgroundColor: `${primaryColor}0c` }}
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
            />
            <div 
              style={{ backgroundColor: `${primaryColor}05` }}
              className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Header */}
            <div className="relative z-10 mb-8">
              <h3 className="text-lg text-white font-medium tracking-tight mb-1">Send a Message</h3>
              <p className="text-zinc-500 text-[12px] font-light">Tell us how we can help you today</p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="relative z-10 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2 group">
                  <label 
                    htmlFor="fullName" 
                    className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-focus-within:text-white transition-colors"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ "--focus-color": primaryColor } as React.CSSProperties}
                    className="bg-zinc-950/40 border border-zinc-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--focus-color)] focus:ring-4 focus:ring-amber-500/5 transition-all font-light text-sm placeholder:text-zinc-700"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2 group">
                  <label 
                    htmlFor="phone" 
                    className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-focus-within:text-white transition-colors"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ "--focus-color": primaryColor } as React.CSSProperties}
                    className="bg-zinc-950/40 border border-zinc-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--focus-color)] focus:ring-4 focus:ring-amber-500/5 transition-all font-light text-sm placeholder:text-zinc-700"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 group">
                <label 
                  htmlFor="email" 
                  className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-focus-within:text-white transition-colors"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ "--focus-color": primaryColor } as React.CSSProperties}
                  className="bg-zinc-950/40 border border-zinc-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--focus-color)] focus:ring-4 focus:ring-amber-500/5 transition-all font-light text-sm placeholder:text-zinc-700"
                />
              </div>

              {/* What's the Issue */}
              <div className="flex flex-col gap-2 group">
                <label 
                  htmlFor="issue" 
                  className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-focus-within:text-white transition-colors"
                >
                  What&apos;s the Issue? *
                </label>
                <textarea
                  id="issue"
                  required
                  rows={4}
                  placeholder="Please describe what support you need.."
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  style={{ "--focus-color": primaryColor } as React.CSSProperties}
                  className="bg-zinc-950/40 border border-zinc-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--focus-color)] focus:ring-4 focus:ring-amber-500/5 transition-all font-light text-sm resize-none placeholder:text-zinc-700"
                />
              </div>

              {/* Booking Scheduled notification banner inside form */}
              {selectedDate && selectedSlot && (
                <div 
                  style={{ 
                    borderColor: `${primaryColor}22`,
                    backgroundColor: `${primaryColor}05`
                  }}
                  className="rounded-xl border p-4 flex items-center gap-3"
                >
                  <div 
                    style={{ color: primaryColor }}
                    className="w-5 h-5 flex items-center justify-center shrink-0"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-white text-xs font-light tracking-wide leading-tight">
                    Booking Scheduled: <span className="font-semibold">{formatFullDate(selectedDate, selectedSlot)}</span>
                  </span>
                </div>
              )}

              {/* Error Message */}
              {errorMsg && (
                <div className="text-red-500 text-xs font-light bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  style={{ 
                    backgroundColor: primaryColor,
                    boxShadow: `0 10px 30px -10px ${primaryColor}88`
                  }}
                  className="flex items-center justify-center gap-3 w-full py-4 md:py-5 text-zinc-950 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Submit Request
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-zinc-500 text-center text-[10px] font-light mt-5 leading-relaxed">
                  Typically responds within <span className="font-medium" style={{ color: primaryColor }}>15 minutes</span> during operational hours.
                </p>
              </div>

            </form>
          </div>

        </div>
      )}
    </div>
  );
}
