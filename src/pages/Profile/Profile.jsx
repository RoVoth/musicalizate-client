import React from "react";
import AddPublication from "../../components/AddPublication";
import PersonalPublication from "../Publication/PersonalPublication";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import videoBg3 from "../../assets/profile.mp4";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="main">
      <div className="overlay"></div>
      <video className="videoHome" src={videoBg3} autoPlay loop muted />
      <div className="content">
        <div>
          <h2 className="text-center mt-4">
            Bienvenido {user?.username.toUpperCase()}
          </h2>
          <div>
            <AddPublication />
          </div>

          <PersonalPublication />
        </div>
      </div>
    </div>
  );
}

export default Profile;
