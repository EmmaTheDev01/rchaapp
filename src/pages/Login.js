import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../Components/images/logo.png";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleAgreeToTermsChange = (event) => {
    setAgreedToTerms(event.target.checked);
  };

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

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    // Validate the form
    if (!handleValidation() && !agreedToTerms) {
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/auth/login?email=${email}&password=${password}`,
        data
      );
      const { access_token } = response.data;

      // Store the access token in local storage
      localStorage.setItem("access_token", access_token);

      console.log(access_token);
      // Handling the response
      console.log(response.data); // Log the response for debugging
      //Navigate to sign up
      navigate("/available");
    } catch (error) {
      // Error handling
      console.error(error);
    }
  };
  return (
    <div className="login-page">
      <div className="image_login">
        <img src="https://www.rwandaheritage.gov.rw/index.php?eID=dumpFile&t=f&f=40207&token=9edb35ddd2dd89f9042e533ec6c6cc524589288e" alt="login" />
      </div>
      <div className="container">
        <div className="logo-login">
          <img src={logo} alt="logo" height='80px' />
        </div>
        <form onSubmit={loginSubmit}>
          <div className="">
            <label className="label">Email address</label>
            <input
              type="email"
              className=""
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
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              className=""
              id="InputPassword"
              placeholder="Password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <small id="passworderror" className="text-danger form-text">
              {passwordError}
            </small>
          </div>

          <div className="bottom">
            <input
              type="checkbox"
              className="checkbox"
              checked={agreedToTerms}
              onChange={handleAgreeToTermsChange}
            />
            <label className="label-checkbox">Remember me</label>
            <Link to="/forgot-password">Forgot password</Link>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="text-notice">
          Don't have an account, <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
