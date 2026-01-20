"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Stethoscope,
  Menu,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const goToSignup = () => {
    router.push('/signup');
  }
  const redirect = () => {
    router.push('/dashboard')
  }
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Login sequence initiated");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFDFD] font-sans selection:bg-[#D4AF37]/20 selection:text-[#1A2E26] p-0 sm:p-4 md:p-8">
      <div 
        className={`w-full max-w-6xl flex flex-col md:flex-row bg-white sm:rounded-[2.5rem] shadow-2xl shadow-[#1A2E26]/10 overflow-hidden transition-all duration-1000 ease-out border-b md:border border-[#1A2E26]/5 min-h-screen sm:min-h-0 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
      >
        {/* Left Side: Professional Branding & Narrative */}
        <div className="relative w-full md:w-[40%] lg:w-[42%] bg-[#1A2E26] flex flex-col justify-center p-8 sm:p-10 md:p-16 overflow-hidden min-h-[320px] md:min-h-full">
          {/* Ambient Decor - Responsive positioning */}
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
                  <span className="italic text-[#D4AF37] font-light">across the gap.</span>
                </h2>
                
                <p className="text-base md:text-lg text-white/50 max-w-sm font-medium leading-relaxed">
                  Re-enter the secure network to manage patient clinical records and coordinate community outreach.
                </p>
              </div>

              {/* Hidden on small mobile to save space, shown from sm up */}
              <div className="hidden sm:flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-4 px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <Stethoscope className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/80">Clinical Dashboard Active</span>
                </div>
                <div className="flex items-center gap-4 px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/80">Encrypted Session Vault</span>
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

        {/* Right Side: Authentication Interface */}
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
                Enter your professional credentials to access your secure portal.
              </p>
            </header>

            <form className="space-y-5 md:space-y-6" onSubmit={handleLogin}>
              {/* Email Input */}
              <div className={`space-y-1 md:space-y-2 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                  Professional Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
                  <input 
                    type="email" 
                    required
                    placeholder="s.jenkins@ruralhealth.org"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all text-[#1A2E26] text-sm md:text-base font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className={`space-y-1 md:space-y-2 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[9px] md:text-[10px] font-black text-[#1A2E26]/60 uppercase tracking-widest ml-1">
                    Security Key
                  </label>
                  <button type="button" className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-widest hover:text-[#1A2E26] transition-colors">
                    Reset Key?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#D4AF37] transition-colors" />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-11 md:pl-12 pr-4 py-3.5 md:py-4 bg-[#F4F6F2]/50 border-2 border-transparent rounded-xl md:rounded-2xl focus:outline-none focus:border-[#1A2E26] focus:bg-white transition-all text-[#1A2E26] text-sm md:text-base font-medium"
                  />
                </div>
              </div>

              {/* Trusted Terminal Checkbox */}
              <div className={`flex items-center gap-3 pt-1 md:pt-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative flex items-center h-5">
                  <input 
                    id="trusted" 
                    type="checkbox" 
                    className="w-4 h-4 md:w-5 md:h-5 rounded-md md:rounded-lg border-2 border-[#F4F6F2] text-[#1A2E26] focus:ring-[#D4AF37] cursor-pointer" 
                  />
                </div>
                <label htmlFor="trusted" className="text-[11px] md:text-xs font-medium text-slate-500 cursor-pointer select-none">
                  Keep me logged in on this terminal
                </label>
              </div>

              {/* Submit Button */}
              <button 
                onClick={() => redirect()}
                type="submit"
                className={`w-full bg-[#1A2E26] hover:bg-[#254136] text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#1A2E26]/10 active:scale-[0.99] transition-all duration-500 delay-400 group uppercase text-[10px] md:text-[11px] tracking-[0.2em] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Authorize Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <footer className={`mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center gap-4">
                <p className="text-slate-500 text-xs md:text-sm font-medium text-center">
                  New to the network?{" "}
                  <button onClick={() => goToSignup()} className="text-[#1A2E26] font-black hover:text-[#D4AF37] transition-colors uppercase text-[9px] md:text-[10px] tracking-widest block sm:inline mt-2 sm:mt-0">
                    Create Account
                  </button>
                </p>
                <div className="md:hidden text-[9px] font-black uppercase tracking-[0.2em] text-[#1A2E26]/30">
                  © 2026 Clinical Sovereignty Protocol
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}