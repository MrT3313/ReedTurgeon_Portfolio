// IMPORTS
import React from 'react'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledLine = styled.div`
    background-color: black;
    border: 1px solid black;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageLine( {width, margin} ) {  
    return (
        <StyledLine 
            className="Line Component"
            style={{width: `${width}px`, margin: `0 ${margin}px`}}
        >    
        </StyledLine>
    )
}

// EXPORTS
export default HomepageLine