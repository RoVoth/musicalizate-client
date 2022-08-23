import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function NavBarFull() {
  const navigate = useNavigate();

  const { isUserActive, authenticateUser } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  if (isUserActive === true) {
    return (
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Musicalizate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/publication">
                Publicaciones
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Perfil
              </Nav.Link>
              <Nav.Link onClick={handleLogOut} as={Link} to="/">
                Cerrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Musicalizate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/publication">
                Publicaciones
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Acceder
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavBarFull;
