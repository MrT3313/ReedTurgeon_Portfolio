// IMPORTS
import React from 'react';

// COMPONENTS
import HomepageHeader from '../header/Header.js'
import HomepageSelector from '../selector/HomepageSelector.js'
import CodebaseFooter from '../footer/CodebaseFooter.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding-right: 10px;

    & .Homepage_Selector_Wrapper {
        display: flex;
        flex-grow: 1;
        align-items: center;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageRight( {width, Active_Title, Active_Tab} ) {
    return (
        <StyledHomepageRight className="Homepage_RIGHT">
            <HomepageHeader />
            <div className="Homepage_Selector_Wrapper">
                <HomepageSelector 
                    Active_Title={Active_Title} 
                    Active_Tab={Active_Tab} 
                />
            </div>
            <CodebaseFooter />
        </StyledHomepageRight>
    );
}

// EXPORTS
export default HomepageRight;