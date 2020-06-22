// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage_Selector = styled.div`
    display: flex;
    
    font-size: 30px;

    // height: auto;
    padding: 10px;

    border: 1px dashed black;
    `

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Selector() {
    return (
        <Styled_Homepage_Selector className="Homepage Selector">
            Homepage Selector
        </Styled_Homepage_Selector>
    )
}

// EXPORTS
export default Homepage_Selector;