// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import SelectedTitle from './SelectedTitle.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageLeft = styled.div`
    display: flex;
    align-items: center;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageLeft( {Active_Title} ) {
    return (
        <StyledHomepageLeft className="Homepage LEFT">
            <SelectedTitle Active_Title={Active_Title} />
        </StyledHomepageLeft>
    );
}

// EXPORTS
export default HomepageLeft;