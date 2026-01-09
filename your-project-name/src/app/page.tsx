"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Plus, 
  Globe,
  Users,
  ChevronRight,
  Activity,
  Database,
  Lock,
  Network,
  Cpu,
  Menu,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const goToLogin = () => {
    router.push('/login');
  }
  const goToSignup = () => {
    router.push('/signup');
  }
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A2E26] font-sans selection:bg-[#D4AF37]/20 selection:text-[#1A2E26]">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-5 bg-white/90 backdrop-blur-md border-b border-[#1A2E26]/5">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1A2E26] rounded-lg flex items-center justify-center shadow-lg shadow-[#1A2E26]/20">
            <Plus className="text-[#D4AF37] w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
          </div>
          <span className="text-base md:text-lg font-black tracking-tighter text-[#1A2E26] uppercase">
            Health<span className="text-[#D4AF37]">Sync</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#1A2E26]/50">
          <a href="#" className="text-[#1A2E26] border-b-2 border-[#D4AF37] pb-1">About</a>
          <a href="#" className="hover:text-[#1A2E26] transition-colors">Privacy Protocols</a>
          <a href="#" className="hover:text-[#1A2E26] transition-colors">Data Sovereignty</a>
          <a href="#" className="hover:text-[#1A2E26] transition-colors">Infrastructure</a>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <button onClick={() => goToLogin()} className="hidden sm:block text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#1A2E26]/70 hover:text-[#1A2E26] transition-colors">Portal Login</button>
          <button onClick={() => goToSignup()} className="bg-[#1A2E26] text-white px-4 md:px-7 py-2 md:py-3 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#1A2E26]/20 hover:bg-[#254136] transition-all active:scale-95">
            Portal Signup
          </button>
          <button 
            className="lg:hidden p-2 text-[#1A2E26]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-[#1A2E26]/10 p-6 lg:hidden flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em]">About</a>
            <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em]">Privacy Protocols</a>
            <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em]">Data Sovereignty</a>
            <a href="#" className="text-[11px] font-black uppercase tracking-[0.2em]">Infrastructure</a>
            <hr className="border-[#1A2E26]/5" />
            <button className="text-left text-[11px] font-black uppercase tracking-[0.2em]">Portal Login</button>
          </div>
        )}
      </nav>

      <main className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT SIDEBAR: Problem Statement & Brand */}
        <div className="relative w-full lg:w-[40%] xl:w-[35%] lg:h-screen bg-[#1A2E26] flex flex-col justify-center p-8 sm:p-12 md:p-20 overflow-hidden lg:sticky lg:top-0 mt-16 lg:mt-0">
          {/* Ambient Lighting Decor */}
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] border-[1px] border-[#D4AF37]/5 rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 rounded-full blur-[100px] md:blur-[140px]"></div>
          
          <div className={`relative z-10 space-y-8 md:space-y-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#D4AF37]" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Privacy-Preserving Care</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif text-white leading-[1.1] tracking-tight">
              One Patient. <br />
              One Record. <br />
              <span className="italic text-[#D4AF37] font-light">Total Privacy.</span>
            </h1>

            <p className="text-base md:text-lg text-white/50 max-w-sm font-medium leading-relaxed">
              Healthcare professionals in rural areas struggle to keep medical records unified. We solve the interoperability gap without compromising on clinical data security.
            </p>

            <div className="pt-4 md:pt-8 flex flex-row flex-wrap items-center gap-8 md:gap-12">
              <div className="space-y-1 md:space-y-2">
                <p className="text-3xl md:text-4xl font-serif text-white">AES-256</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#D4AF37]/60">Encryption Standard</p>
              </div>
              <div className="w-[1px] h-10 md:h-14 bg-white/10 hidden sm:block"></div>
              <div className="space-y-1 md:space-y-2">
                <p className="text-3xl md:text-4xl font-serif text-white">HL7 FHIR</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#D4AF37]/60">Sync Compatibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: Solutions & Interoperability Focus */}
        <div className="flex-1 bg-white overflow-y-visible lg:h-screen lg:overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 md:py-24 lg:py-40 space-y-24 md:space-y-32">
            
            {/* Section 01: Addressing the Interoperability Challenge */}
            <div className={`space-y-10 md:space-y-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-8 md:w-12 h-px bg-[#D4AF37]"></span>
                  <h3 className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#D4AF37]">The Interoperability Framework</h3>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A2E26] leading-[1.2]">
                  How can digital health records be <br className="hidden sm:block" />
                  <span className="italic text-slate-400 font-light text-2xl sm:text-3xl md:text-4xl">unified across isolated territories?</span>
                </h2>
              </div>

              {/* Specialized Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-12 md:gap-y-20">
                <div className="group space-y-4 md:space-y-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F4F6F2] flex items-center justify-center group-hover:bg-[#1A2E26] transition-all duration-500 transform group-hover:-rotate-3">
                    <Database className="text-[#1A2E26] group-hover:text-[#D4AF37] w-6 h-6 md:w-7 md:h-7 transition-colors" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl font-black text-[#1A2E26] tracking-tight">Unified Health Schema</h4>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Standardized data structures that allow diverse rural clinic systems to "speak" to urban hospitals seamlessly.</p>
                  </div>
                </div>

                <div className="group space-y-4 md:space-y-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F4F6F2] flex items-center justify-center group-hover:bg-[#1A2E26] transition-all duration-500 transform group-hover:rotate-3">
                    <Lock className="w-6 h-6 md:w-7 md:h-7 text-[#1A2E26] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl font-black text-[#1A2E26] tracking-tight">Zero-Knowledge Privacy</h4>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Advanced cryptographic layers ensuring patient data is interoperable yet only decrypted by authorized clinicians.</p>
                  </div>
                </div>

                <div className="group space-y-4 md:space-y-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F4F6F2] flex items-center justify-center group-hover:bg-[#1A2E26] transition-all duration-500 transform group-hover:-rotate-3">
                    <Network className="w-6 h-6 md:w-7 md:h-7 text-[#1A2E26] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl font-black text-[#1A2E26] tracking-tight">Offline-First Sync</h4>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Clinics can maintain records without internet, auto-unifying with the global network once connectivity returns.</p>
                  </div>
                </div>

                <div className="group space-y-4 md:space-y-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F4F6F2] flex items-center justify-center group-hover:bg-[#1A2E26] transition-all duration-500 transform group-hover:rotate-3">
                    <Cpu className="w-6 h-6 md:w-7 md:h-7 text-[#1A2E26] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl font-black text-[#1A2E26] tracking-tight">Governance Protocols</h4>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">Ethical data-sharing rules that protect the clinical sovereignty of local rural healthcare providers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 02: Visual Call to Action */}
            <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[#1A2E26] p-8 sm:p-12 md:p-20 text-white transition-all hover:shadow-2xl hover:shadow-[#1A2E26]/20">
              <div className="absolute top-0 right-0 p-6 md:p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-24 h-24 md:w-40 md:h-40 text-[#D4AF37]" />
              </div>
              
              <div className="relative z-10 max-w-lg space-y-6 md:space-y-8">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">Secure your patients' <span className="italic text-[#D4AF37]">digital history.</span></h3>
                <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed">Deploy our interoperable record system today and bridge the gap between rural clinics and global medicine.</p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                  <button onClick={() => goToLogin()} className="flex h-14 md:h-16 items-center justify-center gap-3 md:gap-4 rounded-full bg-[#D4AF37] px-8 md:px-10 text-[#1A2E26] font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all hover:bg-white hover:scale-105 active:scale-95 group shadow-lg">
                    Login
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => goToSignup()} className="flex h-14 md:h-16 items-center justify-center rounded-full border-2 border-white/20 px-8 md:px-10 text-white font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all hover:bg-white/5 active:scale-95">
                    Signup
                  </button>
                </div>
              </div>
            </div>

            {/* Simple Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-12 md:pt-20 border-t border-slate-100 gap-8">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-300 text-center md:text-left leading-relaxed">© 2024 RuralHealth Pro • Clinical Data Integrity</p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400">
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors text-center">HIPAA Compliance</a>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">Support</a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}