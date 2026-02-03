"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface Patient {
  _id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  medicalNotes: string;
  createdAt: string;
  updatedAt: string;
}

interface Record {
  _id: string;
  visitDate: string;
  visitType: string;
  symptoms: string;
  diagnosis: string;
  prescription: string;
  doctorNotes?: string;
  status: string;
}

export default function PatientTable() {
  const [query, setQuery] = useState("");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [records, setRecords] = useState<Record[]>([]);
  const [showRecords, setShowRecords] = useState(false);

  // Fetch patients
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/patient/getpatient");
        const data = await res.json();
        setPatients(data.patients || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // View Patient
  const handleViewPatient = async (id: string) => {
    const res = await fetch(
      `http://localhost:3000/api/patient/getbyid?id=${id}`
    );
    const data = await res.json();
    setSelectedPatient(data.patient || data.patients?.[0]);
  };

  // View Records
  const handleViewRecords = async (id: string) => {
    const res = await fetch(
      `http://localhost:3000/api/records/getrecordbyid?id=${id}`
    );
    const data = await res.json();
    setRecords(data.records || []);
    setShowRecords(true);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Patients</h2>

      {/* Search */}
      <div className="relative w-full md:w-96 mb-6">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          className="w-full pl-10 py-2.5 border rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
          placeholder="Search patients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="py-3 px-4 text-gray-700 font-semibold">Name</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Age</th>
              <th className="py-3 px-4 text-gray-700 font-semibold text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((p) => (
              <tr
                key={p._id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium text-gray-800">{p.name}</td>
                <td className="py-3 px-4 text-gray-700">{p.age}</td>
                <td className="py-3 px-4 flex justify-center gap-3">
                  <button
                    className="px-3 py-1 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                    onClick={() => handleViewPatient(p._id)}
                  >
                    View
                  </button>
                  <button
                    className="px-3 py-1 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
                    onClick={() => handleViewRecords(p._id)}
                  >
                    Records
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PATIENT MODAL */}
      {selectedPatient && (
        <Modal onClose={() => setSelectedPatient(null)}>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            {selectedPatient.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Info label="Age" value={selectedPatient.age} />
            <Info label="Gender" value={selectedPatient.gender} />
            <Info label="Phone" value={selectedPatient.phone} />
            <Info label="Address" value={selectedPatient.address} />
            <Info label="Medical Notes" value={selectedPatient.medicalNotes} />
            <Info
              label="Created At"
              value={new Date(selectedPatient.createdAt).toLocaleString()}
            />
            <Info
              label="Updated At"
              value={new Date(selectedPatient.updatedAt).toLocaleString()}
            />
          </div>
        </Modal>
      )}

      {/* RECORDS MODAL */}
      {showRecords && (
        <Modal onClose={() => setShowRecords(false)}>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Patient Records
          </h2>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {records.length === 0 && (
              <p className="text-gray-500 text-center">No records found.</p>
            )}
            {records.map((r) => (
              <div
                key={r._id}
                className="border rounded-2xl p-5 bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{r.visitType}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(r.visitDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <p>
                    <b>Symptoms:</b> {r.symptoms}
                  </p>
                  <p>
                    <b>Diagnosis:</b> {r.diagnosis}
                  </p>
                  <p>
                    <b>Prescription:</b> {r.prescription}
                  </p>
                  {r.doctorNotes && (
                    <p>
                      <b>Doctor Notes:</b> {r.doctorNotes}
                    </p>
                  )}
                  <p>
                    <b>Status:</b>{" "}
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        r.status === "completed"
                          ? "bg-green-600"
                          : r.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {r.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-6xl animate-slideFadeIn">
        {children}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <style>{`
          .animate-slideFadeIn {
            animation: slideFade 0.4s ease-out forwards;
          }
          @keyframes slideFade {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: any }) {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-lg text-gray-900">{value}</p>
    </div>
  );
}
