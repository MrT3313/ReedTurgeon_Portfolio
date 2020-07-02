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
    
    & .title, .subTitle {
        display: flex;
        justify-content: center;
    }

    & .title {
        font-size: 3.75rem;
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
                Please Choose a Category
            </div>
        </StyledSelectedTitle>
    )
}

// EXPORTS
export default SelectedTitle;