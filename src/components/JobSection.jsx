import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { jobsData } from "@/data/jobs";

export default function JobSection() {
  const featuredJobs = jobsData.slice(0, 6);

  return (
    <section className="bg-[#09090b] text-zinc-100 py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Tag */}
        <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-emerald-400 mb-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" />
          SMART JOB DISCOVERY
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" />
        </div>

        {/* Compact Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center tracking-tight text-zinc-100 mb-2">
          Featured Roles From Leading Tech Teams
        </h2>

        {/* Short Subtitle */}
        <p className="text-xs text-zinc-400 text-center max-w-lg mb-6">
          High-velocity opportunities with verified compensation and direct recruiter contact.
        </p>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-8">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#121214] border border-zinc-800/80 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${job.companyColor} border border-zinc-700/50 flex items-center justify-center text-white font-bold text-xs shadow-xs`}
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

                  <span className="text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {job.category}
                  </span>
                </div>

                <Link href={`/jobs/${job.id}`}>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-100 mb-1.5 tracking-normal group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {job.title}
                  </h3>
                </Link>

                <p className="text-[11px] text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-0.5 text-[11px] text-zinc-300">
                    <HiOutlineLocationMarker className="text-xs text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[120px]">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-0.5 text-[11px] text-zinc-300">
                    <HiOutlineBriefcase className="text-xs text-emerald-400 shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-0.5 text-[11px] text-emerald-400 font-medium">
                    <FiDollarSign className="text-xs" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-zinc-800/80">
                <Link
                  href={`/jobs/${job.id}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <span>View Details</span>
                  <HiOutlineArrowUpRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href={`/jobs/${job.id}#apply-section`}
                  className="bg-white hover:bg-emerald-400 text-zinc-950 font-bold px-3 py-1 rounded-lg text-[11px] transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/jobs"
          className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium px-4 py-2 rounded-xl text-xs transition-all duration-200"
        >
          View all {jobsData.length} open positions →
        </Link>
        
      </div>
    </section>
  );
}
