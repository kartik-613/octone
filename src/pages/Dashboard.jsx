import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Fetch from "./Fetch";
import DownloadReport from "./DownloadReport";
import UserCreation from "./UserCreation";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Fetch");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirect to login
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {activeMenu === "Fetch" && <Fetch />}
        {activeMenu === "Download Report" && <DownloadReport />}
        {activeMenu === "User Creation" && <UserCreation />}
      </div>
    </div>
  );
};

export default Dashboard;
