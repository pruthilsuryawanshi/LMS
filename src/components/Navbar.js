import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row nav-bar">
        <div className="col-3 nav-left">
          <NavbarLogo/>
        </div>
        <div className="col d-none d-lg-block nav-center">
         <Link to='/adminlogin' className="label-1">
            Courses
         </Link>
          <Link to='' className="label-2">
            What We Do
          </Link>
          <Link to='' className="label-3">
            Who We Are
          </Link>
        </div>
        <i className="material-icons">search</i>
        <i className="material-icons person-icon">person</i>
        <div className="col-3 nav-right">
            <Link to='/login' className="sign-in">
              Sign In
            </Link>
          <Link to="#">
            <Link to='' className="request-demo">
              Request Demo
            </Link>
          </Link>
        </div>
        <div
          id="nav-ham"
          className={` col-1 d-lg-none ${hamburger && "Diam"}`}
          onClick={() => setHamburger(!hamburger)}
        >
          <div className="ham top"></div>
          <div className="ham middle"></div>
          <div className="ham bottom"></div>
        </div>
      </div>
      <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
        <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
              <Link to='/login' className="hm-hover1">
                Sign In
              </Link>
            </li>
            <li className="hamburger-menu-item">
              <Link to='/adminlogin' className="hm-hover2">
                Courses
              </Link>
            </li>
            <li className="hamburger-menu-item hm-hover3">
              <Link to='' className="hm-hover3">
                Who We Are
              </Link>
            </li>
            <li className="hamburger-menu-item hm-hover4">
              <Link to='' className="hm-hover4">
                What We Do
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
