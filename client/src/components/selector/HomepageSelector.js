// IMPORTS
import React from 'react';

// COMPONENTS
import Experience from './itemFactory/Experience.js'
import Projects from './itemFactory/Projects.js'
import Education from './itemFactory/Education.js'
import Skills from './itemFactory/Skills.js'

// PDF
import Resume_PDF from '../../assets/Resume.pdf'

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageSelector = styled.div`
    display: flex;
    width: 100%;

    & ul {
        width: 100%;
        text-decoration: none;
    }

     & li { 
         display: flex;
         justify-content: center;

         cursor: pointer;
         color: black;
    }

    & a {
        text-decoration: none;
    }

    & .HomepageSelector_ListItem {
        margin: 20px 0;
        font-size: 2rem;
    } 
`

// STATE
const links = [
    ['Projects', <Projects />],
    ['Skills', <Skills />],
    ['Experience', <Experience />], 
    ['Education', <Education />],
    // ['Resume'],
]

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Selector( {Active_Title, Active_Tab} ) {
    return (
        <StyledHomepageSelector 
            className="Styled_Homepage_Selector"
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
                                className="HomepageSelector_ListItem"
                                onClick={() => Active_Tab[1](item[0])}
                            >
                                {item[0]}
                            </li>
                            {Active_Tab[0] !== false && Active_Tab[0] === item[0] ? item[1] : null}
                        </div>
                    )
                })}
                <a 
                    className="HomepageSelector_ListItem" 
                    href={Resume_PDF} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => Active_Title[1]('Resume')}
                >
                    <li>Resume</li>
                </a>
            </ul>
        </StyledHomepageSelector>
    )
}

// EXPORTS
export default Homepage_Selector;