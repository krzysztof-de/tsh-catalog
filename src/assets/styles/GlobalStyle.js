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
    color: ${Theme.colors.black};
    font-family: 'Nunito', sans-serif;
    font-size: ${Theme.fontSize.m};
    font-weight: 600;
    line-height: 16px;
    background-color: ${Theme.colors.grey10};
    margin: 0;
}

  a, a:visited {
    color: ${Theme.colors.grey80};
  }

  
  h2 {
    font-size: ${Theme.fontSize.xxxl};
  }
`;
