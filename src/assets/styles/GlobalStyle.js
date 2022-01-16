import { createGlobalStyle } from 'styled-components';

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
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Nunito', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
    line-height: 16px;
    background-color: ${({ theme }) => theme.colors.grey10};
    margin: 0;
}

  a, a:visited {
    color: ${({ theme }) => theme.colors.grey80};
  }

  
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
