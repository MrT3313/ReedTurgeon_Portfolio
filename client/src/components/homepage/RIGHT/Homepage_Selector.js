// IMPORTS
import React from 'react';

// COMPONENTS

// STYLES
import styled from 'styled-components'

// STYLED COMPONENTS
const Styled_Homepage_Selector = styled.div`
    display: flex;
    
    font-size: 30px;

    // height: auto;
    padding: 10px;

    border: 1px dashed black;
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
        <Styled_Homepage_Selector 
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
        </Styled_Homepage_Selector>
    )
}

// EXPORTS
export default Homepage_Selector;