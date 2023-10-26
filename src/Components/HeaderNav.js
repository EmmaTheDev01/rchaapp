import React from "react";
import "./styles/header.css";
import Logo from "./images/logo.png";
const HeaderNav = () => {
  return (
    <div>
      <div className="logo_container">
        <img src={Logo} alt="site logo" />
      </div>
      <div className="middle_menu">
        <ul>
          <li>Discover</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="user_menu">
        <div className="notifications">notifications</div>
        <div className="user_icon">icon</div>
        <div className="user_profile"></div>
      </div>
    </div>
  );
};

export default HeaderNav;
