import React from "react";

const DiagnosticList = ({ diagnosticData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full h-[349px] mt-6 overflow-y-auto">

      <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnostic List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 rounded-lg text-left">
              <th className="px-4 py-3 font-semibold text-gray-700">Problem/Diagnosis</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Description</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticData.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-3 text-gray-800">{item.description}</td>
                <td className="px-4 py-3 text-gray-600">{item.name}</td>
                <td className="px-4 py-3 text-gray-900 font-medium">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
