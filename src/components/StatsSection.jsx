"use client";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "50K",
      label: "Active Jobs",
      icon: (
        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      number: "12K",
      label: "Companies",
      icon: (
        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 3,
      number: "2M",
      label: "Job Seekers",
      icon: (
        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      number: "97%",
      label: "Satisfaction Rate",
      icon: (
        <svg className="h-5 w-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#09090b] pt-32 pb-24 px-6 overflow-hidden">
      
      {/* Background Globe Image Wrapper */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/globe.png')" }}
      />
 
      {/* Subtle Green Ambient Light instead of Blue to match your layout */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 h-100 w-150 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Main Heading Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-200 leading-snug">
            Assisting over <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400 font-bold drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">15,000 job seekers</span> find their dream positions.
          </h2>
        </div>

        {/* Stats Grid Dashboard Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-[#121214]/90 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between h-44 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="p-2 bg-zinc-900 w-fit rounded-lg border border-zinc-800 group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Data Content */}
              <div className="mt-4">
                <span className="block text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                  {stat.number}
                </span>
                <span className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}