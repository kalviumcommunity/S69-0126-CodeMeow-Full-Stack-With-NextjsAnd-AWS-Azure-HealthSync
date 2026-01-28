"use client";
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function AddPatientsPage() {
  // State for inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleSavePatient = async () => {
    if (!name || !age || !gender) {
      alert("Name, Age, and Gender are required.");
      return;
    }

    try {
      const res = await fetch("/api/patient/addpatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          gender,
          phone,
          address,
          medicalNotes: notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to add patient");
        return;
      }

      alert("Patient added successfully!");
      // Clear form
      setName("");
      setAge("");
      setGender("");
      setPhone("");
      setAddress("");
      setNotes("");
    } catch (error) {
      console.error("Add patient error:", error);
      alert("Failed to add patient. Check console for details.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F4F6F2]">
      <Sidebar />

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-[#1A2E26] mb-1">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
            >
              <option value="">Select gender</option>
              <option>male</option>
              <option>female</option>
              <option>other</option>
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSavePatient}
              className="bg-[#1A2E26] text-white px-6 py-2 rounded-lg hover:bg-[#254136] transition"
            >
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
