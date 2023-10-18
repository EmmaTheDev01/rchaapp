import React from "react";
import "./components.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="column_one"></div>
        <div className="column_two"></div>
        <div className="column_three">
          <h3>Contact Us</h3>

          <form>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your name"
            ></input>
            <input type="email" name="email" placeholder="Enter your email" />
            <textarea
              name="message"
              placeholder="Enter your message here"
            ></textarea>
            <button className="contact_btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
