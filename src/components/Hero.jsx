"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (jobTitle.trim()) params.set("query", jobTitle.trim());
    if (location.trim()) params.set("location", location.trim());
    router.push(`/jobs${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handleTrendingClick = (tag) => {
    router.push(`/jobs?query=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="relative w-full bg-[#09090b] text-zinc-100 pt-8 pb-10 px-4 sm:px-6 overflow-hidden">
      
      {/* Background ambient subtle glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#121214] border border-zinc-800/80 rounded-full px-3.5 py-1 text-[11px] font-medium text-zinc-400 shadow-sm mb-4">
          <span className="text-sm">💼</span>
          <span className="text-zinc-200 font-semibold drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]">50,000+</span>
          <span className="text-zinc-500 uppercase tracking-wider text-[10px]">NEW JOBS THIS MONTH</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mb-3 leading-snug">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">Dream Job</span> Today
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed mb-6">
          HireHive connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role faster.
        </p>

        {/* Search Bar Container */}
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-2xl bg-[#121214] border border-zinc-800/80 rounded-2xl md:rounded-full p-1.5 flex flex-col md:flex-row items-center gap-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.5)] focus-within:border-emerald-500/40 transition-all duration-300"
        >
          {/* Job Title Input */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 w-full md:w-[48%]">
            <svg className="h-4 w-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Job title, skill or company"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 w-full focus:outline-none"
            />
          </div>

          {/* Divider */}
          <span className="hidden md:block h-5 w-[1px] bg-zinc-800" />

          {/* Location Input */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 w-full md:w-[38%]">
            <svg className="h-4 w-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Location or Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 w-full focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto md:h-9 md:w-9 flex items-center justify-center rounded-xl md:rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-2 shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all duration-300 shrink-0"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="md:hidden ml-2 text-xs font-semibold">Search Jobs</span>
          </button>
        </form>

        {/* Trending Position Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[11px] text-zinc-500 font-medium">Trending:</span>
          {["Full-Stack", "AI Research", "Product Designer", "DevOps", "Cybersecurity"].map((badge, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleTrendingClick(badge)}
              className="text-[11px] font-medium bg-[#121214] text-zinc-400 border border-zinc-800 rounded-full px-3 py-0.5 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200"
            >
              {badge}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
