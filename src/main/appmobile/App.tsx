import React from 'react';
import { Login } from '@screens/Login';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
