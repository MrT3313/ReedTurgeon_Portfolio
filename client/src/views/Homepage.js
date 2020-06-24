// IMPORTS
import React, {useState} from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import HomepageLeft from '../components/homepage/LEFT/HomepageLeft.js'
import HomepageRight from '../components/homepage/RIGHT/HomepageRight.js'
import HomepageLine from '../components/HomepageLine.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepage = styled.div`
    display: flex;
    justify-content: center;

    width: 90%;
    padding: 50px 0;
`

// __MAIN FUNCTIONAL COMPONENT__
function Homepage() {
    // State
    const [activeTitle, setActiveTitle] = useState('Welcome!')
    const [activeTab, setActiveTab] = useState(false)

    // Return
    return (
        <StyledHomepage 
            className="Styled_Homepage"
        >
            <HomepageLeft Active_Title={[activeTitle, setActiveTitle]} />
            <HomepageLine width={2} margin={15}/>
            <HomepageRight 
                Active_Title={[activeTitle, setActiveTitle]} 
                Active_Tab={[activeTab, setActiveTab]}
            />
        </StyledHomepage>
    )
}

// EXPORTS
export default Homepage
