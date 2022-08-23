import React from "react";
import AddPublication from "../../components/AddPublication";
import PersonalPublication from "../Publication/PersonalPublication";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(AuthContext);
  console.log("user", user.username);
  return (
    <div>
      <h2>Bienvenido {user.username}</h2>
      <AddPublication />
      <PersonalPublication />
    </div>
  );
}

export default Profile;
