import { FiSearch, FiTrendingUp, FiBookmark, FiMousePointer, FiFileText, FiHexagon } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuTrendingUp } from "react-icons/lu";

export default function FeaturesSection() {
  const featuresData = [
    {
      id: 1,
      title: "Smart Search",
      description: "Find your ideal role with advanced filters & keywords.",
      icon: <FiSearch className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 2,
      title: "Salary Insights",
      description: "Get real compensation data to negotiate confidently.",
      icon: <FiTrendingUp className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 3,
      title: "Top Companies",
      description: "Apply to vetted, high-growth employers actively hiring.",
      icon: <HiOutlineBuildingOffice2 className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 4,
      title: "Saved Bookmarks",
      description: "Manage applications & favorites on your candidate dashboard.",
      icon: <FiBookmark className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 5,
      title: "One-Click Apply",
      description: "Submit fast direct applications without endless forms.",
      icon: <FiMousePointer className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 6,
      title: "Resume Builder",
      description: "Create sleek developer resumes with modern templates.",
      icon: <FiFileText className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 7,
      title: "Skill Matching",
      description: "Discover roles matching your exact experience & stack.",
      icon: <FiHexagon className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    },
    {
      id: 8,
      title: "Career Growth",
      description: "Boost your trajectory with interview & salary tips.",
      icon: <LuTrendingUp className="text-base text-fuchsia-400 group-hover:scale-105 transition-transform" />
    }
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-emerald-400 mb-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" />
          PLATFORM CAPABILITIES
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" />
        </div>

        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center tracking-tight text-zinc-100 mb-6">
          Everything You Need to Land Your Next Role
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {featuresData.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-start p-3.5 rounded-xl bg-[#121214] border border-zinc-800/80 hover:border-zinc-700 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="flex flex-col gap-0.5">
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-fuchsia-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-400 leading-snug">
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
