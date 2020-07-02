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
function HomepageLine( {width} ) {
    return (
        <StyledLine 
            className="Line_Component"
            style={ width > 500 ? {margin: '0 10px'} : {margin: '10px 0'}}
        >    
        </StyledLine>
    )
}

// EXPORTS
export default HomepageLine