// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Selected_Title = styled.h1`
    display: flex;
    
    font-size: 30px;

    padding: 10px;

    border: 1px dashed black;
    `

// __MAIN FUNCTIONAL COMPONENT__
function Selected_Title() {
    return (
        <Styled_Selected_Title className="Homepage Selected Title">
            Selected Title
        </Styled_Selected_Title>
    )
}

// EXPORTS
export default Selected_Title;