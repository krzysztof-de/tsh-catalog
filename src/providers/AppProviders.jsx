import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/Theme';
import ProductsProvider from './ProductsProvider';

export const AppProviders = ({ children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <GlobalStyle />
        {children}
      </ProductsProvider >
    </ThemeProvider>
  </Router>
);
