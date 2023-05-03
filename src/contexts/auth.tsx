import { createContext } from "react";

const AuthContext = createContext({
  setUser: (user: boolean) => {false},
});

export { AuthContext };
