// Usercontext.js
import { useContext, createContext } from 'react';

const userContext = createContext({
  username: "",
  email: ""
});

export const UserProvider = ({children}) => {
  const obj = { username: "kushal", email: "kushal@gmail.com" };
  return <userContext.Provider value={obj}>{children}</userContext.Provider>;
};

export const useHook = () => useContext(userContext);
