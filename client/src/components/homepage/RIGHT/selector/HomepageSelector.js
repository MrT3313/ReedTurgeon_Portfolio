// IMPORTS
import React from 'react';

// COMPONENTS
import Experience from './itemFactory/Experience.js'
import Projects from './itemFactory/Projects.js'
import Education from './itemFactory/Education.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageSelector = styled.div`
    display: flex;

    width: 100%;
    padding: 10px;

    & ul {
        width: 100%;
    }

    & .HomepageSelector_ListItem {
        margin: 10px 0;
        font-size: 2rem;
    }
`

// STATE
const links = [
    ['Experience', <Experience />], 
    ['Projects', <Projects />],
    ['Education', <Education />],
    // ['Resume'],
]

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Selector( {Active_Title, Active_Tab} ) {
    return (
        <StyledHomepageSelector 
            className="Styled_Homepage_Selector"
            onMouseLeave={() => Active_Title[1]('Welcome!')}
        >
            <ul>
                {links.map((item, key) => {
                    return (
                        <div 
                            key={key}
                            onMouseEnter={() => Active_Title[1](item[0])}
                        >
                            <li
                                className="HomepageSelector_ListItem"
                                onClick={() => Active_Tab[1](item[0])}
                            >
                                {item[0]}
                            </li>
                            {Active_Tab[0] !== false && Active_Tab[0] === item[0] ? item[1] : null}
                        </div>
                    )
                })}
            </ul>
        </StyledHomepageSelector>
    )
}

// EXPORTS
export default Homepage_Selector;