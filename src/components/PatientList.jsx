import React from "react";

const PatientList = ({ patientData }) => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <h2 className="text-xl font-bold p-4">Patients</h2>
      <ul className="divide-y divide-gray-200">
        {patientData.map((patient, index) => (
          <li key={index} className="flex items-center p-4">
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{patient.name}</p>
              <p className="text-sm text-gray-500">
                {patient.gender}, {patient.age}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
