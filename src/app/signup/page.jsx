"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn, signOut } from "@/lib/auth-client";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    password: "",
    role: "seeker" 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Creating your account...");

    try {
      const response = await signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        disableAutoSignIn: true,
        data: {
          role: formData.role
        }
      });

      if (response?.error) {
        throw new Error(response.error.message || "Failed to create account.");
      }

      await signOut({
        redirect: false
      });

      toast.success("Account created successfully! Please sign in.", { id: toastId });

      router.push("/login");
      router.refresh();
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
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
          <h2 className="text-2xl font-bold tracking-tight text-zinc-200">Create an account</h2>
          <p className="text-sm text-zinc-500 mt-1">Get started with your career journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-zinc-600 text-lg" />
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
            </div>
          </div>

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
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Password</label>
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

          {/* 🛠️ Custom Tailwind Radio Buttons */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3">Join As A</label>
            <div className="grid grid-cols-2 gap-4">
              {/* Job Seeker Option */}
              <label 
                className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                  formData.role === "seeker" 
                    ? "bg-zinc-900/90 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                    : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <span className="text-sm font-medium text-zinc-200">Job Seeker</span>
                <div className="relative flex items-center justify-center">
                  <input 
                    type="radio" 
                    name="role" 
                    value="seeker"
                    checked={formData.role === "seeker"}
                    onChange={() => setFormData({ ...formData, role: "seeker" })}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center ${
                    formData.role === "seeker" ? "border-emerald-500 bg-transparent" : "border-zinc-700"
                  }`}>
                    {formData.role === "seeker" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    )}
                  </div>
                </div>
              </label>

              {/* Recruiter Option */}
              <label 
                className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                  formData.role === "recruiter" 
                    ? "bg-zinc-900/90 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                    : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <span className="text-sm font-medium text-zinc-200">Recruiter</span>
                <div className="relative flex items-center justify-center">
                  <input 
                    type="radio" 
                    name="role" 
                    value="recruiter"
                    checked={formData.role === "recruiter"}
                    onChange={() => setFormData({ ...formData, role: "recruiter" })}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center ${
                    formData.role === "recruiter" ? "border-emerald-500 bg-transparent" : "border-zinc-700"
                  }`}>
                    {formData.role === "recruiter" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    )}
                  </div>
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none text-sm mt-2"
          >
            {loading ? "Creating account..." : "Sign Up"}
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
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}