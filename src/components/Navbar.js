import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid navStyle">
          <Link to="/">
            <img
              src="Images/logo.png"
              alt="Kids Galaxy Logo"
              className="d-inline-block align-top navLogo"
            />
          </Link>
          <div className="navRight">
            <div className="navLinks">
              <p>Courses</p>
              <p>Who We Are</p>
              <p>What We Do</p>
            </div>
            <div className="navSearch-user">
              <form>
                <input
                  className="nav-search-input"
                  type="text"
                  name="search"
                  placeholder="Search.."
                />
              </form>
              <Link to="/login">
                <div className="user">
                  <img src="Images/Icon awesome-user-alt.png" alt="" />
                  <p>Sign In</p>
                </div>
              </Link>

              <button type="submit">REQUEST DEMO</button>
            </div>
            <div
              id="nav-icon4"
              onClick={() => setHamburger(!hamburger)}
              className={`${hamburger && "open"}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
          <div className="hiddenNavSearch-user">
            <form>
              <input
                className="nav-search-input"
                type="text"
                name="search"
                placeholder="Search"
              />
            </form>
            <Link to="/login">
              <div className="user">
                <img src="Images/Icon awesome-user-alt.png" alt="" />
                <p>Sign In</p>
              </div>
            </Link>
            <button type="submit">REQUEST DEMO</button>
          </div>
          <div className="hiddnNavLinks">
            <p>Courses</p>
            <p>Who We Are</p>
            <p>What We Do</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
