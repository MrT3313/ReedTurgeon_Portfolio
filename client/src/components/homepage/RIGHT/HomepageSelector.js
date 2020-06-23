// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const StyledHomepageSelector = styled.div`
    display: flex;
    
    font-size: 30px;
    padding: 10px;

    border: 1px dashed black;

    & li {
        margin-bottom: 5px;
    }
`

// STATE
const links = [
    'Experience', 
    'Projects',
    'Education',
    'Resume',
]

// __MAIN FUNCTIONAL COMPONENT__
function Homepage_Selector( {Active_Title} ) {
    return (
        <StyledHomepageSelector 
            className="Homepage Selector"
            onMouseLeave={() => Active_Title[1]('Welcome!')}
        >
            <ul>
                {links.map((title, key) => {
                    console.log(title)
                    return (
                        <li 
                            key={key}
                            onMouseEnter={() => Active_Title[1](title)}
                        >
                            {title}
                        </li>
                    )
                })}
            </ul>
        </StyledHomepageSelector>
    )
}

// EXPORTS
export default Homepage_Selector;