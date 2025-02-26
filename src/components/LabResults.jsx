import React from "react";
import { FaDownload } from "react-icons/fa";

const LabResults = ({ labResults }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Lab Results</h3>
            <ul className="space-y-2">
                {labResults.length > 0 ? (
                    labResults.map((result, index) => (
                        <li 
                            key={index} 
                            className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer"
                        >
                            <span className="text-gray-700">{result}</span>
                            <FaDownload className="text-gray-500 hover:text-gray-700" />
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No lab results available.</p>
                )}
            </ul>
        </div>
    );
};

export default LabResults;