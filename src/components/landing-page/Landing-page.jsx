import LandingNav from "./LandingNav"
import './landingNav.css'

const LandingPage = () => {
  return(
    <>
    <LandingNav />
    <div className="hero-section">
      <h2 className="hero-h2">Discover, Learn, Develop</h2>
      <p className="hero-p">Introducing Portfolio Tracker, learn more here</p>

    <div className="sign-1">
      <button className="btn-1">Log In</button>
      <button className="btn-2">Sign Up</button>
    </div>
    </div>
    </>
  );
};

export default LandingPage; 