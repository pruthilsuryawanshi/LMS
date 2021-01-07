import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./IndividualLearning.css";
const IndividualLearning = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100vw" }}
      className="bg-gray-200 box m-14 "
    >
      {/* <!-- navbar --> */}
      <div className="flex flex-row navbar">
        {/* <!-- kids galaxy logo --> */}
        <div className="p-5">
          <Link to="/">
            <img src="Images/logo.png" alt="kids-galaxy-logo" />
          </Link>
        </div>
        {/* <!--  nav links   --> */}
        <div className="flex flex-row pl-48 pr-24 " id="shift">
          <div className="p-4 m-3 text-2xl font-semibold">
            <a className="hover:text-green-500" href="#">
              <span>Courses</span>
            </a>
          </div>
          <div className="p-4 m-3 text-2xl font-semibold">
            <a className="hover:text-green-500" href="#">
              <span>Who We Are</span>
            </a>
          </div>
          <div className="p-4 m-3 text-2xl font-semibold">
            <a className="hover:text-green-500" href="#">
              <span>What We Do</span>
            </a>
          </div>
        </div>

        {/* <!-- search bar --> */}
        <div className="p flex flex-row ">
          <div className="py-6 px-4">
            <input
              type="text"
              id="input"
              className="input-s focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
              placeholder="type something"
            />
          </div>
          <button className="focus:outline-none search h-10 py-9">
            <img src="Images/search.svg" alt="" />
          </button>
        </div>

        {/* <!-- sign in --> */}
        <div className="flex flex-row m-3 p-4">
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
        <div className="p-5 content-end">
          <button className="demo p-2 pb-3 font-semibold focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-2xl text-white">
            Request Demo
          </button>
        </div>
      </div>

      <div className="mainImage">
        <img src="Images/Group.svg" alt="" />
        <div className="belowGroup">
          <button className="registerBtn">Register for Free</button>
        </div>
      </div>
    </motion.div>
  );
};

export default IndividualLearning;
