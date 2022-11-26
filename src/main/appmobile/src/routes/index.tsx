import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";

export function Routes() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        setUser: (user) => {
          setLoggedIn(user);
        },
      }}
    >
      <NavigationContainer>
        {loggedIn ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
