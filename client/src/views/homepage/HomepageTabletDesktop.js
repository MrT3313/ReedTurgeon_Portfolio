// IMPORTS
import React, {useState} from 'react';

// COMPONENTS
// - 1 - VIEWS

// - 2 - COMPONENTS
import HomepageLeft from '../../components/homepage/HomepageLeft.js'
import HomepageRight from '../../components/homepage/HomepageRight.js'
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
function HomepageTabletDesktop( {Active_Title, Active_Tab} ) {
    // Return
    return (
        <StyledHomepage_TabletDesktop className="Styled_Homepage">
            <HomepageLeft Active_Title={Active_Title} />
            <HomepageLine width={2} margin={15}/>
            <HomepageRight 
                Active_Title={Active_Title}  
                Active_Tab={Active_Tab}
            />
        </StyledHomepage_TabletDesktop>
    )
}

// EXPORTS
export default HomepageTabletDesktop
