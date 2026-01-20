"use client";

import Sidebar from "../components/sidebar/Sidebar";

export default function RequestConsentPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F6F2]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#1A2E26]">Request Consent</h1>
        <p className="text-slate-500 mb-6">
          Request patient permission to access medical records.
        </p>

        <div className="bg-white rounded-xl shadow p-6 space-y-6 max-w-3xl">
          
          {/* Patient Name */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Patient Name / ID
            </label>
            <input
              type="text"
              placeholder="Enter patient name or ID"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Reason for Request
            </label>
            <textarea
              rows={3}
              placeholder="Explain why you need access"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Data Access Type */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-2">
              Data Needed
            </label>
            <div className="space-y-2 text-sm text-[#1A2E26]">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Medical History
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Lab Reports
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Prescriptions
              </label>
            </div>
          </div>

          {/* Access Duration */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Access Duration
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
              <option value="">Select duration</option>
              <option>1 Day</option>
              <option>1 Week</option>
              <option>1 Month</option>
              <option>Permanent</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1A2E26] text-white px-6 py-2 rounded-lg hover:bg-[#254136] transition">
              Send Request
            </button>
            <button className="border px-6 py-2 rounded-lg hover:bg-slate-50 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
