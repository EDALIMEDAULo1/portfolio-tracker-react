import React from "react";
import './landingNav.css'

const LandingNav = () => {
  return(
   
   <div className="container">
      <div className="title-div">
          <h2 className="title">Portfolio Tracker</h2>
      </div>
        <div className="search-bar">
          <label htmlFor="search-box">Search: </label>
          <input type="text" id="search-box" />
        </div>
        <div className="sign">
          <button className="btn-1">Log In</button>
          <button className="btn-2">Sign Up</button>
        </div>
   </div>
    
  );
};

export default LandingNav;