/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Image component ইম্পোর্ট করা হয়েছে
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { CiLogout } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const menuItems = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  const isActive = (path) => pathname === path;

  const handleSignOut = async () => {
    const toastId = toast.loading("Signing out...");
    try {
      await signOut();
      toast.success("Signed out successfully", { id: toastId });
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Failed to sign out", { id: toastId });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#09090b] px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left Side: Logo & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="text-zinc-400 hover:text-emerald-400 focus:outline-none md:hidden transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

         
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-wide group">
            <div className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/HireHive_Logo.svg" 
                alt="HireHive Logo" 
                width={32} 
                height={32} 
                priority
                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
              />
            </div>
            <span className="text-zinc-100 font-semibold text-lg tracking-normal">
              Hire<span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">Hive</span>
            </span>
          </Link>
        </div>

        {/* Right Side: Navigation & Auth Capsule */}
        <div className="hidden md:flex items-center gap-6 bg-[#121214] border border-zinc-800 rounded-full px-6 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          <ul className="flex items-center gap-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                      : "text-zinc-400 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="h-4 w-px bg-zinc-700" />

          {!isPending && (
            <div className="flex items-center gap-4">
              {session ? (
                <>
                  {/* User Section: Avatar / Icon + Greeting */}
                  <div className="flex items-center gap-2">
                    <div className="relative cursor-pointer" title={session.user?.name}>
                      {session.user?.image ? (
                        <img 
                          src={session.user.image} 
                          alt={session.user.name || "User Avatar"} 
                          className="h-7 w-7 rounded-full object-cover border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-all"
                        />
                      ) : (
                        <FaCircleUser className="h-7 w-7 text-emerald-400/80 hover:text-emerald-400 transition-colors drop-shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
                      )}
                    </div>

                    <span className="text-sm font-medium text-zinc-300 max-w-30 truncate pl-1">
                      Hi, {session.user?.name ? session.user.name.split(" ")[0] : "User"}
                    </span>
                  </div>

                  {/* Sign Out Button */}
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-red-400 transition-colors focus:outline-none"
                  >
                    <CiLogout className="text-base stroke-[0.5]" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-emerald-500 hover:text-emerald-400 drop-shadow-[0_0_4px_rgba(52,211,153,0.2)] transition-all duration-200"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Responsive Menu */}
      {isMenuOpen && (
        <div className="mt-4 border border-zinc-800 bg-[#121214] rounded-2xl md:hidden transition-all duration-300">
          <ul className="flex flex-col gap-1 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {!isPending && (
              <li className="mt-2 border-t border-zinc-800 pt-2 flex flex-col gap-2">
                {session ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-2 text-zinc-300 text-base font-medium">
                      {session.user?.image ? (
                        <img 
                          src={session.user.image} 
                          alt={session.user.name || "User Avatar"} 
                          className="h-8 w-8 rounded-full object-cover border border-emerald-500/30"
                        />
                      ) : (
                        <FaCircleUser className="h-8 w-8 text-emerald-400/80 drop-shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
                      )}
                      <span className="truncate">Hi, {session.user?.name || "User"}</span>
                    </div>
                    
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleSignOut();
                      }}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-red-500/10 border border-red-500/20 px-3 py-2 text-base font-semibold text-red-400 hover:bg-red-500/20"
                    >
                      <CiLogout className="text-lg" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-center rounded-xl px-3 py-2 text-base font-medium text-emerald-400 hover:bg-zinc-900"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-center rounded-xl bg-white px-3 py-2 text-base font-semibold text-zinc-950 hover:bg-emerald-400"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}