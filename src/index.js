import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { colors } from './theme';

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    &:focus {
    outline: none
  }
};

body {
  background: ${colors.gallery};
  color: ${colors.ebonyClay};
};
a {
  color: inherit;
  text-decoration: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
