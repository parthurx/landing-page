import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorsTheme, GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={ColorsTheme}>
    <App />
    </ThemeProvider>

  </React.StrictMode>
);

