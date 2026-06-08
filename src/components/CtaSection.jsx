import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#09090b] text-zinc-100 py-24 px-6 relative overflow-hidden">
      {/* Background Image Container with Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[url('/cta-bg.png')] bg-top bg-no-repeat bg-contain opacity-90 pointer-events-none" 
      />

      {/* Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 pt-12">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 max-w-2xl leading-tight bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent">
          Your next role is already looking for you
        </h2>

        {/* Description Subtext */}
        <p className="text-zinc-400 text-base md:text-lg font-normal mb-10 max-w-xl leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/signup"
            className="w-full sm:w-auto bg-white text-zinc-950 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-all duration-300 text-sm shadow-lg shadow-white/5 text-center"
          >
            Create a free account
          </Link>
          
          <Link
            href="/pricing"
            className="w-full sm:w-auto bg-zinc-900/40 text-zinc-300 font-medium px-6 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-300 text-sm text-center backdrop-blur-xs"
          >
            View pricing
          </Link>
        </div>

      </div>
    </section>
  );
}