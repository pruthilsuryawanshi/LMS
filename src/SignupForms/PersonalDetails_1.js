import React from "react";
import { Link } from "react-router-dom";

const PersonalDetails_1 = ({
  nextStep,
  previousStep,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
}) => {
  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Personal Details</h1>
        </div>
        <div className="inputs">
          <div className="CreateAccount-password-confirm">
            <div>
              <p>First Name</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <div className="input2 personalDetails_1-inputs">
            <p>Mobile Number</p>
            <input
              type="text"
              className="personalDetails_1-mobile_numbers"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <select className="personalDetails_1-mobile_numbers_select">
              <option>+91</option>
              <option>+92</option>
              <option>+93</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
            </select>
          </div>
        </div>
        <div className="login personalDetails_1-loginBtnDiv">
          <button className="loginBtn backBtn" onClick={previousStep}>
            Back
          </button>
          <button className="loginBtn" onClick={nextStep}>
            Submit
          </button>
        </div>
        <div className="orLogin">
          <div className="hero">
            <span className="hr"></span>
            <p>Or signup using</p>
            <span className="hr"></span>
          </div>
          <div className="faceG">
            <img src="Images/fb.png" alt="" />
            <img src="Images/google.png" alt="" />
            <p>
              Already a member?
              <Link to="/login">
                <span className="blue"> Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/*  card content  */}
    </div>
  );
};

export default PersonalDetails_1;
