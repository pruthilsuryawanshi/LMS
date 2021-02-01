import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./Login.css";
const Login = ({ inputVisible, setInputVisible }) => {
  return (
    <div className="overlay container-fluid">
      <nav className="navbar navbarStyle">
        <div className="container-fluid">
          <Link to="/">
            <img
              src="Images/logo.png"
              alt="Kids Galaxy Logo"
              className="d-inline-block align-top"
            />
          </Link>
        </div>
      </nav>
      {/* <!-- Image and text -->
      {/* <img className="overlayImg" src="Images/Overlay Shapes.png" alt="" /> */}
      <div className="row mainContent">
        <div className="mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="mainLeftContent">
            <img src="Images/Login Illustration.png" alt="" />
            <p>
              To get exciting discounts, offers, free study resources, special
              programs from Kids Galaxy
              <span className="blue"> Sign Up here.</span>
            </p>
          </div>
          <div className="middleLine"></div>
        </div>
        {/* mainLeft end */}
        <div className="mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="card loginCard">
            <div className="cardContent">
              <div className="title">
                <h1>Log in</h1>
              </div>
              <div className="inputs">
                <div className="input1">
                  <p>E-mail</p>
                  <input type="text" />
                </div>
                <div className="input2">
                  <p>Password</p>
                  <input type="password" />
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
                <button className="loginBtn">Log in</button>
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
          {/* card end*/}
        </div>
        {/* mainRight end */}
      </div>
    </div>
  );
};

export default Login;
