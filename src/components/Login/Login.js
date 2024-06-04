import React from "react";
import "./Login.css";
import logo from "../../accets/NaviPhoto/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
  return (
    <div className="login_parent_div">
      <img className="logo_photo" src={logo} alt="" />

      <div className="login_input_div">
        <h2>Sign into Your Account</h2>
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

        <Link className="forgetPass">
          <p className="forgetPass_p">Forgot Password ?</p>
        </Link>
        <br />
        <label className="remember_me" htmlFor="">
          <input type="checkbox" name="radio" id="" />
          &nbsp; Remember me
        </label>

        <br />
        <br />
        <button className="signIn_btn">Sign In</button>
        <br />

        <Link to="/register">
          <button className="register_btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
