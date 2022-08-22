import React from "react";

function Login() {
  return (
    <div>
      <h3>Acceder</h3>
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button>Acceder</button>
      </form>
    </div>
  );
}

export default Login;
