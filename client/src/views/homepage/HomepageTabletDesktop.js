// IMPORTS
import React, {useState} from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import HomepageLeft from '../../components/desktopHomepage/HomepageLeft.js'
import HomepageRight from '../../components/desktopHomepage/HomepageRight.js'
import HomepageLine from '../../components/HomepageLine.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepage_TabletDesktop = styled.div`
    display: flex;
    justify-content: center;

    // width: 90%;
    padding: 50px 0;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageTabletDesktop( {width, Active_Title, Active_Tab} ) {
console.log(width)
// -- //
    // Return
    return (
        <StyledHomepage_TabletDesktop className="Styled_Homepage">
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
        </StyledHomepage_TabletDesktop>
    )
}

// EXPORTS
export default HomepageTabletDesktop
