import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }




`;

export default StyledGlobalStyles;
