import React from "react";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { AppRegistry, StatusBar } from "react-native";
import { Routes } from "@routes/index";

import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const queryClient = new QueryClient();

  AppRegistry.registerComponent('main', () => App);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </QueryClientProvider>

  );
}
