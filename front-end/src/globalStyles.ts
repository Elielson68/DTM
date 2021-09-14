import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default GlobalStyle;
