"use client";

import React, { useState, useEffect, FormEvent } from "react";
import {
  Lock,
  Mail,
  ArrowRight,
  Activity,
  ShieldCheck,
  Stethoscope,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // ✅ backend states (ADDED)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const goToSignup = () => {
    router.push("/signup");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ backend-connected login
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      router.push("/dashboard");
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
        {/* LEFT SIDE */}
        <div className="relative w-full md:w-[40%] lg:w-[42%] bg-[#1A2E26] flex flex-col justify-center p-8 sm:p-10 md:p-16 overflow-hidden min-h-[320px] md:min-h-full">
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
                  Empowering care <br className="hidden sm:block" />
                  <span className="italic text-[#D4AF37] font-light">
                    across the gap.
                  </span>
                </h2>

                <p className="text-base md:text-lg text-white/50 max-w-sm font-medium leading-relaxed">
                  Re-enter the secure network to manage patient clinical records
                  and coordinate community outreach.
                </p>
              </div>

              <div className="hidden sm:flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-4 px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <Stethoscope className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/80">
                    Clinical Dashboard Active
                  </span>
                </div>
                <div className="flex items-center gap-4 px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/80">
                    Encrypted Session Vault
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:block pt-8 border-t border-white/10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                © 2026 Clinical Sovereignty Protocol
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 p-6 sm:p-10 md:p-16 lg:p-20 bg-white flex items-center">
          <div className="max-w-md mx-auto w-full">
            <header className="mb-8 md:mb-12 space-y-3 md:space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-[#F4F6F2] text-[#1A2E26] text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                Professional Gateway
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#1A2E26] tracking-tight">
                Welcome Back
              </h3>
              <p className="text-sm md:text-base text-slate-500 font-medium">
                Enter your professional credentials to access your secure
                portal.
              </p>
            </header>

            <form className="space-y-5 md:space-y-6" onSubmit={handleLogin}>
              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                  Professional Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.jenkins@ruralhealth.org"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all text-[#1A2E26] text-sm md:text-base font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                  Security Key
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all text-[#1A2E26] text-sm md:text-base font-medium"
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A2E26] hover:bg-[#254136] text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#1A2E26]/10 active:scale-[0.99] transition-all duration-500 uppercase text-[10px] md:text-[11px] tracking-[0.2em]"
              >
                {loading ? "Authorizing..." : "Authorize Session"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <footer className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
              <p className="text-slate-500 text-xs md:text-sm font-medium text-center">
                New to the network?{" "}
                <button
                  onClick={goToSignup}
                  className="text-[#1A2E26] font-black uppercase tracking-widest"
                >
                  Create Account
                </button>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
