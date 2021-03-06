// IMPORTS
import React from 'react'

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledEducationItem = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px;
    margin: 10px 10px 10px 10px;

    border: 1px solid black;
    border-radius: 5px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    & .Education_Item, Education_Content {
        display: flex;
    }

    & .TOP {
        justify-content: space-between;
        align-items: center;

        & .Title {
            font-size: 1.5rem;
        }
        
        & .Date {
            font-size: 1.25rem;
        }

        & .Title {
            min-width: 150px;
            font-weight: bold
        }
    }

    & .BOTTOM {
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.25rem;

        & .Name, .Location {
            width: 100%;
        }

        & .Name {
            font-style: italic;
        }
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function EducationItem( {item} ) {
    return (
        <StyledEducationItem className="Styled_EducationItem">
            <div className="Education_Item TOP">
                <div className="Education_Content Title">{item.name}</div>
                <div className="Education_Content Date">{item.date}</div>
            </div>
            <div className="Education_Item BOTTOM">
                <div className="Education_Content Name">{item.title}</div>
                <div className="Education_Content Location">{item.location}</div>
            </div>
        </StyledEducationItem>
    )
}

// EXPORTS
export default EducationItem