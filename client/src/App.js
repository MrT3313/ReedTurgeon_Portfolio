// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS 
import Homepage from './views/Homepage.jsx'

// - 2 - COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_App = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.primary.color};

`

// __MAIN FUNCTIONAL COMPONENT__ 
function App() {
  return (
      <Styled_App className="App">
        <Homepage />
      </Styled_App>
  );
}

export default App;
