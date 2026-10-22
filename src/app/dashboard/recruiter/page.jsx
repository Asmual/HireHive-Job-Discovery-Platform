"use client";

import { useState } from "react";
import { FiPlus, FiUsers, FiEye, FiCheckCircle, FiClock, FiSearch } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import toast from "react-hot-toast";

export default function RecruiterDashboardPage() {
  const [showPostModal, setShowPostModal] = useState(false);
  const [jobForm, setJobForm] = useState({
    title: "",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "",
    description: "",
  });

  const [postedJobs, setPostedJobs] = useState([
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      applicants: 19,
      views: 340,
      status: "Active",
    },
    {
      id: 2,
      title: "Lead Product Designer",
      department: "Design",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      applicants: 12,
      views: 210,
      status: "Active",
    },
    {
      id: 3,
      title: "AI & ML Platform Engineer",
      department: "AI & Data",
      location: "Remote",
      type: "Contract",
      applicants: 27,
      views: 480,
      status: "Active",
    },
  ]);

  const handlePostJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      title: jobForm.title,
      department: jobForm.department,
      location: jobForm.location,
      type: jobForm.type,
      applicants: 0,
      views: 1,
      status: "Active",
    };
    setPostedJobs([newJob, ...postedJobs]);
    setShowPostModal(false);
    toast.success("Job posting created and published live!");
    setJobForm({
      title: "",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="space-y-8">
      {/* Recruiter Header */}
      <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Recruiter & Employer Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
            Talent Acquisition Hub
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Publish open roles, review pre-vetted AI candidates, and schedule interviews.
          </p>
        </div>

        <button
          onClick={() => setShowPostModal(true)}
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-5 py-3 rounded-xl text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 shrink-0"
        >
          <FiPlus className="text-base" />
          <span>Post New Job</span>
        </button>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-400 font-medium">Active Jobs</span>
            <HiOutlineBriefcase className="text-emerald-400 text-lg" />
          </div>
          <span className="text-2xl font-bold text-zinc-100">{postedJobs.length}</span>
          <span className="text-[11px] text-zinc-500 block mt-1">Live on board</span>
        </div>

        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-400 font-medium">Total Applicants</span>
            <FiUsers className="text-blue-400 text-lg" />
          </div>
          <span className="text-2xl font-bold text-zinc-100">58</span>
          <span className="text-[11px] text-emerald-400 block mt-1">+9 new today</span>
        </div>

        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-400 font-medium">Job Views</span>
            <FiEye className="text-amber-400 text-lg" />
          </div>
          <span className="text-2xl font-bold text-zinc-100">1,030</span>
          <span className="text-[11px] text-emerald-400 block mt-1">+18% this month</span>
        </div>

        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-400 font-medium">Interview Pipeline</span>
            <FiCheckCircle className="text-purple-400 text-lg" />
          </div>
          <span className="text-2xl font-bold text-zinc-100">8</span>
          <span className="text-[11px] text-zinc-500 block mt-1">Qualified candidates</span>
        </div>
      </div>

      {/* Live Jobs Table */}
      <div className="bg-[#121214] border border-zinc-800/80 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-zinc-100">Active Job Postings</h2>
          <span className="text-xs text-zinc-400">Total: {postedJobs.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
                <th className="pb-3 px-3">Job Title</th>
                <th className="pb-3 px-3">Location & Type</th>
                <th className="pb-3 px-3">Applicants</th>
                <th className="pb-3 px-3">Views</th>
                <th className="pb-3 px-3">Status</th>
                <th className="pb-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs">
              {postedJobs.map((job) => (
                <tr key={job.id} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 px-3 font-semibold text-zinc-100">{job.title}</td>
                  <td className="py-4 px-3 text-zinc-400">
                    {job.location} • {job.type}
                  </td>
                  <td className="py-4 px-3 font-medium text-emerald-400">
                    {job.applicants} candidates
                  </td>
                  <td className="py-4 px-3 text-zinc-400">{job.views} views</td>
                  <td className="py-4 px-3">
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-right">
                    <button
                      onClick={() => toast.success(`Viewing ${job.applicants} candidates for ${job.title}`)}
                      className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors"
                    >
                      Review Candidates
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Post Job Modal */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
          <div className="bg-[#121214] border border-zinc-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <h2 className="text-xl font-bold text-zinc-100 mb-1">Create Job Posting</h2>
            <p className="text-xs text-zinc-400 mb-6">
              Post a verified opening to attract top-tier software engineers and designers.
            </p>

            <form onSubmit={handlePostJob} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                  Job Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Backend Engineer"
                  value={jobForm.title}
                  onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                    Department
                  </label>
                  <select
                    value={jobForm.department}
                    onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500/50"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Product">Product</option>
                    <option value="AI & Data">AI & Data</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Remote (US/EU)"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                  Salary Band
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. $140k - $180k/year"
                  value={jobForm.salary}
                  onChange={(e) => setJobForm({ ...jobForm, salary: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                  Job Summary
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe key responsibilities and impact..."
                  value={jobForm.description}
                  onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-semibold py-3 rounded-xl text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 rounded-xl text-xs shadow-md transition-all"
                >
                  Publish Opening
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
