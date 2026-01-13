export default function PatientTable() {
  const patients = [
    { name: "Asha K", age: 32, lastVisit: "12 Jan", status: "Active" },
    { name: "Rahul S", age: 45, lastVisit: "10 Jan", status: "Pending" },
    { name: "John D", age: 28, lastVisit: "08 Jan", status: "Active" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-[#1A2E26]">
        Recent Patients
      </h2>

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
          {patients.map((patient, index) => (
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
    </div>
  );
}
