import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleAgreeToTermsChange = (event) => {
    setAgreedToTerms(event.target.checked);
  }
  
  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
    } else {
      setemailError("");
    }

    // if (
    //   !password.match(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    //   )
    // ) {
    //   formIsValid = false;
    //   setpasswordError(
    //     "Password must be eight or more characters including one uppercase letter, one special character, and alphanumeric characters"
    //   );
    // } else {
    //   setpasswordError("");
    // }

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
}
  return (
    <div className="login-form">
      <div className="container">
        <h2>Login</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 form-container">
            <form id="loginform" onSubmit={loginSubmit}>
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
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={agreedToTerms}
                  onChange={handleAgreeToTermsChange}
                />
                <label className="form-check-label">
                  Agree To our terms and conditions
                </label>
              </div>
              <Link to="/forgot-password">Forgot password</Link>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <p>
              Don't have an account, <Link to="/register">register</Link>
            </p>
          </div>
          <div className="col-md-4 ml-3">
            <img
              className="login_image"
              src="https://us.123rf.com/450wm/nattyblissful/nattyblissful2007/nattyblissful200700051/151543277-unhappy-man-near-computer-forgot-account-login-and-password-flat-vector-male-character-design.jpg"
              alt="man Logging into system"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
