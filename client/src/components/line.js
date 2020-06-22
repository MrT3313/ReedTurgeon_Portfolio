// IMPORTS
import React from 'react'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Line = styled.div`
    background-color: black;
    border: 1px solid black;
`

// __MAIN FUNCTIONAL COMPONENT__
function Line( {width, margin} ) {  
    return (
        <Styled_Line 
            className="Line Component"
            style={{width: `${width}px`, margin: `0 ${margin}px`}}
        >    
        </Styled_Line>
    )
}

// EXPORTS
export default Line