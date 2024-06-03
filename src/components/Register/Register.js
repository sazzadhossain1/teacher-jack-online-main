import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../accets/NaviPhoto/logo.png";

const Register = () => {
  return (
    <div className="login_parent_div">
      <img className="logo_photo" src={logo} alt="" />

      <div className="login_input_div">
        <h2>Sign into Your Account</h2>
        <label htmlFor="">Full Name</label>
        <br />
        <input
          className="input"
          type="name"
          name="name"
          id=""
          placeholder="Enter Your Full Name"
        />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input
          className="input"
          type="email"
          name="email"
          id=""
          placeholder="Enter Your Email Addres"
        />
        <br />
        <br />

        <label htmlFor="">Password</label>
        <br />
        <input
          className="input"
          type="password"
          name="password"
          id=""
          placeholder="Enter Your Password"
        />
        <br />
        <br />
        <label htmlFor="">Confirm Password</label>
        <br />
        <input
          className="input"
          type="password"
          name="password"
          id=""
          placeholder="Password Confirmation"
        />

        <br />
        <br />
        <label className="remember_me" htmlFor="">
          <input type="checkbox" name="radio" id="" />
          &nbsp; I agree to the{" "}
          <Link className="common_link"> Terms of Service</Link> and{" "}
          <Link className="common_link"> Privacy Policy.</Link>
        </label>

        <br />
        <br />
        <button className="signIn_btn">Create Account</button>
        <br />

        <Link to="/login">
          <button className="register_btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
