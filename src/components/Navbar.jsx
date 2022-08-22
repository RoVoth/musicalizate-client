import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const navigate = useNavigate();

  const { isUserActive, authenticateUser } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  if (isUserActive === true) {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/publication">Publicaciones</Link>
        <Link to="/profile">Perfil</Link>
        <Link onClick={handleLogOut} to="/">
          Cerrar
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/publication">Publicaciones</Link>
        <Link to="/signup">Registro</Link>
        <Link to="/login">Accede</Link>
      </div>
    );
  }
}
export default Navbar;
