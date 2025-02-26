import React from "react";
import { FaHome, FaUserFriends, FaCalendarAlt, FaComments, FaFileInvoice } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import TestLogo from "../assets/TestLogo.png";
import Doctor from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-full mx-4 mt-2">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src={TestLogo} alt="Tech.Care Logo" className="h-8" />
                </div>

            {/* Navigation */}
            <nav className="flex space-x-6">
                <button className="flex items-center text-gray-600 hover:text-black">
                    <FaHome className="mr-2" />
                    Overview
                </button>
                <button className="flex items-center bg-cyan-400 text-white px-4 py-2 rounded-full shadow-md">
                    <FaUserFriends className="mr-2" />
                    Patients
                </button>
                <button className="flex items-center text-gray-600 hover:text-black">
                    <FaCalendarAlt className="mr-2" />
                    Schedule
                </button>
                <button className="flex items-center text-gray-600 hover:text-black">
                    <FaComments className="mr-2" />
                    Message
                </button>
                <button className="flex items-center text-gray-600 hover:text-black">
                    <FaFileInvoice className="mr-2" />
                    Transactions
                </button>
            </nav>

            {/* Profile Section */}
            <div className="flex items-center space-x-3">
                <img src={Doctor} alt="Doctor" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-gray-900 font-semibold">Dr. Jose Simmons</p>
                    <p className="text-gray-500 text-sm">General Practitioner</p>
                </div>
                <IoSettingsSharp className="text-gray-600 text-xl cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
