// IMPORTS
import React from 'react'

// COMPONENTS

// STYLED
import styled from 'styled-components'
import { sizes, devices } from '../../../styles/responsiveSizes.js'

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
            font-size: 1rem;
            font-weight: bold;
        }
        
        & .Title, .Date {
            font-size: 1rem;
        }
    }

    & .MIDDLE {
        justify-content: flex-start;
        font-style: italic;
        font-size: .9rem;

        margin-bottom: 10px;
    }

    & .BOTTOM {
        flex-direction: column;

        display: none;
        
        & li {
            justify-content: flex-start;
            
            display: list-item;
            list-style-type: disc;
            list-style-position: outside;

            font-size: .9rem;
            
            margin: 0 0 5px 15px;
        }
    }

    :hover {
        & .BOTTOM {
            display: flex;
        }
    }

    // // MEDIA QUERIES
    // // 1 - LAPTOP
    // @media ${devices.laptop} {
    //     background-color: blue;
    //     width: ${sizes.laptop.content_width};
    // }

    // // 2 - TABLET
    // @media ${devices.tablet} {
    //     background-color: red;
    //     width: ${sizes.tablet.content_width};

    //     .TOP {
    //         flex-direction: column;
    //         align-items: flex-start;
    //     }
    // }
    
    // // 3 - MOBILE
    // @media ${devices.mobile} {
    //     background-color: yellow;
    //     width: ${sizes.mobile.content_width};
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