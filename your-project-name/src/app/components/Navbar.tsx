"use client";

import { Search, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-20 px-10 flex items-center justify-between bg-white border-b border-slate-200">
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight">
          Health<span className="text-[#D4AF37]">Sync</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Middle: Search */}
      <div className="hidden md:flex items-center relative w-80">
        <Search className="absolute left-3 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search patients, records..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
        />
      </div>

      {/* Right: Profile */}
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-[#1A2E26] text-white flex items-center justify-center">
          <User className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
}
