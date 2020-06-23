// IMPORTS
import React, {useState} from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import Homepage_LEFT from '../components/homepage/LEFT/Homepage_LEFT.js'
import Homepage_RIGHT from '../components/homepage/RIGHT/Homepage_RIGHT.js'
import Homepage_LINE from '../components/Homepage_LINE.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage = styled.div`
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
        <Styled_Homepage className="Styled Homepage">
            <Homepage_LEFT Active_Title={[selectedTitle, setSelectedTitle]} />
            <Homepage_LINE width={2} margin={10}/>
            <Homepage_RIGHT Active_Title={[selectedTitle, setSelectedTitle]} />
        </Styled_Homepage>
    )
}

// EXPORTS
export default Homepage
