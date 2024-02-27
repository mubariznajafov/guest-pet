import React from "react";
import { Link } from "react-router-dom";
import AdoptMeLogo from "../assets/adopt_me_white.png";
import "../scss/layout/navbar/_navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <Link to={"/"}>
          <img src={AdoptMeLogo} alt="adopt-me-logo" />
        </Link>
      </div>
      <div className="navbarLinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/pages"}>Pages</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
