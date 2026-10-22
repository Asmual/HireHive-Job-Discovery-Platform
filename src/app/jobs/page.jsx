"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { FiDollarSign, FiSearch, FiBookmark, FiCheck, FiX } from "react-icons/fi";
import { HiOutlineArrowUpRight, HiOutlineSparkles } from "react-icons/hi2";
import { jobsData } from "@/data/jobs";
import toast from "react-hot-toast";

export default function BrowseJobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);
  const [applyingJob, setApplyingJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    portfolio: "",
    coverNote: "",
  });

  const categories = ["All", "Engineering", "Design", "Product", "Data & AI", "DevOps"];
  const jobTypes = ["All", "Remote", "Hybrid"];
  const levels = ["All", "Senior", "Lead"];

  const toggleSaveJob = (id, title) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((jId) => jId !== id));
      toast("Job removed from saved list", { icon: "🗑️" });
    } else {
      setSavedJobs([...savedJobs, id]);
      toast.success(`"${title}" saved to your dashboard!`);
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      toast.success(`Application sent to ${applyingJob.company}!`);
      setApplyingJob(null);
      setApplicationSubmitted(false);
      setApplyForm({ name: "", email: "", portfolio: "", coverNote: "" });
    }, 1200);
  };

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;

      const matchesType =
        selectedType === "All" || job.type === selectedType;

      const matchesLevel =
        selectedLevel === "All" || job.experienceLevel === selectedLevel;

      return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedLevel]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Hero Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#121214] border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <HiOutlineSparkles className="text-sm" />
            <span>DISCOVER {jobsData.length}+ VERIFIED ROLES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Browse & Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">High-Impact Roles</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Discover curated opportunities at top tech startups and scale-ups. Direct recruiter links and verified salary transparency.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-4 md:p-6 mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" />
              <input
                type="text"
                placeholder="Search by job title, company, or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>

            {/* Workplace Type Filter */}
            <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-2">
              <span className="text-xs text-zinc-500 font-medium whitespace-nowrap">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-sm text-zinc-200 focus:outline-none cursor-pointer"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#121214] text-zinc-200">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Level Filter */}
            <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-2">
              <span className="text-xs text-zinc-500 font-medium whitespace-nowrap">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-transparent text-sm text-zinc-200 focus:outline-none cursor-pointer"
              >
                {levels.map((level) => (
                  <option key={level} value={level} className="bg-[#121214] text-zinc-200">
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 border-t border-zinc-800/80 pt-4">
            <span className="text-xs text-zinc-500 font-medium mr-2">Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Actions */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-zinc-400">
            Showing <span className="text-emerald-400 font-semibold">{filteredJobs.length}</span> positions available
          </p>

          {(searchQuery || selectedCategory !== "All" || selectedType !== "All" || selectedLevel !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedType("All");
                setSelectedLevel("All");
              }}
              className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <FiX /> Reset filters
            </button>
          )}
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-500 text-xl">
              <FiSearch />
            </div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">No matching jobs found</h3>
            <p className="text-sm text-zinc-500 mb-6">
              Try adjusting your search criteria or clear active filters to discover more open roles.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedType("All");
                setSelectedLevel("All");
              }}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium px-5 py-2.5 rounded-xl text-sm transition-all"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => {
              const isSaved = savedJobs.includes(job.id);

              return (
                <div
                  key={job.id}
                  className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                >
                  <div>
                    {/* Company Monogram & Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${job.companyColor} border border-zinc-700/50 flex items-center justify-center text-white font-bold text-lg shadow-md`}
                        >
                          {job.companyLogo}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                            {job.company}
                          </span>
                          <span className="text-[11px] text-zinc-500">{job.postedAt}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleSaveJob(job.id, job.title)}
                        aria-label="Save job"
                        className={`p-2 rounded-lg border transition-colors ${
                          isSaved
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        <FiBookmark className={isSaved ? "fill-current text-sm" : "text-sm"} />
                      </button>
                    </div>

                    {/* Job Title & Link */}
                    <Link href={`/jobs/${job.id}`}>
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-1 mb-2">
                        {job.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-5">
                      {job.description}
                    </p>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800/80 rounded-full px-2.5 py-1 text-xs text-zinc-300">
                        <HiOutlineLocationMarker className="text-xs text-emerald-400 shrink-0" />
                        <span className="truncate max-w-[140px]">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800/80 rounded-full px-2.5 py-1 text-xs text-zinc-300">
                        <HiOutlineBriefcase className="text-xs text-emerald-400 shrink-0" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800/80 rounded-full px-2.5 py-1 text-xs text-emerald-400 font-medium">
                        <FiDollarSign className="text-xs" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {job.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800 rounded-md px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                      {job.tags.length > 3 && (
                        <span className="text-[11px] text-zinc-500 py-0.5 px-1">
                          +{job.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/70">
                    <button
                      onClick={() => setApplyingJob(job)}
                      className="flex-1 bg-white hover:bg-emerald-400 text-zinc-950 font-semibold py-2.5 px-4 rounded-xl text-xs transition-all duration-200 shadow-sm text-center"
                    >
                      Quick Apply
                    </button>

                    <Link
                      href={`/jobs/${job.id}`}
                      className="flex items-center justify-center p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
                      title="View Details"
                    >
                      <HiOutlineArrowUpRight className="text-base" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Quick Apply Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-200 p-1"
            >
              <FiX className="text-xl" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Apply for position
              </span>
              <h2 className="text-xl font-bold text-zinc-100 mt-1">{applyingJob.title}</h2>
              <p className="text-sm text-zinc-400 mt-0.5">
                {applyingJob.company} • {applyingJob.location} • {applyingJob.salary}
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rahman"
                  value={applyForm.name}
                  onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={applyForm.email}
                  onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Portfolio / GitHub / LinkedIn URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/alex"
                  value={applyForm.portfolio}
                  onChange={(e) => setApplyForm({ ...applyForm, portfolio: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Brief Pitch / Note
                </label>
                <textarea
                  rows={3}
                  placeholder="Why are you a great match for this role?"
                  value={applyForm.coverNote}
                  onChange={(e) => setApplyForm({ ...applyForm, coverNote: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={applicationSubmitted}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 rounded-xl text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {applicationSubmitted ? (
                    <>
                      <FiCheck className="text-base" /> Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
