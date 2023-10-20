import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
      )
    ) {
      formIsValid = false;
      setpasswordError(
        "Password must be eight or more characters including one uppercase letter, one special character and alphanumeric characters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div className="login-form">
      <div className="container">
        <h2>Register</h2>
        <form id="loginform" onSubmit={loginSubmit}>
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
                  // value={this.state.first_name}
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
                  // value={this.state.email}
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
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  // value={this.state.password}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
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
                  // value={this.state.last_name}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  aria-describedby="emailHelp"
                  placeholder="Enter phone number"
                  onChange={(event) => setPhone(event.target.value)}
                  // value={this.state.phone}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm password"
                  onChange={(event) => setPassword(event.target.value)}
                  // value={this.state.value}
                />
                <small id="passworderror" className="text-danger form-text">
                  <label>{passwordError}</label>
                </small>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
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
