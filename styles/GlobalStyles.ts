import * as styled from 'styled-components';
import { reset } from 'styled-reset';

// const styled = { createGlobalStyle };
/* @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css); */
const GlobalStyles = styled.createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif, 'Pretendard-Regular';
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Pretendard-Regular', 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
