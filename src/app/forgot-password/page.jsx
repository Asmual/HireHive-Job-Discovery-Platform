"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail, FiArrowLeft, FiCheck } from "react-icons/fi";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Password reset instructions sent to your email!");
    }, 1000);
  };

  return (
    <main className="min-h-screen w-full bg-[#09090b] text-zinc-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-100 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-[#121214]/90 border border-zinc-800/80 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl tracking-wide group mb-4">
            <span className="bg-emerald-500 text-zinc-950 px-2.5 py-1 rounded-lg text-lg font-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">H</span>
            <span className="text-zinc-100">Hire<span className="text-emerald-400">Hive</span></span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-200">Reset your password</h2>
          <p className="text-sm text-zinc-500 mt-1">
            Enter your registered email and we will send you a reset link
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              <FiCheck />
            </div>
            <h3 className="text-base font-bold text-emerald-400">Check your inbox</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We&apos;ve sent an email to <span className="text-zinc-200 font-semibold">{email}</span> with a link to reset your password.
            </p>
            <Link
              href="/login"
              className="inline-block bg-white hover:bg-emerald-400 text-zinc-950 font-semibold py-2.5 px-6 rounded-xl text-xs transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-4 text-zinc-600 text-lg" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all text-sm disabled:opacity-50"
            >
              {loading ? "Sending reset link..." : "Send Reset Link"}
            </button>

            <div className="text-center pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <FiArrowLeft /> Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
