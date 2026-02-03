"use client";

import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

export default function AddRecordsPage() {
  const [formData, setFormData] = useState({
    patientId: "",
    visitDate: "",
    visitType: "",
    symptoms: "",
    diagnosis: "",
    prescription: "",
    doctorNotes: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.patientId ||
      !formData.visitDate ||
      !formData.visitType ||
      !formData.symptoms ||
      !formData.diagnosis ||
      !formData.prescription ||
      !formData.status
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:3000/api/records/addrecord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Record added successfully!");
        // Reset form
        setFormData({
          patientId: "",
          visitDate: "",
          visitType: "",
          symptoms: "",
          diagnosis: "",
          prescription: "",
          doctorNotes: "",
          status: "",
        });
      } else {
        setMessage(data.message || "Failed to add record.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F4F6F2]">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#1A2E26]">Add New Record</h1>
        <p className="text-slate-500 mb-6">
          Add a new medical record for an existing patient.
        </p>

        <div className="bg-white rounded-xl shadow p-6 space-y-6 max-w-3xl">

          {/* Patient Name / ID */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Patient Name / ID *
            </label>
            <input
              name="patientId"
              type="text"
              value={formData.patientId}
              onChange={handleChange}
              placeholder="Enter patient name or ID"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Date of Visit */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Date of Visit *
            </label>
            <input
              name="visitDate"
              type="date"
              value={formData.visitDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Visit Type */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Visit Type *
            </label>
            <select
              name="visitType"
              value={formData.visitType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            >
              <option value="">Select visit type</option>
              <option value="Checkup">Checkup</option>
              <option value="Emergency">Emergency</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>

          {/* Symptoms */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Symptoms *
            </label>
            <textarea
              name="symptoms"
              rows={3}
              value={formData.symptoms}
              onChange={handleChange}
              placeholder="Enter symptoms"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Diagnosis */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Diagnosis *
            </label>
            <textarea
              name="diagnosis"
              rows={3}
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="Enter diagnosis"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Prescription */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Prescription *
            </label>
            <textarea
              name="prescription"
              rows={3}
              value={formData.prescription}
              onChange={handleChange}
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
              name="doctorNotes"
              rows={3}
              value={formData.doctorNotes}
              onChange={handleChange}
              placeholder="Additional notes"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Status *
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            >
              <option value="">Select status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-sm font-medium ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#1A2E26] text-white px-6 py-2 rounded-lg hover:bg-[#254136] transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Record"}
            </button>
            <button
              onClick={() =>
                setFormData({
                  patientId: "",
                  visitDate: "",
                  visitType: "",
                  symptoms: "",
                  diagnosis: "",
                  prescription: "",
                  doctorNotes: "",
                  status: "",
                })
              }
              className="border px-6 py-2 rounded-lg hover:bg-slate-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
