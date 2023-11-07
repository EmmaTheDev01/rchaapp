import React from "react";
import Logo from "./images/logo.png";
import "../Components/styles/dashboard.css";
import UserMenu from "./UserMenu";
const DashboardHeader = () => {
  return (
    <div className="nav">
      <div className="logo_container">
        <img className="logo" src={Logo} alt="site logo" />
      </div>
      <div className="middle_menu">
        <div className="search">
          <form>
            <input type="text" placeholder="Search" />
            <button className="search-btn">Search</button>
          </form>
        </div>
      </div>
      <div className="user_menu">
        <div className="notifications">notifications</div>
        <div className="user-icon">
          <UserMenu/>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
