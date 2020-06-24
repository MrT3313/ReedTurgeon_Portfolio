// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import HomepageHeader from './Header.js'
import HomepageSelector from './HomepageSelector.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & .Homepage_Selector_Wrapper {
        display: flex;
        flex-grow: 1;
        align-items: center;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageRight( {Active_Title, Active_Tab} ) {
    return (
        <StyledHomepageRight 
            className="Homepage_RIGHT"
            onMouseLeave={() => Active_Tab[1](false)}
        >
            <HomepageHeader />
            <div className="Homepage_Selector_Wrapper">
                <HomepageSelector 
                    Active_Title={Active_Title} 
                    Active_Tab={Active_Tab} 
                />
            </div>
        </StyledHomepageRight>
    );
}

// EXPORTS
export default HomepageRight;