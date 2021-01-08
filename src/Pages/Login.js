import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import "./Login.css";
import "./Tailwind.css";
const Login = ({ inputVisible, setInputVisible }) => {
  return (
    <body>
      <motion.img
        initial={{ opacity: 1, y: "-50vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: "-50vh" }}
        transition={{ duration: 0.8 }}
        className="overlayLogin"
        src="Images/OverlayLogin.png"
        alt=""
      />
      <div className="bg-gray-200 box m-14 ">
        {/* <!-- navbar --> */}
        <div className="flex flex-row navbar">
          {/* <!-- kids galaxy logo --> */}
          <div className="p-5">
            <Link to="/">
              <img src="Images/logo.png" alt="kids-galaxy-logo" />
            </Link>
          </div>
          {/* <!--  nav links   --> */}
          <div className="navLinks">
            <div className="flex flex-row" id="shift">
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

            <div className="p flex flex-row searchDiv">
              {/* <button className=" focus:outline-none search h-10 py-9">
              {inputVisible && (
                <input
                  className="inputSearch"
                  type="text"
                  placeholder="Search"
                />
              )}
              <img
                src="Images/search.svg"
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  setInputVisible(!inputVisible);
                }}
              />
            </button> */}
              <form action="">
                <img src="Images/search.svg" class="fa fa-search" />
              </form>
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row"
        >
          {/* <!-- LEFT-DIV  image--> */}
          <div className="pl-64 pt-12 mx-3 leftDiv">
            <img src="Images/Log in page illustration.png" alt="stud-img" />
            <p>
              Lorem ipsum odoer Lorem ipsum odoer Lorem ipsum odoer odoer Sign
              Up
            </p>
          </div>

          {/* <!-- right div  --> */}

          <div className="pl-40 rightDiv">
            <div>
              <p className="login">Log In</p>
            </div>

            <div>
              <div className="p-5">
                <p className="headers">Email-Id</p>
                <input
                  type="text"
                  className="input-field description border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent p-3"
                  placeholder="Enter Email-Id"
                />
              </div>

              <div className="p-5">
                <p className="headers">Password</p>
                <input
                  type="password"
                  className="input-field description border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent p-3"
                  placeholder="Enter Password"
                />
                <a href="#">
                  <p className="text-right pr-8 pt-2 forgotpass">
                    forgot password?
                  </p>
                </a>
              </div>

              <div className="flex flex-row p-4 pl-2">
                <div className="p-3">
                  <input type="checkbox" className="checkbox" />
                </div>
                <p className="p-2 pl-0 remember-me">Remember Me</p>
              </div>
            </div>

            <div className="text-center">
              <button className="loginBtn">Login</button>
            </div>

            <div>
              <div className="py-3 loginLine">
                <hr />
                <p className="text-center forgotpass">or login using</p>
                <hr />
              </div>
              <div className="flex flex row p-4 justify-center ">
                <div className="px-3">
                  <div>
                    <img src="Images/fb.png" alt="facebook" />
                  </div>
                </div>
                <div className="px-3">
                  <div>
                    <img src="Images/google.png" alt="google" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center acc">
                Don't have a account ?{" "}
                <a className="sign-up text-blue-600" href="#">
                  SIGN UP
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </body>
  );
};

export default Login;
