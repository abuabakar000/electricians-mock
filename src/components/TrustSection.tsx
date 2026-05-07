import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="bg-white py-20 border-b border-gray-100 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-[#0a1930] text-xl md:text-2xl font-medium tracking-[0.15em] uppercase mb-4">
            Your Trusted Neighborhood Plumbers
          </h2>
          <p className="text-slate-500 text-lg font-light tracking-wide">
            Serving our community with honest work and upfront pricing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-2 sm:gap-x-4 lg:gap-0 lg:divide-x divide-gray-200/80">
          
          {/* 1. Google Reviews */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-center px-2 xl:px-6 pb-4 md:pb-0">
            <div className="relative w-[85px] h-[28px] mb-3">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-semibold text-[#0a1930] tracking-tight">4.9</span>
              <div className="flex gap-0.5 text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-[13px] font-medium tracking-wide text-slate-500 uppercase">Verified Reviews</span>
          </div>

          {/* 2. Licensed & Insured */}
          <div className="col-span-1 flex flex-col xl:flex-row items-center xl:items-start justify-start text-center xl:text-left gap-2 sm:gap-3 xl:gap-5 px-2 xl:px-6">
            <div className="shrink-0 text-[#0a1930]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div className="mt-1 xl:mt-0">
              <h3 className="text-[#0a1930] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.05em] sm:tracking-[0.15em] leading-tight mb-1">
                Licensed <br className="hidden xl:block"/>& Insured
              </h3>
              <p className="text-slate-500 text-[10px] sm:text-[13px] font-light leading-relaxed">Fully licensed &<br className="hidden xl:block"/>fully insured</p>
            </div>
          </div>

          {/* 3. 24/7 Emergency Service */}
          <div className="col-span-1 flex flex-col xl:flex-row items-center xl:items-start justify-start text-center xl:text-left gap-2 sm:gap-3 xl:gap-5 px-2 xl:px-6">
            <div className="shrink-0 text-[#0a1930] flex items-center justify-center">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute inset-0 w-8 h-8 sm:w-9 sm:h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span className="text-[10px] sm:text-[11px] font-bold mt-0.5">24</span>
              </div>
            </div>
            <div className="mt-1 xl:mt-0">
              <h3 className="text-[#0a1930] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.05em] sm:tracking-[0.15em] leading-tight mb-1">
                24/7 Emergency <br className="hidden xl:block"/>Service
              </h3>
              <p className="text-slate-500 text-[10px] sm:text-[13px] font-light leading-relaxed">We're available<br className="hidden xl:block"/>day or night</p>
            </div>
          </div>

          {/* 4. 500+ Happy Customers */}
          <div className="col-span-1 flex flex-col xl:flex-row items-center xl:items-start justify-start text-center xl:text-left gap-2 sm:gap-3 xl:gap-5 px-2 xl:px-6">
            <div className="shrink-0 text-[#0a1930]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <div className="mt-1 xl:mt-0">
              <h3 className="text-[#0a1930] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.05em] sm:tracking-[0.15em] leading-tight mb-1">
                500+ Happy <br className="hidden xl:block"/>Customers
              </h3>
              <p className="text-slate-500 text-[10px] sm:text-[13px] font-light leading-relaxed">Satisfied homeowners<br className="hidden xl:block"/>and businesses</p>
            </div>
          </div>

          {/* 5. 100% Satisfaction */}
          <div className="col-span-1 flex flex-col xl:flex-row items-center xl:items-start justify-start text-center xl:text-left gap-2 sm:gap-3 xl:gap-5 px-2 xl:px-6">
            <div className="shrink-0 text-[#0a1930]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-9 sm:h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <div className="mt-1 xl:mt-0">
              <h3 className="text-[#0a1930] font-semibold text-[10px] sm:text-xs uppercase tracking-[0.05em] sm:tracking-[0.15em] leading-tight mb-1">
                100% Satisfaction <br className="hidden xl:block"/>Guaranteed
              </h3>
              <p className="text-slate-500 text-[10px] sm:text-[13px] font-light leading-relaxed">We stand behind<br className="hidden xl:block"/>our work</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
