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

    width: 80%;
    padding: 50px;
`

// __MAIN FUNCTIONAL COMPONENT__
function Homepage() {
    // State
    const [selectedTitle, setSelectedTitle] = useState('Welcome!')

    // Return
    return (
        <StyledHomepage className="Styled Homepage">
            <HomepageLeft Active_Title={[selectedTitle, setSelectedTitle]} />
            <HomepageLine width={2} margin={10}/>
            <HomepageRight Active_Title={[selectedTitle, setSelectedTitle]} />
        </StyledHomepage>
    )
}

// EXPORTS
export default Homepage
