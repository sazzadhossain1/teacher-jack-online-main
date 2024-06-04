import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../accets/NaviPhoto/logo.png";
import user from "../../accets/NaviPhoto/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

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

  const handleAboutClick = () => {
    navigate("/#about");
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            <Link onClick={handleAboutClick}>About</Link>
          </li>
          <li className="navbar__item">
            <Link>Packages</Link>
          </li>
          <li className="navbar__item">
            <Link>How it Works</Link>
          </li>
          <li className="navbar__item">
            <Link>Testimonials</Link>
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
