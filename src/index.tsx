import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./static/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider, extendTheme, theme as base } from "@chakra-ui/react";
// import * as serviceWorker from './serviceWorker';

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5fee5",
      100: "#e1fbb2",
      200: "#cdf781",
      300: "#b8ee56",
      400: "#a2e032",
      500: "#8ac919",
      600: "#71ab09",
      700: "#578602",
      800: "#3c5e00",
      900: "#203300",
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.heading}`,
    footer: `Montserrat, ${base.fonts?.heading}`,
  },
  config: {
    initialColorMode: "dark",
  },
});
export default theme;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
