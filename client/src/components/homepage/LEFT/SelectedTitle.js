// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledSelectedTitle = styled.h2`
    display: flex;
    justify-content: center;

    min-width: 350px;
    padding: 10px;
    
    font-size: 60px;

    border: 1px dashed black;
    `

// __MAIN FUNCTIONAL COMPONENT__
function SelectedTitle( {Active_Title} ) {
    return (
        <StyledSelectedTitle className="Homepage Selected Title">
            {Active_Title[0]}
        </StyledSelectedTitle>
    )
}

// EXPORTS
export default SelectedTitle;