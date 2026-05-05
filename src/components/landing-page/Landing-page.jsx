import LandingNav from "./LandingNav"
import './landingNav.css'
import './landing-page.css'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()

  function handleSignup() {
    console.log("signup clicked");
    navigate("/signup");
  }
  function handleLogin() {
    navigate("./login")
  }
  return(
    <div id="container">
        <LandingNav />
          <div className="hero-section">
              <h2 className="hero-h2">Discover, Learn, Develop</h2>
              <p className="hero-p">Introducing Portfolio Tracker, learn more here</p>

                <div className="sign-1">
                    <button className="btn-1" onClick={handleLogin}>Log In</button>
                    <button className="btn-2" onClick={handleSignup}>Sign Up</button>
                </div>
          </div>
    </div>
  );
};

export default LandingPage; 