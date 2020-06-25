// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS 
import Homepage from './views/Homepage.js'

// - 2 - COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledApp = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;

  background-color: ${props => props.theme.primary.color};



`

// __MAIN FUNCTIONAL COMPONENT__ 
function App() {
  return (
      <StyledApp className="Styled_App">
        <Homepage />
      </StyledApp>
  );
}

// EXPORTS
export default App;
