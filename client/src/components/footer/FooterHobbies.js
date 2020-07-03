// IMPORTS
import React from 'react'

// ICONS
// 1 - Hobbies
import RunningIcon from '../../assets/icons/hobbies/Running.svg'
import SwimmingIcon from '../../assets/icons/hobbies/Swimming.svg'
import BikerIcon from '../../assets/icons/hobbies/Biker.svg'

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledFooterHobbies = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    & .Footer_Content {
        display: flex;
        justify-content: space-around;
    }

    // & .Hobbies {
    //     border-bottom: 1px solid black;
    // }

    & .Languages {
        display: flex;
        justify-content: space-around;
        
        width: 50%;
    }

    & .Frontend {
        display: flex;
        justify-content: space-around;

        width: 70%;
    }

    & .Styling {
        display: flex;
        justify-content: space-around;

        width: 90%;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function SkillsFooter() {
    return (
        <StyledFooterHobbies className='Footer'>
            <div className="Footer_Content Hobbies">
                <img src={RunningIcon} width='40' height='40' alt='RunningIcon'/> 
                <img src={SwimmingIcon} width='40' height='40' alt='SwimmingIcon'/> 
                <img src={BikerIcon} width='40' height='40' alt='BikerIcon'/> 
            </div>
        </StyledFooterHobbies>
    )
}

// EXPORTS
export default SkillsFooter