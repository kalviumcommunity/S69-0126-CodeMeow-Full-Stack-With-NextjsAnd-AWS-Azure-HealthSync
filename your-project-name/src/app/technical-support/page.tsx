"use client";

import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function TechnicalSupportPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Support request submitted successfully");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Technical Support
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Raise a support request for any technical issues you face.
          </p>
        </div>

        {/* Support Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@healthsync.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Issue Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Type
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>Dashboard Issue</option>
                <option>Patient Records</option>
                <option>Consent Request</option>
                <option>Login / Access</option>
                <option>Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe the issue you are facing..."
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 pt-4 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm px-6 py-2 rounded-lg transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
