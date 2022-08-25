import React from "react";
import videoBg from "../assets/fondo.mp4";
import imageBg from "../assets/logo.png";

import "../pages/home.css";

function Home() {
  return (
    <div className="main">
      <div className="overlay">
        <img className="logo" src={imageBg} />
      </div>
      <video className="videoHome" src={videoBg} autoPlay loop muted />
    </div>
  );
}

export default Home;
