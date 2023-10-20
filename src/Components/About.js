import React from "react";
import './components.css'
const About = () => {
  return (
   <div className="about-section">
     <div className="about">
      <div className="about-text">
      <h1 className="section_title">About Us</h1>
      <p className="simple">We are about culture and Heritage</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="image">
        <img src="https://www.visitrwanda.com/wp-content/uploads/fly-images/1238/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-1650x1100.jpg" alt="king's palace" />
      </div>
    </div>
   </div>
  );
};

export default About;
