import React, { useEffect, useState } from "react";
import BloodPressureChart from "./BloodPressureChart";
import PatientInfo from "./PatientInfo";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";
import PatientList from "./PatientList";

const Body = () => {
    const [patientData, setPatientData] = useState(null);
    const [allPatientsData, setAllPatientsData] = useState([]); 
    const [bloodPressureData, setBloodPressureData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("last6months"); 
    const [availableYears, setAvailableYears] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            const username = "coalition";
            const password = "skills-test";
            const base64Credentials = btoa(`${username}:${password}`);

            try {
                const response = await fetch(
                    "https://fedskillstest.coalitiontechnologies.workers.dev",
                    {
                        headers: {
                            Authorization: `Basic ${base64Credentials}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setAllPatientsData(data);
                const jessicaData = data.find((patient) => patient.name === "Jessica Taylor");

                if (jessicaData) {
                    setPatientData(jessicaData);
                    filterBloodPressureData(jessicaData, selectedYear);

                    const years = [
                        ...new Set(jessicaData.diagnosis_history.map((entry) => entry.year.toString())),
                    ];
                    setAvailableYears(years.sort().reverse()); 
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (patientData) {
            filterBloodPressureData(patientData, selectedYear);
        }
    }, [selectedYear, patientData]); 

    const filterBloodPressureData = (data, year) => {
        let filteredData;

        if (year === "last6months") {
            const sortedData = data.diagnosis_history
                .sort((a, b) => new Date(`${b.month} 1, ${b.year}`) - new Date(`${a.month} 1, ${a.year}`))
                .slice(0, 6); 

            filteredData = sortedData.map((entry) => ({
                month: `${entry.month} ${entry.year}`,
                systolic: entry.blood_pressure.systolic.value,
                diastolic: entry.blood_pressure.diastolic.value,
            }));
        } else {
            
            filteredData = data.diagnosis_history
                .filter((entry) => entry.year.toString() === year)
                .map((entry) => ({
                    month: `${entry.month} ${entry.year}`,
                    systolic: entry.blood_pressure.systolic.value,
                    diastolic: entry.blood_pressure.diastolic.value,
                }));
        }

        setBloodPressureData(filteredData);
    };

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Main Content */}
            <div className="flex gap-6 p-6">
                {/* Patients List Sidebar */}
                <div className="w-1/5 bg-white shadow-md rounded-lg p-4 h-screen">
                <PatientList patientData={allPatientsData} />
                </div>

                {/* Middle Section: Chart, Diagnosis Summary, Diagnostic List */}
                <div className="flex-1 space-y-6">
                    {/* Blood Pressure Chart */}
                    <div>
                        {/* Year Dropdown */}
                    <div className="flex items-center space-x-4 mb-4">
                        <label className="text-gray-700 font-semibold">Select Year:</label>
                        <select
                            className="border border-gray-300 rounded-md p-2"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                        >
                            <option value="last6months">Last 6 Months</option>
                            {availableYears.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                        
                        {bloodPressureData.length > 0 ? (
                            <BloodPressureChart bloodPressureData={bloodPressureData} patientData={patientData} />
                        ) : (
                            <p className="text-gray-500">No blood pressure data available.</p>
                        )}
                    </div>

                    {/* Diagnostic List */}
                    <div>
                        {patientData && <DiagnosticList diagnosticData={patientData.diagnostic_list} />}
                    </div>
                </div>

                {/* Right Sidebar: Patient Info & Lab Results */}
                <div>
                    <div className="mb-6">
                        {patientData && <PatientInfo patient={patientData} />}
                    </div>
                    <div>
                        {patientData && <LabResults labResults={patientData.lab_results} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
