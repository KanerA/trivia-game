import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <Link to="/login">
        <button className="homeToLogin homeButton">Login</button>
      </Link>
      <Link to="/signup">
        <button className="homeToSignup homeButton">Sign-up</button>
      </Link>
    </div>
  );
}

export default Home;
