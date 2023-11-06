import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../AuthContext";
import "../Components/styles/header.css";
const UserMenu = () => {
  const { user, logout } = useAuth();
  
  if (user) {
    return (
      <div className="user_dropdown_menu">
        <Button className="user_button">{user.first_name}</Button>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-split-basic" />
          <Dropdown.Menu className="menu">
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
            <Dropdown.Item className="text-danger" href="#/logout" onClick={logout}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
};

export default UserMenu;
