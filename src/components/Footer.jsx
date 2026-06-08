"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#09090b] text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6 sm:px-12 lg:px-16 mt-20">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 pb-12 border-b border-zinc-900">
          
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-wide group w-fit">
              <div className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/HireHive_Logo.svg" 
                  alt="HireHive Logo" 
                  width={32} 
                  height={32} 
                  className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                />
              </div>
              <span className="text-zinc-100 font-semibold text-lg">
                Hire<span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">Hive</span>
              </span>
            </Link>
            
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300 text-base"
              >
                <FaFacebookF />
              </a>

              <a 
                href="#" 
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300 text-base"
              >
                <FaGlobe />
              </a>

              <a 
                href="#" 
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300 text-base"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-emerald-400/90 drop-shadow-[0_0_6px_rgba(52,211,153,0.2)] tracking-wider">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-600">
          <p>Copyright 2026 — HireHive</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms & Policy</Link>
            <span>-</span>
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Guideline</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}