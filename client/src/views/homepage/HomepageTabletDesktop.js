// IMPORTS
import React from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import HomepageLeft from '../../components/desktopHomepage/HomepageLeft.js'
import HomepageRight from '../../components/desktopHomepage/HomepageRight.js'
import HomepageLine from '../../components/HomepageLine.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageDesktop = styled.div`
    display: flex;
    justify-content: center;

    padding: 50px 0;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageTabletDesktop( {width, Active_Title, Active_Tab} ) {
// console.log(width)
// -- //
    // Return
    return (
        <StyledHomepageDesktop className="Styled_Homepage">
            <HomepageLeft 
                width={width}
                Active_Title={Active_Title} 
            />
            <HomepageLine width={width}/>
            <HomepageRight 
                width={width}
                Active_Title={Active_Title}  
                Active_Tab={Active_Tab}
            />
        </StyledHomepageDesktop>
    )
}

// EXPORTS
export default HomepageTabletDesktop
