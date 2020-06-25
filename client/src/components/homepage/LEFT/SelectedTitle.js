// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledSelectedTitle = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex-grow: 1;

    // min-width: 300px;
    
    & .title {
        font-size: 4rem;
        margin-bottom: 10px;
    }
    
    & .subTitle {
        font-size: 1.25rem;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function SelectedTitle( {Active_Title} ) {
    return (
        <StyledSelectedTitle className="Homepage_Selected_Title">
            <div className="title">
                {Active_Title[0]}
            </div>
            <div className="subTitle">
                Please Choose a Category to Explore
            </div>
        </StyledSelectedTitle>
    )
}

// EXPORTS
export default SelectedTitle;