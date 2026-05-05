import React from "react";
import '../Sign-up-Page/signup.css'
import LandingNav from "../landing-page/LandingNav";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    function handleSignupRedirect() {
        navigate("/signup")
    }
    function handleHomepage() {
        navigate("/homepage")
    }
  return (
    <div>
        <LandingNav />
      <div className="signup-container">
        <form className="signup-card">
          <h2>Welcome Back</h2>
          <p>Enter your details to manage your portfolio</p>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
            />
          </div>

          <button type="submit" className="signup-btn1" onClick={handleHomepage}>
            Log In
          </button>

          <p className="switch">
            Don't have an account?
            <span onClick={handleSignupRedirect}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
