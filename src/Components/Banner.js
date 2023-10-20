import React from "react";
import "./components.css";
import bannerbg from "../Components/images/8.jpg";
const Banner = () => {
  return (
    <div banner_container>
      <div
        className="banner"
        // style={{
        //   backgroundImage: `url( ${bannerbg} )`,
        //   backgroundReapeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <img src={bannerbg} alt="banner" />
        <div className="overlay"></div>
        <div className="left">
          <h1>Start your Tour</h1>
          <p className="banner-text">
            Start your tour with us and visit museums and other cultural
            landamarks in Rwanda today virtually.
          </p>
          <button className="explore">Explore</button>
        </div>
        <div className="right"></div>
      </div>
      <div class="zigzag"></div>

      <div class="zigzag"></div>

      <div class="zigzag"></div>
    </div>
  );
};

export default Banner;
