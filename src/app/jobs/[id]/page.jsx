"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobById, jobsData } from "@/data/jobs";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { FiDollarSign, FiBookmark, FiCheck, FiArrowLeft, FiShare2, FiClock } from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import toast from "react-hot-toast";

export default function JobDetailPage({ params }) {
  const resolvedParams = use(params);
  const job = getJobById(resolvedParams.id);

  const [isSaved, setIsSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    resumeNotes: "",
  });

  if (!job) {
    notFound();
  }

  const handleApply = (e) => {
    e.preventDefault();
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setIsApplied(true);
      toast.success("Application successfully submitted!");
    }, 1200);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Job link copied to clipboard!");
    }
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    toast(isSaved ? "Removed from saved jobs" : "Saved to your dashboard!", {
      icon: isSaved ? "🗑️" : "✨",
    });
  };

  const similarJobs = jobsData.filter((j) => j.id !== job.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-4">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <FiArrowLeft /> Back to all jobs
          </Link>
        </div>

        {/* Top Header Card */}
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-3.5">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.companyColor} border border-zinc-700/60 flex items-center justify-center text-white font-extrabold text-lg shadow-sm`}
              >
                {job.companyLogo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    {job.company}
                  </span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full font-medium">
                    Verified
                  </span>
                </div>
                <h1 className="text-lg sm:text-2xl font-extrabold text-zinc-100 mt-0.5">
                  {job.title}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={handleShare}
                className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors"
                title="Share role"
              >
                <FiShare2 className="text-sm" />
              </button>
              <button
                onClick={toggleSave}
                className={`p-2.5 rounded-lg border transition-colors ${
                  isSaved
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
                title="Save job"
              >
                <FiBookmark className={isSaved ? "fill-current text-sm" : "text-sm"} />
              </button>
              <a
                href="#apply-section"
                className="flex-1 md:flex-none bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-xs shadow-sm transition-all text-center"
              >
                {isApplied ? "Applied ✓" : "Apply Now"}
              </a>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-2.5">
              <span className="text-[10px] text-zinc-500 block mb-0.5">Salary Range</span>
              <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                <FiDollarSign className="text-xs shrink-0" />
                <span>{job.salary}</span>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-2.5">
              <span className="text-[10px] text-zinc-500 block mb-0.5">Location</span>
              <div className="flex items-center gap-1 text-zinc-200 font-semibold truncate">
                <HiOutlineLocationMarker className="text-xs text-emerald-400 shrink-0" />
                <span className="truncate">{job.location}</span>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-2.5">
              <span className="text-[10px] text-zinc-500 block mb-0.5">Type</span>
              <div className="flex items-center gap-1 text-zinc-200 font-semibold">
                <HiOutlineBriefcase className="text-xs text-emerald-400 shrink-0" />
                <span>{job.type}</span>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-2.5">
              <span className="text-[10px] text-zinc-500 block mb-0.5">Experience</span>
              <div className="flex items-center gap-1 text-zinc-200 font-semibold">
                <FiClock className="text-xs text-emerald-400 shrink-0" />
                <span>{job.experienceLevel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overview */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base font-bold text-zinc-100 mb-3 flex items-center gap-2">
                <HiOutlineSparkles className="text-emerald-400" /> About The Role
              </h2>
              <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                {job.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 px-2.5 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base font-bold text-zinc-100 mb-3">Key Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <span className="w-4 h-4 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                      ✓
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base font-bold text-zinc-100 mb-3">Requirements & Qualifications</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 sm:p-6">
              <h2 className="text-base font-bold text-zinc-100 mb-3">Benefits & Perks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {job.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-zinc-900/50 border border-zinc-800/80 rounded-lg text-xs text-zinc-300 flex items-center gap-2"
                  >
                    <span className="text-emerald-400">🎁</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Quick Apply & Company Details */}
          <div className="space-y-5">
            
            {/* Quick Apply Card */}
            <div
              id="apply-section"
              className="bg-[#121214] border border-zinc-800 rounded-2xl p-5 shadow-sm sticky top-20"
            >
              <h3 className="text-sm font-bold text-zinc-100 mb-1">Apply for this position</h3>
              <p className="text-[11px] text-zinc-500 mb-4">
                Send your application directly to {job.company}.
              </p>

              {isApplied ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <div className="w-9 h-9 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center mx-auto mb-2 text-base font-bold">
                    <FiCheck />
                  </div>
                  <h4 className="text-xs font-bold text-emerald-400 mb-0.5">
                    Application Sent!
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    We will notify you when the team reviews your profile.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                      Portfolio / Profile URL
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://github.com/janedoe"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">
                      Note to Recruiter (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Highlight your key achievements..."
                      value={formData.resumeNotes}
                      onChange={(e) => setFormData({ ...formData, resumeNotes: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isApplying}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 mt-1"
                  >
                    {isApplying ? "Submitting..." : "Submit Direct Application"}
                  </button>
                </form>
              )}

              {/* Company Micro Card */}
              <div className="mt-4 pt-4 border-t border-zinc-800/80">
                <div className="flex items-center gap-2 mb-1">
                  <HiOutlineBuildingOffice2 className="text-emerald-400 text-sm" />
                  <span className="text-xs font-semibold text-zinc-300">About {job.company}</span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed mb-2">
                  A high-velocity innovation company with top employee satisfaction ratings.
                </p>
                <Link
                  href="/company"
                  className="text-xs font-semibold text-emerald-400 hover:underline"
                >
                  Explore company profile →
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Similar Roles Section */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-zinc-100 mb-4">Similar Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {similarJobs.map((simJob) => (
              <Link
                key={simJob.id}
                href={`/jobs/${simJob.id}`}
                className="bg-[#121214] border border-zinc-800/80 rounded-xl p-4 hover:border-zinc-700 transition-all group block"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg bg-gradient-to-br ${simJob.companyColor} flex items-center justify-center text-white font-bold text-xs`}
                  >
                    {simJob.companyLogo}
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-medium block">{simJob.company}</span>
                    <h3 className="text-xs font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {simJob.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800">
                  <span>{simJob.location}</span>
                  <span className="text-emerald-400 font-medium">{simJob.salary}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
