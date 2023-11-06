import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import HeaderNav from "../Components/HeaderNav";
import "./styles/profile.css";
import { useAuth } from "../AuthContext"; // Replace with the actual path
import axios from "axios";
const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      // If the user is authenticated, make an API call to fetch profile data
      axios.get("http://127.0.0.1:8000/api/auth/profile")
        .then((response) => {
          setUserData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile data: ", error);
        });
    }
  }, [user]);

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
              {/* <img
                src={userData ? userData.profileImage : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt="profile"
              /> */}
            </div>
            <div className="profile-details">
              <h1>{userData ? userData.first_name : 'Testing name'}</h1>
              <p>Email: {userData ? userData.email : "7l8t0@example.com"}</p>
              <p>Phone: {userData ? userData.phone : '123456789'}</p>
              <p>Address: {userData ? userData.address : 'Kigali'}</p>
              <p>Country: {userData ? userData.country : 'Kigali-Rwanda'}</p>
            </div>
          </div>
          <div className="profile-info">
            <h1>{userData ? userData.name : 'Testing name'}</h1>
            <p>Email: {userData ? userData.email : '7l8t0@example.com'}</p>
            <p>Phone: {userData ? userData.phone : '123456789'}</p>
            <p>Address: {userData ? userData.address : 'Kigali'}</p>
            <p>Country: {userData ? userData.country : 'Kigali-Rwanda'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
