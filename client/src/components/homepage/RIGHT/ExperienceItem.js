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


    & .Education_Item {
        display: flex;
        width: 100%;
    }
    
    & .TOP {
        justify-content: space-between;
        align-items: center;

        & .Company {
            font-weight: bold;
        }
        
        & .Title, .Date {
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
                {/* <div>-</div> */}
                <div className="Title">{item.title}</div>
                {/* <div>-</div> */}
                <div className="Date">{item.date}</div>
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