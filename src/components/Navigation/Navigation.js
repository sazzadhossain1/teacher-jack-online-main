import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../accets/NaviPhoto/logo.png";
import user from "../../accets/NaviPhoto/user.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const userLoginFunction = () => {
    const getLoginDiv = document.getElementById("login_main_div");
    console.log(getLoginDiv);

    getLoginDiv.removeAttribute("hidden");
  };

  const hiddenLoginFunction = () => {
    const getLoginDiv = document.getElementById("login_main_div");
    console.log(getLoginDiv);

    getLoginDiv.setAttribute("hidden", "hidden");
  };
  return (
    <div className="navigation_parent_div">
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/services">Services</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar__item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <div className="navbar__user" onClick={userLoginFunction}>
          <img src={user} alt="User" />
        </div>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          ☰
        </button>
      </nav>

      <div id="login_main_div" hidden onClick={hiddenLoginFunction}>
        <Link to="/login" className="Login">
          <div className="login_div">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span className="span_login">Login</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
