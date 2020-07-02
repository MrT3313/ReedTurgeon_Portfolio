// IMPORTS
import React from 'react'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledLine = styled.div`
    background-color: black;
    border: 1px solid black;
    border-radius: 25px;

    margin: 10px 0
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageLine() {  
    return (
        <StyledLine 
            className="Line_Component"
        >    
        </StyledLine>
    )
}

// EXPORTS
export default HomepageLine