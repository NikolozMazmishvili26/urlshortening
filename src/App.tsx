import styled, { createGlobalStyle } from "styled-components";

// import components
import Header from "./components/Header Component/Header";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* color variables */

  :root{
    --black-color : #34313D;
    --dark-purple : #3A3054;
    --light-purple : #4B3F6B;
    --dark-gray : #9E9AA8;
    --light-gray : #EFF1F7;
    --green-color : #2BD0D0;
    --green-hover: #9AE3E3;
  }

`;

export const GlobalContainer = styled.div`
  max-width: 1108px;
  width: 100%;
  margin: auto;
  padding: 40px 24px 0px 24px;

  @media screen and (min-width: 1150px) {
    padding: 48px 0px 0px 0px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
