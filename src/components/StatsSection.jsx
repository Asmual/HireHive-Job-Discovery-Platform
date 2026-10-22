"use client";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "50K+",
      label: "Active Jobs",
      icon: (
        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      number: "12K+",
      label: "Companies",
      icon: (
        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 3,
      number: "2M+",
      label: "Job Seekers",
      icon: (
        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      number: "97%",
      label: "Satisfaction Rate",
      icon: (
        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#09090b] py-8 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Subtle Light */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 h-40 w-96 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl z-10">
        
        {/* Main Heading Text */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-zinc-300">
            Assisting over <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold">15,000 job seekers</span> land their ideal roles.
          </h2>
        </div>

        {/* Stats Grid Dashboard Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-[#121214]/90 border border-zinc-800/80 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-emerald-500/30 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className="p-1.5 bg-zinc-900 rounded-md border border-zinc-800">
                  {stat.icon}
                </div>
              </div>

              <div className="mt-2">
                <span className="block text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {stat.number}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
