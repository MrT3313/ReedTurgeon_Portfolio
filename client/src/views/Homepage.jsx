// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import Homepage_LEFT from '../components/homepage/Homepage_LEFT.js'
import Homepage_RIGHT from '../components/homepage/Homepage_RIGHT.js'
import Line from '../components/line.js'

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
    return (
        <Styled_Homepage className="Styled Homepage">
            <Homepage_LEFT />
            <Line className="Line Component" width={2} margin={10}/>
            <Homepage_RIGHT />
        </Styled_Homepage>
    )
}

// EXPORTS
export default Homepage
