"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Signing in...");

    try {
      const response = await signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (response?.error) {
        throw new Error(response.error.message || "Invalid email or password.");
      }
      
      toast.success("Welcome back!", { id: toastId });
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      toast.error(err.message || "Invalid email or password.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch {
      toast.error("Google authentication failed.");
    }
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
          <h2 className="text-2xl font-bold tracking-tight text-zinc-200">Welcome back</h2>
          <p className="text-sm text-zinc-500 mt-1">Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-zinc-600 text-lg" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">Password</label>
              <Link href="/forgot-password" className="text-xs text-emerald-400 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <FiLock className="absolute left-4 text-zinc-600 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-12 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
              >
                {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none text-sm mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-zinc-800"></div>
          <span className="shrink mx-4 text-zinc-500 text-xs uppercase tracking-wider">Or continue with</span>
          <div className="grow border-t border-zinc-800"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium py-3 px-4 rounded-xl transition-all duration-200 text-sm"
        >
          <FcGoogle className="text-xl" />
          <span>Google</span>
        </button>

        <p className="text-center text-sm text-zinc-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-emerald-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
