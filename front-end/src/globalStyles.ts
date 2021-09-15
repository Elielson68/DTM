import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  #root{
    background: #102e4a;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
  }
`;

export default GlobalStyle;
