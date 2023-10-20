import React from "react";
import "./components.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo_container">
      <img className="logo" src={logo} alt="Logo"/>
      </div>
      <div className="buttons">
      <Link to="/register"><button className="signup">Signup</button></Link>
      <Link to="/login">
        <button className="login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
