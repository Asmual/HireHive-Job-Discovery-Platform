"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { jobsData } from "@/data/jobs";
import { FiCheckCircle, FiClock, FiBookmark, FiSend, FiArrowUpRight, FiSearch } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function DashboardOverviewPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("applications");

  // Realistic mock applications
  const initialApplications = [
    {
      id: "app-1",
      jobTitle: "Lead Frontend Engineer",
      company: "Vercel",
      logo: "▲",
      appliedDate: "Oct 20, 2026",
      status: "Interview Scheduled",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      salary: "$165k - $210k",
      jobId: "frontend-lead",
    },
    {
      id: "app-2",
      jobTitle: "AI Research Scientist",
      company: "OpenAI",
      logo: "✦",
      appliedDate: "Oct 18, 2026",
      status: "Under Review",
      statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      salary: "$240k - $340k",
      jobId: "ai-research-engineer",
    },
    {
      id: "app-3",
      jobTitle: "Senior Full-Stack Architect",
      company: "Stripe",
      logo: "S",
      appliedDate: "Oct 15, 2026",
      status: "Reviewing Portfolio",
      statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      salary: "$190k - $250k",
      jobId: "fullstack-architect",
    },
  ];

  const recommendedJobs = jobsData.slice(3, 6);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium mb-3">
            <HiOutlineSparkles />
            <span>Profile 95% Completed</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
            Welcome back, {session?.user?.name ? session.user.name.split(" ")[0] : "Candidate"}!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            You have 2 upcoming recruiter reviews and 4 fresh matching opportunities today.
          </p>
        </div>

        <Link
          href="/jobs"
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all shrink-0"
        >
          Explore More Jobs →
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-400 font-medium">Applied Roles</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm">
              <FiSend />
            </div>
          </div>
          <span className="text-2xl font-bold text-zinc-100">3</span>
          <span className="text-[11px] text-emerald-400 block mt-1">+1 this week</span>
        </div>

        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-400 font-medium">Interviews</span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">
              <FiCheckCircle />
            </div>
          </div>
          <span className="text-2xl font-bold text-zinc-100">1</span>
          <span className="text-[11px] text-zinc-500 block mt-1">Next: Monday 2 PM</span>
        </div>

        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-400 font-medium">Profile Views</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-sm">
              <FiClock />
            </div>
          </div>
          <span className="text-2xl font-bold text-zinc-100">48</span>
          <span className="text-[11px] text-emerald-400 block mt-1">+24% vs last week</span>
        </div>

        <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-400 font-medium">Saved Bookmarks</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm">
              <FiBookmark />
            </div>
          </div>
          <span className="text-2xl font-bold text-zinc-100">8</span>
          <span className="text-[11px] text-zinc-500 block mt-1">Curated list</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#121214] border border-zinc-800/80 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-6">
          <button
            onClick={() => setActiveTab("applications")}
            className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === "applications"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Active Applications (3)
          </button>
          <button
            onClick={() => setActiveTab("recommended")}
            className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === "recommended"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            AI Matches ({recommendedJobs.length})
          </button>
        </div>

        {activeTab === "applications" ? (
          <div className="space-y-4">
            {initialApplications.map((app) => (
              <div
                key={app.id}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-zinc-100 text-base">
                    {app.logo}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100">{app.jobTitle}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {app.company} • Applied on {app.appliedDate} • {app.salary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                  <Link
                    href={`/jobs/${app.jobId}`}
                    className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
                    title="View Role"
                  >
                    <FiArrowUpRight className="text-base" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedJobs.map((rec) => (
              <div
                key={rec.id}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-zinc-400">{rec.company}</span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                      98% Match
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-100 mb-1">{rec.title}</h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-4">{rec.description}</p>
                </div>
                <Link
                  href={`/jobs/${rec.id}`}
                  className="w-full bg-white hover:bg-emerald-400 text-zinc-950 font-semibold py-2 rounded-xl text-xs transition-colors text-center block"
                >
                  View Position
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
