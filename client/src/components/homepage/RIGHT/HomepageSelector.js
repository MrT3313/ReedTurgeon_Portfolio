// IMPORTS
import React from 'react';

// COMPONENTS
import Experience from './Experience.js'
import Projects from './Projects.js'
import Education from './Education.js'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageSelector = styled.div`
    display: flex;

    width: 100%;
    
    font-size: 30px;
    padding: 10px;

    & ul {
        width: 100%;
    }

    & li {
        margin: 10px 0;
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
            className="Homepage Selector"
            onMouseLeave={() => {
                Active_Title[1]('Welcome!')
                Active_Tab[1](false)
            }}
        >
            <ul>
                {links.map((item, key) => {
                    return (
                        <div 
                            key={key}
                            onMouseEnter={() => Active_Title[1](item[0])}
                        >
                            <li
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