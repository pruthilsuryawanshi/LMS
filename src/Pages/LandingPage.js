import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import "./Tailwind.css";
const LandingPage = () => {
  return (
    <div className="body">
      <div className="bg-gray-200 box m-14">
        {/* <!-- navbar --> */}
        <div className="flex-row navbar">
          {/* <!-- kids galaxy logo --> */}
          <div className="p-5">
            <img src="Images/logo.png" alt="kids-galaxy-logo" />
          </div>
          {/* <!--  nav links   --> */}
          <div className="flex flex-row pl-48 pr-24" id="shift">
            <div className="p-4 m-3 text-2xl font-semibold">
              <a className="hover:text-green-500" href="#">
                <p>Courses</p>
              </a>
            </div>
            <div className="p-4 m-3 text-2xl font-semibold">
              <a className="hover:text-green-500" href="#">
                <p>Who We Are</p>
              </a>
            </div>
            <div className="p-4 m-3 text-2xl font-semibold">
              <a className="hover:text-green-500" href="#">
                <p>What We Do</p>
              </a>
            </div>
          </div>

          {/* <!-- search bar --> */}

          <div className="p flex flex-row">
            <div class="py-6 px-4">
              <input
                type="text"
                id="input"
                class="input-s focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                placeholder="search"
              />
            </div>
            <button className=" focus:outline-none search h-10 py-9">
              {/* <input className="inputSearch" type="text" /> */}
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
          <div className="p-4 content-end">
            <button className="demo p-3 font-semibold focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-2xl text-white">
              Request Demo
            </button>
          </div>
        </div>

        {/* <!-- main page --> */}
        <div className="flex flex-row justify-around">
          {/* <!-- LEFT-DIV --> */}
          <div className="">
            <div className="pt-36 pb-4">
              <h1 className="a pt-7">
                BREAK THE BARRIERS OF ORDINARY LEARNING
              </h1>
            </div>
            <div>
              <p className="b">Lets build a brighter future together</p>
            </div>
            <div className="px-24 py-7">
              <button className="font-bg start-btn focus:outline-none c justify-self-center p-4">
                Start Learning For Free
              </button>
            </div>
          </div>

          {/* <!-- right div image --> */}
          <div className="">
            <img src="Images/Illustration.png" alt="stud-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
