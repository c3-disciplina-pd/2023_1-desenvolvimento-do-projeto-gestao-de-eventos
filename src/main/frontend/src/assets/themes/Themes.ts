import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#9C001C",
    800: "#505050",
    700: "rgba(138, 138, 138, 0.5)",
    600: "#9D7628CF",

  },
  fontSizes: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    "2xl": "3rem",
    "3xl": "3.5rem",
    "4xl": "4rem",
    "5xl": "4.5rem",
    "6xl": "5rem",
  },
};

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

export const Theme = extendTheme({ colors, fonts });
