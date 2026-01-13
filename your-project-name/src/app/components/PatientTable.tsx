import { Search } from "lucide-react";
import { useState } from "react";

export default function PatientTable() {
  // Initialize state for search query
  const [query, setQuery] = useState("");
  const patients = [
    { name: "Asha K", age: 32, lastVisit: "12 Jan", status: "Active" },
    { name: "Rahul S", age: 45, lastVisit: "10 Jan", status: "Pending" },
    { name: "John D", age: 28, lastVisit: "08 Jan", status: "Active" },
  ];
  // Filter patients based on search query
  const filterPatients = patients.filter((patient) => 
    patient.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-[#1A2E26]">
        Recent Patients
      </h2>
      <div className="hidden md:flex items-center relative w-80">
        <Search className="absolute left-3 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search patients, records..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-slate-200">
            <th className="py-3 text-[#1A2E26] font-semibold">Name</th>
            <th className="text-[#1A2E26] font-semibold">Age</th>
            <th className="text-[#1A2E26] font-semibold">Last Visit</th>
            <th className="text-[#1A2E26] font-semibold">Status</th>
            <th className="text-[#1A2E26] font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {/*Added The Search Bar Instead of Keeping the patients implemented the filterPatients*/}
          {filterPatients.map((patient, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-slate-50 transition"
            >
              <td className="py-3 font-medium text-[#1A2E26]">
                {patient.name}
              </td>
              <td className="text-[#1A2E26]">{patient.age}</td>
              <td className="text-[#1A2E26]">{patient.lastVisit}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    patient.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {patient.status}
                </span>
              </td>
              <td>
                <button className="text-[#D4AF37] font-semibold hover:underline">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {filterPatients.map((patient, index) => (
        <div key={index}>
          {patient.name}
        </div>
      ))} */}
    </div>
  );
}
