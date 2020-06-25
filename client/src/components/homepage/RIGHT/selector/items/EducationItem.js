// IMPORTS
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledEducationItem = styled.div`
    display: flex
    flex-direction: column;

    margin: 15px 0 15px 15px;

    & .Education_Item, Education_Content {
        display: flex;
        font-size: 1.25rem;
    }

    & .TOP {
        justify-content: space-between;
        align-items: center;

        // margin-bottom: 10px;
        width: 100%;

        & .Title, .Date {
            font-size: 1.25rem;
        }

        & .Title {
            font-weight: bold
        }
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function EducationItem( {item} ) {
    return (
        <StyledEducationItem>
            <div className="Education_Item TOP">
                <div className="Education_Content Title">{item.name}</div>
                <div className="Education_Content Location">{item.location}</div>
                <div className="Education_Content Date">{item.date}</div>
            </div>
            <div className="Education_Item BOTTOM">
                <div className="Education_Content Name">{item.title}</div>
            </div>
        </StyledEducationItem>
    )
}

// EXPORTS
export default EducationItem