import { FiSearch, FiTrendingUp, FiBookmark, FiMousePointer, FiFileText, FiHexagon } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuTrendingUp } from "react-icons/lu";

export default function FeaturesSection() {
  const featuresData = [
    {
      id: 1,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: <FiSearch className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 2,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: <FiTrendingUp className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 3,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: <HiOutlineBuildingOffice2 className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 4,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: <FiBookmark className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 5,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: <FiMousePointer className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 6,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: <FiFileText className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 7,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: <FiHexagon className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      id: 8,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: <LuTrendingUp className="text-xl text-fuchsia-400 group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
          FEATURES JOB
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight max-w-2xl mb-20 leading-tight">
          Everything you need to succeed
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {featuresData.map((item) => (
            <div key={item.id} className="flex gap-4 items-start group">
              
              {/* Icon Box with Dark Subtle Gradient */}
              <div className="w-14 h-14 rounded-xl bg-linear-to-b from-[#18181b] to-[#121214] border border-zinc-800/80 flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.3)] group-hover:border-zinc-700 transition-all duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-zinc-200 tracking-wide group-hover:text-fuchsia-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}