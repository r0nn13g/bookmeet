import React from "react";
import { Link } from "react-router-dom";
// import "../styles/video-styles.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper" style={{backgroundColor:"Black", color: "gray"}}>
      <Link to="/">
        <b>
          Blackstone®
        </b>
      </Link>
    </div>
  )
};

export default NavBar;