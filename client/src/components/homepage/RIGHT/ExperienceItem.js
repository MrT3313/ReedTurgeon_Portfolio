// IMPORTS
import React from 'react'

// COMPONENTS

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 5px 0 5px 15px;
    font-size: .5em;


    & .Education_Item {
        display: flex;
        width: 100%;
    }
    
    & .TOP {
        justify-content: space-between;

        & .Company {
            font-weight: bold;
            font-size: 1.25em;
        }
    }

    & .BOTTOM {
        flex-direction: column;
        align-items: flex-start;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function ExperienceItem( {item} ) {
    return (
        <StyledExperienceItem className="Styled ExperienceItem">
            <div className="Education_Item TOP">
                <div className="Company">{item.company}</div>
                <div className="Title">{item.title}</div>
                <div>Date</div>
            </div>
            <div className="Education_Item BOTTOM">
                <ul>
                    {item.bullets.map((bullet, index) => {
                        return (
                            <li>{bullet}</li>
                        )
                    })}
                </ul>
            </div>
        </StyledExperienceItem>
    )
}

// EXPORTS
export default ExperienceItem