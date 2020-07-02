// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import SelectedTitle from '../SelectedTitle.js'
import Footer from '../footer/Footer.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    

    & .greeting {
        height: 100%;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageLeft( {width, Active_Title} ) {
    return (
        <StyledHomepageLeft className="Homepage_LEFT">
            <SelectedTitle 
                width={width}
                Active_Title={Active_Title} 
            />
            <Footer />
        </StyledHomepageLeft>
    );
}

// EXPORTS
export default HomepageLeft;