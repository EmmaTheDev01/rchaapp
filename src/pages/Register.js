import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../Components/images/logo.png";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion, Card } from "react-bootstrap";
const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
    } else {
      setemailError("");
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
      )
    ) {
      formIsValid = false;
      setpasswordError(
        "Password must be eight or more characters including one uppercase letter, one special character, and alphanumeric characters"
      );
    } else {
      setpasswordError("");
    }
    if (password_confirmation !== password) {
      formIsValid = false;
    }

    return formIsValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!handleValidation()) {
      return;
    }

    // Data to send to the server
    const data = {
      email,
      password,
      first_name,
      last_name,
      city,
      country,
      phone_number,
      password_confirmation,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        data
      );
      // Response handling
      console.log(response.data); // Log the response for debugging
    } catch (error) {
      //Error jandling
      console.error(error);
    }
  };
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        className="continue"
        type="button"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#00a4e4",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <div className="register-page">
      <div className="image_login">
        <img
          src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=40207&token=9edb35ddd2dd89f9042e533ec6c6cc524589288e"
          alt="login"
        />
      </div>
      <div className="container-signup">
        <div className="logo-login">
          <img src={logo} alt="logo" height="90px" />
        </div>
        <form onSubmit={onSubmit}>
          {/* 

            
            
          */}

          <Accordion defaultActiveKey="0">
            <Card.Header></Card.Header>
            <Accordion.Collapse eventKey="0">
              <div>
                <div className="input-container">
                  <label className="label">FirstName</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    onChange={(event) => setFirst_name(event.target.value)}
                    value={first_name}
                  />
                </div>
                <div className="input-container">
                  <label className="label">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter last name"
                    onChange={(event) => setLast_name(event.target.value)}
                    value={last_name}
                  />
                </div>
                <CustomToggle eventKey="1">
                  <span className="text-right">Next</span>
                </CustomToggle>
              </div>
            </Accordion.Collapse>
            <Card.Header></Card.Header>
            <Accordion.Collapse eventKey="1">
              <div>
                <CustomToggle eventKey="0">
                  <span className="text-left">Back</span>
                </CustomToggle>
                <div className="input-container">
                  <label className="label">Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter country"
                    onChange={(event) => setCountry(event.target.value)}
                    value={country}
                  />
                </div>

                <div className="input-container">
                  <label className="label">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone_number"
                    placeholder="Enter phone number"
                    onChange={(event) => setPhone_number(event.target.value)}
                    value={phone_number}
                  />
                </div>

                <div className="input-container">
                  <label className="label">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter City"
                    onChange={(event) => setCity(event.target.value)}
                    value={city}
                  />
                </div>
                <CustomToggle eventKey="2">
                  <span className="text-right">Next</span>
                </CustomToggle>
              </div>
            </Accordion.Collapse>

            <Card.Header></Card.Header>
            <Accordion.Collapse eventKey="2">
              <div>
                <CustomToggle eventKey="1">
                  <span className="text-left">Back</span>
                </CustomToggle>
                <div className="input-container">
                  <label className="label">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="input-container">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
                </div>
                <div className="input-container">
                  <label className="label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm password"
                    onChange={(event) =>
                      setPassword_confirmation(event.target.value)
                    }
                    value={password_confirmation}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    <label>{passwordError}</label>
                  </small>
                </div>
                <div className="bottom">
                  <button className="register" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </form>
        <p className="label-bottom">
          Already signed up, <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
