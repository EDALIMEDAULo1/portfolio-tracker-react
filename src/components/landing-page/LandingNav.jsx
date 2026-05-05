import React from "react";
import "./landingNav.css";
import { useNavigate } from "react-router-dom";

const LandingNav = () => {
  const navigate = useNavigate();

  function handleSignup() {
    console.log("signup clicked");
    navigate("/signup");
  }
  function handleLogin() {
    navigate("./login")
  }
    function handleHomepage() {
        navigate("/")
    }
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <h2 onClick={handleHomepage}>
            Portfolio<span>Tracker</span>
          </h2>
        </div>

        <div class="search-container">
          <input type="text" placeholder="Search" id="search-box" />
        </div>

        <div class="nav-actions">
          <button class="btn-login" onClick={handleLogin}>Log In</button>
          <button class="btn-signup" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LandingNav;
