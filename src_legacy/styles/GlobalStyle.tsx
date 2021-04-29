import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import PALETTE from 'Styles/'

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background-color: ${PALETTE}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button, textarea, p {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

export default GlobalStyle;
