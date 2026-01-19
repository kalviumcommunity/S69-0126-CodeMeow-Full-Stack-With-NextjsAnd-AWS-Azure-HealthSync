"use client";

import Sidebar from "../components/sidebar/Sidebar";

export default function AddRecordsPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F6F2]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#1A2E26]">Add New Record</h1>
        <p className="text-slate-500 mb-6">
          Add a new medical record for an existing patient.
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

          {/* Date of Visit */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Date of Visit
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Visit Type */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Visit Type
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
              <option value="">Select visit type</option>
              <option>Checkup</option>
              <option>Emergency</option>
              <option>Follow-up</option>
              <option>Consultation</option>
            </select>
          </div>

          {/* Symptoms */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Symptoms
            </label>
            <textarea
              rows={3}
              placeholder="Enter symptoms"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Diagnosis */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Diagnosis
            </label>
            <textarea
              rows={3}
              placeholder="Enter diagnosis"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Prescription */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Prescription
            </label>
            <textarea
              rows={3}
              placeholder="Enter prescribed medicines"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Doctor Notes */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Doctor Notes
            </label>
            <textarea
              rows={3}
              placeholder="Additional notes"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Status
            </label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
              <option value="">Select status</option>
              <option>Active</option>
              <option>Under Observation</option>
              <option>Recovered</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#1A2E26] text-white px-6 py-2 rounded-lg hover:bg-[#254136] transition">
              Save Record
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
