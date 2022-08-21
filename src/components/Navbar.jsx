import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/publication">Publication</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Navbar;
