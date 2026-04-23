import React from "react";

const Navbar = () => {
  return(
    <>
      <div class="nav-bar">
            <div className="title-div">
              <h2 className="title">Portfolio Tracker</h2>
          </div>

            <div className="search-bar">
              <label htmlFor="search-box">Search: </label>
              <input type="text" id="search-box" />
          </div>
          <nav>
            <ul className='navbar'>
              <li>
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/suggestion">Suggestion</NavLink>
              </li>
              <li>
                <NavLink to="/build-mode">Build Mode</NavLink>
              </li>
              <li>
                <NavLink to="/settings">Settings</NavLink>
              </li>
            </ul>
          </nav>
            
      </div>
    </>
  );
};

export default Navbar;