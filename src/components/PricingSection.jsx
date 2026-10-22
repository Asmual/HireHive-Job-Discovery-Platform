"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { LuCrown, LuTrendingUp, LuZap } from "react-icons/lu";

export default function PricingSection({ showTitle = true }) {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      badge: "Free Forever",
      icon: <LuCrown className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
      price: 0,
      description: "Essential tools for active job seekers looking for their next milestone.",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands & benchmark",
        "Unlimited direct job applications",
        "Basic profile & resume showcase",
        "Standard recruiter inbox access"
      ],
      isPopular: false,
      cta: "Get Started Free",
      href: "/signup"
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Most Popular",
      icon: <LuTrendingUp className="text-emerald-400 transition-colors" />,
      price: billingCycle === "monthly" ? 19 : 14,
      description: "Supercharged intelligence and priority queue for ambitious professionals.",
      features: [
        "Everything in Starter, plus:",
        "Unlimited AI match briefs & skill gap analysis",
        "Top-of-inbox priority recruiter queue",
        "AI automated resume tailoring per role",
        "Company insider reviews & interview leaks",
        "Direct messaging with verified recruiters"
      ],
      isPopular: true,
      cta: "Start 14-Day Free Trial",
      href: "/signup"
    },
    {
      id: "premium",
      name: "Executive",
      badge: "High Growth",
      icon: <LuZap className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
      price: billingCycle === "monthly" ? 79 : 59,
      description: "White-glove executive representation and direct talent advisory.",
      features: [
        "Everything in Growth, plus:",
        "1-on-1 quarterly career coaching session",
        "Verified Talent badge on recruiter searches",
        "Multi-profile executive portfolio links",
        "Full compensation negotiation assistance",
        "Guaranteed interview intro or money back"
      ],
      isPopular: false,
      cta: "Upgrade to Executive",
      href: "/signup"
    }
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {showTitle && (
          <>
            {/* Section Tag */}
            <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" />
              TRANSPARENT PRICING
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-xs" />
            </div>

            {/* Section Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center tracking-tight text-zinc-100 mb-1.5 leading-snug">
              Invest in your career,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                accelerate your trajectory
              </span>
            </h2>

            <p className="text-zinc-400 text-xs text-center max-w-md mb-6">
              No hidden fees. Switch or cancel anytime. All plans include 100% verified employer listings.
            </p>
          </>
        )}

        {/* Toggle Switch Container */}
        <div className="bg-[#121214] border border-zinc-800 p-1 rounded-full flex items-center gap-1 mb-8 shadow-sm">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-1.5 text-[11px] font-semibold rounded-full transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Monthly
          </button>
          
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-semibold rounded-full transition-all duration-200 ${
              billingCycle === "yearly"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>Annual</span>
            <span className="bg-emerald-500 text-zinc-950 px-1.5 py-0.5 rounded-full text-[9px] font-black uppercase">
              Save 25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#121214] border rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 relative ${
                plan.isPopular 
                  ? "border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.12)] ring-1 ring-emerald-500/40" 
                  : "border-zinc-800 hover:border-zinc-700 shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header: Icon, Name and Price */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm shadow-inner">
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-100 tracking-wide">
                        {plan.name}
                      </h3>
                      {!plan.isPopular && (
                        <span className="text-[10px] text-zinc-500 font-medium">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-baseline text-zinc-100">
                    <span className="text-2xl font-extrabold">${plan.price}</span>
                    <span className="text-[11px] text-zinc-500 ml-1">/mo</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 mb-4 leading-relaxed">
                  {plan.description}
                </p>

                <div className="h-px w-full bg-zinc-800/80 mb-4" />

                {/* Features List */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <FiCheck className="text-[9px]" />
                      </div>
                      <span className="leading-tight text-[11px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href={plan.href}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 ${
                  plan.isPopular
                    ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md"
                    : "bg-white hover:bg-zinc-200 text-zinc-950"
                }`}
              >
                <span>{plan.cta}</span>
                <HiOutlineArrowRight className="text-xs" />
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
