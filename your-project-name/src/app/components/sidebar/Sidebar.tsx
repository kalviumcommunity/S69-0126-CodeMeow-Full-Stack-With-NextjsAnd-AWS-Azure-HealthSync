"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { 
  Activity, 
  Users, 
  LayoutDashboard, 
  ChevronRight,
  LogOut,
  HelpCircle,
  BarChart3,
  LucideIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

/**
 * Types for Navigation Items
 */
interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  isCollapsed: boolean;
  index: number;
  onClick?: () => void;
}

/**
 * Reusable Navigation Item Component with staggered animation delay
 */
const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active = false, isCollapsed, index }) => (
  <button
    style={{ transitionDelay: `${index * 50}ms` }}
    className={`w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group relative
      ${active 
        ? 'bg-[#D4AF37] text-[#1A2E26] shadow-lg shadow-[#D4AF37]/20 scale-[1.02]' 
        : 'text-white/60 hover:bg-white/5 hover:text-white hover:translate-x-1'
      } animate-in fade-in slide-in-from-left-4 fill-mode-both`}
  >
    <div className="flex items-center justify-center min-w-6">
      <Icon className={`w-5 h-5 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 ${active ? 'text-[#1A2E26]' : 'group-hover:text-[#D4AF37]'}`} />
    </div>
    
    {!isCollapsed && (
      <span className="text-[11px] font-black uppercase tracking-[0.15em] whitespace-nowrap overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        {label}
      </span>
    )}

    {/* Tooltip for collapsed state */}
    {isCollapsed && (
      <div className="absolute left-full ml-4 px-3 py-2 bg-[#1A2E26] border border-white/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-1 transition-all z-50 whitespace-nowrap shadow-xl">
        {label}
      </div>
    )}
  </button>
);

/**
 * Main Sidebar Component
 */
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const router = useRouter();
  // const addPatients = () => {
  //   router.push('/add-patients');
  // }
  return (
    <aside 
      className={`hidden lg:flex flex-col bg-[#1A2E26] text-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative z-50 shadow-2xl h-screen shrink-0
        ${isCollapsed ? 'w-24 overflow-hidden' : 'w-72'}`}
    >
      {/* Brand Identity Section */}
      <div className="p-8 flex items-center gap-4 h-24 border-b border-white/5">
        <div className="min-w-10 h-10 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-inner group cursor-pointer">
          <Activity className="w-5 h-5 text-[#D4AF37] transition-transform duration-700 group-hover:rotate-[360deg]" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="font-black tracking-tighter uppercase text-xl leading-none">
              Health<span className="text-[#D4AF37]">Sync</span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mt-1 italic">Sovereign OS</span>
          </div>
        )}
      </div>

      {/* Main Navigation Scroll Area */}
      <div className={`flex-1 px-4 py-6 space-y-2 overflow-y-auto ${isCollapsed ? 'no-scrollbar overflow-hidden' : 'no-scrollbar'}`}>
        {/* Toggle Button integrated into the list flow for better reach */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center py-4 mb-4 text-white/20 hover:text-[#D4AF37] transition-all duration-300 hover:bg-white/5 rounded-2xl group"
        >
          <div className={`transition-transform duration-700 ease-out ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}>
            <ChevronRight className={`w-5 h-5 ${!isCollapsed ? 'rotate-180' : ''}`} />
          </div>
        </button>

        <NavItem index={0} icon={LayoutDashboard} label="Dashboard" active isCollapsed={isCollapsed} />
        <Link href="/add-patients">
          <NavItem  index={1} icon={Users} label="Add Patients" isCollapsed={isCollapsed} />
        </Link>
        <Link href="/add-records">
          <NavItem index={2} icon={Users} label="Add Records" isCollapsed={isCollapsed} />
        </Link>
        <Link href="/technical-support">
          <NavItem index={4} icon={HelpCircle} label="Technical Support" isCollapsed={isCollapsed} />
        </Link>
        
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-4" />
      </div>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-white/5 space-y-4 bg-black/20">
        <div className={`flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 transition-all duration-500 hover:border-[#D4AF37]/30 group ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center text-[#1A2E26] font-bold text-sm shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
              SJ
            </div>
            {/* Online Status Indicator with Ripple Effect */}
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#1A2E26]">
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-40" />
            </div>
          </div>
          
          {!isCollapsed && (
            <div className="flex flex-col min-w-0 flex-1 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="text-xs font-bold truncate text-white/90">Dr. S. Jenkins</span>
              <span className="text-[10px] text-[#D4AF37] font-medium uppercase tracking-widest truncate">Chief Admin</span>
            </div>
          )}
          
          {!isCollapsed && (
            <button className="p-2 hover:bg-white/10 rounded-lg text-white/20 hover:text-red-400 transition-all duration-300">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}