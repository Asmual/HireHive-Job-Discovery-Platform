"use client";

import { useState } from "react";
import PricingSection from "@/components/PricingSection";
import { FiChevronDown, FiShield, FiHelpCircle, FiCheck, FiMinus } from "react-icons/fi";
import Link from "next/link";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Can I switch or cancel my plan at any time?",
      a: "Yes! There are zero lock-in contracts. You can upgrade, downgrade, or cancel your subscription anytime directly from your dashboard billing settings.",
    },
    {
      q: "How does the 14-day free trial work?",
      a: "You get full, unrestricted access to all Growth tier features for 14 days. If you don't love the match briefs and recruiter responses, cancel anytime before the trial ends without being charged.",
    },
    {
      q: "Are all company job listings verified?",
      a: "Yes, 100%. Every role on HireHive is verified with authorized employer domain identities and human-reviewed hiring managers to eliminate spam and ghost postings.",
    },
    {
      q: "What is your 100% money-back guarantee?",
      a: "If you subscribe to the Executive tier and don't receive qualified recruiter interviews within 60 days following our talent advisory recommendations, we will refund 100% of your subscription.",
    },
    {
      q: "Do you offer student or non-profit discounts?",
      a: "Yes! We offer a 50% discount for recent graduates, students, and employees of registered non-profit organizations. Contact our support team with your proof of status.",
    },
  ];

  const comparisonRows = [
    { feature: "AI Match Briefs", starter: "Top 5 / day", growth: "Unlimited", executive: "Unlimited + Dedicated curation" },
    { feature: "Direct Recruiter Applications", starter: "Unlimited", growth: "Unlimited", executive: "Unlimited" },
    { feature: "Application Queue Priority", starter: "Standard", growth: "Top 10% Highlight", executive: "VIP Direct Intro" },
    { feature: "Salary Benchmark Data", starter: "Basic", growth: "Full breakdown", executive: "Full + Negotiation playbook" },
    { feature: "AI Resume & Cover Tailoring", starter: false, growth: true, executive: true },
    { feature: "Recruiter Read Telemetry", starter: false, growth: true, executive: true },
    { feature: "1-on-1 Career Advisory", starter: false, growth: false, executive: "Quarterly Session" },
    { feature: "Verified Talent Badge", starter: false, growth: false, executive: true },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Pricing Hero + Cards */}
        <PricingSection showTitle={true} />

        {/* Feature Comparison Table */}
        <div className="mt-20 bg-[#121214] border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 mb-2">
              Plan Comparison Breakdown
            </h2>
            <p className="text-sm text-zinc-400">
              Detailed breakdown of features included across all tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400">
                  <th className="py-4 px-4 font-semibold">Features</th>
                  <th className="py-4 px-4 font-semibold">Starter (Free)</th>
                  <th className="py-4 px-4 font-semibold text-emerald-400">Growth ($14/mo)</th>
                  <th className="py-4 px-4 font-semibold">Executive ($59/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="py-4 px-4 font-medium text-zinc-200">{row.feature}</td>
                    
                    <td className="py-4 px-4 text-zinc-400">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <FiCheck className="text-emerald-400 text-base" />
                        ) : (
                          <FiMinus className="text-zinc-600" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>

                    <td className="py-4 px-4 text-emerald-400 font-medium">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <FiCheck className="text-emerald-400 text-base" />
                        ) : (
                          <FiMinus className="text-zinc-600" />
                        )
                      ) : (
                        row.growth
                      )}
                    </td>

                    <td className="py-4 px-4 text-zinc-300">
                      {typeof row.executive === "boolean" ? (
                        row.executive ? (
                          <FiCheck className="text-emerald-400 text-base" />
                        ) : (
                          <FiMinus className="text-zinc-600" />
                        )
                      ) : (
                        row.executive
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/40 via-[#121214] to-zinc-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl text-emerald-400 shrink-0">
            <FiShield />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-zinc-100 mb-1">
              30-Day Risk-Free Guarantee
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Try HireHive Growth or Executive. If you are not completely satisfied with your interview inquiries within 30 days, simply message us for a prompt, unconditional refund.
            </p>
          </div>
          <Link
            href="/signup"
            className="bg-white hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-md shrink-0"
          >
            Claim Your Guarantee
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
              <FiHelpCircle />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-100">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#121214] border border-zinc-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown
                      className={`text-lg text-zinc-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
