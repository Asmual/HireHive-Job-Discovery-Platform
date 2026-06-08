"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { LuCrown, LuTrendingUp, LuZap } from "react-icons/lu";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: <LuCrown className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
      price: billingCycle === "monthly" ? 0 : 0,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited"
      ],
      isPopular: false
    },
    {
      id: "growth",
      name: "Growth",
      icon: <LuTrendingUp className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
      price: billingCycle === "monthly" ? 17 : 12, // Reduced price example for yearly
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited"
      ],
      isPopular: true
    },
    {
      id: "premium",
      name: "Premium",
      icon: <LuZap className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />,
      price: billingCycle === "monthly" ? 99 : 79,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="bg-[#09090b] text-zinc-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
          PRICING
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight max-w-2xl mb-10 leading-tight">
          Pay for the leverage, not the listings
        </h2>

        {/* Toggle Switch Container */}
        <div className="bg-[#121214] border border-zinc-800 p-1 rounded-full flex items-center gap-1 mb-16 relative">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-white text-zinc-950 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Monthly
          </button>
          
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`flex items-center gap-1.5 px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
              billingCycle === "yearly"
                ? "bg-white text-zinc-950 font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>Yearly</span>
            <span className="bg-magenta-500 text-[10px] bg-fuchsia-600 text-white px-1.5 py-0.5 rounded-full font-bold">
              25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#121214] border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group ${
                plan.isPopular 
                  ? "border-zinc-700 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
                  : "border-zinc-800/60 hover:border-zinc-700"
              }`}
            >
              <div>
                {/* Header: Icon, Name and Price */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-200 tracking-wide">
                      {plan.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-baseline text-zinc-100">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-xs text-zinc-500 ml-1">/month</span>
                  </div>
                </div>

                {/* Sub-heading */}
                <p className="text-sm font-medium text-zinc-200 mb-6">
                  Start building your insights hub:
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                      <div className="w-4 h-4 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                        <FiPlus className="text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white text-zinc-950 hover:bg-emerald-400"
                    : "bg-[#1c1c1f] text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <span>Choose This Plan</span>
                <HiOutlineArrowRight className="text-sm" />
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}