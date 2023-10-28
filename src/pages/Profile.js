import React from "react";
import Sidebar from "../Components/Sidebar";
import HeaderNav from "../Components/HeaderNav";
import "./styles/profile.css";
const Profile = () => {
  return (
    <div>
      <HeaderNav />
      <div className="profile_page">
        <div className="sidebar_container">
          <Sidebar />
        </div>
        <div className="profile">
          <div className="profile_left">
            <div className="photo">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="profile"
              />
            </div>
            <div className="profile-details">
              <h1>Tesing name</h1>
              <p>Email: 7l8t0@example.com</p>
              <p>Phone: 123456789</p>
              <p>Address: Kigali</p>
              <p>Country: Kigali-Rwanda</p>
            </div>
          </div>
          <div className="profile-info">
            <h1>Tesing name</h1>
            <p>Email: 7l8t0@example.com</p>
            <p>Phone: 123456789</p>
            <p>Address: Kigali</p>
            <p>Country: Kigali-Rwanda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
