// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import SelectedTitle from './SelectedTitle.js'
import Footer from './footer/Footer.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageLeft( {Active_Title} ) {
    return (
        <StyledHomepageLeft className="Homepage_LEFT">
            <SelectedTitle Active_Title={Active_Title} />
            <Footer />
        </StyledHomepageLeft>
    );
}

// EXPORTS
export default HomepageLeft;