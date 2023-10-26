import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
    )
     {
      formIsValid = false;
      setpasswordError(
        "Password must be eight or more characters including one uppercase letter, one special character, and alphanumeric characters"
      );
    } else {
      setpasswordError("");
    }
    if (password_confirmation !== password){
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
      // Handle the response, e.g., redirect to a success page
      console.log(response.data); // Log the response for debugging
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <div className="container">
        <h2>Register</h2>
        <form id="loginform" onSubmit={onSubmit}>
          <div className="form-inputs">
            <div className="left">
              <div className="form-group">
                <label>FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  aria-describedby="emailHelp"
                  placeholder="Enter first name"
                  onChange={(event) => setFirst_name(event.target.value)}
                  value={first_name}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
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
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="contry"
                  name="country"
                  placeholder="Enter City"
                  onChange={(event) => setCountry(event.target.value)}
                  value={country}
                />
              </div>
            </div>
            <div className="right">
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter last name"
                  onChange={(event) => setLast_name(event.target.value)}
                  value={last_name}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone_number"
                  placeholder="Enter phone number"
                  onChange={(event) => setPhone_number(event.target.value)}
                  value={phone_number}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
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
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="Enter City"
                  onChange={(event) => setCity(event.target.value)}
                  value={city}
                />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                defaultChecked
              />
              <label className="form-check-label">
                Agree To our terms and conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <p>
          Don't have an account, <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
