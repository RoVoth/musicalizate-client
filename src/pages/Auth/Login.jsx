import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import videoBg2 from "../../assets/acceder.mp4";
import { AuthContext } from "../../context/auth.context";

function Login() {
  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await loginService(user);
      console.log(response.data);

      const authToken = response.data.authToken;

      localStorage.setItem("authToken", authToken);
      authenticateUser();
      navigate("/profile");
    } catch (error) {
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
      <video className="videoHome" src={videoBg2} autoPlay loop muted />
      <div className="content">
        <div>
          <h1 className="text-center mt-4">Acceder</h1>

          <div className="container">
            <form onSubmit={handleLogin}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email del Usuario</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Insertar Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Insertar Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <br />
                {errorMessage ? <p>{errorMessage}</p> : null}
                <br />
              </div>

              <div className="text-center">
                <button type="submit" class="btn btn-primary  m-4">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
