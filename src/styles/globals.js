import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

html, body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

html{
  @media(max-width: 1080px){
    font-size: 93.75%
  }

  @media(max-width: 720px){
    font-size: 87.5%
  }
}

`;
