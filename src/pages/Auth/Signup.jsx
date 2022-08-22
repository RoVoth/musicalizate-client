import React from "react";

function Signup() {
  return (
    <div>
      <h3>Registro</h3>
      <form>
        <label>Nombre:</label>
        <input type="text" name="username" />
        <br />
        <label>Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button>Registrarte</button>
      </form>
    </div>
  );
}

export default Signup;
