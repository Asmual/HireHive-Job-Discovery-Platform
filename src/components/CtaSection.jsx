import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#09090b] text-zinc-100 py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-[url('/cta-bg.png')] bg-top bg-no-repeat bg-contain opacity-70 pointer-events-none" 
      />

      {/* Content Container */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10 pt-4">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2 max-w-xl leading-tight bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
          Your Next Role is Already Looking for You
        </h2>

        {/* Description Subtext */}
        <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-md leading-relaxed">
          Build a verified profile in three minutes. Handpicked recruiter matches start arriving in your inbox tomorrow.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/signup"
            className="w-full sm:w-auto bg-white text-zinc-950 font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-all text-xs text-center shadow-sm"
          >
            Create Free Account
          </Link>
          
          <Link
            href="/pricing"
            className="w-full sm:w-auto bg-zinc-900/60 text-zinc-300 font-medium px-5 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all text-xs text-center"
          >
            View Pricing Plans
          </Link>
        </div>

      </div>
    </section>
  );
}
