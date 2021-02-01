import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      {/* main content */}
      <div className="landingPage-main-content container-fluid">
        <div className="row">
          <div className="landingPageLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="landingPageLeft-content">
              <h1 className="landingPageLeft-upper-h1">Break the Barriers</h1>
              <h1 className="landingPageLeft-lower-h1">of Ordinary Learning</h1>
              <p>Let's build a brighter future together</p>
              <button>Start Learning for Free</button>
            </div>
          </div>
          <div className="landingPageRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="landingPageRight-content">
              <img src="Images/Illustration.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
