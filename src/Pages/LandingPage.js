import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Footer from "../components/Footer";
import "./LandingPage.css";
import "./Tailwind.css";
const LandingPage = ({ inputVisible, setInputVisible }) => {
  return (
    <div className="landingPage">
      <motion.img
        initial={{ opacity: 1, y: "-50vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: "-50vh" }}
        transition={{ duration: 0.8 }}
        className="overlay"
        src="Images/OverlayLanding.png"
        alt=""
      />
      <div className="landingPageMain">
        <div className="box">
          {/*  navbar */}
          <div className="navbar">
            {/* <!-- kids galaxy logo --> */}
            <div className="">
              <Link to="/">
                <img src="Images/logo.png" alt="kids-galaxy-logo" />
              </Link>
            </div>
            {/* <!--  nav links   --> */}
            <div className="navLinks">
              <div className="navMiddle">
                <div className="text-2xl font-semibold">
                  <a href="#">
                    <p className="hoverP">Courses</p>
                  </a>
                </div>
                <div className="text-2xl font-semibold">
                  <a href="#">
                    <p className="hoverP">Who We Are</p>
                  </a>
                </div>
                <div className="text-2xl font-semibold">
                  <a href="#">
                    <p className="hoverP">What We Do</p>
                  </a>
                </div>
              </div>
              {/* navRight start */}
              <div className="navRight">
                {/* <!-- search bar --> */}
                <div className="p flex flex-row searchDiv">
                  <form action="">
                    <img src="Images/search.svg" class="fa fa-search" />
                  </form>
                </div>

                {/* <!-- sign in --> */}
                <div className="flex flex-row">
                  <button className="flex flex-row focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
                    <div className="p-2">
                      <img src="Images/icon.svg" alt="" />
                    </div>
                    <Link to="/login">
                      <span className="font-semibold text-2xl">Sign In</span>
                    </Link>
                  </button>
                </div>

                {/* <!-- demo button --> */}
                <div className="content-end">
                  <button className="demo p-3 font-semibold focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-2xl text-white">
                    Request Demo
                  </button>
                </div>
              </div>
              {/* navRight end */}
            </div>
          </div>
          {/*  navbar */}

          {/* <!-- main page --> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="main"
          >
            {/* <!-- LEFT-DIV --> */}
            <div className="mainContent">
              <div className="title">
                <h1 className="a">BREAK THE BARRIERS</h1>
                <h1 className="ab">OF ORDINARY LEARNING</h1>
                <p className="b">Lets build a brighter future together</p>
              </div>
              <div className="startBtn">
                <button className="font-bg start-btn focus:outline-none c justify-self-center p-4">
                  Start learning for free
                </button>
              </div>
            </div>

            {/* <!-- right div image --> */}
            <div className="mainImg">
              <img src="Images/Illustration.png" alt="stud-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
