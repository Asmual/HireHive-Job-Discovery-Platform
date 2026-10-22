"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBriefcase, FiBookmark, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { label: "Overview", href: "/dashboard", icon: <FiHome /> },
    { label: "Browse Jobs", href: "/jobs", icon: <FiBriefcase /> },
    { label: "Recruiter Portal", href: "/dashboard/recruiter", icon: <HiOutlineBuildingOffice2 /> },
    { label: "Companies", href: "/company", icon: <FiBookmark /> },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      window.location.href = "/";
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <aside className="w-full md:w-64 bg-[#121214] border-r border-zinc-800/80 p-5 flex flex-col justify-between shrink-0">
      <div>
        <div className="mb-8 px-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-zinc-100">
            <span className="bg-emerald-500 text-zinc-950 px-2 py-0.5 rounded-lg text-sm font-black">
              H
            </span>
            <span>Hire<span className="text-emerald-400">Hive</span></span>
          </Link>
          <span className="text-[11px] text-zinc-500 mt-1 block">Candidate Workspace</span>
        </div>

        <nav className="space-y-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-zinc-800/80">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs border border-emerald-500/30">
            {session?.user?.name ? session.user.name[0].toUpperCase() : "U"}
          </div>
          <div className="overflow-hidden">
            <span className="block text-xs font-semibold text-zinc-200 truncate">
              {session?.user?.name || "HireHive Member"}
            </span>
            <span className="block text-[11px] text-zinc-500 truncate">
              {session?.user?.email || "active candidate"}
            </span>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
        >
          <FiLogOut />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
