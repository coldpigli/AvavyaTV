import { createContext, useContext, useReducer } from "react";
import userDetailsReducer from "./userDetailsReducer";

const UserContext = createContext(null);

const useUserDetails = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userDetailsReducer, {
    isLoggedIn: false,
    firstName: "",
    history: [],
    likes: [],
    playlists: [], 
  });

  return (
    <UserContext.Provider value={{ userState, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserDetails };
