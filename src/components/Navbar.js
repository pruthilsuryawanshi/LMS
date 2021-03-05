import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";
import { Auth, navBar } from "aws-amplify";

import "./Navbar.css";
const Navbar = () => {
  const auth = useContext(AuthContext);
  const [hamburger, setHamburger] = useState(false);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      auth.logout();
    } catch (error) {
      console.log("error signing out: ", error);
      alert(error.message);
    }
  };

  return (
   
      <nav className="navbar">
       <Link to="/">
       <img
       src="Images/logo.png"
       alt="Kids Galaxy Logo"
       className="navLogo"
     />
       </Link>
       <div id="menu">
       <div id="pencet"
       className={`${hamburger && "Diam"}`}
       onClick={() => setHamburger(!hamburger)}>
       <span className="top"></span>
       <span className="middle"></span>
       <span className="bottom"></span>
         </div>
     
         </div>
   <ul className="nav-menu">
    <li className="menu-item"><a href="{}">Courses</a></li>
    <li className="menu-item"><a href="{}">Who We Are</a></li>
    <li className="menu-item"><a href="{}">What We Do</a></li>
    </ul>
    <ul className="nav-Search-user">
    <Link to="/login">  
    <li className="menu-item nav-search-input"></li>
    </Link>
    <li className="menu-item">
    {auth.isLoggedIn ? (
      <div className="user signoutNav" onClick={handleSignOut}>
        <img src="Images/Icon awesome-user-alt.png" alt="" />
        <p>Sign Out</p>
      </div>
    ) : (
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="user">
          <img src="Images/Icon awesome-user-alt.png" alt="" />
          <p>Sign In</p>
        </div>
      </Link>
    )}
    </li>
    <li className="menu-item">
    <Link className="btn requestDemoBtn">Request Demo</Link>
    </li>
  </ul>
   <div className={`hiddenNav ${hamburger && "hamburgerOpen"}`}>
          <nav className="hiddenNavSearch-user">
          <ul className="hamburger-menu">
          <li className="hamburger-menu-item">
          <a href="/signup" className="hm-hover1" >Sign In</a>
         </li>
          <li className="hamburger-menu-item"><a href="{}" className="hm-hover2">Courses</a></li>
          <li className="hamburger-menu-item hm-hover3"><a href="{}" className="hm-hover3">Who We Are</a></li>
          <li className="hamburger-menu-item hm-hover4"><a href="{}" className="hm-hover4">What We Do</a></li>
        </ul>                    
          </nav>
    </div>    
   </nav>
   
   
      
  );
  
};

export default Navbar;
