import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";
import { Auth } from "aws-amplify";

import "./SignupForms.css";
const CreateAccount = ({
  nextStep,
  previousStep,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      alert("Fields shouldn't be null");
    } else if (password !== confirmPassword) {
      alert("Password and confirm password should be same");
    } else {
      nextStep();
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Create Account</h1>
        </div>
        <div className="inputs">
          <div className="input1">
            <p>E-mail</p>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="CreateAccount-password-confirm">
            <div className="CreatedAccount-half-inputs">
              <p>Password</p>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="CreatedAccount-half-inputs">
              <p>Confirm Password</p>
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
          </div>
        </div>
        <div className="checkbox">
          <div className="rememberBox">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="blue">Forgot Password</p>
        </div>
        <div className="login">
          <button
            className="loginBtn"
            onClick={handleSubmit}
            // disabled={
            // (!password && !confirmPassword) || password !== confirmPassword
            // }
          >
            Submit
          </button>
        </div>
        <div className="orLogin">
          <div className="hero">
            <span className="hr"></span>
            <p>Or log in using</p>
            <span className="hr"></span>
          </div>
          <div className="faceG">
            <img src="Images/fb.png" alt="" />
            <img src="Images/google.png" alt="" />
            <p>
              New User?
              <Link to="/signup">
                <span className="blue"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/*  card content  */}
    </div>
  );
};

export default CreateAccount;
