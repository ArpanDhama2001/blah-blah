// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "Roboto, sans-serif",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      lineHeight: "base",
    },
  }),
};

// 3. extend the theme
const themes = {
  config,
  styles,
};

const theme = extendTheme(themes);

export default theme;
