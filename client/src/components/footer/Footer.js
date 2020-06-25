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
    justify-content: center;

    width: 100%;

    & img {
        margin-right: 50px;
    }

    & img:last-child {
        margin: 0;
    }
`

// __MAIN FUNCTIONAL COMPONENT
function Footer() {
    return (
        <StyledFooter className='Footer'>
            <img src={RunningIcon} width='40' height='40'/> 
            <img src={SwimmingIcon} width='40' height='40'/> 
            <img src={BikerIcon} width='40' height='40'/> 
        </StyledFooter>
    )
}

// EXPORTS
export default Footer