"use client";

import Sidebar from "../components/sidebar/Sidebar";
import { Mail, HelpCircle } from "lucide-react";

export default function TechnicalSupportPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F6F2]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#1A2E26]">
            Technical Support
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Need help? Contact our technical support team.
          </p>
        </div>

        {/* Support Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-xl p-8">
            
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#1A2E26]/10 flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-[#1A2E26]" />
              </div>
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold text-center text-[#1A2E26] mb-2">
              Facing a technical issue?
            </h2>
            <p className="text-sm text-center text-slate-500 mb-8">
              Our support team is available to help you resolve system or
              application-related problems.
            </p>

            {/* Contact Info */}
            <div className="flex items-center justify-center gap-3 bg-slate-50 border rounded-xl p-4">
              <Mail className="w-5 h-5 text-[#D4AF37]" />
              <a
                href="mailto:mahanandhanmanish@gmail.com"
                className="text-sm font-semibold text-[#1A2E26] hover:underline"
              >
                xyz@gmail.com
              </a>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-center text-slate-400 mt-6">
              Please include screenshots or error details when contacting support.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
