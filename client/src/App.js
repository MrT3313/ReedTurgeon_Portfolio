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

  min-height: 100%;
  min-width: 100%;

  background-color: ${props => props.theme.primary.color};

`

// __MAIN FUNCTIONAL COMPONENT__ 
function App() {
  return (
      <StyledApp className="Styled App">
        <Homepage />
      </StyledApp>
  );
}

// EXPORTS
export default App;
