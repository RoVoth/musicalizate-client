import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };

    try {
      await signupService(user);
      navigate("/login");
    } catch (error) {
      console.log(error.response.status);
      console.log(error.response.data.errorMessage);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <Form id="signupform" onSubmit={handleSignup}>
      <h3>Registro de Usuario</h3>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label value={username} onChange={handleUsernameChange}>
          Nombre:
        </Form.Label>
        <Form.Control type="text" placeholder="Nombre de usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label value={email} onChange={handleEmailChange}>
          Email:
        </Form.Label>
        <Form.Control type="email" placeholder="Email del Usuario" />
        <Form.Text className="text-muted">
          No compartiremos su email con nadie.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label value={password} onChange={handlePasswordChange}>
          Password:
        </Form.Label>
        <Form.Control type="password" placeholder="Password del Usuario" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
/*

  return (
    <Form onSubmit={handleSignup}>
      <h3>Registro de Usuario</h3>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label value={username} onChange={handleUsernameChange} >Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Nombre de usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label value={email} onChange={handleEmailChange}>Email:</Form.Label>
        <Form.Control type="email" placeholder="Email del Usuario" />
        <Form.Text className="text-muted">
          No compartiremos su email con nadie.
        </Form.Text>
      </Form.Group>      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label value={password} onChange={handlePasswordChange}>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password del Usuario" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


*/
