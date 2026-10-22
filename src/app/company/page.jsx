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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header Section */}
        <div className="flex flex-col items-center text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-[#121214] border border-zinc-800 rounded-full px-3 py-1 text-[11px] font-semibold text-emerald-400 mb-2 shadow-xs">
            <HiOutlineBuildingOffice2 className="text-xs" />
            <span>TOP HIRING PARTNERS</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-1.5">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">World-Class Companies</span>
          </h1>
          <p className="text-zinc-400 max-w-lg text-xs leading-normal">
            Connect directly with verified tech pioneers, high-growth startups, and engineering teams.
          </p>
        </div>

        {/* Compact Filter & Search Bar */}
        <div className="bg-[#121214] border border-zinc-800/80 rounded-xl p-3 sm:p-4 mb-5 shadow-sm">
          <div className="relative mb-3">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
            <input
              type="text"
              placeholder="Search companies by name, technology, or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 border-t border-zinc-800/80 pt-2.5">
            <span className="text-[11px] text-zinc-500 font-medium mr-1.5">Industry:</span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                  selectedIndustry === ind
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-xs"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <p className="text-zinc-400">
            Showing <span className="text-emerald-400 font-semibold">{filteredCompanies.length}</span> verified tech companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-[#121214] border border-zinc-800/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${company.badgeColor} border border-zinc-700/50 flex items-center justify-center text-white font-extrabold text-sm shadow-xs`}
                    >
                      {company.symbol}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                        {company.name}
                        <span className="text-emerald-400 text-xs" title="Verified">
                          ✓
                        </span>
                      </h3>
                      <span className="text-[11px] text-zinc-400">{company.industry}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] px-2 py-0.5 rounded-full font-semibold">
                    <FiStar className="fill-current text-[9px]" />
                    <span>{company.rating}</span>
                  </div>
                </div>

                {/* Tagline & Bio */}
                <p className="text-[11px] font-medium text-emerald-400 mb-1.5">
                  &ldquo;{company.tagline}&rdquo;
                </p>
                <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                  {company.description}
                </p>

                {/* Metadata Pills */}
                <div className="space-y-1 mb-3 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="text-zinc-500 shrink-0 text-xs" />
                    <span className="truncate">{company.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiUsers className="text-zinc-500 shrink-0 text-xs" />
                    <span>{company.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCalendar className="text-zinc-500 shrink-0 text-xs" />
                    <span>Founded in {company.founded}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {company.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800 rounded-sm px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/80">
                <Link
                  href="/jobs"
                  className="flex-1 bg-white hover:bg-emerald-400 text-zinc-950 font-semibold py-1.5 px-3 rounded-lg text-xs transition-all text-center flex items-center justify-center gap-1"
                >
                  <HiOutlineSparkles className="text-xs" />
                  <span>{company.openPositions} Open Roles</span>
                </Link>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
                  title="Visit Website"
                >
                  <FiExternalLink className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
