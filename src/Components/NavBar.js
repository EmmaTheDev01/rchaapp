import React from "react";
import "./components.css";
import logo from "./images/logo.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo_container">
      <img className="logo" src={logo} alt="Logo"/>
      </div>
      <div className="buttons">
        <button className="signup">Signup</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
