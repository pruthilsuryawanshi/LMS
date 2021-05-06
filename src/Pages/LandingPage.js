import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div>
     <Header/>
      <Navbar/>
      <div className="landing-page">
        <div className="right-col">
            <p className="hero-text1">Break The Barriers</p>
            <p className="hero-text2">of Ordinary Learning</p>
            <p className="hero-text3">Let's Build a Brighter Future Together</p>
            <div className="ctabtn">
            <Link to='' className="cta-btn">
            Start Learning For Free</Link></div>
        </div>
        <div className="left-col">
          <img className="landing-page-img" src="Images/3.png" alt="landing-page-img"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
