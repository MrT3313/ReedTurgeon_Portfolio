// https://usehooks.com/useWindowSize/
// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/




// IMPORTS
import React, {useState, useEffect} from 'react';
import useWindowSize from './hooks/useWindowSize.js'

// COMPONENTS
// - 1 - VIEWS 
import HomepageTabletDesktop from './views/homepage/HomepageTabletDesktop.js'
import HomepageMobile from './views/homepage/HomepageMobile.js'
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
  // STATE
  const [width, setWidth] = useState(window.innerWidth)
  const [activeTitle, setActiveTitle] = useState('Welcome!')
  const [activeTab, setActiveTab] = useState(false)

  // USE EFFECT
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  
  // Conditional Rendering 
  if(width > 500) {
    return (
        <StyledApp className="Styled_App">
          <HomepageTabletDesktop 
            Active_Title={[activeTitle, setActiveTitle]} 
            Active_Tab={[activeTab, setActiveTab]}
          />
          {/* <div>Update The Homepage</div> */}
        </StyledApp>
    );  
  } else {
    return (
        <StyledApp className="Styled_App">
          <HomepageMobile 
            Active_Title={[activeTitle, setActiveTitle]} 
            Active_Tab={[activeTab, setActiveTab]}
          />
        </StyledApp>
    );
  }

}

// EXPORTS
export default App;
