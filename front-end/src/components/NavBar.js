import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-styles.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper" style={{backgroundColor:"Black", color: "gray"}}>
      <Link to="/" className="home-btn-link">
        <b>
          Bookmeet
        </b>
      </Link>
    </div>
  )
};

export default NavBar;