import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, auth, setAuth }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
