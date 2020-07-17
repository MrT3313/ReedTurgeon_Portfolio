// IMPORTS
import React from 'react'

// COMPONENTS

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    padding: 10px;
    margin: 10px 10px 10px 10px;

    border: 1px solid black;
    border-radius: 5px;

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

        & .Company {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        & .Title, .Date {
            font-size: 1.25rem;
        }
    }

    & .MIDDLE {
        justify-content: flex-start;
        font-style: italic;
        font-size: 1.5rem;

        margin-bottom: 10px;
    }

    & .BOTTOM {
        flex-direction: column;

        // display: none;
        
        & li {
            justify-content: flex-start;
            
            display: list-item;
            list-style-type: disc;
            list-style-position: outside;

            font-size: 1.2rem;
            
            margin: 0 0 5px 15px;
        }
    }

    // :hover {
    //     & .BOTTOM {
    //         display: flex;
    //     }
    // }
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