import React from "react";
import { Line } from "react-chartjs-2";
import PatientDiagnosis from "./PatientDiagnosis";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ bloodPressureData, patientData }) => {
    const labels = bloodPressureData.map((entry) => entry.month);
    const systolicValues = bloodPressureData.map((entry) => entry.systolic);
    const diastolicValues = bloodPressureData.map((entry) => entry.diastolic);

    const data = {
        labels,
        datasets: [
            {
                label: "Systolic",
                data: systolicValues,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: "Diastolic",
                data: diastolicValues,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Blood Pressure Chart",
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 60,
                max: 180,
            },
        },
    };

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Diagnosis History</h3>
            {/* Blood Pressure Line Chart */}
            <Line data={data} options={options} />

            {/* Diagnostics Component - Positioned Right Below the Chart */}
            {patientData && <PatientDiagnosis patientData={patientData} />}
        </div>
    );
};

export default BloodPressureChart;
