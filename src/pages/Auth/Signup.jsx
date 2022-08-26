import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";
import videoBg1 from "../../assets/registro.mp4";

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
    <div className="main">
      <div className="overlay"></div>
      <video className="videoHome" src={videoBg1} autoPlay loop muted />
      <div className="content">
        <div>
          <h1 className="text-center mt-4">Registro de Usuario</h1>

          <div className="container">
            <form method="POST">
              <div class="form-group">
                <label for="exampleInputPassword1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Nombre de usuario"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email del Usuario"
                />
                <small id="emailHelp" class="form-text text-muted">
                  No compartiremos su email con nadie.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password del Usuario"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleSignup}
                  class="btn btn-primary  m-4"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
