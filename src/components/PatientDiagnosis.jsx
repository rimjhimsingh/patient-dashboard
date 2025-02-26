import React from "react";
import HealthMetricCard from "./HealthMetricCard";
import Respiratory from "../assets/respiratory rate@2x.png";
import Temperature from "../assets/temperature@2x.png";
import Heart from "../assets/HeartBPM@2x.png";

const PatientDiagnosis = ({ patientData }) => {
    if (!patientData || !patientData.diagnosis_history.length) return null;

    const latestDiagnosis = patientData.diagnosis_history[0];

    const healthMetrics = [
        {
            icon: Respiratory, 
            label: "Respiratory Rate",
            value: latestDiagnosis.respiratory_rate.value,
            unit: "bpm",
            status: latestDiagnosis.respiratory_rate.levels,
            bgColor: "#E0F3FA",
        },
        {
            icon: Temperature, 
            label: "Temperature",
            value: latestDiagnosis.temperature.value,
            unit: "°F",
            status: latestDiagnosis.temperature.levels,
            bgColor: "#FFE6E9",
        },
        {
            icon: Heart, 
            label: "Heart Rate",
            value: latestDiagnosis.heart_rate.value,
            unit: "bpm",
            status: latestDiagnosis.heart_rate.levels,
            bgColor: "#FFE6F1",
        },
    ];

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthMetrics.map((metric, index) => (
                <HealthMetricCard key={index} {...metric} />
            ))}
        </div>
    );
};

export default PatientDiagnosis;
