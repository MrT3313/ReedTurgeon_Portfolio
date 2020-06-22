// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import Selected_Title from '../homepage/Selected_Title.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage_LEFT = styled.div`
    display: flex;
    align-items: center;
`

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_LEFT() {
    return (
        <Styled_Homepage_LEFT className="Homepage LEFT">
            <Selected_Title />
        </Styled_Homepage_LEFT>
    );
}

// EXPORTS
export default Homepage_LEFT;