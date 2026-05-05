import React from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css'
import Navbar from "./Navbar";

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <main class="container-menu">
        <div class="user">
          <h3>Hey (user) , here is what you have learned so far</h3>

          <a href="/Suggestion-Page/Suggestions.html">
            <button class="pro-btn">New Project</button>
          </a>
        </div>
        <div class="progress-list">
          <h4>Example</h4>

          <div class="pro-bar">
            <label for="file">Downloading progress:</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>

          <p>May 26; 2028</p>

          <span>
            <i class="fa fa-ellipsis-v"></i>
          </span>
        </div>
      </main>

      <footer>
        <a href="/Privacy-Page/Privacy.html">Privacy policy</a>
        <p>&copy; Demilade and Samuel 2026</p>
      </footer>
    </div>
  );
};

export default Homepage;
