// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage_Header = styled.h1`
    display: flex;
    
    font-size: 30px;

    padding: 10px;

    border: 1px dashed black;
    `

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Header() {
    return (
        <Styled_Homepage_Header className="Homepage Header">
            Homepage Header
        </Styled_Homepage_Header>
    )
}

// EXPORTS
export default Homepage_Header;