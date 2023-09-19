import { createGlobalStyle } from 'styled-components'
//fonts 

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Din Pro Light';
    src: url('/fonts/DINPro-Light.woff2') format('woff2');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Din Pro';
    src: url('/fonts/DINPro.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Din Pro Medium';
    src: url('/fonts/DINPro-Medium.woff2') format('woff2');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Din Pro Bold';
    src: url('/fonts/DINPro-Bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    color: ${({ theme }) => theme.colors.neutralMedium};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-family: 'Din Pro', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul, ol{
    list-style: none;
  }
`

export default GlobalStyle