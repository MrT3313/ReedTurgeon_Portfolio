// IMPORTS
import React from 'react'

// ICONS
import RunningIcon from '../../assets/icons/Running.svg'
import SwimmingIcon from '../../assets/icons/Swimming.svg'
import BikerIcon from '../../assets/icons/Biker.svg'

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
`

// __MAIN FUNCTIONAL COMPONENT
function Footer() {
    return (
        <StyledFooter className='Footer'>
            <img src={RunningIcon} width='40' height='40' alt='RunningIcon'/> 
            <img src={SwimmingIcon} width='40' height='40' alt='SwimmingIcon'/> 
            <img src={BikerIcon} width='40' height='40' alt='BikerIcon'/> 
        </StyledFooter>
    )
}

// EXPORTS
export default Footer