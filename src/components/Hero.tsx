import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-bg.webp"
          alt="Premium Plumbing Services"
          fill
          priority
          className="object-cover object-center opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/20 to-zinc-950/90"></div>
      </div>



      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center pt-24 pb-20">
        <div className="w-full md:w-2/3 max-w-3xl text-left">
          <div className="inline-block mb-4 px-3 py-1 border border-zinc-700 rounded-full bg-zinc-800/50 backdrop-blur-md">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-300">Family-Owned Master Plumbers</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-[1.1] mb-6">
            Honest <br className="hidden md:block" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Craftsmanship
            </span>{" "}
            for Your Home.
          </h1>

          <p className="text-lg md:text-xl text-white mb-10 max-w-xl font-light leading-relaxed">
            Reliable, high-end service with a personal touch. We treat every home as if it were our own, delivering master-level plumbing with unwavering integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ease-out transform hover:-translate-y-1 flex items-center justify-center gap-2"
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
