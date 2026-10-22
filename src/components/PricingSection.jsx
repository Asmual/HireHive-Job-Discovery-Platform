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
        "Basic profile and resume showcase",
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
    <section className="bg-[#09090b] text-zinc-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {showTitle && (
          <>
            {/* Section Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
              TRANSPARENT PRICING
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight max-w-2xl mb-4 leading-tight">
              Invest in your career, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                accelerate your trajectory
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base text-center max-w-xl mb-10">
              No hidden fees. Switch or cancel anytime. All plans include 100% verified employer listings.
            </p>
          </>
        )}

        {/* Toggle Switch Container */}
        <div className="bg-[#121214] border border-zinc-800 p-1.5 rounded-full flex items-center gap-1 mb-14 shadow-lg">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-white text-zinc-950 shadow-md"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Monthly Billing
          </button>
          
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              billingCycle === "yearly"
                ? "bg-white text-zinc-950 shadow-md"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>Annual Billing</span>
            <span className="bg-emerald-500 text-zinc-950 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
              Save 25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#121214] border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular 
                  ? "border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/40" 
                  : "border-zinc-800 hover:border-zinc-700 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header: Icon, Name and Price */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner">
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100 tracking-wide">
                        {plan.name}
                      </h3>
                      {!plan.isPopular && (
                        <span className="text-[11px] text-zinc-500 font-medium">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-baseline text-zinc-100">
                    <span className="text-3xl font-extrabold">${plan.price}</span>
                    <span className="text-xs text-zinc-500 ml-1">/mo</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="h-px w-full bg-zinc-800/80 mb-6" />

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <FiCheck className="text-[10px]" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href={plan.href}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    : "bg-white hover:bg-zinc-200 text-zinc-950 shadow-md"
                }`}
              >
                <span>{plan.cta}</span>
                <HiOutlineArrowRight className="text-sm" />
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
