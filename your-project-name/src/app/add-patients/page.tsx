"use client";
import Sidebar from "../components/sidebar/Sidebar";

export default function AddPatientsPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F6F2]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#1A2E26]">
          Add New Patient
        </h1>
        <p className="text-slate-500 mb-6">
          Enter patient details to create a new record.
        </p>

        <div className="bg-white rounded-xl shadow p-6 space-y-6 max-w-3xl">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter age"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Gender
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Address
            </label>
            <textarea
              placeholder="Enter address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
              rows={3}
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Medical Notes
            </label>
            <textarea
              placeholder="Enter medical notes"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1A2E26] text-white px-6 py-2 rounded-lg hover:bg-[#254136] transition">
              Save Patient
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
