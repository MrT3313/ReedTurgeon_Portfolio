// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Selected_Title = styled.h2`
    display: flex;
    justify-content: center;

    min-width: 350px;
    padding: 10px;
    
    font-size: 60px;

    border: 1px dashed black;
    `

// __MAIN FUNCTIONAL COMPONENT__
function Selected_Title( {Active_Title} ) {
    return (
        <Styled_Selected_Title className="Homepage Selected Title">
            {Active_Title[0]}
        </Styled_Selected_Title>
    )
}

// EXPORTS
export default Selected_Title;