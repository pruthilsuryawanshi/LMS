import React from "react";

import "./Login.css";
import "./Tailwind.css";
const Login = () => {
  return (
    <div className="bg-gray-200 box m-14 ">
      {/* <!-- navbar --> */}
      <div className="flex flex-row navbar">
        {/* <!-- kids galaxy logo --> */}
        <div className="p-5">
          <img src="Images/logo.png" alt="kids-galaxy-logo" />
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
              <span>What we do</span>
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
            <span className="font-semibold text-2xl">Sign In</span>
          </button>
        </div>

        {/* <!-- demo button --> */}
        <div className="p-5 content-end">
          <button className="demo p-2 pb-3 font-semibold focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-2xl text-white">
            Request Demo
          </button>
        </div>
      </div>

      <div className="flex flex-row">
        {/* <!-- LEFT-DIV  image--> */}
        <div className="pl-64 pt-12 mx-3">
          <img src="Images/login-canva.png" alt="stud-img" />
        </div>

        {/* <!-- right div  --> */}

        <div className="pl-36">
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
            <div className="py-3">
              <p className="text-center forgotpass">or login using</p>
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
      </div>
    </div>
  );
};

export default Login;
