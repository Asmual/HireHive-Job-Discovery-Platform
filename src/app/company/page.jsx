"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FiSearch, FiExternalLink, FiMapPin, FiUsers, FiCalendar, FiStar } from "react-icons/fi";
import { HiOutlineBuildingOffice2, HiOutlineSparkles } from "react-icons/hi2";
import { companiesData } from "@/data/companies";

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = [
    "All",
    "Cloud & Developer Tools",
    "Artificial Intelligence",
    "Fintech & Payments",
    "Productivity & SaaS",
  ];

  const filteredCompanies = useMemo(() => {
    return companiesData.filter((company) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesIndustry =
        selectedIndustry === "All" || company.industry === selectedIndustry;

      return matchesSearch && matchesIndustry;
    });
  }, [searchQuery, selectedIndustry]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Hero Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#121214] border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <HiOutlineBuildingOffice2 className="text-sm" />
            <span>TOP HIRING PARTNERS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">World-Class Companies</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Connect directly with verified tech pioneers, high-growth startups, and visionary leaders changing the world.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-4 md:p-6 mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" />
              <input
                type="text"
                placeholder="Search companies by name, technology, or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-t border-zinc-800/80 pt-4">
            <span className="text-xs text-zinc-500 font-medium mr-2">Industry:</span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedIndustry === ind
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-zinc-400">
            Showing <span className="text-emerald-400 font-semibold">{filteredCompanies.length}</span> top tech companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.badgeColor} border border-zinc-700/50 flex items-center justify-center text-white font-extrabold text-xl shadow-md`}
                    >
                      {company.symbol}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                        {company.name}
                        <span className="text-emerald-400 text-xs" title="Verified">
                          ✓
                        </span>
                      </h3>
                      <span className="text-xs text-zinc-400">{company.industry}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full font-semibold">
                    <FiStar className="fill-current text-[10px]" />
                    <span>{company.rating}</span>
                  </div>
                </div>

                {/* Tagline & Bio */}
                <p className="text-xs font-medium text-emerald-400 mb-2">
                  &ldquo;{company.tagline}&rdquo;
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                  {company.description}
                </p>

                {/* Metadata Pills */}
                <div className="space-y-2 mb-6 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-zinc-500 shrink-0" />
                    <span className="truncate">{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-zinc-500 shrink-0" />
                    <span>{company.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-zinc-500 shrink-0" />
                    <span>Founded in {company.founded}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {company.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800 rounded-md px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                <Link
                  href="/jobs"
                  className="flex-1 bg-white hover:bg-emerald-400 text-zinc-950 font-semibold py-2.5 px-3 rounded-xl text-xs transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <HiOutlineSparkles className="text-sm" />
                  <span>{company.openPositions} Open Roles</span>
                </Link>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
                  title="Visit Website"
                >
                  <FiExternalLink className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
