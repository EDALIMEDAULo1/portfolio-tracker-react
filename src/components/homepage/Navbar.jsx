import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

    function handleHomepage() {
        navigate("/")
    }
  return (
    <div className="nav-bar">
        <div class="logo">
          <h2 onClick={handleHomepage}>
            Portfolio<span>Tracker</span>
          </h2>
        </div>

      <div id="nav-svg">
        <i className="fa-solid fa-bars-staggered"></i>
      </div>

      <div className="search">
        <input type="text" placeholder="Search.." />
      </div>

      <div className="nav-links">
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/suggestions">Suggestion</Link>
          <Link to="/build">Build Mode</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
