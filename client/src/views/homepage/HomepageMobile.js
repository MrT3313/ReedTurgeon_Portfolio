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
    justify-content: space-around;
`

// __MAIN FUNCTIONAL COMPONENT__
function HomepageMobile( {width, Active_Title, Active_Tab} ) {
// console.log(width)
// -- //
    // Return 
    return (
        <StyledHomepage_Mobile className="Styled_Homepage">
            <div className="MobileHomepage_Content">
                <Header />
                <HomepageLine margin={[5,0,5,0]}/>
                <SelectedTitle 
                    width={width}
                    Active_Title={Active_Title}
                />
                <HomepageLine />
            </div>
            {/* <div className="MobileHomepage_Content"> */}
                <HomepageSelector 
                    Active_Title={Active_Title} 
                    Active_Tab={Active_Tab} 
                />
            {/* </div> */}
            <div className="MobileHomepage_Content">
                <HomepageLine />
                <Footer />
            </div>
        </StyledHomepage_Mobile>
    )
}

// EXPORTS
export default HomepageMobile