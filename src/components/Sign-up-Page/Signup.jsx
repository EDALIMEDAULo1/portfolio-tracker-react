import React from "react";
import "./signup.css";
import LandingNav from "../landing-page/LandingNav";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()

    function handleLogin() {
        navigate("/login")
    }
  return (
    <div>
      <LandingNav />
      <div className="signup-container">
        <form className="signup-card">
          <h2>Create Account</h2>
          <p>Join Portfolio Tracker today</p>

          <div className="input-group">
            <label>Username</label>
            <input type="text" name="username" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="name@gmail.com"/>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="********"/>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="********"/>
          </div>

          <button type="submit" className="signup-btn1" onClick={handleLogin}>
            Sign Up
          </button>

          <p className="switch">
            Already have an account? <span onClick={handleLogin}>Log In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
