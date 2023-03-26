import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: #3A4454;
    font-family: "Helvetica Neue", "Helvetica", "Hiragino sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
  }

  h1, h2 {
    font-family: "Piazzolla", "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
    line-height: 1.4;
  }

  h2, h3 {
    margin-top: 0;
    font-weight: 700;
  }

  h1 {
    margin-top: 0;
    font-weight: 500;
  }

  h2 {
    text-align: center;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  p {
    line-height: 1.8;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  a, input, textarea {
    transition: all 0.15s ease-in-out;
  }

  input[type="submit"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;
