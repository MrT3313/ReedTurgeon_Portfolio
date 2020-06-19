// IMPORTS
import React from 'react';

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage = styled.div`
    background-color: ${props => props.theme.primary.color}
`

// __MAIN FUNCTIONAL COMPONENT__
function Homepage() {
    return (
        <Styled_Homepage>
            Homepage
        </Styled_Homepage>
        // <h1>
        //     Homepage
        // </h1>
    )
}

// EXPORTS
export default Homepage
