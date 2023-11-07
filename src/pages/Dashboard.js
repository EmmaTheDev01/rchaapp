import React from "react";
import DashboardHeader from "../Components/DashboardHeader";
import Sidebar from "../Components/Sidebar";
import "./styles/dashboard.css";
import DashboardContent from "../Components/DashboardContent";
const dashboard = () => {
  return (
    <div className="user-dashboard">
      <DashboardHeader />
      <div className="dash-cols">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default dashboard;
