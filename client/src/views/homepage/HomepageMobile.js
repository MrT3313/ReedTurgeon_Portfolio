// IMPORTS
import React from 'react'

// COMPONENTS
import HomepageSelector from '../../components/selector/HomepageSelector.js'
import SelectedTitle from '../../components/SelectedTitle.js'

import Header from '../../components/header/Header.js'
import HobbiesFooter from '../../components/footer/FooterHobbies.js'
import HomepageLine from '../../components/HomepageLine.js'

// transform: [{ rotate: '30deg'}],

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 20px 0;

    & .BOTTOM {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageMobile( {width, Active_Title, Active_Tab} ) {
// console.log(width)
// -- //
    // Return 
    return (
        <StyledHomepageMobile className="Styled_Homepage">
            <Header />
            <HomepageLine margin={[5,0,5,0]}/>
            <SelectedTitle 
                width={width}
                Active_Title={Active_Title}
            />
            <HomepageLine />
            <HomepageSelector 
                Active_Title={Active_Title} 
                Active_Tab={Active_Tab} 
            />
            <HomepageLine margin={[5,0,5,0]}/>
            <div className="MobileHomepage_Content BOTTOM">
                <HobbiesFooter />
            </div>
        </StyledHomepageMobile>
    )
}

// EXPORTS
export default HomepageMobile