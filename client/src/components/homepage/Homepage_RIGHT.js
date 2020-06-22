// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import Homepage_Header from '../homepage/Header.js'
import Homepage_Selector from '../homepage/Homepage_Selector.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage_RIGHT = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & .Homepage_Selector_Wrapper {
        display: flex;
        flex-grow: 1;
        align-items: center;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_RIGHT() {
    return (
        <Styled_Homepage_RIGHT className="Homepage RIGHT">
            <Homepage_Header />
            <div className="Homepage_Selector_Wrapper">
                <Homepage_Selector />
            </div>
        </Styled_Homepage_RIGHT>
    );
}

// EXPORTS
export default Homepage_RIGHT;