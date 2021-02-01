import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Link, Switch } from "react-router-dom";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import CreateAccount from "../SignupForms/CreateAccount";
import PersonalDetails_1 from "../SignupForms/PersonalDetails_1";
import PersonalDetails_2 from "../SignupForms/PersonalDetails_2";
import EducationalDetails_1 from "../SignupForms/EducationalDetails_1";

import "./Signup.css";
import { Logger } from "aws-amplify";
const Signup = ({ inputVisible, setInputVisible }) => {
  const [step, setStep] = useState(2);

  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const renderSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <CreateAccount nextStep={nextStep} previousStep={previousStep} />
        );
      case 2:
        return (
          <PersonalDetails_1 nextStep={nextStep} previousStep={previousStep} />
        );
      case 3:
        return (
          <PersonalDetails_2 nextStep={nextStep} previousStep={previousStep} />
        );
      case 4:
        return (
          <EducationalDetails_1
            nextStep={nextStep}
            previousStep={previousStep}
          />
        );
    }
  };

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
            <img src="Images/Sign Up Illustration.png" alt="" />
            <p>
              If you already have an account
              <span className="blue"> Log in here.</span>
            </p>
          </div>
          <div className="middleLine"></div>
        </div>
        {/* mainLeft end */}
        <div className="mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          {renderSwitch(step)}
        </div>
        {/* mainRight end */}
      </div>
    </div>
  );
};

export default Signup;
