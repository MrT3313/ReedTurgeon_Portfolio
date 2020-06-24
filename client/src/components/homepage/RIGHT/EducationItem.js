// IMPORTS
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledEducationItem = styled.div`
    display: flex
    flex-direction: column;

    margin: 5px 0 5px 15px;

    & .Education_Item {
        display: flex;
        width: 100%;
    }

    & .TOP {
        justify-content: space-between;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function EducationItem( {item} ) {
    return (
        <StyledEducationItem>
            <div className="Education_Item TOP">
                <div>{item.title}</div>
                <div>{item.date}</div>
            </div>
            <div className="Education_Item BOTTOM">
                <div>{item.name}</div>
                <div>{item.location}</div>
            </div>
        </StyledEducationItem>
    )
}

// EXPORTS
export default EducationItem