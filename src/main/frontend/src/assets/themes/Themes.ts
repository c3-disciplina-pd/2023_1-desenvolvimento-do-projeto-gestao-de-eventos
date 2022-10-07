import { extendTheme } from "@chakra-ui/react";

const textStyles = {
  brand: {
    900: "#FEC93E",
    800: "#F09600",
    700: "#2a69ac",
    600: "#F8580E",
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

export const Theme = extendTheme({ textStyles, fonts });
