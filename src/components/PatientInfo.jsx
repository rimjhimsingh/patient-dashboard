import React from "react";
import { FaCalendarAlt, FaPhone, FaUser, FaShieldAlt } from "react-icons/fa";

const PatientInfo = ({ patient }) => {
  if (!patient) {
    return <p className="text-gray-500 text-center">Loading...</p>; //Planning to add shimmer UI here
  }

  return (
    <div className="w-80 p-6 bg-white shadow-md rounded-lg text-center">
      {/* Profile Picture */}
      <img 
        src={patient.profile_picture} 
        alt={patient.name} 
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
      />

      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-900">{patient.name}</h2>

      {/* Patient Details */}
      <div className="mt-4 space-y-4 text-left">
        {/* Date of Birth */}
        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-gray-500 w-5 h-5" />
          <div>
            <p className="text-gray-600 text-sm">Date Of Birth</p>
            <p className="text-gray-900 font-medium">{patient.date_of_birth}</p>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center space-x-3">
          <FaUser className="text-gray-500 w-5 h-5" />
          <div>
            <p className="text-gray-600 text-sm">Gender</p>
            <p className="text-gray-900 font-medium">{patient.gender}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-3">
          <FaPhone className="text-gray-500 w-5 h-5" />
          <div>
            <p className="text-gray-600 text-sm">Contact</p>
            <p className="text-gray-900 font-medium">{patient.phone_number}</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="flex items-center space-x-3">
          <FaPhone className="text-gray-500 w-5 h-5" />
          <div>
            <p className="text-gray-600 text-sm">Emergency Contact</p>
            <p className="text-gray-900 font-medium">{patient.emergency_contact}</p>
          </div>
        </div>

        {/* Insurance */}
        <div className="flex items-center space-x-3">
          <FaShieldAlt className="text-gray-500 w-5 h-5" />
          <div>
            <p className="text-gray-600 text-sm">Insurance</p>
            <p className="text-gray-900 font-medium">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 w-[220px] h-[41px] bg-[#01F0D0] rounded-[41px] text-gray-900 font-medium hover:opacity-90 transition">
        Show All Information
        </button>

    </div>
  );
};

export default PatientInfo;
