import React from "react";
import "./styles/header.css";
import Logo from "./images/logo.png";
import UserMenu from "./UserMenu";
import Menu from "./Menu";
const HeaderNav = () => {
  return (
    <div className="nav">
      <div className="logo_container">
        <img className="logo" src={Logo} alt="site logo" />
      </div>
      <div className="middle_menu">
        <ul>
          <li>Discover</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="user_menu">
        <div className="notifications">notifications</div>
        <div className="user_icon">
          <UserMenu />
        </div>
      </div>
      <div className="bar-menu">
        <span className="bar">
          <Menu/>
        </span>
      </div>
      
    </div>
  );
};

export default HeaderNav;
