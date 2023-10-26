import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Link } from "react-router-dom";
import axios from "axios";


const ForgotPassword = () => {
    
 
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");

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
    return formIsValid;
  };

  const resetSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    const res = await axios.post(
      "https://rcha-754m2tjq3-munyinyas-projects.vercel.app/api/login?email=" +
        email 

    );
  };

  return (
    <div className="login-form">
      <div className="container">
        <h2>Reset Password </h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 form-container">
            <form id="loginform" onSubmit={resetSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </form>
            <p>
             Back to <Link to="/register">login</Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword