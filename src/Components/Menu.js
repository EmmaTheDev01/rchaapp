import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";

const Menu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FaBars onClick={handleShow} />
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

export default Menu;
