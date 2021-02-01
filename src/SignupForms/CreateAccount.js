import React from "react";
import { Link } from "react-router-dom";

import "./SignupForms.css";
const CreateAccount = ({ nextStep, previousStep }) => {
  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Create Account</h1>
        </div>
        <div className="inputs">
          <div className="input1">
            <p>E-mail</p>
            <input type="text" />
          </div>
          <div className="CreateAccount-password-confirm">
            <div className="">
              <p>Password</p>
              <input type="password" />
            </div>
            <div className="">
              <p>Confirm Password</p>
              <input type="password" />
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
          <button className="loginBtn" onClick={nextStep}>
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
