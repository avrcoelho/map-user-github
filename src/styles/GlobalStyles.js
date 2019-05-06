import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

/* estilos globais que funcionam em toda a aplicação
 se não for assim o estilo só funciona no componente que ele esta seno utilizado */
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #eee;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
    display:flex;
    flex-direction: row;
    justify-content: center;
    }
`;

export default GlobalStyles;
