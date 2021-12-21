import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
align-items, button, input {
    font-family: 'Nunito', sans-serif;
}

body, html {
    overflow-x: hidden;
    color: ${Theme.colors.black};
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    background-color: ${Theme.colors.grey10};
    margin: 0;


}

body {
  padding-top: 170px;

  @media (max-width: 1000px) {
    padding-top: 244px;
    }

  @media (max-width: 660px) {
    padding-top: 290px;
  }
}
`;
