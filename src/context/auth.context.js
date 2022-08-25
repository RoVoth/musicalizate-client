import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [isUserActive, setIsUserActive] = useState(false);
  const [user, setUser] = useState(null);
  const [isFetchingUser, setIsFetchingUser] = useState(true);

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = async () => {
    try {
      const response = await verifyService();
      console.log("verifyService", response.data);
      setIsUserActive(true);
      setUser(response.data);
      setIsFetchingUser(false);
    } catch (error) {
      console.log(error);
      setIsUserActive(false);
      setUser(null);
      setIsFetchingUser(false);
    }
  };

  const passedContext = {
    isUserActive,
    user,
    authenticateUser,
    isFetchingUser,
  };

  if (isFetchingUser === true) {
    return <h3>... Is validating User</h3>;
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
