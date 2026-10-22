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
      toast.success(`"${title}" saved!`);
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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header Section */}
        <div className="flex flex-col items-center text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-[#121214] border border-zinc-800 rounded-full px-3 py-1 text-[11px] font-semibold text-emerald-400 mb-2 shadow-xs">
            <HiOutlineSparkles className="text-xs" />
            <span>DISCOVER {jobsData.length}+ VERIFIED ROLES</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-1.5">
            Browse & Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">High-Impact Roles</span>
          </h1>
          <p className="text-zinc-400 max-w-lg text-xs leading-normal">
            Curated opportunities at top tech scale-ups with transparent salaries and direct recruiter access.
          </p>
        </div>

        {/* Compact Search & Filter Bar */}
        <div className="bg-[#121214] border border-zinc-800/80 rounded-xl p-3 sm:p-4 mb-5 shadow-sm">
          <div className="flex flex-col md:flex-row gap-2.5 mb-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                type="text"
                placeholder="Search job title, company, or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg pl-9 pr-8 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <FiX className="text-xs" />
                </button>
              )}
            </div>

            {/* Workplace Type Filter */}
            <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-1.5">
              <span className="text-[11px] text-zinc-500 font-medium">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-transparent text-xs text-zinc-200 focus:outline-none cursor-pointer"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#121214] text-zinc-200">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Level Filter */}
            <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 rounded-lg px-3 py-1.5">
              <span className="text-[11px] text-zinc-500 font-medium">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-transparent text-xs text-zinc-200 focus:outline-none cursor-pointer"
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
          <div className="flex flex-wrap items-center gap-1.5 border-t border-zinc-800/80 pt-2.5">
            <span className="text-[11px] text-zinc-500 font-medium mr-1.5">Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-xs"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Actions */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <p className="text-zinc-400">
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
              className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1 text-[11px]"
            >
              <FiX /> Reset filters
            </button>
          )}
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-[#121214] border border-zinc-800 rounded-xl p-8 text-center max-w-md mx-auto">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-zinc-500 text-lg">
              <FiSearch />
            </div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-1">No matching jobs found</h3>
            <p className="text-xs text-zinc-500 mb-4">
              Try adjusting your search criteria or clear active filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedType("All");
                setSelectedLevel("All");
              }}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium px-4 py-2 rounded-lg text-xs"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job) => {
              const isSaved = savedJobs.includes(job.id);

              return (
                <div
                  key={job.id}
                  className="bg-[#121214] border border-zinc-800/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200 group shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Company Monogram & Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${job.companyColor} border border-zinc-700/50 flex items-center justify-center text-white font-bold text-sm shadow-xs`}
                        >
                          {job.companyLogo}
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block">
                            {job.company}
                          </span>
                          <span className="text-[10px] text-zinc-500">{job.postedAt}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleSaveJob(job.id, job.title)}
                        aria-label="Save job"
                        className={`p-1.5 rounded-md border transition-colors ${
                          isSaved
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        <FiBookmark className={isSaved ? "fill-current text-xs" : "text-xs"} />
                      </button>
                    </div>

                    {/* Job Title & Link */}
                    <Link href={`/jobs/${job.id}`}>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-1 mb-1.5">
                        {job.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                      {job.description}
                    </p>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800/80 rounded-md px-2 py-0.5 text-[11px] text-zinc-300">
                        <HiOutlineLocationMarker className="text-xs text-emerald-400 shrink-0" />
                        <span className="truncate max-w-[120px]">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800/80 rounded-md px-2 py-0.5 text-[11px] text-zinc-300">
                        <HiOutlineBriefcase className="text-xs text-emerald-400 shrink-0" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800/80 rounded-md px-2 py-0.5 text-[11px] text-emerald-400 font-medium">
                        <FiDollarSign className="text-xs" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {job.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800 rounded-sm px-1.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                      {job.tags.length > 3 && (
                        <span className="text-[10px] text-zinc-500 py-0.5 px-1">
                          +{job.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="flex items-center gap-2.5 pt-3 border-t border-zinc-800/80">
                    <button
                      onClick={() => setApplyingJob(job)}
                      className="flex-1 bg-white hover:bg-emerald-400 text-zinc-950 font-semibold py-1.5 px-3 rounded-lg text-xs transition-all text-center"
                    >
                      Quick Apply
                    </button>

                    <Link
                      href={`/jobs/${job.id}`}
                      className="flex items-center justify-center p-2 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
                      title="View Details"
                    >
                      <HiOutlineArrowUpRight className="text-sm" />
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
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl w-full max-w-md p-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 p-1"
            >
              <FiX className="text-lg" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                Apply for position
              </span>
              <h2 className="text-lg font-bold text-zinc-100 mt-0.5">{applyingJob.title}</h2>
              <p className="text-xs text-zinc-400">
                {applyingJob.company} • {applyingJob.location} • {applyingJob.salary}
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rahman"
                  value={applyForm.name}
                  onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={applyForm.email}
                  onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                  Portfolio / Profile URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/alex"
                  value={applyForm.portfolio}
                  onChange={(e) => setApplyForm({ ...applyForm, portfolio: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                  Brief Pitch / Note
                </label>
                <textarea
                  rows={2}
                  placeholder="Why are you a great match for this role?"
                  value={applyForm.coverNote}
                  onChange={(e) => setApplyForm({ ...applyForm, coverNote: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 resize-none"
                />
              </div>

              <div className="flex gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={applicationSubmitted}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  {applicationSubmitted ? (
                    <>
                      <FiCheck className="text-sm" /> Submitting...
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
