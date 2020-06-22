// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS 
import Homepage from './views/Homepage.js'

// - 2 - COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_App = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;

  background-color: ${props => props.theme.primary.color};

`

// __MAIN FUNCTIONAL COMPONENT__ 
function App() {
  return (
      <Styled_App className="Styled App">
        <Homepage />
      </Styled_App>
  );
}

// EXPORTS
export default App;
