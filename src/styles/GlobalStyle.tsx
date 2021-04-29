import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import PALETTE from './color-variables';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button, textarea, p {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    font-size: 14px;
  }
`;

export default GlobalStyle;
