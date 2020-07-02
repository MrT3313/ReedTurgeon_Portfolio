// IMPORTS
import React, {useState} from 'react'

// COMPONENTS
import HomepageSelector from '../../components/selector/HomepageSelector.js'
import SelectedTitle from '../../components/SelectedTitle.js'

import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'
import HomepageLine from '../../components/HomepageLine.js'

// transform: [{ rotate: '30deg'}],

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepage_Mobile = styled.div`
    display: flex;
    flex-direction: column;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageMobile( {Active_Title, Active_Tab} ) {
    // Return 
    return (
        <StyledHomepage_Mobile className="Styled_Homepage">
            <Header />
            <HomepageLine margin={[5,0,5,0]}/>
            <SelectedTitle 
                Active_Title={Active_Title}
            />
            <HomepageLine />
            <HomepageSelector 
                Active_Title={Active_Title} 
                Active_Tab={Active_Tab} 
            />
            <HomepageLine />
            <Footer />
        </StyledHomepage_Mobile>
    )
}

// EXPORTS
export default HomepageMobile