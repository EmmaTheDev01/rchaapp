import React from "react";
import "../Components/styles/dashboard.css";
const DashboardContent = () => {
  return (
    <div className="dashboard_page">
      <div className="dashboard">
        <div className="total_cards">
          <div className="bookings">
            <h5>Bookings</h5>
            <h1>2000+</h1>
          </div>
          <div className="interests">
            <h5>Interests</h5>
            <h1>200+</h1>
          </div>
          <div className="places">
            <h5>Places</h5>
            <h1>1000+</h1>
          </div>
        </div>
        <div className="data-display">
          <div className="visuals">
            <div className="chart">
              <h5>Bookings</h5>
            </div>
            <div className="graph">
              <h5>Interests</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
