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

    width: 210px;

    & .title, .subTitle {
        display: flex;
        justify-content: center;
    }

    & .title {
        font-size: 3.15rem;
        margin-bottom: 10px;
    }
    
    & .subTitle {
        font-size: 1.25rem;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function SelectedTitle( {width, Active_Title} ) {

    return (
        <StyledSelectedTitle 
            className="Homepage_Selected_Title"
            style={ width > 500 ? {flexGrow: 1, margin: '0 10px 0 10px'} : {flexGrow: 0} }
        >
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