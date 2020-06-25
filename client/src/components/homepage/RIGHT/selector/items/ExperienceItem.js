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

    padding: 10px;
    margin: 15px 0 15px 15px;

    border: 1px solid black;
    border-radius: 5px;

    // width: 500px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    & .Experience_Item {
        display: flex;
    }
    
    & .TOP {
        justify-content: space-between;
        align-items: center;

        // width: 100%;

        & .Company {
            font-size: 1.25rem;
            font-weight: bold;
        }
        
        & .Title, .Date {
            font-size: 1.25rem;
        }
    }

    & .MIDDLE {
        justify-content: flex-start;
        font-style: italic;
        font-size: 1.25rem;

        margin-bottom: 10px;
        // width: 100%;
    }

    & .BOTTOM {
        flex-direction: column;
        align-items: flex-start;

        padding-left: 30px;
        font-size: 1.15rem;

        display: none;

        & li {
            list-style-type: disc;
            list-style-position: inside;
        }
    }

    :hover {
        & .BOTTOM {
            display: flex;
        }
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function ExperienceItem( {item} ) {
    return (
        <StyledExperienceItem className="Styled_ExperienceItem">
            <div className="Experience_Item TOP">
                <div className="Company">{item.company}</div>
                <div className="Date">{item.date}</div>
            </div>
            <div className="Experience_Item MIDDLE">
                <div className="Title">{item.title}</div>
            </div>
            <div className="Experience_Item BOTTOM">
                <ul>
                    {item.bullets.map((bullet, index) => {
                        return (
                            <li key={index}>{bullet}</li>
                        )
                    })}
                </ul>
            </div>
        </StyledExperienceItem>
    )
}

// EXPORTS
export default ExperienceItem