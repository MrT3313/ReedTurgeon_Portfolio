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

    & a {
        color: black;
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
function Homepage_Selector() {
    return (
        <Styled_Homepage_Selector className="Homepage Selector">
            <ul>
                {links.map((title, key) => {
                    console.log(title)
                    return (
                        <li key={key}><a href="#">{title}</a></li>
                    )
                })}
            </ul>
        </Styled_Homepage_Selector>
    )
}

// EXPORTS
export default Homepage_Selector;