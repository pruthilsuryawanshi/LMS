import React from "react";
// import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
// import awsconfig from "../aws-exports";
// Auth.configure(awsconfig);

import Navbar from "../components/Navbar";
import "./LandingPage.css";
const LandingPage = () => {
  const handleClick = async () => {
    try {
      let { user } = await Auth.currentAuthenticatedUser();
      console.log(user);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="LandingPage">
      <Navbar />
      {/* main content */}
      <div className="landingpage-main-content">
        <div className="landingpage__info">
          <h1>Break the Barriers</h1>
          <h2>of Ordinary Learning</h2>
          <p>Let's build a brighter future together</p>
          <button>Start Learning for Free</button>
        </div>
        <div className="landingpage__image">
        <img src="Images/3.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
