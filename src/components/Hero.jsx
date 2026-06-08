"use client";

import { useState } from "react";

export default function Hero() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { jobTitle, location });
    // এখানে আপনার সার্চ লজিক বা রাউটিং যোগ করতে পারেন
  };

  return (
    <section className="relative w-full bg-[#09090b] text-zinc-100 pt-20 pb-24 px-6 overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ডে হালকা গ্রিন গ্লো বা রিফ্লেকশন ইফেক্ট (ঐচ্ছিক কিন্তু প্রিমিয়াম লুক দেয়) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        
        {/* ১. টপ ব্যাজ (50,000+ New Jobs This Month) */}
        <div className="inline-flex items-center gap-2 bg-[#121214] border border-zinc-800/80 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-400 shadow-[0_4px_15px_rgba(0,0,0,0.5)] mb-8">
          <span className="text-base">💼</span>
          <span className="text-zinc-200 font-semibold drop-shadow-[0_0_6px_rgba(52,211,153,0.3)]">50,000+</span>
          <span className="text-zinc-500">NEW JOBS THIS MONTH</span>
        </div>

        {/* ২. মেইন হেডলাইন */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mb-6 leading-[1.15]">
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_20px_rgba(52,211,153,0.2)]">Dream Job</span> Today
        </h1>

        {/* ৩. সাব-হেডলাইন বা বর্ণনা */}
        <p className="text-zinc-500 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
          HireHive connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* ৪. সার্চবার কন্টেইনার (ডিজাইন অনুযায়ী ক্যাপসুল স্টাইল) */}
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-3xl bg-[#121214] border border-zinc-800/80 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] focus-within:border-emerald-500/30 transition-all duration-300"
        >
          {/* প্রথম ইনপুট: Job Title */}
          <div className="flex items-center gap-3 px-4 py-2 w-full md:w-[45%]">
            <svg className="h-5 w-5 text-zinc-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Job title, skill or company"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="bg-transparent text-sm text-zinc-200 placeholder-zinc-600 w-full focus:outline-none"
            />
          </div>

          {/* মাঝখানের ডিভাইডার লাইন (শুধুমাত্র ডেস্কটপে দেখাবে) */}
          <span className="hidden md:block h-6 w-[1px] bg-zinc-800" />

          {/* দ্বিতীয় ইনপুট: Location */}
          <div className="flex items-center gap-3 px-4 py-2 w-full md:w-[40%]">
            <svg className="h-5 w-5 text-zinc-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Location or Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-sm text-zinc-200 placeholder-zinc-600 w-full focus:outline-none"
            />
          </div>

          {/* সার্চ বাটন (গ্রিন গ্লো সহ) */}
          <button
            type="submit"
            className="w-full md:w-auto md:h-12 md:w-12 flex items-center justify-center rounded-xl md:rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-3 shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all duration-300 group-hover:scale-105 flex-shrink-0"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="md:hidden ml-2 text-sm font-semibold">Search Jobs</span>
          </button>
        </form>

        {/* ৫. ট্রেন্ডিং পজিশনস (Trending Position Badges) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-zinc-600 font-medium">Trending Position</span>
          {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map((badge, index) => (
            <button
              key={index}
              type="button"
              className="text-xs font-medium bg-[#121214] text-zinc-400 border border-zinc-800 rounded-full px-4 py-1.5 hover:border-emerald-500/30 hover:text-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all duration-300"
            >
              {badge}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}