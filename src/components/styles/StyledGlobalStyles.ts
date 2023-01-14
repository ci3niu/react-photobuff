import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  scroll-behavior: smooth;


`;

export default StyledGlobalStyles;
