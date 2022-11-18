import React from "react";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";

import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { Home } from "@screens/Home";
import { EventDetails } from "@screens/EventDetails";
import { Edit } from "@screens/Edit";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Edit /> : <Loading />}
    </ThemeProvider>
  );
}
