import React,{useState} from "react";
import "./styles/header.css";
import Logo from "./images/logo.png";
import UserMenu from "./UserMenu";
import { FaBars } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const HeaderNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <FaBars onClick={handleShow} />
        </span>
      </div>
      <div className="off-canvas">
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <div className="off-canvas-menu">
           <ul>
              <li>Discover</li>
              <li>Services</li>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
           </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default HeaderNav;
