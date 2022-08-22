import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/publication">Publicaciones</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/signup">Registro</Link>
      <Link to="/login">Accede</Link>
    </div>
  );
}

export default Navbar;
