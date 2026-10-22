import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { jobsData } from "@/data/jobs";

export default function JobSection() {
  const featuredJobs = jobsData.slice(0, 6);

  return (
    <section className="bg-[#09090b] text-zinc-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
          SMART JOB DISCOVERY
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight max-w-2xl mb-16 leading-tight">
          The roles you would never find by searching
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${job.companyColor} border border-zinc-700/50 flex items-center justify-center text-white font-bold text-sm shadow`}
                    >
                      {job.companyLogo}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                        {job.company}
                      </span>
                      <span className="text-[10px] text-zinc-500">{job.postedAt}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {job.category}
                  </span>
                </div>

                <Link href={`/jobs/${job.id}`}>
                  <h3 className="text-lg font-bold text-zinc-100 mb-2 tracking-wide group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {job.title}
                  </h3>
                </Link>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-300">
                    <HiOutlineLocationMarker className="text-sm text-emerald-400" />
                    <span className="truncate max-w-[130px]">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-300">
                    <HiOutlineBriefcase className="text-sm text-emerald-400" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-emerald-400 font-medium">
                    <FiDollarSign className="text-xs" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                <Link
                  href={`/jobs/${job.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <span>View Details</span>
                  <HiOutlineArrowUpRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href={`/jobs/${job.id}#apply-section`}
                  className="bg-white hover:bg-emerald-400 text-zinc-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/jobs"
          className="bg-white text-zinc-950 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-md hover:shadow-emerald-500/20 text-sm"
        >
          View all open positions ({jobsData.length})
        </Link>
        
      </div>
    </section>
  );
}
