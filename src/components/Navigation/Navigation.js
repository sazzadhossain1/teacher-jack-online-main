import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../accets/NaviPhoto/logo.png";
import user from "../../accets/NaviPhoto/user.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
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
        <div className="navbar__user">
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
    </div>
  );
};

export default Navigation;
