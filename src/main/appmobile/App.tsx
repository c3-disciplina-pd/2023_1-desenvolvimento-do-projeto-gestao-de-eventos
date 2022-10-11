import React from "react";
import { Login } from "@screens/Login";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { Register } from "@screens/Register";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? <Register /> : <Loading />}
    </ThemeProvider>
  );
}
