// https://usehooks.com/useWindowSize/
// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/




// IMPORTS
import React, {useState, useEffect} from 'react';

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

  & .AppContainer {
    display: flex;
    min-height: 100vh;
    max-width: 1000px;
  }
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
          <div className='AppContainer'>
            <HomepageTabletDesktop
              width={width} 
              Active_Title={[activeTitle, setActiveTitle]} 
              Active_Tab={[activeTab, setActiveTab]}
            />
            {/* <div>Update The Homepage</div> */}
          </div>
        </StyledApp>
    );  
  } else {
    return (
      <StyledApp className="Styled_App">
        <div className='AppContainer'>
          <HomepageMobile 
            width={width} 
            Active_Title={[activeTitle, setActiveTitle]} 
            Active_Tab={[activeTab, setActiveTab]}
          />
        </div>
      </StyledApp>
    );
  }

}

// EXPORTS
export default App;
