// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import App from './App';

// STYLES
import { ThemeProvider } from 'styled-components'
import AppTheme from './styles/theme.js'
import './styles/index.css'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);