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
    justify-content: flex-end;

    width: 100%;
    

    & .Footer_Content {
        display: flex;
        justify-content: space-around;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function HobbiesFooter( {width} ) {
    return (
        <StyledFooterHobbies className='Footer'
            // styles={ width > 500 && {height: '400px'} }
            style={ width > 500 ? 
                {height: '400px'} : 
                {height: '50px'} 
            }
        >
            <div className="Footer_Content Hobbies">
                <img src={RunningIcon} width='40' height='40' alt='RunningIcon'/> 
                <img src={SwimmingIcon} width='40' height='40' alt='SwimmingIcon'/> 
                <img src={BikerIcon} width='40' height='40' alt='BikerIcon'/> 
            </div>
        </StyledFooterHobbies>
    )
}

// EXPORTS
export default HobbiesFooter