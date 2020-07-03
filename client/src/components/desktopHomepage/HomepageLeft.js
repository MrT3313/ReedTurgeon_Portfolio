// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import SelectedTitle from '../SelectedTitle.js'
import Footer from '../footer/FooterHobbies.js'

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
function HomepageLeft( {width, Active_Title, Active_Tab} ) {
    return (
        <StyledHomepageLeft 
            className="Homepage_LEFT"
            onMouseEnter={() => Active_Tab[1](false)}
        >
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