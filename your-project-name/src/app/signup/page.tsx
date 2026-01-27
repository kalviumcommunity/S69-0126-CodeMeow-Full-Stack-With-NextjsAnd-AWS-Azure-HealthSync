"use client";

import React, { useState, useEffect, FormEvent } from "react";
import {
  Lock,
  Mail,
  ArrowRight,
  Activity,
  Globe,
  ShieldCheck,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // ✅ backend states (ADDED ONLY)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const goToLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ CONNECTED TO BACKEND
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          role: "doctor",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      router.push("/login");
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFDFD] font-sans selection:bg-[#D4AF37]/20 selection:text-[#1A2E26] p-0 sm:p-4 md:p-8">
      <div
        className={`w-full max-w-6xl flex flex-col md:flex-row bg-white sm:rounded-[2.5rem] shadow-2xl shadow-[#1A2E26]/10 overflow-hidden transition-all duration-1000 ease-out border-b md:border border-[#1A2E26]/5 min-h-screen sm:min-h-0 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        {/* LEFT SIDE — UNCHANGED */}
        <div className="relative w-full md:w-[40%] lg:w-[42%] bg-[#1A2E26] flex flex-col justify-center p-8 sm:p-10 md:p-16 overflow-hidden min-h-[300px] md:min-h-full">
          <div className="absolute top-[-5%] left-[-5%] w-[120%] h-[120%] border-[1px] border-[#D4AF37]/10 rounded-full hidden md:block"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[#D4AF37]/5 rounded-full blur-[80px] md:blur-[120px]"></div>

          <div className="relative z-10 flex flex-col h-full justify-between gap-8 md:gap-12 text-white">
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                </div>
                <span className="text-sm md:text-lg font-black tracking-tighter uppercase">
                  Health<span className="text-[#D4AF37]">Sync</span>
                </span>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight md:leading-[1.1] tracking-tight">
                  Standardizing care <br className="hidden sm:block" />
                  <span className="italic text-[#D4AF37] font-light">
                    for the frontier.
                  </span>
                </h2>
                <p className="text-base md:text-lg text-white/50 max-w-sm font-medium leading-relaxed">
                  Join a global network of practitioners bridging the gap between
                  rural clinics and modern clinical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 p-6 sm:p-10 md:p-16 lg:p-20 bg-white flex items-center">
          <div className="max-w-md mx-auto w-full">
            <header className="mb-8 md:mb-12 space-y-3 md:space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-[#F4F6F2] text-[#1A2E26] text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                Practitioner Enrollment
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#1A2E26] tracking-tight">
                Create Account
              </h3>
            </header>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSignup}>
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                  Full Name & Title
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Sarah Jenkins"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                  Professional Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.jenkins@ruralhealth.org"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                  Security Key
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A2E26] hover:bg-[#254136] text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 uppercase text-[10px] md:text-[11px] tracking-[0.2em]"
              >
                {loading ? "Registering..." : "Register Practitioner"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <footer className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
              <p className="text-slate-500 text-xs md:text-sm font-medium text-center">
                Member of the network?{" "}
                <button
                  onClick={goToLogin}
                  className="text-[#1A2E26] font-black uppercase tracking-widest"
                >
                  Login here
                </button>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}