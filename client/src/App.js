// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS 
import Homepage from './views/Homepage.jsx'

// - 2 - COMPONENTS

// STYLES
import { ThemeProvider } from 'styled-components'
import AppTheme from './styles/theme.js'
import './styles/index.css'


// __MAIN FUNCTIONAL COMPONENT__ 
function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className="App">
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
