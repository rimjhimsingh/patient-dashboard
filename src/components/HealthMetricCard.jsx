import React from "react";

const HealthMetricCard = ({ icon, label, value, unit, status, bgColor }) => {
    return (
        <div className="p-6 rounded-lg shadow-md flex flex-col items-center w-full" style={{ backgroundColor: bgColor }}>
            <img src={icon} alt={label} className="w-12 h-12 mb-2" />
            <p className="text-gray-600 text-sm">{label}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value} {unit}</h3>
            <p className="text-gray-600 text-sm">{status}</p>
        </div>
    );
};

export default HealthMetricCard;
