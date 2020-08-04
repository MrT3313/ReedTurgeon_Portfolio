// IMPORTS 
import React from 'react'

// STYLED
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledCodebaseFooter = styled.div`
    display: flex;

    font-size: 1.25rem;

    & a {
        color: black;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function CodebaseFooter(){
    return (
        <StyledCodebaseFooter>
            <a  className="Project_Content Link" style={{textDecoration: 'none'}}
                href='https://github.com/MrT3313/ReedTurgeon_Portfolio' target="_blank" rel="noopener noreferrer"
            >
                Portfolio Codebase
            </a>
        </StyledCodebaseFooter>
    )
}

// EXPORTS
export default CodebaseFooter