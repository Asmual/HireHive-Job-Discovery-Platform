import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi"; // Fixed the import path here
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function JobSection() {
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour"
    },
    {
      id: 2,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour"
    },
    {
      id: 3,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour"
    },
    {
      id: 4,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour"
    },
    {
      id: 5,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour"
    },
    {
      id: 6,
      title: "Frontend Developer",
      description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
      location: "New York, USA",
      type: "Hybrid",
      salary: "€25–€40/hour"
    }
  ];

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
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="bg-[#121214] border border-zinc-800/60 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 tracking-wide">
                  {job.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-300">
                    <HiOutlineLocationMarker className="text-sm text-emerald-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-300">
                    {/* The Tailwind style handles the color perfectly here */}
                    <HiOutlineBriefcase className="text-sm text-emerald-400" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs text-zinc-300 w-full sm:w-auto">
                    <FiDollarSign className="text-xs text-emerald-400" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/jobs/${job.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors duration-200 w-fit"
              >
                <span>Apply Now</span>
                <HiOutlineArrowUpRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          ))}
        </div>

        <Link
          href="/jobs"
          className="bg-white text-zinc-950 font-medium px-6 py-3 rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-md hover:shadow-emerald-500/10 text-sm"
        >
          View all job open
        </Link>
        
      </div>
    </section>
  );
}