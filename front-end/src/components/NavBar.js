import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-styles.css";
import TemporaryDrawer from "./TemporaryDrawer";

const NavBar = () => {
  return (
    <div className="navbar-wrapper" style={{backgroundColor:"Black", color: "white"}}>
      <Link to="/" className="home-btn-link">
        <b>
          Bookmeet
        </b>
      </Link>
      <div className="drawer">
        <TemporaryDrawer />
      </div>
    </div>
  )
};

export default NavBar;