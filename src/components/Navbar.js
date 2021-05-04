import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div class="container-fluid">
      <div class="row nav-bar">
        <div class="col-3 nav-left">
          <NavbarLogo/>
        </div>
        <div class="col d-none d-lg-block nav-center">
         <Link to='/adminlogin'>
         <a href="{}" class="label-1">
            Courses
          </a>
         </Link>
          <a href="{}" class="label-2">
            What We Do
          </a>
          <a href="{}" class="label-3">
            Who We Are
          </a>
        </div>
        <i class="material-icons">search</i>
        <i class="material-icons person-icon">person</i>
        <div class="col-3 nav-right">
          <Link to="/login">
            <a href="{}" class="sign-in">
              Sign In
            </a>
          </Link>
          <Link to="#">
            <a href="{}" class="request-demo">
              Request Demo
            </a>
          </Link>
        </div>
        <div
          id="nav-ham"
          className={` col-1 d-lg-none ${hamburger && "Diam"}`}
          onClick={() => setHamburger(!hamburger)}
        >
          <div class="ham top"></div>
          <div class="ham middle"></div>
          <div class="ham bottom"></div>
        </div>
      </div>
      <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
        <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
            <li className="hamburger-menu-item">
              <a href="/login" className="hm-hover1">
                Sign In
              </a>
            </li>
            <li className="hamburger-menu-item">
              <a href="/admin" className="hm-hover2">
                Courses
              </a>
            </li>
            <li className="hamburger-menu-item hm-hover3">
              <a href="{}" className="hm-hover3">
                Who We Are
              </a>
            </li>
            <li className="hamburger-menu-item hm-hover4">
              <a href="{}" className="hm-hover4">
                What We Do
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
