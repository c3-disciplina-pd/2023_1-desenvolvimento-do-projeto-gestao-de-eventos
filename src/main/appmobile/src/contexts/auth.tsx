import { createContext } from "react";

const AuthContext = createContext({
  setUser: (user: boolean) => {},
});

export { AuthContext };
